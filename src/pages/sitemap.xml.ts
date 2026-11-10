import type { APIRoute } from 'astro';
import { GAMES, CATEGORIES } from '../data/games';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://pokoly.com';
  const lastMod = new Date().toISOString().split('T')[0];

  const urls: { loc: string; priority: string; changefreq: string }[] = [
    { loc: baseUrl, priority: '1.0', changefreq: 'daily' },
    ...CATEGORIES.filter(c => c.id !== 'all').map(cat => ({
      loc: `${baseUrl}/categories/${cat.id}`,
      priority: '0.8',
      changefreq: 'weekly'
    })),
    ...GAMES.map(game => ({
      loc: `${baseUrl}/games/${game.slug}`,
      priority: '0.9',
      changefreq: 'weekly'
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
