import os from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
  return Promise.all(
    Array.from({ length: os.cpus().length }, (v, i) => 10 + i).map((num) =>
      new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData: num });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      })
        .then((data) => ({ status: 'resolved', data }))
        .catch(() => ({ status: 'error', data: null }))
    )
  );
};

await performCalculations().then(console.log);
