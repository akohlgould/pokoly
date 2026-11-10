import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const logosDir = path.join(rootDir, 'public', 'logos');

const { GAMES } = await import('../src/data/games.ts');

const EMOJI_OR_ICON_MAP = {
  'circuit-hacker': { icon: '⚡', color: '#10b981', label: 'HACK' },
  'cursor-siege': { icon: '🛡️', color: '#3b82f6', label: 'WIN95' },
  'echo-location': { icon: '📡', color: '#06b6d4', label: 'SONAR' },
  'diceforge-tactics': { icon: '🎲', color: '#e11d48', label: 'DICE' },
  'floor99': { icon: '⚔️', color: '#d97706', label: 'FL99' },
  'cyberraid': { icon: '🃏', color: '#06b6d4', label: 'DECK' },
  'minitower': { icon: '🏰', color: '#3b82f6', label: 'TOWER' },
  'microrogue': { icon: '♟️', color: '#f1f5f9', label: '1-BIT' },
  'lootgoblin': { icon: '🎒', color: '#10b981', label: 'LOOT' },
  'infinite-minesweeper': { icon: '💣', color: '#eab308', label: 'MINE' },
  'stellar-collapse': { icon: '🪐', color: '#8b5cf6', label: 'ORBIT' },
  'jellydrop': { icon: '🍮', color: '#ec4899', label: 'JELLY' },
  'magnetoblocks': { icon: '🧲', color: '#ef4444', label: 'MAG' },
  'coinstacker': { icon: '🪙', color: '#eab308', label: 'COIN' },
  'liquidsort': { icon: '🧪', color: '#06b6d4', label: 'SORT' },
  'breakout-sandbox': { icon: '🧱', color: '#f59e0b', label: 'SAND' },
  'ragdoll-moonshot': { icon: '🚀', color: '#ec4899', label: 'MOON' },
  'domino-cascade': { icon: '🀄', color: '#3b82f6', label: 'CHAIN' },
  'bouncygolf': { icon: '⛳', color: '#10b981', label: 'GOLF' },
  'bubblewrap': { icon: '🫧', color: '#06b6d4', label: 'POP' },
  'driftline': { icon: '🏎️', color: '#f43f5e', label: 'DRIFT' },
  'flappyduel': { icon: '🐥', color: '#eab308', label: 'FLAP' },
  'typeracer-blitz': { icon: '⌨️', color: '#06b6d4', label: 'TYPE' },
  'perfectslash': { icon: '🗡️', color: '#f43f5e', label: 'SLASH' },
  'beatjumper': { icon: '🎵', color: '#8b5cf6', label: 'BEAT' },
  'cursorsurvivor': { icon: '🎯', color: '#ef4444', label: 'DODGE' },
  'speedpark': { icon: '🅿️', color: '#3b82f6', label: 'PARK' },
  'colorclash': { icon: '🎨', color: '#ec4899', label: 'STROOP' },
  'jumpgrid': { icon: '🐸', color: '#10b981', label: 'JUMP' },
  'quickdraw': { icon: '🤠', color: '#f59e0b', label: 'DRAW' },
  'picross-neon': { icon: '▦', color: '#6366f1', label: 'PICROSS' },
  'lasercircuit': { icon: '🔮', color: '#06b6d4', label: 'LASER' },
  'hexasort': { icon: '⬡', color: '#10b981', label: 'HEXA' },
  'pipemaster': { icon: '🔧', color: '#eab308', label: 'PIPE' },
  'minimetro-planner': { icon: '🚇', color: '#ec4899', label: 'METRO' },
  'sudoku-blitz': { icon: '🔢', color: '#3b82f6', label: 'SUDOKU' },
  'idle-factory': { icon: '⚙️', color: '#f59e0b', label: 'FORGE' },
  'mazemaster': { icon: '🌀', color: '#10b981', label: 'MAZE' },
  'blockslide': { icon: '🧊', color: '#06b6d4', label: '1010' },
  'tangram': { icon: '📐', color: '#f59e0b', label: 'TANGRAM' }
};

GAMES.forEach(game => {
  const filePath = path.join(logosDir, `${game.slug}.svg`);
  if (!fs.existsSync(filePath)) {
    const info = EMOJI_OR_ICON_MAP[game.slug] || {
      icon: '🎮',
      color: game.color || '#3b82f6',
      label: game.slug.toUpperCase().slice(0, 5)
    };

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <defs>
    <linearGradient id="grad-${game.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${info.color}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0a0f1d" />
    </linearGradient>
    <filter id="glow-${game.slug}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="${info.color}" flood-opacity="0.6" />
    </filter>
  </defs>
  <rect width="120" height="120" rx="26" fill="#070a14" />
  <rect x="12" y="12" width="96" height="96" rx="20" fill="url(#grad-${game.slug})" stroke="${info.color}" stroke-width="2" opacity="0.4" />
  <circle cx="60" cy="52" r="30" fill="${info.color}" fill-opacity="0.15" filter="url(#glow-${game.slug})" />
  <text x="60" y="60" font-size="34" text-anchor="middle" dominant-baseline="middle">${info.icon}</text>
  <rect x="24" y="86" width="72" height="18" rx="6" fill="#000000" fill-opacity="0.6" stroke="${info.color}" stroke-width="1" />
  <text x="60" y="99" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle" letter-spacing="1">${info.label}</text>
</svg>`;

    fs.writeFileSync(filePath, svg);
    console.log(`Generated logo: ${game.slug}.svg`);
  }
});

console.log('All missing logos generated successfully!');
