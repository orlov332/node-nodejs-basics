import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const file = `${__dirname}/files/fileToRead.txt`;

  return fsPromises
    .readFile(file, 'utf8')
    .catch((err) => {
      if (err.code === 'ENOENT') throw new Error('FS operation failed');
      else throw err;
    })
    .then(console.log);
};

await read();
