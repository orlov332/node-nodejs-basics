import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  return pipeline(
    fs.createReadStream(`${__dirname}/files/fileToCompress.txt`),
    zlib.createGzip(),
    fs.createWriteStream(`${__dirname}/files/archive.gz`)
  );
};

await compress();
