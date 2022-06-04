import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  return pipeline(
    process.stdin,
    fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`, 'utf8')
  );
};

await write();
