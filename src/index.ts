import { CustomError } from '@n0bodysec/ts-utils';
import { readFile } from 'fs/promises';
import { AmmunationClassTransform } from './transforms/AmmunationClass';
import { RecipeTransform } from './transforms/Recipe';
import type { AmmunationClass } from './types/AmmunationClass';
import type { IRecipe } from './types/Recipes';
import { getAllJsonFiles } from './utils/functions';
import './utils/setup';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () =>
{
	const args = process.argv.slice(2);
	const type = args[0];
	const dir = args[1];

	if (!type) throw new CustomError('You MUST provide the source type!');
	if (!dir) throw new CustomError('You MUST provide the source dir!');

	// Transform Recipes
	if (type === 'Recipes')
	{
		const files = (await getAllJsonFiles(dir)).filter((x) => x.startsWith('Cook_'));
		const filesData = await Promise.all(files.map((file) => readFile(file, 'utf-8')));

		const transformer = new RecipeTransform();

		await Promise.all(filesData.map(async (f) =>
		{
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			const parsed = transformer.transform(JSON.parse(f)[0] as IRecipe);
			await transformer.save(parsed, (parsed.Name ?? 'undefined') + '.json');
		}));
	}

	// Transform Ammunation Class
	else if (type === 'AmmClass')
	{
		const files = await getAllJsonFiles(dir);
		const filesData = await Promise.all(files.map((file) => readFile(file, 'utf-8')));

		const transformer = new AmmunationClassTransform();

		await Promise.all(filesData.map(async (f) =>
		{
			const json = (JSON.parse(f) as AmmunationClass[]).find((x) => (x.Type?.startsWith('BP_') || x.Type?.startsWith('BPC_')));
			if (json !== undefined)
			{
				const parsed = transformer.transform(json);
				await transformer.save(parsed, (parsed.Name?.replace('Default__', '') ?? 'undefined') + '.json');
			}
		}));
	}

	else
	{
		throw new CustomError('Invalid source type!');
	}
})();
