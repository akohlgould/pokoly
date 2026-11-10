// Viral Marketing, Challenge Links & Discoverability Engine

export interface ChallengeData {
  gameTitle: string;
  gameSlug: string;
  subdomain: string;
  score: number | string;
  playerName?: string;
}

export function generateShareUrl(data: ChallengeData): string {
  const base = typeof window !== 'undefined' ? window.location.origin : 'https://pokoly.com';
  const url = new URL(`${base}/games/${data.gameSlug}`);
  url.searchParams.set('challenge', data.score.toString());
  if (data.playerName) {
    url.searchParams.set('challenger', data.playerName);
  }
  return url.toString();
}

export function generateBragText(data: ChallengeData): string {
  const url = generateShareUrl(data);
  return `🎮 I just scored ${data.score} in ${data.gameTitle}!
⚡ Think you can beat me?
👉 Play free with no download: ${url}`;
}

export function shareToSocial(platform: 'twitter' | 'whatsapp' | 'facebook' | 'reddit' | 'copy', data: ChallengeData) {
  const text = encodeURIComponent(generateBragText(data));
  const url = encodeURIComponent(generateShareUrl(data));

  let shareUrl = '';
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${text}`;
      break;
    case 'whatsapp':
      shareUrl = `https://api.whatsapp.com/send?text=${text}`;
      break;
    case 'reddit':
      shareUrl = `https://reddit.com/submit?url=${url}&title=${encodeURIComponent(`Can anyone beat my score of ${data.score} in ${data.gameTitle}?`)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'copy':
      if (navigator.clipboard) {
        navigator.clipboard.writeText(generateBragText(data));
      }
      return;
  }

  if (shareUrl && typeof window !== 'undefined') {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  }
}

export function generateEmbedCode(gameSlug: string, gameTitle: string): string {
  const base = typeof window !== 'undefined' ? window.location.origin : 'https://pokoly.com';
  return `<iframe src="${base}/games/${gameSlug}" width="100%" height="650" frameborder="0" allowfullscreen style="border:none;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.4);"></iframe>
<p style="font-size:12px;color:#888;text-align:center;">Play <a href="${base}/games/${gameSlug}" target="_blank" style="color:#06b6d4;text-decoration:none;font-weight:bold;">${gameTitle}</a> free on <a href="${base}" target="_blank" style="color:#6366f1;">Pokoly</a></p>`;
}
