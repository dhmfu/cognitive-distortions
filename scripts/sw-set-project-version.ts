import { writeFile, readFile } from 'fs/promises';

await execute();

console.log('app version is updated for sw');

async function execute(): Promise<void> {
  const CONFIG_PATH = 'ngsw-config.json';

  const appVersion = (await import('../package.json')).version;
  const ngswConfig = JSON.parse(await readFile(CONFIG_PATH, { encoding: 'utf8' }));

  ngswConfig.appData.version = appVersion;

  try {
    await writeFile(CONFIG_PATH, JSON.stringify(ngswConfig, null, 2));
  } catch (err) {
    console.log(err);
  }
}