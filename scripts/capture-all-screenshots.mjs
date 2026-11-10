import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'public', 'screenshots');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const { GAMES } = await import('../src/data/games.ts');

const PORT = 4399;

async function startServer() {
  const srv = spawn('python3', ['-m', 'http.server', PORT.toString(), '-d', distDir]);
  await new Promise(r => setTimeout(r, 1200));
  return srv;
}

async function captureGame(page, game) {
  const targetPath = path.join(outDir, `${game.slug}.webp`);
  const url = `http://localhost:${PORT}/games/${game.slug}/`;

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await new Promise(r => setTimeout(r, 800));

    const container = await page.$('#game-viewport-container');
    if (container) {
      await container.screenshot({ path: targetPath, type: 'webp', quality: 85 });
      console.log(`[OK] Captured ${game.slug}`);
      return true;
    }

    const canvas = await page.$('canvas');
    if (canvas) {
      await canvas.screenshot({ path: targetPath, type: 'webp', quality: 85 });
      console.log(`[OK] Captured canvas for ${game.slug}`);
      return true;
    }

    console.warn(`[WARN] No container or canvas found for ${game.slug}`);
    return false;
  } catch (err) {
    console.error(`[ERR] Failed ${game.slug}:`, err.message);
    return false;
  }
}

async function run() {
  console.log(`Serving dist/ on port ${PORT}...`);
  const srv = await startServer();

  try {
    console.log(`Starting screenshot capture for ${GAMES.length} games...`);
    const browser = await puppeteer.launch({
      executablePath,
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--window-size=1200,800'
      ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });

    for (let i = 0; i < GAMES.length; i++) {
      const game = GAMES[i];
      const targetPath = path.join(outDir, `${game.slug}.webp`);
      // If already captured and non-empty, skip unless missing
      if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 2000) {
        console.log(`[SKIP] Already exists: ${game.slug}`);
        continue;
      }
      console.log(`(${i + 1}/${GAMES.length}) Capturing ${game.slug}...`);
      await captureGame(page, game);
    }

    await browser.close();
    console.log('Capture finished successfully!');
  } finally {
    srv.kill();
  }
}

run().catch(console.error);
