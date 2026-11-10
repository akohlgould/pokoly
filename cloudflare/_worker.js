/**
 * Cloudflare Edge Worker: Wildcard Subdomain & Edge Router for Pokoly
 *
 * Automatically routes subdomains like:
 *   fruits.pokoly.com     -> /games/fruit-merge
 *   words.pokoly.com      -> /games/word-guess
 *   wordle.pokoly.com     -> /games/word-guess
 *   timeline.pokoly.com   -> /games/chronotrail
 *   nanopoker.pokoly.com  -> /games/nanojoker
 *   pegdungeon.pokoly.com -> /games/pegdungeon
 *
 * Root domain (pokoly.com) serves the master arcade portal.
 */

const SUBDOMAIN_MAP = {
  // Flagship titles & popular aliases
  'fruits': '/games/fruit-merge',
  'fruit': '/games/fruit-merge',
  'merge': '/games/fruit-merge',
  'suika': '/games/fruit-merge',
  'watermelon': '/games/fruit-merge',

  'words': '/games/word-guess',
  'word': '/games/word-guess',
  'wordguess': '/games/word-guess',
  'wordle': '/games/word-guess',

  'timeline': '/games/chronotrail',
  'chronotrail': '/games/chronotrail',
  'history': '/games/chronotrail',

  'nanopoker': '/games/nanojoker',
  'nanojoker': '/games/nanojoker',
  'poker': '/games/nanojoker',
  'balatro': '/games/nanojoker',

  'pegdungeon': '/games/pegdungeon',
  'peg': '/games/pegdungeon',
  'peggle': '/games/pegdungeon',
  'pachinko': '/games/pegdungeon',

  'orbitsurvivors': '/games/orbit-survivors',
  'orbit': '/games/orbit-survivors',
  'survivors': '/games/orbit-survivors',

  'connections': '/games/synapse',
  'synapse': '/games/synapse',

  'wordhedge': '/games/wordhedge',
  'hedge': '/games/wordhedge',

  'semantic': '/games/semanticlimb',
  'semanticlimb': '/games/semanticlimb',

  'geopixel': '/games/geopixel',
  'landmark': '/games/geopixel',

  'numbers': '/games/numberdrop',
  'numberdrop': '/games/numberdrop',

  'cryptogram': '/games/cipherpunk',
  'cipherpunk': '/games/cipherpunk',

  'vowelshift': '/games/vowelshift',
  'lexifall': '/games/lexifall',

  'radicals': '/games/kanjiforge',
  'kanji': '/games/kanjiforge',
  'kanjiforge': '/games/kanjiforge',

  '2048': '/games/neon-2048',
  'neon2048': '/games/neon-2048',

  'solitaire': '/games/solitaire',
  'klondike': '/games/solitaire',
  'cards': '/games/solitaire',

  'snake': '/games/cyber-snake',
  'cybersnake': '/games/cyber-snake',

  'minesweeper': '/games/minesweeper',
  'mines': '/games/minesweeper',

  'breakout': '/games/breakout',
  'bricks': '/games/breakout',

  'typing': '/games/speed-typing',
  'speedtyping': '/games/speed-typing',

  'sudoku': '/games/sudoku',
  'flappy': '/games/flappy-cyber',
  'flappycyber': '/games/flappy-cyber',

  'chronowave': '/games/chronowave',
  'sonar': '/games/chronowave',

  'quantumweave': '/games/quantumweave',
  'quantum': '/games/quantumweave',

  'gravityforge': '/games/gravityforge',
  'gravity': '/games/gravityforge',

  'synthia': '/games/synthia',
  'synth': '/games/synthia',

  'morphoflora': '/games/morphoflora',
  'flora': '/games/morphoflora',

  'prismpulse': '/games/prismpulse',
  'prism': '/games/prismpulse',

  'clockworkheist': '/games/clockworkheist',
  'heist': '/games/clockworkheist',

  'geothermal': '/games/geothermal',
  'neurolink': '/games/neurolink',
  'neuro': '/games/neurolink',

  'tectonicdrift': '/games/tectonicdrift',
  'tectonic': '/games/tectonicdrift',
};

function getSubdomain(hostname) {
  const host = hostname.toLowerCase();
  
  if (host.endsWith('.pokoly.com')) {
    const sub = host.replace('.pokoly.com', '').split('.').pop();
    return sub && sub !== 'www' ? sub : null;
  }
  
  if (host.endsWith('.pages.dev')) {
    const prefix = host.replace('.pages.dev', '');
    const parts = prefix.split('.');
    if (parts.length > 1) {
      return parts[0];
    }
    return null;
  }
  
  const parts = host.split('.');
  if (parts.length >= 3 && parts[0] !== 'www') {
    return parts[0];
  }
  
  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const sub = getSubdomain(url.hostname);

    if (sub) {
      const targetPath = SUBDOMAIN_MAP[sub];

      if (targetPath) {
        // If visiting root of subdomain, route to the target game
        if (url.pathname === '/' || url.pathname === '') {
          // Attempt 1: Fetch directory index asset
          const targetUrl = new URL(request.url);
          targetUrl.pathname = `${targetPath}/index.html`;
          
          try {
            const res = await env.ASSETS.fetch(new Request(targetUrl.toString(), request));
            if (res && res.status < 400) {
              return res;
            }
          } catch (e) {}

          // Attempt 2: Fetch directory slash
          targetUrl.pathname = `${targetPath}/`;
          try {
            const res2 = await env.ASSETS.fetch(new Request(targetUrl.toString(), request));
            if (res2 && res2.status < 400) {
              return res2;
            }
          } catch (e) {}

          // Fallback: Clean 302 redirect directly to main game route
          return Response.redirect(`https://pokoly.com${targetPath}`, 302);
        }
      }
    }

    // Default: serve standard static asset from Cloudflare Pages output
    return env.ASSETS.fetch(request);
  }
};
