import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fsPromises from 'fs/promises';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  const file = `${__dirname}/files/fileToCalculateHashFor.txt`;

  return fsPromises
    .readFile(file)
    .then((content) =>
      crypto.createHash('sha256').update(content).digest('hex')
    );
};

console.log(await calculateHash());
