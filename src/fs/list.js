import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const dir = `${__dirname}/files`;

  return fsPromises
    .readdir(dir)
    .catch((err) => {
      if (err.code === 'ENOENT') throw new Error('FS operation failed');
      else throw err;
    })
    .then((files) => files.forEach((file) => console.log(file)));
};

await list();
