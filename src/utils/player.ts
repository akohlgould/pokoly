// Player Progression, Retention, Daily Streak & Gamification System
// Stored 100% client-side in localStorage for zero server costs

export interface Quest {
  id: string;
  title: string;
  description: string;
  target: number;
  progress: number;
  completed: boolean;
  xpReward: number;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  desc: string;
  icon: string;
  unlocked: boolean;
}

export interface PlayerProfile {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  streakProtected: boolean;
  favorites: string[];
  recentGames: string[];
  badges: Record<string, boolean>;
  quests: Quest[];
  questsDate: string;
  soundEnabled: boolean;
}

const STORAGE_KEY = 'pokoly_player_profile';

const LEVEL_TITLES = [
  'Rookie Gamer',        // Lvl 1
  'Puzzle Explorer',     // Lvl 2
  'Streak Starter',      // Lvl 3
  'Combo Builder',       // Lvl 4
  'Speed Champion',      // Lvl 5
  'High-Score Hero',     // Lvl 6
  'Arcade Master',       // Lvl 7
  'Grandmaster',         // Lvl 8
  'Pokoly Legend',       // Lvl 9
  'Mythic Player'        // Lvl 10+
];

export const ALL_BADGES: { id: string; name: string; desc: string; icon: string }[] = [
  { id: 'first_play', name: 'First Jump', desc: 'Played your first game on Pokoly', icon: '🎮' },
  { id: 'streak_3', name: 'On Fire', desc: 'Maintained a 3-day daily play streak', icon: '🔥' },
  { id: 'streak_7', name: 'Weekly Master', desc: 'Maintained a 7-day daily streak', icon: '👑' },
  { id: 'try_3_genres', name: 'Genre Hopper', desc: 'Played 3 different game categories', icon: '🧭' },
  { id: 'brag_shared', name: 'Social Star', desc: 'Shared a high score or challenged a friend', icon: '📣' },
  { id: 'score_2048', name: 'Neon Fusion', desc: 'Reached 2048 in Neon 2048', icon: '✨' },
  { id: 'melon_made', name: 'Giant Watermelon', desc: 'Fused the ultimate Watermelon in Suika', icon: '🍉' },
  { id: 'word_ace', name: 'Lexicon King', desc: 'Solved Word Guess on attempt 1, 2, or 3', icon: '💡' },
];

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function generateDailyQuests(): Quest[] {
  return [
    {
      id: 'play_any_2',
      title: 'Double Trouble',
      description: 'Play 2 different games today',
      target: 2,
      progress: 0,
      completed: false,
      xpReward: 150,
      icon: '🎯'
    },
    {
      id: 'get_score',
      title: 'High Score Hunter',
      description: 'Score 100+ points in any arcade or puzzle game',
      target: 100,
      progress: 0,
      completed: false,
      xpReward: 200,
      icon: '⚡'
    },
    {
      id: 'share_or_fav',
      title: 'Spread the Vibe',
      description: 'Favorite a game or challenge a friend',
      target: 1,
      progress: 0,
      completed: false,
      xpReward: 100,
      icon: '❤️'
    }
  ];
}

class PlayerManager {
  private profile: PlayerProfile;
  private listeners: (() => void)[] = [];

  constructor() {
    this.profile = this.loadProfile();
    this.checkDailyStreak();
  }

  private loadProfile(): PlayerProfile {
    if (typeof window === 'undefined') {
      return this.defaultProfile();
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...this.defaultProfile(), ...parsed };
      }
    } catch (e) {}

    return this.defaultProfile();
  }

  private defaultProfile(): PlayerProfile {
    return {
      xp: 0,
      level: 1,
      streak: 1,
      lastActiveDate: getTodayString(),
      streakProtected: false,
      favorites: [],
      recentGames: [],
      badges: {},
      quests: generateDailyQuests(),
      questsDate: getTodayString(),
      soundEnabled: true,
    };
  }

  private save() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.profile));
      this.listeners.forEach(fn => fn());
    } catch (e) {}
  }

  public subscribe(fn: () => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  public getProfile(): PlayerProfile {
    return this.profile;
  }

  public getTitle(): string {
    const idx = Math.min(this.profile.level - 1, LEVEL_TITLES.length - 1);
    return LEVEL_TITLES[Math.max(0, idx)];
  }

  public getXPForNextLevel(): number {
    return this.profile.level * 250;
  }

  public getLevelProgress(): { current: number; max: number; percent: number } {
    const max = this.getXPForNextLevel();
    const current = this.profile.xp;
    const percent = Math.min(100, Math.floor((current / max) * 100));
    return { current, max, percent };
  }

  public addXP(amount: number, reason?: string): { leveledUp: boolean; newLevel: number } {
    this.profile.xp += amount;
    let leveledUp = false;

    while (this.profile.xp >= this.getXPForNextLevel()) {
      this.profile.xp -= this.getXPForNextLevel();
      this.profile.level += 1;
      leveledUp = true;
    }

    this.save();
    return { leveledUp, newLevel: this.profile.level };
  }

  private checkDailyStreak() {
    const today = getTodayString();
    if (this.profile.lastActiveDate === today) {
      // Already checked in today
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

      if (this.profile.lastActiveDate === yesterdayStr) {
        // Consecutive day! Streak grows
        this.profile.streak += 1;
        this.addXP(100 * this.profile.streak, 'Daily Streak Bonus');
        if (this.profile.streak >= 3) this.unlockBadge('streak_3');
        if (this.profile.streak >= 7) this.unlockBadge('streak_7');
      } else {
        // Streak broke unless protected
        if (!this.profile.streakProtected) {
          this.profile.streak = 1;
        }
      }
      this.profile.lastActiveDate = today;
    }

    // Refresh daily quests if new calendar day
    if (this.profile.questsDate !== today) {
      this.profile.quests = generateDailyQuests();
      this.profile.questsDate = today;
    }

    this.save();
  }

  public trackGamePlay(gameSlug: string) {
    if (!this.profile.recentGames.includes(gameSlug)) {
      this.profile.recentGames.unshift(gameSlug);
      if (this.profile.recentGames.length > 8) this.profile.recentGames.pop();
    }
    this.unlockBadge('first_play');
    this.progressQuest('play_any_2', 1);
    this.addXP(50, 'Game Played');
    this.save();
  }

  public progressQuest(questId: string, amount: number) {
    const quest = this.profile.quests.find(q => q.id === questId);
    if (quest && !quest.completed) {
      quest.progress = Math.min(quest.target, quest.progress + amount);
      if (quest.progress >= quest.target) {
        quest.completed = true;
        this.addXP(quest.xpReward, `Completed Quest: ${quest.title}`);
      }
      this.save();
    }
  }

  public unlockBadge(badgeId: string): boolean {
    if (!this.profile.badges[badgeId]) {
      this.profile.badges[badgeId] = true;
      this.addXP(200, 'Unlocked Badge');
      this.save();
      return true;
    }
    return false;
  }

  public toggleFavorite(gameSlug: string): boolean {
    const idx = this.profile.favorites.indexOf(gameSlug);
    let isFav = false;
    if (idx >= 0) {
      this.profile.favorites.splice(idx, 1);
      isFav = false;
    } else {
      this.profile.favorites.push(gameSlug);
      isFav = true;
      this.progressQuest('share_or_fav', 1);
    }
    this.save();
    return isFav;
  }

  public isFavorite(gameSlug: string): boolean {
    return this.profile.favorites.includes(gameSlug);
  }
}

export const player = new PlayerManager();
