import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logosDir = path.resolve(__dirname, '../public/logos');

const VECTOR_LOGOS = {
  'circuit-hacker': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ch-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#061a14" />
          <stop offset="100%" stop-color="#020806" />
        </linearGradient>
        <linearGradient id="ch-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <filter id="ch-f" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#10b981" flood-opacity="0.8" />
        </filter>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#ch-bg)" />
      <rect x="10" y="10" width="100" height="100" rx="20" fill="none" stroke="#10b981" stroke-opacity="0.2" stroke-width="1.5" />
      <!-- Circuit Traces -->
      <path d="M20 40 L40 40 L50 50 M20 80 L40 80 L50 70 M100 40 L80 40 L70 50 M100 80 L80 80 L70 70" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />
      <circle cx="20" cy="40" r="3" fill="#10b981" />
      <circle cx="20" cy="80" r="3" fill="#10b981" />
      <circle cx="100" cy="40" r="3" fill="#10b981" />
      <circle cx="100" cy="80" r="3" fill="#10b981" />
      <!-- Central IC Chip -->
      <rect x="42" y="42" width="36" height="36" rx="8" fill="#042f22" stroke="url(#ch-glow)" stroke-width="2" filter="url(#ch-f)" />
      <!-- Lightning Bolt inside chip -->
      <path d="M62 48 L52 62 L60 62 L58 72 L68 58 L60 58 Z" fill="#34d399" />
    </svg>
  `,

  'cursor-siege': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cs-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#cs-bg)" />
      <!-- Retro Window Frame -->
      <rect x="18" y="22" width="84" height="76" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
      <rect x="18" y="22" width="84" height="16" rx="6" fill="#2563eb" />
      <circle cx="26" cy="30" r="3" fill="#ef4444" />
      <circle cx="34" cy="30" r="3" fill="#f59e0b" />
      <circle cx="42" cy="30" r="3" fill="#10b981" />
      <!-- Firewall Shield Grid -->
      <path d="M60 48 L76 54 C76 70 60 84 60 84 C60 84 44 70 44 54 Z" fill="#1d4ed8" fill-opacity="0.4" stroke="#60a5fa" stroke-width="2" />
      <!-- Mouse Cursor Icon -->
      <path d="M54 50 L54 74 L60 68 L66 78 L70 76 L64 66 L72 66 Z" fill="#ffffff" stroke="#000000" stroke-width="2" />
    </svg>
  `,

  'echo-location': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="el-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041624" />
          <stop offset="100%" stop-color="#01070d" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#el-bg)" />
      <!-- Radar grid circles -->
      <circle cx="60" cy="60" r="44" fill="none" stroke="#0891b2" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="3,3" />
      <circle cx="60" cy="60" r="30" fill="none" stroke="#06b6d4" stroke-width="2" stroke-opacity="0.5" />
      <circle cx="60" cy="60" r="16" fill="none" stroke="#22d3ee" stroke-width="2" stroke-opacity="0.8" />
      <!-- Radar crosshair -->
      <line x1="60" y1="12" x2="60" y2="108" stroke="#0891b2" stroke-width="1" stroke-opacity="0.3" />
      <line x1="12" y1="60" x2="108" y2="60" stroke="#0891b2" stroke-width="1" stroke-opacity="0.3" />
      <!-- Radar sweep beam -->
      <path d="M60 60 L92 36 A 44 44 0 0 0 60 16 Z" fill="#06b6d4" fill-opacity="0.35" />
      <!-- Ping blip -->
      <circle cx="78" cy="38" r="4.5" fill="#a5f3fc" />
      <circle cx="60" cy="60" r="4" fill="#06b6d4" />
    </svg>
  `,

  'diceforge-tactics': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="df-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a0812" />
          <stop offset="100%" stop-color="#0f0206" />
        </linearGradient>
        <linearGradient id="df-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#e11d48" />
        </linearGradient>
        <linearGradient id="df-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#be123c" />
          <stop offset="100%" stop-color="#9f1239" />
        </linearGradient>
        <linearGradient id="df-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#881337" />
          <stop offset="100%" stop-color="#4c0519" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#df-bg)" />
      <!-- Isometric 3D Dice -->
      <g transform="translate(0, 4)">
        <polygon points="60,24 92,42 60,60 28,42" fill="url(#df-top)" stroke="#fda4af" stroke-width="1.5" />
        <polygon points="28,42 60,60 60,96 28,78" fill="url(#df-left)" stroke="#fda4af" stroke-width="1.5" />
        <polygon points="60,60 92,42 92,78 60,96" fill="url(#df-right)" stroke="#fda4af" stroke-width="1.5" />
        <!-- Top Face Pips -->
        <circle cx="60" cy="42" r="3.5" fill="#ffffff" />
        <!-- Left Face Pips -->
        <circle cx="40" cy="64" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="48" cy="74" r="3" fill="#ffffff" opacity="0.9" />
        <!-- Right Face Pips -->
        <circle cx="74" cy="62" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="80" cy="74" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="68" cy="84" r="3" fill="#ffffff" opacity="0.9" />
      </g>
    </svg>
  `,

  'floor99': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="fl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#241403" />
          <stop offset="100%" stop-color="#0a0501" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#fl-bg)" />
      <!-- Tower Spire -->
      <path d="M60 18 L68 40 L64 40 L66 84 L78 98 L42 98 L54 84 L56 40 L52 40 Z" fill="#d97706" opacity="0.3" stroke="#f59e0b" stroke-width="2" />
      <!-- Glowing Tower Windows -->
      <rect x="57" y="48" width="6" height="8" rx="2" fill="#fbbf24" />
      <rect x="57" y="62" width="6" height="8" rx="2" fill="#fbbf24" />
      <rect x="57" y="76" width="6" height="8" rx="2" fill="#fbbf24" />
      <!-- 99 Emblem -->
      <text x="60" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#fef3c7" text-anchor="middle">99F</text>
      <!-- Crossed Golden Swords -->
      <line x1="38" y1="88" x2="82" y2="88" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  'cyberraid': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#081b29" />
          <stop offset="100%" stop-color="#02080d" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#cr-bg)" />
      <!-- Angled Deck of Cards -->
      <rect x="26" y="24" width="46" height="68" rx="8" fill="#0e334a" stroke="#0284c7" stroke-width="1.5" transform="rotate(-10 49 58)" />
      <rect x="42" y="22" width="50" height="74" rx="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2" transform="rotate(8 67 59)" />
      <!-- Card Cyber Glyph -->
      <circle cx="68" cy="54" r="14" fill="#0284c7" fill-opacity="0.4" stroke="#7dd3fc" stroke-width="1.5" />
      <polygon points="68,44 76,58 60,58" fill="#38bdf8" />
    </svg>
  `,

  'minitower': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="mt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c192c" />
          <stop offset="100%" stop-color="#030712" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#mt-bg)" />
      <!-- Castle Tower -->
      <rect x="36" y="44" width="48" height="54" rx="4" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2" />
      <!-- Battlements -->
      <rect x="32" y="34" width="14" height="14" rx="2" fill="#2563eb" stroke="#60a5fa" stroke-width="1.5" />
      <rect x="53" y="34" width="14" height="14" rx="2" fill="#2563eb" stroke="#60a5fa" stroke-width="1.5" />
      <rect x="74" y="34" width="14" height="14" rx="2" fill="#2563eb" stroke="#60a5fa" stroke-width="1.5" />
      <!-- Tower Core Gem -->
      <circle cx="60" cy="62" r="10" fill="#93c5fd" />
      <circle cx="60" cy="62" r="5" fill="#ffffff" />
      <!-- Arched Gate -->
      <path d="M52 98 L52 82 A 8 8 0 0 1 68 82 L68 98 Z" fill="#0f172a" />
    </svg>
  `,

  'microrogue': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="mr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18181b" />
          <stop offset="100%" stop-color="#09090b" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#mr-bg)" />
      <!-- 1-Bit Pixel Rogue Helmet -->
      <rect x="34" y="30" width="52" height="42" rx="10" fill="#27272a" stroke="#e4e4e7" stroke-width="3" />
      <!-- Horns / Crest -->
      <polygon points="34,36 24,18 42,28" fill="#e4e4e7" />
      <polygon points="86,36 96,18 78,28" fill="#e4e4e7" />
      <!-- Glowing Eye Visor -->
      <rect x="42" y="46" width="36" height="8" rx="2" fill="#ef4444" />
      <!-- Crossed Daggers -->
      <path d="M42 82 L78 82 M60 72 L60 92" stroke="#e4e4e7" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  'lootgoblin': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="lg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e16" />
          <stop offset="100%" stop-color="#020d06" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#lg-bg)" />
      <!-- Burlap Sack of Gold -->
      <path d="M40 50 C40 40 50 36 60 36 C70 36 80 40 80 50 C80 56 86 64 88 78 C90 92 80 98 60 98 C40 98 30 92 32 78 C34 64 40 56 40 50 Z" fill="#854d0e" stroke="#ca8a04" stroke-width="2.5" />
      <!-- Gold Ribbon -->
      <ellipse cx="60" cy="48" rx="16" ry="5" fill="#eab308" />
      <!-- Overflowing Jewels -->
      <circle cx="50" cy="36" r="6" fill="#eab308" stroke="#fef08a" stroke-width="1.5" />
      <circle cx="62" cy="32" r="7" fill="#10b981" stroke="#a7f3d0" stroke-width="1.5" />
      <circle cx="72" cy="38" r="5" fill="#ef4444" stroke="#fecaca" stroke-width="1.5" />
    </svg>
  `,

  'infinite-minesweeper': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="im-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a2206" />
          <stop offset="100%" stop-color="#0d0b02" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#im-bg)" />
      <!-- Grid Cells -->
      <rect x="22" y="22" width="36" height="36" rx="6" fill="#422006" stroke="#ca8a04" stroke-width="2" />
      <text x="40" y="47" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#38bdf8" text-anchor="middle">1</text>
      <rect x="62" y="22" width="36" height="36" rx="6" fill="#422006" stroke="#ca8a04" stroke-width="2" />
      <text x="80" y="47" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#4ade80" text-anchor="middle">2</text>
      <!-- Naval Mine Cell -->
      <rect x="42" y="62" width="36" height="36" rx="6" fill="#713f12" stroke="#eab308" stroke-width="2" />
      <circle cx="60" cy="80" r="8" fill="#1c1917" stroke="#f59e0b" stroke-width="1.5" />
      <!-- Spikes -->
      <line x1="60" y1="68" x2="60" y2="92" stroke="#f59e0b" stroke-width="2" />
      <line x1="48" y1="80" x2="72" y2="80" stroke="#f59e0b" stroke-width="2" />
    </svg>
  `,

  'stellar-collapse': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1035" />
          <stop offset="100%" stop-color="#090312" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sc-bg)" />
      <!-- Swirling Accretion Disk -->
      <ellipse cx="60" cy="60" rx="46" ry="16" fill="none" stroke="#a855f7" stroke-width="3" transform="rotate(-25 60 60)" opacity="0.8" />
      <ellipse cx="60" cy="60" rx="36" ry="12" fill="none" stroke="#ec4899" stroke-width="2" transform="rotate(-25 60 60)" />
      <!-- Gravitational lensing glow -->
      <circle cx="60" cy="60" r="22" fill="#8b5cf6" opacity="0.3" filter="blur(4px)" />
      <!-- Black Hole Event Horizon -->
      <circle cx="60" cy="60" r="16" fill="#000000" stroke="#c084fc" stroke-width="2" />
    </svg>
  `,

  'jellydrop': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="jd-jelly" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f472b6" />
          <stop offset="100%" stop-color="#db2777" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#180512" />
      <!-- Wobbling Jelly Body -->
      <path d="M38 52 C38 34 50 28 60 28 C70 28 82 34 82 52 C84 72 88 88 84 94 C78 100 42 100 36 94 C32 88 36 72 38 52 Z" fill="url(#jd-jelly)" stroke="#fbcfe8" stroke-width="2" />
      <!-- Specular Highlight -->
      <ellipse cx="50" cy="44" rx="8" ry="14" fill="#ffffff" opacity="0.6" transform="rotate(-20 50 44)" />
      <!-- Cute Eyes -->
      <circle cx="52" cy="64" r="3.5" fill="#831843" />
      <circle cx="68" cy="64" r="3.5" fill="#831843" />
      <circle cx="53" cy="63" r="1" fill="#ffffff" />
      <circle cx="69" cy="63" r="1" fill="#ffffff" />
    </svg>
  `,

  'magnetoblocks': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="mb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#240c0c" />
          <stop offset="100%" stop-color="#0d0303" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#mb-bg)" />
      <!-- Horseshoe Magnet -->
      <path d="M36 34 L36 62 C36 78 46 88 60 88 C74 88 84 78 84 62 L84 34 L68 34 L68 62 C68 68 64 72 60 72 C56 72 52 68 52 62 L52 34 Z" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5" />
      <!-- Silver Magnet Poles -->
      <rect x="36" y="32" width="16" height="14" rx="2" fill="#e2e8f0" />
      <rect x="68" y="32" width="16" height="14" rx="2" fill="#3b82f6" />
      <text x="44" y="43" font-family="system-ui, sans-serif" font-weight="900" font-size="9" fill="#0f172a" text-anchor="middle">N</text>
      <text x="76" y="43" font-family="system-ui, sans-serif" font-weight="900" font-size="9" fill="#ffffff" text-anchor="middle">S</text>
      <!-- Magnetic Flux Sparks -->
      <path d="M52 24 C56 18 64 18 68 24" fill="none" stroke="#67e8f9" stroke-width="2" stroke-dasharray="2,2" />
    </svg>
  `,

  'coinstacker': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cs-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="#1c1605" />
      <!-- Stacked Coins from Bottom to Top -->
      <g transform="translate(0, 8)">
        <ellipse cx="60" cy="84" rx="34" ry="10" fill="#a16207" />
        <ellipse cx="60" cy="80" rx="34" ry="10" fill="url(#cs-gold)" stroke="#fef08a" stroke-width="1.5" />
        
        <ellipse cx="60" cy="68" rx="32" ry="9" fill="#a16207" />
        <ellipse cx="60" cy="64" rx="32" ry="9" fill="url(#cs-gold)" stroke="#fef08a" stroke-width="1.5" />

        <ellipse cx="60" cy="52" rx="30" ry="8.5" fill="#a16207" />
        <ellipse cx="60" cy="48" rx="30" ry="8.5" fill="url(#cs-gold)" stroke="#fef08a" stroke-width="1.5" />

        <ellipse cx="60" cy="36" rx="28" ry="8" fill="#a16207" />
        <ellipse cx="60" cy="32" rx="28" ry="8" fill="url(#cs-gold)" stroke="#fef08a" stroke-width="1.5" />
        <!-- Dollar Star Icon on Top Coin -->
        <circle cx="60" cy="32" r="3" fill="#854d0e" />
      </g>
    </svg>
  `,

  'liquidsort': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ls-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041a24" />
          <stop offset="100%" stop-color="#01080d" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#ls-bg)" />
      <!-- Test Tube 1 -->
      <path d="M34 26 L34 82 A 12 12 0 0 0 58 82 L58 26 Z" fill="#082f49" stroke="#38bdf8" stroke-width="2" />
      <path d="M34 50 L34 82 A 12 12 0 0 0 58 82 L58 50 Z" fill="#06b6d4" />
      <rect x="34" y="66" width="24" height="16" fill="#3b82f6" />
      <!-- Test Tube 2 (Pouring angle) -->
      <g transform="rotate(25 76 54)">
        <path d="M68 26 L68 82 A 12 12 0 0 0 92 82 L92 26 Z" fill="#082f49" stroke="#38bdf8" stroke-width="2" />
        <path d="M68 60 L68 82 A 12 12 0 0 0 92 82 L92 60 Z" fill="#ec4899" />
      </g>
    </svg>
  `,

  'breakout-sandbox': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bs-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#211504" />
          <stop offset="100%" stop-color="#0b0701" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bs-bg)" />
      <!-- Multi-tier Bricks -->
      <rect x="20" y="24" width="22" height="10" rx="3" fill="#ef4444" />
      <rect x="49" y="24" width="22" height="10" rx="3" fill="#f59e0b" />
      <rect x="78" y="24" width="22" height="10" rx="3" fill="#10b981" />
      <rect x="20" y="40" width="22" height="10" rx="3" fill="#06b6d4" />
      <rect x="49" y="40" width="22" height="10" rx="3" fill="#8b5cf6" />
      <rect x="78" y="40" width="22" height="10" rx="3" fill="#ec4899" />
      <!-- Bouncing Energy Ball -->
      <circle cx="56" cy="68" r="5" fill="#fde047" stroke="#ffffff" stroke-width="1.5" />
      <!-- Paddle -->
      <rect x="36" y="90" width="48" height="10" rx="5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
    </svg>
  `,

  'ragdoll-moonshot': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="rm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e0a29" />
          <stop offset="100%" stop-color="#07020a" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#rm-bg)" />
      <!-- Moon Surface -->
      <circle cx="60" cy="120" r="46" fill="#334155" stroke="#64748b" stroke-width="2" />
      <circle cx="48" cy="94" r="5" fill="#1e293b" />
      <circle cx="70" cy="98" r="7" fill="#1e293b" />
      <!-- Rocket Trajectory -->
      <path d="M30 92 Q46 54 84 28" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3" />
      <!-- Sleek Rocket -->
      <g transform="translate(68, 20) rotate(45)">
        <polygon points="12,0 24,24 0,24" fill="#f43f5e" />
        <circle cx="12" cy="14" r="3" fill="#67e8f9" />
        <polygon points="12,24 16,34 8,34" fill="#fbbf24" />
      </g>
    </svg>
  `,

  'domino-cascade': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="dc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c192e" />
          <stop offset="100%" stop-color="#030812" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#dc-bg)" />
      <!-- Standing Domino -->
      <rect x="22" y="32" width="14" height="60" rx="3" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" />
      <circle cx="29" cy="46" r="2.5" fill="#0f172a" />
      <circle cx="29" cy="78" r="2.5" fill="#0f172a" />
      <!-- Leaning Domino 1 -->
      <rect x="46" y="36" width="14" height="60" rx="3" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" transform="rotate(22 53 66)" />
      <!-- Leaning Domino 2 -->
      <rect x="74" y="44" width="14" height="60" rx="3" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" transform="rotate(45 81 74)" />
    </svg>
  `,

  'bouncygolf': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e16" />
          <stop offset="100%" stop-color="#02140a" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bg-grad)" />
      <!-- Putting Green Hill -->
      <path d="M12 96 Q60 76 108 96 L108 108 L12 108 Z" fill="#15803d" stroke="#22c55e" stroke-width="2" />
      <!-- Hole & Flagpole -->
      <ellipse cx="84" cy="86" rx="8" ry="3" fill="#052e16" />
      <line x1="84" y1="86" x2="84" y2="34" stroke="#ffffff" stroke-width="2" />
      <polygon points="84,36 62,46 84,56" fill="#ef4444" />
      <!-- Golf Ball & Bounce Arc -->
      <path d="M30 84 Q44 48 58 64 Q68 54 78 82" fill="none" stroke="#86efac" stroke-width="1.5" stroke-dasharray="2,2" />
      <circle cx="30" cy="84" r="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    </svg>
  `,

  'bubblewrap': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bw-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#061e29" />
          <stop offset="100%" stop-color="#020b0f" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bw-bg)" />
      <!-- Tactile Bubble Grid -->
      <circle cx="38" cy="38" r="16" fill="#0891b2" fill-opacity="0.3" stroke="#22d3ee" stroke-width="2" />
      <circle cx="34" cy="34" r="4" fill="#ffffff" opacity="0.7" />

      <circle cx="82" cy="38" r="16" fill="#0891b2" fill-opacity="0.3" stroke="#22d3ee" stroke-width="2" />
      <circle cx="78" cy="34" r="4" fill="#ffffff" opacity="0.7" />

      <circle cx="38" cy="82" r="16" fill="#0891b2" fill-opacity="0.3" stroke="#22d3ee" stroke-width="2" />
      <circle cx="34" cy="78" r="4" fill="#ffffff" opacity="0.7" />

      <!-- Popping Bubble in Center -->
      <circle cx="78" cy="80" r="14" fill="#0e7490" fill-opacity="0.6" stroke="#a5f3fc" stroke-width="2.5" />
      <!-- Pop splash rays -->
      <line x1="78" y1="60" x2="78" y2="54" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" />
      <line x1="98" y1="80" x2="104" y2="80" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" />
      <line x1="92" y1="94" x2="98" y2="100" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,

  'driftline': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="dl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a0614" />
          <stop offset="100%" stop-color="#0d0206" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#dl-bg)" />
      <!-- Asphalt Corner Curve -->
      <path d="M20 100 Q60 80 80 20" fill="none" stroke="#334155" stroke-width="26" stroke-linecap="round" />
      <path d="M20 100 Q60 80 80 20" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,6" />
      <!-- Drifting Sports Car Silhouette -->
      <g transform="translate(48, 54) rotate(-35)">
        <rect x="-12" y="-22" width="24" height="44" rx="7" fill="#f43f5e" stroke="#fda4af" stroke-width="2" />
        <rect x="-9" y="-12" width="18" height="14" rx="3" fill="#0f172a" />
        <!-- Headlights -->
        <circle cx="-7" cy="-20" r="2.5" fill="#fef08a" />
        <circle cx="7" cy="-20" r="2.5" fill="#fef08a" />
      </g>
      <!-- Tire Smoke Arc -->
      <circle cx="34" cy="74" r="8" fill="#fda4af" opacity="0.3" filter="blur(3px)" />
    </svg>
  `,

  'flappyduel': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="fd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1804" />
          <stop offset="100%" stop-color="#0a0801" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#fd-bg)" />
      <!-- Retro Green Pipes -->
      <rect x="52" y="16" width="16" height="34" rx="2" fill="#15803d" stroke="#22c55e" stroke-width="2" />
      <rect x="49" y="44" width="22" height="8" rx="2" fill="#16a34a" stroke="#22c55e" stroke-width="2" />
      <rect x="52" y="78" width="16" height="26" rx="2" fill="#15803d" stroke="#22c55e" stroke-width="2" />
      <rect x="49" y="74" width="22" height="8" rx="2" fill="#16a34a" stroke="#22c55e" stroke-width="2" />
      <!-- Bird 1 (Yellow) -->
      <circle cx="32" cy="60" r="10" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" />
      <circle cx="36" cy="58" r="3" fill="#ffffff" />
      <polygon points="38,62 48,64 38,68" fill="#ea580c" />
      <!-- Bird 2 (Pink Rival) -->
      <circle cx="86" cy="62" r="10" fill="#ec4899" stroke="#be185d" stroke-width="1.5" />
      <circle cx="82" cy="60" r="3" fill="#ffffff" />
      <polygon points="80,64 70,66 80,70" fill="#ea580c" />
    </svg>
  `,

  'typeracer-blitz': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="tb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041a24" />
          <stop offset="100%" stop-color="#01070d" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#tb-bg)" />
      <!-- Keycap Outline -->
      <rect x="28" y="24" width="64" height="64" rx="14" fill="#0f172a" stroke="#06b6d4" stroke-width="2.5" />
      <rect x="34" y="30" width="52" height="48" rx="10" fill="#1e293b" />
      <!-- Letter on Key -->
      <text x="60" y="62" font-family="system-ui, sans-serif" font-weight="900" font-size="28" fill="#22d3ee" text-anchor="middle">W</text>
      <!-- Speedometer Arc at Bottom -->
      <path d="M36 94 A 28 28 0 0 1 84 94" fill="none" stroke="#06b6d4" stroke-width="3" stroke-linecap="round" />
      <circle cx="60" cy="94" r="3" fill="#38bdf8" />
    </svg>
  `,

  'perfectslash': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ps-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#26040e" />
          <stop offset="100%" stop-color="#0d0105" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#ps-bg)" />
      <!-- Sliced Hexagonal Crystal -->
      <polygon points="60,20 84,34 76,56 44,56 36,34" fill="#be123c" opacity="0.6" transform="translate(4, -4)" />
      <polygon points="44,64 76,64 84,86 60,100 36,86" fill="#be123c" opacity="0.6" transform="translate(-4, 4)" />
      <!-- Katana Neon Blade Slash -->
      <path d="M18 102 C38 82 82 38 102 18" stroke="#f43f5e" stroke-width="4" stroke-linecap="round" />
      <path d="M18 102 C38 82 82 38 102 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
      <!-- Sparks -->
      <circle cx="60" cy="60" r="3" fill="#fef08a" />
      <circle cx="68" cy="52" r="2" fill="#ffffff" />
    </svg>
  `,

  'beatjumper': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bj-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#190e2e" />
          <stop offset="100%" stop-color="#07030f" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bj-bg)" />
      <!-- Audio Equalizer Bars -->
      <rect x="24" y="68" width="10" height="28" rx="3" fill="#8b5cf6" />
      <rect x="42" y="48" width="10" height="48" rx="3" fill="#a855f7" />
      <rect x="60" y="32" width="10" height="64" rx="3" fill="#c084fc" />
      <rect x="78" y="54" width="10" height="42" rx="3" fill="#a855f7" />
      <rect x="96" y="72" width="10" height="24" rx="3" fill="#8b5cf6" />
      <!-- Bouncing Glow Ball -->
      <circle cx="65" cy="22" r="7" fill="#f43f5e" stroke="#ffffff" stroke-width="2" />
      <!-- Wave Beats Trail -->
      <path d="M20 78 Q42 56 65 22 Q78 60 100 80" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.6" />
    </svg>
  `,

  'cursorsurvivor': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cs-bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#240808" />
          <stop offset="100%" stop-color="#0d0202" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#cs-bg2)" />
      <!-- Crosshair Target -->
      <circle cx="60" cy="60" r="38" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.4" />
      <circle cx="60" cy="60" r="20" fill="none" stroke="#ef4444" stroke-width="2" />
      <line x1="60" y1="16" x2="60" y2="104" stroke="#ef4444" stroke-width="1.5" opacity="0.5" />
      <line x1="16" y1="60" x2="104" y2="60" stroke="#ef4444" stroke-width="1.5" opacity="0.5" />
      <!-- Survivor Arrow Dodging in Center -->
      <polygon points="60,46 72,74 60,66 48,74" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
    </svg>
  `,

  'speedpark': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c1829" />
          <stop offset="100%" stop-color="#03080f" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sp-bg)" />
      <!-- Parking Bay Lines -->
      <line x1="36" y1="20" x2="36" y2="100" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
      <line x1="84" y1="20" x2="84" y2="100" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
      <line x1="36" y1="20" x2="84" y2="20" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
      <!-- Parking P Marker -->
      <text x="60" y="44" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#60a5fa" text-anchor="middle">P</text>
      <!-- Parked Car Top-Down -->
      <rect x="46" y="52" width="28" height="44" rx="7" fill="#2563eb" stroke="#93c5fd" stroke-width="2" />
      <rect x="49" y="62" width="22" height="14" rx="3" fill="#0f172a" />
      <!-- Taillights -->
      <circle cx="50" cy="92" r="2" fill="#ef4444" />
      <circle cx="70" cy="92" r="2" fill="#ef4444" />
    </svg>
  `,

  'colorclash': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="cc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e0b24" />
          <stop offset="100%" stop-color="#08020a" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#cc-bg)" />
      <!-- Overlapping Primary Rings -->
      <circle cx="48" cy="50" r="24" fill="#ec4899" fill-opacity="0.6" stroke="#f472b6" stroke-width="2" />
      <circle cx="72" cy="50" r="24" fill="#06b6d4" fill-opacity="0.6" stroke="#22d3ee" stroke-width="2" />
      <circle cx="60" cy="74" r="24" fill="#eab308" fill-opacity="0.6" stroke="#fde047" stroke-width="2" />
      <!-- Center Clash Spark -->
      <circle cx="60" cy="58" r="6" fill="#ffffff" />
    </svg>
  `,

  'jumpgrid': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="jg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e16" />
          <stop offset="100%" stop-color="#021208" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#jg-bg)" />
      <!-- Isometric Step Pads -->
      <polygon points="36,40 54,30 72,40 54,50" fill="#15803d" stroke="#4ade80" stroke-width="1.5" />
      <polygon points="68,66 86,56 104,66 86,76" fill="#15803d" stroke="#4ade80" stroke-width="1.5" />
      <polygon points="20,76 38,66 56,76 38,86" fill="#15803d" stroke="#4ade80" stroke-width="1.5" />
      <!-- Leap Trajectory Arc -->
      <path d="M54 38 Q70 30 86 64" fill="none" stroke="#fde047" stroke-width="2.5" stroke-dasharray="3,3" />
      <!-- Glowing Hopper Orb -->
      <circle cx="86" cy="64" r="6" fill="#22c55e" stroke="#ffffff" stroke-width="2" />
    </svg>
  `,

  'quickdraw': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="qd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#241303" />
          <stop offset="100%" stop-color="#0a0501" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#qd-bg)" />
      <!-- Western Revolver Cylinder Silhouette -->
      <circle cx="60" cy="60" r="26" fill="#78350f" stroke="#f59e0b" stroke-width="2.5" />
      <circle cx="60" cy="60" r="6" fill="#1c1917" />
      <!-- 6 Chambers -->
      <circle cx="60" cy="42" r="4.5" fill="#fef3c7" />
      <circle cx="75" cy="51" r="4.5" fill="#fef3c7" />
      <circle cx="75" cy="69" r="4.5" fill="#fef3c7" />
      <circle cx="60" cy="78" r="4.5" fill="#fef3c7" />
      <circle cx="45" cy="69" r="4.5" fill="#fef3c7" />
      <circle cx="45" cy="51" r="4.5" fill="#fef3c7" />
      <!-- High Noon Flash Sparks -->
      <path d="M60 20 L64 28 L72 32 L64 36 L60 44 L56 36 L48 32 L56 28 Z" fill="#fbbf24" />
    </svg>
  `,

  'picross-neon': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="pn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#140f2b" />
          <stop offset="100%" stop-color="#05030f" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#pn-bg)" />
      <!-- 4x4 Picross Grid -->
      <g transform="translate(24, 24)">
        <rect width="72" height="72" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="2" />
        <line x1="18" y1="0" x2="18" y2="72" stroke="#4338ca" stroke-width="1.5" />
        <line x1="36" y1="0" x2="36" y2="72" stroke="#6366f1" stroke-width="2" />
        <line x1="54" y1="0" x2="54" y2="72" stroke="#4338ca" stroke-width="1.5" />

        <line x1="0" y1="18" x2="72" y2="18" stroke="#4338ca" stroke-width="1.5" />
        <line x1="0" y1="36" x2="72" y2="36" stroke="#6366f1" stroke-width="2" />
        <line x1="0" y1="54" x2="72" y2="54" stroke="#4338ca" stroke-width="1.5" />

        <!-- Filled Tiles -->
        <rect x="2" y="2" width="14" height="14" rx="2" fill="#818cf8" />
        <rect x="20" y="2" width="14" height="14" rx="2" fill="#818cf8" />
        <rect x="38" y="20" width="14" height="14" rx="2" fill="#818cf8" />
        <rect x="56" y="20" width="14" height="14" rx="2" fill="#818cf8" />
        <rect x="20" y="38" width="14" height="14" rx="2" fill="#818cf8" />
        <rect x="38" y="56" width="14" height="14" rx="2" fill="#818cf8" />
      </g>
    </svg>
  `,

  'lasercircuit': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="lc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041a24" />
          <stop offset="100%" stop-color="#01070d" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#lc-bg)" />
      <!-- Diagonal Mirrors -->
      <line x1="28" y1="46" x2="46" y2="28" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
      <line x1="74" y1="92" x2="92" y2="74" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
      <line x1="28" y1="92" x2="46" y2="74" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
      <!-- Reflected Laser Beams -->
      <path d="M16 37 L37 37 L37 83 L83 83 L83 16" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round" />
      <path d="M16 37 L37 37 L37 83 L83 83 L83 16" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" />
      <!-- Beam Convergence Spark -->
      <circle cx="37" cy="83" r="4" fill="#a5f3fc" />
    </svg>
  `,

  'hexasort': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="hs-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e1b" />
          <stop offset="100%" stop-color="#02140b" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#hs-bg)" />
      <!-- Isometric Stacked Hexagons -->
      <polygon points="60,20 86,34 86,62 60,76 34,62 34,34" fill="#10b981" stroke="#a7f3d0" stroke-width="2" />
      <polygon points="60,34 86,48 86,76 60,90 34,76 34,48" fill="#059669" stroke="#6ee7b7" stroke-width="2" />
      <polygon points="60,48 86,62 86,90 60,104 34,90 34,62" fill="#047857" stroke="#34d399" stroke-width="2" />
    </svg>
  `,

  'pipemaster': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="pm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#241905" />
          <stop offset="100%" stop-color="#0a0701" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#pm-bg)" />
      <!-- Industrial Plumbing Pipes -->
      <path d="M20 46 L60 46 A 14 14 0 0 1 74 60 L74 100" fill="none" stroke="#d97706" stroke-width="16" stroke-linecap="round" />
      <path d="M20 46 L60 46 A 14 14 0 0 1 74 60 L74 100" fill="none" stroke="#fcd34d" stroke-width="3" stroke-linecap="round" />
      <!-- Pipe Flanges -->
      <rect x="18" y="36" width="6" height="20" rx="2" fill="#78350f" />
      <rect x="64" y="94" width="20" height="6" rx="2" fill="#78350f" />
      <!-- Valve Wheel -->
      <circle cx="48" cy="46" r="10" fill="#dc2626" stroke="#fecaca" stroke-width="2" />
      <circle cx="48" cy="46" r="3" fill="#ffffff" />
    </svg>
  `,

  'minimetro-planner': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="mm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1f0a1c" />
          <stop offset="100%" stop-color="#080207" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#mm-bg)" />
      <!-- Transit Map Route Lines -->
      <path d="M22 84 L54 52 L98 52" fill="none" stroke="#ec4899" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M34 26 L54 52 L78 94" fill="none" stroke="#06b6d4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Station Glyphs -->
      <!-- Circle Station -->
      <circle cx="34" cy="26" r="7" fill="#ffffff" stroke="#0e7490" stroke-width="2" />
      <!-- Triangle Station -->
      <polygon points="98,44 105,58 91,58" fill="#ffffff" stroke="#be185d" stroke-width="2" />
      <!-- Square Interchange Station -->
      <rect x="47" y="45" width="14" height="14" rx="2" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
    </svg>
  `,

  'sudoku-blitz': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="sb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c182c" />
          <stop offset="100%" stop-color="#03070f" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sb-bg)" />
      <!-- 3x3 Grid Box -->
      <rect x="22" y="22" width="76" height="76" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2.5" />
      <line x1="47" y1="22" x2="47" y2="98" stroke="#475569" stroke-width="1.5" />
      <line x1="72" y1="22" x2="72" y2="98" stroke="#475569" stroke-width="1.5" />
      <line x1="22" y1="47" x2="98" y2="47" stroke="#475569" stroke-width="1.5" />
      <line x1="22" y1="72" x2="98" y2="72" stroke="#475569" stroke-width="1.5" />
      <!-- Sudoku Digits -->
      <text x="35" y="41" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#60a5fa" text-anchor="middle">5</text>
      <text x="60" y="41" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#f8fafc" text-anchor="middle">3</text>
      <text x="60" y="66" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#38bdf8" text-anchor="middle">7</text>
      <text x="85" y="91" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#60a5fa" text-anchor="middle">9</text>
    </svg>
  `,

  'idle-factory': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="if-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#241403" />
          <stop offset="100%" stop-color="#0a0501" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#if-bg)" />
      <!-- Main Brass Gear -->
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="28" fill="#d97706" stroke="#fbbf24" stroke-width="2" />
        <!-- Cog teeth -->
        <rect x="-5" y="-36" width="10" height="8" rx="2" fill="#f59e0b" />
        <rect x="-5" y="28" width="10" height="8" rx="2" fill="#f59e0b" />
        <rect x="-36" y="-5" width="8" height="10" rx="2" fill="#f59e0b" />
        <rect x="28" y="-5" width="8" height="10" rx="2" fill="#f59e0b" />
        <circle cx="0" cy="0" r="12" fill="#78350f" />
        <circle cx="0" cy="0" r="4" fill="#fef3c7" />
      </g>
    </svg>
  `,

  'mazemaster': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="mm-bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e18" />
          <stop offset="100%" stop-color="#010d06" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#mm-bg2)" />
      <!-- Labyrinth Concentric Corridors -->
      <rect x="22" y="22" width="76" height="76" rx="8" fill="none" stroke="#10b981" stroke-width="2.5" />
      <path d="M38 22 L38 82 L82 82 L82 38 L54 38 L54 66 L66 66" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" />
      <!-- Glowing Beacon at Center -->
      <circle cx="66" cy="66" r="4.5" fill="#fde047" stroke="#ffffff" stroke-width="1.5" />
    </svg>
  `,

  'blockslide': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bs-bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041a24" />
          <stop offset="100%" stop-color="#01070d" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bs-bg2)" />
      <!-- 1010 Sliding Grid Blocks -->
      <rect x="26" y="26" width="20" height="20" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
      <rect x="50" y="26" width="20" height="20" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
      <rect x="74" y="26" width="20" height="20" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />

      <rect x="50" y="50" width="20" height="20" rx="4" fill="#06b6d4" stroke="#67e8f9" stroke-width="1.5" />
      <rect x="74" y="50" width="20" height="20" rx="4" fill="#06b6d4" stroke="#67e8f9" stroke-width="1.5" />

      <rect x="26" y="74" width="68" height="20" rx="4" fill="#0891b2" stroke="#22d3ee" stroke-width="1.5" />
    </svg>
  `,

  'tangram': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="tg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#241403" />
          <stop offset="100%" stop-color="#0a0501" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#tg-bg)" />
      <!-- Tangram Geometric Polygons forming an Origami Silhouette -->
      <polygon points="60,20 84,44 60,68 36,44" fill="#f59e0b" stroke="#fef3c7" stroke-width="1" />
      <polygon points="36,44 60,68 12,68" fill="#ef4444" stroke="#fef3c7" stroke-width="1" />
      <polygon points="60,68 108,68 84,44" fill="#3b82f6" stroke="#fef3c7" stroke-width="1" />
      <polygon points="36,68 60,92 12,92" fill="#10b981" stroke="#fef3c7" stroke-width="1" />
      <polygon points="60,68 60,92 84,92" fill="#8b5cf6" stroke="#fef3c7" stroke-width="1" />
      <polygon points="84,68 108,68 108,92 84,92" fill="#ec4899" stroke="#fef3c7" stroke-width="1" />
    </svg>
  `
};

// Aliases for hyphenated vs unhyphenated slugs
const ALIASES = {
  'circuithacker': 'circuit-hacker',
  'cursorsiege': 'cursor-siege',
  'echolocation': 'echo-location'
};

let count = 0;
for (const [slug, svg] of Object.entries(VECTOR_LOGOS)) {
  const filePath = path.join(logosDir, `${slug}.svg`);
  fs.writeFileSync(filePath, svg.trim() + '\n');
  count++;
}

for (const [alias, target] of Object.entries(ALIASES)) {
  if (VECTOR_LOGOS[target]) {
    const filePath = path.join(logosDir, `${alias}.svg`);
    fs.writeFileSync(filePath, VECTOR_LOGOS[target].trim() + '\n');
    count++;
  }
}

console.log(`Successfully generated ${count} vector logos!`);
