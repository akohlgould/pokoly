import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import batches
const { BATCH_1 } = await import('./generator/batch1.js');
const { BATCH_2 } = await import('./generator/batch2.js');
const { BATCH_3 } = await import('./generator/batch3.js');
const { BATCH_4 } = await import('./generator/batch4.js');

const allBatches = [...BATCH_1, ...BATCH_2, ...BATCH_3, ...BATCH_4];

// Filter down to the games that aren't yet in src/data/games.ts
const gamesTsPath = path.join(rootDir, 'src', 'data', 'games.ts');
let gamesTsContent = fs.readFileSync(gamesTsPath, 'utf8');

// Also create metadata for CircuitHacker, CursorSiege, EchoLocation
const EXTRA_EXISTING_METAS = [
  {
    id: 'circuit-hacker',
    slug: 'circuit-hacker',
    subdomain: 'circuithacker',
    title: 'CircuitHacker: Overheat Terminal',
    tagline: 'Defuse corporate firewall security gates before thermal overload collapses the terminal!',
    category: 'puzzle',
    rating: 4.9,
    playCount: '920K',
    color: '#10b981',
    badge: 'Cyber Terminal',
    releaseDate: '2026-11-10',
    keywords: ['circuit hacker game', 'cyberpunk wire puzzle', 'overheat terminal online', 'hacker node puzzle'],
    description: 'Bypass corporate mainframe security nodes under tight thermal constraints. Route electrical currents, divert thermal spikes, and crack terminal gates.',
    controls: [{ key: 'Click & Drag', action: 'Connect logic terminals' }, { key: 'Spacebar', action: 'Vent thermal heat' }],
    instructions: ['Connect node inputs to gate targets.', 'Keep core temperature below 100°C.', 'Bypass all security gates to extract corporate data.'],
    strategies: ['Vent heat right before completing complex circuit loops.'],
    faqs: [{ question: 'What happens if core overheats?', answer: 'The firewall lock downs and resets the sector!' }]
  },
  {
    id: 'cursor-siege',
    slug: 'cursor-siege',
    subdomain: 'cursorsiege',
    title: 'CursorSiege: Malware Defense 95',
    tagline: 'Retro Windows 95 desktop under siege! Defend critical system files from trojans and popups.',
    category: 'arcade',
    rating: 4.8,
    playCount: '1.1M',
    color: '#3b82f6',
    badge: 'Retro Win95',
    releaseDate: '2026-11-10',
    keywords: ['windows 95 game online', 'malware defense arcade', 'cursor siege browser', 'retro os defense'],
    description: 'Your retro operating system is under attack! Swat popup ads, drag trojans into the Recycle Bin, and defend system DLLs.',
    controls: [{ key: 'Mouse Click / Drag', action: 'Swat popups and quarantine trojans' }],
    instructions: ['Close popup windows before they multiply.', 'Drag worm viruses directly into the Recycle Bin.', 'Keep at least one system file alive!'],
    strategies: ['Double-click task manager to wipe screen in emergencies.'],
    faqs: [{ question: 'Does it look like real Win95?', answer: 'Yes, with authentic retro borders, bevels, and icons!' }]
  },
  {
    id: 'echo-location',
    slug: 'echo-location',
    subdomain: 'echolocation',
    title: 'EchoLocation: Sonar Cave Escape',
    tagline: 'Pitch black cavern maze! Fire sonar sound pulses to reveal cave walls and find glowing crystals.',
    category: 'puzzle',
    rating: 4.8,
    playCount: '870K',
    color: '#06b6d4',
    badge: 'Sonar Dark',
    releaseDate: '2026-11-10',
    keywords: ['echolocation game', 'sonar maze browser', 'dark cave puzzle online', 'sound vision puzzle'],
    description: 'You are blind in a pitch-black labyrinth. Emit acoustic sonar pulses to visualize stalactites, currents, and ancient crystals.',
    controls: [{ key: 'Spacebar / Tap', action: 'Emit sonar acoustic pulse' }, { key: 'Arrow Keys / WASD', action: 'Swim forward' }],
    instructions: ['The cave is completely dark.', 'Fire sonar waves to bounce off walls for a split-second glimpse.', 'Collect 3 crystals to open the cavern exit.'],
    strategies: ['Pulse sparingly to conserve sonar energy.'],
    faqs: [{ question: 'Are there hazards in the dark?', answer: 'Yes, silent underwater sea spikes lurk in narrow channels!' }]
  }
];

// Check which batch games need components written
const componentsWritten = [];
const metasToAdd = [...EXTRA_EXISTING_METAS];

