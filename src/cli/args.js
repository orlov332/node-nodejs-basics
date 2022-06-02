export const parseArgs = () => {
  const appArgs = process.argv.slice(2);
  console.log(
    appArgs
      .reduce((res, _, i) => {
        if (i % 2 === 0) res.push(appArgs.slice(i, i + 2));
        return res;
      }, [])
      .map(([name, value]) => `${name.replace('--', '')} is ${value}`)
      .join(', ')
  );
};

parseArgs();
