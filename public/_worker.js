/**
 * Cloudflare Edge Worker for Pokoly
 * Serves static assets directly from Cloudflare Pages output.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
