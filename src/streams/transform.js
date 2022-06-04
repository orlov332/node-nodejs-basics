/* eslint-disable require-jsdoc */
import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

export const transform = async () => {
  return pipeline(
    process.stdin,
    new Transform({
      transform(chunk, encoding, callback) {
        callback(null, [...String(chunk)].reverse().join(''));
      },
    }),
    process.stdout
  );
};

await transform();
