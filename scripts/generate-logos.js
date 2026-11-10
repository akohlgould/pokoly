import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logosDir = path.resolve(__dirname, '../public/logos');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

const LOGOS = {
  'word-guess': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="wg-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <linearGradient id="wg-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
        <filter id="wg-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#10b981" flood-opacity="0.4" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <rect x="16" y="16" width="38" height="38" rx="8" fill="url(#wg-green)" filter="url(#wg-glow)" />
      <text x="35" y="42" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle">W</text>
      <rect x="66" y="16" width="38" height="38" rx="8" fill="url(#wg-gold)" />
      <text x="85" y="42" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle">O</text>
      <rect x="16" y="66" width="38" height="38" rx="8" fill="#1f2937" stroke="#374151" stroke-width="2" />
      <text x="35" y="92" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#9ca3af" text-anchor="middle">R</text>
      <rect x="66" y="66" width="38" height="38" rx="8" fill="url(#wg-green)" filter="url(#wg-glow)" />
      <text x="85" y="92" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle">D</text>
    </svg>
  `,

  'fruit-merge': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="fm-melon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <linearGradient id="fm-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#be123c" />
        </linearGradient>
        <filter id="fm-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#10b981" flood-opacity="0.6" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <circle cx="60" cy="64" r="42" fill="url(#fm-melon)" filter="url(#fm-glow)" />
      <!-- Stripes -->
      <path d="M42 28 Q48 64 42 100" stroke="#064e3b" stroke-width="4" fill="none" stroke-linecap="round" />
      <path d="M60 22 Q64 64 60 106" stroke="#064e3b" stroke-width="4" fill="none" stroke-linecap="round" />
      <path d="M78 28 Q72 64 78 100" stroke="#064e3b" stroke-width="4" fill="none" stroke-linecap="round" />
      <!-- Baby cherry merging on top -->
      <circle cx="34" cy="36" r="14" fill="#f43f5e" stroke="#fff" stroke-width="2" />
      <circle cx="38" cy="32" r="3" fill="#fff" opacity="0.6" />
      <!-- Little sparkle -->
      <path d="M84 32 L88 20 L92 32 L104 36 L92 40 L88 52 L84 40 L72 36 Z" fill="#fbbf24" />
    </svg>
  `,

  'neon-2048': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="n2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" />
          <stop offset="50%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <filter id="n2-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ec4899" flood-opacity="0.5" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <rect x="20" y="20" width="80" height="80" rx="18" fill="url(#n2-grad)" filter="url(#n2-glow)" />
      <rect x="23" y="23" width="74" height="74" rx="15" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.4" />
      <text x="60" y="68" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle" letter-spacing="-1">2048</text>
      <circle cx="36" cy="36" r="3" fill="#ffffff" opacity="0.7" />
    </svg>
  `,

  'solitaire': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sol-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
        <filter id="sol-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.5" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#064e3b" />
      <!-- Back card -->
      <g transform="translate(48, 22) rotate(12)">
        <rect width="48" height="68" rx="8" fill="url(#sol-card)" filter="url(#sol-shadow)" />
        <text x="10" y="20" font-family="serif" font-weight="900" font-size="14" fill="#dc2626">K</text>
        <text x="24" y="44" font-size="18" fill="#dc2626" text-anchor="middle">♥</text>
      </g>
      <!-- Front card -->
      <g transform="translate(24, 28) rotate(-8)">
        <rect width="48" height="68" rx="8" fill="url(#sol-card)" filter="url(#sol-shadow)" stroke="#cbd5e1" stroke-width="1" />
        <text x="10" y="20" font-family="serif" font-weight="900" font-size="14" fill="#0f172a">A</text>
        <text x="24" y="44" font-size="20" fill="#0f172a" text-anchor="middle">♠</text>
      </g>
    </svg>
  `,

  'cyber-snake': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <filter id="sn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.7" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0a0b10" />
      <!-- Neon grid lines -->
      <path d="M20 60 H100 M60 20 V100" stroke="#1f2438" stroke-width="1" />
      <!-- Snake body -->
      <path d="M26 84 H54 V52 H80 V32" fill="none" stroke="url(#sn-grad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" filter="url(#sn-glow)" />
      <!-- Head Eye -->
      <circle cx="80" cy="32" r="3" fill="#ffffff" />
      <!-- Food orb -->
      <circle cx="94" cy="52" r="6" fill="#ec4899" filter="url(#sn-glow)" />
    </svg>
  `,

  'minesweeper': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ms-mine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <filter id="ms-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ef4444" flood-opacity="0.6" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Mine spikes -->
      <line x1="60" y1="24" x2="60" y2="96" stroke="#475569" stroke-width="6" stroke-linecap="round" />
      <line x1="24" y1="60" x2="96" y2="60" stroke="#475569" stroke-width="6" stroke-linecap="round" />
      <line x1="34" y1="34" x2="86" y2="86" stroke="#475569" stroke-width="6" stroke-linecap="round" />
      <line x1="34" y1="86" x2="86" y2="34" stroke="#475569" stroke-width="6" stroke-linecap="round" />
      <!-- Mine center body -->
      <circle cx="60" cy="60" r="26" fill="url(#ms-mine)" stroke="#64748b" stroke-width="3" />
      <!-- Warning LED -->
      <circle cx="60" cy="54" r="5" fill="#ef4444" filter="url(#ms-glow)" />
      <!-- Danger flag overlay -->
      <path d="M78 28 L94 36 L78 44 Z" fill="#ef4444" />
      <line x1="78" y1="28" x2="78" y2="54" stroke="#cbd5e1" stroke-width="2" />
    </svg>
  `,

  'breakout': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bb-ball" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <filter id="bb-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Bricks row -->
      <rect x="18" y="24" width="24" height="10" rx="3" fill="#ef4444" />
      <rect x="48" y="24" width="24" height="10" rx="3" fill="#f59e0b" />
      <rect x="78" y="24" width="24" height="10" rx="3" fill="#10b981" />
      <rect x="33" y="38" width="24" height="10" rx="3" fill="#8b5cf6" />
      <rect x="63" y="38" width="24" height="10" rx="3" fill="#ec4899" />
      <!-- Ball trajectory -->
      <line x1="60" y1="88" x2="72" y2="54" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3" opacity="0.6" />
      <!-- Bouncing ball -->
      <circle cx="72" cy="54" r="7" fill="url(#bb-ball)" filter="url(#bb-glow)" />
      <!-- Paddle -->
      <rect x="36" y="88" width="48" height="10" rx="5" fill="#06b6d4" filter="url(#bb-glow)" />
    </svg>
  `,

  'speed-typing': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="st-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <filter id="st-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.6" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0a0b10" />
      <!-- Speedometer arc -->
      <path d="M26 78 A 38 38 0 1 1 94 78" fill="none" stroke="#1f2937" stroke-width="8" stroke-linecap="round" />
      <path d="M26 78 A 38 38 0 1 1 88 50" fill="none" stroke="url(#st-grad)" stroke-width="8" stroke-linecap="round" filter="url(#st-glow)" />
      <!-- Speed needle -->
      <line x1="60" y1="64" x2="76" y2="44" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" />
      <circle cx="60" cy="64" r="5" fill="#ffffff" />
      <!-- Keyboard Keys -->
      <rect x="34" y="84" width="14" height="12" rx="3" fill="#1f2937" stroke="#374151" />
      <text x="41" y="93" font-size="8" font-family="monospace" fill="#06b6d4" font-weight="bold" text-anchor="middle">W</text>
      <rect x="53" y="84" width="14" height="12" rx="3" fill="#1f2937" stroke="#374151" />
      <text x="60" y="93" font-size="8" font-family="monospace" fill="#06b6d4" font-weight="bold" text-anchor="middle">P</text>
      <rect x="72" y="84" width="14" height="12" rx="3" fill="#1f2937" stroke="#374151" />
      <text x="79" y="93" font-size="8" font-family="monospace" fill="#06b6d4" font-weight="bold" text-anchor="middle">M</text>
    </svg>
  `,

  'sudoku': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sdk-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- 3x3 Outer Box -->
      <rect x="22" y="22" width="76" height="76" rx="10" fill="#1e1b4b" stroke="url(#sdk-grad)" stroke-width="3" />
      <!-- Grid lines -->
      <line x1="47" y1="22" x2="47" y2="98" stroke="#4338ca" stroke-width="2" />
      <line x1="73" y1="22" x2="73" y2="98" stroke="#4338ca" stroke-width="2" />
      <line x1="22" y1="47" x2="98" y2="47" stroke="#4338ca" stroke-width="2" />
      <line x1="22" y1="73" x2="98" y2="73" stroke="#4338ca" stroke-width="2" />
      <!-- Numbers -->
      <text x="35" y="41" font-family="monospace" font-weight="900" font-size="16" fill="#a5b4fc" text-anchor="middle">5</text>
      <text x="60" y="66" font-family="monospace" font-weight="900" font-size="16" fill="#38bdf8" text-anchor="middle">9</text>
      <text x="85" y="91" font-family="monospace" font-weight="900" font-size="16" fill="#a5b4fc" text-anchor="middle">3</text>
      <text x="85" y="41" font-family="monospace" font-weight="900" font-size="16" fill="#38bdf8" text-anchor="middle">7</text>
    </svg>
  `,

  'flappy-cyber': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="fc-jet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#ef4444" />
        </linearGradient>
        <filter id="fc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Obstacle pipe top -->
      <rect x="76" y="16" width="18" height="34" rx="4" fill="#10b981" filter="url(#fc-glow)" />
      <!-- Obstacle pipe bottom -->
      <rect x="76" y="74" width="18" height="32" rx="4" fill="#10b981" filter="url(#fc-glow)" />
      <!-- Cyber Flapper Bird -->
      <circle cx="44" cy="56" r="14" fill="url(#fc-jet)" />
      <circle cx="50" cy="52" r="3" fill="#ffffff" />
      <!-- Wing -->
      <path d="M34 58 Q22 48 38 46 Z" fill="#fbbf24" />
      <!-- Beak -->
      <polygon points="56,54 66,58 56,62" fill="#facc15" />
    </svg>
  `,

  'synapse': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <filter id="syn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.6" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Connecting neural synapses -->
      <line x1="38" y1="38" x2="82" y2="38" stroke="#6366f1" stroke-width="3" opacity="0.6" />
      <line x1="38" y1="82" x2="82" y2="82" stroke="#6366f1" stroke-width="3" opacity="0.6" />
      <line x1="38" y1="38" x2="38" y2="82" stroke="#6366f1" stroke-width="3" opacity="0.6" />
      <line x1="82" y1="38" x2="82" y2="82" stroke="#6366f1" stroke-width="3" opacity="0.6" />
      <line x1="38" y1="38" x2="82" y2="82" stroke="#ec4899" stroke-width="2" filter="url(#syn-glow)" />
      <!-- 4 category node blocks -->
      <rect x="24" y="24" width="28" height="28" rx="8" fill="#fbbf24" />
      <rect x="68" y="24" width="28" height="28" rx="8" fill="#10b981" />
      <rect x="24" y="68" width="28" height="28" rx="8" fill="#3b82f6" />
      <rect x="68" y="68" width="28" height="28" rx="8" fill="#a855f7" />
    </svg>
  `,

  'nanobalatro': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="nb-joker" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444" />
          <stop offset="50%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <filter id="nb-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ec4899" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0f172a" />
      <!-- Holographic card -->
      <rect x="32" y="20" width="56" height="80" rx="10" fill="#1e293b" stroke="url(#nb-joker)" stroke-width="3" filter="url(#nb-glow)" />
      <!-- Multiplier text -->
      <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#f43f5e" text-anchor="middle">x4</text>
      <!-- Joker bell/hat silhouette -->
      <circle cx="50" cy="72" r="4" fill="#fbbf24" />
      <circle cx="70" cy="72" r="4" fill="#fbbf24" />
      <path d="M46 76 Q60 86 74 76" stroke="#fbbf24" stroke-width="3" fill="none" stroke-linecap="round" />
    </svg>
  `,

  'orbit-survivors': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="os-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <filter id="os-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#050814" />
      <!-- Orbital spinning rings -->
      <ellipse cx="60" cy="60" rx="42" ry="20" fill="none" stroke="url(#os-shield)" stroke-width="2" transform="rotate(-30 60 60)" filter="url(#os-glow)" />
      <!-- Orbiting orbs -->
      <circle cx="86" cy="38" r="4" fill="#06b6d4" filter="url(#os-glow)" />
      <circle cx="34" cy="82" r="4" fill="#ec4899" filter="url(#os-glow)" />
      <!-- Player core ship -->
      <polygon points="60,38 72,74 60,68 48,74" fill="#ffffff" filter="url(#os-glow)" />
    </svg>
  `,

  'peggledungeon': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="pd-orb" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </radialGradient>
        <filter id="pd-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#1c1917" />
      <!-- Crystal Pegs -->
      <circle cx="36" cy="64" r="6" fill="#38bdf8" />
      <circle cx="84" cy="64" r="6" fill="#38bdf8" />
      <circle cx="60" cy="86" r="6" fill="#ec4899" />
      <circle cx="60" cy="42" r="6" fill="#38bdf8" />
      <!-- Pachinko Bouncing Orb -->
      <circle cx="48" cy="50" r="10" fill="url(#pd-orb)" filter="url(#pd-glow)" />
    </svg>
  `
};

// Generic stylish emblem generator for remaining games
function generateGenericLogo(slug, title, color = '#6366f1') {
  const initials = title.split(' ')[0].slice(0, 3).toUpperCase();
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="g-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color}" />
          <stop offset="100%" stop-color="#1e1b4b" />
        </linearGradient>
        <filter id="gf-${slug}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="${color}" flood-opacity="0.5" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <rect x="24" y="24" width="72" height="72" rx="18" fill="url(#g-${slug})" filter="url(#gf-${slug})" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3" />
      <text x="60" y="68" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle" letter-spacing="1">${initials}</text>
    </svg>
  `;
}

// Write bespoke logos
for (const [slug, svg] of Object.entries(LOGOS)) {
  const filePath = path.join(logosDir, `${slug}.svg`);
  fs.writeFileSync(filePath, svg.trim() + '\n', 'utf-8');
  console.log(`✓ Generated custom logo: public/logos/${slug}.svg`);
}

// Generate for remaining catalog games
const allSlugs = [
  'lexifall', 'chronocross', 'vowelshift', 'cipherpunk',
  'numberdrop', 'geopixel', 'semanticlimb', 'wordhedge', 'kanjiforge'
];

allSlugs.forEach(slug => {
  if (!LOGOS[slug]) {
    const filePath = path.join(logosDir, `${slug}.svg`);
    const svg = generateGenericLogo(slug, slug.toUpperCase(), '#06b6d4');
    fs.writeFileSync(filePath, svg.trim() + '\n', 'utf-8');
    console.log(`✓ Generated stylish emblem: public/logos/${slug}.svg`);
  }
});

console.log('🎉 All game logos generated successfully!');

