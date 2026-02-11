import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const versionPath = join(projectRoot, 'src/version.ts');
const packageJsonPath = join(projectRoot, 'package.json');

async function generateVersion() {
  try {
    // Read the current version (we need the format)
    const versionContent = await readFile(versionPath, 'utf-8');
    const appVersionMatch = versionContent.match(/APP_VERSION\s*=\s*'([^']*)'/);

    if (!appVersionMatch) {
      console.error('🚨 APP_VERSION not found! Did you create src/version.ts?');
      process.exit(1);
    }

    // Time math! 🧮
    const now = new Date();
    const year = String(now.getFullYear()).slice(-2);
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const minutesSinceYearStart = Math.floor((now - startOfYear) / (1000 * 60));
    
    // Split at 10,000 minutes (roughly weekly)
    const majorMinutes = Math.floor(minutesSinceYearStart / 10000);
    const minorMinutes = String(minutesSinceYearStart % 10000).padStart(4, '0');

    const newVersion = `${year}.${majorMinutes}.${minorMinutes}`;

    // Update package.json (because npm likes it)
    const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
    packageJson.version = newVersion;
    await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    // Update the version file
    const updatedVersionContent = versionContent.replace(
      /APP_VERSION\s*=\s*'[^']*'/,
      `APP_VERSION = '${newVersion}'`
    );
    await writeFile(versionPath, updatedVersionContent);
    
    console.log(`🎉 Version updated: ${newVersion}`);
  } catch (error) {
    console.error('💥 Version generation failed:', error.message);
    process.exit(1);
  }
}

generateVersion();
