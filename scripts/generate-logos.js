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

  'nanojoker': `
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

  'pegdungeon': `
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
  `,

  'pegdungeon': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="pd2-orb" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </radialGradient>
        <filter id="pd2-glow" x="-20%" y="-20%" width="140%" height="140%">
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
      <circle cx="48" cy="50" r="10" fill="url(#pd2-orb)" filter="url(#pd2-glow)" />
    </svg>
  `,

  'nanojoker': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="nj-joker" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444" />
          <stop offset="50%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <filter id="nj-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ec4899" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0f172a" />
      <!-- Holographic card -->
      <rect x="32" y="20" width="56" height="80" rx="10" fill="#1e293b" stroke="url(#nj-joker)" stroke-width="3" filter="url(#nj-glow)" />
      <!-- Multiplier text -->
      <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#f43f5e" text-anchor="middle">x4</text>
      <!-- Joker bell/hat silhouette -->
      <circle cx="50" cy="72" r="4" fill="#fbbf24" />
      <circle cx="70" cy="72" r="4" fill="#fbbf24" />
      <path d="M46 76 Q60 86 74 76" stroke="#fbbf24" stroke-width="3" fill="none" stroke-linecap="round" />
    </svg>
  `,

  'chronotrail': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ct-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="50%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
        <filter id="ct-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#8b5cf6" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Chronometer Outer Dial -->
      <circle cx="60" cy="60" r="42" fill="none" stroke="url(#ct-ring)" stroke-width="3" filter="url(#ct-glow)" />
      <circle cx="60" cy="60" r="34" fill="#131b2e" stroke="#1e293b" stroke-width="1" />
      <!-- Timeline Hourglass / Portal Crossing -->
      <path d="M44 38 H76 L60 60 L76 82 H44 L60 60 Z" fill="#8b5cf6" opacity="0.3" stroke="#38bdf8" stroke-width="1.5" />
      <!-- Clock Hands -->
      <line x1="60" y1="60" x2="60" y2="40" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />
      <line x1="60" y1="60" x2="74" y2="60" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="60" cy="60" r="4" fill="#ffffff" />
      <!-- Milestone Year Nodes -->
      <circle cx="60" cy="22" r="3.5" fill="#f59e0b" />
      <circle cx="98" cy="60" r="3.5" fill="#ec4899" />
      <circle cx="60" cy="98" r="3.5" fill="#10b981" />
      <circle cx="22" cy="60" r="3.5" fill="#06b6d4" />
    </svg>
  `,

  'lexifall': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="lf-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <linearGradient id="lf-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
        <linearGradient id="lf-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="lf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#06b6d4" flood-opacity="0.6" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Falling Tetris Letter Tiles -->
      <rect x="22" y="68" width="24" height="24" rx="6" fill="url(#lf-grad1)" />
      <text x="34" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">W</text>
      <rect x="48" y="68" width="24" height="24" rx="6" fill="url(#lf-grad1)" />
      <text x="60" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">O</text>
      <rect x="74" y="68" width="24" height="24" rx="6" fill="url(#lf-grad1)" />
      <text x="86" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">R</text>
      <!-- Falling T block -->
      <rect x="48" y="42" width="24" height="24" rx="6" fill="url(#lf-grad2)" filter="url(#lf-glow)" />
      <text x="60" y="59" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">D</text>
      <rect x="48" y="16" width="24" height="24" rx="6" fill="url(#lf-grad3)" />
      <text x="60" y="33" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">S</text>
      <rect x="74" y="42" width="24" height="24" rx="6" fill="url(#lf-grad2)" />
      <text x="86" y="59" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">!</text>
    </svg>
  `,

  'vowelshift': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="vs-vowel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#ef4444" />
        </linearGradient>
        <filter id="vs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Grid rows with sliding offset -->
      <rect x="18" y="24" width="22" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="29" y="39" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">S</text>
      <rect x="44" y="24" width="22" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="55" y="39" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">T</text>
      <rect x="70" y="24" width="22" height="22" rx="6" fill="url(#vs-vowel)" filter="url(#vs-glow)" />
      <text x="81" y="39" font-family="system-ui, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">A</text>
      <!-- Arrow Slide Indicator -->
      <path d="M96 35 L106 35 M102 31 L106 35 L102 39" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M24 60 L14 60 M18 56 L14 60 L18 64" stroke="#ec4899" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Row 2 -->
      <rect x="28" y="49" width="22" height="22" rx="6" fill="url(#vs-vowel)" filter="url(#vs-glow)" />
      <text x="39" y="64" font-family="system-ui, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">E</text>
      <rect x="54" y="49" width="22" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="65" y="64" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">T</text>
      <rect x="80" y="49" width="22" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="91" y="64" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">R</text>
      <!-- Row 3 -->
      <rect x="18" y="74" width="22" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="29" y="89" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">P</text>
      <rect x="44" y="74" width="22" height="22" rx="6" fill="url(#vs-vowel)" filter="url(#vs-glow)" />
      <text x="55" y="89" font-family="system-ui, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">O</text>
      <rect x="70" y="74" width="22" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="81" y="89" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">L</text>
    </svg>
  `,

  'semanticlimb': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sc-mountain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <radialGradient id="sc-hot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="#ef4444" />
          <stop offset="100%" stop-color="#b91c1c" />
        </radialGradient>
        <filter id="sc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ef4444" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0b0f19" />
      <!-- Altitude Radar Rings -->
      <circle cx="60" cy="70" r="42" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="60" cy="70" r="30" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="60" cy="70" r="18" fill="none" stroke="#0284c7" stroke-width="1.5" />
      <!-- Mountain Peak -->
      <polygon points="60,24 96,96 24,96" fill="url(#sc-mountain)" opacity="0.35" />
      <polygon points="60,24 84,96 36,96" fill="url(#sc-mountain)" opacity="0.6" />
      <!-- Bullseye Summit Beacon (100% Match) -->
      <circle cx="60" cy="26" r="8" fill="url(#sc-hot)" filter="url(#sc-glow)" />
      <!-- Word Compass Crosshair -->
      <line x1="60" y1="12" x2="60" y2="40" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
      <line x1="46" y1="26" x2="74" y2="26" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
      <!-- Temperature Heat Tag -->
      <text x="60" y="88" font-family="monospace" font-weight="900" font-size="11" fill="#38bdf8" text-anchor="middle">98.4° HOT</text>
    </svg>
  `,

  'synapse': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="syn-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="60%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#4338ca" />
        </radialGradient>
        <filter id="syn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#8b5cf6" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#090d16" />
      <!-- Synaptic Connection Axons -->
      <line x1="60" y1="60" x2="30" y2="35" stroke="#38bdf8" stroke-width="2" opacity="0.8" />
      <line x1="60" y1="60" x2="90" y2="35" stroke="#ec4899" stroke-width="2" opacity="0.8" />
      <line x1="60" y1="60" x2="30" y2="85" stroke="#10b981" stroke-width="2" opacity="0.8" />
      <line x1="60" y1="60" x2="90" y2="85" stroke="#f59e0b" stroke-width="2" opacity="0.8" />
      <line x1="30" y1="35" x2="90" y2="35" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5" />
      <line x1="30" y1="85" x2="90" y2="85" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5" />
      <!-- 4 Category Nodes -->
      <circle cx="30" cy="35" r="9" fill="#38bdf8" />
      <circle cx="90" cy="35" r="9" fill="#ec4899" />
      <circle cx="30" cy="85" r="9" fill="#10b981" />
      <circle cx="90" cy="85" r="9" fill="#f59e0b" />
      <!-- Central Synapse Hub -->
      <circle cx="60" cy="60" r="14" fill="url(#syn-core)" filter="url(#syn-glow)" />
      <circle cx="60" cy="60" r="4" fill="#ffffff" />
    </svg>
  `,

  'geopixel': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="gp-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="60%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Pixel Landmark Frame -->
      <rect x="20" y="20" width="80" height="80" rx="14" fill="url(#gp-sky)" stroke="#38bdf8" stroke-width="2" />
      <!-- Pixel Matrix Silhouette: Pyramids + Sun -->
      <rect x="68" y="28" width="16" height="16" fill="#fef08a" />
      <polygon points="45,45 25,85 65,85" fill="#78350f" />
      <polygon points="65,55 50,85 85,85" fill="#451a03" />
      <!-- Pixelation grid overlay in corner -->
      <rect x="68" y="60" width="8" height="8" fill="#10b981" opacity="0.8" />
      <rect x="76" y="60" width="8" height="8" fill="#059669" opacity="0.8" />
      <rect x="84" y="60" width="8" height="8" fill="#047857" opacity="0.8" />
      <rect x="68" y="68" width="8" height="8" fill="#f59e0b" opacity="0.8" />
      <rect x="76" y="68" width="8" height="8" fill="#d97706" opacity="0.8" />
      <rect x="84" y="68" width="8" height="8" fill="#b45309" opacity="0.8" />
      <!-- Resolution Badge -->
      <rect x="28" y="88" width="64" height="16" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
      <text x="60" y="100" font-family="monospace" font-weight="900" font-size="9" fill="#38bdf8" text-anchor="middle">4×4 PIXEL</text>
    </svg>
  `,

  'cipherpunk': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cp-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="cp-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#020617" />
      <!-- Matrix Scanlines -->
      <text x="24" y="30" font-family="monospace" font-weight="700" font-size="10" fill="#059669" opacity="0.6">01 10 11</text>
      <text x="68" y="30" font-family="monospace" font-weight="700" font-size="10" fill="#10b981">X -&gt; I</text>
      <text x="24" y="44" font-family="monospace" font-weight="700" font-size="10" fill="#10b981">K -&gt; N</text>
      <text x="68" y="44" font-family="monospace" font-weight="700" font-size="10" fill="#059669" opacity="0.6">F0 9A 4C</text>
      <!-- Cyber Lock Emblem -->
      <rect x="36" y="56" width="48" height="42" rx="8" fill="#064e3b" stroke="url(#cp-glow)" stroke-width="2" filter="url(#cp-filter)" />
      <path d="M48 56 V46 A12 12 0 0 1 72 46 V56" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
      <!-- Keyhole / Terminal Symbol -->
      <circle cx="60" cy="74" r="4" fill="#a7f3d0" />
      <polygon points="58,76 62,76 64,86 56,86" fill="#a7f3d0" />
    </svg>
  `,

  'kanjiforge': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="kf-fire" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="50%" stop-color="#ef4444" />
          <stop offset="100%" stop-color="#881337" />
        </linearGradient>
        <filter id="kf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#180c0e" />
      <!-- Blacksmith Anvil -->
      <path d="M30 78 L90 78 L80 92 L40 92 Z" fill="#475569" stroke="#94a3b8" stroke-width="1.5" />
      <!-- Forged Glowing Kanji Character (明 = Bright = Sun + Moon) -->
      <text x="60" y="66" font-family="'Noto Sans JP', 'Hiragino Sans', sans-serif" font-weight="900" font-size="38" fill="url(#kf-fire)" text-anchor="middle" filter="url(#kf-glow)">明</text>
      <!-- Radical Sparks -->
      <circle cx="36" cy="36" r="3" fill="#fbbf24" />
      <circle cx="84" cy="38" r="3" fill="#f43f5e" />
      <circle cx="78" cy="24" r="2.5" fill="#facc15" />
      <circle cx="42" cy="22" r="2" fill="#fbbf24" />
      <!-- Hammer Strike Icon -->
      <rect x="76" y="24" width="14" height="8" rx="2" fill="#e2e8f0" transform="rotate(-30 76 24)" />
    </svg>
  `,

  'numberdrop': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="nd-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#1d4ed8" />
        </linearGradient>
        <filter id="nd-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38bdf8" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0b1329" />
      <!-- Target Display Banner -->
      <rect x="24" y="16" width="72" height="26" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" filter="url(#nd-glow)" />
      <text x="60" y="34" font-family="monospace" font-weight="900" font-size="16" fill="#38bdf8" text-anchor="middle">432</text>
      <!-- Countdown Math Number Cards -->
      <rect x="18" y="52" width="24" height="24" rx="6" fill="url(#nd-card)" />
      <text x="30" y="69" font-family="monospace" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">75</text>
      <!-- Operator -->
      <circle cx="50" cy="64" r="6" fill="#10b981" />
      <text x="50" y="68" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle">×</text>
      <rect x="62" y="52" width="24" height="24" rx="6" fill="url(#nd-card)" />
      <text x="74" y="69" font-family="monospace" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle">6</text>
      <!-- Bottom row -->
      <rect x="34" y="82" width="22" height="22" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
      <text x="45" y="97" font-family="monospace" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">+4</text>
      <rect x="64" y="82" width="22" height="22" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
      <text x="75" y="97" font-family="monospace" font-weight="900" font-size="12" fill="#94a3b8" text-anchor="middle">÷2</text>
    </svg>
  `,

  'wordhedge': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="wh-bush" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="wh-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.7" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#081c15" />
      <!-- Hedge Maze Borders -->
      <path d="M22 22 H98 V98 H22 Z" fill="none" stroke="url(#wh-bush)" stroke-width="6" stroke-linejoin="round" filter="url(#wh-glow)" />
      <!-- Maze Interior Paths -->
      <path d="M42 22 V54 H74 V40" fill="none" stroke="#059669" stroke-width="5" stroke-linecap="round" />
      <path d="M78 98 V70 H46 V80" fill="none" stroke="#059669" stroke-width="5" stroke-linecap="round" />
      <!-- Secret Letter in Center -->
      <rect x="46" y="46" width="28" height="28" rx="8" fill="#fbbf24" />
      <text x="60" y="66" font-family="system-ui, sans-serif" font-weight="900" font-size="18" fill="#1e1b4b" text-anchor="middle">?</text>
    </svg>
  `,

  'chronotrail': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cc-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="50%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
        <filter id="cc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#8b5cf6" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0d1117" />
      <!-- Chronometer Outer Dial -->
      <circle cx="60" cy="60" r="42" fill="none" stroke="url(#cc-ring)" stroke-width="3" filter="url(#cc-glow)" />
      <circle cx="60" cy="60" r="34" fill="#131b2e" stroke="#1e293b" stroke-width="1" />
      <!-- Timeline Hourglass / Portal Crossing -->
      <path d="M44 38 H76 L60 60 L76 82 H44 L60 60 Z" fill="#8b5cf6" opacity="0.3" stroke="#38bdf8" stroke-width="1.5" />
      <!-- Clock Hands -->
      <line x1="60" y1="60" x2="60" y2="40" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />
      <line x1="60" y1="60" x2="74" y2="60" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="60" cy="60" r="4" fill="#ffffff" />
      <!-- Milestone Year Nodes -->
      <circle cx="60" cy="22" r="3.5" fill="#f59e0b" />
      <circle cx="98" cy="60" r="3.5" fill="#ec4899" />
      <circle cx="60" cy="98" r="3.5" fill="#10b981" />
      <circle cx="22" cy="60" r="3.5" fill="#06b6d4" />
    </svg>
  `,

  'chronowave': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <filter id="cw-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#080e1a" />
      <!-- Concentric Sonar Doppler Waves -->
      <circle cx="60" cy="60" r="16" fill="none" stroke="#38bdf8" stroke-width="2.5" filter="url(#cw-glow)" />
      <circle cx="60" cy="60" r="28" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="6,4" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,6" opacity="0.7" />
      <!-- Sonar Core Emitter -->
      <circle cx="60" cy="60" r="7" fill="url(#cw-grad)" />
      <circle cx="60" cy="60" r="3" fill="#ffffff" />
      <!-- Resonant Crystals -->
      <polygon points="60,20 64,28 60,36 56,28" fill="#38bdf8" />
      <polygon points="96,60 88,64 80,60 88,56" fill="#ec4899" />
      <polygon points="60,100 56,92 60,84 64,92" fill="#f59e0b" />
    </svg>
  `,

  'quantumweave': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="qw-laser" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
        <filter id="qw-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="7" flood-color="#ec4899" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0c0717" />
      <!-- Quantum Entanglement Rings -->
      <circle cx="44" cy="50" r="22" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="5,3" />
      <circle cx="76" cy="70" r="22" fill="none" stroke="#ec4899" stroke-width="2.5" stroke-dasharray="5,3" />
      <!-- Intertwined Laser Weave -->
      <line x1="22" y1="28" x2="44" y2="50" stroke="#c084fc" stroke-width="3" filter="url(#qw-glow)" />
      <line x1="44" y1="50" x2="76" y2="70" stroke="#f472b6" stroke-width="3.5" filter="url(#qw-glow)" />
      <line x1="76" y1="70" x2="98" y2="92" stroke="#c084fc" stroke-width="3" filter="url(#qw-glow)" />
      <!-- Spin Nodes -->
      <circle cx="44" cy="50" r="7" fill="#8b5cf6" />
      <circle cx="44" cy="50" r="3" fill="#ffffff" />
      <circle cx="76" cy="70" r="7" fill="#ec4899" />
      <circle cx="76" cy="70" r="3" fill="#ffffff" />
    </svg>
  `,

  'gravityforge': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="gf-star" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="35%" stop-color="#fde047" />
          <stop offset="70%" stop-color="#ea580c" />
          <stop offset="100%" stop-color="#7c2d12" />
        </radialGradient>
        <filter id="gf-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#f59e0b" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#090514" />
      <!-- Gravitational Spacetime Curvature Orbits -->
      <ellipse cx="60" cy="60" rx="44" ry="22" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6" transform="rotate(-25 60 60)" />
      <ellipse cx="60" cy="60" rx="44" ry="22" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.6" transform="rotate(35 60 60)" />
      <!-- Central Protostar -->
      <circle cx="60" cy="60" r="18" fill="url(#gf-star)" filter="url(#gf-glow)" />
      <!-- Comet Slingshot Trail -->
      <path d="M20 90 Q40 75 75 40" stroke="#38bdf8" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <circle cx="75" cy="40" r="4" fill="#ffffff" />
    </svg>
  `,

  'synthia': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sy-rack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <filter id="sy-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.7" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sy-rack)" />
      <!-- Oscilloscope Screen -->
      <rect x="20" y="20" width="80" height="42" rx="8" fill="#022c22" stroke="#059669" stroke-width="1.5" />
      <path d="M26 41 Q36 22 46 41 T66 41 T86 41 T94 41" fill="none" stroke="#10b981" stroke-width="2.5" filter="url(#sy-glow)" stroke-linecap="round" />
      <!-- Patch Cable Jacks -->
      <circle cx="34" cy="84" r="7" fill="#334155" stroke="#64748b" stroke-width="2" />
      <circle cx="34" cy="84" r="3" fill="#020617" />
      <circle cx="86" cy="84" r="7" fill="#334155" stroke="#64748b" stroke-width="2" />
      <circle cx="86" cy="84" r="3" fill="#020617" />
      <!-- Patch Cable Cord -->
      <path d="M34 84 C34 114 86 114 86 84" fill="none" stroke="#ec4899" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  'morphoflora': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="mf-petal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#059669" />
        </radialGradient>
        <filter id="mf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#34d399" flood-opacity="0.7" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#061c14" />
      <!-- Hexagonal Cell Lattices -->
      <polygon points="60,20 86,35 86,65 60,80 34,65 34,35" fill="none" stroke="#10b981" stroke-width="2" opacity="0.4" />
      <!-- Blooming Hybrid Petals -->
      <circle cx="60" cy="44" r="14" fill="url(#mf-petal)" opacity="0.8" filter="url(#mf-glow)" />
      <circle cx="74" cy="58" r="14" fill="#a855f7" opacity="0.8" />
      <circle cx="68" cy="74" r="14" fill="#38bdf8" opacity="0.8" />
      <circle cx="46" cy="68" r="14" fill="#f59e0b" opacity="0.8" />
      <!-- Floral Pistil Core -->
      <circle cx="60" cy="60" r="9" fill="#ffffff" />
      <circle cx="60" cy="60" r="4" fill="#059669" />
    </svg>
  `,

  'prismpulse': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="pp-ray" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="30%" stop-color="#ffffff" />
          <stop offset="60%" stop-color="#38bdf8" />
          <stop offset="80%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <filter id="pp-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ffffff" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#030712" />
      <!-- Glass Optical Prism Triangle -->
      <polygon points="60,26 94,84 26,84" fill="rgba(255,255,255,0.06)" stroke="#94a3b8" stroke-width="2.5" />
      <!-- White Beam Entry -->
      <line x1="10" y1="58" x2="48" y2="58" stroke="#ffffff" stroke-width="3" filter="url(#pp-glow)" />
      <!-- Refracted Spectral Beams Out -->
      <line x1="72" y1="58" x2="110" y2="40" stroke="#ef4444" stroke-width="2" />
      <line x1="72" y1="62" x2="110" y2="58" stroke="#10b981" stroke-width="2" />
      <line x1="72" y1="66" x2="110" y2="76" stroke="#3b82f6" stroke-width="2" />
    </svg>
  `,

  'clockworkheist': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ch-laser" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#ef4444" />
        </linearGradient>
        <filter id="ch-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#090d16" />
      <!-- Vault Dial Ring -->
      <circle cx="60" cy="60" r="42" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="8,5" />
      <!-- Laser Grid -->
      <line x1="20" y1="60" x2="100" y2="60" stroke="#ef4444" stroke-width="2" opacity="0.6" stroke-dasharray="4,4" />
      <!-- Ghost Synchronicity Rings (Cyan, Pink, Amber) -->
      <circle cx="44" cy="54" r="14" fill="#06b6d4" opacity="0.5" />
      <circle cx="76" cy="54" r="14" fill="#ec4899" opacity="0.5" />
      <!-- Infiltrator Core -->
      <circle cx="60" cy="68" r="15" fill="url(#ch-laser)" filter="url(#ch-glow)" />
      <!-- Rewind Arrow -->
      <path d="M54 62 L66 68 L54 74 Z" fill="#ffffff" />
      <circle cx="60" cy="22" r="4" fill="#f59e0b" />
    </svg>
  `,

  'geothermal': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="gt-magma" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#dc2626" />
        </linearGradient>
        <filter id="gt-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f97316" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#140a06" />
      <!-- High Pressure Pipes -->
      <path d="M22 60 H54 V26 H98" fill="none" stroke="#44403c" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 60 H54 V26 H98" fill="none" stroke="url(#gt-magma)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#gt-glow)" />
      <!-- Coolant Water Drops -->
      <circle cx="38" cy="88" r="7" fill="#06b6d4" />
      <path d="M38 78 L43 86 H33 Z" fill="#06b6d4" />
      <!-- Geothermal Turbine Blades -->
      <circle cx="96" cy="26" r="14" fill="#1c1917" stroke="#34d399" stroke-width="2" />
      <line x1="96" y1="16" x2="96" y2="36" stroke="#34d399" stroke-width="2" />
      <line x1="86" y1="26" x2="106" y2="26" stroke="#34d399" stroke-width="2" />
    </svg>
  `,

  'neurolink': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="nl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="50%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
        <filter id="nl-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#070913" />
      <!-- Axon Synaptic Pathways -->
      <path d="M20 60 C40 30 50 30 70 40 S90 28 102 28" fill="none" stroke="url(#nl-grad)" stroke-width="3" filter="url(#nl-glow)" />
      <path d="M20 60 C40 90 50 90 70 80 S90 92 102 92" fill="none" stroke="#6366f1" stroke-width="2.5" opacity="0.6" />
      <!-- Switch Junctions -->
      <circle cx="50" cy="46" r="8" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2" />
      <circle cx="50" cy="74" r="8" fill="#1e1b4b" stroke="#ec4899" stroke-width="2" />
      <!-- Synaptic Neurotransmitter Sparks -->
      <circle cx="82" cy="38" r="5" fill="#f59e0b" />
      <circle cx="82" cy="82" r="5" fill="#06b6d4" />
      <circle cx="20" cy="60" r="6" fill="#ffffff" />
    </svg>
  `,

  'tectonicdrift': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="td-land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <filter id="td-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.7" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0b131f" />
      <!-- Magma Oceanic Rifts -->
      <path d="M60 16 Q54 60 62 104" stroke="#ea580c" stroke-width="3" fill="none" stroke-dasharray="5,4" />
      <!-- West Plate (Laurentia) -->
      <path d="M22 28 H52 V92 H22 Z" rx="6" fill="url(#td-land)" stroke="#10b981" stroke-width="2" filter="url(#td-glow)" />
      <!-- East Plate (Gondwana) -->
      <path d="M68 28 H98 V92 H68 Z" rx="6" fill="#0f766e" stroke="#14b8a6" stroke-width="2" />
      <!-- Fossil Fern Icons on Coastlines -->
      <circle cx="48" cy="48" r="3" fill="#fbbf24" />
      <circle cx="72" cy="48" r="3" fill="#fbbf24" />
      <circle cx="48" cy="72" r="3" fill="#38bdf8" />
      <circle cx="72" cy="72" r="3" fill="#38bdf8" />
    </svg>
  `,

  'cymatica': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cym-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="50%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>
        <filter id="cym-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#06b6d4" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#060913" />
      <!-- Standing Wave Interference Ripples -->
      <circle cx="60" cy="60" r="46" fill="none" stroke="#1e293b" stroke-width="1.5" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="#083344" stroke-width="2" stroke-dasharray="4,4" />
      <circle cx="60" cy="60" r="26" fill="none" stroke="url(#cym-grad)" stroke-width="2.5" filter="url(#cym-glow)" />
      <!-- Chladni Sacred Geometry Nodal Axes -->
      <path d="M60 20 Q40 60 60 100 Q80 60 60 20 Z" fill="none" stroke="#22d3ee" stroke-width="2" opacity="0.85" />
      <path d="M20 60 Q60 40 100 60 Q60 80 20 60 Z" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.85" />
      <!-- Resonant Quantum Motes / Nodes -->
      <circle cx="60" cy="60" r="7" fill="#22d3ee" filter="url(#cym-glow)" />
      <circle cx="60" cy="60" r="3" fill="#ffffff" />
      <circle cx="44" cy="44" r="3.5" fill="#38bdf8" />
      <circle cx="76" cy="44" r="3.5" fill="#38bdf8" />
      <circle cx="44" cy="76" r="3.5" fill="#38bdf8" />
      <circle cx="76" cy="76" r="3.5" fill="#38bdf8" />
      <circle cx="60" cy="28" r="2.5" fill="#facc15" />
      <circle cx="60" cy="92" r="2.5" fill="#facc15" />
    </svg>
  `,

  'echolocation': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="echo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
        <filter id="echo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#030712" />
      <!-- Sonar Wavefront Arcs -->
      <circle cx="60" cy="65" r="46" fill="none" stroke="#083344" stroke-width="2" stroke-dasharray="6,4" />
      <circle cx="60" cy="65" r="34" fill="none" stroke="#0ea5e9" stroke-width="2.5" opacity="0.6" />
      <circle cx="60" cy="65" r="22" fill="none" stroke="url(#echo-grad)" stroke-width="3" filter="url(#echo-glow)" />
      <!-- Cave Bat / Sonar Creature -->
      <path d="M60 48 Q44 42 32 54 Q46 62 56 58 L60 68 L64 58 Q74 62 88 54 Q76 42 60 48 Z" fill="#22d3ee" filter="url(#echo-glow)" />
      <!-- Eyes & Resonant Core -->
      <circle cx="56" cy="52" r="2" fill="#ffffff" />
      <circle cx="64" cy="52" r="2" fill="#ffffff" />
      <!-- Golden Sonar Crystal -->
      <polygon points="60,82 66,90 60,98 54,90" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5" />
      <circle cx="60" cy="90" r="2" fill="#ffffff" />
    </svg>
  `,

  'cursorsiege': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cs-title" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#000080" />
          <stop offset="100%" stop-color="#1084d0" />
        </linearGradient>
        <filter id="cs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ec4899" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#008080" />
      <!-- Retro Window Frame -->
      <rect x="18" y="24" width="76" height="54" fill="#d4d0c8" stroke="#ffffff" stroke-width="2" />
      <rect x="20" y="26" width="72" height="12" fill="url(#cs-title)" />
      <text x="24" y="35" font-family="sans-serif" font-weight="bold" font-size="7" fill="#ffffff">VIRUS.EXE</text>
      <!-- Close button -->
      <rect x="82" y="27" width="8" height="8" fill="#c0c0c0" />
      <text x="86" y="34" font-family="monospace" font-weight="bold" font-size="7" fill="#000000" text-anchor="middle">✕</text>
      <!-- Red Virus Alert Icon inside window -->
      <circle cx="36" cy="54" r="9" fill="#ef4444" />
      <text x="36" y="58" font-family="sans-serif" font-weight="bold" font-size="11" fill="#ffffff" text-anchor="middle">!</text>
      <line x1="50" y1="48" x2="84" y2="48" stroke="#334155" stroke-width="3" stroke-linecap="round" />
      <line x1="50" y1="56" x2="76" y2="56" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" />
      <!-- Slashing OS Mouse Cursor -->
      <path d="M54 44 L54 86 L68 76 L78 94 L88 88 L78 72 L92 70 Z" fill="#ffffff" stroke="#000000" stroke-width="3" filter="url(#cs-glow)" />
      <!-- Laser Slash Effect -->
      <line x1="42" y1="84" x2="98" y2="40" stroke="#f43f5e" stroke-width="3.5" stroke-linecap="round" />
    </svg>
  `,

  'circuithacker': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ch-chip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#022c22" />
        </linearGradient>
        <filter id="ch-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#030a06" />
      <!-- PCB Copper Circuit Traces -->
      <path d="M16 35 L40 35 L50 20 L90 20" stroke="#065f46" stroke-width="2.5" fill="none" />
      <path d="M16 85 L40 85 L50 100 L95 100" stroke="#065f46" stroke-width="2.5" fill="none" />
      <path d="M85 60 L105 60" stroke="#10b981" stroke-width="3.5" fill="none" filter="url(#ch-glow)" />
      <!-- Logic Chip Package -->
      <rect x="36" y="34" width="48" height="52" rx="4" fill="url(#ch-chip)" stroke="#10b981" stroke-width="2" filter="url(#ch-glow)" />
      <!-- Chip Notch -->
      <circle cx="60" cy="34" r="4" fill="#030a06" />
      <!-- Chip Metallic Lead Pins -->
      <rect x="30" y="42" width="6" height="4" fill="#94a3b8" />
      <rect x="30" y="58" width="6" height="4" fill="#94a3b8" />
      <rect x="30" y="74" width="6" height="4" fill="#94a3b8" />
      <rect x="84" y="42" width="6" height="4" fill="#94a3b8" />
      <rect x="84" y="58" width="6" height="4" fill="#10b981" filter="url(#ch-glow)" />
      <rect x="84" y="74" width="6" height="4" fill="#94a3b8" />
      <!-- Chip Label & Logic Symbol -->
      <text x="60" y="56" font-family="monospace" font-weight="900" font-size="11" fill="#34d399" text-anchor="middle">AND</text>
      <text x="60" y="72" font-family="monospace" font-size="8" fill="#6ee7b7" text-anchor="middle">7408</text>
      <!-- Solder Dots -->
      <circle cx="16" cy="35" r="3" fill="#34d399" />
      <circle cx="16" cy="85" r="3" fill="#34d399" />
      <circle cx="105" cy="60" r="4" fill="#34d399" filter="url(#ch-glow)" />
    </svg>
  `,

  'gravifold': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="gf-base" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>
        <linearGradient id="gf-flap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <filter id="gf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" flood-opacity="0.9" />
        </filter>
        <filter id="gf-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-4" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.7" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#060a16" />
      <!-- Base Origami Sheet -->
      <polygon points="20,28 96,20 102,92 26,100" fill="url(#gf-base)" stroke="#0369a1" stroke-width="1.5" />
      <!-- Grid Markings -->
      <line x1="36" y1="26" x2="42" y2="98" stroke="#0ea5e9" stroke-width="1" opacity="0.3" />
      <line x1="60" y1="24" x2="66" y2="96" stroke="#0ea5e9" stroke-width="1" opacity="0.3" />
      <line x1="84" y1="22" x2="90" y2="94" stroke="#0ea5e9" stroke-width="1" opacity="0.3" />
      <line x1="22" y1="50" x2="98" y2="44" stroke="#0ea5e9" stroke-width="1" opacity="0.3" />
      <line x1="24" y1="74" x2="100" y2="68" stroke="#0ea5e9" stroke-width="1" opacity="0.3" />
      <!-- Folded Origami Flap in Dynamic Perspective -->
      <polygon points="45,18 96,20 72,94 30,82" fill="url(#gf-flap)" filter="url(#gf-shadow)" stroke="#38bdf8" stroke-width="2" />
      <!-- Glowing Dashed Crease Axis -->
      <line x1="25" y1="18" x2="88" y2="102" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4" filter="url(#gf-glow)" />
      <!-- Origami Pin / Singularity Rivet -->
      <circle cx="25" cy="18" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="88" cy="102" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" />
      <!-- Quantum Singularity Orb Traversing Fold -->
      <circle cx="62" cy="56" r="8" fill="#ffffff" filter="url(#gf-glow)" />
      <circle cx="62" cy="56" r="5" fill="#0284c7" />
      <circle cx="60" cy="54" r="2" fill="#ffffff" />
      <!-- Golden Quantum Energy Core -->
      <polygon points="86,42 92,48 86,54 80,48" fill="#fbbf24" filter="url(#gf-glow)" />
    </svg>
  `,

  'penumbra-null': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="pn-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="#fef08a" />
          <stop offset="80%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </radialGradient>
        <linearGradient id="pn-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050508" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <filter id="pn-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00f0ff" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#f8fafc" />
      <polygon points="40,55 80,55 108,120 12,120" fill="url(#pn-shadow)" stroke="#00f0ff" stroke-width="2" />
      <circle cx="60" cy="22" r="12" fill="url(#pn-sun)" />
      <line x1="38" y1="55" x2="82" y2="55" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" />
      <circle cx="60" cy="82" r="8" fill="#00f0ff" filter="url(#pn-glow)" />
      <circle cx="60" cy="82" r="3.5" fill="#050508" />
      <circle cx="48" cy="98" r="2.5" fill="#38bdf8" />
      <circle cx="72" cy="104" r="2" fill="#38bdf8" />
    </svg>
  `,

  'gravitysplice': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="gs-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#4f46e5" />
        </radialGradient>
        <filter id="gs-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#a855f7" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#080a18" />
      <!-- 4 Quadrant Crosshair Dividers -->
      <line x1="60" y1="16" x2="60" y2="104" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" />
      <line x1="16" y1="60" x2="104" y2="60" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" />
      <!-- Quadrant Gravity Directional Vectors -->
      <path d="M38 32 L38 48 M34 44 L38 48 L42 44" stroke="#818cf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M88 38 L72 38 M76 34 L72 38 L76 42" stroke="#22d3ee" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M32 82 L48 82 M44 78 L48 82 L44 86" stroke="#f472b6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M82 88 L82 72 M78 76 L82 72 L86 76" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Curving Spliced Slingshot Trajectory -->
      <path d="M26 38 Q60 55 85 82" stroke="#22d3ee" stroke-width="2.5" fill="none" stroke-dasharray="5,4" />
      <!-- Quantum Singularity Sphere -->
      <circle cx="58" cy="54" r="11" fill="url(#gs-core)" filter="url(#gs-glow)" />
      <circle cx="56" cy="52" r="3" fill="#ffffff" />
      <!-- Wormhole Portal Goal -->
      <circle cx="85" cy="82" r="7" fill="none" stroke="#22d3ee" stroke-width="2" />
    </svg>
  `,

  'onebuttonsamurai': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="sam-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#dc2626" />
        </radialGradient>
        <filter id="sam-slash-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ef4444" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0c0709" />
      <!-- Rising Crimson Blood Moon -->
      <circle cx="60" cy="58" r="38" fill="url(#sam-moon)" opacity="0.85" />
      <!-- Silhouette Bamboo Leaves in Wind -->
      <path d="M22 20 Q32 30 20 40 Q28 32 22 20 Z" fill="#1c1214" />
      <path d="M98 25 Q88 35 100 45 Q92 37 98 25 Z" fill="#1c1214" />
      <!-- Curved Katana Blade -->
      <path d="M20 98 Q50 65 98 22" stroke="#e2e8f0" stroke-width="4.5" fill="none" stroke-linecap="round" />
      <!-- White Steel Edge Reflection -->
      <path d="M22 96 Q50 65 96 24" stroke="#ffffff" stroke-width="2" fill="none" />
      <!-- Lightning Ink Slash FX (斬) -->
      <path d="M30 35 L88 85" stroke="#ef4444" stroke-width="5" stroke-linecap="round" filter="url(#sam-slash-glow)" />
      <!-- Red Hilt & Tsuba Guard -->
      <rect x="16" y="94" width="12" height="12" rx="2" fill="#991b1b" stroke="#fca5a5" stroke-width="1.5" />
      <!-- Flying Sakura Petals -->
      <circle cx="36" cy="62" r="3" fill="#f472b6" />
      <circle cx="82" cy="74" r="2.5" fill="#f472b6" />
    </svg>
  `,

  'radiosignal88': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="rs-brass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#44403c" />
          <stop offset="100%" stop-color="#1c1917" />
        </linearGradient>
        <filter id="rs-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#34d399" flood-opacity="0.9" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="#1c1e17" />
      <!-- Military Faceplate Border -->
      <rect x="14" y="14" width="92" height="92" rx="14" fill="url(#rs-brass)" stroke="#57534e" stroke-width="2" />
      <!-- Green Cathode Radar Screen -->
      <circle cx="60" cy="52" r="28" fill="#052e16" stroke="#10b981" stroke-width="2" filter="url(#rs-glow)" />
      <!-- Radar Crosshairs -->
      <line x1="60" y1="24" x2="60" y2="80" stroke="#047857" stroke-width="1.5" />
      <line x1="32" y1="52" x2="88" y2="52" stroke="#047857" stroke-width="1.5" />
      <circle cx="60" cy="52" r="16" fill="none" stroke="#047857" stroke-width="1" stroke-dasharray="3,3" />
      <!-- Triangulated Beacon Blip & Radar Sweep Sweep -->
      <line x1="60" y1="52" x2="80" y2="34" stroke="#34d399" stroke-width="2" />
      <circle cx="72" cy="42" r="3.5" fill="#34d399" filter="url(#rs-glow)" />
      <!-- Analog Tuning Ruler / Frequency Dial -->
      <rect x="24" y="86" width="72" height="12" rx="3" fill="#0c0a09" stroke="#78716c" stroke-width="1.5" />
      <!-- Dial Needle -->
      <line x1="56" y1="87" x2="56" y2="97" stroke="#ef4444" stroke-width="2" />
      <text x="60" y="95" font-family="monospace" font-weight="bold" font-size="6" fill="#a8a29e" text-anchor="middle">88.0 MHz</text>
    </svg>
  `,

  'chrono-origami': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="co-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#c084fc" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#0b0817" />
      <!-- Crease Fold Lines -->
      <polygon points="20,20 60,60 20,100" fill="#2e1065" stroke="#8b5cf6" stroke-width="2" />
      <polygon points="100,20 60,60 100,100" fill="#3b0764" stroke="#d8b4fe" stroke-width="2" />
      <line x1="60" y1="10" x2="60" y2="110" stroke="#f472b6" stroke-width="2.5" stroke-dasharray="4,4" />
      <circle cx="60" cy="60" r="6" fill="#f43f5e" />
    </svg>
  `,

  'synesthesia-drift': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="50%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#05060e" />
      <!-- Speed Highway -->
      <path d="M60 15 L20 105 L100 105 Z" fill="#0f172a" stroke="url(#sd-grad)" stroke-width="2.5" />
      <line x1="60" y1="15" x2="60" y2="105" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,6" />
      <!-- Delta Ship -->
      <polygon points="60,65 52,85 60,80 68,85" fill="#f43f5e" />
    </svg>
  `,

  'thermal-inversion': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ti-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#070914" />
      <!-- Dual Thermometer / Inverted Flux -->
      <path d="M40 30 Q60 50 40 90" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round" />
      <path d="M80 30 Q60 50 80 90" fill="none" stroke="#ea580c" stroke-width="6" stroke-linecap="round" />
      <circle cx="60" cy="60" r="14" fill="#1e1b4b" stroke="#ffffff" stroke-width="2" />
      <text x="60" y="64" font-family="monospace" font-size="10" font-weight="bold" fill="#38bdf8" text-anchor="middle">0 K</text>
    </svg>
  `,

  'shadow-caster': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="sc-spot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#04050a" />
      <circle cx="45" cy="45" r="30" fill="url(#sc-spot)" opacity="0.6" />
      <!-- Key Shadow Silhouette -->
      <circle cx="68" cy="68" r="14" fill="none" stroke="#f59e0b" stroke-width="6" />
      <rect x="74" y="65" width="28" height="6" rx="2" fill="#f59e0b" />
      <rect x="94" y="71" width="6" height="8" rx="1" fill="#f59e0b" />
    </svg>
  `,

  'subatomic-weaver': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sw-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#03060f" />
      <!-- Hadron Confinement Ring -->
      <circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="8" />
      <circle cx="60" cy="60" r="38" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="6,4" />
      <!-- 3 Quarks -->
      <circle cx="60" cy="42" r="7" fill="#10b981" />
      <circle cx="46" cy="72" r="7" fill="#10b981" />
      <circle cx="74" cy="72" r="7" fill="#06b6d4" />
      <!-- Gluon Lines -->
      <line x1="60" y1="42" x2="46" y2="72" stroke="#ffffff" stroke-width="1.5" />
      <line x1="60" y1="42" x2="74" y2="72" stroke="#ffffff" stroke-width="1.5" />
      <line x1="46" y1="72" x2="74" y2="72" stroke="#ffffff" stroke-width="1.5" />
    </svg>
  `,

  'linguistic-alchemy': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="26" fill="#0a0714" />
      <!-- Alchemical Crucible Flask -->
      <path d="M48 25 H72 V45 L90 85 A8 8 0 0 1 82 95 H38 A8 8 0 0 1 30 85 L48 45 Z" fill="#1e1035" stroke="#a855f7" stroke-width="2.5" />
      <!-- Transmutation Runes -->
      <text x="60" y="80" font-family="serif" font-size="22" font-weight="bold" fill="#ec4899" text-anchor="middle">Ω</text>
      <circle cx="60" cy="58" r="3" fill="#38bdf8" />
      <circle cx="52" cy="70" r="2.5" fill="#facc15" />
      <circle cx="68" cy="72" r="2" fill="#34d399" />
    </svg>
  `,

  'gravity-well': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="gw-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" />
          <stop offset="70%" stop-color="#1e1b4b" />
          <stop offset="90%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#020206" />
      <!-- Gravitational Lensing Rings -->
      <circle cx="60" cy="60" r="42" fill="url(#gw-core)" />
      <ellipse cx="60" cy="60" rx="46" ry="16" fill="none" stroke="#818cf8" stroke-width="2" transform="rotate(-25 60 60)" />
      <circle cx="60" cy="60" r="16" fill="#000000" stroke="#c084fc" stroke-width="1.5" />
      <circle cx="88" cy="46" r="3" fill="#38bdf8" />
    </svg>
  `,

  'neural-swarm': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="26" fill="#030809" />
      <!-- Subterranean Hyphae Network -->
      <path d="M60 95 L60 60 L35 35" stroke="#0d9488" stroke-width="3" fill="none" />
      <path d="M60 60 L85 35" stroke="#0d9488" stroke-width="3" fill="none" />
      <path d="M60 60 L60 25" stroke="#0d9488" stroke-width="3" fill="none" />
      <!-- Mushroom Spore Core -->
      <circle cx="60" cy="95" r="9" fill="#14b8a6" stroke="#ffffff" stroke-width="1.5" />
      <!-- Canopy Tree Nodes -->
      <circle cx="35" cy="35" r="7" fill="#22c55e" />
      <circle cx="60" cy="25" r="7" fill="#22c55e" />
      <circle cx="85" cy="35" r="7" fill="#22c55e" />
    </svg>
  `,

  'prism-duel': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="26" fill="#040610" />
      <!-- Incident White Beam -->
      <line x1="12" y1="60" x2="52" y2="60" stroke="#ffffff" stroke-width="4" />
      <!-- Prism Triangle -->
      <polygon points="58,35 78,75 38,75" fill="#2e1065" stroke="#d946ef" stroke-width="2" />
      <!-- Split Beams -->
      <line x1="68" y1="60" x2="108" y2="40" stroke="#ef4444" stroke-width="3" />
      <line x1="68" y1="60" x2="108" y2="80" stroke="#06b6d4" stroke-width="3" />
    </svg>
  `,

  'echo-diver': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="26" fill="#010306" />
      <!-- Concentric Sonar Waves -->
      <circle cx="50" cy="60" r="18" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="50" cy="60" r="32" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" />
      <circle cx="50" cy="60" r="44" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="5,5" />
      <!-- Exploration Submarine -->
      <ellipse cx="50" cy="60" rx="10" ry="6" fill="#10b981" />
      <rect x="46" y="52" width="6" height="4" fill="#10b981" />
      <!-- Hydrothermal Beacon Blip -->
      <circle cx="90" cy="36" r="5" fill="#06b6d4" />
    </svg>
  `
};

// Write all bespoke logos
for (const [slug, svg] of Object.entries(LOGOS)) {
  const filePath = path.join(logosDir, `${slug}.svg`);
  fs.writeFileSync(filePath, svg.trim() + '\n', 'utf-8');
  console.log(`✓ Generated bespoke logo: public/logos/${slug}.svg`);
}

console.log('🎉 All game logos generated successfully!');

