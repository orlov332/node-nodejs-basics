import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  return pipeline(
    fs.createReadStream(`${__dirname}/files/fileToRead.txt`, 'utf8'),
    process.stdout
  );
};

await read();
