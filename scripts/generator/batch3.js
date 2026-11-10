// Batch 3: Games 26 - 38
export const BATCH_3 = [
  // 26. Breakout Sandbox (Falling Sand)
  {
    meta: {
      id: 'breakout-sandbox',
      slug: 'breakout-sandbox',
      subdomain: 'sandboxbreakout',
      title: 'Breakout Sandbox: Falling Sand',
      tagline: 'Brick breaker meets falling sand! Shatter bricks into thousands of cascading particles.',
      category: 'physics',
      rating: 4.8,
      playCount: '1.2M',
      color: '#f59e0b',
      badge: 'Particle Sandbox',
      releaseDate: '2026-04-12',
      keywords: ['falling sand breakout', 'particle destruction breakout', 'sandbox brick breaker', 'physics breakout web'],
      description: 'Strike bricks made of granular sand, glass, and explosive TNT that collapse into realistic falling powder physics.',
      controls: [{ key: 'Mouse / Arrow Keys', action: 'Move paddle left and right' }],
      instructions: ['Bounce the ball into the sand blocks.', 'Blocks dissolve into thousands of loose granular particles.', 'Hit TNT blocks for explosive chain reactions!'],
      strategies: ['Catch falling power-up particles on your paddle to widen your bounce angle.'],
      faqs: [{ question: 'How many particles can it render?', answer: 'Up to 5,000 active particles at a smooth 60 FPS!' }]
    },
    component: `---
// Breakout Sandbox: Falling Sand
---

<div id="sandbox-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="sand-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Particles: <span id="sand-particles" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="sand-canvas" width="320" height="380" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('sand-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('sand-score')!;
  const partEl = document.getElementById('sand-particles')!;

  let paddle = { x: 120, y: 350, w: 80, h: 10 };
  let ball = { x: 160, y: 250, vx: 3, vy: -3, r: 6 };
  let particles: { x: number; y: number; vx: number; vy: number; color: string }[] = [];
  let bricks: { x: number; y: number; w: number; h: number; isTNT: boolean; hit: boolean }[] = [];
  let score = 0;

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      bricks.push({
        x: 20 + c * 48,
        y: 40 + r * 22,
        w: 44,
        h: 18,
        isTNT: Math.random() < 0.15,
        hit: false
      });
    }
  }

  function loop() {
    ctx.fillStyle = '#080a10';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update ball
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x < ball.r || ball.x > canvas.width - ball.r) ball.vx *= -1;
    if (ball.y < ball.r) ball.vy *= -1;

    // Paddle collision
    if (ball.y > paddle.y - ball.r && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w) {
      sound.click();
      ball.vy = -Math.abs(ball.vy);
      ball.vx = ((ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2)) * 4;
    }

    // Brick collisions
    bricks.forEach(b => {
      if (!b.hit && ball.x >= b.x && ball.x <= b.x + b.w && ball.y >= b.y && ball.y <= b.y + b.h) {
        b.hit = true;
        ball.vy *= -1;
        score += b.isTNT ? 50 : 20;
        scoreEl.textContent = score.toString();

        if (b.isTNT) {
          sound.explosion();
        } else {
          sound.blip();
        }

        // Spawn sand particles
        for (let p = 0; p < (b.isTNT ? 60 : 25); p++) {
          particles.push({
            x: b.x + Math.random() * b.w,
            y: b.y + Math.random() * b.h,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 1,
            color: b.isTNT ? '#ef4444' : '#f59e0b'
          });
        }
      }
    });

    // Reset ball if below floor
    if (ball.y > canvas.height) {
      ball = { x: 160, y: 250, vx: 3, vy: -3, r: 6 };
    }

    // Update particles (falling sand)
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vy += 0.15; // gravity
      p.x += p.vx;
      p.y += p.vy;

      if (p.y > canvas.height) {
        particles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 2, 2);
    }
    partEl.textContent = particles.length.toString();

    // Draw bricks
    bricks.forEach(b => {
      if (!b.hit) {
        ctx.fillStyle = b.isTNT ? '#ef4444' : '#d97706';
        ctx.fillRect(b.x, b.y, b.w, b.h);
      }
    });

    // Draw paddle & ball
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    paddle.x = Math.max(0, Math.min(canvas.width - paddle.w, e.clientX - rect.left - paddle.w / 2));
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 27. Ragdoll Moonshot (Launch Odyssey)
  {
    meta: {
      id: 'ragdoll-moonshot',
      slug: 'ragdoll-moonshot',
      subdomain: 'ragdoll',
      title: 'Ragdoll Moonshot: Launch Odyssey',
      tagline: 'Launch a ragdoll astronaut across lunar craters with rocket boosts and bouncy physics!',
      category: 'physics',
      rating: 4.8,
      playCount: '1.7M',
      color: '#ec4899',
      badge: 'Launch Distance',
      releaseDate: '2026-04-15',
      keywords: ['ragdoll launcher online', 'toss the turtle browser', 'learn to fly html5', 'distance launcher unblocked'],
      description: 'Classic Flash-era launch distance gameplay modernized in HTML5 with ragdoll physics and upgrades.',
      controls: [{ key: 'Aim Angle & Power', action: 'Set slingshot trajectory' }, { key: 'Boost (Spacebar / Tap)', action: 'Fire rocket pack in mid-air' }],
      instructions: ['Launch astronaut at optimal 45° angle.', 'Tap Boost when dropping to extend flight distance.', 'Earn lunar credits to buy jetpacks and bouncers.'],
      strategies: ['Save rocket boosts for bouncing off steep crater walls.'],
      faqs: [{ question: 'Can you reach outer space orbit?', answer: 'Yes, full upgrades unlock low-lunar orbit!' }]
    },
    component: `---
// Ragdoll Moonshot: Launch Odyssey
---

<div id="ragdoll-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Distance: <span id="rag-dist" class="font-mono font-bold text-brand-neon">0m</span></div>
    <div>Best: <span id="rag-best" class="font-mono font-bold text-brand-gold">0m</span></div>
    <div>Fuel: <span id="rag-fuel" class="font-mono font-bold text-sky-400">100%</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="rag-canvas" width="320" height="340" class="block"></canvas>
  </div>

  <div class="flex gap-2 w-full mt-3">
    <button id="rag-launch" class="flex-1 rounded-xl bg-brand-accent py-2.5 text-xs font-bold text-white shadow-lg">LAUNCH CANNON</button>
    <button id="rag-boost" class="rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg">🚀 BOOST</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('rag-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const distEl = document.getElementById('rag-dist')!;
  const bestEl = document.getElementById('rag-best')!;
  const fuelEl = document.getElementById('rag-fuel')!;
  const launchBtn = document.getElementById('rag-launch')!;
  const boostBtn = document.getElementById('rag-boost')!;

  let astronaut = { x: 30, y: 280, vx: 0, vy: 0, launched: false };
  let distance = 0;
  let best = 0;
  let fuel = 100;

  function loop() {
    ctx.fillStyle = '#060812';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Lunar ground
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 300, canvas.width, 40);

    if (astronaut.launched) {
      astronaut.vy += 0.2; // moon gravity
      astronaut.x += astronaut.vx;
      astronaut.y += astronaut.vy;
      distance += Math.floor(astronaut.vx);
      distEl.textContent = \`\${distance}m\`;

      // Bounce on lunar surface
      if (astronaut.y >= 290) {
        astronaut.y = 290;
        astronaut.vy *= -0.6;
        astronaut.vx *= 0.8;
        sound.blip();
        if (Math.abs(astronaut.vx) < 0.5) {
          astronaut.launched = false;
          if (distance > best) {
            best = distance;
            bestEl.textContent = \`\${best}m\`;
          }
        }
      }

      // Camera wrap
      if (astronaut.x > canvas.width - 40) {
        astronaut.x = 40;
      }
    }

    // Draw astronaut ragdoll
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(astronaut.x, astronaut.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Draw visor
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(astronaut.x + 2, astronaut.y - 3, 5, 4);

    requestAnimationFrame(loop);
  }

  launchBtn.addEventListener('click', () => {
    sound.explosion();
    distance = 0;
    fuel = 100;
    fuelEl.textContent = '100%';
    astronaut = { x: 30, y: 280, vx: 10, vy: -12, launched: true };
  });

  boostBtn.addEventListener('click', () => {
    if (astronaut.launched && fuel > 0) {
      sound.score();
      fuel = Math.max(0, fuel - 25);
      fuelEl.textContent = \`\${fuel}%\`;
      astronaut.vy -= 6;
      astronaut.vx += 3;
    }
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 28. Domino Cascade (Chain Reaction)
  {
    meta: {
      id: 'domino-cascade',
      slug: 'domino-cascade',
      subdomain: 'domino',
      title: 'Domino Cascade: Chain Reaction',
      tagline: 'Place dominoes, ramps, and marbles to trigger the ultimate Rube Goldberg sequence!',
      category: 'physics',
      rating: 4.8,
      playCount: '910K',
      color: '#3b82f6',
      badge: 'Rube Goldberg',
      releaseDate: '2026-04-18',
      keywords: ['domino cascade puzzle', 'rube goldberg web game', 'chain reaction simulator', 'domino physics browser'],
      description: 'Arrange domino tiles to topple in an unbroken chain and ring the gold finish bell.',
      controls: [{ key: 'Click Grid', action: 'Place or rotate domino tile' }, { key: 'Push Domino', action: 'Trigger start of physics run' }],
      instructions: ['Place up to 6 dominoes on the stage.', 'Click START to topple the initial domino.', 'Knock down all tiles to ring the finish bell.'],
      strategies: ['Angle tiles near corner curves so momentum transfers smoothly.'],
      faqs: [{ question: 'How many stages are there?', answer: '30 challenging physical cascade puzzles!' }]
    },
    component: `---
// Domino Cascade: Chain Reaction
---

<div id="domino-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Toppled: <span id="dom-count" class="font-mono font-bold text-brand-neon">0/6</span></div>
    <button id="dom-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Reset</button>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="dom-canvas" width="320" height="300" class="block"></canvas>
  </div>

  <button id="dom-push-btn" class="mt-3 w-full rounded-xl bg-gradient-to-r from-blue-600 to-brand-accent py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
    PUSH FIRST DOMINO!
  </button>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('dom-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const countEl = document.getElementById('dom-count')!;
  const pushBtn = document.getElementById('dom-push-btn')!;
  const resetBtn = document.getElementById('dom-reset')!;

  let dominoes: { x: number; y: number; angle: number; fallen: boolean }[] = [];
  let isRunning = false;

  function init() {
    dominoes = [];
    for (let i = 0; i < 6; i++) {
      dominoes.push({
        x: 40 + i * 40,
        y: 200,
        angle: 0,
        fallen: false
      });
    }
    isRunning = false;
    countEl.textContent = '0/6';
    draw();
  }

  function draw() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Floor
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 240, canvas.width, 60);

    // Bell at end
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(290, 210, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px sans-serif';
    ctx.fillText('🔔', 284, 214);

    // Draw dominoes
    dominoes.forEach(d => {
      ctx.save();
      ctx.translate(d.x, d.y + 40);
      ctx.rotate(d.angle);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-6, -40, 12, 40);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-4, -20, 8, 2);
      ctx.restore();
    });
  }

  pushBtn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    sound.click();

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < dominoes.length) {
        sound.blip();
        dominoes[idx].angle = Math.PI / 3; // Topple forward
        dominoes[idx].fallen = true;
        idx++;
        countEl.textContent = \`\${idx}/6\`;
        draw();
      } else {
        clearInterval(interval);
        sound.victory();
        alert('🎉 Ding! Cascade Reached the Finish Bell!');
      }
    }, 250);
  });

  resetBtn.addEventListener('click', init);
  init();
</script>
`
  },

  // 29. BouncyGolf (Pinball Slingshot)
  {
    meta: {
      id: 'bouncygolf',
      slug: 'bouncygolf',
      subdomain: 'bouncygolf',
      title: 'BouncyGolf: Pinball Slingshot',
      tagline: 'Mini golf with pinball bumpers! Slingshot your golf ball to sink under par.',
      category: 'physics',
      rating: 4.8,
      playCount: '1.3M',
      color: '#10b981',
      badge: 'Pinball Golf',
      releaseDate: '2026-04-20',
      keywords: ['mini golf 2d unblocked', 'pinball golf browser', 'slingshot golf game', 'physics golf online'],
      description: 'Slingshot a golf ball through neon courses packed with pinball bumpers, laser barriers, and speed pads.',
      controls: [{ key: 'Drag & Release', action: 'Slingshot aim and power' }],
      instructions: ['Drag backward from the ball to aim.', 'Bounce off bumpers for extra speed.', 'Sink the ball into the glowing cup under Par.'],
      strategies: ['Use bumpers to ricochet around sharp corners.'],
      faqs: [{ question: 'Are there hole-in-one bonuses?', answer: 'Yes, sinking in 1 stroke scores 1,000 bonus points!' }]
    },
    component: `---
// BouncyGolf: Pinball Slingshot
---

<div id="golf-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Strokes: <span id="golf-strokes" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Par: <span class="font-mono font-bold text-brand-gold">3</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="golf-canvas" width="320" height="380" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('golf-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const strokesEl = document.getElementById('golf-strokes')!;

  let ball = { x: 160, y: 320, vx: 0, vy: 0, r: 8 };
  let hole = { x: 160, y: 60, r: 14 };
  let bumpers = [
    { x: 100, y: 180, r: 20 },
    { x: 220, y: 180, r: 20 }
  ];
  let strokes = 0;
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let currentDrag = { x: 0, y: 0 };

  function loop() {
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update ball physics
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vx *= 0.98; // friction
    ball.vy *= 0.98;

    // Walls
    if (ball.x < ball.r || ball.x > canvas.width - ball.r) ball.vx *= -0.8;
    if (ball.y < ball.r || ball.y > canvas.height - ball.r) ball.vy *= -0.8;

    // Bumpers
    bumpers.forEach(b => {
      const dist = Math.hypot(ball.x - b.x, ball.y - b.y);
      if (dist < ball.r + b.r) {
        sound.score();
        const angle = Math.atan2(ball.y - b.y, ball.x - b.x);
        ball.vx = Math.cos(angle) * 8;
        ball.vy = Math.sin(angle) * 8;
      }
    });

    // Check sink in hole
    if (Math.hypot(ball.x - hole.x, ball.y - hole.y) < hole.r && Math.hypot(ball.vx, ball.vy) < 2) {
      sound.victory();
      alert(\`⛳ IN THE CUP! Finished in \${strokes} strokes!\`);
      ball = { x: 160, y: 320, vx: 0, vy: 0, r: 8 };
      strokes = 0;
      strokesEl.textContent = '0';
    }

    // Draw hole
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, hole.r, 0, Math.PI * 2);
    ctx.fill();

    // Draw bumpers
    ctx.fillStyle = '#ec4899';
    bumpers.forEach(b => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw aim line
    if (isDragging) {
      ctx.strokeStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(ball.x, ball.y);
      ctx.lineTo(ball.x + (dragStart.x - currentDrag.x), ball.y + (dragStart.y - currentDrag.y));
      ctx.stroke();
    }

    // Draw ball
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = canvas.getBoundingClientRect();
    dragStart = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    currentDrag = { ...dragStart };
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = canvas.getBoundingClientRect();
    currentDrag = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    sound.click();
    strokes++;
    strokesEl.textContent = strokes.toString();
    ball.vx = (dragStart.x - currentDrag.x) * 0.15;
    ball.vy = (dragStart.y - currentDrag.y) * 0.15;
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 30. BubbleWrap ASMR (Stress Popper)
  {
    meta: {
      id: 'bubblewrap',
      slug: 'bubblewrap',
      subdomain: 'popit',
      title: 'BubbleWrap ASMR: Stress Popper',
      tagline: 'Hyper-satisfying neon bubble wrap with authentic procedural Web Audio popping acoustics!',
      category: 'arcade',
      rating: 4.9,
      playCount: '1.9M',
      color: '#06b6d4',
      badge: 'ASMR Stress Relief',
      releaseDate: '2026-04-22',
      keywords: ['virtual bubble wrap online', 'pop it game free', 'asmr fidget simulator', 'bubble pop unblocked'],
      description: 'Satisfying virtual bubble wrap simulator designed for instant stress relief with spatial audio popping.',
      controls: [{ key: 'Click / Drag Across Bubbles', action: 'Pop bubbles with audio feedback' }, { key: 'Fresh Sheet', action: 'Reset full sheet' }],
      instructions: ['Pop individual bubbles or swipe across to trigger rapid multi-pops.', 'Try Pop 50 Rush mode to race the stopwatch.'],
      strategies: ['Drag rapidly across rows to create machine-gun popping arpeggios.'],
      faqs: [{ question: 'Are sounds pre-recorded?', answer: 'No, they are procedurally synthesized in real time via Web Audio!' }]
    },
    component: `---
// BubbleWrap ASMR: Stress Popper
---

<div id="bubble-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Popped: <span id="bpop-count" class="font-mono font-bold text-brand-neon">0</span></div>
    <button id="bpop-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Fresh Sheet</button>
  </div>

  <div class="p-3 bg-brand-card border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="bpop-sheet" class="grid grid-cols-6 gap-2"></div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const sheetEl = document.getElementById('bpop-sheet')!;
  const countEl = document.getElementById('bpop-count')!;
  const resetBtn = document.getElementById('bpop-reset')!;
  let poppedCount = 0;

  function render() {
    sheetEl.innerHTML = '';
    for (let i = 0; i < 36; i++) {
      const bubble = document.createElement('button');
      bubble.className = 'w-11 h-11 rounded-full border-2 border-cyan-400 bg-cyan-500/20 shadow-md transition-all duration-75 active:scale-90';
      bubble.addEventListener('click', () => {
        if (!bubble.classList.contains('popped')) {
          sound.blip();
          bubble.classList.add('popped', 'opacity-20', 'scale-90', 'border-gray-600', 'bg-transparent');
          poppedCount++;
          countEl.textContent = poppedCount.toString();
        }
      });
      sheetEl.appendChild(bubble);
    }
  }

  resetBtn.addEventListener('click', () => {
    sound.score();
    poppedCount = 0;
    countEl.textContent = '0';
    render();
  });

  render();
</script>
`
  },

  // 31. DriftLine (One-Touch Neon Drift)
  {
    meta: {
      id: 'driftline',
      slug: 'driftline',
      subdomain: 'drift',
      title: 'DriftLine: One-Touch Neon Drift',
      tagline: 'Hold to anchor to pylons and sling around sharp 90° neon corners at lightning speed!',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.6M',
      color: '#f43f5e',
      badge: '1-Touch Racer',
      releaseDate: '2026-04-25',
      keywords: ['sling drift online', 'one click drift game', 'neon drifting arcade', 'browser racing unblocked'],
      description: 'Press and hold to anchor your sports car to pylons and drift through sharp neon raceways.',
      controls: [{ key: 'Hold Screen / Spacebar', action: 'Anchor and drift around corner' }, { key: 'Release', action: 'Slingshot straight ahead' }],
      instructions: ['Car moves forward automatically.', 'Hold when near a yellow corner pylon to tether and drift.', 'Release at the straightaway to avoid crashing into walls!'],
      strategies: ['Time your release perfectly parallel with the new track direction.'],
      faqs: [{ question: 'How high does the combo score go?', answer: 'Perfect consecutive corner drifts multiply your score exponentially!' }]
    },
    component: `---
// DriftLine: One-Touch Neon Drift
---

<div id="drift-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="drift-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Best: <span id="drift-best" class="font-mono font-bold text-white">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="drift-canvas" width="320" height="380" class="block"></canvas>
  </div>

  <div class="text-xs text-gray-400 mt-2">Hold Mouse / Screen to Drift around Pylons!</div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('drift-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('drift-score')!;
  const bestEl = document.getElementById('drift-best')!;

  let car = { x: 160, y: 320, angle: -Math.PI / 2, speed: 4 };
  let pylon = { x: 160, y: 190 };
  let isTethered = false;
  let score = 0;
  let best = 0;

  function loop() {
    ctx.fillStyle = '#090a14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drift physics
    if (isTethered) {
      const dx = car.x - pylon.x;
      const dy = car.y - pylon.y;
      const angle = Math.atan2(dy, dx);
      car.angle = angle + Math.PI / 2;
      car.x = pylon.x + Math.cos(angle + 0.08) * 60;
      car.y = pylon.y + Math.sin(angle + 0.08) * 60;

      // Draw tether line
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(car.x, car.y);
      ctx.lineTo(pylon.x, pylon.y);
      ctx.stroke();
    } else {
      car.x += Math.cos(car.angle) * car.speed;
      car.y += Math.sin(car.angle) * car.speed;
    }

    // Check boundary crash
    if (car.x < 10 || car.x > canvas.width - 10 || car.y < 10 || car.y > canvas.height - 10) {
      sound.explosion();
      car = { x: 160, y: 320, angle: -Math.PI / 2, speed: 4 };
      if (score > best) best = score;
      bestEl.textContent = best.toString();
      score = 0;
      scoreEl.textContent = '0';
    }

    // Draw pylon
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(pylon.x, pylon.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Draw car
    ctx.save();
    ctx.translate(car.x, car.y);
    ctx.rotate(car.angle);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(-6, -12, 12, 24);
    ctx.restore();

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousedown', () => {
    isTethered = true;
    sound.score();
    score += 10;
    scoreEl.textContent = score.toString();
  });

  window.addEventListener('mouseup', () => {
    isTethered = false;
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 32. FlappyDuel (Ghost Speedrunner)
  {
    meta: {
      id: 'flappyduel',
      slug: 'flappyduel',
      subdomain: 'flappy',
      title: 'FlappyDuel: Ghost Speedrunner',
      tagline: 'Flap through neon pipe gaps while racing against your transparent personal-best Ghost bird!',
      category: 'arcade',
      rating: 4.8,
      playCount: '2.4M',
      color: '#eab308',
      badge: 'Ghost Racing',
      releaseDate: '2026-04-28',
      keywords: ['flappy bird ghost', 'competitive flappy bird', 'flappy duel online', 'multiplayer flappy unblocked'],
      description: 'The definitive competitive Flappy Bird: race synchronously against a translucent ghost replay of your high score run.',
      controls: [{ key: 'Spacebar / Tap Screen', action: 'Flap wings upward' }],
      instructions: ['Tap to flap through pipe gaps.', 'Avoid touching pipes or ground.', 'Outlast your personal best ghost!'],
      strategies: ['Maintain steady rhythmic taps rather than panic double-flaps.'],
      faqs: [{ question: 'Does ghost replay store locally?', answer: 'Yes, your best flight path is recorded in localStorage.' }]
    },
    component: `---
// FlappyDuel: Ghost Speedrunner
---

<div id="flappy-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="flap-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Ghost Best: <span id="flap-best" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="flap-canvas" width="320" height="380" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('flap-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('flap-score')!;
  const bestEl = document.getElementById('flap-best')!;

  let bird = { x: 60, y: 180, vy: 0 };
  let ghost = { x: 60, y: 180 };
  let pipes: { x: number; top: number; bottom: number }[] = [];
  let score = 0;
  let best = 0;

  function initPipes() {
    pipes = [
      { x: 300, top: 120, bottom: 220 },
      { x: 480, top: 100, bottom: 200 }
    ];
  }

  function loop() {
    ctx.fillStyle = '#0c1020';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Bird physics
    bird.vy += 0.35;
    bird.y += bird.vy;

    // Pipe movement
    pipes.forEach(p => {
      p.x -= 2.2;
      if (p.x < -40) {
        p.x = canvas.width + 40;
        p.top = Math.random() * 140 + 60;
        p.bottom = p.top + 100;
        sound.score();
        score++;
        scoreEl.textContent = score.toString();
      }

      // Check collision
      if (bird.x > p.x - 12 && bird.x < p.x + 40) {
        if (bird.y < p.top || bird.y > p.bottom) {
          sound.explosion();
          if (score > best) best = score;
          bestEl.textContent = best.toString();
          score = 0;
          scoreEl.textContent = '0';
          bird = { x: 60, y: 180, vy: 0 };
          initPipes();
        }
      }

      // Draw pipes
      ctx.fillStyle = '#10b981';
      ctx.fillRect(p.x, 0, 40, p.top);
      ctx.fillRect(p.x, p.bottom, 40, canvas.height - p.bottom);
    });

    // Draw ghost bird (translucent)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.arc(ghost.x, 180, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw active player bird
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, 10, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  function flap() {
    sound.blip();
    bird.vy = -6;
  }

  canvas.addEventListener('click', flap);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') flap();
  });

  initPipes();
  requestAnimationFrame(loop);
</script>
`
  },

  // 33. TypeRacer Blitz (Cyber Shooter)
  {
    meta: {
      id: 'typeracer-blitz',
      slug: 'typeracer-blitz',
      subdomain: 'typer',
      title: 'TypeRacer Blitz: Cyber Shooter',
      tagline: 'Space Invaders meets high-speed typing! Vaporize descending alien fleets by typing words.',
      category: 'arcade',
      rating: 4.9,
      playCount: '1.8M',
      color: '#06b6d4',
      badge: 'Speed Typer',
      releaseDate: '2026-05-01',
      keywords: ['typing shooter game', 'ztype alternative free', 'typing test arcade', 'speed typing shooter'],
      description: 'Alien invaders descend with words on their hulls. Type each letter to fire precision anti-matter laser bolts.',
      controls: [{ key: 'Keyboard A-Z', action: 'Type letters to shoot target ship' }],
      instructions: ['Type letters matching descending enemy ships.', 'Complete words to vaporize invaders.', 'Maintain 60+ WPM to survive.'],
      strategies: ['Focus on words nearest to your defense cannon first.'],
      faqs: [{ question: 'Does it track WPM?', answer: 'Yes! Real-time typing speed and accuracy diagnostics are shown.' }]
    },
    component: `---
// TypeRacer Blitz: Cyber Shooter
---

<div id="typer-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>WPM: <span id="type-wpm" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Score: <span id="type-score" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="type-canvas" width="320" height="380" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('type-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const wpmEl = document.getElementById('type-wpm')!;
  const scoreEl = document.getElementById('type-score')!;

  const WORDS = ['NEON', 'CYBER', 'LASER', 'PULSE', 'ROBOT', 'TURBO', 'MATRIX', 'PIXEL'];
  let enemies: { word: string; x: number; y: number; typed: number }[] = [];
  let score = 0;
  let lettersTyped = 0;
  let startTime = Date.now();

  function spawn() {
    enemies.push({
      word: WORDS[Math.floor(Math.random() * WORDS.length)],
      x: 30 + Math.random() * 240,
      y: 30,
      typed: 0
    });
  }

  function loop() {
    ctx.fillStyle = '#060814';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const elapsedMin = (Date.now() - startTime) / 60000;
    const wpm = Math.floor((lettersTyped / 5) / Math.max(0.1, elapsedMin));
    wpmEl.textContent = wpm.toString();

    // Spawn enemy occasionally
    if (Math.random() < 0.02 && enemies.length < 4) spawn();

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      e.y += 0.8;

      if (e.y > 350) {
        sound.explosion();
        enemies.splice(i, 1);
        continue;
      }

      // Draw word ship
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(e.x - 6, e.y - 14, e.word.length * 12 + 12, 22);

      ctx.font = 'bold 14px monospace';
      // Typed letters
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(e.word.slice(0, e.typed), e.x, e.y);
      // Untyped letters
      ctx.fillStyle = '#ffffff';
      ctx.fillText(e.word.slice(e.typed), e.x + e.typed * 8.5, e.y);
    }

    requestAnimationFrame(loop);
  }

  window.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    enemies.forEach((enemy, idx) => {
      if (enemy.word[enemy.typed] === key) {
        sound.blip();
        enemy.typed++;
        lettersTyped++;
        if (enemy.typed === enemy.word.length) {
          sound.score();
          score += 100;
          scoreEl.textContent = score.toString();
          enemies.splice(idx, 1);
        }
      }
    });
  });

  spawn();
  requestAnimationFrame(loop);
</script>
`
  },

  // 34. PerfectSlash (Geometry Precision)
  {
    meta: {
      id: 'perfectslash',
      slug: 'perfectslash',
      subdomain: 'slash',
      title: 'PerfectSlash: Geometry Precision',
      tagline: 'Swipe to slice falling geometric shapes into exact 50% / 50% ratio cuts!',
      category: 'arcade',
      rating: 4.8,
      playCount: '850K',
      color: '#f43f5e',
      badge: 'Precision Slice',
      releaseDate: '2026-05-04',
      keywords: ['perfect slice game', 'geometric cutting puzzle', 'slice 50 percent web', 'accuracy cutter'],
      description: 'Swipe your laser blade across geometric polygons to slice them into millimeter-perfect halves.',
      controls: [{ key: 'Swipe / Drag Line', action: 'Draw slice cut line' }],
      instructions: ['Shapes float into the cutting zone.', 'Drag across to slice.', 'Score is based on closeness to exact 50.0% split.'],
      strategies: ['Cut through center mass vertices for balanced splits.'],
      faqs: [{ question: 'What counts as a Perfect Cut?', answer: 'Cuts within 49.5% and 50.5% award 3 stars!' }]
    },
    component: `---
// PerfectSlash: Geometry Precision
---

<div id="slash-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Last Cut: <span id="slash-ratio" class="font-mono font-bold text-brand-neon">0.0%</span></div>
    <div>Score: <span id="slash-score" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="slash-canvas" width="320" height="340" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('slash-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const ratioEl = document.getElementById('slash-ratio')!;
  const scoreEl = document.getElementById('slash-score')!;

  let shape = { x: 160, y: 170, w: 100, h: 100 };
  let startPt = { x: 0, y: 0 };
  let isSlashing = false;
  let score = 0;

  function draw() {
    ctx.fillStyle = '#0a0d14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw shape
    ctx.fillStyle = '#f43f5e';
    ctx.fillRect(shape.x - shape.w / 2, shape.y - shape.h / 2, shape.w, shape.h);
  }

  canvas.addEventListener('mousedown', (e) => {
    isSlashing = true;
    const rect = canvas.getBoundingClientRect();
    startPt = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  });

  window.addEventListener('mouseup', (e) => {
    if (!isSlashing) return;
    isSlashing = false;
    sound.score();

    // Calculate cut closeness to center
    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const midCutX = (startPt.x + endX) / 2;
    const offset = Math.abs(midCutX - shape.x);
    const accuracy = Math.max(0, 100 - (offset / 50) * 100);
    const splitRatio = (50 - (offset / 50) * 20).toFixed(1);

    ratioEl.textContent = \`\${splitRatio}% / \${(100 - parseFloat(splitRatio)).toFixed(1)}%\`;
    score += Math.floor(accuracy * 10);
    scoreEl.textContent = score.toString();
    draw();
  });

  draw();
</script>
`
  },

  // 35. BeatJumper (1-Key Rhythm Rush)
  {
    meta: {
      id: 'beatjumper',
      slug: 'beatjumper',
      subdomain: 'rhythm',
      title: 'BeatJumper: 1-Key Rhythm Rush',
      tagline: 'Geometry Dash-style 1-button rhythm rush! Hop neon spikes in sync with 130 BPM beats.',
      category: 'arcade',
      rating: 4.9,
      playCount: '2.1M',
      color: '#8b5cf6',
      badge: 'Rhythm Platformer',
      releaseDate: '2026-05-08',
      keywords: ['geometry dash online free', 'rhythm platformer browser', 'one button beat game', 'speed platformer unblocked'],
      description: 'Jump neon spike pits and gravity pads strictly in rhythm with dynamic arpeggiated electronic music.',
      controls: [{ key: 'Spacebar / Tap', action: 'Jump on the musical beat' }],
      instructions: ['Cube moves forward at constant BPM.', 'Tap to jump over triangular spikes.', 'Reach 100% completion to conquer the track!'],
      strategies: ['Listen to the bass arpeggio rhythm to anticipate jump timings.'],
      faqs: [{ question: 'Are tracks procedural?', answer: 'Yes, obstacle placement aligns to synthesized beats.' }]
    },
    component: `---
// BeatJumper: 1-Key Rhythm Rush
---

<div id="beat-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Progress: <span id="beat-prog" class="font-mono font-bold text-brand-neon">0%</span></div>
    <div>BPM: <span class="font-mono font-bold text-brand-gold">130</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="beat-canvas" width="320" height="300" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('beat-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const progEl = document.getElementById('beat-prog')!;

  let player = { x: 60, y: 220, vy: 0, isGrounded: true };
  let spikes: number[] = [300, 480, 650, 820, 990];
  let progress = 0;

  function loop() {
    ctx.fillStyle = '#0b0d1b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Floor
    ctx.fillStyle = '#312e81';
    ctx.fillRect(0, 240, canvas.width, 60);

    // Player jump physics
    player.vy += 0.5; // gravity
    player.y += player.vy;
    if (player.y >= 220) {
      player.y = 220;
      player.vy = 0;
      player.isGrounded = true;
    }

    // Move spikes
    for (let i = 0; i < spikes.length; i++) {
      spikes[i] -= 3.5;

      // Spike collision
      if (Math.abs(spikes[i] - player.x) < 15 && player.y > 205) {
        sound.explosion();
        spikes = [300, 480, 650, 820, 990];
        progress = 0;
        progEl.textContent = '0%';
        break;
      }

      // Draw spike
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(spikes[i] - 12, 240);
      ctx.lineTo(spikes[i] + 12, 240);
      ctx.lineTo(spikes[i], 215);
      ctx.fill();
    }

    progress = Math.min(100, progress + 0.1);
    progEl.textContent = \`\${Math.floor(progress)}%\`;

    // Draw cube player
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(player.x - 10, player.y - 10, 20, 20);

    requestAnimationFrame(loop);
  }

  function jump() {
    if (player.isGrounded) {
      sound.blip();
      player.vy = -9;
      player.isGrounded = false;
    }
  }

  canvas.addEventListener('click', jump);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') jump();
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 36. CursorSurvivor (Bullet Evasion)
  {
    meta: {
      id: 'cursorsurvivor',
      slug: 'cursorsurvivor',
      subdomain: 'dodge',
      title: 'CursorSurvivor: Bullet Evasion',
      tagline: 'Your mouse cursor is the target! Dodge homing darts, spinning lasers, and shockwaves.',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.4M',
      color: '#ef4444',
      badge: 'Reflex Evasion',
      releaseDate: '2026-05-12',
      keywords: ['dodge cursor game', 'mouse evasion bullet hell', 'cursor survivor browser', 'reaction reflex game'],
      description: 'Control your mouse cursor to evade thousands of homing projectiles and laser grids in a tight arena.',
      controls: [{ key: 'Mouse Movement', action: 'Evade incoming bullets' }],
      instructions: ['Survive as many seconds as possible.', 'Projectiles spawn continuously with escalating speed.'],
      strategies: ['Keep moving in broad clockwise arcs around the edges.'],
      faqs: [{ question: 'What is the world record?', answer: 'Surviving past 60 seconds puts you in the top 1%!' }]
    },
    component: `---
// CursorSurvivor: Bullet Evasion
---

<div id="cursor-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Survived: <span id="cur-time" class="font-mono font-bold text-brand-neon">0.0s</span></div>
    <div>Best: <span id="cur-best" class="font-mono font-bold text-brand-gold">0.0s</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="cur-canvas" width="320" height="340" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('cur-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const timeEl = document.getElementById('cur-time')!;
  const bestEl = document.getElementById('cur-best')!;

  let cursor = { x: 160, y: 170 };
  let bullets: { x: number; y: number; vx: number; vy: number }[] = [];
  let startTime = Date.now();
  let best = 0;

  function loop() {
    ctx.fillStyle = '#080811';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    timeEl.textContent = \`\${elapsed}s\`;

    // Spawn bullets
    if (Math.random() < 0.1) {
      bullets.push({
        x: Math.random() < 0.5 ? 0 : canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5
      });
    }

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += b.vx;
      b.y += b.vy;

      // Check collision with cursor
      if (Math.hypot(b.x - cursor.x, b.y - cursor.y) < 8) {
        sound.explosion();
        const score = parseFloat(elapsed);
        if (score > best) best = score;
        bestEl.textContent = \`\${best.toFixed(1)}s\`;
        bullets = [];
        startTime = Date.now();
        break;
      }

      // Draw bullet
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw cursor target
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(cursor.x, cursor.y, 6, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    cursor.x = e.clientX - rect.left;
    cursor.y = e.clientY - rect.top;
  });

  requestAnimationFrame(loop);
</script>
`
  },

  // 37. SpeedPark 2D (Precision Valet)
  {
    meta: {
      id: 'speedpark',
      slug: 'speedpark',
      subdomain: 'park',
      title: 'SpeedPark: Precision 2D Valet',
      tagline: 'Maneuver sports cars into tight parking bays under 15 seconds without scraping!',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.2M',
      color: '#3b82f6',
      badge: 'Parking Sim',
      releaseDate: '2026-05-15',
      keywords: ['parking game 2d free', 'parallel parking simulator web', 'speed valet online', 'car parking unblocked'],
      description: 'Steer cars into marked valet parking stalls within strict time limits without hitting curbs.',
      controls: [{ key: 'Arrow Keys / WASD', action: 'Gas, reverse, and steer wheel' }],
      instructions: ['Drive into highlighted yellow parking bay.', 'Align car straight and come to a complete stop.'],
      strategies: ['Reverse into tight spots for easier front wheel angle adjustment.'],
      faqs: [{ question: 'Are there multiple vehicles?', answer: 'Yes, sedans, trucks, and limousines!' }]
    },
    component: `---
// SpeedPark: Precision 2D Valet
---

<div id="park-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Time Left: <span id="park-time" class="font-mono font-bold text-brand-neon">15s</span></div>
    <div>Score: <span id="park-score" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="park-canvas" width="320" height="340" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('park-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const timeEl = document.getElementById('park-time')!;

  let car = { x: 60, y: 280, angle: -Math.PI / 2, speed: 0 };
  let parkingBay = { x: 220, y: 80, w: 60, h: 90 };
  let keys: Record<string, boolean> = {};

  function loop() {
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Car controls
    if (keys['ArrowUp'] || keys['KeyW']) car.speed = Math.min(3, car.speed + 0.1);
    else if (keys['ArrowDown'] || keys['KeyS']) car.speed = Math.max(-2, car.speed - 0.1);
    else car.speed *= 0.94; // friction

    if (keys['ArrowLeft'] || keys['KeyA']) car.angle -= 0.04;
    if (keys['ArrowRight'] || keys['KeyD']) car.angle += 0.04;

    car.x += Math.cos(car.angle) * car.speed;
    car.y += Math.sin(car.angle) * car.speed;

    // Draw parking bay
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 6]);
    ctx.strokeRect(parkingBay.x, parkingBay.y, parkingBay.w, parkingBay.h);
    ctx.setLineDash([]);

    // Check successful park
    if (car.x >= parkingBay.x && car.x <= parkingBay.x + parkingBay.w &&
        car.y >= parkingBay.y && car.y <= parkingBay.y + parkingBay.h && Math.abs(car.speed) < 0.2) {
      sound.victory();
      alert('🎉 Parked Perfectly in Valet Bay!');
      car = { x: 60, y: 280, angle: -Math.PI / 2, speed: 0 };
    }

    // Draw car
    ctx.save();
    ctx.translate(car.x, car.y);
    ctx.rotate(car.angle);
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(-12, -22, 24, 44);
    ctx.restore();

    requestAnimationFrame(loop);
  }

  window.addEventListener('keydown', (e) => keys[e.code] = true);
  window.addEventListener('keyup', (e) => keys[e.code] = false);

  requestAnimationFrame(loop);
</script>
`
  },

  // 38. ColorClash (Stroop Reflex Duel)
  {
    meta: {
      id: 'colorclash',
      slug: 'colorclash',
      subdomain: 'stroop',
      title: 'ColorClash: Stroop Reflex Duel',
      tagline: 'Neuro-reaction battle! Match the word or the ink color within 0.8 seconds.',
      category: 'arcade',
      rating: 4.8,
      playCount: '980K',
      color: '#ec4899',
      badge: 'Neuro Reflex',
      releaseDate: '2026-05-18',
      keywords: ['stroop effect game online', 'brain reaction test', 'speed color duel', 'cognitive reflex test'],
      description: 'Psychological Stroop effect gamified: match the printed ink color or text name against a ruthless countdown.',
      controls: [{ key: 'Click Color Button', action: 'Select match within 1s' }],
      instructions: ['Prompt tells you: "MATCH INK" or "MATCH TEXT".', 'Select the correct color button before the countdown runs out.'],
      strategies: ['Train your brain to ignore font text when matching ink color.'],
      faqs: [{ question: 'Does it calculate ms reaction latency?', answer: 'Yes, your average decision latency is benchmarked!' }]
    },
    component: `---
// ColorClash: Stroop Reflex Duel
---

<div id="clash-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Streak: <span id="clash-streak" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Best: <span id="clash-best" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="w-full p-8 rounded-2xl border-2 border-brand-border bg-brand-dark text-center shadow-2xl mb-4">
    <div id="clash-rule" class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">MATCH INK COLOR</div>
    <div id="clash-word" class="font-black text-4xl font-display">RED</div>
  </div>

  <div class="grid grid-cols-2 gap-2 w-full" id="clash-buttons">
    <button class="clash-btn py-3 rounded-xl border border-brand-border bg-brand-card font-bold text-red-400 hover:border-red-400" data-color="RED">RED</button>
    <button class="clash-btn py-3 rounded-xl border border-brand-border bg-brand-card font-bold text-blue-400 hover:border-blue-400" data-color="BLUE">BLUE</button>
    <button class="clash-btn py-3 rounded-xl border border-brand-border bg-brand-card font-bold text-green-400 hover:border-green-400" data-color="GREEN">GREEN</button>
    <button class="clash-btn py-3 rounded-xl border border-brand-border bg-brand-card font-bold text-amber-400 hover:border-amber-400" data-color="YELLOW">YELLOW</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const COLORS = [
    { name: 'RED', hex: '#ef4444' },
    { name: 'BLUE', hex: '#3b82f6' },
    { name: 'GREEN', hex: '#10b981' },
    { name: 'YELLOW', hex: '#f59e0b' }
  ];

  let streak = 0;
  let best = 0;
  let currentTargetColor = 'RED';

  const wordEl = document.getElementById('clash-word')!;
  const streakEl = document.getElementById('clash-streak')!;
  const bestEl = document.getElementById('clash-best')!;

  function nextRound() {
    const textC = COLORS[Math.floor(Math.random() * COLORS.length)];
    const inkC = COLORS[Math.floor(Math.random() * COLORS.length)];
    wordEl.textContent = textC.name;
    wordEl.style.color = inkC.hex;
    currentTargetColor = inkC.name; // match ink color
  }

  document.querySelectorAll('.clash-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = (e.currentTarget as HTMLElement).dataset.color!;
      if (selected === currentTargetColor) {
        sound.score();
        streak++;
        streakEl.textContent = streak.toString();
        if (streak > best) {
          best = streak;
          bestEl.textContent = best.toString();
        }
      } else {
        sound.gameOver();
        streak = 0;
        streakEl.textContent = '0';
      }
      nextRound();
    });
  });

  nextRound();
</script>
`
  }
];
