import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  const file = `${__dirname}/files/wrongFilename.txt`;
  const newFile = `${__dirname}/files/properFilename.md`;

  return fsPromises
    .stat(newFile)
    .then(() => {
      throw new Error('FS operation failed');
    })
    .catch((statErr) => {
      if (statErr.code === 'ENOENT')
        fsPromises.rename(file, newFile).catch((err) => {
          if (err.code === 'ENOENT') throw new Error('FS operation failed');
          else throw err;
        });
      else throw statErr;
    });
};

await rename();
