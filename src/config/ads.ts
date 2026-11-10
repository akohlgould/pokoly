// Central Monetization & Ad Network Configuration for Pokoly.com
// Supports Google AdSense, AdinPlay, Monetag, and custom direct sponsors

export interface AdNetworkConfig {
  enabled: boolean;
  provider: 'adsense' | 'adinplay' | 'monetag' | 'custom';
  adsenseClientId?: string;      // e.g. 'ca-pub-XXXXXXXXXXXXXXXX'
  adinplayGameId?: string;       // AdinPlay Game ID
  monetagZoneId?: string;        // Monetag Zone ID
  refreshIntervalSeconds: number;// Standard viewability auto-refresh (45-60s)
  interstitialCooldownSeconds: number; // Minimum seconds between interstitial ad breaks
}

export const AD_CONFIG: AdNetworkConfig = {
  // Toggle to true once your account is approved
  enabled: false,
  provider: 'adsense',
  adsenseClientId: '',
  adinplayGameId: '',
  monetagZoneId: '',
  refreshIntervalSeconds: 45, // Multiplies impressions 5x-10x on long play sessions
  interstitialCooldownSeconds: 90, // Prevents player fatigue
};

export const AD_SLOTS = {
  leaderboardTop: {
    format: '728x90',
    mobileFormat: '320x50',
    id: 'pokoly-slot-top-leaderboard'
  },
  sidebarRectangle: {
    format: '300x250',
    id: 'pokoly-slot-sidebar-rect'
  },
  footerBanner: {
    format: '970x90',
    mobileFormat: '320x50',
    id: 'pokoly-slot-footer-banner'
  },
  gameOverInterstitial: {
    format: 'interstitial',
    id: 'pokoly-slot-gameover-break'
  }
};

