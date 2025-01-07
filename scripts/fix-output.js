import { copyFile, cp, rm } from 'fs/promises';

await execute();

console.log('File output fixed');

async function execute() {
  const outputPath = 'docs';

  await rm(outputPath, { recursive: true, force: true });

  const inputPath = 'dist/cognitive-distortions';
  const browserPath = `${inputPath}/browser`;
  
  const filterBrowserOut = (src) => !src.startsWith(browserPath);

  try {
    await cp(inputPath, outputPath, { recursive: true, filter: filterBrowserOut });
  } catch (err) {
    console.log(err);

    return;
  }
  
  await cp(browserPath, outputPath, { recursive: true });
  
  const indexPath = `${outputPath}/index.html`;
  const output404Path = `${outputPath}/404.html`;
  
  await copyFile(indexPath, output404Path);

  await rm(inputPath, { recursive: true, force: true });
}