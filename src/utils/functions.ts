import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

export const isMD5 = (source: string) => /^[a-f0-9]{32}$/i.test(source);

export async function getAllFiles(dir: string): Promise<string[]>
{
	const subdirs = await readdir(dir);
	const files = await Promise.all(
		subdirs.map(async (subdir) =>
		{
			const res = join(dir, subdir);
			return (await stat(res)).isDirectory() ? getAllFiles(res) : res;
		}),
	);

	return files.flat();
}
