/**
 * Cloudflare Edge Worker: Wildcard Subdomain Router for Pokoly
 *
 * Maps subdomains like:
 *   words.pokoly.com      -> /games/word-guess
 *   fruits.pokoly.com     -> /games/fruit-merge
 *   2048.pokoly.com       -> /games/neon-2048
 *   solitaire.pokoly.com  -> /games/solitaire
 *   snake.pokoly.com      -> /games/cyber-snake
 *   minesweeper.pokoly.com-> /games/minesweeper
 *   breakout.pokoly.com   -> /games/breakout
 *
 * Root domain (pokoly.com / www.pokoly.com) serves the master arcade portal.
 */

const SUBDOMAIN_MAP = {
  'words': '/games/word-guess',
  'wordguess': '/games/word-guess',
  'fruits': '/games/fruit-merge',
  'merge': '/games/fruit-merge',
  '2048': '/games/neon-2048',
  'solitaire': '/games/solitaire',
  'cards': '/games/solitaire',
  'snake': '/games/cyber-snake',
  'minesweeper': '/games/minesweeper',
  'mines': '/games/minesweeper',
  'breakout': '/games/breakout',
  'bricks': '/games/breakout',
  'connections': '/games/synapse',
  'lexifall': '/games/lexifall',
  'timeline': '/games/chronotrail',
  'chronotrail': '/games/chronotrail',
  'vowelshift': '/games/vowelshift',
  'cryptogram': '/games/cipherpunk',
  'numbers': '/games/numberdrop',
  'geopixel': '/games/geopixel',
  'semantic': '/games/semanticlimb',
  'wordhedge': '/games/wordhedge',
  'radicals': '/games/kanjiforge',
  'nanopoker': '/games/nanojoker',
  'nanojoker': '/games/nanojoker',
  'orbitsurvivors': '/games/orbit-survivors',
  'pegdungeon': '/games/pegdungeon',
  'typing': '/games/speed-typing',
  'sudoku': '/games/sudoku',
  'flappy': '/games/flappy-cyber',
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const parts = host.split('.');

    // Check if accessing via subdomain (e.g. wordle.pokoly.com)
    // For localhost testing, parts can be [subdomain, localhost] or similar
    if (parts.length >= 3 && parts[0] !== 'www') {
      const sub = parts[0];
      const targetPath = SUBDOMAIN_MAP[sub];

      // If at root of the subdomain and a mapping exists, rewrite to the game page
      if (targetPath && (url.pathname === '/' || url.pathname === '')) {
        url.pathname = targetPath;
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
    }

    // Default: serve standard asset from Cloudflare Pages static output
    return env.ASSETS.fetch(request);
  }
};
