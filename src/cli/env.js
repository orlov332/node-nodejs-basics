export const parseEnv = () => {
  const environments = Object.entries(process.env)
    .filter(([name]) => name.startsWith('RSS_'))
    .map(([name, value]) => `${name}=${value}`)
    .join('; ');

  console.log(environments);
};

parseEnv();
