import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const cp = spawn('node', [`${__dirname}/files/script.js`, ...args]);

  return Promise.all([
    pipeline(cp.stdout, process.stdout),
    pipeline(process.stdin, cp.stdin),
  ]);
};

await spawnChildProcess(process.argv.slice(2));
