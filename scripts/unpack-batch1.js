import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BATCH_1 } from './generator/batch1.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function toPascal(slug) {
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

console.log(`Unpacking ${BATCH_1.length} games from BATCH_1...`);

const imports = [];
const conditions = [];
const subdomainMappings = [];

// 1. Write each component to src/games/
for (const item of BATCH_1) {
  const pascal = toPascal(item.meta.slug);
  const filePath = path.join(rootDir, 'src', 'games', `${pascal}.astro`);
  fs.writeFileSync(filePath, item.component.trim() + '\n', 'utf-8');
  console.log(`✓ Created src/games/${pascal}.astro`);

  imports.push(`import ${pascal} from '../../games/${pascal}.astro';`);
  conditions.push(`  {game.id === '${item.meta.id}' && <${pascal} />} `);
  subdomainMappings.push(`  '${item.meta.subdomain}': '/games/${item.meta.slug}',`);
}

// 2. Append new metadata to src/data/games.ts
const gamesTsPath = path.join(rootDir, 'src', 'data', 'games.ts');
let gamesTsContent = fs.readFileSync(gamesTsPath, 'utf-8');

for (const item of BATCH_1) {
  if (!gamesTsContent.includes(`id: '${item.meta.id}'`)) {
    const metaStr = `  ${JSON.stringify(item.meta, null, 2)},`.replace(/"([^"]+)":/g, '$1:');
    gamesTsContent = gamesTsContent.replace(
      'export const GAMES: GameMeta[] = [',
      `export const GAMES: GameMeta[] = [\n${metaStr}`
    );
    console.log(`✓ Added ${item.meta.title} to games.ts`);
  }
}
fs.writeFileSync(gamesTsPath, gamesTsContent, 'utf-8');

// 3. Update src/pages/games/[id].astro
const pageIdPath = path.join(rootDir, 'src', 'pages', 'games', '[id].astro');
let pageContent = fs.readFileSync(pageIdPath, 'utf-8');

const importMarker = "import BrickBreaker from '../../games/BrickBreaker.astro';";
if (!pageContent.includes(imports[0])) {
  pageContent = pageContent.replace(importMarker, `${importMarker}\n${imports.join('\n')}`);
}

const renderMarker = "{game.id === 'breakout' && <BrickBreaker />}";
if (!pageContent.includes(conditions[0].trim())) {
  pageContent = pageContent.replace(renderMarker, `${renderMarker}\n${conditions.join('\n')}`);
}

fs.writeFileSync(pageIdPath, pageContent, 'utf-8');
console.log(`✓ Updated src/pages/games/[id].astro`);

// 4. Update cloudflare/_worker.js
const workerPath = path.join(rootDir, 'cloudflare', '_worker.js');
let workerContent = fs.readFileSync(workerPath, 'utf-8');
const subMarker = "  'bricks': '/games/breakout',";
if (!workerContent.includes(subdomainMappings[0].trim())) {
  workerContent = workerContent.replace(subMarker, `${subMarker}\n${subdomainMappings.join('\n')}`);
  fs.writeFileSync(workerPath, workerContent, 'utf-8');
  console.log(`✓ Updated cloudflare/_worker.js with subdomains`);
}

console.log('🎉 Successfully unpacked all 13 games!');
