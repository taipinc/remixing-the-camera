import { readdir, mkdir, rm, cp, copyFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const semesters = path.join(root, 'semesters');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const entry of (await readdir(semesters, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isDirectory()) continue;
    const result = spawnSync('npm', ['run', 'build', `--workspace=${entry.name}`], {
        cwd: root,
        stdio: 'inherit',
    });
    if (result.error) throw result.error;
    if (result.status !== 0) process.exit(result.status ?? 1);
    await cp(path.join(semesters, entry.name, 'dist'), path.join(output, entry.name), { recursive: true });
}

await copyFile(path.join(root, 'course-index.html'), path.join(output, 'index.html'));
