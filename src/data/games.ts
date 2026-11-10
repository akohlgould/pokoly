export interface GameMeta {
  id: string;
  slug: string;
  subdomain: string;
  title: string;
  tagline: string;
  category: 'word' | 'puzzle' | 'arcade' | 'card' | 'physics';
  rating: number;
  playCount: string;
  description: string;
  keywords: string[];
  controls: { key: string; action: string }[];
  instructions: string[];
  strategies: string[];
  faqs: { question: string; answer: string }[];
  color: string;
  badge?: string;
  releaseDate: string;
}

export const GAMES: GameMeta[] = [
  {
    id: 'word-guess',
    slug: 'word-guess',
    subdomain: 'wordle',
    title: 'Word Guess: Unlimited Wordle',
    tagline: 'Guess the secret 5-letter word in 6 attempts. Play daily or unlimited!',
    category: 'word',
    rating: 4.9,
    playCount: '2.4M',
    color: '#10b981',
    badge: 'Trending Daily',
    releaseDate: '2026-01-15',
    keywords: [
      'wordle unlimited',
      'word guess online',
      'play wordle free',
      'word puzzle no limit',
      'unblocked wordle',
      '5 letter word game'
    ],
    description: 'Word Guess is the ultimate free 5-letter word puzzle game. Guess the mystery word in six tries with interactive color-coded feedback. Play the daily challenge or switch to unlimited practice mode anytime.',
    controls: [
      { key: 'A-Z', action: 'Input letters into the current row' },
      { key: 'Enter', action: 'Submit your 5-letter guess' },
      { key: 'Backspace', action: 'Delete the previous letter' },
      { key: 'On-Screen Keyboard', action: 'Click or tap keys on mobile and touchscreens' }
    ],
    instructions: [
      'Each guess must be a valid 5-letter word.',
      'Green tile: The letter is in the correct position.',
      'Yellow tile: The letter is in the word, but in a different spot.',
      'Gray tile: The letter is not in the word at all.',
      'Solve the puzzle within 6 tries to keep your streak alive!'
    ],
    strategies: [
      'Start with a vowel-heavy opener like ADIEU, CRANE, or AUDIO to immediately test common letters.',
      'Never reuse known gray letters in your subsequent guesses.',
      'Think about common English consonant pairings such as CH, SH, TH, ST, and PR.'
    ],
    faqs: [
      {
        question: 'Is Word Guess completely free to play?',
        answer: 'Yes! Word Guess is 100% free with zero downloads, no account registration required, and unlimited free rounds.'
      },
      {
        question: 'Can I play Word Guess on mobile phones and tablets?',
        answer: 'Absolutely. Word Guess is fully responsive with an integrated touch keyboard optimized for iOS Safari, Android Chrome, and all modern mobile browsers.'
      },
      {
        question: 'What is the difference between Daily and Unlimited mode?',
        answer: 'Daily mode presents the same secret word to everyone globally every 24 hours. Unlimited mode lets you generate endless fresh words back-to-back.'
      }
    ]
  },
  {
    id: 'fruit-merge',
    slug: 'fruit-merge',
    subdomain: 'suika',
    title: 'Cosmic Fruit Merge: Suika Drop',
    tagline: 'Drop and merge celestial fruits into the Giant Watermelon! Real 2D physics.',
    category: 'physics',
    rating: 4.9,
    playCount: '4.1M',
    color: '#f59e0b',
    badge: 'Viral Sensation',
    releaseDate: '2026-02-01',
    keywords: [
      'suika game online',
      'watermelon drop game',
      'fruit merge physics',
      'suika unblocked',
      'merge fruits free online',
      'casual drop puzzle'
    ],
    description: 'Experience the addictive Japanese Watermelon Game (Suika) in your browser! Drop cherries, strawberries, oranges, and melons into the box. Watch them roll, bounce, and fuse into larger fruits until you craft the mythical Watermelon.',
    controls: [
      { key: 'Mouse Move / Touch Drag', action: 'Position the drop pointer left and right' },
      { key: 'Left Click / Touch Release', action: 'Drop the current fruit into the container' },
      { key: 'Spacebar', action: 'Quick drop fruit' }
    ],
    instructions: [
      'Two identical fruits that collide will fuse together into the next larger fruit.',
      'Earn points for every successful merger; larger fruits award exponentially more score.',
      'Avoid letting fruits spill over the dashed red line at the top of the container.',
      'Chain multiple merges in one drop for massive combo multipliers!'
    ],
    strategies: [
      'Keep your largest fruits on one side (usually bottom corner) so smaller fruits can cascade down into them.',
      'Avoid trapping tiny fruits (like blueberries or cherries) beneath giant fruits like pineapples.',
      'Use natural bounces: when a fruit drops, it will gently displace neighboring fruits to create chain reactions.'
    ],
    faqs: [
      {
        question: 'What is the maximum fruit size in Cosmic Fruit Merge?',
        answer: 'The ultimate stage is the Golden Watermelon! Merging two watermelons clears them from the board and grants a huge 1,000-point bonus.'
      },
      {
        question: 'Does the game run at 60 FPS on low-power laptops?',
        answer: 'Yes, our custom lightweight 2D Verlet physics engine runs smoothly on phones, Chromebooks, and low-spec laptops with minimal battery consumption.'
      }
    ]
  },
  {
    id: 'neon-2048',
    slug: 'neon-2048',
    subdomain: '2048',
    title: '2048 Neon: Cyber Number Puzzle',
    tagline: 'Slide tiles and merge numbers to reach the legendary 2048 tile and beyond!',
    category: 'puzzle',
    rating: 4.8,
    playCount: '3.8M',
    color: '#8b5cf6',
    badge: 'All-Time Classic',
    releaseDate: '2026-01-20',
    keywords: [
      '2048 online',
      'play 2048 unblocked',
      '2048 game free',
      'reach 2048 tile',
      'number slide puzzle'
    ],
    description: 'The beloved math puzzle game with a cyber neon overhaul. Slide number tiles on a 4x4 grid. When two tiles with the same number touch, they merge into one with double the value. Can you create 2048?',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Slide tiles Up, Down, Left, or Right' },
      { key: 'Touch Swipe', action: 'Swipe in any direction on mobile/touch screens' },
      { key: 'R Key', action: 'Restart current board' }
    ],
    instructions: [
      'Every move shifts all tiles across the grid in your chosen direction.',
      'After every move, a new 2 or 4 tile spawns in a random empty space.',
      'Combine 2s to make 4, 4s to make 8, and so on until 1024 + 1024 = 2048!',
      'The game ends when no legal moves remain and the board is completely locked.'
    ],
    strategies: [
      'The Corner Strategy: Always keep your highest value tile locked in one corner (e.g. bottom-right).',
      'Never press the opposite direction of your anchor corner (e.g. never press UP if your anchor is in the bottom row).',
      'Keep tiles sorted in descending order along your primary edge.'
    ],
    faqs: [
      {
        question: 'Can I keep playing after reaching 2048?',
        answer: 'Yes! You can continue playing in Endless Mode to reach 4096, 8192, and see how high your score can climb.'
      },
      {
        question: 'Is my high score automatically saved?',
        answer: 'Yes, your best score is stored directly in your browser storage so it is waiting for you whenever you return.'
      }
    ]
  },
  {
    id: 'solitaire',
    slug: 'solitaire',
    subdomain: 'solitaire',
    title: 'Klondike Solitaire Classic',
    tagline: 'The timeless single-player card game. Clean, distraction-free, and 100% free.',
    category: 'card',
    rating: 4.9,
    playCount: '5.2M',
    color: '#ef4444',
    badge: 'Most Popular',
    releaseDate: '2026-01-10',
    keywords: [
      'solitaire online free',
      'klondike solitaire',
      'solitaire no ads full screen',
      'classic card games',
      'solitaire unblocked'
    ],
    description: 'Play pure Klondike Solitaire without annoying interruptions or forced app downloads. Build up the four foundations from Ace to King by suit, while stacking tableau columns in descending order with alternating red and black colors.',
    controls: [
      { key: 'Mouse Click / Tap', action: 'Auto-move valid card to foundation or tableau' },
      { key: 'Drag & Drop', action: 'Move single cards or ordered sequences between piles' },
      { key: 'Stock Pile Click', action: 'Draw next card from stockpile' },
      { key: 'U Key', action: 'Undo last move' }
    ],
    instructions: [
      'Move Aces to the four top Foundation slots as soon as they become available.',
      'Build Tableau columns downwards in alternating colors (e.g. Black 8 on Red 9).',
      'Only Kings (or stacks starting with a King) can be placed in empty Tableau columns.',
      'Win the game by transferring all 52 cards onto the four Foundation piles.'
    ],
    strategies: [
      'Always uncover facedown tableau cards before drawing from the stockpile.',
      'Do not empty a tableau column unless you have a King ready to fill it.',
      'Keep foundation builds relatively balanced so you do not strand useful low cards.'
    ],
    faqs: [
      {
        question: 'Is every Solitaire deal winnable?',
        answer: 'Not every random deal is solvable, but over 80% of standard Klondike deals are mathematically winnable with optimal play.'
      },
      {
        question: 'Does this game include an Undo function?',
        answer: 'Yes, unlimited instant undo is supported so you can test alternate branches and learn winning strategies.'
      }
    ]
  },
  {
    id: 'cyber-snake',
    slug: 'cyber-snake',
    subdomain: 'snake',
    title: 'Cyber Snake: Neon Arcade',
    tagline: 'Smooth 60FPS retro snake with cyber synthwave visuals and particle combos.',
    category: 'arcade',
    rating: 4.7,
    playCount: '1.9M',
    color: '#06b6d4',
    badge: 'Fast Paced',
    releaseDate: '2026-02-10',
    keywords: [
      'snake game online',
      'google snake alternative',
      'retro snake unblocked',
      'cyber snake neon',
      'arcade snake free'
    ],
    description: 'A lightning-fast modern take on the iconic 90s Nokia Snake game. Glide smoothly through a neon grid, consume energy pellets, grow your cyber snake tail, and avoid crashing into your own trail or perimeter barriers.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Steer the snake in 4 directions' },
      { key: 'Touch On-Screen Pad / Swipe', action: 'Mobile directional steering' },
      { key: 'Spacebar', action: 'Pause / Resume game' }
    ],
    instructions: [
      'Eat glowing energy pellets to gain score and extend the snake length.',
      'Crashing into walls or running into your own tail causes an immediate Game Over.',
      'Speed increases gradually as your score climbs, demanding razor-sharp reflexes.'
    ],
    strategies: [
      'Navigate in a zigzag or perimeter loop when the snake gets exceptionally long.',
      'Never trap your head in an enclosed pocket with no exit route.',
      'Use the edges of the grid to safely wind back and forth.'
    ],
    faqs: [
      {
        question: 'Can I play Cyber Snake with a gamepad or controller?',
        answer: 'Yes! Standard USB/Bluetooth controllers are mapped automatically to the D-Pad and analog stick.'
      }
    ]
  },
  {
    id: 'minesweeper',
    slug: 'minesweeper',
    subdomain: 'minesweeper',
    title: 'Minesweeper Modern: Logic Sweeper',
    tagline: 'Clean, smart, deduction-based puzzle. First click is always guaranteed safe!',
    category: 'puzzle',
    rating: 4.8,
    playCount: '2.1M',
    color: '#3b82f6',
    badge: 'Pure Logic',
    releaseDate: '2026-01-28',
    keywords: [
      'minesweeper online',
      'play minesweeper free',
      'minesweeper unblocked',
      'minesweeper first click safe',
      'classic windows minesweeper'
    ],
    description: 'The definitive browser edition of the classic Windows logic game. Uncover tiles, deduce mine locations using numerical proximity clues, flag dangers, and clear the entire minefield without detonating a single bomb.',
    controls: [
      { key: 'Left Click / Tap', action: 'Reveal tile' },
      { key: 'Right Click / Long Press', action: 'Place or remove warning flag' },
      { key: 'Double Click / Space', action: 'Chord-reveal all neighbors if flags match number' }
    ],
    instructions: [
      'Numbers indicate how many explosive mines touch that specific square (1 to 8).',
      'Uncovering a 0 automatically cascades and reveals all adjacent safe tiles.',
      'Place flags on suspected mines to avoid accidental clicks.',
      'Clear all safe squares on the board to win.'
    ],
    strategies: [
      'Master the basic 1-1 and 1-2 patterns along wall boundaries.',
      'Your very first click is guaranteed to never be a mine and opens up an expansive safe clearing.',
      'When forced to guess between two 50/50 tiles, pick the one that reveals more information for neighboring cells.'
    ],
    faqs: [
      {
        question: 'Are there multiple difficulty levels available?',
        answer: 'Yes! Play Beginner (9x9 with 10 mines), Intermediate (16x16 with 40 mines), or Expert (30x16 with 99 mines).'
      }
    ]
  },
  {
    id: 'breakout',
    slug: 'breakout',
    subdomain: 'breakout',
    title: 'Neon Brick Breaker',
    tagline: 'Smash through glowing brick fortresses with multiball and laser powerups!',
    category: 'arcade',
    rating: 4.8,
    playCount: '1.6M',
    color: '#ec4899',
    badge: 'Arcade Action',
    releaseDate: '2026-02-18',
    keywords: [
      'brick breaker online',
      'atari breakout unblocked',
      'block smash game',
      'neon brick breaker free',
      'arcade breakout'
    ],
    description: 'An electrifying homage to Breakout and Arkanoid. Control your paddle, angle your ball bounces, shatter reinforced neon blocks, and grab falling power-up capsules like Wide Paddle, Multi-Ball, and Slow Ball.',
    controls: [
      { key: 'Mouse Move / Touch Drag', action: 'Move paddle horizontally across screen' },
      { key: 'Left / Right Arrow Keys', action: 'Keyboard paddle movement' },
      { key: 'Spacebar / Click', action: 'Launch initial ball or fire laser' }
    ],
    instructions: [
      'Keep the ball bouncing off your paddle to prevent it from dropping into the void.',
      'Different brick colors require 1, 2, or 3 hits to shatter.',
      'Catch falling capsules to activate game-changing powerups.',
      'Clear all destroyable bricks to advance to the next level.'
    ],
    strategies: [
      'Hit the ball with the outer edges of the paddle to achieve sharp, high-speed bounce angles.',
      'Try to bounce the ball over the top of the brick layer to let it ricochet repeatedly behind enemy lines.'
    ],
    faqs: [
      {
        question: 'How many levels are included in Neon Brick Breaker?',
        answer: 'The game features 10 escalating procedural levels with unique block patterns and brick hardness.'
      }
    ]
  },
  {
    id: 'speed-typing',
    slug: 'speed-typing',
    subdomain: 'typing',
    title: 'Speed Typing Rush',
    tagline: 'Test your words-per-minute (WPM) speed in a fast cyber typing sprint!',
    category: 'arcade',
    rating: 4.9,
    playCount: '1.8M',
    color: '#06b6d4',
    badge: 'School Favorite',
    releaseDate: '2026-02-25',
    keywords: [
      'speed typing test',
      'typing speed game',
      'wpm test online free',
      'typing game unblocked',
      'fast typing race'
    ],
    description: 'Race against the clock to type words with maximum accuracy and velocity. Track your real-time WPM, test your keyboard dexterity, and climb the speed leaderboards.',
    controls: [
      { key: 'A-Z / Space', action: 'Type matching highlighted words and press Space to advance' },
      { key: 'Backspace', action: 'Correct misspelled characters' },
      { key: 'Tab + Enter', action: 'Quick restart test' }
    ],
    instructions: [
      'Type the highlighted stream of words as fast and accurately as possible.',
      'Each correct word boosts your real-time WPM speed counter.',
      'Complete the 60-second test to receive your verified Words Per Minute and Accuracy rating.'
    ],
    strategies: [
      'Focus on rhythm and 100% accuracy first; raw speed naturally accelerates as typing errors decrease.',
      'Keep your eyes focused 1-2 words ahead of your current keystroke.'
    ],
    faqs: [
      {
        question: 'What is an average WPM score in Speed Typing Rush?',
        answer: 'Average typing speed is around 40-50 WPM. Professional typists achieve 80-100+ WPM.'
      }
    ]
  },
  {
    id: 'sudoku',
    slug: 'sudoku',
    subdomain: 'sudoku',
    title: 'Sudoku Modern: Daily Logic',
    tagline: 'Clean, distraction-free 9x9 Sudoku puzzles with smart notes and hint assistance.',
    category: 'puzzle',
    rating: 4.9,
    playCount: '3.1M',
    color: '#8b5cf6',
    badge: 'Daily Brain Test',
    releaseDate: '2026-02-20',
    keywords: [
      'sudoku online free',
      'play sudoku unblocked',
      'daily sudoku easy hard',
      'sudoku no ads clean',
      '9x9 logic puzzle'
    ],
    description: 'Experience pure numerical deduction with our sleek Sudoku engine. Fill the 9x9 grid so each row, column, and 3x3 block contains every digit from 1 to 9 without repeating.',
    controls: [
      { key: '1-9 Keys / Number Pad', action: 'Input digit into selected cell' },
      { key: 'Arrow Keys / Click', action: 'Navigate grid cells' },
      { key: 'Backspace / Delete', action: 'Clear cell contents' },
      { key: 'N Key / Pencil Toggle', action: 'Toggle pencil note-taking mode' }
    ],
    instructions: [
      'Every row must contain digits 1 through 9 with no duplicates.',
      'Every column must contain digits 1 through 9 with no duplicates.',
      'Every 3x3 nonet block must contain digits 1 through 9 with no duplicates.'
    ],
    strategies: [
      'Look for rows, columns, or 3x3 boxes that already have 6 or 7 digits filled in.',
      'Use pencil notes to record candidate numbers for ambiguous squares.'
    ],
    faqs: [
      {
        question: 'Are Sudoku puzzles randomly generated or verified?',
        answer: 'Every puzzle is mathematically verified to have a unique valid solution.'
      }
    ]
  },
  {
    id: 'flappy-cyber',
    slug: 'flappy-cyber',
    subdomain: 'flappy',
    title: 'Flappy Cyber: Neon Wings',
    tagline: 'Tap to flap through neon energy pillars in this high-intensity reflex challenge!',
    category: 'arcade',
    rating: 4.7,
    playCount: '2.5M',
    color: '#10b981',
    badge: 'High Replay',
    releaseDate: '2026-03-01',
    keywords: [
      'flappy bird unblocked',
      'play flappy bird online',
      'flappy bird free no download',
      'cyber flappy neon',
      'one button game'
    ],
    description: 'The iconic one-tap reflex sensation reimagined with glowing cyberpunk visuals. Guide your cyber jet through narrow gaps between electrified neon barriers.',
    controls: [
      { key: 'Spacebar / Click / Tap', action: 'Flap wings to gain elevation' },
      { key: 'P Key', action: 'Pause / Resume' }
    ],
    instructions: [
      'Tap or press Space to ascend; gravity will continuously pull you downwards.',
      'Pass between the upper and lower energy pillars to score 1 point.',
      'Colliding with barriers or the ground causes an instant crash.'
    ],
    strategies: [
      'Establish a steady rhythm of short, light taps rather than waiting until the last second.',
      'Aim for the center-lower half of each gate to leave room for the flap ascent.'
    ],
    faqs: [
      {
        question: 'Is Flappy Cyber playable on touchscreens?',
        answer: 'Yes! Tap anywhere on mobile screens to flap with zero input lag.'
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Games', icon: '🎮', description: 'Explore our complete library of free online browser games' },
  { id: 'word', name: 'Word Puzzles', icon: '📝', description: 'Brain-teasing vocabulary, daily challenges, and word deduction games' },
  { id: 'physics', name: 'Physics & Drop', icon: '🍉', description: 'Addictive merging, gravity drops, and bouncing simulation puzzles' },
  { id: 'puzzle', name: 'Logic Puzzles', icon: '🧩', description: 'Math, spatial reasoning, and deduction games that sharpen your mind' },
  { id: 'card', name: 'Card & Solitaire', icon: '🃏', description: 'Timeless single-player card classics, Klondike, and patience games' },
  { id: 'arcade', name: 'Arcade & Reflex', icon: '⚡', description: 'High-octane retro reflex tests, speed challenges, and modern arcade classics' },
];