// Pascal casing helper
function toPascal(slug) {
  return slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

// Map of custom component names where needed
const CUSTOM_NAMES = {
  'circuit-hacker': 'CircuitHacker',
  'cursor-siege': 'CursorSiege',
  'echo-location': 'EchoLocation',
  'stellar-collapse': 'StellarCollapse',
  'jellydrop': 'JellyDrop',
  'coinstacker': 'CoinStacker',
  'liquidsort': 'LiquidSort',
  'diceforge-tactics': 'DiceForgeTactics',
  'floor99': 'Floor99',
  'cyberraid': 'CyberRaid',
  'minitower': 'MiniTower',
  'microrogue': 'MicroRogue',
  'lootgoblin': 'LootGoblin',
  'infinite-minesweeper': 'InfiniteMinesweeper',
  'driftline': 'DriftLine',
  'breakout-sandbox': 'BreakoutSandbox',
  'bouncygolf': 'BouncyGolf',
  'picross-neon': 'PicrossNeon',
  'lasercircuit': 'LaserCircuit',
  'hexasort': 'HexaSort',
  'pipemaster': 'PipeMaster',
  'minimetro-planner': 'MiniMetroPlanner',
  'idle-factory': 'IdleFactory',
  'mazemaster': 'MazeMaster',
  'blockslide': 'BlockSlide',
  'tangram': 'Tangram',
  'ragdoll-moonshot': 'RagdollMoonshot',
  'domino-cascade': 'DominoCascade',
  'bubblewrap': 'BubbleWrap',
  'perfectslash': 'PerfectSlash',
  'beatjumper': 'BeatJumper',
  'cursorsurvivor': 'CursorSurvivor',
  'speedpark': 'SpeedPark',
  'colorclash': 'ColorClash',
  'jumpgrid': 'JumpGrid',
  'quickdraw': 'QuickDraw'
};

allBatches.forEach(item => {
  const slug = item.meta.slug;
  const pascalName = CUSTOM_NAMES[slug] || toPascal(slug);
  const compPath = path.join(rootDir, 'src', 'games', `${pascalName}.astro`);

  // Write component if not exists
  if (!fs.existsSync(compPath)) {
    fs.writeFileSync(compPath, item.component);
    console.log(`✅ Created component: ${pascalName}.astro`);
    componentsWritten.push(pascalName);
  }

  // Check if already in gamesTsContent
  if (!gamesTsContent.includes(`id: '${item.meta.id}'`)) {
    metasToAdd.push(item.meta);
  }
});

console.log(`Adding ${metasToAdd.length} new game metadata entries into src/data/games.ts...`);

// Inject metas before CATEGORIES export in src/data/games.ts
const insertPoint = gamesTsContent.lastIndexOf('export const CATEGORIES = [');
if (insertPoint !== -1) {
  // Format metas as JSON-like JS objects
  const metasCode = metasToAdd.map(m => {
    return `  {
    id: '${m.id}',
    slug: '${m.slug}',
    subdomain: '${m.subdomain}',
    title: ${JSON.stringify(m.title)},
    tagline: ${JSON.stringify(m.tagline)},
    category: '${m.category}',
    rating: ${m.rating},
    playCount: '${m.playCount}',
    color: '${m.color}',
    badge: ${m.badge ? JSON.stringify(m.badge) : 'undefined'},
    releaseDate: '${m.releaseDate}',
    keywords: ${JSON.stringify(m.keywords, null, 6)},
    description: ${JSON.stringify(m.description)},
    controls: ${JSON.stringify(m.controls, null, 6)},
    instructions: ${JSON.stringify(m.instructions, null, 6)},
    strategies: ${JSON.stringify(m.strategies, null, 6)},
    faqs: ${JSON.stringify(m.faqs, null, 6)}
  },`;
  }).join('\n');

  // Replace trailing `];\n\nexport const CATEGORIES`
  const lastBracket = gamesTsContent.lastIndexOf('];', insertPoint);
  const updatedTs = gamesTsContent.slice(0, lastBracket) + ',\n' + metasCode + '\n];\n\n' + gamesTsContent.slice(insertPoint);
  fs.writeFileSync(gamesTsPath, updatedTs);
  console.log(`✅ src/data/games.ts successfully updated with ${metasToAdd.length} games!`);
}

// Now update src/pages/games/[id].astro to import and render ALL games
const idAstroPath = path.join(rootDir, 'src', 'pages', 'games', '[id].astro');

// Get all files currently in src/games/
const allGameFiles = fs.readdirSync(path.join(rootDir, 'src', 'games'))
  .filter(f => f.endsWith('.astro'))
  .map(f => f.replace('.astro', ''));

// Build complete [id].astro content
const importStatements = allGameFiles.map(name => `import ${name} from '../../games/${name}.astro';`).join('\n');

// Map game.id to component name
// Read games.ts to get all valid ids and slugs
const updatedGamesTs = fs.readFileSync(gamesTsPath, 'utf8');

// Build render cases
const renderCases = [];

allGameFiles.forEach(name => {
  // Convert PascalName to kebab-case
  const kebab = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  renderCases.push(`  {(game.id === '${kebab}' || game.slug === '${kebab}' || game.id === '${name.toLowerCase()}' || game.id === '${name}') && <${name} />}`);
});

// Special known manual mappings:
const specialMappings = `
  {game.id === 'word-guess' && <WordGuess />}
  {game.id === 'fruit-merge' && <FruitMerge />}
  {game.id === 'neon-2048' && <Neon2048 />}
  {game.id === 'solitaire' && <KlondikeSolitaire />}
  {game.id === 'cyber-snake' && <CyberSnake />}
  {game.id === 'minesweeper' && <Minesweeper />}
  {game.id === 'breakout' && <BrickBreaker />}
  {game.id === 'pegdungeon' && <Pegdungeon />}
  {game.id === 'nanojoker' && <Nanojoker />}
  {game.id === 'speed-typing' && <SpeedTyping />}
  {game.id === 'flappy-cyber' && <FlappyCyber />}
  {game.id === 'circuit-hacker' && <CircuitHacker />}
  {game.id === 'cursor-siege' && <CursorSiege />}
  {game.id === 'echo-location' && <EchoLocation />}
  {game.id === 'penumbra-null' && <PenumbraNull />}
`;

const idAstroContent = `---
import GameLayout from '../../layouts/GameLayout.astro';
import { GAMES } from '../../data/games';
import type { GameMeta } from '../../data/games';

${importStatements}

export function getStaticPaths() {
  return GAMES.map(game => ({
    params: { id: game.slug },
    props: { game },
  }));
}

interface Props {
  game: GameMeta;
}

const { game } = Astro.props;
---

<GameLayout game={game}>
${specialMappings}
${renderCases.join('\n')}
</GameLayout>
`;

fs.writeFileSync(idAstroPath, idAstroContent);
console.log(`✅ src/pages/games/[id].astro successfully generated with all ${allGameFiles.length} games!`);
