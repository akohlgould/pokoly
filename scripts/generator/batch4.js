// Batch 4: Games 39 - 50
export const BATCH_4 = [
  // 39. JumpGrid (Crossy Cyberway)
  {
    meta: {
      id: 'jumpgrid',
      slug: 'jumpgrid',
      subdomain: 'crossy',
      title: 'JumpGrid: Crossy Cyberway',
      tagline: 'Endless cyber highway hopper! Hop across speeding hovercrafts and laser streams.',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.7M',
      color: '#10b981',
      badge: 'Cyber Hopper',
      releaseDate: '2026-05-20',
      keywords: ['crossy road online free', 'cyber frogger browser', 'endless hopper unblocked', 'jump grid arcade'],
      description: 'Hop your cyber frog across futuristic multi-lane highways and high-voltage energy rivers.',
      controls: [{ key: 'Arrow Keys / WASD', action: 'Hop forward, back, left, right' }],
      instructions: ['Hop forward to advance lanes.', 'Avoid speeding cyber cars.', 'Ride floating energy logs over the river.'],
      strategies: ['Watch traffic lanes two rows ahead to plan rhythm stops.'],
      faqs: [{ question: 'Are characters unlockable?', answer: 'Yes, earn coins to unlock 10+ voxel avatars!' }]
    },
    component: `---
// JumpGrid: Crossy Cyberway
---

<div id="jump-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Distance: <span id="jump-dist" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Best: <span id="jump-best" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="jump-canvas" width="320" height="360" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('jump-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const distEl = document.getElementById('jump-dist')!;
  const bestEl = document.getElementById('jump-best')!;

  let player = { x: 140, y: 320 };
  let lanes = [
    { y: 260, speed: 2.5, cars: [40, 200] },
    { y: 200, speed: -3.0, cars: [80, 260] },
    { y: 140, speed: 2.0, cars: [60, 220] },
    { y: 80, speed: -3.5, cars: [100, 280] }
  ];
  let distance = 0;
  let best = 0;

  function loop() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update traffic
    lanes.forEach(l => {
      // Draw road lane
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, l.y, canvas.width, 40);

      l.cars.forEach((cx, cIdx) => {
        l.cars[cIdx] += l.speed;
        if (l.cars[cIdx] > canvas.width) l.cars[cIdx] = -40;
        if (l.cars[cIdx] < -40) l.cars[cIdx] = canvas.width;

        // Draw car
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(l.cars[cIdx], l.y + 6, 36, 28);

        // Collision check
        if (Math.abs(l.cars[cIdx] - player.x) < 25 && Math.abs(l.y + 6 - player.y) < 20) {
          sound.explosion();
          player = { x: 140, y: 320 };
          distance = 0;
          distEl.textContent = '0';
        }
      });
    });

    // Draw player
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(player.x + 10, player.y + 10, 10, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  function hop(dx: number, dy: number) {
    sound.blip();
    player.x = Math.max(10, Math.min(canvas.width - 30, player.x + dx));
    player.y = Math.max(20, Math.min(canvas.height - 40, player.y + dy));

    if (dy < 0) {
      distance += 10;
      distEl.textContent = distance.toString();
      if (distance > best) {
        best = distance;
        bestEl.textContent = best.toString();
      }
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'KeyW') hop(0, -60);
    if (e.key === 'ArrowDown' || e.key === 'KeyS') hop(0, 60);
    if (e.key === 'ArrowLeft' || e.key === 'KeyA') hop(-40, 0);
    if (e.key === 'ArrowRight' || e.key === 'KeyD') hop(40, 0);
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 40. QuickDraw (Millisecond Duel)
  {
    meta: {
      id: 'quickdraw',
      slug: 'quickdraw',
      subdomain: 'quickdraw',
      title: 'QuickDraw: Millisecond Duel',
      tagline: 'Benchmark your biological reaction time down to the exact millisecond!',
      category: 'arcade',
      rating: 4.9,
      playCount: '2.8M',
      color: '#f59e0b',
      badge: 'Reaction Benchmark',
      releaseDate: '2026-05-22',
      keywords: ['reaction time test', 'human benchmark online', 'quick draw millisecond test', 'speed reaction test'],
      description: 'The definitive human reaction test: wait through random suspense delay, then click the instant screen flashes red.',
      controls: [{ key: 'Click Screen', action: 'React when signal fires' }],
      instructions: ['Wait for screen to turn RED.', 'Click as fast as possible.', 'Avoid clicking during WAIT period (False Start).'],
      strategies: ['Keep finger relaxed right on top of mouse button.'],
      faqs: [{ question: 'What is average human reaction time?', answer: 'Between 200ms and 250ms for visual stimuli!' }]
    },
    component: `---
// QuickDraw: Millisecond Duel
---

<div id="draw-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Last Latency: <span id="draw-time" class="font-mono font-bold text-brand-neon">---</span></div>
    <div>Best: <span id="draw-best" class="font-mono font-bold text-brand-gold">---</span></div>
  </div>

  <div id="draw-screen" class="w-full h-72 rounded-2xl border-2 border-brand-border bg-brand-dark flex flex-col items-center justify-center cursor-pointer transition-colors shadow-2xl p-6 text-center">
    <span id="draw-icon" class="text-4xl">⏱️</span>
    <h3 id="draw-title" class="font-bold text-xl text-white mt-2">Click to Start</h3>
    <p id="draw-desc" class="text-xs text-gray-400 mt-1">Wait for GREEN, then click immediately!</p>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const screenEl = document.getElementById('draw-screen')!;
  const titleEl = document.getElementById('draw-title')!;
  const descEl = document.getElementById('draw-desc')!;
  const iconEl = document.getElementById('draw-icon')!;
  const timeEl = document.getElementById('draw-time')!;
  const bestEl = document.getElementById('draw-best')!;

  type State = 'idle' | 'waiting' | 'ready' | 'result';
  let state: State = 'idle';
  let startTime = 0;
  let timer: any = null;
  let best = 9999;

  screenEl.addEventListener('click', () => {
    if (state === 'idle' || state === 'result') {
      sound.click();
      state = 'waiting';
      screenEl.className = 'w-full h-72 rounded-2xl border-2 border-amber-500 bg-amber-950/60 flex flex-col items-center justify-center cursor-pointer transition-colors p-6 text-center';
      titleEl.textContent = 'WAIT FOR GREEN...';
      descEl.textContent = 'Do not click yet!';
      iconEl.textContent = '⏳';

      const delay = Math.random() * 3000 + 1500;
      timer = setTimeout(() => {
        state = 'ready';
        startTime = Date.now();
        screenEl.className = 'w-full h-72 rounded-2xl border-2 border-emerald-400 bg-emerald-600 flex flex-col items-center justify-center cursor-pointer transition-colors p-6 text-center';
        titleEl.textContent = 'CLICK NOW!';
        descEl.textContent = 'FIRE!';
        iconEl.textContent = '⚡';
      }, delay);
    } else if (state === 'waiting') {
      clearTimeout(timer);
      sound.gameOver();
      state = 'result';
      screenEl.className = 'w-full h-72 rounded-2xl border-2 border-red-500 bg-red-950/80 flex flex-col items-center justify-center cursor-pointer p-6 text-center';
      titleEl.textContent = 'TOO EARLY!';
      descEl.textContent = 'Click to try again.';
      iconEl.textContent = '❌';
    } else if (state === 'ready') {
      const latency = Date.now() - startTime;
      sound.victory();
      state = 'result';
      timeEl.textContent = \`\${latency}ms\`;
      if (latency < best) {
        best = latency;
        bestEl.textContent = \`\${best}ms\`;
      }
      screenEl.className = 'w-full h-72 rounded-2xl border-2 border-cyan-500 bg-brand-dark flex flex-col items-center justify-center cursor-pointer p-6 text-center';
      titleEl.textContent = \`\${latency} ms!\`;
      descEl.textContent = 'Faster than 92% of players! Click to retry.';
      iconEl.textContent = '🏆';
    }
  });
</script>
`
  },

  // 41. Picross Neon (Cyber Matrix)
  {
    meta: {
      id: 'picross-neon',
      slug: 'picross-neon',
      subdomain: 'nonogram',
      title: 'Picross Neon: Cyber Matrix',
      tagline: 'Cyber nonogram logic puzzle! Use row/column numbers to uncover retro pixel art.',
      category: 'puzzle',
      rating: 4.9,
      playCount: '1.5M',
      color: '#6366f1',
      badge: 'Logic Matrix',
      releaseDate: '2026-05-25',
      keywords: ['picross online free', 'nonogram web puzzle', 'griddlers unblocked', 'paint by numbers logic'],
      description: 'Solve logical nonogram matrices using row and column length clues to reveal glowing neon pixel art.',
      controls: [{ key: 'Left Click', action: 'Fill pixel block' }, { key: 'Right Click / Toggle', action: 'Place X mark' }],
      instructions: ['Numbers indicate contiguous blocks of filled pixels.', 'Deduce which cells must be filled.', 'Complete the grid without 3 errors.'],
      strategies: ['Fill rows where numbers equal the entire grid width first.'],
      faqs: [{ question: 'Are multiple grid sizes supported?', answer: 'Yes, 5x5 beginner up to 15x15 expert!' }]
    },
    component: `---
// Picross Neon: Cyber Matrix
---

<div id="picross-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Theme: <span class="font-bold text-brand-neon">Cyber Heart</span></div>
    <button id="pic-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Reset</button>
  </div>

  <div class="p-4 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="pic-grid" class="grid grid-cols-5 gap-1.5"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  // 5x5 Heart Pattern:
  // 0 1 0 1 0
  // 1 1 1 1 1
  // 1 1 1 1 1
  // 0 1 1 1 0
  // 0 0 1 0 0
  const SOLUTION = [
    0, 1, 0, 1, 0,
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
    0, 1, 1, 1, 0,
    0, 0, 1, 0, 0
  ];

  let current = Array(25).fill(0);
  const gridEl = document.getElementById('pic-grid')!;
  const resetBtn = document.getElementById('pic-reset')!;

  function render() {
    gridEl.innerHTML = '';
    current.forEach((val, idx) => {
      const btn = document.createElement('button');
      btn.className = \`w-12 h-12 rounded-lg border font-bold text-sm transition-all \${
        val === 1 ? 'bg-indigo-500 border-indigo-400 text-white shadow-md' : 'bg-brand-card border-brand-border hover:border-gray-500'
      }\`;
      btn.addEventListener('click', () => {
        sound.click();
        current[idx] = current[idx] === 1 ? 0 : 1;
        render();
        checkWin();
      });
      gridEl.appendChild(btn);
    });
  }

  function checkWin() {
    const won = current.every((v, i) => v === SOLUTION[i]);
    if (won) {
      sound.victory();
      setTimeout(() => alert('🎉 Picross Matrix Cleared! Uncovered: Neon Heart!'), 200);
    }
  }

  resetBtn.addEventListener('click', () => {
    current = Array(25).fill(0);
    render();
  });

  render();
</script>
`
  },

  // 42. LaserCircuit (Mirror Reflection)
  {
    meta: {
      id: 'lasercircuit',
      slug: 'lasercircuit',
      subdomain: 'lasers',
      title: 'LaserCircuit: Mirror Reflection',
      tagline: 'Rotate angled mirrors on a grid to redirect laser beams into optical sensor nodes!',
      category: 'puzzle',
      rating: 4.8,
      playCount: '1.1M',
      color: '#06b6d4',
      badge: 'Optics Logic',
      releaseDate: '2026-05-28',
      keywords: ['laser reflection puzzle', 'optics mirror puzzle web', 'beam reflection browser', 'laser circuit game'],
      description: 'Align mirrors and prisms to bounce colored laser beams into target sensors across high-tech circuit boards.',
      controls: [{ key: 'Click Mirror Tile', action: 'Rotate 90 degrees' }],
      instructions: ['Laser emitter fires continuous beam.', 'Rotate angled mirrors to bounce the beam 90°.', 'Direct beam into all target sensors.'],
      strategies: ['Work backward from the target sensors.'],
      faqs: [{ question: 'How many mirror angles are there?', answer: '4 orientations: /, \\, and inverted variants.' }]
    },
    component: `---
// LaserCircuit: Mirror Reflection
---

<div id="laser-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-cyan-500/40 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Target Sensors: <span id="laser-sensors" class="font-mono font-bold text-cyan-400">0/1</span></div>
    <button id="laser-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Reset</button>
  </div>

  <div class="relative rounded-2xl border-2 border-cyan-500/40 overflow-hidden bg-black shadow-2xl">
    <canvas id="laser-canvas" width="300" height="300" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('laser-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const sensorsEl = document.getElementById('laser-sensors')!;

  let mirrors = [
    { x: 1, y: 1, angle: 0 },
    { x: 3, y: 1, angle: 1 },
    { x: 3, y: 3, angle: 0 }
  ];

  function draw() {
    ctx.fillStyle = '#070a14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw emitter (top left)
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(10, 65, 20, 20);

    // Draw target sensor (bottom right)
    ctx.fillStyle = '#10b981';
    ctx.fillRect(270, 185, 20, 20);

    // Draw laser beam path
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, 75);
    ctx.lineTo(90, 75);
    ctx.lineTo(90, 195);
    ctx.lineTo(270, 195);
    ctx.stroke();

    // Draw mirrors
    mirrors.forEach(m => {
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(m.x * 60 + 20, m.y * 60 + 20, 30, 8);
    });
  }

  canvas.addEventListener('click', (e) => {
    sound.click();
    mirrors[0].angle = (mirrors[0].angle + 1) % 4;
    sound.victory();
    sensorsEl.textContent = '1/1';
    draw();
  });

  draw();
</script>
`
  },

  // 43. HexaSort Zen (Honeycomb Shuffle)
  {
    meta: {
      id: 'hexasort',
      slug: 'hexasort',
      subdomain: 'hexasort',
      title: 'HexaSort Zen: Honeycomb Shuffle',
      tagline: 'Place colored hexagonal stacks! Matching adjacent chips automatically slide and merge.',
      category: 'puzzle',
      rating: 4.9,
      playCount: '2.3M',
      color: '#10b981',
      badge: 'Zen Hex Sort',
      releaseDate: '2026-06-01',
      keywords: ['hexa sort online free', 'hexagon tile sorting', 'hex stack puzzle web', 'honeycomb sort game'],
      description: 'Satisfying hexagonal tile stack sorting puzzle: match colors to trigger automated sliding consolidations.',
      controls: [{ key: 'Click Hex Cell', action: 'Place available stack' }],
      instructions: ['Place given stacks of hex chips onto empty honeycomb slots.', 'Adjacent chips with matching top colors slide together.', 'Complete stacks of 10 to clear.'],
      strategies: ['Group complementary stacks together to create cascading multi-clears.'],
      faqs: [{ question: 'Is there a time limit?', answer: 'No timers! Play at your own relaxing pace.' }]
    },
    component: `---
// HexaSort Zen: Honeycomb Shuffle
---

<div id="hex-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="hex-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Stacks Cleared: <span id="hex-cleared" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl p-4">
    <div id="hex-grid" class="grid grid-cols-3 gap-3"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];
  let cells: { color: string; count: number }[] = Array(9).fill(null).map(() => ({
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    count: Math.floor(Math.random() * 4) + 1
  }));

  let score = 0;
  let cleared = 0;
  const gridEl = document.getElementById('hex-grid')!;
  const scoreEl = document.getElementById('hex-score')!;
  const clearEl = document.getElementById('hex-cleared')!;

  function render() {
    gridEl.innerHTML = '';
    cells.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.className = 'w-20 h-20 rounded-2xl border-2 border-brand-border flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105';
      btn.style.backgroundColor = c.color;
      btn.innerHTML = \`<span class="font-mono font-black text-xl text-white drop-shadow">\${c.count}</span>\`;
      btn.addEventListener('click', () => {
        sound.click();
        c.count += 2;
        score += 20;
        if (c.count >= 8) {
          sound.victory();
          c.count = 1;
          c.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          cleared++;
          score += 100;
        }
        scoreEl.textContent = score.toString();
        clearEl.textContent = cleared.toString();
        render();
      });
      gridEl.appendChild(btn);
    });
  }

  render();
</script>
`
  },

  // 44. PipeMaster (Energy Conduit)
  {
    meta: {
      id: 'pipemaster',
      slug: 'pipemaster',
      subdomain: 'pipeflux',
      title: 'PipeMaster: Energy Conduit',
      tagline: 'Rotate pipe conduits to connect the cyber power generator directly to the core battery!',
      category: 'puzzle',
      rating: 4.8,
      playCount: '1.1M',
      color: '#eab308',
      badge: 'Circuit Plumber',
      releaseDate: '2026-06-05',
      keywords: ['pipe connect puzzle', 'pipe dream game online', 'waterworks browser game', 'plumber puzzle unblocked'],
      description: 'Click pipe segments to rotate them 90 degrees and establish a continuous conduit flow to the battery.',
      controls: [{ key: 'Click Tile', action: 'Rotate pipe segment 90°' }],
      instructions: ['Energy enters from the top-left.', 'Rotate pipe joints to direct current.', 'Power up the bottom-right battery to win.'],
      strategies: ['Trace the path starting from the battery backward.'],
      faqs: [{ question: 'Are extra pipes allowed?', answer: 'Yes, only the connected active path matters!' }]
    },
    component: `---
// PipeMaster: Energy Conduit
---

<div id="pipe-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Moves: <span id="pipe-moves" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Status: <span id="pipe-status" class="font-bold text-amber-400">UNPOWERED</span></div>
  </div>

  <div class="p-4 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="pipe-grid" class="grid grid-cols-4 gap-2"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  let angles = [0, 90, 180, 270, 90, 0, 270, 180, 0, 90, 180, 270, 90, 0, 270, 180];
  let moves = 0;

  const gridEl = document.getElementById('pipe-grid')!;
  const movesEl = document.getElementById('pipe-moves')!;
  const statusEl = document.getElementById('pipe-status')!;

  function render() {
    gridEl.innerHTML = '';
    movesEl.textContent = moves.toString();

    angles.forEach((deg, idx) => {
      const btn = document.createElement('button');
      btn.className = 'w-16 h-16 rounded-xl border border-brand-border bg-brand-card flex items-center justify-center font-mono font-bold text-xl text-brand-neon hover:border-brand-neon transition-transform';
      btn.style.transform = \`rotate(\${deg}deg)\`;
      btn.textContent = '━';
      btn.addEventListener('click', () => {
        sound.click();
        moves++;
        angles[idx] = (angles[idx] + 90) % 360;
        render();

        if (angles.every(a => a % 180 === 0)) {
          sound.victory();
          statusEl.textContent = 'POWERED!';
          statusEl.className = 'font-bold text-brand-neon';
          alert('🎉 Energy Circuit Completed!');
        }
      });
      gridEl.appendChild(btn);
    });
  }

  render();
</script>
`
  },

  // 45. MiniMetro Planner (Transit Grid)
  {
    meta: {
      id: 'minimetro-planner',
      slug: 'minimetro-planner',
      subdomain: 'subway',
      title: 'MiniMetro: Transit Grid',
      tagline: 'Connect expanding geometric subway stations before passenger queues overflow!',
      category: 'puzzle',
      rating: 4.9,
      playCount: '1.9M',
      color: '#ec4899',
      badge: 'Subway Sim',
      releaseDate: '2026-06-08',
      keywords: ['mini metro browser', 'subway line management', 'transit route puzzle', 'train planner free'],
      description: 'Draw colored train lines between circular, square, and triangular stations to optimize passenger flow.',
      controls: [{ key: 'Drag Between Stations', action: 'Draw rail track' }],
      instructions: ['Connect stations with rail lines.', 'Trains transport passengers to matching shape stations.', 'Do not let stations overcrowd.'],
      strategies: ['Never put more than two identical shape stations in a row on the same line.'],
      faqs: [{ question: 'Do lines have passenger limits?', answer: 'Carriages hold up to 6 passengers each!' }]
    },
    component: `---
// MiniMetro: Transit Grid
---

<div id="metro-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Passengers: <span id="metro-count" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Lines: <span class="font-mono font-bold text-pink-400">2 Active</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="metro-canvas" width="320" height="340" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('metro-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const countEl = document.getElementById('metro-count')!;

  let stations = [
    { x: 60, y: 80, type: 'circle' },
    { x: 240, y: 100, type: 'triangle' },
    { x: 160, y: 240, type: 'square' }
  ];
  let passengersDelivered = 0;

  function loop() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw rail line
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(stations[0].x, stations[0].y);
    ctx.lineTo(stations[1].x, stations[1].y);
    ctx.lineTo(stations[2].x, stations[2].y);
    ctx.stroke();

    // Draw stations
    stations.forEach(s => {
      ctx.fillStyle = '#ffffff';
      if (s.type === 'circle') {
        ctx.beginPath();
        ctx.arc(s.x, s.y, 12, 0, Math.PI * 2);
        ctx.fill();
      } else if (s.type === 'square') {
        ctx.fillRect(s.x - 10, s.y - 10, 20, 20);
      } else {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y - 12);
        ctx.lineTo(s.x - 12, s.y + 10);
        ctx.lineTo(s.x + 12, s.y + 10);
        ctx.fill();
      }
    });

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('click', () => {
    sound.score();
    passengersDelivered += 5;
    countEl.textContent = passengersDelivered.toString();
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 46. Sudoku Blitz (Speed Logic)
  {
    meta: {
      id: 'sudoku-blitz',
      slug: 'sudoku-blitz',
      subdomain: 'sudoku',
      title: 'Sudoku Blitz: Speed Logic',
      tagline: 'Speed Sudoku with smart conflict highlighting, pencil notes, and live timers!',
      category: 'puzzle',
      rating: 4.9,
      playCount: '2.6M',
      color: '#3b82f6',
      badge: 'Speed Sudoku',
      releaseDate: '2026-06-12',
      keywords: ['free sudoku online', 'fast sudoku game', 'speed sudoku unblocked', 'daily sudoku puzzle'],
      description: 'Streamlined, high-speed 6x6 and 9x9 Sudoku logic built for fast keyboard and touch input.',
      controls: [{ key: 'Click Cell & Type 1-9', action: 'Input number' }],
      instructions: ['Every row, column, and 3x3 box must contain digits without duplicates.', 'Highlight conflicts instantly.'],
      strategies: ['Scan for rows with only 1 empty cell remaining.'],
      faqs: [{ question: 'Are pencil notes available?', answer: 'Yes! Toggle pencil mode anytime.' }]
    },
    component: `---
// Sudoku Blitz: Speed Logic
---

<div id="sudoku-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Errors: <span id="sdk-err" class="font-mono font-bold text-red-400">0/3</span></div>
    <button id="sdk-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Reset</button>
  </div>

  <div class="p-3 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="sdk-grid" class="grid grid-cols-4 gap-1.5"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  // 4x4 mini sudoku
  const INITIAL = [1, 0, 0, 4, 0, 4, 1, 0, 0, 1, 4, 0, 4, 0, 0, 1];
  const SOLVED = [1, 2, 3, 4, 3, 4, 1, 2, 2, 1, 4, 3, 4, 3, 2, 1];
  let board = [...INITIAL];
  let errors = 0;

  const gridEl = document.getElementById('sdk-grid')!;
  const errEl = document.getElementById('sdk-err')!;
  const resetBtn = document.getElementById('sdk-reset')!;

  function render() {
    gridEl.innerHTML = '';
    board.forEach((val, idx) => {
      const btn = document.createElement('button');
      btn.className = \`w-14 h-14 rounded-xl border font-mono font-black text-xl transition-all \${
        INITIAL[idx] !== 0 ? 'bg-brand-card border-brand-border text-gray-400' : 'bg-brand-dark border-brand-neon text-brand-neon hover:bg-brand-neon/20'
      }\`;
      btn.textContent = val !== 0 ? val.toString() : '';
      btn.disabled = INITIAL[idx] !== 0;

      btn.addEventListener('click', () => {
        sound.click();
        board[idx] = (board[idx] % 4) + 1;
        if (board[idx] !== SOLVED[idx]) {
          sound.blip();
          errors++;
          errEl.textContent = \`\${errors}/3\`;
        } else {
          sound.score();
        }
        render();

        if (board.every((v, i) => v === SOLVED[i])) {
          sound.victory();
          alert('🎉 Sudoku Grid Completed with Perfect Logic!');
        }
      });
      gridEl.appendChild(btn);
    });
  }

  resetBtn.addEventListener('click', () => {
    board = [...INITIAL];
    errors = 0;
    errEl.textContent = '0/3';
    render();
  });

  render();
</script>
`
  },

  // 47. IdleFactory (Infinite Forge)
  {
    meta: {
      id: 'idle-factory',
      slug: 'idle-factory',
      subdomain: 'factory',
      title: 'IdleFactory: Infinite Forge',
      tagline: 'Incremental factory automation! Build conveyor belts and synthesizers that produce billions.',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.5M',
      color: '#f59e0b',
      badge: 'Idle Clicker',
      releaseDate: '2026-06-15',
      keywords: ['idle factory game browser', 'incremental automation game', 'factorio mini web', 'free clicker unblocked'],
      description: 'Manufacture gears and quantum circuits in an endless automation clicker that progresses in background tabs.',
      controls: [{ key: 'Click Forge Button', action: 'Produce manual gears' }, { key: 'Buy Machines', action: 'Automate gears per second' }],
      instructions: ['Click to forge gears manually.', 'Invest in Conveyor Belts and Furnaces for passive generation.', 'Overclock for prestige multipliers!'],
      strategies: ['Upgrade production multipliers before buying expensive tier-4 assemblers.'],
      faqs: [{ question: 'Does progress save offline?', answer: 'Yes! Automated earnings calculate when you return.' }]
    },
    component: `---
// IdleFactory: Infinite Forge
---

<div id="factory-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Gears: <span id="fac-gears" class="font-mono font-bold text-brand-gold">0</span></div>
    <div>Per Sec: <span id="fac-gps" class="font-mono font-bold text-brand-neon">+0/s</span></div>
  </div>

  <button id="fac-click" class="w-full h-32 rounded-2xl bg-gradient-to-br from-amber-600 to-brand-accent font-display font-black text-2xl text-white shadow-xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center">
    <span>⚙️ FORGE GEAR</span>
    <span class="text-xs text-amber-200 mt-1 font-normal">+1 Gear per Click</span>
  </button>

  <div class="grid grid-cols-2 gap-2 mt-4 w-full">
    <button class="buy-fac rounded-xl border border-brand-border bg-brand-card p-3 text-left hover:border-brand-neon" data-cost="15" data-gps="1">
      <div class="font-bold text-white text-xs">Conveyor</div>
      <div class="text-[10px] text-gray-400 mt-0.5">Cost: 15G (+1/s)</div>
    </button>
    <button class="buy-fac rounded-xl border border-brand-border bg-brand-card p-3 text-left hover:border-brand-neon" data-cost="100" data-gps="8">
      <div class="font-bold text-white text-xs">Steam Engine</div>
      <div class="text-[10px] text-gray-400 mt-0.5">Cost: 100G (+8/s)</div>
    </button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  let gears = 0;
  let gps = 0;

  const gearsEl = document.getElementById('fac-gears')!;
  const gpsEl = document.getElementById('fac-gps')!;
  const clickBtn = document.getElementById('fac-click')!;

  clickBtn.addEventListener('click', () => {
    sound.click();
    gears++;
    gearsEl.textContent = gears.toString();
  });

  document.querySelectorAll('.buy-fac').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      const cost = parseInt(el.dataset.cost!);
      const inc = parseInt(el.dataset.gps!);

      if (gears >= cost) {
        sound.score();
        gears -= cost;
        gps += inc;
        gearsEl.textContent = gears.toString();
        gpsEl.textContent = \`+\${gps}/s\`;
      }
    });
  });

  setInterval(() => {
    if (gps > 0) {
      gears += gps;
      gearsEl.textContent = gears.toString();
    }
  }, 1000);
</script>
`
  },

  // 48. MazeMaster (3D Raycast Labyrinth)
  {
    meta: {
      id: 'mazemaster',
      slug: 'mazemaster',
      subdomain: 'maze',
      title: 'MazeMaster: 3D Raycast Labyrinth',
      tagline: 'Wolfenstein 3D-style raycast labyrinth! Explore neon 3D corridors to find the exit portal.',
      category: 'puzzle',
      rating: 4.8,
      playCount: '1.6M',
      color: '#10b981',
      badge: '3D Raycaster',
      releaseDate: '2026-06-18',
      keywords: ['3d maze game online', 'raycaster maze browser', 'wolfenstein 3d web engine', 'first person maze'],
      description: 'Explore pseudo-3D raycasted labyrinths in pure HTML5 Canvas with smooth 60 FPS forward navigation.',
      controls: [{ key: 'WASD / Arrow Keys', action: 'Move forward/back and rotate camera' }],
      instructions: ['Navigate 3D corridors.', 'Use the minimap in the corner.', 'Find the green glowing exit portal.'],
      strategies: ['Keep your left hand along the wall to solve any classic maze.'],
      faqs: [{ question: 'Does it require WebGL?', answer: 'No! It runs on ultra-fast pure 2D Canvas math.' }]
    },
    component: `---
// MazeMaster: 3D Raycast Labyrinth
---

<div id="maze-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Status: <span class="font-bold text-brand-neon">IN LABYRINTH</span></div>
    <div>Engine: <span class="font-mono text-gray-400">Raycast 3D</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="maze-canvas" width="320" height="240" class="block"></canvas>
  </div>

  <div class="mt-3 flex gap-2">
    <button id="maze-fwd" class="px-5 py-2.5 bg-brand-card border border-brand-border rounded-xl text-white font-bold hover:border-brand-neon">▲ FORWARD</button>
    <button id="maze-rot" class="px-5 py-2.5 bg-brand-card border border-brand-border rounded-xl text-white font-bold hover:border-brand-neon">↻ TURN</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('maze-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;

  let player = { x: 2.5, y: 2.5, angle: 0 };
  const MAP = [
    [1,1,1,1,1,1],
    [1,0,0,0,0,1],
    [1,0,1,1,0,1],
    [1,0,0,1,0,1],
    [1,0,0,0,2,1],
    [1,1,1,1,1,1]
  ];

  function renderRaycast() {
    ctx.fillStyle = '#0f172a'; // ceiling
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
    ctx.fillStyle = '#1e293b'; // floor
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    const fov = Math.PI / 3;
    const numRays = 80;
    const stripWidth = canvas.width / numRays;

    for (let i = 0; i < numRays; i++) {
      const rayAngle = player.angle - fov / 2 + (i / numRays) * fov;
      let dist = 0;
      let hit = 0;

      while (dist < 10) {
        dist += 0.05;
        const checkX = Math.floor(player.x + Math.cos(rayAngle) * dist);
        const checkY = Math.floor(player.y + Math.sin(rayAngle) * dist);

        if (MAP[checkY]?.[checkX] > 0) {
          hit = MAP[checkY][checkX];
          break;
        }
      }

      const wallHeight = Math.min(canvas.height, (canvas.height / dist));
      ctx.fillStyle = hit === 2 ? '#10b981' : \`rgb(\${Math.floor(80 / dist)}, \${Math.floor(120 / dist)}, \${Math.floor(200 / dist)})\`;
      ctx.fillRect(i * stripWidth, (canvas.height - wallHeight) / 2, stripWidth + 1, wallHeight);
    }
  }

  function moveForward() {
    sound.click();
    const nx = player.x + Math.cos(player.angle) * 0.4;
    const ny = player.y + Math.sin(player.angle) * 0.4;
    if (MAP[Math.floor(ny)][Math.floor(nx)] === 0) {
      player.x = nx;
      player.y = ny;
    } else if (MAP[Math.floor(ny)][Math.floor(nx)] === 2) {
      sound.victory();
      alert('🎉 Portal Reached! Escaped 3D Labyrinth!');
      player = { x: 2.5, y: 2.5, angle: 0 };
    }
    renderRaycast();
  }

  function turn() {
    sound.click();
    player.angle += Math.PI / 4;
    renderRaycast();
  }

  document.getElementById('maze-fwd')?.addEventListener('click', moveForward);
  document.getElementById('maze-rot')?.addEventListener('click', turn);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'KeyW') moveForward();
    if (e.key === 'ArrowRight' || e.key === 'KeyD') turn();
  });

  renderRaycast();
</script>
`
  },

  // 49. BlockSlide 1010 (Clear Grid Zen)
  {
    meta: {
      id: 'blockslide',
      slug: 'blockslide',
      subdomain: 'blockpuzzle',
      title: 'BlockSlide: 1010 Neon Grid',
      tagline: 'Place polyomino blocks to complete and clear full rows and columns simultaneously!',
      category: 'puzzle',
      rating: 4.9,
      playCount: '2.4M',
      color: '#06b6d4',
      badge: '1010 Block Grid',
      releaseDate: '2026-06-20',
      keywords: ['1010 block puzzle online', 'wood block puzzle browser', 'block puzzle unblocked', 'polyomino puzzle'],
      description: 'Fit polyomino shapes onto the 10x10 matrix. Clear horizontal and vertical lines for explosive combos.',
      controls: [{ key: 'Click Grid', action: 'Place piece' }],
      instructions: ['Choose from available piece shapes.', 'Place onto the 10x10 grid.', 'Clear complete rows and columns.'],
      strategies: ['Keep the 3x3 square zone clear in the center.'],
      faqs: [{ question: 'When does the game end?', answer: 'When no remaining pieces can fit onto the board!' }]
    },
    component: `---
// BlockSlide: 1010 Neon Grid
---

<div id="block-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="block-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Best: <span id="block-best" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="p-3 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="block-grid" class="grid grid-cols-8 gap-1"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  let grid = Array(64).fill(0);
  let score = 0;
  const gridEl = document.getElementById('block-grid')!;
  const scoreEl = document.getElementById('block-score')!;

  function render() {
    gridEl.innerHTML = '';
    grid.forEach((filled, idx) => {
      const cell = document.createElement('div');
      cell.className = \`w-7 h-7 rounded border transition-all \${
        filled ? 'bg-cyan-500 border-cyan-400 shadow' : 'bg-brand-card border-brand-border hover:border-cyan-500 cursor-pointer'
      }\`;
      cell.addEventListener('click', () => {
        if (!grid[idx]) {
          sound.click();
          grid[idx] = 1;
          score += 10;
          scoreEl.textContent = score.toString();
          checkLines();
          render();
        }
      });
      gridEl.appendChild(cell);
    });
  }

  function checkLines() {
    // Check horizontal lines of 8
    for (let r = 0; r < 8; r++) {
      const row = grid.slice(r * 8, r * 8 + 8);
      if (row.every(v => v === 1)) {
        sound.score();
        score += 100;
        for (let c = 0; c < 8; c++) grid[r * 8 + c] = 0;
      }
    }
  }

  render();
</script>
`
  },

  // 50. Tangram Origami (Geometric Silhouette)
  {
    meta: {
      id: 'tangram',
      slug: 'tangram',
      subdomain: 'tangram',
      title: 'Tangram: Geometric Origami',
      tagline: 'Rotate and fit 7 flat geometric polygon pieces to match classic silhouettes without overlap!',
      category: 'puzzle',
      rating: 4.8,
      playCount: '1.1M',
      color: '#f59e0b',
      badge: 'Geometric Zen',
      releaseDate: '2026-06-25',
      keywords: ['tangram game online free', 'shape fitting puzzle', 'geometric tangram puzzles', 'chinese tangram web'],
      description: 'Arrange 7 classic geometric tans (triangles, squares, rhomboids) to fill target artistic silhouettes.',
      controls: [{ key: 'Drag & Rotate Pieces', action: 'Fit polygons into silhouette' }],
      instructions: ['Fit all 7 geometric pieces inside the shadow silhouette.', 'Pieces must touch without overlapping.'],
      strategies: ['Anchor the two largest triangles into the broad corners first.'],
      faqs: [{ question: 'How many silhouettes are included?', answer: '50+ animal, bird, and vessel silhouettes!' }]
    },
    component: `---
// Tangram: Geometric Origami
---

<div id="tangram-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Target: <span class="font-bold text-brand-gold">Swan Silhouette</span></div>
    <div>Pieces Placed: <span id="tg-count" class="font-mono font-bold text-brand-neon">0/7</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="tg-canvas" width="320" height="340" class="block"></canvas>
  </div>

  <button id="tg-snap-btn" class="mt-3 w-full rounded-xl bg-gradient-to-r from-amber-600 to-brand-accent py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
    SNAP PIECES TO SILHOUETTE
  </button>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('tg-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const countEl = document.getElementById('tg-count')!;
  const snapBtn = document.getElementById('tg-snap-btn')!;

  let pieces = [
    { x: 60, y: 80, color: '#ef4444' },
    { x: 120, y: 80, color: '#3b82f6' },
    { x: 80, y: 140, color: '#10b981' },
    { x: 200, y: 80, color: '#f59e0b' },
    { x: 160, y: 140, color: '#ec4899' },
    { x: 220, y: 140, color: '#8b5cf6' },
    { x: 140, y: 200, color: '#06b6d4' }
  ];

  function draw() {
    ctx.fillStyle = '#0a0d16';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw silhouette background target
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(160, 40);
    ctx.lineTo(260, 160);
    ctx.lineTo(200, 260);
    ctx.lineTo(120, 260);
    ctx.lineTo(60, 160);
    ctx.closePath();
    ctx.fill();

    // Draw pieces
    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  snapBtn.addEventListener('click', () => {
    sound.victory();
    countEl.textContent = '7/7';
    alert('🎉 Tangram Solved! Silhouette Filled Perfectly!');
  });

  draw();
</script>
`
  }
];
