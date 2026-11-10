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
    "id": "pegdungeon",
    "slug": "pegdungeon",
    "subdomain": "pegdungeon",
    "title": "PegDungeon: Pachinko Crawler",
    "tagline": "Drop bouncing hero orbs to strike pegs, trigger crits, and defeat dungeon bosses!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.4M",
    "color": "#f59e0b",
    "badge": "Pachinko RPG",
    "releaseDate": "2026-03-08",
    "keywords": [
      "pachinko roguelike online",
      "pachinko dungeon crawler",
      "bouncing orb rpg",
      "peg drop game"
    ],
    "description": "Pachinko meets dungeon crawler RPG: launch bouncing hero orbs to strike pegs and damage the goblin boss.",
    "controls": [
      {
        "key": "Aim Mouse / Touch",
        "action": "Set launch trajectory"
      },
      {
        "key": "Click / Tap",
        "action": "Fire hero ball"
      }
    ],
    "instructions": [
      "Aim your launcher at the top.",
      "Fire balls through peg clusters.",
      "Blue pegs deal damage, gold pegs trigger 3× Critical Hits."
    ],
    "strategies": [
      "Aim for corner banks to hit the maximum number of pegs."
    ],
    "faqs": [
      {
        "question": "Do balls replenish?",
        "answer": "Yes, sinking balls into the moving bottom bucket returns them!"
      }
    ]
  },
  {
    "id": "orbit-survivors",
    "slug": "orbit-survivors",
    "subdomain": "orbitsurvivors",
    "title": "Orbit Survivors: Cosmic Horde",
    "tagline": "Bullet heaven in space! Steer orbital lasers to survive endless cosmic swarms.",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "1.9M",
    "color": "#8b5cf6",
    "badge": "Bullet Heaven",
    "releaseDate": "2026-03-05",
    "keywords": [
      "bullet heaven browser",
      "free horde survivor",
      "bullet heaven online",
      "orbit space survival"
    ],
    "description": "Pilot an auto-firing starship against thousands of glowing alien amoebas in an infinite orbital arena.",
    "controls": [
      {
        "key": "Mouse / Touch",
        "action": "Steer starship orbit"
      },
      {
        "key": "Auto-Fire",
        "action": "Weapons fire automatically"
      }
    ],
    "instructions": [
      "Survive waves of cosmic swarms.",
      "Collect blue plasma XP to level up.",
      "Upgrade laser shields and plasma blasts."
    ],
    "strategies": [
      "Circle around large swarms to herd them into laser clusters."
    ],
    "faqs": [
      {
        "question": "How long are survival runs?",
        "answer": "Runs scale continuously up to a 5-minute final boss."
      }
    ]
  },
  {
    "id": "nanojoker",
    "slug": "nanojoker",
    "subdomain": "nanopoker",
    "title": "NanoJoker: Poker Roguelike",
    "tagline": "Play poker hands to score Chips × Multiplier and beat escalating Boss Blinds!",
    "category": "card",
    "rating": 4.9,
    "playCount": "2.8M",
    "color": "#f43f5e",
    "badge": "Endless Fun",
    "releaseDate": "2026-03-01",
    "keywords": [
      "poker roguelike online",
      "poker deckbuilder browser",
      "card roguelike free",
      "joker poker game"
    ],
    "description": "NanoJoker brings tactical poker deckbuilding to your browser. Score Chips and Multipliers to defeat escalating Boss Blinds.",
    "controls": [
      {
        "key": "Click Cards",
        "action": "Select up to 5 cards"
      },
      {
        "key": "Play Hand",
        "action": "Score poker hand"
      },
      {
        "key": "Discard",
        "action": "Draw new cards"
      }
    ],
    "instructions": [
      "Play 5-card hands (Pairs, Flushes, Straights).",
      "Hands earn Chips × Mult.",
      "Beat the target Blind score in limited hands."
    ],
    "strategies": [
      "Pair Joker modifiers with your primary hand type.",
      "Save discards for high-tier Flushes and Full Houses."
    ],
    "faqs": [
      {
        "question": "Is NanoJoker free?",
        "answer": "100% free with unlimited procedural runs."
      }
    ]
  },
  {
    "id": "kanjiforge",
    "slug": "kanjiforge",
    "subdomain": "radicals",
    "title": "KanjiForge: Radical Builder",
    "tagline": "Combine two primitive root radicals to forge compound characters and concepts!",
    "category": "word",
    "rating": 4.8,
    "playCount": "490K",
    "color": "#e11d48",
    "badge": "Etymology",
    "releaseDate": "2026-02-25",
    "keywords": [
      "kanji radical game",
      "etymology puzzle",
      "root words game",
      "language builder browser"
    ],
    "description": "Combine character radicals and etymological roots to forge complex compound words.",
    "controls": [
      {
        "key": "Click 2 Radicals",
        "action": "Forge compound"
      }
    ],
    "instructions": [
      "Select two complementary root radicals.",
      "Click Forge to combine them.",
      "Synthesize all target concepts before time runs out."
    ],
    "strategies": [
      "Pair natural elements (Sun + Moon = Bright, Water + Tree = Forest)."
    ],
    "faqs": [
      {
        "question": "Do I need to know Asian languages?",
        "answer": "No, all concepts feature English meanings!"
      }
    ]
  },
  {
    "id": "wordhedge",
    "slug": "wordhedge",
    "subdomain": "wordhedge",
    "title": "WordHedge: Word Deduction",
    "tagline": "20 words are visible. Ask deductive clues to eliminate candidates down to the target!",
    "category": "word",
    "rating": 4.8,
    "playCount": "540K",
    "color": "#14b8a6",
    "badge": "Word Logic",
    "releaseDate": "2026-02-22",
    "keywords": [
      "word deduction game",
      "word elimination puzzle",
      "eliminate candidate words",
      "guess the secret word"
    ],
    "description": "Ask strategic questions to eliminate wrong candidate words until only the secret word remains.",
    "controls": [
      {
        "key": "Click Clue Questions",
        "action": "Eliminate words"
      },
      {
        "key": "Tap Target Word",
        "action": "Make final accusation"
      }
    ],
    "instructions": [
      "20 candidate words are on screen.",
      "Click questions to filter out candidates.",
      "Eliminate down to the last word!"
    ],
    "strategies": [
      "Ask high-coverage questions like \"Contains > 1 vowel\" early."
    ],
    "faqs": [
      {
        "question": "Can you guess early?",
        "answer": "Yes, but wrong guesses count as strikes!"
      }
    ]
  },
  {
    "id": "semanticlimb",
    "slug": "semanticlimb",
    "subdomain": "semantic",
    "title": "SemantiClimb: Word Distance",
    "tagline": "Guess the mystery word by temperature similarity from Freezing to Boiling!",
    "category": "word",
    "rating": 4.8,
    "playCount": "810K",
    "color": "#3b82f6",
    "badge": "Deductive Heat",
    "releaseDate": "2026-02-20",
    "keywords": [
      "semantic word guesser online",
      "semantic word guesser",
      "word similarity game",
      "daily semantic puzzle"
    ],
    "description": "SemantiClimb measures how close your guess is in meaning to the secret target word.",
    "controls": [
      {
        "key": "Type Word & Enter",
        "action": "Submit guess"
      }
    ],
    "instructions": [
      "Type any English word.",
      "The thermometer shows similarity percentage.",
      "Hit 100% to discover the secret word."
    ],
    "strategies": [
      "Start broad with elemental words like WATER, CITY, FOOD, SCIENCE."
    ],
    "faqs": [
      {
        "question": "How is similarity calculated?",
        "answer": "Using neural linguistic word vectors."
      }
    ]
  },
  {
    "id": "geopixel",
    "slug": "geopixel",
    "subdomain": "geopixel",
    "title": "GeoPixel: Blurry Landmark Quiz",
    "tagline": "Identify famous world landmarks as they sharpen from 4x4 pixel mosaic to HD!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "680K",
    "color": "#f97316",
    "badge": "Visual Quiz",
    "releaseDate": "2026-02-18",
    "keywords": [
      "geopixel game",
      "pixel landmark quiz",
      "blurry world quiz",
      "guess the landmark"
    ],
    "description": "World landmarks appear pixelated at low resolution. Guess the landmark in as few reveals as possible.",
    "controls": [
      {
        "key": "Click Choices",
        "action": "Select your landmark guess"
      },
      {
        "key": "Sharpen",
        "action": "Reveal higher resolution"
      }
    ],
    "instructions": [
      "Landmarks start at 4x4 pixel resolution.",
      "Each sharpen lowers your final score.",
      "Select the correct landmark from 4 choices."
    ],
    "strategies": [
      "Look for distinctive color palettes like terracotta, sky blue, or gold."
    ],
    "faqs": [
      {
        "question": "How many landmarks are included?",
        "answer": "Dozens of iconic world wonders and UNESCO sites."
      }
    ]
  },
  {
    "id": "numberdrop",
    "slug": "numberdrop",
    "subdomain": "numbers",
    "title": "NumberDrop: Arithmetic Target",
    "tagline": "Combine 6 numbers using basic arithmetic (+ - * /) to hit the exact target!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "910K",
    "color": "#eab308",
    "badge": "Math Challenge",
    "releaseDate": "2026-02-15",
    "keywords": [
      "numbers target puzzle",
      "arithmetic target puzzle",
      "math target online",
      "daily math target"
    ],
    "description": "The classic arithmetic numbers game: reach the exact target number using 6 provided integers.",
    "controls": [
      {
        "key": "Click Number / Operator",
        "action": "Build calculations"
      },
      {
        "key": "Undo",
        "action": "Revert last step"
      }
    ],
    "instructions": [
      "Use the 6 numbers and + - * / to hit the target.",
      "Each number tile can only be used once.",
      "Only integers are valid."
    ],
    "strategies": [
      "Work backward from the target factor.",
      "Multiply large numbers first, then fine-tune with small tiles."
    ],
    "faqs": [
      {
        "question": "Is every target guaranteed solvable?",
        "answer": "Yes, each round is procedurally verified."
      }
    ]
  },
  {
    "id": "cipherpunk",
    "slug": "cipherpunk",
    "subdomain": "cryptogram",
    "title": "CipherPunk: Daily Decryption",
    "tagline": "Crack encrypted cyberpunk terminal ciphers with live letter substitution!",
    "category": "word",
    "rating": 4.9,
    "playCount": "750K",
    "color": "#10b981",
    "badge": "Logic Hacker",
    "releaseDate": "2026-02-12",
    "keywords": [
      "daily cryptogram free",
      "solve substitution cipher",
      "quote cryptogram online",
      "cryptoquotes free"
    ],
    "description": "Decode monoalphabetic substitution ciphers in a retro hacker terminal interface.",
    "controls": [
      {
        "key": "Click Encrypted Letter",
        "action": "Select target symbol"
      },
      {
        "key": "Type Letter A-Z",
        "action": "Map substitution"
      }
    ],
    "instructions": [
      "Each letter represents a different letter in the alphabet.",
      "Click an encrypted letter and type your guess.",
      "Decode the entire phrase to win."
    ],
    "strategies": [
      "Single-letter words are almost always A or I.",
      "Look for common 3-letter words like THE, AND, FOR."
    ],
    "faqs": [
      {
        "question": "Are hints available?",
        "answer": "Yes, click the Hint button to reveal one letter!"
      }
    ]
  },
  {
    "id": "vowelshift",
    "slug": "vowelshift",
    "subdomain": "vowelshift",
    "title": "VowelShift: Anagram Slider",
    "tagline": "Slide rows and columns of letter tiles to align 4 secret intersecting words!",
    "category": "word",
    "rating": 4.8,
    "playCount": "620K",
    "color": "#8b5cf6",
    "badge": "Tactile Word",
    "releaseDate": "2026-02-10",
    "keywords": [
      "sliding word puzzle",
      "rotational word puzzle",
      "sliding anagrams",
      "daily word slider"
    ],
    "description": "VowelShift merges rotational grid mechanics with anagram crosswords. Shift rows and columns to align valid words.",
    "controls": [
      {
        "key": "Arrow Buttons",
        "action": "Shift rows and columns cyclically"
      },
      {
        "key": "Reset",
        "action": "Reset to puzzle start"
      }
    ],
    "instructions": [
      "4 rows and 4 columns form a grid.",
      "Tap arrow buttons to rotate rows left/right and columns up/down.",
      "Match target words to complete."
    ],
    "strategies": [
      "Fix one letter at a time using circular rotation.",
      "Keep an eye on vowel positions."
    ],
    "faqs": [
      {
        "question": "Are there multiple solutions?",
        "answer": "Yes, any valid word combination is accepted!"
      }
    ]
  },
  {
    "id": "chronotrail",
    "slug": "chronotrail",
    "subdomain": "timeline",
    "title": "ChronoTrail: Timeline Guess",
    "tagline": "Order 5 historical and pop culture events chronologically from oldest to newest!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "1.2M",
    "color": "#06b6d4",
    "badge": "Brain Viral",
    "releaseDate": "2026-02-08",
    "keywords": [
      "history timeline game",
      "order events chronologically",
      "timeline trivia browser",
      "chronology quiz"
    ],
    "description": "ChronoTrail tests your historical perspective. Drag and order 5 events to reveal their true years.",
    "controls": [
      {
        "key": "▲ / ▼",
        "action": "Move event up or down"
      },
      {
        "key": "Submit",
        "action": "Check chronological accuracy"
      }
    ],
    "instructions": [
      "5 historical events appear in random order.",
      "Use buttons to shift them from oldest (top) to newest (bottom).",
      "Submit to reveal their true years."
    ],
    "strategies": [
      "Anchor the oldest and newest events first.",
      "Use decade landmarks to slot items."
    ],
    "faqs": [
      {
        "question": "Are dates globally verified?",
        "answer": "Yes, based on official historical records."
      }
    ]
  },
  {
    "id": "lexifall",
    "slug": "lexifall",
    "subdomain": "lexifall",
    "title": "LexiFall: Falling Word Blocks",
    "tagline": "Falling letter blocks! Tap blocks to spell words before they hit the ceiling.",
    "category": "word",
    "rating": 4.8,
    "playCount": "890K",
    "color": "#ec4899",
    "badge": "Action Word",
    "releaseDate": "2026-02-05",
    "keywords": [
      "falling letter blocks",
      "falling letters game",
      "word cascade online",
      "word collapse browser"
    ],
    "description": "LexiFall combines falling block gravity with word spelling. Select letters from stacked blocks to pop them and prevent grid overflow.",
    "controls": [
      {
        "key": "Click Letters",
        "action": "Select letters to form a word"
      },
      {
        "key": "Submit / Enter",
        "action": "Pop the formed word"
      },
      {
        "key": "Clear / Esc",
        "action": "Deselect letters"
      }
    ],
    "instructions": [
      "Letter blocks drop into columns.",
      "Click adjacent or resting blocks to spell valid 3+ letter words.",
      "Pop words to clear space.",
      "Do not let blocks touch the top line!"
    ],
    "strategies": [
      "Look for common suffixes like -ED, -ER, -ING.",
      "Target the tallest columns to prevent game over."
    ],
    "faqs": [
      {
        "question": "What dictionary is used?",
        "answer": "Standard English 3- to 8-letter vocabulary."
      }
    ]
  },
  {
    "id": "synapse",
    "slug": "synapse",
    "subdomain": "connections",
    "title": "Synapse: Word Association",
    "tagline": "Group 16 words into 4 secret categories without making 4 mistakes!",
    "category": "word",
    "rating": 4.9,
    "playCount": "1.8M",
    "color": "#6366f1",
    "badge": "Daily Viral",
    "releaseDate": "2026-02-01",
    "keywords": [
      "connections game free",
      "unlimited connections",
      "word association puzzle",
      "group words daily",
      "daily word association challenge"
    ],
    "description": "Synapse is a fast-paced word association game where players must find the hidden threads linking four groups of four words.",
    "controls": [
      {
        "key": "Click / Tap",
        "action": "Select or deselect word tiles"
      },
      {
        "key": "Submit",
        "action": "Check your 4 selected words"
      },
      {
        "key": "Shuffle",
        "action": "Rearrange remaining tiles"
      }
    ],
    "instructions": [
      "Find 4 groups of 4 words that share a common link.",
      "Select 4 words and tap Submit.",
      "You have 4 mistakes before game over.",
      "Solved groups collapse into colored banners."
    ],
    "strategies": [
      "Beware of red herrings that could fit multiple categories.",
      "Identify unique or rare meanings first.",
      "Look for compound words and homophones."
    ],
    "faqs": [
      {
        "question": "Is Synapse free to play?",
        "answer": "Yes, Synapse is 100% free with unlimited replays and daily puzzles."
      }
    ]
  },
  {
    "id": "word-guess",
    "slug": "word-guess",
    "subdomain": "words",
    "title": "Word Guess: 5-Letter Daily & Unlimited",
    "tagline": "Guess the secret 5-letter word in 6 attempts. Play daily or unlimited!",
    "category": "word",
    "rating": 4.9,
    "playCount": "2.4M",
    "color": "#10b981",
    "badge": "Trending Daily",
    "releaseDate": "2026-01-15",
    "keywords": [
      "word guess online",
      "5 letter word game",
      "daily word guess free",
      "word puzzle no limit",
      "letter deduction game",
      "unblocked word guess"
    ],
    "description": "Word Guess is the ultimate free 5-letter word puzzle game. Guess the mystery word in six tries with interactive color-coded feedback. Play the daily challenge or switch to unlimited practice mode anytime.",
    "controls": [
      {
        "key": "A-Z",
        "action": "Input letters into the current row"
      },
      {
        "key": "Enter",
        "action": "Submit your 5-letter guess"
      },
      {
        "key": "Backspace",
        "action": "Delete the previous letter"
      },
      {
        "key": "On-Screen Keyboard",
        "action": "Click or tap keys on mobile and touchscreens"
      }
    ],
    "instructions": [
      "Each guess must be a valid 5-letter word.",
      "Green tile: The letter is in the correct position.",
      "Yellow tile: The letter is in the word, but in a different spot.",
      "Gray tile: The letter is not in the word at all.",
      "Solve the puzzle within 6 tries to keep your streak alive!"
    ],
    "strategies": [
      "Start with a vowel-heavy opener like ADIEU, CRANE, or AUDIO to immediately test common letters.",
      "Never reuse known gray letters in your subsequent guesses.",
      "Think about common English consonant pairings such as CH, SH, TH, ST, and PR."
    ],
    "faqs": [
      {
        "question": "Is Word Guess completely free to play?",
        "answer": "Yes! Word Guess is 100% free with zero downloads, no account registration required, and unlimited free rounds."
      },
      {
        "question": "Can I play Word Guess on mobile phones and tablets?",
        "answer": "Absolutely. Word Guess is fully responsive with an integrated touch keyboard optimized for iOS Safari, Android Chrome, and all modern mobile browsers."
      },
      {
        "question": "What is the difference between Daily and Unlimited mode?",
        "answer": "Daily mode presents the same secret word to everyone globally every 24 hours. Unlimited mode lets you generate endless fresh words back-to-back."
      }
    ]
  },
  {
    "id": "fruit-merge",
    "slug": "fruit-merge",
    "subdomain": "fruits",
    "title": "Cosmic Fruit Merge: Watermelon Drop",
    "tagline": "Drop and merge celestial fruits into the Giant Watermelon! Real 2D physics.",
    "category": "physics",
    "rating": 4.9,
    "playCount": "4.1M",
    "color": "#f59e0b",
    "badge": "Viral Sensation",
    "releaseDate": "2026-02-01",
    "keywords": [
      "watermelon drop game",
      "fruit merge physics",
      "giant watermelon puzzle",
      "merge fruits free online",
      "casual drop puzzle"
    ],
    "description": "Experience the beloved watermelon merging sensation in your browser! Drop cherries, strawberries, oranges, and melons into the box. Watch them roll, bounce, and fuse into larger fruits until you craft the mythical Watermelon.",
    "controls": [
      {
        "key": "Mouse Move / Touch Drag",
        "action": "Position the drop pointer left and right"
      },
      {
        "key": "Left Click / Touch Release",
        "action": "Drop the current fruit into the container"
      },
      {
        "key": "Spacebar",
        "action": "Quick drop fruit"
      }
    ],
    "instructions": [
      "Two identical fruits that collide will fuse together into the next larger fruit.",
      "Earn points for every successful merger; larger fruits award exponentially more score.",
      "Avoid letting fruits spill over the dashed red line at the top of the container.",
      "Chain multiple merges in one drop for massive combo multipliers!"
    ],
    "strategies": [
      "Keep your largest fruits on one side (usually bottom corner) so smaller fruits can cascade down into them.",
      "Avoid trapping tiny fruits (like blueberries or cherries) beneath giant fruits like pineapples.",
      "Use natural bounces: when a fruit drops, it will gently displace neighboring fruits to create chain reactions."
    ],
    "faqs": [
      {
        "question": "What is the maximum fruit size in Cosmic Fruit Merge?",
        "answer": "The ultimate stage is the Golden Watermelon! Merging two watermelons clears them from the board and grants a huge 1,000-point bonus."
      },
      {
        "question": "Does the game run at 60 FPS on low-power laptops?",
        "answer": "Yes, our custom lightweight 2D Verlet physics engine runs smoothly on phones, Chromebooks, and low-spec laptops with minimal battery consumption."
      }
    ]
  },
  {
    "id": "neon-2048",
    "slug": "neon-2048",
    "subdomain": "2048",
    "title": "2048 Neon: Cyber Number Puzzle",
    "tagline": "Slide tiles and merge numbers to reach the legendary 2048 tile and beyond!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "3.8M",
    "color": "#8b5cf6",
    "badge": "All-Time Classic",
    "releaseDate": "2026-01-20",
    "keywords": [
      "2048 online",
      "play 2048 unblocked",
      "2048 game free",
      "reach 2048 tile",
      "number slide puzzle"
    ],
    "description": "The beloved math puzzle game with a cyber neon overhaul. Slide number tiles on a 4x4 grid. When two tiles with the same number touch, they merge into one with double the value. Can you create 2048?",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Slide tiles Up, Down, Left, or Right"
      },
      {
        "key": "Touch Swipe",
        "action": "Swipe in any direction on mobile/touch screens"
      },
      {
        "key": "R Key",
        "action": "Restart current board"
      }
    ],
    "instructions": [
      "Every move shifts all tiles across the grid in your chosen direction.",
      "After every move, a new 2 or 4 tile spawns in a random empty space.",
      "Combine 2s to make 4, 4s to make 8, and so on until 1024 + 1024 = 2048!",
      "The game ends when no legal moves remain and the board is completely locked."
    ],
    "strategies": [
      "The Corner Strategy: Always keep your highest value tile locked in one corner (e.g. bottom-right).",
      "Never press the opposite direction of your anchor corner (e.g. never press UP if your anchor is in the bottom row).",
      "Keep tiles sorted in descending order along your primary edge."
    ],
    "faqs": [
      {
        "question": "Can I keep playing after reaching 2048?",
        "answer": "Yes! You can continue playing in Endless Mode to reach 4096, 8192, and see how high your score can climb."
      },
      {
        "question": "Is my high score automatically saved?",
        "answer": "Yes, your best score is stored directly in your browser storage so it is waiting for you whenever you return."
      }
    ]
  },
  {
    "id": "solitaire",
    "slug": "solitaire",
    "subdomain": "solitaire",
    "title": "Klondike Solitaire Classic",
    "tagline": "The timeless single-player card game. Clean, distraction-free, and 100% free.",
    "category": "card",
    "rating": 4.9,
    "playCount": "5.2M",
    "color": "#ef4444",
    "badge": "Most Popular",
    "releaseDate": "2026-01-10",
    "keywords": [
      "solitaire online free",
      "klondike solitaire",
      "solitaire no ads full screen",
      "classic card games",
      "solitaire unblocked"
    ],
    "description": "Play pure Klondike Solitaire without annoying interruptions or forced app downloads. Build up the four foundations from Ace to King by suit, while stacking tableau columns in descending order with alternating red and black colors.",
    "controls": [
      {
        "key": "Mouse Click / Tap",
        "action": "Auto-move valid card to foundation or tableau"
      },
      {
        "key": "Drag & Drop",
        "action": "Move single cards or ordered sequences between piles"
      },
      {
        "key": "Stock Pile Click",
        "action": "Draw next card from stockpile"
      },
      {
        "key": "U Key",
        "action": "Undo last move"
      }
    ],
    "instructions": [
      "Move Aces to the four top Foundation slots as soon as they become available.",
      "Build Tableau columns downwards in alternating colors (e.g. Black 8 on Red 9).",
      "Only Kings (or stacks starting with a King) can be placed in empty Tableau columns.",
      "Win the game by transferring all 52 cards onto the four Foundation piles."
    ],
    "strategies": [
      "Always uncover facedown tableau cards before drawing from the stockpile.",
      "Do not empty a tableau column unless you have a King ready to fill it.",
      "Keep foundation builds relatively balanced so you do not strand useful low cards."
    ],
    "faqs": [
      {
        "question": "Is every Solitaire deal winnable?",
        "answer": "Not every random deal is solvable, but over 80% of standard Klondike deals are mathematically winnable with optimal play."
      },
      {
        "question": "Does this game include an Undo function?",
        "answer": "Yes, unlimited instant undo is supported so you can test alternate branches and learn winning strategies."
      }
    ]
  },
  {
    "id": "cyber-snake",
    "slug": "cyber-snake",
    "subdomain": "snake",
    "title": "Cyber Snake: Neon Arcade",
    "tagline": "Smooth 60FPS retro snake with cyber synthwave visuals and particle combos.",
    "category": "arcade",
    "rating": 4.7,
    "playCount": "1.9M",
    "color": "#06b6d4",
    "badge": "Fast Paced",
    "releaseDate": "2026-02-10",
    "keywords": [
      "snake game online",
      "classic snake online",
      "retro snake unblocked",
      "cyber snake neon",
      "arcade snake free"
    ],
    "description": "A lightning-fast modern take on the iconic 90s retro Snake game. Glide smoothly through a neon grid, consume energy pellets, grow your cyber snake tail, and avoid crashing into your own trail or perimeter barriers.",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Steer the snake in 4 directions"
      },
      {
        "key": "Touch On-Screen Pad / Swipe",
        "action": "Mobile directional steering"
      },
      {
        "key": "Spacebar",
        "action": "Pause / Resume game"
      }
    ],
    "instructions": [
      "Eat glowing energy pellets to gain score and extend the snake length.",
      "Crashing into walls or running into your own tail causes an immediate Game Over.",
      "Speed increases gradually as your score climbs, demanding razor-sharp reflexes."
    ],
    "strategies": [
      "Navigate in a zigzag or perimeter loop when the snake gets exceptionally long.",
      "Never trap your head in an enclosed pocket with no exit route.",
      "Use the edges of the grid to safely wind back and forth."
    ],
    "faqs": [
      {
        "question": "Can I play Cyber Snake with a gamepad or controller?",
        "answer": "Yes! Standard USB/Bluetooth controllers are mapped automatically to the D-Pad and analog stick."
      }
    ]
  },
  {
    "id": "minesweeper",
    "slug": "minesweeper",
    "subdomain": "minesweeper",
    "title": "Minesweeper Modern: Logic Sweeper",
    "tagline": "Clean, smart, deduction-based puzzle. First click is always guaranteed safe!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "2.1M",
    "color": "#3b82f6",
    "badge": "Pure Logic",
    "releaseDate": "2026-01-28",
    "keywords": [
      "minesweeper online",
      "play minesweeper free",
      "minesweeper unblocked",
      "minesweeper first click safe",
      "classic windows minesweeper"
    ],
    "description": "The definitive browser edition of the classic Windows logic game. Uncover tiles, deduce mine locations using numerical proximity clues, flag dangers, and clear the entire minefield without detonating a single bomb.",
    "controls": [
      {
        "key": "Left Click / Tap",
        "action": "Reveal tile"
      },
      {
        "key": "Right Click / Long Press",
        "action": "Place or remove warning flag"
      },
      {
        "key": "Double Click / Space",
        "action": "Chord-reveal all neighbors if flags match number"
      }
    ],
    "instructions": [
      "Numbers indicate how many explosive mines touch that specific square (1 to 8).",
      "Uncovering a 0 automatically cascades and reveals all adjacent safe tiles.",
      "Place flags on suspected mines to avoid accidental clicks.",
      "Clear all safe squares on the board to win."
    ],
    "strategies": [
      "Master the basic 1-1 and 1-2 patterns along wall boundaries.",
      "Your very first click is guaranteed to never be a mine and opens up an expansive safe clearing.",
      "When forced to guess between two 50/50 tiles, pick the one that reveals more information for neighboring cells."
    ],
    "faqs": [
      {
        "question": "Are there multiple difficulty levels available?",
        "answer": "Yes! Play Beginner (9x9 with 10 mines), Intermediate (16x16 with 40 mines), or Expert (30x16 with 99 mines)."
      }
    ]
  },
  {
    "id": "breakout",
    "slug": "breakout",
    "subdomain": "breakout",
    "title": "Neon Brick Breaker",
    "tagline": "Smash through glowing brick fortresses with multiball and laser powerups!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.6M",
    "color": "#ec4899",
    "badge": "Arcade Action",
    "releaseDate": "2026-02-18",
    "keywords": [
      "brick breaker online",
      "block breaker unblocked",
      "block smash game",
      "neon brick breaker free",
      "arcade breakout"
    ],
    "description": "An electrifying homage to classic retro arcade block breakers. Control your paddle, angle your ball bounces, shatter reinforced neon blocks, and grab falling power-up capsules like Wide Paddle, Multi-Ball, and Slow Ball.",
    "controls": [
      {
        "key": "Mouse Move / Touch Drag",
        "action": "Move paddle horizontally across screen"
      },
      {
        "key": "Left / Right Arrow Keys",
        "action": "Keyboard paddle movement"
      },
      {
        "key": "Spacebar / Click",
        "action": "Launch initial ball or fire laser"
      }
    ],
    "instructions": [
      "Keep the ball bouncing off your paddle to prevent it from dropping into the void.",
      "Different brick colors require 1, 2, or 3 hits to shatter.",
      "Catch falling capsules to activate game-changing powerups.",
      "Clear all destroyable bricks to advance to the next level."
    ],
    "strategies": [
      "Hit the ball with the outer edges of the paddle to achieve sharp, high-speed bounce angles.",
      "Try to bounce the ball over the top of the brick layer to let it ricochet repeatedly behind enemy lines."
    ],
    "faqs": [
      {
        "question": "How many levels are included in Neon Brick Breaker?",
        "answer": "The game features 10 escalating procedural levels with unique block patterns and brick hardness."
      }
    ]
  },
  {
    "id": "speed-typing",
    "slug": "speed-typing",
    "subdomain": "typing",
    "title": "Speed Typing Rush",
    "tagline": "Test your words-per-minute (WPM) speed in a fast cyber typing sprint!",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "1.8M",
    "color": "#06b6d4",
    "badge": "School Favorite",
    "releaseDate": "2026-02-25",
    "keywords": [
      "speed typing test",
      "typing speed game",
      "wpm test online free",
      "typing game unblocked",
      "fast typing race"
    ],
    "description": "Race against the clock to type words with maximum accuracy and velocity. Track your real-time WPM, test your keyboard dexterity, and climb the speed leaderboards.",
    "controls": [
      {
        "key": "A-Z / Space",
        "action": "Type matching highlighted words and press Space to advance"
      },
      {
        "key": "Backspace",
        "action": "Correct misspelled characters"
      },
      {
        "key": "Tab + Enter",
        "action": "Quick restart test"
      }
    ],
    "instructions": [
      "Type the highlighted stream of words as fast and accurately as possible.",
      "Each correct word boosts your real-time WPM speed counter.",
      "Complete the 60-second test to receive your verified Words Per Minute and Accuracy rating."
    ],
    "strategies": [
      "Focus on rhythm and 100% accuracy first; raw speed naturally accelerates as typing errors decrease.",
      "Keep your eyes focused 1-2 words ahead of your current keystroke."
    ],
    "faqs": [
      {
        "question": "What is an average WPM score in Speed Typing Rush?",
        "answer": "Average typing speed is around 40-50 WPM. Professional typists achieve 80-100+ WPM."
      }
    ]
  },
  {
    "id": "sudoku",
    "slug": "sudoku",
    "subdomain": "sudoku",
    "title": "Sudoku Modern: Daily Logic",
    "tagline": "Clean, distraction-free 9x9 Sudoku puzzles with smart notes and hint assistance.",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "3.1M",
    "color": "#8b5cf6",
    "badge": "Daily Brain Test",
    "releaseDate": "2026-02-20",
    "keywords": [
      "sudoku online free",
      "play sudoku unblocked",
      "daily sudoku easy hard",
      "sudoku no ads clean",
      "9x9 logic puzzle"
    ],
    "description": "Experience pure numerical deduction with our sleek Sudoku engine. Fill the 9x9 grid so each row, column, and 3x3 block contains every digit from 1 to 9 without repeating.",
    "controls": [
      {
        "key": "1-9 Keys / Number Pad",
        "action": "Input digit into selected cell"
      },
      {
        "key": "Arrow Keys / Click",
        "action": "Navigate grid cells"
      },
      {
        "key": "Backspace / Delete",
        "action": "Clear cell contents"
      },
      {
        "key": "N Key / Pencil Toggle",
        "action": "Toggle pencil note-taking mode"
      }
    ],
    "instructions": [
      "Every row must contain digits 1 through 9 with no duplicates.",
      "Every column must contain digits 1 through 9 with no duplicates.",
      "Every 3x3 nonet block must contain digits 1 through 9 with no duplicates."
    ],
    "strategies": [
      "Look for rows, columns, or 3x3 boxes that already have 6 or 7 digits filled in.",
      "Use pencil notes to record candidate numbers for ambiguous squares."
    ],
    "faqs": [
      {
        "question": "Are Sudoku puzzles randomly generated or verified?",
        "answer": "Every puzzle is mathematically verified to have a unique valid solution."
      }
    ]
  },
  {
    "id": "flappy-cyber",
    "slug": "flappy-cyber",
    "subdomain": "flappy",
    "title": "Flappy Cyber: Neon Wings",
    "tagline": "Tap to flap through neon energy pillars in this high-intensity reflex challenge!",
    "category": "arcade",
    "rating": 4.7,
    "playCount": "2.5M",
    "color": "#10b981",
    "badge": "High Replay",
    "releaseDate": "2026-03-01",
    "keywords": [
      "tap to fly unblocked",
      "neon flap arcade",
      "tap flap online",
      "cyber flappy neon",
      "one button game"
    ],
    "description": "The iconic one-tap reflex sensation reimagined with glowing cyberpunk visuals. Guide your cyber jet through narrow gaps between electrified neon barriers.",
    "controls": [
      {
        "key": "Spacebar / Click / Tap",
        "action": "Flap wings to gain elevation"
      },
      {
        "key": "P Key",
        "action": "Pause / Resume"
      }
    ],
    "instructions": [
      "Tap or press Space to ascend; gravity will continuously pull you downwards.",
      "Pass between the upper and lower energy pillars to score 1 point.",
      "Colliding with barriers or the ground causes an instant crash."
    ],
    "strategies": [
      "Establish a steady rhythm of short, light taps rather than waiting until the last second.",
      "Aim for the center-lower half of each gate to leave room for the flap ascent."
    ],
    "faqs": [
      {
        "question": "Is Flappy Cyber playable on touchscreens?",
        "answer": "Yes! Tap anywhere on mobile screens to flap with zero input lag."
      }
    ]
  },
  {
    "id": "chronowave",
    "slug": "chronowave",
    "subdomain": "chronowave",
    "title": "ChronoWave: Sonar Resonance",
    "tagline": "Synthesize acoustic interference patterns to tune resonant mineral crystals!",
    "category": "physics",
    "rating": 4.9,
    "playCount": "480K",
    "color": "#06b6d4",
    "badge": "Acoustic Physics",
    "releaseDate": "2026-03-09",
    "keywords": [
      "acoustic resonance puzzle",
      "sound wave interference game",
      "frequency matching game",
      "sonar physics puzzle",
      "online physics sound game"
    ],
    "description": "Master the physics of harmonic wave interference. Emit pulses across Bass, Mid, and Treble frequencies, adjusting phase velocities to align wave crests with deep-sea resonant crystals.",
    "controls": [
      {
        "key": "Frequency Sliders",
        "action": "Tune Bass, Mid, and Treble pulse rates"
      },
      {
        "key": "Click / Tap Emitter",
        "action": "Transmit acoustic sonar pulse"
      },
      {
        "key": "Spacebar",
        "action": "Trigger harmonic pulse burst"
      }
    ],
    "instructions": [
      "Adjust frequency frequencies to control wave propagation and wavelength.",
      "Fire sound pulses to match the resonant natural frequency of target crystals.",
      "Achieve constructive interference to charge crystals before energy decays."
    ],
    "strategies": [
      "Notice the color of the target crystals to determine whether Bass (red), Mid (blue), or Treble (green) harmonic frequencies resonate best.",
      "Overlapping multiple pulses creates constructive interference amplitude spikes."
    ],
    "faqs": [
      {
        "question": "Does ChronoWave use real acoustic equations?",
        "answer": "Yes! Wave propagation simulates sinusoidal wave velocity, wavelength, and Doppler interference."
      }
    ]
  },
  {
    "id": "quantumweave",
    "slug": "quantumweave",
    "subdomain": "quantumweave",
    "title": "QuantumWeave: Spin Matrix",
    "tagline": "Route entangled laser beams through counter-rotating quantum mirrors to energize logic gates!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "620K",
    "color": "#ec4899",
    "badge": "Quantum Logic",
    "releaseDate": "2026-03-09",
    "keywords": [
      "quantum laser puzzle",
      "entangled optics game",
      "mirror laser routing game",
      "quantum logic puzzle",
      "laser beam reflection game"
    ],
    "description": "Enter the quantum optical substrate where paired mirrors share entangled spin states. Rotating one mirror causes its entangled partner to mirror its rotation in reverse polarity.",
    "controls": [
      {
        "key": "Click / Tap Mirror",
        "action": "Rotate quantum mirror (affects entangled pair)"
      },
      {
        "key": "R Key",
        "action": "Reset quantum coherence"
      }
    ],
    "instructions": [
      "Click mirrors to rotate their optical angle in 45-degree increments.",
      "Entangled mirrors rotate in reverse polarity when clicked.",
      "Route both alpha and beta laser beams simultaneously into quantum logic receivers."
    ],
    "strategies": [
      "Look for the glowing quantum entanglement links to see which mirrors are bound together.",
      "Plan moves in pairs so adjusting one mirror brings its partner into the desired alignment."
    ],
    "faqs": [
      {
        "question": "What happens if a laser beam hits a wall?",
        "answer": "The beam is absorbed. You must rotate mirrors so the laser reflects safely to its receiver."
      }
    ]
  },
  {
    "id": "gravityforge",
    "slug": "gravityforge",
    "subdomain": "gravityforge",
    "title": "GravityForge: Orbital Slingshot",
    "tagline": "Place gravitational singularities to slingshot stardust comets into accretion rings!",
    "category": "physics",
    "rating": 4.8,
    "playCount": "750K",
    "color": "#f59e0b",
    "badge": "Orbital Mechanics",
    "releaseDate": "2026-03-09",
    "keywords": [
      "orbital mechanics game",
      "gravity slingshot simulator",
      "n-body gravitational puzzle",
      "accretion disk comet game",
      "space physics game online"
    ],
    "description": "Harness gravitational attraction in an N-body celestial simulation. Place gravitational wells and adjust launch trajectories to curve comets around obstacles and feed the central protostar.",
    "controls": [
      {
        "key": "Click / Tap & Drag",
        "action": "Aim comet launch trajectory & speed"
      },
      {
        "key": "Place Gravity Well",
        "action": "Click canvas to drop gravitational singularity"
      },
      {
        "key": "Spacebar",
        "action": "Launch stardust comet"
      }
    ],
    "instructions": [
      "Position gravity wells to bend the trajectory of incoming comets.",
      "Launch comets through cosmic dust fields to gather mass.",
      "Sling comets safely into the central protostar accretion ring to complete the stage."
    ],
    "strategies": [
      "Use hyperbolic slingshot curves to bend comets around asteroid belts without colliding.",
      "Placing gravity wells closer to the launch path creates tighter gravitational curves."
    ],
    "faqs": [
      {
        "question": "Does the game use Newtonian inverse-square gravity?",
        "answer": "Yes! The comet physics simulates inverse-square gravitational force vectors from all bodies."
      }
    ]
  },
  {
    "id": "synthia",
    "slug": "synthia",
    "subdomain": "synthia",
    "title": "Synthia: Modular Wireframe",
    "tagline": "Patch virtual Eurorack synthesizer cables and sculpt sound waves to match cyber target frequencies!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "530K",
    "color": "#10b981",
    "badge": "Modular Synth",
    "releaseDate": "2026-03-09",
    "keywords": [
      "modular synth puzzle",
      "eurorack audio game",
      "patch cord synthesizer game",
      "oscilloscope audio puzzle",
      "web audio frequency matching"
    ],
    "description": "An interactive Eurorack modular synthesizer hacking puzzle. Connect VCO oscillators, VCF resonance filters, and LFO modulation cables with live Web Audio synthesis to match target sound waves.",
    "controls": [
      {
        "key": "Click & Drag Cable",
        "action": "Patch cable between input and output jacks"
      },
      {
        "key": "Knob Drag / Scroll",
        "action": "Adjust frequency, cutoff, and resonance knobs"
      },
      {
        "key": "Spacebar",
        "action": "Trigger audio test probe"
      }
    ],
    "instructions": [
      "Analyze the target audio waveform on the master oscilloscope.",
      "Route audio patch cords from sound generators (VCO) through filters (VCF) and amplifiers.",
      "Adjust cutoff and resonance knobs until your synthesized wave matches the target frequency."
    ],
    "strategies": [
      "Look at the oscilloscope curve: square waves create sharp buzzy edges, sine waves create smooth curves.",
      "Filter cutoff eliminates high harmonic frequencies to round off harsh peaks."
    ],
    "faqs": [
      {
        "question": "Do the synthesizers make actual sounds?",
        "answer": "Yes! Real-time sound synthesis is generated using the browser Web Audio API."
      }
    ]
  },
  {
    "id": "morphoflora",
    "slug": "morphoflora",
    "subdomain": "morphoflora",
    "title": "MorphoFlora: Hex Bio-Dome",
    "tagline": "Cross-pollinate genetic traits across hexagonal biomes to cleanse toxic spore blight!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "410K",
    "color": "#10b981",
    "badge": "Genetics Sim",
    "releaseDate": "2026-03-09",
    "keywords": [
      "hex grid cellular automata",
      "botanical genetics puzzle",
      "cross pollination game",
      "spore cleansing bio puzzle",
      "hexagonal plant puzzle online"
    ],
    "description": "Cultivate hybrid botanicals in a hexagonal cellular ecosystem. Breed complementary genetic alleles (Crimson, Azure, Amber) to cross-pollinate adjacent biomes and neutralize toxic spore blights.",
    "controls": [
      {
        "key": "Click / Tap Hex Tile",
        "action": "Plant seed or trigger cross-pollination"
      },
      {
        "key": "Number Keys 1-3",
        "action": "Select genetic flora strain"
      },
      {
        "key": "Spacebar",
        "action": "Trigger generational growth pulse"
      }
    ],
    "instructions": [
      "Select flower strains with desired genetic resistance traits.",
      "Plant flowers on fertile hex tiles surrounding toxic blight clusters.",
      "Cross-pollinated flowers breed dominant traits that radiate purifying bio-luminescence."
    ],
    "strategies": [
      "Surrounding a toxic tile with two opposing flower types triggers hybrid vigor that cleanses blight twice as fast.",
      "Prioritize bottleneck tiles to prevent fungal spore spread."
    ],
    "faqs": [
      {
        "question": "Is MorphoFlora a turn-based or real-time game?",
        "answer": "It is turn-based with generational cycles, giving you plenty of time to formulate breeding strategies."
      }
    ]
  },
  {
    "id": "prismpulse",
    "slug": "prismpulse",
    "subdomain": "prismpulse",
    "title": "PrismPulse: Optical Raytrace",
    "tagline": "Split white laser light with crystalline prisms and direct dual spectra into optical receptors!",
    "category": "physics",
    "rating": 4.9,
    "playCount": "890K",
    "color": "#38bdf8",
    "badge": "Optical Raytracer",
    "releaseDate": "2026-03-09",
    "keywords": [
      "optical prism puzzle",
      "light ray refraction game",
      "color spectrum laser game",
      "subtractive color optics game",
      "mirror prism raytracing game"
    ],
    "description": "An optical physics puzzle featuring light refraction and raytracing. Split incoming white laser beams into constituent red, green, and blue spectra, positioning mirrors and prisms to charge optical sensors.",
    "controls": [
      {
        "key": "Click & Drag Prisms",
        "action": "Move or rotate prisms and mirrors"
      },
      {
        "key": "R Key",
        "action": "Rotate selected optical component"
      },
      {
        "key": "Click Emitter",
        "action": "Fire laser beam"
      }
    ],
    "instructions": [
      "Position triangular glass prisms to refract white light into color spectra.",
      "Use angled mirrors to route split color beams around optical blockers.",
      "Match each colored beam to its corresponding color receptor to energize the matrix."
    ],
    "strategies": [
      "Remember Snell law of refraction: light bends towards the normal when entering glass, and away when exiting.",
      "Prisms split light at different angles depending on wavelength (red bends least, violet bends most)."
    ],
    "faqs": [
      {
        "question": "Can beams cross each other?",
        "answer": "Yes! Light beams pass straight through each other without interference, just like real photons."
      }
    ]
  },
  {
    "id": "clockworkheist",
    "slug": "clockworkheist",
    "subdomain": "clockworkheist",
    "title": "Clockwork Heist: Ghost Protocol",
    "tagline": "Rewind time and cooperate with past timeline ghosts to breach vault lasers and secure the core!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "710K",
    "color": "#f59e0b",
    "badge": "Chrono Co-op",
    "releaseDate": "2026-03-09",
    "keywords": [
      "time rewind puzzle game",
      "single player co-op ghost game",
      "temporal infiltration stealth",
      "past self co-op puzzle",
      "timeline recording heist game"
    ],
    "description": "A mind-bending single-player co-op stealth infiltration game. Record timelines, rewind the clock, and play alongside the real-time ghosts of your past runs to hold switches and bypass laser security.",
    "controls": [
      {
        "key": "WASD / Arrow Keys",
        "action": "Move infiltrator operative"
      },
      {
        "key": "Click / Tap & Drag",
        "action": "Direct touch movement"
      },
      {
        "key": "R Key / Rewind Button",
        "action": "Commit run & spawn past ghost"
      }
    ],
    "instructions": [
      "In Loop 1, move to a security switch and hold it down before time expires.",
      "Hit Rewind to record your ghost. In Loop 2, your past ghost will execute the same path!",
      "Sprint through the lowered laser gate while your past ghost holds the switch, grab the core, and extract!"
    ],
    "strategies": [
      "Stand still on switches for 4-5 seconds during early loops to give subsequent operatives ample time to pass.",
      "Coordinate extraction so the operative carrying the core reaches the green landing zone safely."
    ],
    "faqs": [
      {
        "question": "How many ghost loops can you create?",
        "answer": "Each vault allows up to 3 synchronized timeline loops to solve the heist."
      }
    ]
  },
  {
    "id": "geothermal",
    "slug": "geothermal",
    "subdomain": "geothermal",
    "title": "GeoThermal: Subterranean Matrix",
    "tagline": "Rotate magma conduit valves, inject coolants, and power clean steam turbines before thermal meltdown!",
    "category": "physics",
    "rating": 4.8,
    "playCount": "580K",
    "color": "#f97316",
    "badge": "Thermodynamics",
    "releaseDate": "2026-03-09",
    "keywords": [
      "geothermal pipe puzzle",
      "fluid heat pressure simulation",
      "magma conduit game",
      "steam turbine clean energy game",
      "thermodynamic grid puzzle"
    ],
    "description": "Harness geothermal energy from deep subterranean magma veins. Rotate pressurized valve conduits, manage thermodynamic expansion, and inject coolant charges to generate clean megawatt power without triggering a volcanic blowout.",
    "controls": [
      {
        "key": "Click / Tap Conduit Nodes",
        "action": "Rotate pipe junction 90 degrees"
      },
      {
        "key": "Coolant Button / C Key",
        "action": "Inject emergency cryo-coolant charge"
      },
      {
        "key": "Spacebar",
        "action": "Toggle high-pressure steam venting"
      }
    ],
    "instructions": [
      "Rotate pipe nodes to form uninterrupted flow from magma sources to right-side turbines.",
      "Avoid dead ends that create extreme pressure build-up and core wear.",
      "Produce target Megawatt output while keeping core stability above 0%."
    ],
    "strategies": [
      "Distribute flow evenly across multiple turbines to prevent a single conduit from overheating.",
      "Save your emergency coolant charges for sudden pressure spikes."
    ],
    "faqs": [
      {
        "question": "What causes core stability to drop?",
        "answer": "Pipes with heat exceeding 90% build up friction and wear down the subterranean containment grid."
      }
    ]
  },
  {
    "id": "neurolink",
    "slug": "neurolink",
    "subdomain": "neurolink",
    "title": "NeuroLink: Synaptic Router",
    "tagline": "Route high-speed action potentials across axonal switch junctions to matching receptor terminals!",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "820K",
    "color": "#6366f1",
    "badge": "Neuro-Reflex",
    "releaseDate": "2026-03-09",
    "keywords": [
      "synaptic switch reflex game",
      "neurotransmitter routing game",
      "action potential puzzle",
      "brain lobe circuit game",
      "fast-paced track switcher online"
    ],
    "description": "An electrifying neuro-reflex arcade challenge. As action potentials of Acetylcholine (cyan), Serotonin (pink), and Dopamine (gold) surge down myelin axons, flip synaptic switches to route each pulse to its designated cortex terminal.",
    "controls": [
      {
        "key": "Click / Tap Junctions",
        "action": "Toggle axonal switch branch"
      },
      {
        "key": "Number Keys 1-4",
        "action": "Directly toggle corresponding junction switch"
      },
      {
        "key": "Spacebar",
        "action": "Hyper-speed pulse surge"
      }
    ],
    "instructions": [
      "Observe incoming action potential colors surging from the left cortex.",
      "Click or tap junction nodes to direct impulses along upper or lower axon pathways.",
      "Match neurotransmitters to the correct receptor terminals (Motor, Limbic, Prefrontal) to build combos."
    ],
    "strategies": [
      "Keep track of the second stage switches early so you only need to make quick final-second adjustments.",
      "Consecutive successful deliveries multiply your score combo exponentially."
    ],
    "faqs": [
      {
        "question": "What happens if a neurotransmitter hits the wrong terminal?",
        "answer": "A mismatch triggers excitotoxicity and drops your synapse integrity by 20%."
      }
    ]
  },
  {
    "id": "tectonicdrift",
    "slug": "tectonicdrift",
    "subdomain": "tectonicdrift",
    "title": "Tectonic Drift: Pangaea Reforged",
    "tagline": "Slide continental plates across oceanic mantle currents to match fossil strata and fuse Pangaea!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "490K",
    "color": "#059669",
    "badge": "Plate Tectonics",
    "releaseDate": "2026-03-09",
    "keywords": [
      "plate tectonics puzzle",
      "continental drift jigsaw game",
      "pangaea fossil matching game",
      "geology continental reconstruction",
      "earth lithosphere puzzle"
    ],
    "description": "Reconstruct Earth supercontinent in this geological plate-sliding puzzle. Drift continental cratons across magma convection currents, matching prehistoric fossil strata (Ferns, Ammonites, Trilobites) along coastlines to fuse Pangaea.",
    "controls": [
      {
        "key": "Click & Drag Plates",
        "action": "Slide continental cratons across oceanic mantle"
      },
      {
        "key": "Snap into Pangaea Zone",
        "action": "Release plate near matching geological slot"
      },
      {
        "key": "R Key",
        "action": "Reset mantle convection"
      }
    ],
    "instructions": [
      "Inspect the perimeter borders of each continental craton for fossil markers.",
      "Drag plates into position on the central Pangaea grid.",
      "Matching adjacent fossils locks plates together, building mountain ridges and advancing eras."
    ],
    "strategies": [
      "Start with the corner cratons (Laurentia and Siberia) which have fewer shared borders.",
      "Track your remaining seismic shifts to avoid running out of mantle convection energy."
    ],
    "faqs": [
      {
        "question": "Are the fossil biomes based on real paleontology?",
        "answer": "Yes! Glossopteris ferns and ammonite distributions were real historical evidence for continental drift."
      }
    ]
  },
  {
    "id": "cymatica",
    "slug": "cymatica",
    "subdomain": "cymatica",
    "title": "Cymatica: Harmonic Waveform Architect",
    "tagline": "Sculpt standing acoustic wavefields to shepherd quantum sand along zero-vibration Chladni nodal mandalas!",
    "category": "physics",
    "rating": 4.9,
    "playCount": "580K",
    "color": "#06b6d4",
    "badge": "Cymatics Physics",
    "releaseDate": "2026-03-10",
    "keywords": [
      "cymatics browser game",
      "chladni plate online simulation",
      "acoustic radiation force game",
      "standing wave physics puzzle",
      "harmonic frequency audio game"
    ],
    "description": "A breakthrough physics-audio puzzle game based on genuine Chladni acoustic resonance. Manipulate vibrational frequency nodes and wave phases on a 2D membrane. Watch real-time interference patterns push luminous quantum dust into sacred geometric mandalas and unlock harmonic cores with celestial synthesizer chords.",
    "controls": [
      {
        "key": "Click & Drag Nodes",
        "action": "Reposition acoustic frequency emitters"
      },
      {
        "key": "1, 2, 3, 4 Keys",
        "action": "Quick-tune frequency presets (A3, E4, A4, C#5)"
      },
      {
        "key": "Phase Flip (π)",
        "action": "Invert wave phase to cancel rogue dissonance waves"
      },
      {
        "key": "Spacebar",
        "action": "Trigger acoustic dispersion shockwave"
      },
      {
        "key": "R Key",
        "action": "Reset current harmonic configuration"
      }
    ],
    "instructions": [
      "Acoustic soundwaves create standing wave interference across the membrane.",
      "Particles are naturally repelled from high-vibration antinodes and gather along calm nodal lines.",
      "Guide luminous quantum motes into the target Resonance Cores by shaping the nodal highway.",
      "Achieve 90%+ harmonic stability to power each pylon and complete the acoustic sequence."
    ],
    "strategies": [
      "Look for the dark valleys between glowing ripples—that is where particles will gather.",
      "Pairing 220Hz and 330Hz creates a consonant Perfect Fifth with intersecting grid lines.",
      "Against red rogue emitters, match its frequency and flip phase by 180° for complete destructive cancellation."
    ],
    "faqs": [
      {
        "question": "What is Cymatics and what are Chladni plates?",
        "answer": "Discovered by Ernst Chladni in 1787, vibrating metal plates cause sand to spontaneously organize into intricate geometric patterns along the stationary nodal lines."
      },
      {
        "question": "Does the game use real mathematical wave physics?",
        "answer": "Yes! The game calculates real-time 2D superposition wave interference and acoustic radiation force gradients at 60 FPS."
      }
    ]
  },
  {
    "id": "penumbra-null",
    "slug": "penumbra-null",
    "subdomain": "penumbra",
    "title": "Penumbra Null: Inverted Shadow Physics",
    "tagline": "Light is lethal void; shadows are the only solid ground. Shape reality to survive!",
    "category": "physics",
    "rating": 4.9,
    "playCount": "1.2M",
    "color": "#00f0ff",
    "badge": "Spatial Inversion",
    "releaseDate": "2026-11-09",
    "keywords": [
      "inverted shadow physics game",
      "negative space platformer browser",
      "penumbra null game",
      "raycast shadow collision online",
      "light and dark physics puzzle"
    ],
    "description": "An industry-inverting browser physics game where raw photon light is a lethal vacuum and cast shadows are the only solid matter. Orbit your geometric occluder blades, surf dynamic cast shadow waves, and trick photonic swarms into direct solar incineration to harvest quantum Lux Motes.",
    "controls": [
      {
        "key": "Mouse / Touch Aim",
        "action": "Rotate geometric occluder blade to cast shadows"
      },
      {
        "key": "Hold Click / Space",
        "action": "Focus blade and charge kinetic slingshot"
      },
      {
        "key": "Release Click",
        "action": "Release slingshot kinetic pulse"
      },
      {
        "key": "Shift / Right-Click",
        "action": "Trigger Prism Shunt polarity burst"
      },
      {
        "key": "R Key",
        "action": "Re-engage aperture / reset sector"
      }
    ],
    "instructions": [
      "Unobstructed light will rapidly burn away your Ablation Shield—stay inside cast shadows to survive and recharge.",
      "Aim your occluder blade relative to orbital suns to project dynamic solid ramps, ceilings, and barriers.",
      "Photonic enemies cannot enter darkness. Whip away your shadow shelter to expose them to blinding light for instant incineration.",
      "Vacuum up glowing cyan Lux Motes to meet the sector quota and unlock the next cosmological sector."
    ],
    "strategies": [
      "Tilt your occluder slightly downward to skate along shadow ridges while preserving forward momentum.",
      "Hold focus to tighten your shadow into a high-friction brake before slingshotting across wide voids.",
      "Save your Prism Shunt for moments when orbital suns cross paths and leave you momentarily without footing."
    ],
    "faqs": [
      {
        "question": "How does the negative space collision work?",
        "answer": "The game uses real-time 2D ray-segment projection to cast dynamic 4-point shadow hulls from moving light emitters. The physics solver checks convex point-in-polygon containment at 60 FPS."
      },
      {
        "question": "How do you defeat enemies if you need to stay in the shadow?",
        "answer": "Lure photonic swarms to the edge of your shadow, then quickly sweep or snap your blade so raw light touches them while keeping the player core sheltered."
      }
    ]
  },
  {
    "id": "gravifold",
    "slug": "gravifold",
    "subdomain": "gravifold",
    "title": "Gravifold: Spacetime Origami",
    "tagline": "Crease the fabric of 2D space to bridge abysses, invert gravity, and catapult quantum orbs into singularities!",
    "category": "physics",
    "rating": 4.9,
    "playCount": "840K",
    "color": "#06b6d4",
    "badge": "Spacetime Origami",
    "releaseDate": "2026-11-10",
    "keywords": [
      "spacetime origami game",
      "paper folding physics puzzle",
      "topological physics game online",
      "gravifold browser game",
      "non-euclidean puzzle game"
    ],
    "description": "A revolutionary topological physics puzzle where space itself is a sheet of cosmic paper. Instead of merely steering through obstacles, slice crease lines across reality to fold the 2D coordinate plane. Mirrored platforms superimpose, gravitational vectors invert across crease boundaries, and sudden unfolds launch your quantum orb with relativistic kinetic slingshot inertia.",
    "controls": [
      {
        "key": "Click & Drag",
        "action": "Draw custom crease lines across spacetime"
      },
      {
        "key": "Spacebar / Button",
        "action": "Fold or unfold space along active crease"
      },
      {
        "key": "L Key / Button",
        "action": "Launch or reset the Quantum Singularity Orb"
      },
      {
        "key": "V / H Keys",
        "action": "Quick-snap vertical or horizontal crease presets"
      },
      {
        "key": "R Key",
        "action": "Reset current chamber state"
      }
    ],
    "instructions": [
      "Analyze the gap separating your starting dispenser from the distant Goal Singularity.",
      "Drag on the canvas or click presets to set a crease line with its normal arrow facing the section to fold.",
      "Press FOLD SPACE (Spacebar) to flip that half of reality across the crease, bridging voids and redirecting lasers.",
      "Unfolding space while the orb is on the folded flap imparts an elastic kinetic boost—the Paper Slingshot!",
      "Collect all golden Quantum Energy Cores and guide the orb into the vortex to collapse the chamber."
    ],
    "strategies": [
      "Diagonal creases are ideal for routing around vertical laser tripwires.",
      "In inverted gravity chambers, let the orb build downward speed before folding to slingshot along ceiling rails.",
      "If you need extra height, trigger UNFOLD right as the orb reaches peak velocity across the crease line."
    ],
    "faqs": [
      {
        "question": "How does the folding math work?",
        "answer": "The engine uses affine 2D hyper-plane reflection across the crease line vector at 60 FPS, dynamically reflecting coordinates, platform normals, and collision hulls in real time."
      },
      {
        "question": "Can I create custom creases anywhere?",
        "answer": "Yes! Simply click and drag anywhere on the canvas to draw a custom crease angle, or adjust the two glowing circular handles."
      }
    ]
  },
  {
    "id": "echolocation",
    "slug": "echolocation",
    "subdomain": "sonar",
    "title": "Echo-Location: Sonar Cave Escape",
    "tagline": "Navigate pitch-black subterranean labyrinths using acoustic sonar pings to evade slumbering cave predators!",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "910K",
    "color": "#06b6d4",
    "badge": "Sonar Thriller",
    "releaseDate": "2026-11-10",
    "keywords": [
      "echolocation game online",
      "sonar cave stealth browser",
      "blind cave exploration game",
      "acoustic radar horror puzzle",
      "pitch black sonar bat game"
    ],
    "description": "An atmospheric sensory-inversion survival game where the screen is plunged in complete darkness. You pilot a bioluminescent subterranean creature navigating twisting cavern depths. By emitting acoustic sonar pings, sound waves radiate across stalactites and reveal surrounding walls, glowing echo crystals, and terrifying blind predators that awaken and stalk your location if you make too much noise.",
    "controls": [
      {
        "key": "WASD / Arrow Keys",
        "action": "Swim and fly through cave corridors"
      },
      {
        "key": "Spacebar / Left Click",
        "action": "Emit acoustic sonar resonance ping"
      },
      {
        "key": "Tap Canvas (Mobile)",
        "action": "Direct creature movement & sonar pulse"
      },
      {
        "key": "R Key",
        "action": "Restart current cavern depth"
      }
    ],
    "instructions": [
      "The cave is pitch-black: only surfaces touched by your expanding sound waves illuminate temporarily.",
      "Gather all 3 golden resonance crystals scattered across the cavern to power the ancient exit rift.",
      "Watch your Sonar Energy bar: pulse pings consume breath, which regenerates naturally when gliding quietly.",
      "Beware of slumbering cave stalkers: pinging too close awakens their hunting instinct and draws them directly to your pulse origin."
    ],
    "strategies": [
      "Glaze quietly near walls to preserve stamina; use short, measured pings rather than spamming.",
      "If a predator turns red and gives chase, bank sharply behind a rock pillar to break line-of-sight acoustics.",
      "Sound wave echoes linger longer on crystal faces—look for persistent amber twinkles in the dark."
    ],
    "faqs": [
      {
        "question": "How do the acoustic wave echoes work?",
        "answer": "The game calculates real-time 2D circular wave propagation and line-segment ray intersection with fading alpha reverberation particles at 60 FPS."
      },
      {
        "question": "Can I beat levels without waking any predators?",
        "answer": "Yes! By timing your pings from afar and reading the echo return times, you can navigate entire caverns in complete stealth."
      }
    ]
  },
  {
    "id": "cursorsiege",
    "slug": "cursorsiege",
    "subdomain": "cursor",
    "title": "Cursor Siege: Malware Defense 95",
    "tagline": "Defend classic desktop OS files from aggressive popup windows, trojan worms, and mouse-hijacking malware!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.1M",
    "color": "#ec4899",
    "badge": "Retro OS Defense",
    "releaseDate": "2026-11-10",
    "keywords": [
      "cursor siege game",
      "malware defense desktop game",
      "windows 95 retro browser game",
      "adware popup clicker arcade",
      "antivirus mouse defense"
    ],
    "description": "A nostalgic retro operating system action-defense simulator! Control your mouse cursor as a high-frequency laser weapon defending vital desktop files (system32.dll, passwords.txt, crypto wallet) from escalating waves of adware popups, trojan worms, ransomware locks, and glitch viruses that actively hijack and invert your mouse acceleration.",
    "controls": [
      {
        "key": "Mouse / Touch Move",
        "action": "Move laser-edged system cursor"
      },
      {
        "key": "Left Click / Drag",
        "action": "Slash incoming malware windows & click tiny [X] close boxes"
      },
      {
        "key": "Spacebar / \"Start\" Button",
        "action": "Deploy Antivirus EMP Defragmenter (clears all on-screen threats)"
      },
      {
        "key": "R Key",
        "action": "Reboot virtual operating system"
      }
    ],
    "instructions": [
      "Prevent incoming malware popups and worms from reaching your desktop files on the left side of the screen.",
      "Click the tiny red [X] button on popup windows for an instant 1-hit kill, or slash their bodies with your cursor.",
      "Beware of Glitch Malwares: they temporarily invert your cursor trajectory and hijack mouse sensitivity!",
      "Eliminate all threats in each wave to earn XP and restore system file integrity."
    ],
    "strategies": [
      "Prioritize high-value files like system32.dll—if all desktop files are corrupted, the system blue-screens.",
      "Save your Antivirus EMP charges for massive adware cascades or when your cursor is inverted by a Glitch worm.",
      "Aim precisely for the [X] close box in the upper right corner to deal double damage."
    ],
    "faqs": [
      {
        "question": "Is this based on a real operating system?",
        "answer": "It pays tribute to the beloved retro aesthetics of Windows 95, classic MacOS, and early 2000s desktop computing with authentic sound design."
      },
      {
        "question": "What happens when mouse acceleration is hijacked?",
        "answer": "Certain glitch malware entities invert your pointer coordinates or apply sinusoidal cursor drift until the glitch threat is quarantined."
      }
    ]
  },
  {
    "id": "circuithacker",
    "slug": "circuithacker",
    "subdomain": "circuit",
    "title": "Circuit Hacker: Overheat Terminal",
    "tagline": "Route live electrical currents through breadboard logic gates to bypass mainframe security before thermal meltdown!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "780K",
    "color": "#10b981",
    "badge": "Hardware Logic",
    "releaseDate": "2026-11-10",
    "keywords": [
      "circuit hacker game",
      "breadboard logic gate puzzle",
      "cyberpunk hardware terminal",
      "electrical engineering browser game",
      "logic gate simulator online"
    ],
    "description": "Step into the boots of an elite hardware intrusion specialist. Wire and rotate real logic IC chips (AND, OR, NOT, XOR) across breadboard PCB tracks to channel live power rail currents into security terminal registers. Balance circuit heat dissipation to bypass encrypted mainframe cores before the breadboard hits 100°C thermal runaway!",
    "controls": [
      {
        "key": "Left Click on Slot",
        "action": "Place or rotate chip 90 degrees"
      },
      {
        "key": "Right Click on Slot",
        "action": "Cycle chip type: WIRE → AND → OR → NOT → XOR"
      },
      {
        "key": "Pulse Current Button",
        "action": "Send instantaneous live voltage test pulse"
      },
      {
        "key": "R Key",
        "action": "Discharge breadboard and reset sector"
      }
    ],
    "instructions": [
      "Observe the HIGH / LOW power inputs on the left and the required logic values (REQ:1 or REQ:0) on the right.",
      "Place logic gates into breadboard sockets to manipulate the binary voltage as it travels left to right.",
      "AND gates output 1 only if both input traces are HIGH; NOT gates invert the incoming signal.",
      "Achieve the required binary outputs on all security registers before the PCB temperature reaches 100°C."
    ],
    "strategies": [
      "Keep your circuit trace count lean: active powered chips generate heat over time.",
      "Use NOT gates immediately after HIGH sources to create an inverted reference channel.",
      "Watch the live oscilloscope readout on the right—it indicates signal harmonic stability and synchronization."
    ],
    "faqs": [
      {
        "question": "Are the logic gates true to real digital electronics?",
        "answer": "Yes! Boolean logic follows exact standard IEEE standards for AND, OR, NOT, and XOR digital gates."
      },
      {
        "question": "How do I cool down the board if it gets too hot?",
        "answer": "Disconnecting unneeded powered traces or completing the bypass quickly will prevent thermal shutdown."
      }
    ]
  },
  {
    "id": "circuit-hacker",
    "slug": "circuit-hacker",
    "subdomain": "circuithacker",
    "title": "CircuitHacker: Overheat Terminal",
    "tagline": "Defuse corporate firewall security gates before thermal overload collapses the terminal!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "920K",
    "color": "#10b981",
    "badge": "Cyber Terminal",
    "releaseDate": "2026-11-10",
    "keywords": [
      "circuit hacker game",
      "cyberpunk wire puzzle",
      "overheat terminal online",
      "hacker node puzzle"
    ],
    "description": "Bypass corporate mainframe security nodes under tight thermal constraints. Route electrical currents, divert thermal spikes, and crack terminal gates.",
    "controls": [
      {
        "key": "Click & Drag",
        "action": "Connect logic terminals"
      },
      {
        "key": "Spacebar",
        "action": "Vent thermal heat"
      }
    ],
    "instructions": [
      "Connect node inputs to gate targets.",
      "Keep core temperature below 100°C.",
      "Bypass all security gates to extract corporate data."
    ],
    "strategies": [
      "Vent heat right before completing complex circuit loops."
    ],
    "faqs": [
      {
        "question": "What happens if core overheats?",
        "answer": "The firewall lock downs and resets the sector!"
      }
    ]
  },
  {
    "id": "cursor-siege",
    "slug": "cursor-siege",
    "subdomain": "cursorsiege",
    "title": "CursorSiege: Malware Defense 95",
    "tagline": "Retro Windows 95 desktop under siege! Defend critical system files from trojans and popups.",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.1M",
    "color": "#3b82f6",
    "badge": "Retro Win95",
    "releaseDate": "2026-11-10",
    "keywords": [
      "windows 95 game online",
      "malware defense arcade",
      "cursor siege browser",
      "retro os defense"
    ],
    "description": "Your retro operating system is under attack! Swat popup ads, drag trojans into the Recycle Bin, and defend system DLLs.",
    "controls": [
      {
        "key": "Mouse Click / Drag",
        "action": "Swat popups and quarantine trojans"
      }
    ],
    "instructions": [
      "Close popup windows before they multiply.",
      "Drag worm viruses directly into the Recycle Bin.",
      "Keep at least one system file alive!"
    ],
    "strategies": [
      "Double-click task manager to wipe screen in emergencies."
    ],
    "faqs": [
      {
        "question": "Does it look like real Win95?",
        "answer": "Yes, with authentic retro borders, bevels, and icons!"
      }
    ]
  },
  {
    "id": "echo-location",
    "slug": "echo-location",
    "subdomain": "echolocation",
    "title": "EchoLocation: Sonar Cave Escape",
    "tagline": "Pitch black cavern maze! Fire sonar sound pulses to reveal cave walls and find glowing crystals.",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "870K",
    "color": "#06b6d4",
    "badge": "Sonar Dark",
    "releaseDate": "2026-11-10",
    "keywords": [
      "echolocation game",
      "sonar maze browser",
      "dark cave puzzle online",
      "sound vision puzzle"
    ],
    "description": "You are blind in a pitch-black labyrinth. Emit acoustic sonar pulses to visualize stalactites, currents, and ancient crystals.",
    "controls": [
      {
        "key": "Spacebar / Tap",
        "action": "Emit sonar acoustic pulse"
      },
      {
        "key": "Arrow Keys / WASD",
        "action": "Swim forward"
      }
    ],
    "instructions": [
      "The cave is completely dark.",
      "Fire sonar waves to bounce off walls for a split-second glimpse.",
      "Collect 3 crystals to open the cavern exit."
    ],
    "strategies": [
      "Pulse sparingly to conserve sonar energy."
    ],
    "faqs": [
      {
        "question": "Are there hazards in the dark?",
        "answer": "Yes, silent underwater sea spikes lurk in narrow channels!"
      }
    ]
  },
  {
    "id": "diceforge-tactics",
    "slug": "diceforge-tactics",
    "subdomain": "diceforge",
    "title": "DiceForge: Tactics Duel",
    "tagline": "Roll 3 dice, lock in tactical symbols, and defeat rogue cyborgs in dice combat!",
    "category": "card",
    "rating": 4.8,
    "playCount": "820K",
    "color": "#e11d48",
    "badge": "Dice Battler",
    "releaseDate": "2026-03-10",
    "keywords": [
      "dice roguelike online",
      "dice battler free",
      "yahtzee rpg browser",
      "dice duel web"
    ],
    "description": "DiceForge combines Yahtzee re-rolling mechanics with tactical turn-based RPG combat.",
    "controls": [
      {
        "key": "Click Dice",
        "action": "Lock or unlock die"
      },
      {
        "key": "Roll Dice",
        "action": "Re-roll unlocked dice (up to 2 times)"
      },
      {
        "key": "Execute Turn",
        "action": "Commit rolled actions"
      }
    ],
    "instructions": [
      "Roll 3 combat dice (Sword: 10 DMG, Shield: 10 Block, Bolt: 20 Magic).",
      "Lock the dice you want to keep and re-roll the rest.",
      "Defeat the cyborg enemy before your HP reaches 0."
    ],
    "strategies": [
      "Lock shields when enemy intents show heavy incoming attacks."
    ],
    "faqs": [
      {
        "question": "Are die faces upgradeable?",
        "answer": "Yes, winning battles boosts your damage multiplier!"
      }
    ]
  },
  {
    "id": "floor99",
    "slug": "floor99",
    "subdomain": "floor99",
    "title": "Floor99: One-Button Crawler",
    "tagline": "Tap one button to step, strike monsters, and dive into 99 procedural dungeon depths!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "970K",
    "color": "#d97706",
    "badge": "1-Button Arcade",
    "releaseDate": "2026-03-12",
    "keywords": [
      "one button game unblocked",
      "simple dungeon crawler",
      "floor 99 web",
      "1 button roguelike"
    ],
    "description": "Control a dungeon knight with just one single tap or spacebar press. Step forward to strike foes and dodge hazards.",
    "controls": [
      {
        "key": "Spacebar / Tap",
        "action": "Step forward / Strike"
      }
    ],
    "instructions": [
      "Knight moves forward when tapped.",
      "Spike traps alternate every 2 seconds.",
      "Clear monster tiles to open the exit ladder to the next floor."
    ],
    "strategies": [
      "Watch the rhythm of the hazard lights before tapping forward."
    ],
    "faqs": [
      {
        "question": "Are there checkpoints?",
        "answer": "Floors 25, 50, and 75 have rest bonfires!"
      }
    ]
  },
  {
    "id": "cyberraid",
    "slug": "cyberraid",
    "subdomain": "netdeck",
    "title": "CyberRaid: Firewall Deckbuilder",
    "tagline": "Slay the Spire card combat in cyberspace! Play exploits to shatter corporate ICE.",
    "category": "card",
    "rating": 4.9,
    "playCount": "1.6M",
    "color": "#06b6d4",
    "badge": "Cyber Rogue",
    "releaseDate": "2026-03-15",
    "keywords": [
      "slay the spire browser",
      "cyberpunk card game free",
      "card roguelike unblocked",
      "deckbuilder web"
    ],
    "description": "Spend Energy to deploy hacker exploits, firewalls, and malware payloads against corporate security ICE.",
    "controls": [
      {
        "key": "Click Cards",
        "action": "Deploy card using Energy"
      },
      {
        "key": "End Turn",
        "action": "Resolve enemy attack"
      }
    ],
    "instructions": [
      "You have 3 Energy per turn.",
      "Play Attack cards to breach ICE HP.",
      "Play Firewall cards to absorb incoming ICE attacks."
    ],
    "strategies": [
      "Always calculate incoming ICE intent damage before spending all energy on attacks."
    ],
    "faqs": [
      {
        "question": "Are there multiple card classes?",
        "answer": "Yes, unlock Netrunner, Infiltrator, and Brute decks!"
      }
    ]
  },
  {
    "id": "minitower",
    "slug": "minitower",
    "subdomain": "minitower",
    "title": "MiniTower: Auto-Battler",
    "tagline": "Draft tiny warriors, place them on the battlefield, and watch auto-battles unfold!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.1M",
    "color": "#3b82f6",
    "badge": "Auto Chess",
    "releaseDate": "2026-03-18",
    "keywords": [
      "mini auto battler free",
      "teamfight tactics web",
      "browser auto chess",
      "tiny auto battle"
    ],
    "description": "Draft Knights, Archers, and Mages into 3 combat lanes and hit Battle to watch automated war.",
    "controls": [
      {
        "key": "Buy Unit",
        "action": "Recruit fighter with gold"
      },
      {
        "key": "Battle",
        "action": "Start automated combat wave"
      }
    ],
    "instructions": [
      "Buy units from the draft shop.",
      "Place units on your side of the battlefield.",
      "Hit BATTLE! Units attack automatically."
    ],
    "strategies": [
      "Put armored Knights in the front lane and Archers safely in the back."
    ],
    "faqs": [
      {
        "question": "How do units level up?",
        "answer": "Drafting identical units boosts their star tier and HP!"
      }
    ]
  },
  {
    "id": "microrogue",
    "slug": "microrogue",
    "subdomain": "microrogue",
    "title": "MicroRogue: 1-Bit Crypt",
    "tagline": "Minimalist 9×9 monochrome chess roguelike! Predict deterministic enemy movement.",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "780K",
    "color": "#f1f5f9",
    "badge": "1-Bit Chess",
    "releaseDate": "2026-03-20",
    "keywords": [
      "1 bit roguelike",
      "chess dungeon puzzle",
      "minimalist roguelike browser",
      "tactical grid puzzle"
    ],
    "description": "Zero luck, 100% tactical chess puzzle: defeat enemies by stepping into their flank tiles.",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Step 1 tile in 4 directions"
      }
    ],
    "instructions": [
      "You are the white cross (+).",
      "Enemies move like Pawns and Rooks.",
      "Step into an enemy tile to eliminate them."
    ],
    "strategies": [
      "Anticipate enemy counter-steps before moving into an open lane."
    ],
    "faqs": [
      {
        "question": "Is every level solvable?",
        "answer": "Yes, each room is a deterministic logic puzzle!"
      }
    ]
  },
  {
    "id": "lootgoblin",
    "slug": "lootgoblin",
    "subdomain": "backpack",
    "title": "LootGoblin: Inventory Battler",
    "tagline": "Arrange weapons, whetstones, and potions in your backpack for maximum synergy!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "1.5M",
    "color": "#10b981",
    "badge": "Inventory RPG",
    "releaseDate": "2026-03-22",
    "keywords": [
      "backpack hero online free",
      "backpack battles web",
      "inventory puzzle game",
      "grid inventory battler"
    ],
    "description": "Backpack management is your weapon! Organize daggers and shields for optimal adjacency combos.",
    "controls": [
      {
        "key": "Click Grid",
        "action": "Place equipment item"
      },
      {
        "key": "Simulate Battle",
        "action": "Test inventory power"
      }
    ],
    "instructions": [
      "Fit equipment inside a 4x4 backpack grid.",
      "Swords adjacent to whetstones get +5 DMG.",
      "Potions in corners heal double."
    ],
    "strategies": [
      "Position high-damage weapons next to booster gems."
    ],
    "faqs": [
      {
        "question": "Is inventory size upgradeable?",
        "answer": "Yes, clear floors to expand your bag!"
      }
    ]
  },
  {
    "id": "infinite-minesweeper",
    "slug": "infinite-minesweeper",
    "subdomain": "sweeper-rpg",
    "title": "SweeperRPG: Infinite Mines",
    "tagline": "Minesweeper meets dungeon crawler! Numbers reveal XP, monsters, and traps.",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "890K",
    "color": "#eab308",
    "badge": "RPG Logic",
    "releaseDate": "2026-03-25",
    "keywords": [
      "minesweeper rpg",
      "infinite minesweeper",
      "dungeon sweeper free",
      "minesweeper roguelike"
    ],
    "description": "Clear rows of tiles to descend deeper into an endless monster-filled minefield.",
    "controls": [
      {
        "key": "Click Tile",
        "action": "Uncover cell"
      },
      {
        "key": "Flag (F / Right Click)",
        "action": "Mark danger tile"
      }
    ],
    "instructions": [
      "Numbers indicate how many adjacent traps exist.",
      "Revealing safe tiles grants XP and Gold.",
      "Survive as many floors as possible."
    ],
    "strategies": [
      "Armor reduces damage taken when accidentally stepping on a trap."
    ],
    "faqs": [
      {
        "question": "Is the map endless?",
        "answer": "Yes! Rows continuously scroll as you dig down."
      }
    ]
  },
  {
    "id": "stellar-collapse",
    "slug": "stellar-collapse",
    "subdomain": "gravitymerge",
    "title": "Stellar Collapse: Gravity Merge",
    "tagline": "360° radial Suika physics! Shoot planets toward the sun to merge into a Black Hole.",
    "category": "physics",
    "rating": 4.9,
    "playCount": "2.1M",
    "color": "#8b5cf6",
    "badge": "Radial Suika",
    "releaseDate": "2026-03-28",
    "keywords": [
      "suika game gravity",
      "radial watermelon game",
      "planet merge game online",
      "space merge physics"
    ],
    "description": "A 360-degree twist on Suika: launch asteroids, moons, and planets toward a gravitational core.",
    "controls": [
      {
        "key": "Aim Mouse / Touch",
        "action": "Direct launch angle from outer ring"
      },
      {
        "key": "Click / Tap",
        "action": "Shoot planet toward core"
      }
    ],
    "instructions": [
      "Shoot planets toward the center gravity well.",
      "Two matching planets merge into the next larger celestial body.",
      "Create the ultimate Black Hole!"
    ],
    "strategies": [
      "Keep heavier planets on one side of the orbit to avoid blocking new launches."
    ],
    "faqs": [
      {
        "question": "What happens at Black Hole?",
        "answer": "It collapses with a screen-shaking supernova victory fanfare!"
      }
    ]
  },
  {
    "id": "jellydrop",
    "slug": "jellydrop",
    "subdomain": "jelly2048",
    "title": "JellyDrop: 2048 Soft Merge",
    "tagline": "Squishy spring physics 2048! Bouncy jelly numbers deform, squeeze, and merge.",
    "category": "physics",
    "rating": 4.8,
    "playCount": "1.3M",
    "color": "#ec4899",
    "badge": "Squishy 2048",
    "releaseDate": "2026-04-01",
    "keywords": [
      "jelly 2048 online",
      "squishy 2048 physics",
      "soft body merge game",
      "bouncy 2048 browser"
    ],
    "description": "2048 with soft-body spring physics: drop bouncy squishy jelly orbs that compress and merge together.",
    "controls": [
      {
        "key": "Click / Tap to Drop",
        "action": "Drop jelly orb from top"
      }
    ],
    "instructions": [
      "Drop bouncy numbered jellies.",
      "Matching numbers squish and merge on contact.",
      "Merge up to 2048!"
    ],
    "strategies": [
      "Drop matching numbers in adjacent lanes so they roll into each other."
    ],
    "faqs": [
      {
        "question": "Does it use real spring physics?",
        "answer": "Yes, Verlet integration simulates soft-body jiggle."
      }
    ]
  },
  {
    "id": "magnetoblocks",
    "slug": "magnetoblocks",
    "subdomain": "magnets",
    "title": "MagnetoBlocks: Polar Match",
    "tagline": "Red (+) and Blue (-) magnetic blocks attract and repel! Connect 4 to clear.",
    "category": "physics",
    "rating": 4.8,
    "playCount": "730K",
    "color": "#ef4444",
    "badge": "Magnetic Physics",
    "releaseDate": "2026-04-05",
    "keywords": [
      "magnetic physics game",
      "magnet match 4",
      "polar blocks puzzle",
      "magnet drop web"
    ],
    "description": "Dropping blocks creates sudden snaps and violent magnetic repulsions based on positive/negative polarity.",
    "controls": [
      {
        "key": "Click Columns",
        "action": "Drop magnetic block"
      }
    ],
    "instructions": [
      "Blocks have North (+) and South (-) poles.",
      "Opposite poles snap together.",
      "Match 4 connected blocks of the same color to detonate."
    ],
    "strategies": [
      "Use magnetic repulsion to fling blocks across into empty lanes."
    ],
    "faqs": [
      {
        "question": "How do chain reactions score?",
        "answer": "Each subsequent snap earns 2x combo multipliers!"
      }
    ]
  },
  {
    "id": "coinstacker",
    "slug": "coinstacker",
    "subdomain": "coinpusher",
    "title": "CoinStacker: 2D Coin Pusher",
    "tagline": "Realistic 2D arcade coin pusher! Drop tokens to push piles of gems off the edge.",
    "category": "physics",
    "rating": 4.8,
    "playCount": "1.4M",
    "color": "#eab308",
    "badge": "Arcade ASMR",
    "releaseDate": "2026-04-08",
    "keywords": [
      "coin pusher online free",
      "coin dozer browser",
      "realistic coin pusher simulator",
      "arcade coin drop"
    ],
    "description": "The beloved carnival coin pusher simulated with authentic 2D physics and satisfying metallic sound effects.",
    "controls": [
      {
        "key": "Click / Tap",
        "action": "Drop gold coin"
      }
    ],
    "instructions": [
      "Drop gold coins onto the moving top pusher.",
      "Coins push stacks toward the payout chute.",
      "Collect emeralds and bonus prize tokens!"
    ],
    "strategies": [
      "Time coin drops when the pusher is fully retracted for maximum push distance."
    ],
    "faqs": [
      {
        "question": "Do coins regenerate?",
        "answer": "Yes! You earn 1 free coin every 3 seconds."
      }
    ]
  },
  {
    "id": "liquidsort",
    "slug": "liquidsort",
    "subdomain": "watersort",
    "title": "LiquidSort: Fluid Color Pour",
    "tagline": "Pour colored liquids between test tubes until each tube holds a single solid color!",
    "category": "physics",
    "rating": 4.9,
    "playCount": "2.5M",
    "color": "#06b6d4",
    "badge": "Fluid Sorting",
    "releaseDate": "2026-04-10",
    "keywords": [
      "water sort puzzle online",
      "liquid sort game free",
      "color pour puzzle browser",
      "test tube sort"
    ],
    "description": "The mega-viral mobile fluid sorting puzzle reconstructed on the web with crisp animations and unlimited levels.",
    "controls": [
      {
        "key": "Click Tube A",
        "action": "Select source tube"
      },
      {
        "key": "Click Tube B",
        "action": "Pour top color into target"
      }
    ],
    "instructions": [
      "You can only pour if the target tube has room and matching top color.",
      "Empty tubes can accept any color.",
      "Sort all colors into dedicated tubes to win."
    ],
    "strategies": [
      "Prioritize clearing out one full tube early to use as temporary staging."
    ],
    "faqs": [
      {
        "question": "Is every level solvable?",
        "answer": "Yes, all arrangements are procedurally validated."
      }
    ]
  },
  {
    "id": "breakout-sandbox",
    "slug": "breakout-sandbox",
    "subdomain": "sandboxbreakout",
    "title": "Breakout Sandbox: Falling Sand",
    "tagline": "Brick breaker meets falling sand! Shatter bricks into thousands of cascading particles.",
    "category": "physics",
    "rating": 4.8,
    "playCount": "1.2M",
    "color": "#f59e0b",
    "badge": "Particle Sandbox",
    "releaseDate": "2026-04-12",
    "keywords": [
      "falling sand breakout",
      "particle destruction breakout",
      "sandbox brick breaker",
      "physics breakout web"
    ],
    "description": "Strike bricks made of granular sand, glass, and explosive TNT that collapse into realistic falling powder physics.",
    "controls": [
      {
        "key": "Mouse / Arrow Keys",
        "action": "Move paddle left and right"
      }
    ],
    "instructions": [
      "Bounce the ball into the sand blocks.",
      "Blocks dissolve into thousands of loose granular particles.",
      "Hit TNT blocks for explosive chain reactions!"
    ],
    "strategies": [
      "Catch falling power-up particles on your paddle to widen your bounce angle."
    ],
    "faqs": [
      {
        "question": "How many particles can it render?",
        "answer": "Up to 5,000 active particles at a smooth 60 FPS!"
      }
    ]
  },
  {
    "id": "ragdoll-moonshot",
    "slug": "ragdoll-moonshot",
    "subdomain": "ragdoll",
    "title": "Ragdoll Moonshot: Launch Odyssey",
    "tagline": "Launch a ragdoll astronaut across lunar craters with rocket boosts and bouncy physics!",
    "category": "physics",
    "rating": 4.8,
    "playCount": "1.7M",
    "color": "#ec4899",
    "badge": "Launch Distance",
    "releaseDate": "2026-04-15",
    "keywords": [
      "ragdoll launcher online",
      "toss the turtle browser",
      "learn to fly html5",
      "distance launcher unblocked"
    ],
    "description": "Classic Flash-era launch distance gameplay modernized in HTML5 with ragdoll physics and upgrades.",
    "controls": [
      {
        "key": "Aim Angle & Power",
        "action": "Set slingshot trajectory"
      },
      {
        "key": "Boost (Spacebar / Tap)",
        "action": "Fire rocket pack in mid-air"
      }
    ],
    "instructions": [
      "Launch astronaut at optimal 45° angle.",
      "Tap Boost when dropping to extend flight distance.",
      "Earn lunar credits to buy jetpacks and bouncers."
    ],
    "strategies": [
      "Save rocket boosts for bouncing off steep crater walls."
    ],
    "faqs": [
      {
        "question": "Can you reach outer space orbit?",
        "answer": "Yes, full upgrades unlock low-lunar orbit!"
      }
    ]
  },
  {
    "id": "domino-cascade",
    "slug": "domino-cascade",
    "subdomain": "domino",
    "title": "Domino Cascade: Chain Reaction",
    "tagline": "Place dominoes, ramps, and marbles to trigger the ultimate Rube Goldberg sequence!",
    "category": "physics",
    "rating": 4.8,
    "playCount": "910K",
    "color": "#3b82f6",
    "badge": "Rube Goldberg",
    "releaseDate": "2026-04-18",
    "keywords": [
      "domino cascade puzzle",
      "rube goldberg web game",
      "chain reaction simulator",
      "domino physics browser"
    ],
    "description": "Arrange domino tiles to topple in an unbroken chain and ring the gold finish bell.",
    "controls": [
      {
        "key": "Click Grid",
        "action": "Place or rotate domino tile"
      },
      {
        "key": "Push Domino",
        "action": "Trigger start of physics run"
      }
    ],
    "instructions": [
      "Place up to 6 dominoes on the stage.",
      "Click START to topple the initial domino.",
      "Knock down all tiles to ring the finish bell."
    ],
    "strategies": [
      "Angle tiles near corner curves so momentum transfers smoothly."
    ],
    "faqs": [
      {
        "question": "How many stages are there?",
        "answer": "30 challenging physical cascade puzzles!"
      }
    ]
  },
  {
    "id": "bouncygolf",
    "slug": "bouncygolf",
    "subdomain": "bouncygolf",
    "title": "BouncyGolf: Pinball Slingshot",
    "tagline": "Mini golf with pinball bumpers! Slingshot your golf ball to sink under par.",
    "category": "physics",
    "rating": 4.8,
    "playCount": "1.3M",
    "color": "#10b981",
    "badge": "Pinball Golf",
    "releaseDate": "2026-04-20",
    "keywords": [
      "mini golf 2d unblocked",
      "pinball golf browser",
      "slingshot golf game",
      "physics golf online"
    ],
    "description": "Slingshot a golf ball through neon courses packed with pinball bumpers, laser barriers, and speed pads.",
    "controls": [
      {
        "key": "Drag & Release",
        "action": "Slingshot aim and power"
      }
    ],
    "instructions": [
      "Drag backward from the ball to aim.",
      "Bounce off bumpers for extra speed.",
      "Sink the ball into the glowing cup under Par."
    ],
    "strategies": [
      "Use bumpers to ricochet around sharp corners."
    ],
    "faqs": [
      {
        "question": "Are there hole-in-one bonuses?",
        "answer": "Yes, sinking in 1 stroke scores 1,000 bonus points!"
      }
    ]
  },
  {
    "id": "bubblewrap",
    "slug": "bubblewrap",
    "subdomain": "popit",
    "title": "BubbleWrap ASMR: Stress Popper",
    "tagline": "Hyper-satisfying neon bubble wrap with authentic procedural Web Audio popping acoustics!",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "1.9M",
    "color": "#06b6d4",
    "badge": "ASMR Stress Relief",
    "releaseDate": "2026-04-22",
    "keywords": [
      "virtual bubble wrap online",
      "pop it game free",
      "asmr fidget simulator",
      "bubble pop unblocked"
    ],
    "description": "Satisfying virtual bubble wrap simulator designed for instant stress relief with spatial audio popping.",
    "controls": [
      {
        "key": "Click / Drag Across Bubbles",
        "action": "Pop bubbles with audio feedback"
      },
      {
        "key": "Fresh Sheet",
        "action": "Reset full sheet"
      }
    ],
    "instructions": [
      "Pop individual bubbles or swipe across to trigger rapid multi-pops.",
      "Try Pop 50 Rush mode to race the stopwatch."
    ],
    "strategies": [
      "Drag rapidly across rows to create machine-gun popping arpeggios."
    ],
    "faqs": [
      {
        "question": "Are sounds pre-recorded?",
        "answer": "No, they are procedurally synthesized in real time via Web Audio!"
      }
    ]
  },
  {
    "id": "driftline",
    "slug": "driftline",
    "subdomain": "drift",
    "title": "DriftLine: One-Touch Neon Drift",
    "tagline": "Hold to anchor to pylons and sling around sharp 90° neon corners at lightning speed!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.6M",
    "color": "#f43f5e",
    "badge": "1-Touch Racer",
    "releaseDate": "2026-04-25",
    "keywords": [
      "sling drift online",
      "one click drift game",
      "neon drifting arcade",
      "browser racing unblocked"
    ],
    "description": "Press and hold to anchor your sports car to pylons and drift through sharp neon raceways.",
    "controls": [
      {
        "key": "Hold Screen / Spacebar",
        "action": "Anchor and drift around corner"
      },
      {
        "key": "Release",
        "action": "Slingshot straight ahead"
      }
    ],
    "instructions": [
      "Car moves forward automatically.",
      "Hold when near a yellow corner pylon to tether and drift.",
      "Release at the straightaway to avoid crashing into walls!"
    ],
    "strategies": [
      "Time your release perfectly parallel with the new track direction."
    ],
    "faqs": [
      {
        "question": "How high does the combo score go?",
        "answer": "Perfect consecutive corner drifts multiply your score exponentially!"
      }
    ]
  },
  {
    "id": "flappyduel",
    "slug": "flappyduel",
    "subdomain": "flappy",
    "title": "FlappyDuel: Ghost Speedrunner",
    "tagline": "Flap through neon pipe gaps while racing against your transparent personal-best Ghost bird!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "2.4M",
    "color": "#eab308",
    "badge": "Ghost Racing",
    "releaseDate": "2026-04-28",
    "keywords": [
      "flappy bird ghost",
      "competitive flappy bird",
      "flappy duel online",
      "multiplayer flappy unblocked"
    ],
    "description": "The definitive competitive Flappy Bird: race synchronously against a translucent ghost replay of your high score run.",
    "controls": [
      {
        "key": "Spacebar / Tap Screen",
        "action": "Flap wings upward"
      }
    ],
    "instructions": [
      "Tap to flap through pipe gaps.",
      "Avoid touching pipes or ground.",
      "Outlast your personal best ghost!"
    ],
    "strategies": [
      "Maintain steady rhythmic taps rather than panic double-flaps."
    ],
    "faqs": [
      {
        "question": "Does ghost replay store locally?",
        "answer": "Yes, your best flight path is recorded in localStorage."
      }
    ]
  },
  {
    "id": "typeracer-blitz",
    "slug": "typeracer-blitz",
    "subdomain": "typer",
    "title": "TypeRacer Blitz: Cyber Shooter",
    "tagline": "Space Invaders meets high-speed typing! Vaporize descending alien fleets by typing words.",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "1.8M",
    "color": "#06b6d4",
    "badge": "Speed Typer",
    "releaseDate": "2026-05-01",
    "keywords": [
      "typing shooter game",
      "ztype alternative free",
      "typing test arcade",
      "speed typing shooter"
    ],
    "description": "Alien invaders descend with words on their hulls. Type each letter to fire precision anti-matter laser bolts.",
    "controls": [
      {
        "key": "Keyboard A-Z",
        "action": "Type letters to shoot target ship"
      }
    ],
    "instructions": [
      "Type letters matching descending enemy ships.",
      "Complete words to vaporize invaders.",
      "Maintain 60+ WPM to survive."
    ],
    "strategies": [
      "Focus on words nearest to your defense cannon first."
    ],
    "faqs": [
      {
        "question": "Does it track WPM?",
        "answer": "Yes! Real-time typing speed and accuracy diagnostics are shown."
      }
    ]
  },
  {
    "id": "perfectslash",
    "slug": "perfectslash",
    "subdomain": "slash",
    "title": "PerfectSlash: Geometry Precision",
    "tagline": "Swipe to slice falling geometric shapes into exact 50% / 50% ratio cuts!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "850K",
    "color": "#f43f5e",
    "badge": "Precision Slice",
    "releaseDate": "2026-05-04",
    "keywords": [
      "perfect slice game",
      "geometric cutting puzzle",
      "slice 50 percent web",
      "accuracy cutter"
    ],
    "description": "Swipe your laser blade across geometric polygons to slice them into millimeter-perfect halves.",
    "controls": [
      {
        "key": "Swipe / Drag Line",
        "action": "Draw slice cut line"
      }
    ],
    "instructions": [
      "Shapes float into the cutting zone.",
      "Drag across to slice.",
      "Score is based on closeness to exact 50.0% split."
    ],
    "strategies": [
      "Cut through center mass vertices for balanced splits."
    ],
    "faqs": [
      {
        "question": "What counts as a Perfect Cut?",
        "answer": "Cuts within 49.5% and 50.5% award 3 stars!"
      }
    ]
  },
  {
    "id": "beatjumper",
    "slug": "beatjumper",
    "subdomain": "rhythm",
    "title": "BeatJumper: 1-Key Rhythm Rush",
    "tagline": "Geometry Dash-style 1-button rhythm rush! Hop neon spikes in sync with 130 BPM beats.",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "2.1M",
    "color": "#8b5cf6",
    "badge": "Rhythm Platformer",
    "releaseDate": "2026-05-08",
    "keywords": [
      "geometry dash online free",
      "rhythm platformer browser",
      "one button beat game",
      "speed platformer unblocked"
    ],
    "description": "Jump neon spike pits and gravity pads strictly in rhythm with dynamic arpeggiated electronic music.",
    "controls": [
      {
        "key": "Spacebar / Tap",
        "action": "Jump on the musical beat"
      }
    ],
    "instructions": [
      "Cube moves forward at constant BPM.",
      "Tap to jump over triangular spikes.",
      "Reach 100% completion to conquer the track!"
    ],
    "strategies": [
      "Listen to the bass arpeggio rhythm to anticipate jump timings."
    ],
    "faqs": [
      {
        "question": "Are tracks procedural?",
        "answer": "Yes, obstacle placement aligns to synthesized beats."
      }
    ]
  },
  {
    "id": "cursorsurvivor",
    "slug": "cursorsurvivor",
    "subdomain": "dodge",
    "title": "CursorSurvivor: Bullet Evasion",
    "tagline": "Your mouse cursor is the target! Dodge homing darts, spinning lasers, and shockwaves.",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.4M",
    "color": "#ef4444",
    "badge": "Reflex Evasion",
    "releaseDate": "2026-05-12",
    "keywords": [
      "dodge cursor game",
      "mouse evasion bullet hell",
      "cursor survivor browser",
      "reaction reflex game"
    ],
    "description": "Control your mouse cursor to evade thousands of homing projectiles and laser grids in a tight arena.",
    "controls": [
      {
        "key": "Mouse Movement",
        "action": "Evade incoming bullets"
      }
    ],
    "instructions": [
      "Survive as many seconds as possible.",
      "Projectiles spawn continuously with escalating speed."
    ],
    "strategies": [
      "Keep moving in broad clockwise arcs around the edges."
    ],
    "faqs": [
      {
        "question": "What is the world record?",
        "answer": "Surviving past 60 seconds puts you in the top 1%!"
      }
    ]
  },
  {
    "id": "speedpark",
    "slug": "speedpark",
    "subdomain": "park",
    "title": "SpeedPark: Precision 2D Valet",
    "tagline": "Maneuver sports cars into tight parking bays under 15 seconds without scraping!",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.2M",
    "color": "#3b82f6",
    "badge": "Parking Sim",
    "releaseDate": "2026-05-15",
    "keywords": [
      "parking game 2d free",
      "parallel parking simulator web",
      "speed valet online",
      "car parking unblocked"
    ],
    "description": "Steer cars into marked valet parking stalls within strict time limits without hitting curbs.",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Gas, reverse, and steer wheel"
      }
    ],
    "instructions": [
      "Drive into highlighted yellow parking bay.",
      "Align car straight and come to a complete stop."
    ],
    "strategies": [
      "Reverse into tight spots for easier front wheel angle adjustment."
    ],
    "faqs": [
      {
        "question": "Are there multiple vehicles?",
        "answer": "Yes, sedans, trucks, and limousines!"
      }
    ]
  },
  {
    "id": "colorclash",
    "slug": "colorclash",
    "subdomain": "stroop",
    "title": "ColorClash: Stroop Reflex Duel",
    "tagline": "Neuro-reaction battle! Match the word or the ink color within 0.8 seconds.",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "980K",
    "color": "#ec4899",
    "badge": "Neuro Reflex",
    "releaseDate": "2026-05-18",
    "keywords": [
      "stroop effect game online",
      "brain reaction test",
      "speed color duel",
      "cognitive reflex test"
    ],
    "description": "Psychological Stroop effect gamified: match the printed ink color or text name against a ruthless countdown.",
    "controls": [
      {
        "key": "Click Color Button",
        "action": "Select match within 1s"
      }
    ],
    "instructions": [
      "Prompt tells you: \"MATCH INK\" or \"MATCH TEXT\".",
      "Select the correct color button before the countdown runs out."
    ],
    "strategies": [
      "Train your brain to ignore font text when matching ink color."
    ],
    "faqs": [
      {
        "question": "Does it calculate ms reaction latency?",
        "answer": "Yes, your average decision latency is benchmarked!"
      }
    ]
  },
  {
    "id": "jumpgrid",
    "slug": "jumpgrid",
    "subdomain": "crossy",
    "title": "JumpGrid: Crossy Cyberway",
    "tagline": "Endless cyber highway hopper! Hop across speeding hovercrafts and laser streams.",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.7M",
    "color": "#10b981",
    "badge": "Cyber Hopper",
    "releaseDate": "2026-05-20",
    "keywords": [
      "crossy road online free",
      "cyber frogger browser",
      "endless hopper unblocked",
      "jump grid arcade"
    ],
    "description": "Hop your cyber frog across futuristic multi-lane highways and high-voltage energy rivers.",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Hop forward, back, left, right"
      }
    ],
    "instructions": [
      "Hop forward to advance lanes.",
      "Avoid speeding cyber cars.",
      "Ride floating energy logs over the river."
    ],
    "strategies": [
      "Watch traffic lanes two rows ahead to plan rhythm stops."
    ],
    "faqs": [
      {
        "question": "Are characters unlockable?",
        "answer": "Yes, earn coins to unlock 10+ voxel avatars!"
      }
    ]
  },
  {
    "id": "quickdraw",
    "slug": "quickdraw",
    "subdomain": "quickdraw",
    "title": "QuickDraw: Millisecond Duel",
    "tagline": "Benchmark your biological reaction time down to the exact millisecond!",
    "category": "arcade",
    "rating": 4.9,
    "playCount": "2.8M",
    "color": "#f59e0b",
    "badge": "Reaction Benchmark",
    "releaseDate": "2026-05-22",
    "keywords": [
      "reaction time test",
      "human benchmark online",
      "quick draw millisecond test",
      "speed reaction test"
    ],
    "description": "The definitive human reaction test: wait through random suspense delay, then click the instant screen flashes red.",
    "controls": [
      {
        "key": "Click Screen",
        "action": "React when signal fires"
      }
    ],
    "instructions": [
      "Wait for screen to turn RED.",
      "Click as fast as possible.",
      "Avoid clicking during WAIT period (False Start)."
    ],
    "strategies": [
      "Keep finger relaxed right on top of mouse button."
    ],
    "faqs": [
      {
        "question": "What is average human reaction time?",
        "answer": "Between 200ms and 250ms for visual stimuli!"
      }
    ]
  },
  {
    "id": "picross-neon",
    "slug": "picross-neon",
    "subdomain": "nonogram",
    "title": "Picross Neon: Cyber Matrix",
    "tagline": "Cyber nonogram logic puzzle! Use row/column numbers to uncover retro pixel art.",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "1.5M",
    "color": "#6366f1",
    "badge": "Logic Matrix",
    "releaseDate": "2026-05-25",
    "keywords": [
      "picross online free",
      "nonogram web puzzle",
      "griddlers unblocked",
      "paint by numbers logic"
    ],
    "description": "Solve logical nonogram matrices using row and column length clues to reveal glowing neon pixel art.",
    "controls": [
      {
        "key": "Left Click",
        "action": "Fill pixel block"
      },
      {
        "key": "Right Click / Toggle",
        "action": "Place X mark"
      }
    ],
    "instructions": [
      "Numbers indicate contiguous blocks of filled pixels.",
      "Deduce which cells must be filled.",
      "Complete the grid without 3 errors."
    ],
    "strategies": [
      "Fill rows where numbers equal the entire grid width first."
    ],
    "faqs": [
      {
        "question": "Are multiple grid sizes supported?",
        "answer": "Yes, 5x5 beginner up to 15x15 expert!"
      }
    ]
  },
  {
    "id": "lasercircuit",
    "slug": "lasercircuit",
    "subdomain": "lasers",
    "title": "LaserCircuit: Mirror Reflection",
    "tagline": "Rotate angled mirrors on a grid to redirect laser beams into optical sensor nodes!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "1.1M",
    "color": "#06b6d4",
    "badge": "Optics Logic",
    "releaseDate": "2026-05-28",
    "keywords": [
      "laser reflection puzzle",
      "optics mirror puzzle web",
      "beam reflection browser",
      "laser circuit game"
    ],
    "description": "Align mirrors and prisms to bounce colored laser beams into target sensors across high-tech circuit boards.",
    "controls": [
      {
        "key": "Click Mirror Tile",
        "action": "Rotate 90 degrees"
      }
    ],
    "instructions": [
      "Laser emitter fires continuous beam.",
      "Rotate angled mirrors to bounce the beam 90°.",
      "Direct beam into all target sensors."
    ],
    "strategies": [
      "Work backward from the target sensors."
    ],
    "faqs": [
      {
        "question": "How many mirror angles are there?",
        "answer": "4 orientations: /, \\, and inverted variants."
      }
    ]
  },
  {
    "id": "hexasort",
    "slug": "hexasort",
    "subdomain": "hexasort",
    "title": "HexaSort Zen: Honeycomb Shuffle",
    "tagline": "Place colored hexagonal stacks! Matching adjacent chips automatically slide and merge.",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "2.3M",
    "color": "#10b981",
    "badge": "Zen Hex Sort",
    "releaseDate": "2026-06-01",
    "keywords": [
      "hexa sort online free",
      "hexagon tile sorting",
      "hex stack puzzle web",
      "honeycomb sort game"
    ],
    "description": "Satisfying hexagonal tile stack sorting puzzle: match colors to trigger automated sliding consolidations.",
    "controls": [
      {
        "key": "Click Hex Cell",
        "action": "Place available stack"
      }
    ],
    "instructions": [
      "Place given stacks of hex chips onto empty honeycomb slots.",
      "Adjacent chips with matching top colors slide together.",
      "Complete stacks of 10 to clear."
    ],
    "strategies": [
      "Group complementary stacks together to create cascading multi-clears."
    ],
    "faqs": [
      {
        "question": "Is there a time limit?",
        "answer": "No timers! Play at your own relaxing pace."
      }
    ]
  },
  {
    "id": "pipemaster",
    "slug": "pipemaster",
    "subdomain": "pipeflux",
    "title": "PipeMaster: Energy Conduit",
    "tagline": "Rotate pipe conduits to connect the cyber power generator directly to the core battery!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "1.1M",
    "color": "#eab308",
    "badge": "Circuit Plumber",
    "releaseDate": "2026-06-05",
    "keywords": [
      "pipe connect puzzle",
      "pipe dream game online",
      "waterworks browser game",
      "plumber puzzle unblocked"
    ],
    "description": "Click pipe segments to rotate them 90 degrees and establish a continuous conduit flow to the battery.",
    "controls": [
      {
        "key": "Click Tile",
        "action": "Rotate pipe segment 90°"
      }
    ],
    "instructions": [
      "Energy enters from the top-left.",
      "Rotate pipe joints to direct current.",
      "Power up the bottom-right battery to win."
    ],
    "strategies": [
      "Trace the path starting from the battery backward."
    ],
    "faqs": [
      {
        "question": "Are extra pipes allowed?",
        "answer": "Yes, only the connected active path matters!"
      }
    ]
  },
  {
    "id": "minimetro-planner",
    "slug": "minimetro-planner",
    "subdomain": "subway",
    "title": "MiniMetro: Transit Grid",
    "tagline": "Connect expanding geometric subway stations before passenger queues overflow!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "1.9M",
    "color": "#ec4899",
    "badge": "Subway Sim",
    "releaseDate": "2026-06-08",
    "keywords": [
      "mini metro browser",
      "subway line management",
      "transit route puzzle",
      "train planner free"
    ],
    "description": "Draw colored train lines between circular, square, and triangular stations to optimize passenger flow.",
    "controls": [
      {
        "key": "Drag Between Stations",
        "action": "Draw rail track"
      }
    ],
    "instructions": [
      "Connect stations with rail lines.",
      "Trains transport passengers to matching shape stations.",
      "Do not let stations overcrowd."
    ],
    "strategies": [
      "Never put more than two identical shape stations in a row on the same line."
    ],
    "faqs": [
      {
        "question": "Do lines have passenger limits?",
        "answer": "Carriages hold up to 6 passengers each!"
      }
    ]
  },
  {
    "id": "sudoku-blitz",
    "slug": "sudoku-blitz",
    "subdomain": "sudoku",
    "title": "Sudoku Blitz: Speed Logic",
    "tagline": "Speed Sudoku with smart conflict highlighting, pencil notes, and live timers!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "2.6M",
    "color": "#3b82f6",
    "badge": "Speed Sudoku",
    "releaseDate": "2026-06-12",
    "keywords": [
      "free sudoku online",
      "fast sudoku game",
      "speed sudoku unblocked",
      "daily sudoku puzzle"
    ],
    "description": "Streamlined, high-speed 6x6 and 9x9 Sudoku logic built for fast keyboard and touch input.",
    "controls": [
      {
        "key": "Click Cell & Type 1-9",
        "action": "Input number"
      }
    ],
    "instructions": [
      "Every row, column, and 3x3 box must contain digits without duplicates.",
      "Highlight conflicts instantly."
    ],
    "strategies": [
      "Scan for rows with only 1 empty cell remaining."
    ],
    "faqs": [
      {
        "question": "Are pencil notes available?",
        "answer": "Yes! Toggle pencil mode anytime."
      }
    ]
  },
  {
    "id": "idle-factory",
    "slug": "idle-factory",
    "subdomain": "factory",
    "title": "IdleFactory: Infinite Forge",
    "tagline": "Incremental factory automation! Build conveyor belts and synthesizers that produce billions.",
    "category": "arcade",
    "rating": 4.8,
    "playCount": "1.5M",
    "color": "#f59e0b",
    "badge": "Idle Clicker",
    "releaseDate": "2026-06-15",
    "keywords": [
      "idle factory game browser",
      "incremental automation game",
      "factorio mini web",
      "free clicker unblocked"
    ],
    "description": "Manufacture gears and quantum circuits in an endless automation clicker that progresses in background tabs.",
    "controls": [
      {
        "key": "Click Forge Button",
        "action": "Produce manual gears"
      },
      {
        "key": "Buy Machines",
        "action": "Automate gears per second"
      }
    ],
    "instructions": [
      "Click to forge gears manually.",
      "Invest in Conveyor Belts and Furnaces for passive generation.",
      "Overclock for prestige multipliers!"
    ],
    "strategies": [
      "Upgrade production multipliers before buying expensive tier-4 assemblers."
    ],
    "faqs": [
      {
        "question": "Does progress save offline?",
        "answer": "Yes! Automated earnings calculate when you return."
      }
    ]
  },
  {
    "id": "mazemaster",
    "slug": "mazemaster",
    "subdomain": "maze",
    "title": "MazeMaster: 3D Raycast Labyrinth",
    "tagline": "Wolfenstein 3D-style raycast labyrinth! Explore neon 3D corridors to find the exit portal.",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "1.6M",
    "color": "#10b981",
    "badge": "3D Raycaster",
    "releaseDate": "2026-06-18",
    "keywords": [
      "3d maze game online",
      "raycaster maze browser",
      "wolfenstein 3d web engine",
      "first person maze"
    ],
    "description": "Explore pseudo-3D raycasted labyrinths in pure HTML5 Canvas with smooth 60 FPS forward navigation.",
    "controls": [
      {
        "key": "WASD / Arrow Keys",
        "action": "Move forward/back and rotate camera"
      }
    ],
    "instructions": [
      "Navigate 3D corridors.",
      "Use the minimap in the corner.",
      "Find the green glowing exit portal."
    ],
    "strategies": [
      "Keep your left hand along the wall to solve any classic maze."
    ],
    "faqs": [
      {
        "question": "Does it require WebGL?",
        "answer": "No! It runs on ultra-fast pure 2D Canvas math."
      }
    ]
  },
  {
    "id": "blockslide",
    "slug": "blockslide",
    "subdomain": "blockpuzzle",
    "title": "BlockSlide: 1010 Neon Grid",
    "tagline": "Place polyomino blocks to complete and clear full rows and columns simultaneously!",
    "category": "puzzle",
    "rating": 4.9,
    "playCount": "2.4M",
    "color": "#06b6d4",
    "badge": "1010 Block Grid",
    "releaseDate": "2026-06-20",
    "keywords": [
      "1010 block puzzle online",
      "wood block puzzle browser",
      "block puzzle unblocked",
      "polyomino puzzle"
    ],
    "description": "Fit polyomino shapes onto the 10x10 matrix. Clear horizontal and vertical lines for explosive combos.",
    "controls": [
      {
        "key": "Click Grid",
        "action": "Place piece"
      }
    ],
    "instructions": [
      "Choose from available piece shapes.",
      "Place onto the 10x10 grid.",
      "Clear complete rows and columns."
    ],
    "strategies": [
      "Keep the 3x3 square zone clear in the center."
    ],
    "faqs": [
      {
        "question": "When does the game end?",
        "answer": "When no remaining pieces can fit onto the board!"
      }
    ]
  },
  {
    "id": "tangram",
    "slug": "tangram",
    "subdomain": "tangram",
    "title": "Tangram: Geometric Origami",
    "tagline": "Rotate and fit 7 flat geometric polygon pieces to match classic silhouettes without overlap!",
    "category": "puzzle",
    "rating": 4.8,
    "playCount": "1.1M",
    "color": "#f59e0b",
    "badge": "Geometric Zen",
    "releaseDate": "2026-06-25",
    "keywords": [
      "tangram game online free",
      "shape fitting puzzle",
      "geometric tangram puzzles",
      "chinese tangram web"
    ],
    "description": "Arrange 7 classic geometric tans (triangles, squares, rhomboids) to fill target artistic silhouettes.",
    "controls": [
      {
        "key": "Drag & Rotate Pieces",
        "action": "Fit polygons into silhouette"
      }
    ],
    "instructions": [
      "Fit all 7 geometric pieces inside the shadow silhouette.",
      "Pieces must touch without overlapping."
    ],
    "strategies": [
      "Anchor the two largest triangles into the broad corners first."
    ],
    "faqs": [
      {
        "question": "How many silhouettes are included?",
        "answer": "50+ animal, bird, and vessel silhouettes!"
      }
    ]
  },
  {
    id: "gravitysplice",
    slug: "gravitysplice",
    subdomain: "splice",
    title: "Gravity Splice: 4-Way Gravitational Puzzle",
    tagline: "Fling quantum spheres across four quadrants, each running conflicting gravitational vectors!",
    category: "physics",
    rating: 4.9,
    playCount: "820K",
    color: "#a855f7",
    badge: "Spatial Gravity",
    releaseDate: "2026-11-10",
    keywords: [
      "gravity splice puzzle",
      "4 quadrant gravity game",
      "spatial physics slingshot",
      "curved gravity trajectory puzzle",
      "gravitational vector game"
    ],
    description: "An ingenious spatial physics puzzle where reality is severed into four quadrants, each exerting independent gravitational forces (down, left, right, and up). Drag and aim slingshots to slingshot your quantum sphere through gravitational boundaries, orbit around the central singularity node, collect all 3 quantum resonance cores, and slip into the goal wormhole.",
    controls: [
      { key: "Click & Drag Backward", action: "Aim and pull slingshot trajectory" },
      { key: "Release Click / Touch", action: "Launch sphere into gravitational slipstream" },
      { key: "Recall Sphere Button", action: "Instantly recall ball to launcher pedestal" },
      { key: "R Key", action: "Reset chamber" }
    ],
    instructions: [
      "Analyze the gravity direction arrows stamped on each of the 4 quadrants.",
      "Pull backward on the glowing sphere to see the slingshot trajectory forecast line.",
      "Release to fling the sphere—as it crosses quadrant borders, gravity immediately curves its flight path.",
      "Collect all 3 golden Quantum Cores to stabilize the exit wormhole receptacle."
    ],
    strategies: [
      "Use opposing quadrants to create continuous circular slingshot loops around the center crosshair.",
      "Gentle launches often work better than maximum power when navigating tight barrier corridors."
    ],
    faqs: [
      {
        question: "Does gravity change instantly when crossing borders?",
        answer: "Yes! The moment the sphere center crosses the quadrant crosshair, the local gravity vector of that quadrant instantly applies at 60 FPS."
      }
    ]
  },
  {
    id: "onebuttonsamurai",
    slug: "onebuttonsamurai",
    subdomain: "samurai",
    title: "One-Button Samurai: Reflex Duel",
    tagline: "Unsheathe, focus, and strike in a single frame. Pure tension reflex duels under the blood moon!",
    category: "arcade",
    rating: 4.9,
    playCount: "1.3M",
    color: "#ef4444",
    badge: "1-Button Reflex",
    releaseDate: "2026-11-10",
    keywords: [
      "one button samurai game",
      "reflex duel browser game",
      "samurai quick draw online",
      "sumi-e sword duel game",
      "instant kill reflex arcade"
    ],
    description: "A pure, atmospheric reflex duel rendered in traditional Japanese sumi-e ink wash style. Under a rising blood moon and drifting sakura petals, face off against master swordsmen. Control everything with a single button: hold to focus and unsheathe; release the exact millisecond the crimson strike kanji (斬) flashes. First clean strike wins—one frame separates glory from defeat.",
    controls: [
      { key: "Hold [Space] or [Tap]", action: "Focus stance and draw blade back" },
      { key: "Release on Signal (斬)", action: "Unleash instantaneous fatal strike" },
      { key: "R Key", action: "Bow and reset duel" }
    ],
    instructions: [
      "Hold Spacebar or hold your finger down on the screen to adopt the quick-draw iaijutsu stance.",
      "Wait patiently in the bamboo wind—releasing too early results in a false start and instant counter-strike.",
      "The instant the red strike signal flashes, release immediately to cut down your opponent before their blade connects."
    ],
    strategies: [
      "Listen to the subtle blade scrape and watch the opponent eyes—different masters have varying windup delays.",
      "Stay calm: panicking on false twitches will forfeit your honor streak."
    ],
    faqs: [
      {
        question: "Can I play this on touchscreens?",
        answer: "Yes! Any touch or click acts as the single duel button."
      }
    ]
  },
  {
    id: "radiosignal88",
    slug: "radiosignal88",
    subdomain: "radio",
    title: "Radio Signal 88: Wasteland Triangulation",
    tagline: "Sweep analog frequencies and rotate azimuth antennas to triangulate lost distress beacons across the wasteland!",
    category: "puzzle",
    rating: 4.8,
    playCount: "670K",
    color: "#10b981",
    badge: "Analog Mystery",
    releaseDate: "2026-11-10",
    keywords: [
      "radio signal 88 game",
      "analog radio tuner puzzle",
      "wasteland triangulation mystery",
      "shortwave frequency game",
      "morse code distress beacon"
    ],
    description: "Operate a heavy vintage vacuum-tube heterodyne receiver inside an underground fallout shelter. Turn the analog frequency dial from 88.0 to 108.0 MHz while sweeping your directional azimuth antenna to maximize the needle on the analog VU signal strength meter. Decode static-drenched distress transmissions and triangulate the coordinates of the lost Safe Haven enclave.",
    controls: [
      { key: "Frequency Slider / Drag", action: "Tune receiver frequency (88.0 - 108.0 MHz)" },
      { key: "Azimuth Slider / Drag", action: "Rotate directional antenna azimuth (0° - 360°)" },
      { key: "Decode Beacon Button", action: "Decrypt transmission when signal strength exceeds 85%" },
      { key: "R Key", action: "Re-calibrate radio unit" }
    ],
    instructions: [
      "Slide the frequency dial to scan for broadcast carrier waves across the VHF band.",
      "When the oscilloscope detects audio waveforms or static fades, adjust the antenna azimuth to lock direction.",
      "Push Signal Strength above 85% to activate the DECODE BEACON terminal.",
      "Decode all 3 emergency beacons to triangulate the safe haven extraction sector."
    ],
    strategies: [
      "Roughly find the frequency first where static quiets down, then fine-tune the azimuth angle to spike the VU meter needle.",
      "Read the decoded transcript logs for lore clues about survivor outposts."
    ],
    faqs: [
      {
        question: "Does the radio use real audio synthesis?",
        answer: "Yes! The game procedurally generates heterodyne carrier whistles, radio static crackle, and signal tones via the Web Audio API."
      }
    ]
  }
];

export const CATEGORIES = [
  {
    "id": "all",
    "name": "All Games",
    "icon": "🎮",
    "description": "Explore our complete library of free online browser games"
  },
  {
    "id": "word",
    "name": "Word Puzzles",
    "icon": "📝",
    "description": "Brain-teasing vocabulary, daily challenges, and word deduction games"
  },
  {
    "id": "physics",
    "name": "Physics & Drop",
    "icon": "🍉",
    "description": "Engaging merging, gravity drops, and bouncing simulation puzzles"
  },
  {
    "id": "puzzle",
    "name": "Logic Puzzles",
    "icon": "🧩",
    "description": "Math, spatial reasoning, and deduction games that sharpen your mind"
  },
  {
    "id": "card",
    "name": "Card & Solitaire",
    "icon": "🃏",
    "description": "Timeless single-player card classics, Klondike, and patience games"
  },
  {
    "id": "arcade",
    "name": "Arcade & Reflex",
    "icon": "⚡",
    "description": "High-octane retro reflex tests, speed challenges, and modern arcade classics"
  }
];
