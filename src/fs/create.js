import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const file = `${__dirname}/files/fresh.txt`;
  const data = 'I am fresh and young';

  return writeFile(file, data, { flag: 'wx' }).catch((err) => {
    if (err.code === 'EEXIST') throw new Error('FS operation failed');
    else throw err;
  });
};

await create();
