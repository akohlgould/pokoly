// Pokoly Interstitial & Rewarded Ad Break Manager

import { AD_CONFIG } from '../config/ads';

let lastAdTimestamp = 0;

export function triggerAdBreak(placement: string, onDone: () => void) {
  if (!AD_CONFIG.enabled) {
    onDone();
    return;
  }

  const now = Date.now();
  const elapsed = (now - lastAdTimestamp) / 1000;

  // Respect player cooldown
  if (elapsed < AD_CONFIG.interstitialCooldownSeconds) {
    onDone();
    return;
  }

  lastAdTimestamp = now;

  // If AdinPlay
  if (AD_CONFIG.provider === 'adinplay' && typeof (window as any).show_ad !== 'undefined') {
    try {
      (window as any).show_ad(onDone);
      return;
    } catch (e) {}
  }

  // Fallback / default
  onDone();
}

