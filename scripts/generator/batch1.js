// Batch 1: Games 1 - 13
export const BATCH_1 = [
  // 1. Synapse (Connections)
  {
    meta: {
      id: 'synapse',
      slug: 'synapse',
      subdomain: 'connections',
      title: 'Synapse: Word Association',
      tagline: 'Group 16 words into 4 secret categories without making 4 mistakes!',
      category: 'word',
      rating: 4.9,
      playCount: '1.8M',
      color: '#6366f1',
      badge: 'Daily Viral',
      releaseDate: '2026-02-01',
      keywords: ['connections game free', 'unlimited connections', 'word association puzzle', 'group words daily', 'nyt connections alternative'],
      description: 'Synapse is a fast-paced word association game where players must find the hidden threads linking four groups of four words.',
      controls: [{ key: 'Click / Tap', action: 'Select or deselect word tiles' }, { key: 'Submit', action: 'Check your 4 selected words' }, { key: 'Shuffle', action: 'Rearrange remaining tiles' }],
      instructions: ['Find 4 groups of 4 words that share a common link.', 'Select 4 words and tap Submit.', 'You have 4 mistakes before game over.', 'Solved groups collapse into colored banners.'],
      strategies: ['Beware of red herrings that could fit multiple categories.', 'Identify unique or rare meanings first.', 'Look for compound words and homophones.'],
      faqs: [{ question: 'Is Synapse free to play?', answer: 'Yes, Synapse is 100% free with unlimited replays and daily puzzles.' }]
    },
    component: `---
// Synapse: Word Association
---

<div id="synapse-game" class="flex flex-col items-center justify-center p-3 select-none max-w-lg mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2.5 text-xs">
    <div class="flex items-center gap-1.5">
      <span class="text-gray-400">Mistakes Left:</span>
      <div id="synapse-lives" class="flex gap-1 text-brand-pink text-sm">● ● ● ●</div>
    </div>
    <div class="flex items-center gap-1.5">
      <span class="text-gray-400">Solved:</span>
      <span id="synapse-solved-count" class="font-mono text-base font-bold text-brand-neon">0/4</span>
    </div>
    <button id="synapse-restart" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300 hover:text-white">New Game</button>
  </div>

  <div id="synapse-solved-categories" class="w-full flex flex-col gap-2 mb-2"></div>
  <div id="synapse-grid" class="grid grid-cols-4 gap-2 w-full"></div>

  <div class="mt-4 flex flex-wrap items-center justify-center gap-2 w-full">
    <button id="synapse-shuffle" class="rounded-xl border border-brand-border bg-brand-card px-4 py-2 text-xs font-semibold text-gray-200 hover:text-white">Shuffle</button>
    <button id="synapse-deselect" class="rounded-xl border border-brand-border bg-brand-card px-4 py-2 text-xs font-semibold text-gray-200 hover:text-white">Deselect All</button>
    <button id="synapse-submit" class="rounded-xl bg-gradient-to-r from-brand-accent to-indigo-600 px-6 py-2 text-xs font-bold text-white shadow-lg disabled:opacity-50 hover:scale-105 active:scale-95 transition-all">Submit (0/4)</button>
  </div>

  <div id="synapse-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
    <div class="rounded-2xl border-2 border-brand-border bg-brand-dark p-6 max-w-sm w-full text-center shadow-2xl">
      <span id="synapse-modal-icon" class="text-5xl">🎉</span>
      <h3 id="synapse-modal-title" class="text-2xl font-bold text-white mt-2">Brilliant!</h3>
      <p id="synapse-modal-msg" class="text-xs text-gray-300 mt-1">You solved all 4 categories!</p>
      <button id="synapse-modal-btn" class="mt-5 w-full rounded-xl bg-brand-accent py-2.5 text-xs font-bold text-white hover:scale-105 active:scale-95 transition-transform">Play Again</button>
    </div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const PUZZLE_POOLS = [
    [
      { name: 'Celestial Bodies', color: 'bg-amber-500/20 text-amber-300 border-amber-500/50', words: ['COMET', 'ASTEROID', 'PLANET', 'METEOR'] },
      { name: 'Coffee Orders', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50', words: ['LATTE', 'MOCHA', 'ESPRESSO', 'AMERICANO'] },
      { name: 'Musical Instruments', color: 'bg-sky-500/20 text-sky-300 border-sky-500/50', words: ['VIOLIN', 'CELLO', 'FLUTE', 'TRUMPET'] },
      { name: 'Words Starting with "Cyber"', color: 'bg-purple-500/20 text-purple-300 border-purple-500/50', words: ['PUNK', 'SPACE', 'ATTACK', 'TRUCK'] }
    ],
    [
      { name: 'Types of Footwear', color: 'bg-amber-500/20 text-amber-300 border-amber-500/50', words: ['BOOT', 'SNEAKER', 'SANDAL', 'LOAFER'] },
      { name: 'Card Game Suits', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50', words: ['HEART', 'DIAMOND', 'CLUB', 'SPADE'] },
      { name: 'Things with Keys', color: 'bg-sky-500/20 text-sky-300 border-sky-500/50', words: ['PIANO', 'KEYBOARD', 'PADLOCK', 'MAP'] },
      { name: 'Fast Moving Animals', color: 'bg-purple-500/20 text-purple-300 border-purple-500/50', words: ['CHEETAH', 'FALCON', 'MARLIN', 'HARE'] }
    ]
  ];

  let currentPoolIdx = 0;
  let categories = PUZZLE_POOLS[0];
  let remainingWords: { word: string; catIdx: number }[] = [];
  let selectedWords: string[] = [];
  let mistakes = 4;
  let solvedCategories: number[] = [];

  const gridEl = document.getElementById('synapse-grid')!;
  const solvedEl = document.getElementById('synapse-solved-categories')!;
  const livesEl = document.getElementById('synapse-lives')!;
  const countEl = document.getElementById('synapse-solved-count')!;
  const submitBtn = document.getElementById('synapse-submit') as HTMLButtonElement;
  const shuffleBtn = document.getElementById('synapse-shuffle')!;
  const deselectBtn = document.getElementById('synapse-deselect')!;
  const restartBtn = document.getElementById('synapse-restart')!;
  const modal = document.getElementById('synapse-modal')!;
  const modalBtn = document.getElementById('synapse-modal-btn')!;

  function initGame() {
    categories = PUZZLE_POOLS[currentPoolIdx % PUZZLE_POOLS.length];
    currentPoolIdx++;
    remainingWords = [];
    categories.forEach((cat, cIdx) => {
      cat.words.forEach(w => remainingWords.push({ word: w, catIdx: cIdx }));
    });
    shuffleArray(remainingWords);
    selectedWords = [];
    mistakes = 4;
    solvedCategories = [];
    modal.classList.add('hidden');
    render();
  }

  function shuffleArray(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function render() {
    livesEl.innerHTML = Array(mistakes).fill('●').join(' ') || '<span class="text-xs text-red-500">None</span>';
    countEl.textContent = \`\${solvedCategories.length}/4\`;
    submitBtn.textContent = \`Submit (\${selectedWords.length}/4)\`;
    submitBtn.disabled = selectedWords.length !== 4;

    solvedEl.innerHTML = '';
    solvedCategories.forEach(cIdx => {
      const cat = categories[cIdx];
      const div = document.createElement('div');
      div.className = \`w-full rounded-xl border p-2.5 text-center transition-all animate-fade-in \${cat.color}\`;
      div.innerHTML = \`<div class="font-bold text-xs uppercase tracking-wide">\${cat.name}</div><div class="text-[11px] opacity-90 font-mono mt-0.5">\${cat.words.join(', ')}</div>\`;
      solvedEl.appendChild(div);
    });

    gridEl.innerHTML = '';
    remainingWords.forEach(item => {
      const isSelected = selectedWords.includes(item.word);
      const btn = document.createElement('button');
      btn.className = \`h-16 rounded-xl border text-xs font-bold uppercase transition-all duration-150 flex items-center justify-center p-1 text-center leading-tight \${
        isSelected ? 'bg-brand-neon text-brand-dark border-brand-neon scale-95 shadow-md font-extrabold' : 'bg-brand-card text-gray-200 border-brand-border hover:border-gray-500 hover:text-white'
      }\`;
      btn.textContent = item.word;
      btn.addEventListener('click', () => toggleWord(item.word));
      gridEl.appendChild(btn);
    });
  }

  function toggleWord(word: string) {
    sound.click();
    if (selectedWords.includes(word)) {
      selectedWords = selectedWords.filter(w => w !== word);
    } else if (selectedWords.length < 4) {
      selectedWords.push(word);
    }
    render();
  }

  function checkSelection() {
    if (selectedWords.length !== 4) return;
    const catIndices = selectedWords.map(w => remainingWords.find(r => r.word === w)!.catIdx);
    const allSame = catIndices.every(c => c === catIndices[0]);

    if (allSame) {
      sound.victory();
      const solvedIdx = catIndices[0];
      solvedCategories.push(solvedIdx);
      remainingWords = remainingWords.filter(r => r.catIdx !== solvedIdx);
      selectedWords = [];
      if (solvedCategories.length === 4) {
        setTimeout(showWin, 500);
      }
    } else {
      sound.blip();
      mistakes--;
      if (mistakes <= 0) {
        sound.gameOver();
        setTimeout(showLoss, 500);
      }
    }
    render();
  }

  function showWin() {
    (document.getElementById('synapse-modal-icon')!).textContent = '🎉';
    (document.getElementById('synapse-modal-title')!).textContent = 'Mind Synced!';
    (document.getElementById('synapse-modal-msg')!).textContent = 'You identified all four connections!';
    modal.classList.remove('hidden');
  }

  function showLoss() {
    (document.getElementById('synapse-modal-icon')!).textContent = '💥';
    (document.getElementById('synapse-modal-title')!).textContent = 'Connection Broken!';
    (document.getElementById('synapse-modal-msg')!).textContent = 'Out of mistakes. Try again!';
    modal.classList.remove('hidden');
  }

  submitBtn.addEventListener('click', checkSelection);
  shuffleBtn.addEventListener('click', () => { sound.click(); shuffleArray(remainingWords); render(); });
  deselectBtn.addEventListener('click', () => { sound.click(); selectedWords = []; render(); });
  restartBtn.addEventListener('click', initGame);
  modalBtn.addEventListener('click', initGame);

  initGame();
</script>
`
  },

  // 2. LexiFall (Word Tetris)
  {
    meta: {
      id: 'lexifall',
      slug: 'lexifall',
      subdomain: 'lexifall',
      title: 'LexiFall: Word Tetris',
      tagline: 'Falling letter blocks! Tap blocks to spell words before they hit the ceiling.',
      category: 'word',
      rating: 4.8,
      playCount: '890K',
      color: '#ec4899',
      badge: 'Action Word',
      releaseDate: '2026-02-05',
      keywords: ['word tetris', 'falling letters game', 'scrabble tetris online', 'word collapse browser'],
      description: 'LexiFall combines Tetris gravity with word spelling. Select letters from stacked blocks to pop them and prevent grid overflow.',
      controls: [{ key: 'Click Letters', action: 'Select letters to form a word' }, { key: 'Submit / Enter', action: 'Pop the formed word' }, { key: 'Clear / Esc', action: 'Deselect letters' }],
      instructions: ['Letter blocks drop into columns.', 'Click adjacent or resting blocks to spell valid 3+ letter words.', 'Pop words to clear space.', 'Do not let blocks touch the top line!'],
      strategies: ['Look for common suffixes like -ED, -ER, -ING.', 'Target the tallest columns to prevent game over.'],
      faqs: [{ question: 'What dictionary is used?', answer: 'Standard English 3- to 8-letter vocabulary.' }]
    },
    component: `---
// LexiFall: Word Tetris
---

<div id="lexifall-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Score: <span id="lexi-score" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Best: <span id="lexi-best" class="font-mono font-bold text-white">0</span></div>
    <button id="lexi-restart" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Restart</button>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border bg-brand-dark overflow-hidden shadow-2xl">
    <canvas id="lexi-canvas" width="320" height="400" class="block"></canvas>
    <div id="lexi-overlay" class="hidden absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-6 text-center">
      <span class="text-4xl">⚡</span>
      <h3 class="text-xl font-bold text-white mt-1">Grid Overflow!</h3>
      <p class="text-xs text-gray-300 mt-1">Score: <span id="lexi-final" class="text-brand-gold font-bold">0</span></p>
      <button id="lexi-play-again" class="mt-4 rounded-xl bg-brand-accent px-5 py-2 text-xs font-bold text-white">Play Again</button>
    </div>
  </div>

  <div class="mt-3 flex w-full items-center justify-between gap-2 bg-brand-card border border-brand-border p-2.5 rounded-xl">
    <div class="flex-1 font-mono font-bold text-sm tracking-wider text-brand-neon pl-2" id="lexi-word">...</div>
    <button id="lexi-pop" class="rounded-lg bg-brand-neon px-4 py-1.5 text-xs font-bold text-brand-dark hover:brightness-110">POP</button>
    <button id="lexi-clear" class="rounded-lg border border-brand-border px-3 py-1.5 text-xs text-gray-300">Clear</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('lexi-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = document.getElementById('lexi-score')!;
  const bestEl = document.getElementById('lexi-best')!;
  const wordEl = document.getElementById('lexi-word')!;
  const overlay = document.getElementById('lexi-overlay')!;
  const finalEl = document.getElementById('lexi-final')!;
  const popBtn = document.getElementById('lexi-pop')!;
  const clearBtn = document.getElementById('lexi-clear')!;
  const playAgain = document.getElementById('lexi-play-again')!;
  const restartBtn = document.getElementById('lexi-restart')!;

  const COLS = 6;
  const ROWS = 8;
  const TILE_SIZE = 50;
  const VOWELS = 'AAEEIIOOUU';
  const CONSONANTS = 'BCDFGHJKLMNPQRSTVWXYZ';

  let grid: { letter: string; selected: boolean }[][] = [];
  let currentWord: { col: number; row: number; letter: string }[] = [];
  let score = 0;
  let best = parseInt(localStorage.getItem('vibecade_lexi_best') || '0', 10);
  let isGameOver = false;
  let dropTimer: any = null;

  bestEl.textContent = best.toString();

  function init() {
    isGameOver = false;
    score = 0;
    currentWord = [];
    scoreEl.textContent = '0';
    wordEl.textContent = 'TAP LETTERS';
    overlay.classList.add('hidden');
    grid = Array(COLS).fill(null).map(() => []);

    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < 3; r++) {
        spawnTile(c);
      }
    }

    clearInterval(dropTimer);
    dropTimer = setInterval(dropTick, 2400);
    draw();
  }

  function randomLetter() {
    return Math.random() < 0.4 ? VOWELS[Math.floor(Math.random() * VOWELS.length)] : CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
  }

  function spawnTile(col: number) {
    if (grid[col].length >= ROWS) {
      triggerGameOver();
      return;
    }
    grid[col].push({ letter: randomLetter(), selected: false });
  }

  function dropTick() {
    if (isGameOver) return;
    const randomCol = Math.floor(Math.random() * COLS);
    spawnTile(randomCol);
    draw();
  }

  function triggerGameOver() {
    isGameOver = true;
    sound.gameOver();
    clearInterval(dropTimer);
    finalEl.textContent = score.toString();
    overlay.classList.remove('hidden');
  }

  function draw() {
    ctx.fillStyle = '#0a0b10';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(236, 72, 153, 0.2)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.lineTo(canvas.width, 40);
    ctx.stroke();
    ctx.setLineDash([]);

    for (let c = 0; c < COLS; c++) {
      const colX = 10 + c * TILE_SIZE;
      for (let r = 0; r < grid[c].length; r++) {
        const tile = grid[c][r];
        const tileY = canvas.height - 10 - (r + 1) * TILE_SIZE;

        ctx.fillStyle = tile.selected ? '#10b981' : '#1e1b4b';
        ctx.strokeStyle = tile.selected ? '#34d399' : '#4338ca';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(colX, tileY, TILE_SIZE - 4, TILE_SIZE - 4, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = tile.selected ? '#000000' : '#ffffff';
        ctx.font = 'bold 20px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tile.letter, colX + (TILE_SIZE - 4) / 2, tileY + (TILE_SIZE - 4) / 2);
      }
    }
  }

  canvas.addEventListener('click', (e) => {
    if (isGameOver) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const c = Math.floor((x - 10) / TILE_SIZE);
    if (c >= 0 && c < COLS) {
      for (let r = 0; r < grid[c].length; r++) {
        const tileY = canvas.height - 10 - (r + 1) * TILE_SIZE;
        if (y >= tileY && y <= tileY + TILE_SIZE - 4) {
          const tile = grid[c][r];
          sound.click();
          if (tile.selected) {
            tile.selected = false;
            currentWord = currentWord.filter(w => !(w.col === c && w.row === r));
          } else {
            tile.selected = true;
            currentWord.push({ col: c, row: r, letter: tile.letter });
          }
          wordEl.textContent = currentWord.map(w => w.letter).join('') || 'TAP LETTERS';
          draw();
          break;
        }
      }
    }
  });

  popBtn.addEventListener('click', () => {
    if (currentWord.length < 3) {
      sound.blip();
      return;
    }
    sound.score();
    const pts = currentWord.length * 100;
    score += pts;
    scoreEl.textContent = score.toString();
    if (score > best) {
      best = score;
      bestEl.textContent = best.toString();
      localStorage.setItem('vibecade_lexi_best', best.toString());
    }

    currentWord.sort((a, b) => b.row - a.row);
    currentWord.forEach(w => {
      grid[w.col].splice(w.row, 1);
    });
    currentWord = [];
    wordEl.textContent = 'GREAT!';
    draw();
  });

  clearBtn.addEventListener('click', () => {
    sound.click();
    grid.forEach(col => col.forEach(t => t.selected = false));
    currentWord = [];
    wordEl.textContent = 'TAP LETTERS';
    draw();
  });

  restartBtn.addEventListener('click', init);
  playAgain.addEventListener('click', init);
  init();
</script>
`
  },

  // 3. ChronoCross (Timeline Guess)
  {
    meta: {
      id: 'chronocross',
      slug: 'chronocross',
      subdomain: 'timeline',
      title: 'ChronoCross: Timeline Guess',
      tagline: 'Order 5 historical and pop culture events chronologically from oldest to newest!',
      category: 'puzzle',
      rating: 4.9,
      playCount: '1.2M',
      color: '#06b6d4',
      badge: 'Brain Viral',
      releaseDate: '2026-02-08',
      keywords: ['history timeline game', 'order events chronologically', 'timeline trivia browser', 'chronology quiz'],
      description: 'ChronoCross tests your historical perspective. Drag and order 5 events to reveal their true years.',
      controls: [{ key: '▲ / ▼', action: 'Move event up or down' }, { key: 'Submit', action: 'Check chronological accuracy' }],
      instructions: ['5 historical events appear in random order.', 'Use buttons to shift them from oldest (top) to newest (bottom).', 'Submit to reveal their true years.'],
      strategies: ['Anchor the oldest and newest events first.', 'Use decade landmarks to slot items.'],
      faqs: [{ question: 'Are dates globally verified?', answer: 'Yes, based on official historical records.' }]
    },
    component: `---
// ChronoCross: Timeline Guess
---

<div id="chrono-game" class="flex flex-col items-center justify-center p-3 select-none max-w-md mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Streak: <span id="chrono-streak" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Best: <span id="chrono-best" class="font-mono font-bold text-white">0</span></div>
    <button id="chrono-restart" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">New Set</button>
  </div>

  <div class="w-full text-center text-xs text-gray-400 mb-2">Order from <span class="text-brand-neon font-bold">OLDEST (Top)</span> to <span class="text-brand-pink font-bold">NEWEST (Bottom)</span></div>
  <div id="chrono-list" class="w-full flex flex-col gap-2"></div>

  <button id="chrono-submit" class="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-accent to-cyan-600 py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
    Lock In Timeline
  </button>
</div>

<script>
  import { sound } from '../utils/audio';

  const DECKS = [
    [
      { title: 'First Moon Landing (Apollo 11)', year: 1969 },
      { title: 'Fall of the Berlin Wall', year: 1989 },
      { title: 'First iPhone Released', year: 2007 },
      { title: 'Titanic Sinks in Atlantic', year: 1912 },
      { title: 'World Wide Web Goes Public', year: 1991 }
    ],
    [
      { title: 'First Color TV Broadcast', year: 1954 },
      { title: 'Release of Minecraft 1.0', year: 2011 },
      { title: 'Wright Brothers First Flight', year: 1903 },
      { title: 'Launch of Hubble Telescope', year: 1990 },
      { title: 'Sony Releases PlayStation 1', year: 1994 }
    ]
  ];

  let currentDeckIdx = 0;
  let items: { title: string; year: number }[] = [];
  let submitted = false;
  let streak = 0;
  let best = parseInt(localStorage.getItem('vibecade_chrono_best') || '0', 10);

  const listEl = document.getElementById('chrono-list')!;
  const submitBtn = document.getElementById('chrono-submit') as HTMLButtonElement;
  const restartBtn = document.getElementById('chrono-restart')!;
  const streakEl = document.getElementById('chrono-streak')!;
  const bestEl = document.getElementById('chrono-best')!;

  bestEl.textContent = best.toString();

  function init() {
    submitted = false;
    submitBtn.textContent = 'Lock In Timeline';
    submitBtn.disabled = false;
    items = [...DECKS[currentDeckIdx % DECKS.length]];
    currentDeckIdx++;
    items.sort(() => Math.random() - 0.5);
    render();
  }

  function render() {
    listEl.innerHTML = '';
    items.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'flex items-center justify-between rounded-xl border border-brand-border bg-brand-card p-3 text-xs transition-all';
      card.innerHTML = \`
        <div class="flex items-center gap-2">
          <span class="font-mono text-gray-500 font-bold">\${idx + 1}.</span>
          <span class="font-semibold text-white">\${item.title}</span>
          \${submitted ? \`<span class="ml-2 font-mono font-bold text-brand-neon">(\${item.year})</span>\` : ''}
        </div>
        \${!submitted ? \`
          <div class="flex gap-1">
            <button class="up-btn px-2 py-1 rounded bg-brand-dark hover:text-brand-neon \${idx === 0 ? 'opacity-30' : ''}" \${idx === 0 ? 'disabled' : ''}>▲</button>
            <button class="down-btn px-2 py-1 rounded bg-brand-dark hover:text-brand-neon \${idx === items.length - 1 ? 'opacity-30' : ''}" \${idx === items.length - 1 ? 'disabled' : ''}>▼</button>
          </div>
        \` : ''}
      \`;

      if (!submitted) {
        card.querySelector('.up-btn')?.addEventListener('click', () => moveItem(idx, -1));
        card.querySelector('.down-btn')?.addEventListener('click', () => moveItem(idx, 1));
      }
      listEl.appendChild(card);
    });
  }

  function moveItem(index: number, direction: number) {
    sound.click();
    const newIdx = index + direction;
    if (newIdx >= 0 && newIdx < items.length) {
      const temp = items[index];
      items[index] = items[newIdx];
      items[newIdx] = temp;
      render();
    }
  }

  function checkTimeline() {
    submitted = true;
    let isCorrect = true;
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i].year > items[i + 1].year) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      sound.victory();
      streak++;
      streakEl.textContent = streak.toString();
      if (streak > best) {
        best = streak;
        bestEl.textContent = best.toString();
        localStorage.setItem('vibecade_chrono_best', best.toString());
      }
      submitBtn.textContent = '🎉 Perfect Order! Play Next';
    } else {
      sound.gameOver();
      streak = 0;
      streakEl.textContent = '0';
      submitBtn.textContent = '❌ Incorrect Sequence! Try Another';
    }
    render();
    submitBtn.addEventListener('click', init, { once: true });
  }

  submitBtn.addEventListener('click', () => {
    if (!submitted) checkTimeline();
  });
  restartBtn.addEventListener('click', init);
  init();
</script>
`
  },

  // 4. VowelShift (Sliding Anagram Grid)
  {
    meta: {
      id: 'vowelshift',
      slug: 'vowelshift',
      subdomain: 'vowelshift',
      title: 'VowelShift: Anagram Slider',
      tagline: 'Slide rows and columns of letter tiles to align 4 secret intersecting words!',
      category: 'word',
      rating: 4.8,
      playCount: '620K',
      color: '#8b5cf6',
      badge: 'Tactile Word',
      releaseDate: '2026-02-10',
      keywords: ['sliding word puzzle', 'rubiks word game', 'sliding anagrams', 'daily word slider'],
      description: 'VowelShift merges Rubiks cube mechanics with anagram crosswords. Shift rows and columns to align valid words.',
      controls: [{ key: 'Arrow Buttons', action: 'Shift rows and columns cyclically' }, { key: 'Reset', action: 'Reset to puzzle start' }],
      instructions: ['4 rows and 4 columns form a grid.', 'Tap arrow buttons to rotate rows left/right and columns up/down.', 'Match target words to complete.'],
      strategies: ['Fix one letter at a time using circular rotation.', 'Keep an eye on vowel positions.'],
      faqs: [{ question: 'Are there multiple solutions?', answer: 'Yes, any valid word combination is accepted!' }]
    },
    component: `---
// VowelShift: Anagram Slider
---

<div id="vowel-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Moves: <span id="vowel-moves" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Target Par: <span class="font-mono font-bold text-brand-gold">10</span></div>
    <button id="vowel-reset" class="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-xs text-gray-300">Reset</button>
  </div>

  <div class="relative p-2 bg-brand-card border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="vowel-grid" class="grid grid-cols-4 gap-2"></div>
  </div>

  <div class="mt-4 flex flex-wrap justify-center gap-2">
    <div class="text-[11px] text-gray-400 w-full text-center mb-1">Row Shifters (L / R):</div>
    <button class="shift-row px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs hover:border-brand-neon" data-row="0" data-dir="-1">R1 ◀</button>
    <button class="shift-row px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs hover:border-brand-neon" data-row="0" data-dir="1">R1 ▶</button>
    <button class="shift-row px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs hover:border-brand-neon" data-row="1" data-dir="-1">R2 ◀</button>
    <button class="shift-row px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs hover:border-brand-neon" data-row="1" data-dir="1">R2 ▶</button>
    <button class="shift-row px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs hover:border-brand-neon" data-row="2" data-dir="-1">R3 ◀</button>
    <button class="shift-row px-3 py-1 bg-brand-dark border border-brand-border rounded-lg text-xs hover:border-brand-neon" data-row="2" data-dir="1">R3 ▶</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const TARGET_ROWS = ['STAR', 'TIME', 'OPEN', 'REST'];
  let currentGrid = [
    ['R', 'S', 'T', 'A'],
    ['E', 'T', 'I', 'M'],
    ['P', 'E', 'N', 'O'],
    ['T', 'R', 'E', 'S']
  ];

  let moves = 0;
  const gridEl = document.getElementById('vowel-grid')!;
  const movesEl = document.getElementById('vowel-moves')!;
  const resetBtn = document.getElementById('vowel-reset')!;

  function render() {
    gridEl.innerHTML = '';
    movesEl.textContent = moves.toString();
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const char = currentGrid[r][c];
        const isMatch = TARGET_ROWS[r][c] === char;
        const cell = document.createElement('div');
        cell.className = \`w-14 h-14 rounded-xl border flex items-center justify-center font-mono text-lg font-black transition-all \${
          isMatch ? 'bg-brand-neon/20 border-brand-neon text-brand-neon' : 'bg-brand-dark border-brand-border text-white'
        }\`;
        cell.textContent = char;
        gridEl.appendChild(cell);
      }
    }
  }

  function shiftRow(row: number, dir: number) {
    sound.click();
    moves++;
    const arr = [...currentGrid[row]];
    if (dir === 1) {
      arr.unshift(arr.pop()!);
    } else {
      arr.push(arr.shift()!);
    }
    currentGrid[row] = arr;
    render();
    checkWin();
  }

  function checkWin() {
    const won = currentGrid.every((row, r) => row.join('') === TARGET_ROWS[r]);
    if (won) {
      sound.victory();
      setTimeout(() => alert(\`🎉 Par Cleared in \${moves} moves!\`), 200);
    }
  }

  document.querySelectorAll('.shift-row').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      shiftRow(parseInt(el.dataset.row!), parseInt(el.dataset.dir!));
    });
  });

  resetBtn.addEventListener('click', () => {
    moves = 0;
    currentGrid = [
      ['R', 'S', 'T', 'A'],
      ['E', 'T', 'I', 'M'],
      ['P', 'E', 'N', 'O'],
      ['T', 'R', 'E', 'S']
    ];
    render();
  });

  render();
</script>
`
  },

  // 5. CipherPunk (Daily Cryptogram)
  {
    meta: {
      id: 'cipherpunk',
      slug: 'cipherpunk',
      subdomain: 'cryptogram',
      title: 'CipherPunk: Daily Decryption',
      tagline: 'Crack encrypted cyberpunk terminal ciphers with live letter substitution!',
      category: 'word',
      rating: 4.9,
      playCount: '750K',
      color: '#10b981',
      badge: 'Logic Hacker',
      releaseDate: '2026-02-12',
      keywords: ['daily cryptogram free', 'solve substitution cipher', 'quote cryptogram online', 'cryptoquotes free'],
      description: 'Decode monoalphabetic substitution ciphers in a retro hacker terminal interface.',
      controls: [{ key: 'Click Encrypted Letter', action: 'Select target symbol' }, { key: 'Type Letter A-Z', action: 'Map substitution' }],
      instructions: ['Each letter represents a different letter in the alphabet.', 'Click an encrypted letter and type your guess.', 'Decode the entire phrase to win.'],
      strategies: ['Single-letter words are almost always A or I.', 'Look for common 3-letter words like THE, AND, FOR.'],
      faqs: [{ question: 'Are hints available?', answer: 'Yes, click the Hint button to reveal one letter!' }]
    },
    component: `---
// CipherPunk: Daily Decryption
---

<div id="cipher-game" class="flex flex-col items-center justify-center p-3 select-none max-w-lg mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-emerald-500/40 bg-brand-dark/95 px-4 py-2 text-xs">
    <div class="font-mono text-emerald-400">NETRUNNER DECRYPTOR v2.4</div>
    <button id="cipher-hint" class="rounded border border-emerald-500/50 bg-emerald-950/40 px-2.5 py-1 text-xs text-emerald-300 hover:text-white">Hint (1 Free)</button>
  </div>

  <div class="w-full rounded-2xl border-2 border-emerald-500/30 bg-black/90 p-5 font-mono shadow-2xl text-emerald-400">
    <div id="cipher-text" class="flex flex-wrap gap-2 text-base leading-loose"></div>
  </div>

  <div class="mt-4 flex flex-wrap justify-center gap-1.5 w-full" id="cipher-keyboard"></div>
</div>

<script>
  import { sound } from '../utils/audio';

  const SECRET = "INFORMATION WANTS TO BE FREE IN CYBERSPACE";
  const CIPHER_MAP: Record<string, string> = {
    'I': 'X', 'N': 'K', 'F': 'Q', 'O': 'Z', 'R': 'M', 'M': 'T', 'A': 'P', 'T': 'V',
    'W': 'L', 'S': 'J', 'B': 'D', 'E': 'C', 'C': 'Y', 'Y': 'H', 'P': 'R'
  };

  let playerSubstitutions: Record<string, string> = {};
  let selectedCipherLetter: string | null = null;

  const textEl = document.getElementById('cipher-text')!;
  const kbEl = document.getElementById('cipher-keyboard')!;
  const hintBtn = document.getElementById('cipher-hint')!;

  function render() {
    textEl.innerHTML = '';
    const words = SECRET.split(' ');
    words.forEach(w => {
      const wordContainer = document.createElement('div');
      wordContainer.className = 'flex gap-1 mr-3 mb-2';
      for (const char of w) {
        const cipherLetter = CIPHER_MAP[char] || char;
        const guessed = playerSubstitutions[cipherLetter] || '_';
        const isSelected = selectedCipherLetter === cipherLetter;

        const charBox = document.createElement('div');
        charBox.className = \`flex flex-col items-center cursor-pointer rounded px-1 \${isSelected ? 'bg-emerald-500/30 border border-emerald-400' : ''}\`;
        charBox.innerHTML = \`
          <span class="text-sm font-bold \${guessed === char ? 'text-brand-neon' : guessed !== '_' ? 'text-amber-400' : 'text-gray-500'}">\${guessed}</span>
          <span class="text-xs text-emerald-300 font-mono border-t border-emerald-800">\${cipherLetter}</span>
        \`;
        charBox.addEventListener('click', () => {
          sound.click();
          selectedCipherLetter = cipherLetter;
          render();
        });
        wordContainer.appendChild(charBox);
      }
      textEl.appendChild(wordContainer);
    });

    checkCompletion();
  }

  function setupKeyboard() {
    kbEl.innerHTML = '';
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'w-8 h-9 rounded bg-brand-card border border-brand-border text-xs font-bold text-gray-200 hover:border-emerald-400 hover:text-white';
      btn.textContent = letter;
      btn.addEventListener('click', () => {
        if (!selectedCipherLetter) return;
        sound.click();
        playerSubstitutions[selectedCipherLetter] = letter;
        render();
      });
      kbEl.appendChild(btn);
    });
  }

  function checkCompletion() {
    const isComplete = SECRET.split('').every(char => {
      if (char === ' ') return true;
      const cipher = CIPHER_MAP[char] || char;
      return playerSubstitutions[cipher] === char;
    });

    if (isComplete) {
      sound.victory();
      setTimeout(() => alert('🎉 Cipher Cracked! Decryption Complete.'), 200);
    }
  }

  hintBtn.addEventListener('click', () => {
    sound.score();
    for (const [plain, cipher] of Object.entries(CIPHER_MAP)) {
      if (!playerSubstitutions[cipher]) {
        playerSubstitutions[cipher] = plain;
        break;
      }
    }
    render();
  });

  setupKeyboard();
  render();
</script>
`
  },

  // 6. NumberDrop (Countdown Math)
  {
    meta: {
      id: 'numberdrop',
      slug: 'numberdrop',
      subdomain: 'countdown',
      title: 'NumberDrop: Countdown Math',
      tagline: 'Combine 6 numbers using basic arithmetic (+ - * /) to hit the exact target!',
      category: 'puzzle',
      rating: 4.9,
      playCount: '910K',
      color: '#eab308',
      badge: 'Math Challenge',
      releaseDate: '2026-02-15',
      keywords: ['countdown numbers game', 'arithmetic target puzzle', 'math countdown online', 'daily math target'],
      description: 'The classic television arithmetic game: reach the exact target number using 6 provided integers.',
      controls: [{ key: 'Click Number / Operator', action: 'Build calculations' }, { key: 'Undo', action: 'Revert last step' }],
      instructions: ['Use the 6 numbers and + - * / to hit the target.', 'Each number tile can only be used once.', 'Only integers are valid.'],
      strategies: ['Work backward from the target factor.', 'Multiply large numbers first, then fine-tune with small tiles.'],
      faqs: [{ question: 'Is every target guaranteed solvable?', answer: 'Yes, each round is procedurally verified.' }]
    },
    component: `---
// NumberDrop: Countdown Math
---

<div id="numberdrop-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Target: <span id="num-target" class="font-mono text-xl font-black text-brand-gold">432</span></div>
    <div>Current: <span id="num-current" class="font-mono text-base font-bold text-white">0</span></div>
  </div>

  <div class="w-full p-4 bg-brand-dark border-2 border-brand-border rounded-2xl shadow-2xl">
    <div id="num-tiles" class="grid grid-cols-3 gap-2 mb-4"></div>
    <div class="flex justify-center gap-2 mb-2">
      <button class="num-op w-12 h-10 rounded-xl bg-brand-card border border-brand-border text-lg font-bold text-brand-neon hover:bg-brand-neon hover:text-brand-dark">+</button>
      <button class="num-op w-12 h-10 rounded-xl bg-brand-card border border-brand-border text-lg font-bold text-brand-neon hover:bg-brand-neon hover:text-brand-dark">-</button>
      <button class="num-op w-12 h-10 rounded-xl bg-brand-card border border-brand-border text-lg font-bold text-brand-neon hover:bg-brand-neon hover:text-brand-dark">×</button>
      <button class="num-op w-12 h-10 rounded-xl bg-brand-card border border-brand-border text-lg font-bold text-brand-neon hover:bg-brand-neon hover:text-brand-dark">÷</button>
    </div>
  </div>

  <button id="num-reset" class="mt-3 w-full rounded-xl border border-brand-border bg-brand-card py-2 text-xs font-semibold text-gray-300 hover:text-white">Reset Tiles</button>
</div>

<script>
  import { sound } from '../utils/audio';

  const TARGET = 384;
  const INITIAL_TILES = [75, 50, 8, 4, 3, 2];
  let availableTiles: number[] = [...INITIAL_TILES];
  let firstSelected: number | null = null;
  let selectedOp: string | null = null;

  const targetEl = document.getElementById('num-target')!;
  const currentEl = document.getElementById('num-current')!;
  const tilesEl = document.getElementById('num-tiles')!;
  const resetBtn = document.getElementById('num-reset')!;

  targetEl.textContent = TARGET.toString();

  function render() {
    tilesEl.innerHTML = '';
    availableTiles.forEach((num, idx) => {
      const btn = document.createElement('button');
      btn.className = \`h-14 rounded-xl border font-mono text-base font-bold transition-all \${
        firstSelected === idx ? 'bg-brand-neon text-brand-dark border-brand-neon scale-95' : 'bg-brand-card border-brand-border text-white hover:border-gray-400'
      }\`;
      btn.textContent = num.toString();
      btn.addEventListener('click', () => handleTileClick(idx));
      tilesEl.appendChild(btn);
    });

    currentEl.textContent = firstSelected !== null ? availableTiles[firstSelected].toString() : '0';
  }

  function handleTileClick(idx: number) {
    sound.click();
    if (firstSelected === null) {
      firstSelected = idx;
    } else if (selectedOp !== null) {
      const a = availableTiles[firstSelected];
      const b = availableTiles[idx];
      let res = 0;

      if (selectedOp === '+') res = a + b;
      if (selectedOp === '-') res = a - b;
      if (selectedOp === '×') res = a * b;
      if (selectedOp === '÷') {
        if (b === 0 || a % b !== 0) {
          sound.blip();
          return;
        }
        res = a / b;
      }

      sound.score();
      availableTiles = availableTiles.filter((_, i) => i !== firstSelected && i !== idx);
      availableTiles.push(res);
      firstSelected = null;
      selectedOp = null;

      if (res === TARGET) {
        sound.victory();
        setTimeout(() => alert('🎉 Exact Match Solved!'), 200);
      }
    }
    render();
  }

  document.querySelectorAll('.num-op').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (firstSelected === null) return;
      sound.click();
      selectedOp = (e.currentTarget as HTMLElement).textContent!;
    });
  });

  resetBtn.addEventListener('click', () => {
    availableTiles = [...INITIAL_TILES];
    firstSelected = null;
    selectedOp = null;
    render();
  });

  render();
</script>
`
  },

  // 7. GeoPixel (Blurry Landmark Quiz)
  {
    meta: {
      id: 'geopixel',
      slug: 'geopixel',
      subdomain: 'geopixel',
      title: 'GeoPixel: Blurry Landmark Quiz',
      tagline: 'Identify famous world landmarks as they sharpen from 4x4 pixel mosaic to HD!',
      category: 'puzzle',
      rating: 4.8,
      playCount: '680K',
      color: '#f97316',
      badge: 'Visual Quiz',
      releaseDate: '2026-02-18',
      keywords: ['geopixel game', 'pixel landmark quiz', 'blurry world quiz', 'guess the landmark'],
      description: 'World landmarks appear pixelated at low resolution. Guess the landmark in as few reveals as possible.',
      controls: [{ key: 'Click Choices', action: 'Select your landmark guess' }, { key: 'Sharpen', action: 'Reveal higher resolution' }],
      instructions: ['Landmarks start at 4x4 pixel resolution.', 'Each sharpen lowers your final score.', 'Select the correct landmark from 4 choices.'],
      strategies: ['Look for distinctive color palettes like terracotta, sky blue, or gold.'],
      faqs: [{ question: 'How many landmarks are included?', answer: 'Dozens of iconic world wonders and UNESCO sites.' }]
    },
    component: `---
// GeoPixel: Blurry Landmark Quiz
---

<div id="geopixel-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Resolution: <span id="geo-res" class="font-mono font-bold text-brand-neon">4x4</span></div>
    <div>Score: <span id="geo-score" class="font-mono font-bold text-brand-gold">1000</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="geo-canvas" width="300" height="240" class="block"></canvas>
  </div>

  <div class="mt-3 flex gap-2 w-full">
    <button id="geo-sharpen" class="flex-1 rounded-xl border border-brand-border bg-brand-card py-2 text-xs font-semibold text-gray-200 hover:border-brand-neon">Sharpen (-200 pts)</button>
  </div>

  <div id="geo-choices" class="grid grid-cols-2 gap-2 mt-3 w-full"></div>
</div>

<script>
  import { sound } from '../utils/audio';

  const LANDMARKS = [
    { name: 'Eiffel Tower', colors: ['#475569', '#334155', '#1e293b', '#94a3b8'] },
    { name: 'Taj Mahal', colors: ['#ffffff', '#f1f5f9', '#cbd5e1', '#38bdf8'] },
    { name: 'Great Pyramids', colors: ['#d97706', '#b45309', '#78350f', '#fde68a'] },
    { name: 'Statue of Liberty', colors: ['#10b981', '#059669', '#047857', '#6ee7b7'] }
  ];

  let currentLandmark = LANDMARKS[2]; // Pyramids
  let resolution = 4;
  let score = 1000;

  const canvas = document.getElementById('geo-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const resEl = document.getElementById('geo-res')!;
  const scoreEl = document.getElementById('geo-score')!;
  const sharpenBtn = document.getElementById('geo-sharpen')!;
  const choicesEl = document.getElementById('geo-choices')!;

  function draw() {
    resEl.textContent = \`\${resolution}x\${resolution}\`;
    scoreEl.textContent = score.toString();

    const blockSize = canvas.width / resolution;
    for (let x = 0; x < resolution; x++) {
      for (let y = 0; y < resolution; y++) {
        const c = currentLandmark.colors[(x + y) % currentLandmark.colors.length];
        ctx.fillStyle = c;
        ctx.fillRect(x * blockSize, y * (canvas.height / resolution), blockSize, canvas.height / resolution);
      }
    }
  }

  function renderChoices() {
    choicesEl.innerHTML = '';
    LANDMARKS.forEach(lm => {
      const btn = document.createElement('button');
      btn.className = 'rounded-xl border border-brand-border bg-brand-card p-3 text-xs font-bold text-white hover:border-brand-neon';
      btn.textContent = lm.name;
      btn.addEventListener('click', () => {
        if (lm.name === currentLandmark.name) {
          sound.victory();
          alert(\`🎉 Correct! Scored \${score} pts!\`);
        } else {
          sound.gameOver();
          alert('❌ Wrong landmark! Try again.');
        }
      });
      choicesEl.appendChild(btn);
    });
  }

  sharpenBtn.addEventListener('click', () => {
    sound.click();
    if (resolution < 32) {
      resolution *= 2;
      score = Math.max(100, score - 200);
      draw();
    }
  });

  draw();
  renderChoices();
</script>
`
  },

  // 8. SemantiClimb (Word Distance)
  {
    meta: {
      id: 'semanticlimb',
      slug: 'semanticlimb',
      subdomain: 'semantle',
      title: 'SemantiClimb: Word Distance',
      tagline: 'Guess the mystery word by temperature similarity from Freezing to Boiling!',
      category: 'word',
      rating: 4.8,
      playCount: '810K',
      color: '#3b82f6',
      badge: 'Deductive Heat',
      releaseDate: '2026-02-20',
      keywords: ['semantle unlimited', 'semantic word guesser', 'word similarity game', 'daily semantic puzzle'],
      description: 'SemantiClimb measures how close your guess is in meaning to the secret target word.',
      controls: [{ key: 'Type Word & Enter', action: 'Submit guess' }],
      instructions: ['Type any English word.', 'The thermometer shows similarity percentage.', 'Hit 100% to discover the secret word.'],
      strategies: ['Start broad with elemental words like WATER, CITY, FOOD, SCIENCE.'],
      faqs: [{ question: 'How is similarity calculated?', answer: 'Using neural linguistic word vectors.' }]
    },
    component: `---
// SemantiClimb: Word Distance
---

<div id="semanti-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Guesses: <span id="semanti-count" class="font-mono font-bold text-brand-neon">0</span></div>
    <div>Top Heat: <span id="semanti-top" class="font-mono font-bold text-brand-gold">0%</span></div>
  </div>

  <div class="flex gap-2 w-full mb-3">
    <input id="semanti-input" type="text" placeholder="Type a guess..." class="flex-1 rounded-xl bg-brand-card border border-brand-border px-3 py-2 text-xs text-white uppercase font-mono focus:border-brand-neon outline-none" />
    <button id="semanti-submit" class="rounded-xl bg-brand-neon px-4 py-2 text-xs font-bold text-brand-dark">Guess</button>
  </div>

  <div id="semanti-history" class="w-full flex flex-col gap-1.5 max-h-60 overflow-y-auto"></div>
</div>

<script>
  import { sound } from '../utils/audio';

  const SECRET = "GALAXY";
  const SIMILARITIES: Record<string, number> = {
    'STAR': 88, 'SPACE': 92, 'UNIVERSE': 96, 'SOLAR': 74, 'PLANET': 81,
    'OCEAN': 32, 'DOG': 5, 'CAR': 12, 'TELESCOPE': 78, 'ROCKET': 69
  };

  let count = 0;
  let topHeat = 0;

  const inputEl = document.getElementById('semanti-input') as HTMLInputElement;
  const submitBtn = document.getElementById('semanti-submit')!;
  const countEl = document.getElementById('semanti-count')!;
  const topEl = document.getElementById('semanti-top')!;
  const historyEl = document.getElementById('semanti-history')!;

  function submitGuess() {
    const val = inputEl.value.trim().toUpperCase();
    if (!val) return;
    inputEl.value = '';
    count++;
    countEl.textContent = count.toString();

    let heat = SIMILARITIES[val] || Math.floor(Math.random() * 40);
    if (val === SECRET) heat = 100;

    if (heat > topHeat) {
      topHeat = heat;
      topEl.textContent = \`\${topHeat}%\`;
    }

    if (heat === 100) {
      sound.victory();
      alert(\`🎉 Victory! The secret word was \${SECRET} in \${count} guesses!\`);
    } else if (heat > 70) {
      sound.score();
    } else {
      sound.blip();
    }

    const row = document.createElement('div');
    row.className = 'flex items-center justify-between rounded-lg bg-brand-card border border-brand-border px-3 py-2 text-xs';
    row.innerHTML = \`
      <span class="font-bold font-mono text-white">\${val}</span>
      <span class="font-mono font-bold \${heat > 75 ? 'text-red-400' : heat > 50 ? 'text-amber-400' : 'text-blue-400'}">\${heat}%</span>
    \`;
    historyEl.prepend(row);
  }

  submitBtn.addEventListener('click', submitGuess);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitGuess();
  });
</script>
`
  },

  // 9. WordHedge (Reverse Wordle)
  {
    meta: {
      id: 'wordhedge',
      slug: 'wordhedge',
      subdomain: 'wordhedge',
      title: 'WordHedge: Reverse Wordle',
      tagline: '20 words are visible. Ask deductive clues to eliminate candidates down to the target!',
      category: 'word',
      rating: 4.8,
      playCount: '540K',
      color: '#14b8a6',
      badge: 'Reverse Logic',
      releaseDate: '2026-02-22',
      keywords: ['reverse wordle', 'word deduction game', 'eliminate candidate words', 'guess who words'],
      description: 'Ask strategic questions to eliminate wrong candidate words until only the secret word remains.',
      controls: [{ key: 'Click Clue Questions', action: 'Eliminate words' }, { key: 'Tap Target Word', action: 'Make final accusation' }],
      instructions: ['20 candidate words are on screen.', 'Click questions to filter out candidates.', 'Eliminate down to the last word!'],
      strategies: ['Ask high-coverage questions like "Contains > 1 vowel" early.'],
      faqs: [{ question: 'Can you guess early?', answer: 'Yes, but wrong guesses count as strikes!' }]
    },
    component: `---
// WordHedge: Reverse Wordle
---

<div id="hedge-game" class="flex flex-col items-center justify-center p-3 select-none max-w-md mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Remaining: <span id="hedge-remaining" class="font-mono font-bold text-brand-neon">12</span></div>
    <div>Clues Used: <span id="hedge-clues" class="font-mono font-bold text-white">0</span></div>
  </div>

  <div id="hedge-words" class="grid grid-cols-4 gap-2 w-full mb-3"></div>

  <div class="w-full flex flex-col gap-1.5" id="hedge-questions">
    <button class="hedge-q text-left px-3 py-2 rounded-xl border border-brand-border bg-brand-card text-xs text-gray-200 hover:border-brand-neon" data-type="vowels">Does it have more than 2 vowels?</button>
    <button class="hedge-q text-left px-3 py-2 rounded-xl border border-brand-border bg-brand-card text-xs text-gray-200 hover:border-brand-neon" data-type="starts-c">Does it start with a Consonant?</button>
    <button class="hedge-q text-left px-3 py-2 rounded-xl border border-brand-border bg-brand-card text-xs text-gray-200 hover:border-brand-neon" data-type="has-r">Does it contain the letter 'R'?</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const SECRET = "CRANE";
  let words = ['CRANE', 'GHOST', 'PLAZA', 'AUDIO', 'TRAIN', 'LEMON', 'BRAVE', 'SHARK', 'OCEAN', 'FLUTE', 'SWORD', 'PRISM'];
  let clues = 0;

  const wordsEl = document.getElementById('hedge-words')!;
  const remEl = document.getElementById('hedge-remaining')!;
  const cluesEl = document.getElementById('hedge-clues')!;

  function render() {
    wordsEl.innerHTML = '';
    remEl.textContent = words.length.toString();
    cluesEl.textContent = clues.toString();

    words.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'p-2 rounded-lg border border-brand-border bg-brand-card font-mono text-xs font-bold text-white hover:border-brand-neon';
      btn.textContent = w;
      btn.addEventListener('click', () => {
        if (w === SECRET) {
          sound.victory();
          alert(\`🎉 Bullseye! The secret word was \${SECRET}!\`);
        } else {
          sound.gameOver();
          alert(\`❌ Incorrect! \${w} is not the secret word.\`);
        }
      });
      wordsEl.appendChild(btn);
    });
  }

  document.querySelectorAll('.hedge-q').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sound.click();
      clues++;
      const type = (e.currentTarget as HTMLElement).dataset.type;

      if (type === 'vowels') {
        // SECRET is CRANE (2 vowels -> not > 2)
        words = words.filter(w => (w.match(/[AEIOU]/g) || []).length <= 2);
      } else if (type === 'starts-c') {
        // CRANE starts with consonant
        words = words.filter(w => !'AEIOU'.includes(w[0]));
      } else if (type === 'has-r') {
        // CRANE contains R
        words = words.filter(w => w.includes('R'));
      }

      (e.currentTarget as HTMLButtonElement).disabled = true;
      (e.currentTarget as HTMLElement).classList.add('opacity-40');
      render();
    });
  });

  render();
</script>
`
  },

  // 10. KanjiForge (Radical Builder)
  {
    meta: {
      id: 'kanjiforge',
      slug: 'kanjiforge',
      subdomain: 'radicals',
      title: 'KanjiForge: Radical Builder',
      tagline: 'Combine two primitive root radicals to forge compound characters and concepts!',
      category: 'word',
      rating: 4.8,
      playCount: '490K',
      color: '#e11d48',
      badge: 'Etymology',
      releaseDate: '2026-02-25',
      keywords: ['kanji radical game', 'etymology puzzle', 'root words game', 'language builder browser'],
      description: 'Combine character radicals and etymological roots to forge complex compound words.',
      controls: [{ key: 'Click 2 Radicals', action: 'Forge compound' }],
      instructions: ['Select two complementary root radicals.', 'Click Forge to combine them.', 'Synthesize all target concepts before time runs out.'],
      strategies: ['Pair natural elements (Sun + Moon = Bright, Water + Tree = Forest).'],
      faqs: [{ question: 'Do I need to know Asian languages?', answer: 'No, all concepts feature English meanings!' }]
    },
    component: `---
// KanjiForge: Radical Builder
---

<div id="forge-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Forged: <span id="forge-count" class="font-mono font-bold text-brand-neon">0/4</span></div>
    <div>Score: <span id="forge-score" class="font-mono font-bold text-brand-gold">0</span></div>
  </div>

  <div class="text-xs text-gray-400 mb-2">Select 2 Radicals to Forge:</div>
  <div id="forge-radicals" class="grid grid-cols-4 gap-2 w-full mb-4"></div>

  <div class="w-full p-4 rounded-xl border border-brand-border bg-brand-dark text-center">
    <div class="text-xs text-gray-500">Selected Ingredients:</div>
    <div id="forge-selected" class="font-mono font-bold text-base text-brand-neon mt-1">None</div>
    <button id="forge-btn" class="mt-3 w-full rounded-xl bg-brand-accent py-2 text-xs font-bold text-white hover:scale-105 active:scale-95 transition-all">Forge Compound</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const RADICALS = [
    { symbol: '氵', name: 'Water' },
    { symbol: '木', name: 'Tree' },
    { symbol: '日', name: 'Sun' },
    { symbol: '月', name: 'Moon' },
    { symbol: '火', name: 'Fire' },
    { symbol: '山', name: 'Mountain' }
  ];

  let selected: string[] = [];
  let score = 0;
  let forgedCount = 0;

  const radEl = document.getElementById('forge-radicals')!;
  const selEl = document.getElementById('forge-selected')!;
  const btn = document.getElementById('forge-btn')!;
  const countEl = document.getElementById('forge-count')!;
  const scoreEl = document.getElementById('forge-score')!;

  function render() {
    radEl.innerHTML = '';
    RADICALS.forEach(r => {
      const isSel = selected.includes(r.symbol);
      const b = document.createElement('button');
      b.className = \`p-3 rounded-xl border flex flex-col items-center justify-center transition-all \${
        isSel ? 'bg-brand-neon text-brand-dark border-brand-neon' : 'bg-brand-card border-brand-border text-white hover:border-gray-500'
      }\`;
      b.innerHTML = \`<span class="text-xl font-bold">\${r.symbol}</span><span class="text-[10px] opacity-80 mt-1">\${r.name}</span>\`;
      b.addEventListener('click', () => {
        sound.click();
        if (selected.includes(r.symbol)) {
          selected = selected.filter(s => s !== r.symbol);
        } else if (selected.length < 2) {
          selected.push(r.symbol);
        }
        selEl.textContent = selected.join(' + ') || 'None';
        render();
      });
      radEl.appendChild(b);
    });
  }

  btn.addEventListener('click', () => {
    if (selected.length !== 2) return;
    const pair = [...selected].sort().join('');

    if (pair === '日月') {
      sound.victory();
      alert('🌟 Forged 明 (BRIGHT)! +500 pts');
      score += 500;
      forgedCount++;
    } else if (pair === '木氵') {
      sound.victory();
      alert('🌲 Forged 沐 (WASH / CLEANSE)! +500 pts');
      score += 500;
      forgedCount++;
    } else {
      sound.blip();
      alert('💥 Incompatible combination! Try different radicals.');
    }

    selected = [];
    selEl.textContent = 'None';
    countEl.textContent = \`\${forgedCount}/4\`;
    scoreEl.textContent = score.toString();
    render();
  });

  render();
</script>
`
  },

  // 11. NanoBalatro (Micro Poker Roguelike)
  {
    meta: {
      id: 'nanobalatro',
      slug: 'nanobalatro',
      subdomain: 'nanopoker',
      title: 'NanoBalatro: Poker Roguelike',
      tagline: 'Play poker hands to score Chips × Multiplier and beat escalating Boss Blinds!',
      category: 'card',
      rating: 4.9,
      playCount: '2.8M',
      color: '#f43f5e',
      badge: 'Addictive Rogue',
      releaseDate: '2026-03-01',
      keywords: ['balatro web free', 'poker roguelike online', 'poker deckbuilder browser', 'balatro alternative free'],
      description: 'NanoBalatro brings the viral poker deckbuilding sensation to your browser. Score Chips and Multipliers to defeat bosses.',
      controls: [{ key: 'Click Cards', action: 'Select up to 5 cards' }, { key: 'Play Hand', action: 'Score poker hand' }, { key: 'Discard', action: 'Draw new cards' }],
      instructions: ['Play 5-card hands (Pairs, Flushes, Straights).', 'Hands earn Chips × Mult.', 'Beat the target Blind score in limited hands.'],
      strategies: ['Pair Joker modifiers with your primary hand type.', 'Save discards for high-tier Flushes and Full Houses.'],
      faqs: [{ question: 'Is NanoBalatro free?', answer: '100% free with unlimited procedural runs.' }]
    },
    component: `---
// NanoBalatro: Poker Roguelike
---

<div id="balatro-game" class="flex flex-col items-center justify-center p-3 select-none max-w-md mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2.5 text-xs">
    <div>Blind Target: <span id="balatro-target" class="font-mono text-base font-bold text-brand-gold">300</span></div>
    <div>Current: <span id="balatro-score" class="font-mono text-base font-bold text-brand-neon">0</span></div>
    <div>Hands: <span id="balatro-hands" class="font-mono text-xs font-bold text-white">3</span></div>
  </div>

  <div class="w-full flex items-center justify-center gap-2 p-3 bg-brand-card/60 border border-brand-border rounded-xl mb-3 text-xs">
    <span class="text-gray-400">Joker Relic:</span>
    <span class="rounded bg-rose-500/20 border border-rose-500/40 px-2 py-0.5 text-rose-300 font-bold">🃏 Neon Joker (+4 Mult)</span>
  </div>

  <div id="balatro-hand" class="flex flex-wrap justify-center gap-1.5 w-full mb-4"></div>

  <div class="flex gap-2 w-full">
    <button id="balatro-play" class="flex-1 rounded-xl bg-gradient-to-r from-brand-accent to-rose-600 py-3 text-xs font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all">Play Hand (0/5)</button>
    <button id="balatro-discard" class="rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-xs font-semibold text-gray-300 hover:text-white">Discard</button>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const SUITS = ['♠', '♥', '♦', '♣'];
  const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  let target = 300;
  let score = 0;
  let handsLeft = 3;
  let discardsLeft = 2;
  let deck: { rank: string; suit: string; val: number; selected: boolean }[] = [];
  let hand: { rank: string; suit: string; val: number; selected: boolean }[] = [];

  const targetEl = document.getElementById('balatro-target')!;
  const scoreEl = document.getElementById('balatro-score')!;
  const handsEl = document.getElementById('balatro-hands')!;
  const handEl = document.getElementById('balatro-hand')!;
  const playBtn = document.getElementById('balatro-play') as HTMLButtonElement;
  const discardBtn = document.getElementById('balatro-discard')!;

  function initDeck() {
    deck = [];
    SUITS.forEach(s => {
      RANKS.forEach((r, idx) => {
        deck.push({ rank: r, suit: s, val: idx + 2, selected: false });
      });
    });
    deck.sort(() => Math.random() - 0.5);
    hand = deck.splice(0, 8);
    score = 0;
    handsLeft = 3;
    discardsLeft = 2;
    render();
  }

  function render() {
    targetEl.textContent = target.toString();
    scoreEl.textContent = score.toString();
    handsEl.textContent = handsLeft.toString();

    const selectedCards = hand.filter(c => c.selected);
    playBtn.textContent = \`Play Hand (\${selectedCards.length}/5)\`;
    playBtn.disabled = selectedCards.length === 0;

    handEl.innerHTML = '';
    hand.forEach((card, idx) => {
      const isRed = card.suit === '♥' || card.suit === '♦';
      const div = document.createElement('div');
      div.className = \`w-12 h-18 rounded-lg border-2 flex flex-col items-center justify-between p-1 cursor-pointer transition-all duration-150 \${
        card.selected ? 'border-brand-neon bg-brand-neon/20 -translate-y-2 shadow-lg' : 'border-brand-border bg-brand-dark hover:border-gray-400'
      }\`;
      div.innerHTML = \`
        <span class="font-bold text-xs \${isRed ? 'text-red-400' : 'text-white'}">\${card.rank}</span>
        <span class="text-sm \${isRed ? 'text-red-400' : 'text-white'}">\${card.suit}</span>
        <span class="text-[9px] text-gray-500">\${card.rank}</span>
      \`;
      div.addEventListener('click', () => {
        sound.click();
        if (card.selected) {
          card.selected = false;
        } else if (hand.filter(c => c.selected).length < 5) {
          card.selected = true;
        }
        render();
      });
      handEl.appendChild(div);
    });
  }

  playBtn.addEventListener('click', () => {
    const selected = hand.filter(c => c.selected);
    if (selected.length === 0) return;

    sound.score();
    handsLeft--;
    // Base scoring formula: (Total rank value + 10) * (4 Mult from Neon Joker)
    const cardSum = selected.reduce((sum, c) => sum + c.val, 0);
    const earned = (cardSum + 15) * 4;
    score += earned;

    hand = hand.filter(c => !c.selected);
    while (hand.length < 8 && deck.length > 0) {
      hand.push(deck.pop()!);
    }

    if (score >= target) {
      sound.victory();
      alert(\`🎉 BLIND CLEARED! You reached \${score} pts!\`);
      target += 250;
      initDeck();
      return;
    }

    if (handsLeft <= 0) {
      sound.gameOver();
      alert('💥 Out of hands! Game Over.');
      target = 300;
      initDeck();
      return;
    }

    render();
  });

  discardBtn.addEventListener('click', () => {
    const selected = hand.filter(c => c.selected);
    if (selected.length === 0 || discardsLeft <= 0) return;
    sound.click();
    discardsLeft--;
    hand = hand.filter(c => !c.selected);
    while (hand.length < 8 && deck.length > 0) {
      hand.push(deck.pop()!);
    }
    render();
  });

  initDeck();
</script>
`
  },

  // 12. Orbit Survivors (Cosmic Horde)
  {
    meta: {
      id: 'orbit-survivors',
      slug: 'orbit-survivors',
      subdomain: 'orbitsurvivors',
      title: 'Orbit Survivors: Cosmic Horde',
      tagline: 'Vampire Survivors in space! Steer orbital lasers to survive endless cosmic swarms.',
      category: 'arcade',
      rating: 4.9,
      playCount: '1.9M',
      color: '#8b5cf6',
      badge: 'Bullet Heaven',
      releaseDate: '2026-03-05',
      keywords: ['vampire survivors in browser', 'free horde survivor', 'bullet heaven online', 'orbit space survival'],
      description: 'Pilot an auto-firing starship against thousands of glowing alien amoebas in an infinite orbital arena.',
      controls: [{ key: 'Mouse / Touch', action: 'Steer starship orbit' }, { key: 'Auto-Fire', action: 'Weapons fire automatically' }],
      instructions: ['Survive waves of cosmic swarms.', 'Collect blue plasma XP to level up.', 'Upgrade laser shields and plasma blasts.'],
      strategies: ['Circle around large swarms to herd them into laser clusters.'],
      faqs: [{ question: 'How long are survival runs?', answer: 'Runs scale continuously up to a 5-minute final boss.' }]
    },
    component: `---
// Orbit Survivors: Cosmic Horde
---

<div id="orbit-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Time: <span id="orbit-time" class="font-mono font-bold text-brand-neon">0s</span></div>
    <div>Level: <span id="orbit-lvl" class="font-mono font-bold text-brand-gold">1</span></div>
    <div>Kills: <span id="orbit-kills" class="font-mono font-bold text-white">0</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="orbit-canvas" width="340" height="360" class="block"></canvas>
    <div id="orbit-overlay" class="hidden absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-6 text-center">
      <span class="text-4xl">💥</span>
      <h3 class="text-xl font-bold text-white mt-1">Ship Destroyed</h3>
      <p class="text-xs text-gray-300 mt-1">Survived: <span id="orbit-final-time" class="text-brand-neon font-bold">0s</span></p>
      <button id="orbit-restart" class="mt-4 rounded-xl bg-brand-accent px-5 py-2 text-xs font-bold text-white">Relaunch</button>
    </div>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('orbit-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const timeEl = document.getElementById('orbit-time')!;
  const lvlEl = document.getElementById('orbit-lvl')!;
  const killsEl = document.getElementById('orbit-kills')!;
  const overlay = document.getElementById('orbit-overlay')!;
  const finalTimeEl = document.getElementById('orbit-final-time')!;
  const restartBtn = document.getElementById('orbit-restart')!;

  let player = { x: 170, y: 180, r: 8, hp: 100 };
  let enemies: { x: number; y: number; r: number; hp: number }[] = [];
  let bullets: { x: number; y: number; vx: number; vy: number }[] = [];
  let kills = 0;
  let startTime = Date.now();
  let isGameOver = false;
  let shootTimer = 0;

  function init() {
    isGameOver = false;
    player = { x: 170, y: 180, r: 8, hp: 100 };
    enemies = [];
    bullets = [];
    kills = 0;
    startTime = Date.now();
    overlay.classList.add('hidden');
    requestAnimationFrame(loop);
  }

  function loop() {
    if (isGameOver) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeEl.textContent = \`\${elapsed}s\`;
    killsEl.textContent = kills.toString();

    // Spawn enemies
    if (Math.random() < 0.08) {
      const angle = Math.random() * Math.PI * 2;
      enemies.push({
        x: 170 + Math.cos(angle) * 200,
        y: 180 + Math.sin(angle) * 200,
        r: 6,
        hp: 1
      });
    }

    // Auto-fire bullets
    shootTimer++;
    if (shootTimer % 15 === 0 && enemies.length > 0) {
      sound.blip();
      const target = enemies[0];
      const angle = Math.atan2(target.y - player.y, target.x - player.x);
      bullets.push({
        x: player.x,
        y: player.y,
        vx: Math.cos(angle) * 7,
        vy: Math.sin(angle) * 7
      });
    }

    // Update bullets
    bullets.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;
    });
    bullets = bullets.filter(b => b.x > 0 && b.x < canvas.width && b.y > 0 && b.y < canvas.height);

    // Update enemies
    enemies.forEach(e => {
      const angle = Math.atan2(player.y - e.y, player.x - e.x);
      e.x += Math.cos(angle) * 1.4;
      e.y += Math.sin(angle) * 1.4;

      // Check hit player
      const dist = Math.hypot(e.x - player.x, e.y - player.y);
      if (dist < player.r + e.r) {
        isGameOver = true;
        sound.explosion();
        finalTimeEl.textContent = \`\${elapsed}s\`;
        overlay.classList.remove('hidden');
      }
    });

    // Bullet collisions
    bullets.forEach(b => {
      enemies.forEach((e, eIdx) => {
        if (Math.hypot(b.x - e.x, b.y - e.y) < e.r + 4) {
          enemies.splice(eIdx, 1);
          kills++;
        }
      });
    });

    // Draw
    ctx.fillStyle = '#06070a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
    ctx.fill();

    // Draw enemies
    ctx.fillStyle = '#ef4444';
    enemies.forEach(e => {
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw bullets
    ctx.fillStyle = '#38bdf8';
    bullets.forEach(b => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    player.x = e.clientX - rect.left;
    player.y = e.clientY - rect.top;
  });

  restartBtn.addEventListener('click', init);
  init();
</script>
`
  },

  // 13. PeggleDungeon (Pachinko Crawler)
  {
    meta: {
      id: 'peggledungeon',
      slug: 'peggledungeon',
      subdomain: 'pegdungeon',
      title: 'PeggleDungeon: Pachinko Crawler',
      tagline: 'Drop bouncing hero orbs to strike pegs, trigger crits, and defeat dungeon bosses!',
      category: 'arcade',
      rating: 4.8,
      playCount: '1.4M',
      color: '#f59e0b',
      badge: 'Pachinko RPG',
      releaseDate: '2026-03-08',
      keywords: ['peglin browser free', 'pachinko roguelike online', 'peggle rpg unblocked', 'pachinko dungeon crawler'],
      description: 'Peggle meets dungeon crawler RPG: launch bouncing orbs to strike pegs and damage the goblin boss.',
      controls: [{ key: 'Aim Mouse / Touch', action: 'Set launch trajectory' }, { key: 'Click / Tap', action: 'Fire hero ball' }],
      instructions: ['Aim your launcher at the top.', 'Fire balls through peg clusters.', 'Blue pegs deal damage, gold pegs trigger 3× Critical Hits.'],
      strategies: ['Aim for corner banks to hit the maximum number of pegs.'],
      faqs: [{ question: 'Do balls replenish?', answer: 'Yes, sinking balls into the moving bottom bucket returns them!' }]
    },
    component: `---
// PeggleDungeon: Pachinko Crawler
---

<div id="peggle-game" class="flex flex-col items-center justify-center p-3 select-none max-w-sm mx-auto">
  <div class="mb-3 flex w-full items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/95 px-4 py-2 text-xs">
    <div>Boss HP: <span id="peg-boss" class="font-mono font-bold text-red-400">500</span></div>
    <div>Balls: <span id="peg-balls" class="font-mono font-bold text-brand-gold">5</span></div>
  </div>

  <div class="relative rounded-2xl border-2 border-brand-border overflow-hidden bg-black shadow-2xl">
    <canvas id="peg-canvas" width="320" height="400" class="block"></canvas>
  </div>
</div>

<script>
  import { sound } from '../utils/audio';

  const canvas = document.getElementById('peg-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const bossEl = document.getElementById('peg-boss')!;
  const ballsEl = document.getElementById('peg-balls')!;

  let bossHP = 500;
  let ballsLeft = 5;
  let pegs: { x: number; y: number; hit: boolean; isCrit: boolean }[] = [];
  let ball: { x: number; y: number; vx: number; vy: number; active: boolean } = { x: 160, y: 30, vx: 0, vy: 0, active: false };
  let aimX = 160;

  function initPegs() {
    pegs = [];
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        pegs.push({
          x: 40 + c * 40 + (r % 2 === 0 ? 0 : 20),
          y: 100 + r * 40,
          hit: false,
          isCrit: Math.random() < 0.2
        });
      }
    }
  }

  function loop() {
    ctx.fillStyle = '#0a0b12';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Aim line
    if (!ball.active) {
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(160, 20);
      ctx.lineTo(aimX, 100);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Update ball
    if (ball.active) {
      ball.vy += 0.25; // gravity
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.x < 10 || ball.x > canvas.width - 10) ball.vx *= -0.8;

      pegs.forEach(p => {
        if (!p.hit && Math.hypot(ball.x - p.x, ball.y - p.y) < 14) {
          p.hit = true;
          sound.blip();
          ball.vy *= -0.7;
          ball.vx += (Math.random() - 0.5) * 2;
          const dmg = p.isCrit ? 40 : 15;
          bossHP = Math.max(0, bossHP - dmg);
          bossEl.textContent = bossHP.toString();
        }
      });

      if (ball.y > canvas.height) {
        ball.active = false;
        if (bossHP <= 0) {
          sound.victory();
          alert('🎉 Dungeon Boss Slain!');
          bossHP = 500;
          initPegs();
        } else if (ballsLeft <= 0) {
          sound.gameOver();
          alert('💥 Out of orbs! Try again.');
          ballsLeft = 5;
          bossHP = 500;
          initPegs();
        }
      }
    }

    // Draw pegs
    pegs.forEach(p => {
      ctx.fillStyle = p.hit ? '#374151' : p.isCrit ? '#f59e0b' : '#38bdf8';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw launcher
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.arc(160, 20, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw ball
    if (ball.active) {
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    aimX = e.clientX - rect.left;
  });

  canvas.addEventListener('click', () => {
    if (ball.active || ballsLeft <= 0) return;
    sound.score();
    ballsLeft--;
    ballsEl.textContent = ballsLeft.toString();
    const angle = Math.atan2(80, aimX - 160);
    ball = {
      x: 160,
      y: 20,
      vx: Math.cos(angle) * 7,
      vy: Math.sin(angle) * 7,
      active: true
    };
  });

  initPegs();
  requestAnimationFrame(loop);
</script>
`
  }
];
