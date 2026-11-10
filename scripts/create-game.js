#!/usr/bin/env node

/**
 * Pokoly High-Volume Game Generator
 *
 * Usage:
 *   node scripts/create-game.js <slug> "<Title>" <subdomain> <category>
 *
 * Example:
 *   node scripts/create-game.js flappy-jet "Flappy Jet: Cyber Wings" flappy arcade
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
if (args.length < 4) {
  console.log(`
Usage:
  node scripts/create-game.js <slug> "<Game Title>" <subdomain> <category>

Categories: word, physics, puzzle, card, arcade

Example:
  node scripts/create-game.js cyber-pong "Cyber Pong: Neon Duel" pong arcade
`);
  process.exit(1);
}

const [slug, title, subdomain, category] = args;
const pascalName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');

console.log(`🚀 Scaffolding new game: ${title} (${slug}) -> ${subdomain}.pokoly.com`);

// 1. Create Game Component: src/games/${pascalName}.astro
const gameComponentPath = path.join(rootDir, 'src', 'games', `${pascalName}.astro`);
if (!fs.existsSync(gameComponentPath)) {
  const componentTemplate = `---
// ${title}
---

<div id="${slug}-wrapper" class="flex flex-col items-center justify-center p-4 select-none">
  <!-- Stats Header -->
  <div class="mb-3 flex w-full max-w-[380px] items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div class="flex items-center gap-1.5">
      <span class="text-gray-400">Score:</span>
      <span id="${slug}-score" class="font-mono text-base font-bold text-brand-neon">0</span>
    </div>
    <div class="flex items-center gap-1.5">
      <span class="text-gray-400">Best:</span>
      <span id="${slug}-best" class="font-mono text-base font-bold text-white">0</span>
    </div>
    <button id="${slug}-reset-btn" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300 hover:text-white transition-colors">
      Restart
    </button>
  </div>

  <!-- Game Canvas -->
  <div class="relative overflow-hidden rounded-2xl border-2 border-brand-border bg-brand-dark shadow-2xl">
    <canvas id="${slug}-canvas" width="360" height="420" class="block"></canvas>

    <div id="${slug}-overlay" class="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-brand-dark/90 backdrop-blur-sm p-6 text-center opacity-0 pointer-events-none transition-opacity">
      <span class="text-4xl">⚡</span>
      <h3 class="font-display text-2xl font-bold text-white mt-1">Game Over</h3>
      <p class="mt-1 text-xs text-gray-300">Final Score: <span id="${slug}-final" class="font-mono font-bold text-brand-gold">0</span></p>
      <button id="${slug}-play-again" class="mt-4 rounded-xl bg-brand-accent px-6 py-2 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform">
        Play Again
      </button>
    </div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('${slug}-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('${slug}-score')!;
  const bestEl = document.getElementById('${slug}-best')!;
  const overlay = document.getElementById('${slug}-overlay')!;
  const finalScoreEl = document.getElementById('${slug}-final')!;
  const playAgain = document.getElementById('${slug}-play-again')!;
  const resetBtn = document.getElementById('${slug}-reset-btn')!;

  let score = 0;
  let best = parseInt(localStorage.getItem('pokoly_${slug}_best') || '0', 10);
  let isGameOver = false;

  bestEl.textContent = best.toString();

  function init() {
    score = 0;
    isGameOver = false;
    scoreEl.textContent = '0';
    overlay.classList.add('opacity-0', 'pointer-events-none');
    draw();
  }

  function draw() {
    ctx.fillStyle = '#0a0b10';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Tap or Click to Play', canvas.width / 2, canvas.height / 2);
  }

  canvas.addEventListener('click', () => {
    if (isGameOver) return;
    score += 10;
    scoreEl.textContent = score.toString();
    sound.blip();
  });

  playAgain.addEventListener('click', init);
  resetBtn.addEventListener('click', init);
  document.getElementById('btn-restart-game')?.addEventListener('click', init);

  init();
</script>
`;
  fs.writeFileSync(gameComponentPath, componentTemplate);
  console.log(`✅ Created component: src/games/${pascalName}.astro`);
}

console.log(`\n🎉 New Game Ready!`);
console.log(`Now add the entry to src/data/games.ts and import into src/pages/games/[id].astro`);
