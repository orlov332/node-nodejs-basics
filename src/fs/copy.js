import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const srcDir = `${__dirname}/files`;
  const dstDir = `${__dirname}/files_copy`;

  return fsPromises
    .cp(srcDir, dstDir, {
      force: false,
      errorOnExist: true,
      recursive: true,
    })
    .catch((err) => {
      if (err.code === 'ERR_FS_CP_EEXIST' || err.code === 'ENOENT')
        throw new Error('FS operation failed');
      else throw err;
    });
};

await copy();
