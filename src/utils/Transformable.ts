import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

type T = Record<string, unknown>;

export abstract class Transformable<TData, TReturn extends T | T[]>
{
	outDir: string;

	constructor(outDir: string)
	{
		this.outDir = join(__dirname, '..', '..', 'data', 'Exported', outDir);
	}

	abstract transform(data: TData): TReturn;

	async save(transformedData: TReturn, outName: string, space?: string | number | undefined)
	{
		// TODO: create outDir if not exists
		return writeFile(join(this.outDir, outName), JSON.stringify(transformedData, null, space), 'utf-8');
	}
}
