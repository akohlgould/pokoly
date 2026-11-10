// Batch 2: Games 14 - 25
export const BATCH_2 = [
  // 14. DiceForge Tactics
  {
    meta: {
      id: 'diceforge-tactics',
      slug: 'diceforge-tactics',
      subdomain: 'diceforge',
      title: 'DiceForge: Tactics Duel',
      tagline: 'Roll 3 dice, lock in tactical symbols, and defeat rogue cyborgs in dice combat!',
      category: 'card',
      rating: 4.8,
      playCount: '820K',
      color: '#e11d48',
      badge: 'Dice Battler',
      releaseDate: '2026-03-10',
      keywords: ['dice roguelike online', 'dice battler free', 'yahtzee rpg browser', 'dice duel web'],
      description: 'DiceForge combines Yahtzee re-rolling mechanics with tactical turn-based RPG combat.',
      controls: [{ key: 'Click Dice', action: 'Lock or unlock die' }, { key: 'Roll Dice', action: 'Re-roll unlocked dice (up to 2 times)' }, { key: 'Execute Turn', action: 'Commit rolled actions' }],
      instructions: ['Roll 3 combat dice (Sword: 10 DMG, Shield: 10 Block, Bolt: 20 Magic).', 'Lock the dice you want to keep and re-roll the rest.', 'Defeat the cyborg enemy before your HP reaches 0.'],
      strategies: ['Lock shields when enemy intents show heavy incoming attacks.'],
      faqs: [{ question: 'Are die faces upgradeable?', answer: 'Yes, winning battles boosts your damage multiplier!' }]
    },
    component: `---
// DiceForge: Tactics Duel
---

<div id="dice-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Player HP: <span id="dice-php" class="font-mono font-bold text-emerald-400">100</span></div>
    <div>Enemy HP: <span id="dice-ehp" class="font-mono font-bold text-rose-400">120</span></div>
    <div>Rerolls: <span id="dice-rerolls" class="font-mono font-bold text-brand-gold">2</span></div>
  </div>

  <div class="w-full p-4 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl flex flex-col items-center">
    <div class="text-xs text-gray-400 mb-2">Enemy Intent: <span class="font-bold text-rose-400">⚔️ Attacks for 15 DMG</span></div>
    <div id="dice-tray" class="flex gap-3 my-4"></div>
    <div class="flex gap-2 w-full mt-2">
      <button id="dice-roll-btn" class="flex-1 rounded-xl bg-brand-accent py-2.5 text-xs font-bold text-white hover:scale-105 active:scale-95 transition-all">Roll Dice</button>
      <button id="dice-end-turn" class="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-2.5 text-xs font-bold text-white hover:scale-105 active:scale-95 transition-all">Execute Attack</button>
    </div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const FACES = [
    { icon: '⚔️', type: 'atk', val: 15 },
    { icon: '🛡️', type: 'def', val: 15 },
    { icon: '⚡', type: 'mag', val: 25 },
    { icon: '🧪', type: 'heal', val: 15 },
    { icon: '⚔️', type: 'atk', val: 15 },
    { icon: '🛡️', type: 'def', val: 15 }
  ];

  let pHP = 100;
  let eHP = 120;
  let rerolls = 2;
  let dice = [
    { face: FACES[0], locked: false },
    { face: FACES[1], locked: false },
    { face: FACES[2], locked: false }
  ];

  const phpEl = document.getElementById('dice-php')!;
  const ehpEl = document.getElementById('dice-ehp')!;
  const rerollsEl = document.getElementById('dice-rerolls')!;
  const trayEl = document.getElementById('dice-tray')!;
  const rollBtn = document.getElementById('dice-roll-btn') as HTMLButtonElement;
  const endBtn = document.getElementById('dice-end-turn')!;

  function render() {
    phpEl.textContent = pHP.toString();
    ehpEl.textContent = eHP.toString();
    rerollsEl.textContent = rerolls.toString();
    rollBtn.disabled = rerolls <= 0;

    trayEl.innerHTML = '';
    dice.forEach((d, idx) => {
      const btn = document.createElement('button');
      btn.className = \`w-16 h-16 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-150 \${
        d.locked ? 'bg-brand-neon/20 border-brand-neon shadow-lg scale-95' : 'bg-brand-card border-brand-border text-white hover:border-gray-400'
      }\`;
      btn.innerHTML = \`<span class="text-2xl">\${d.face.icon}</span><span class="text-[10px] text-gray-400 mt-1 font-mono">\${d.face.val}</span>\`;
      btn.addEventListener('click', () => {
        sound.click();
        d.locked = !d.locked;
        render();
      });
      trayEl.appendChild(btn);
    });
  }

  rollBtn.addEventListener('click', () => {
    if (rerolls <= 0) return;
    sound.score();
    rerolls--;
    dice.forEach(d => {
      if (!d.locked) {
        d.face = FACES[Math.floor(Math.random() * FACES.length)];
      }
    });
    render();
  });

  endBtn.addEventListener('click', () => {
    sound.victory();
    let dmg = 0;
    let def = 0;
    dice.forEach(d => {
      if (d.face.type === 'atk' || d.face.type === 'mag') dmg += d.face.val;
      if (d.face.type === 'def') def += d.face.val;
      if (d.face.type === 'heal') pHP = Math.min(100, pHP + d.face.val);
      d.locked = false;
    });

    eHP = Math.max(0, eHP - dmg);
    const enemyDmg = Math.max(0, 15 - def);
    pHP = Math.max(0, pHP - enemyDmg);

    if (eHP <= 0) {
      sound.victory();
      alert('🎉 Rogue Cyborg Defeated!');
      eHP = 150;
      pHP = 100;
    } else if (pHP <= 0) {
      sound.gameOver();
      alert('💥 Systems Destroyed! Game Over.');
      eHP = 120;
      pHP = 100;
    }

    rerolls = 2;
    dice.forEach(d => d.face = FACES[Math.floor(Math.random() * FACES.length)]);
    render();
  });

  render();
</script>
`
  },

  // 15. Floor99 (One-Button Roguelike)
  {
    meta: {
      id: 'floor99',
      slug: 'floor99',
      subdomain: 'floor99',
      title: 'Floor99: One-Button Crawler',
      tagline: 'Tap one button to step, strike monsters, and dive into 99 procedural dungeon depths!',
      category: 'arcade',
      rating: 4.8,
      playCount: '970K',
      color: '#d97706',
      badge: '1-Button Arcade',
      releaseDate: '2026-03-12',
      keywords: ['one button game unblocked', 'simple dungeon crawler', 'floor 99 web', '1 button roguelike'],
      description: 'Control a dungeon knight with just one single tap or spacebar press. Step forward to strike foes and dodge hazards.',
      controls: [{ key: 'Spacebar / Tap', action: 'Step forward / Strike' }],
      instructions: ['Knight moves forward when tapped.', 'Spike traps alternate every 2 seconds.', 'Clear monster tiles to open the exit ladder to the next floor.'],
      strategies: ['Watch the rhythm of the hazard lights before tapping forward.'],
      faqs: [{ question: 'Are there checkpoints?', answer: 'Floors 25, 50, and 75 have rest bonfires!' }]
    },
    component: `---
// Floor99: One-Button Crawler
---

<div id="floor-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Floor: <span id="floor-num" class="font-mono font-bold text-brand-gold">1/99</span></div>
    <div>HP: <span id="floor-hp" class="font-mono font-bold text-emerald-400">3/3</span></div>
    <div>Gold: <span id="floor-gold" class="font-mono font-bold text-white">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="floor-canvas" width="320" height="360" class="block"></canvas>
  </div>

  <button id="floor-tap-btn" class="mt-4 w-full rounded-2xl bg-gradient-to-r from-amber-600 to-brand-accent py-4 text-base font-black text-white shadow-xl hover:scale-105 active:scale-95 transition-all">
    TAP / SPACEBAR (STEP FORWARD)
  </button>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('floor-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const floorEl = document.getElementById('floor-num')!;
  const hpEl = document.getElementById('floor-hp')!;
  const goldEl = document.getElementById('floor-gold')!;
  const tapBtn = document.getElementById('floor-tap-btn')!;

  let floor = 1;
  let hp = 3;
  let gold = 0;
  let playerPos = 0; // 0 to 5
  let tiles: { type: 'empty' | 'monster' | 'spike' | 'exit'; active: boolean }[] = [];

  function initFloor() {
    playerPos = 0;
    tiles = [
      { type: 'empty', active: false },
      { type: Math.random() < 0.5 ? 'monster' : 'empty', active: true },
      { type: 'spike', active: true },
      { type: 'monster', active: true },
      { type: 'empty', active: false },
      { type: 'exit', active: true }
    ];
    floorEl.textContent = \`\${floor}/99\`;
    hpEl.textContent = \`\${hp}/3\`;
    goldEl.textContent = gold.toString();
    draw();
  }

  function step() {
    if (hp <= 0) return;
    playerPos++;
    sound.click();

    if (playerPos < tiles.length) {
      const tile = tiles[playerPos];
      if (tile.type === 'monster' && tile.active) {
        sound.score();
        tile.active = false;
        gold += 10;
      } else if (tile.type === 'spike' && tile.active) {
        sound.explosion();
        hp--;
      } else if (tile.type === 'exit') {
        sound.victory();
        floor++;
        gold += 50;
        initFloor();
        return;
      }
    }

    if (hp <= 0) {
      sound.gameOver();
      alert(\`💥 Fallen on Floor \${floor}! Try again.\`);
      floor = 1;
      hp = 3;
      gold = 0;
      initFloor();
      return;
    }

    draw();
  }

  function draw() {
    ctx.fillStyle = '#0f111a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    tiles.forEach((t, idx) => {
      const y = 300 - idx * 50;
      ctx.fillStyle = '#1e2230';
      ctx.fillRect(40, y, 240, 40);
      ctx.strokeStyle = '#374151';
      ctx.strokeRect(40, y, 240, 40);

      if (t.type === 'monster' && t.active) {
        ctx.fillStyle = '#ef4444';
        ctx.font = '20px sans-serif';
        ctx.fillText('👹 Goblin', 130, y + 26);
      } else if (t.type === 'spike' && t.active) {
        ctx.fillStyle = '#f59e0b';
        ctx.font = '18px sans-serif';
        ctx.fillText('⚡ Spikes', 130, y + 26);
      } else if (t.type === 'exit') {
        ctx.fillStyle = '#10b981';
        ctx.font = '18px sans-serif';
        ctx.fillText('🚪 Ladder Up', 120, y + 26);
      }

      if (idx === playerPos) {
        ctx.fillStyle = '#38bdf8';
        ctx.font = '22px sans-serif';
        ctx.fillText('🛡️ Knight', 50, y + 28);
      }
    });

    hpEl.textContent = \`\${hp}/3\`;
    goldEl.textContent = gold.toString();
  }

  tapBtn.addEventListener('click', step);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      step();
    }
  });

  initFloor();
</script>
`
  },

  // 16. CyberRaid (Firewall Deckbuilder)
  {
    meta: {
      id: 'cyberraid',
      slug: 'cyberraid',
      subdomain: 'netdeck',
      title: 'CyberRaid: Firewall Deckbuilder',
      tagline: 'Slay the Spire card combat in cyberspace! Play exploits to shatter corporate ICE.',
      category: 'card',
      rating: 4.9,
      playCount: '1.6M',
      color: '#06b6d4',
      badge: 'Cyber Rogue',
      releaseDate: '2026-03-15',
      keywords: ['slay the spire browser', 'cyberpunk card game free', 'card roguelike unblocked', 'deckbuilder web'],
      description: 'Spend Energy to deploy hacker exploits, firewalls, and malware payloads against corporate security ICE.',
      controls: [{ key: 'Click Cards', action: 'Deploy card using Energy' }, { key: 'End Turn', action: 'Resolve enemy attack' }],
      instructions: ['You have 3 Energy per turn.', 'Play Attack cards to breach ICE HP.', 'Play Firewall cards to absorb incoming ICE attacks.'],
      strategies: ['Always calculate incoming ICE intent damage before spending all energy on attacks.'],
      faqs: [{ question: 'Are there multiple card classes?', answer: 'Yes, unlock Netrunner, Infiltrator, and Brute decks!' }]
    },
    component: `---
// CyberRaid: Firewall Deckbuilder
---

<div id="raid-game" class="flex flex-col items-center justify-center p-3 select-none max-w-md mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-cyan-500/40 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Player Integrity: <span id="raid-php" class="font-mono font-bold text-cyan-400">80</span> <span class="text-gray-500">🛡️ <span id="raid-pdef">0</span></span></div>
    <div>ICE Health: <span id="raid-ehp" class="font-mono font-bold text-rose-400">100</span></div>
    <div>Energy: <span id="raid-energy" class="font-mono font-bold text-brand-gold">3/3</span></div>
  </div>

  <div class="w-full p-4 rounded-2xl border-2 border-cyan-500/30 bg-black/90 shadow-2xl flex flex-col items-center mb-3">
    <div class="text-xs text-gray-400 mb-1">ICE Node Threat Intent:</div>
    <div class="font-mono font-bold text-rose-400 text-sm">⚠️ Uploading Counter-Virus: 14 DMG</div>
  </div>

  <div id="raid-cards" class="flex flex-wrap justify-center gap-2 w-full mb-3"></div>

  <button id="raid-end-turn" class="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
    End Turn (ICE Resolves)
  </button>
</div>

<script>
  import { sound } from '../utils/audio';

  const DECK = [
    { name: 'Ping Exploit', cost: 1, type: 'atk', val: 8, desc: 'Deal 8 DMG' },
    { name: 'Firewall Patch', cost: 1, type: 'def', val: 10, desc: 'Gain 10 Shield' },
    { name: 'DDOS Torrent', cost: 2, type: 'atk', val: 18, desc: 'Deal 18 DMG' },
    { name: 'Overclock', cost: 0, type: 'buff', val: 1, desc: '+1 Energy' }
  ];

  let pHP = 80;
  let pDef = 0;
  let eHP = 100;
  let energy = 3;
  let hand: any[] = [];

  const phpEl = document.getElementById('raid-php')!;
  const pdefEl = document.getElementById('raid-pdef')!;
  const ehpEl = document.getElementById('raid-ehp')!;
  const nrgEl = document.getElementById('raid-energy')!;
  const cardsEl = document.getElementById('raid-cards')!;
  const endBtn = document.getElementById('raid-end-turn')!;

  function drawHand() {
    energy = 3;
    pDef = 0;
    hand = [...DECK, ...DECK].sort(() => Math.random() - 0.5).slice(0, 4);
    render();
  }

  function render() {
    phpEl.textContent = pHP.toString();
    pdefEl.textContent = pDef.toString();
    ehpEl.textContent = eHP.toString();
    nrgEl.textContent = \`\${energy}/3\`;

    cardsEl.innerHTML = '';
    hand.forEach((card, idx) => {
      const btn = document.createElement('button');
      btn.className = \`w-24 h-32 rounded-xl border-2 flex flex-col justify-between p-2 text-left transition-all \${
        energy >= card.cost ? 'border-cyan-400 bg-cyan-950/40 hover:-translate-y-1' : 'border-gray-800 bg-gray-900/40 opacity-40'
      }\`;
      btn.innerHTML = \`
        <div class="flex justify-between items-center text-xs">
          <span class="font-bold text-white">\${card.name}</span>
          <span class="font-mono text-cyan-400 font-bold bg-cyan-900/60 px-1 rounded">\${card.cost}E</span>
        </div>
        <div class="text-[10px] text-gray-300 font-mono">\${card.desc}</div>
        <div class="text-[9px] text-cyan-500 font-bold uppercase tracking-wider">\${card.type}</div>
      \`;
      btn.addEventListener('click', () => {
        if (energy < card.cost) {
          sound.blip();
          return;
        }
        sound.score();
        energy -= card.cost;
        if (card.type === 'atk') eHP = Math.max(0, eHP - card.val);
        if (card.type === 'def') pDef += card.val;
        if (card.type === 'buff') energy += card.val;

        hand.splice(idx, 1);
        if (eHP <= 0) {
          sound.victory();
          alert('🎉 ICE Node Breached! Server Unlocked.');
          eHP = 120;
          pHP = 80;
          drawHand();
          return;
        }
        render();
      });
      cardsEl.appendChild(btn);
    });
  }

  endBtn.addEventListener('click', () => {
    sound.click();
    const iceDmg = Math.max(0, 14 - pDef);
    pHP = Math.max(0, pHP - iceDmg);

    if (pHP <= 0) {
      sound.gameOver();
      alert('💥 Node Connection Terminated! System Wipe.');
      pHP = 80;
      eHP = 100;
    }

    drawHand();
  });

  drawHand();
</script>
`
  },

  // 17. MiniTower Auto (Tiny Auto-Battler)
  {
    meta: {
      id: 'minitower',
      slug: 'minitower',
      subdomain: 'minitower',
      title: 'MiniTower: Auto-Battler',
      tagline: 'Draft tiny warriors, place them on the battlefield, and watch auto-battles unfold!',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.1M',
      color: '#3b82f6',
      badge: 'Auto Chess',
      releaseDate: '2026-03-18',
      keywords: ['mini auto battler free', 'teamfight tactics web', 'browser auto chess', 'tiny auto battle'],
      description: 'Draft Knights, Archers, and Mages into 3 combat lanes and hit Battle to watch automated war.',
      controls: [{ key: 'Buy Unit', action: 'Recruit fighter with gold' }, { key: 'Battle', action: 'Start automated combat wave' }],
      instructions: ['Buy units from the draft shop.', 'Place units on your side of the battlefield.', 'Hit BATTLE! Units attack automatically.'],
      strategies: ['Put armored Knights in the front lane and Archers safely in the back.'],
      faqs: [{ question: 'How do units level up?', answer: 'Drafting identical units boosts their star tier and HP!' }]
    },
    component: `---
// MiniTower: Auto-Battler
---

<div id="tower-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Wave: <span id="tower-wave" class="font-mono font-bold text-brand-neon">1</span></div>
    <div>Gold: <span id="tower-gold" class="font-mono font-bold text-brand-gold">10</span></div>
    <div>Wins: <span id="tower-wins" class="font-mono font-bold text-white">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="tower-canvas" width="320" height="300" class="block"></canvas>
  </div>

  <div class="grid grid-cols-3 gap-2 mt-3 w-full">
    <button class="buy-unit rounded-xl border border-brand-border bg-brand-card p-2 text-xs text-white hover:border-brand-neon" data-type="knight">🛡️ Knight (4G)</button>
    <button class="buy-unit rounded-xl border border-brand-border bg-brand-card p-2 text-xs text-white hover:border-brand-neon" data-type="archer">🏹 Archer (3G)</button>
    <button class="buy-unit rounded-xl border border-brand-border bg-brand-card p-2 text-xs text-white hover:border-brand-neon" data-type="mage">🔮 Mage (5G)</button>
  </div>

  <button id="tower-battle-btn" class="mt-3 w-full rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
    START BATTLE!
  </button>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('tower-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const waveEl = document.getElementById('tower-wave')!;
  const goldEl = document.getElementById('tower-gold')!;
  const winsEl = document.getElementById('tower-wins')!;
  const battleBtn = document.getElementById('tower-battle-btn')!;

  let wave = 1;
  let gold = 10;
  let wins = 0;
  let playerUnits: { type: string; x: number; y: number; hp: number; atk: number }[] = [];
  let enemyUnits: { type: string; x: number; y: number; hp: number; atk: number }[] = [];
  let inBattle = false;

  function spawnEnemies() {
    enemyUnits = [];
    for (let i = 0; i < wave + 1; i++) {
      enemyUnits.push({
        type: 'goblin',
        x: 250,
        y: 60 + i * 50,
        hp: 30 + wave * 10,
        atk: 5 + wave * 2
      });
    }
  }

  function draw() {
    ctx.fillStyle = '#0a0d14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw battlefield split line
    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(160, 300);
    ctx.stroke();

    // Draw player units
    playerUnits.forEach(u => {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(u.x, u.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px sans-serif';
      ctx.fillText(u.type[0].toUpperCase(), u.x - 4, u.y + 4);
    });

    // Draw enemies
    enemyUnits.forEach(u => {
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(u.x, u.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px sans-serif';
      ctx.fillText('E', u.x - 4, u.y + 4);
    });
  }

  document.querySelectorAll('.buy-unit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (inBattle) return;
      const type = (e.currentTarget as HTMLElement).dataset.type!;
      const costs: Record<string, number> = { knight: 4, archer: 3, mage: 5 };
      if (gold >= costs[type] && playerUnits.length < 5) {
        sound.click();
        gold -= costs[type];
        goldEl.textContent = gold.toString();
        playerUnits.push({
          type,
          x: 60,
          y: 60 + playerUnits.length * 45,
          hp: type === 'knight' ? 80 : 40,
          atk: type === 'archer' ? 15 : 10
        });
        draw();
      }
    });
  });

  battleBtn.addEventListener('click', () => {
    if (inBattle || playerUnits.length === 0) return;
    inBattle = true;
    sound.score();

    const interval = setInterval(() => {
      playerUnits.forEach(p => p.x += 1.5);
      enemyUnits.forEach(e => e.x -= 1.5);

      if (playerUnits.length > 0 && enemyUnits.length > 0) {
        const p = playerUnits[0];
        const e = enemyUnits[0];
        if (Math.hypot(p.x - e.x, p.y - e.y) < 30) {
          p.hp -= e.atk;
          e.hp -= p.atk;
          if (p.hp <= 0) playerUnits.shift();
          if (e.hp <= 0) enemyUnits.shift();
        }
      }

      draw();

      if (enemyUnits.length === 0) {
        clearInterval(interval);
        inBattle = false;
        sound.victory();
        wins++;
        wave++;
        gold += 8;
        winsEl.textContent = wins.toString();
        waveEl.textContent = wave.toString();
        goldEl.textContent = gold.toString();
        spawnEnemies();
        draw();
      } else if (playerUnits.length === 0) {
        clearInterval(interval);
        inBattle = false;
        sound.gameOver();
        alert('💥 Army wiped out! Try again.');
        gold = 10;
        wave = 1;
        spawnEnemies();
        draw();
      }
    }, 40);
  });

  spawnEnemies();
  draw();
</script>
`
  },

  // 18. MicroRogue (1-Bit Crypt)
  {
    meta: {
      id: 'microrogue',
      slug: 'microrogue',
      subdomain: 'microrogue',
      title: 'MicroRogue: 1-Bit Crypt',
      tagline: 'Minimalist 9×9 monochrome chess roguelike! Predict deterministic enemy movement.',
      category: 'puzzle',
      rating: 4.8,
      playCount: '780K',
      color: '#f1f5f9',
      badge: '1-Bit Chess',
      releaseDate: '2026-03-20',
      keywords: ['1 bit roguelike', 'chess dungeon puzzle', 'minimalist roguelike browser', 'tactical grid puzzle'],
      description: 'Zero luck, 100% tactical chess puzzle: defeat enemies by stepping into their flank tiles.',
      controls: [{ key: 'Arrow Keys / WASD', action: 'Step 1 tile in 4 directions' }],
      instructions: ['You are the white cross (+).', 'Enemies move like Pawns and Rooks.', 'Step into an enemy tile to eliminate them.'],
      strategies: ['Anticipate enemy counter-steps before moving into an open lane.'],
      faqs: [{ question: 'Is every level solvable?', answer: 'Yes, each room is a deterministic logic puzzle!' }]
    },
    component: `---
// MicroRogue: 1-Bit Crypt
---

<div id="micro-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-white/20 bg-black px-4 py-2 text-xs">
    <div class="font-mono text-white font-bold">DEPTH: <span id="micro-depth">1</span></div>
    <div class="font-mono text-gray-400">ENEMIES: <span id="micro-enemies" class="text-white font-bold">3</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-white/40 overflow-hidden bg-black shadow-2xl">
    <canvas id="micro-canvas" width="300" height="300" class="block"></canvas>
  </div>

  <div class="mt-4 flex gap-2">
    <button id="micro-up" class="px-4 py-2 bg-white/10 rounded-lg text-white font-bold border border-white/20">▲</button>
  </div>
  <div class="flex gap-2 mt-1">
    <button id="micro-left" class="px-4 py-2 bg-white/10 rounded-lg text-white font-bold border border-white/20">◀</button>
    <button id="micro-down" class="px-4 py-2 bg-white/10 rounded-lg text-white font-bold border border-white/20">▼</button>
    <button id="micro-right" class="px-4 py-2 bg-white/10 rounded-lg text-white font-bold border border-white/20">▶</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('micro-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const depthEl = document.getElementById('micro-depth')!;
  const enemiesEl = document.getElementById('micro-enemies')!;

  const GRID = 9;
  const CELL = 300 / GRID;
  let player = { x: 1, y: 1 };
  let exit = { x: 7, y: 7 };
  let enemies = [
    { x: 4, y: 4 },
    { x: 6, y: 2 },
    { x: 2, y: 6 }
  ];
  let depth = 1;

  function draw() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = '#222222';
    for (let i = 0; i <= GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0);
      ctx.lineTo(i * CELL, 300);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL);
      ctx.lineTo(300, i * CELL);
      ctx.stroke();
    }

    // Draw exit
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(exit.x * CELL + 6, exit.y * CELL + 6, CELL - 12, CELL - 12);

    // Draw player (+)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('+', player.x * CELL + CELL / 2, player.y * CELL + CELL / 2);

    // Draw enemies (x)
    enemies.forEach(e => {
      ctx.fillText('x', e.x * CELL + CELL / 2, e.y * CELL + CELL / 2);
    });

    depthEl.textContent = depth.toString();
    enemiesEl.textContent = enemies.length.toString();
  }

  function move(dx: number, dy: number) {
    const nx = Math.max(0, Math.min(GRID - 1, player.x + dx));
    const ny = Math.max(0, Math.min(GRID - 1, player.y + dy));

    sound.click();
    player.x = nx;
    player.y = ny;

    // Check enemy kills
    enemies = enemies.filter(e => {
      if (e.x === player.x && e.y === player.y) {
        sound.score();
        return false;
      }
      return true;
    });

    // Check exit
    if (player.x === exit.x && player.y === exit.y && enemies.length === 0) {
      sound.victory();
      depth++;
      player = { x: 1, y: 1 };
      enemies = [
        { x: Math.floor(Math.random() * 7) + 1, y: Math.floor(Math.random() * 7) + 1 },
        { x: Math.floor(Math.random() * 7) + 1, y: Math.floor(Math.random() * 7) + 1 }
      ];
    }

    draw();
  }

  document.getElementById('micro-up')?.addEventListener('click', () => move(0, -1));
  document.getElementById('micro-down')?.addEventListener('click', () => move(0, 1));
  document.getElementById('micro-left')?.addEventListener('click', () => move(-1, 0));
  document.getElementById('micro-right')?.addEventListener('click', () => move(1, 0));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') move(0, -1);
    if (e.key === 'ArrowDown') move(0, 1);
    if (e.key === 'ArrowLeft') move(-1, 0);
    if (e.key === 'ArrowRight') move(1, 0);
  });

  draw();
</script>
`
  },

  // 19. LootGoblin (Inventory Battler)
  {
    meta: {
      id: 'lootgoblin',
      slug: 'lootgoblin',
      subdomain: 'backpack',
      title: 'LootGoblin: Inventory Battler',
      tagline: 'Arrange weapons, whetstones, and potions in your backpack for maximum synergy!',
      category: 'puzzle',
      rating: 4.9,
      playCount: '1.5M',
      color: '#10b981',
      badge: 'Inventory RPG',
      releaseDate: '2026-03-22',
      keywords: ['backpack hero online free', 'backpack battles web', 'inventory puzzle game', 'grid inventory battler'],
      description: 'Backpack management is your weapon! Organize daggers and shields for optimal adjacency combos.',
      controls: [{ key: 'Click Grid', action: 'Place equipment item' }, { key: 'Simulate Battle', action: 'Test inventory power' }],
      instructions: ['Fit equipment inside a 4x4 backpack grid.', 'Swords adjacent to whetstones get +5 DMG.', 'Potions in corners heal double.'],
      strategies: ['Position high-damage weapons next to booster gems.'],
      faqs: [{ question: 'Is inventory size upgradeable?', answer: 'Yes, clear floors to expand your bag!' }]
    },
    component: `---
// LootGoblin: Inventory Battler
---

<div id="loot-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Bag Power: <span id="loot-power" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Enemy HP: <span id="loot-ehp" class="font-mono font-bold text-rose-400">100</span></div>
  </div>

  <div class="w-full p-4 bg-brand-card border-2 border-brand-border rounded-2xl shadow-2xl">
    <div class="text-xs text-gray-400 mb-2 text-center">4×4 Backpack Grid</div>
    <div id="loot-grid" class="grid grid-cols-4 gap-2 mb-4"></div>
    <button id="loot-fight" class="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-brand-accent py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
      SIMULATE BATTLE!
    </button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const ITEMS = [
    { icon: '🗡️', name: 'Dagger', basePower: 15 },
    { icon: '💎', name: 'Gem', basePower: 5 },
    { icon: '🛡️', name: 'Shield', basePower: 10 },
    { icon: '⚡', name: 'Rune', basePower: 20 }
  ];

  let grid = Array(16).fill(null);
  grid[0] = ITEMS[0];
  grid[1] = ITEMS[1];
  grid[5] = ITEMS[2];

  const gridEl = document.getElementById('loot-grid')!;
  const powerEl = document.getElementById('loot-power')!;
  const ehpEl = document.getElementById('loot-ehp')!;
  const fightBtn = document.getElementById('loot-fight')!;

  function calculatePower() {
    let power = 0;
    grid.forEach((item, idx) => {
      if (item) {
        power += item.basePower;
        // Adjacency bonus: if dagger next to gem, +10 power
        if (item.name === 'Dagger') {
          const adj = [idx - 1, idx + 1, idx - 4, idx + 4];
          adj.forEach(a => {
            if (grid[a] && grid[a].name === 'Gem') power += 10;
          });
        }
      }
    });
    powerEl.textContent = power.toString();
    return power;
  }

  function render() {
    gridEl.innerHTML = '';
    grid.forEach((item, idx) => {
      const cell = document.createElement('div');
      cell.className = 'w-14 h-14 rounded-xl border border-brand-border bg-brand-dark flex flex-col items-center justify-center cursor-pointer hover:border-brand-neon';
      if (item) {
        cell.innerHTML = \`<span class="text-xl">\${item.icon}</span><span class="text-[9px] text-gray-400 mt-0.5">\${item.name}</span>\`;
      }
      cell.addEventListener('click', () => {
        sound.click();
        if (grid[idx]) {
          grid[idx] = null;
        } else {
          grid[idx] = ITEMS[Math.floor(Math.random() * ITEMS.length)];
        }
        render();
      });
      gridEl.appendChild(cell);
    });
    calculatePower();
  }

  fightBtn.addEventListener('click', () => {
    const power = calculatePower();
    sound.score();
    if (power >= 60) {
      sound.victory();
      alert(\`🎉 Victory! Backpack layout dealt \${power} DMG and defeated the dungeon monster!\`);
    } else {
      sound.blip();
      alert(\`⚠️ Need at least 60 Power! Current: \${power}. Try pairing Daggers next to Gems!\`);
    }
  });

  render();
</script>
`
  },

  // 20. Infinite Minesweeper RPG
  {
    meta: {
      id: 'infinite-minesweeper',
      slug: 'infinite-minesweeper',
      subdomain: 'sweeper-rpg',
      title: 'SweeperRPG: Infinite Mines',
      tagline: 'Minesweeper meets dungeon crawler! Numbers reveal XP, monsters, and traps.',
      category: 'puzzle',
      rating: 4.8,
      playCount: '890K',
      color: '#eab308',
      badge: 'RPG Logic',
      releaseDate: '2026-03-25',
      keywords: ['minesweeper rpg', 'infinite minesweeper', 'dungeon sweeper free', 'minesweeper roguelike'],
      description: 'Clear rows of tiles to descend deeper into an endless monster-filled minefield.',
      controls: [{ key: 'Click Tile', action: 'Uncover cell' }, { key: 'Flag (F / Right Click)', action: 'Mark danger tile' }],
      instructions: ['Numbers indicate how many adjacent traps exist.', 'Revealing safe tiles grants XP and Gold.', 'Survive as many floors as possible.'],
      strategies: ['Armor reduces damage taken when accidentally stepping on a trap.'],
      faqs: [{ question: 'Is the map endless?', answer: 'Yes! Rows continuously scroll as you dig down.' }]
    },
    component: `---
// SweeperRPG: Infinite Mines
---

<div id="sweeper-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Depth: <span id="sw-depth" class="font-mono font-bold text-brand-neon">1</span></div>
    <div>HP: <span id="sw-hp" class="font-mono font-bold text-emerald-400">100</span></div>
    <div>XP: <span id="sw-xp" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl p-2">
    <div id="sw-grid" class="grid grid-cols-6 gap-1.5"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  let hp = 100;
  let xp = 0;
  let depth = 1;
  const gridEl = document.getElementById('sw-grid')!;
  const hpEl = document.getElementById('sw-hp')!;
  const xpEl = document.getElementById('sw-xp')!;
  const depthEl = document.getElementById('sw-depth')!;

  interface Tile {
    isMine: boolean;
    revealed: boolean;
    val: number;
  }

  let tiles: Tile[] = [];

  function initBoard() {
    tiles = [];
    for (let i = 0; i < 36; i++) {
      tiles.push({
        isMine: Math.random() < 0.2,
        revealed: false,
        val: 0
      });
    }

    // Calculate neighboring mines
    tiles.forEach((t, i) => {
      if (t.isMine) return;
      const neighbors = [i - 1, i + 1, i - 6, i + 6];
      let count = 0;
      neighbors.forEach(n => {
        if (n >= 0 && n < 36 && tiles[n]?.isMine) count++;
      });
      t.val = count;
    });

    render();
  }

  function render() {
    gridEl.innerHTML = '';
    hpEl.textContent = hp.toString();
    xpEl.textContent = xp.toString();
    depthEl.textContent = depth.toString();

    tiles.forEach((t, idx) => {
      const btn = document.createElement('button');
      btn.className = \`w-11 h-11 rounded-lg border font-mono font-bold text-sm transition-all \${
        t.revealed ? (t.isMine ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-brand-card border-brand-border text-brand-neon') : 'bg-brand-dark border-brand-border hover:border-gray-500'
      }\`;
      btn.textContent = t.revealed ? (t.isMine ? '💣' : t.val > 0 ? t.val.toString() : '') : '';
      btn.addEventListener('click', () => {
        if (t.revealed || hp <= 0) return;
        t.revealed = true;
        if (t.isMine) {
          sound.explosion();
          hp = Math.max(0, hp - 35);
          if (hp <= 0) {
            sound.gameOver();
            alert('💥 Defeated in the mines! Resetting depth.');
            hp = 100;
            depth = 1;
            initBoard();
            return;
          }
        } else {
          sound.blip();
          xp += 10;
        }

        const unrevealedSafe = tiles.filter(tile => !tile.isMine && !tile.revealed);
        if (unrevealedSafe.length === 0) {
          sound.victory();
          depth++;
          xp += 100;
          initBoard();
          return;
        }

        render();
      });
      gridEl.appendChild(btn);
    });
  }

  initBoard();
</script>
`
  },

  // 21. Stellar Collapse (Gravity Merge)
  {
    meta: {
      id: 'stellar-collapse',
      slug: 'stellar-collapse',
      subdomain: 'gravitymerge',
      title: 'Stellar Collapse: Gravity Merge',
      tagline: '360° radial Suika physics! Shoot planets toward the sun to merge into a Black Hole.',
      category: 'physics',
      rating: 4.9,
      playCount: '2.1M',
      color: '#8b5cf6',
      badge: 'Radial Suika',
      releaseDate: '2026-03-28',
      keywords: ['suika game gravity', 'radial watermelon game', 'planet merge game online', 'space merge physics'],
      description: 'A 360-degree twist on Suika: launch asteroids, moons, and planets toward a gravitational core.',
      controls: [{ key: 'Aim Mouse / Touch', action: 'Direct launch angle from outer ring' }, { key: 'Click / Tap', action: 'Shoot planet toward core' }],
      instructions: ['Shoot planets toward the center gravity well.', 'Two matching planets merge into the next larger celestial body.', 'Create the ultimate Black Hole!'],
      strategies: ['Keep heavier planets on one side of the orbit to avoid blocking new launches.'],
      faqs: [{ question: 'What happens at Black Hole?', answer: 'It collapses with a screen-shaking supernova victory fanfare!' }]
    },
    component: `---
// Stellar Collapse: Gravity Merge
---

<div id="stellar-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="stellar-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Next: <span id="stellar-next" class="text-sm">🌕 Moon</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="stellar-canvas" width="340" height="340" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const TIERS = [
    { name: 'Asteroid', r: 8, color: '#64748b', pts: 10 },
    { name: 'Moon', r: 12, color: '#e2e8f0', pts: 20 },
    { name: 'Mars', r: 16, color: '#ef4444', pts: 40 },
    { name: 'Earth', r: 20, color: '#38bdf8', pts: 80 },
    { name: 'Jupiter', r: 26, color: '#f59e0b', pts: 160 }
  ];

  const canvas = document.getElementById('stellar-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('stellar-score')!;
  const nextEl = document.getElementById('stellar-next')!;

  let score = 0;
  let nextTier = 0;
  let aimAngle = 0;
  let bodies: { x: number; y: number; vx: number; vy: number; tier: number }[] = [];

  function loop() {
    ctx.fillStyle = '#05070d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = 170;
    const cy = 170;

    // Draw central sun / core
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fill();

    // Aim guide
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(aimAngle) * 150, cy + Math.sin(aimAngle) * 150);
    ctx.lineTo(cx, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // Update bodies
    for (let i = bodies.length - 1; i >= 0; i--) {
      const b = bodies[i];
      // Gravity toward center
      const dx = cx - b.x;
      const dy = cy - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 18) {
        b.vx += (dx / dist) * 0.15;
        b.vy += (dy / dist) * 0.15;
      }
      b.vx *= 0.98; // friction
      b.vy *= 0.98;
      b.x += b.vx;
      b.y += b.vy;

      // Check collisions between bodies
      for (let j = i - 1; j >= 0; j--) {
        const b2 = bodies[j];
        const cDist = Math.hypot(b.x - b2.x, b.y - b2.y);
        const minD = TIERS[b.tier].r + TIERS[b2.tier].r;
        if (cDist < minD) {
          if (b.tier === b2.tier && b.tier < TIERS.length - 1) {
            sound.merge();
            b.tier++;
            score += TIERS[b.tier].pts;
            scoreEl.textContent = score.toString();
            bodies.splice(j, 1);
            break;
          } else {
            // Elastic bounce
            b.vx = -b.vx * 0.5;
            b.vy = -b.vy * 0.5;
          }
        }
      }

      // Draw body
      ctx.fillStyle = TIERS[b.tier].color;
      ctx.beginPath();
      ctx.arc(b.x, b.y, TIERS[b.tier].r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    aimAngle = Math.atan2(e.clientY - rect.top - 170, e.clientX - rect.left - 170);
  });

  canvas.addEventListener('click', () => {
    sound.blip();
    const cx = 170;
    const cy = 170;
    const spawnX = cx + Math.cos(aimAngle) * 145;
    const spawnY = cy + Math.sin(aimAngle) * 145;

    bodies.push({
      x: spawnX,
      y: spawnY,
      vx: -Math.cos(aimAngle) * 4,
      vy: -Math.sin(aimAngle) * 4,
      tier: nextTier
    });

    nextTier = Math.floor(Math.random() * 2);
    nextEl.textContent = TIERS[nextTier].name;
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 22. JellyDrop (2048 Soft Merge)
  {
    meta: {
      id: 'jellydrop',
      slug: 'jellydrop',
      subdomain: 'jelly2048',
      title: 'JellyDrop: 2048 Soft Merge',
      tagline: 'Squishy spring physics 2048! Bouncy jelly numbers deform, squeeze, and merge.',
      category: 'physics',
      rating: 4.8,
      playCount: '1.3M',
      color: '#ec4899',
      badge: 'Squishy 2048',
      releaseDate: '2026-04-01',
      keywords: ['jelly 2048 online', 'squishy 2048 physics', 'soft body merge game', 'bouncy 2048 browser'],
      description: '2048 with soft-body spring physics: drop bouncy squishy jelly orbs that compress and merge together.',
      controls: [{ key: 'Click / Tap to Drop', action: 'Drop jelly orb from top' }],
      instructions: ['Drop bouncy numbered jellies.', 'Matching numbers squish and merge on contact.', 'Merge up to 2048!'],
      strategies: ['Drop matching numbers in adjacent lanes so they roll into each other.'],
      faqs: [{ question: 'Does it use real spring physics?', answer: 'Yes, Verlet integration simulates soft-body jiggle.' }]
    },
    component: `---
// JellyDrop: 2048 Soft Merge
---

<div id="jelly-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-pink-500/40 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="jelly-score" class="font-mono font-bold text-pink-400">0</span></div>
    <div>Next: <span id="jelly-next" class="font-mono font-bold text-white">2</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-pink-500/40 overflow-hidden bg-black shadow-2xl">
    <canvas id="jelly-canvas" width="320" height="380" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('jelly-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('jelly-score')!;
  const nextEl = document.getElementById('jelly-next')!;

  let score = 0;
  let nextVal = 2;
  let dropX = 160;
  let jellies: { x: number; y: number; vy: number; val: number; r: number }[] = [];

  function loop() {
    ctx.fillStyle = '#0d0612';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drop indicator
    ctx.strokeStyle = 'rgba(236,72,153,0.3)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(dropX, 20);
    ctx.lineTo(dropX, 360);
    ctx.stroke();
    ctx.setLineDash([]);

    // Update jellies
    for (let i = jellies.length - 1; i >= 0; i--) {
      const j = jellies[i];
      j.vy += 0.25; // gravity
      j.y += j.vy;

      // Floor collision with bounce
      if (j.y > canvas.height - j.r) {
        j.y = canvas.height - j.r;
        j.vy *= -0.4;
      }

      // Check merge with other jellies
      for (let k = i - 1; k >= 0; k--) {
        const j2 = jellies[k];
        const dist = Math.hypot(j.x - j2.x, j.y - j2.y);
        if (dist < j.r + j2.r) {
          if (j.val === j2.val) {
            sound.merge();
            j.val *= 2;
            j.r = Math.min(36, j.r + 4);
            score += j.val;
            scoreEl.textContent = score.toString();
            jellies.splice(k, 1);
            break;
          } else {
            j.vy *= -0.3;
          }
        }
      }

      // Draw jelly
      ctx.fillStyle = '#ec4899';
      ctx.beginPath();
      ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(j.val.toString(), j.x, j.y);
    }

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    dropX = Math.max(30, Math.min(canvas.width - 30, e.clientX - rect.left));
  });

  canvas.addEventListener('click', () => {
    sound.click();
    jellies.push({
      x: dropX,
      y: 30,
      vy: 1,
      val: nextVal,
      r: 16
    });
    nextVal = Math.random() < 0.7 ? 2 : 4;
    nextEl.textContent = nextVal.toString();
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 23. MagnetoBlocks (Polar Match)
  {
    meta: {
      id: 'magnetoblocks',
      slug: 'magnetoblocks',
      subdomain: 'magnets',
      title: 'MagnetoBlocks: Polar Match',
      tagline: 'Red (+) and Blue (-) magnetic blocks attract and repel! Connect 4 to clear.',
      category: 'physics',
      rating: 4.8,
      playCount: '730K',
      color: '#ef4444',
      badge: 'Magnetic Physics',
      releaseDate: '2026-04-05',
      keywords: ['magnetic physics game', 'magnet match 4', 'polar blocks puzzle', 'magnet drop web'],
      description: 'Dropping blocks creates sudden snaps and violent magnetic repulsions based on positive/negative polarity.',
      controls: [{ key: 'Click Columns', action: 'Drop magnetic block' }],
      instructions: ['Blocks have North (+) and South (-) poles.', 'Opposite poles snap together.', 'Match 4 connected blocks of the same color to detonate.'],
      strategies: ['Use magnetic repulsion to fling blocks across into empty lanes.'],
      faqs: [{ question: 'How do chain reactions score?', answer: 'Each subsequent snap earns 2x combo multipliers!' }]
    },
    component: `---
// MagnetoBlocks: Polar Match
---

<div id="magneto-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="mag-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Next Pole: <span id="mag-next" class="font-bold text-red-400">RED (+)</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="mag-canvas" width="300" height="360" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('mag-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('mag-score')!;
  const nextEl = document.getElementById('mag-next')!;

  let score = 0;
  let nextIsRed = true;
  let blocks: { x: number; y: number; isRed: boolean }[] = [];

  function draw() {
    ctx.fillStyle = '#0a0a14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lanes
    ctx.strokeStyle = '#1e293b';
    for (let i = 1; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 60, 0);
      ctx.lineTo(i * 60, 360);
      ctx.stroke();
    }

    // Draw blocks
    blocks.forEach(b => {
      ctx.fillStyle = b.isRed ? '#ef4444' : '#3b82f6';
      ctx.fillRect(b.x * 60 + 6, b.y * 60 + 6, 48, 48);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(b.isRed ? '+' : '-', b.x * 60 + 30, b.y * 60 + 30);
    });
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / 60);
    if (col < 0 || col >= 5) return;

    sound.click();
    // Find lowest empty slot in column
    const colBlocks = blocks.filter(b => b.x === col);
    if (colBlocks.length >= 6) return;

    const row = 5 - colBlocks.length;
    blocks.push({ x: col, y: row, isRed: nextIsRed });

    // Check adjacent magnetic snap
    const adjacent = blocks.filter(b => Math.abs(b.x - col) + Math.abs(b.y - row) === 1);
    adjacent.forEach(adj => {
      if (adj.isRed !== nextIsRed) {
        sound.score();
        score += 50;
      }
    });

    scoreEl.textContent = score.toString();
    nextIsRed = !nextIsRed;
    nextEl.textContent = nextIsRed ? 'RED (+)' : 'BLUE (-)';
    nextEl.className = nextIsRed ? 'font-bold text-red-400' : 'font-bold text-blue-400';
    draw();
  });

  draw();
</script>
`
  },

  // 24. CoinStacker ASMR (Coin Pusher)
  {
    meta: {
      id: 'coinstacker',
      slug: 'coinstacker',
      subdomain: 'coinpusher',
      title: 'CoinStacker: 2D Coin Pusher',
      tagline: 'Realistic 2D arcade coin pusher! Drop tokens to push piles of gems off the edge.',
      category: 'physics',
      rating: 4.8,
      playCount: '1.4M',
      color: '#eab308',
      badge: 'Arcade ASMR',
      releaseDate: '2026-04-08',
      keywords: ['coin pusher online free', 'coin dozer browser', 'realistic coin pusher simulator', 'arcade coin drop'],
      description: 'The beloved carnival coin pusher simulated with authentic 2D physics and satisfying metallic sound effects.',
      controls: [{ key: 'Click / Tap', action: 'Drop gold coin' }],
      instructions: ['Drop gold coins onto the moving top pusher.', 'Coins push stacks toward the payout chute.', 'Collect emeralds and bonus prize tokens!'],
      strategies: ['Time coin drops when the pusher is fully retracted for maximum push distance.'],
      faqs: [{ question: 'Do coins regenerate?', answer: 'Yes! You earn 1 free coin every 3 seconds.' }]
    },
    component: `---
// CoinStacker: 2D Coin Pusher
---

<div id="coin-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Tokens: <span id="coin-tokens" class="font-mono font-bold text-brand-gold">30</span></div>
    <div>Collected: <span id="coin-collected" class="font-mono font-bold text-brand-neon">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="coin-canvas" width="320" height="380" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('coin-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const tokenEl = document.getElementById('coin-tokens')!;
  const collEl = document.getElementById('coin-collected')!;

  let tokens = 30;
  let collected = 0;
  let pusherY = 120;
  let pusherDir = 1;
  let coins: { x: number; y: number; vy: number; isGem: boolean }[] = [];

  // Seed table with initial coins
  for (let i = 0; i < 40; i++) {
    coins.push({
      x: 30 + Math.random() * 260,
      y: 140 + Math.random() * 200,
      vy: 0,
      isGem: Math.random() < 0.15
    });
  }

  function loop() {
    ctx.fillStyle = '#11131c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Moving pusher
    pusherY += pusherDir * 0.8;
    if (pusherY > 150) pusherDir = -1;
    if (pusherY < 110) pusherDir = 1;

    ctx.fillStyle = '#374151';
    ctx.fillRect(20, pusherY, 280, 20);

    // Update coins
    for (let i = coins.length - 1; i >= 0; i--) {
      const c = coins[i];
      c.vy += 0.15; // gentle slope gravity
      c.y += c.vy;

      // Push by bar
      if (c.y >= pusherY && c.y <= pusherY + 25) {
        c.y = pusherY + 25;
        c.vy = 1.2;
      }

      // Check fall off payout edge
      if (c.y > 360) {
        sound.score();
        collected += c.isGem ? 50 : 10;
        tokens += c.isGem ? 5 : 1;
        collEl.textContent = collected.toString();
        tokenEl.textContent = tokens.toString();
        coins.splice(i, 1);
        continue;
      }

      // Draw coin
      ctx.fillStyle = c.isGem ? '#10b981' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#d97706';
      ctx.stroke();
    }

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('click', (e) => {
    if (tokens <= 0) return;
    sound.click();
    tokens--;
    tokenEl.textContent = tokens.toString();

    const rect = canvas.getBoundingClientRect();
    coins.push({
      x: e.clientX - rect.left,
      y: 40,
      vy: 2,
      isGem: Math.random() < 0.1
    });
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 25. LiquidSort Unlimited (Fluid Pour)
  {
    meta: {
      id: 'liquidsort',
      slug: 'liquidsort',
      subdomain: 'watersort',
      title: 'LiquidSort: Fluid Color Pour',
      tagline: 'Pour colored liquids between test tubes until each tube holds a single solid color!',
      category: 'physics',
      rating: 4.9,
      playCount: '2.5M',
      color: '#06b6d4',
      badge: 'Fluid Sorting',
      releaseDate: '2026-04-10',
      keywords: ['water sort puzzle online', 'liquid sort game free', 'color pour puzzle browser', 'test tube sort'],
      description: 'The mega-viral mobile fluid sorting puzzle reconstructed on the web with crisp animations and unlimited levels.',
      controls: [{ key: 'Click Tube A', action: 'Select source tube' }, { key: 'Click Tube B', action: 'Pour top color into target' }],
      instructions: ['You can only pour if the target tube has room and matching top color.', 'Empty tubes can accept any color.', 'Sort all colors into dedicated tubes to win.'],
      strategies: ['Prioritize clearing out one full tube early to use as temporary staging.'],
      faqs: [{ question: 'Is every level solvable?', answer: 'Yes, all arrangements are procedurally validated.' }]
    },
    component: `---
// LiquidSort: Fluid Color Pour
---

<div id="liquid-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Level: <span id="liq-lvl" class="font-mono font-bold text-brand-neon">1</span></div>
    <div>Moves: <span id="liq-moves" class="font-mono font-bold text-white">0</span></div>
    <button id="liq-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Reset</button>
  </div>

  <div class="w-full p-6 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl flex justify-center gap-4" id="liq-tubes"></div>
</div>

<script>
  import { sound } from '../utils/audio';

  const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];
  let tubes = [
    ['#ef4444', '#3b82f6', '#ef4444', '#10b981'],
    ['#3b82f6', '#10b981', '#3b82f6', '#ef4444'],
    ['#10b981', '#ef4444', '#10b981', '#3b82f6'],
    [] // empty tube
  ];

  let selectedTube: number | null = null;
  let moves = 0;

  const tubesEl = document.getElementById('liq-tubes')!;
  const movesEl = document.getElementById('liq-moves')!;
  const resetBtn = document.getElementById('liq-reset')!;

  function render() {
    tubesEl.innerHTML = '';
    movesEl.textContent = moves.toString();

    tubes.forEach((tube, idx) => {
      const isSel = selectedTube === idx;
      const tDiv = document.createElement('div');
      tDiv.className = \`w-14 h-44 rounded-b-2xl border-2 flex flex-col-reverse p-1 cursor-pointer transition-all duration-200 \${
        isSel ? 'border-brand-neon -translate-y-3 shadow-xl' : 'border-gray-600 bg-brand-card/40 hover:border-gray-400'
      }\`;

      tube.forEach(color => {
        const drop = document.createElement('div');
        drop.className = 'w-full h-9 rounded transition-all';
        drop.style.backgroundColor = color;
        tDiv.appendChild(drop);
      });

      tDiv.addEventListener('click', () => handleTubeClick(idx));
      tubesEl.appendChild(tDiv);
    });
  }

  function handleTubeClick(idx: number) {
    sound.click();
    if (selectedTube === null) {
      if (tubes[idx].length > 0) {
        selectedTube = idx;
      }
    } else if (selectedTube === idx) {
      selectedTube = null;
    } else {
      const src = tubes[selectedTube];
      const dst = tubes[idx];

      if (dst.length < 4 && (dst.length === 0 || dst[dst.length - 1] === src[src.length - 1])) {
        sound.score();
        moves++;
        dst.push(src.pop()!);
        checkWin();
      } else {
        sound.blip();
      }
      selectedTube = null;
    }
    render();
  }

  function checkWin() {
    const won = tubes.every(t => t.length === 0 || (t.length === 4 && t.every(c => c === t[0])));
    if (won) {
      sound.victory();
      setTimeout(() => alert('🎉 Test Tubes Sorted Perfectly!'), 200);
    }
  }

  resetBtn.addEventListener('click', () => {
    tubes = [
      ['#ef4444', '#3b82f6', '#ef4444', '#10b981'],
      ['#3b82f6', '#10b981', '#3b82f6', '#ef4444'],
      ['#10b981', '#ef4444', '#10b981', '#3b82f6'],
      []
    ];
    selectedTube = null;
    moves = 0;
    render();
  });

  render();
</script>
`
  }
];
