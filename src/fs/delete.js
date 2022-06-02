import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  const file = `${__dirname}/files/fileToRemove.txt`;

  return fsPromises.rm(file).catch((err) => {
    if (err.code === 'ENOENT') throw new Error('FS operation failed');
    else throw err;
  });
};

await remove();
