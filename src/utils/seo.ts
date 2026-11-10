import type { GameMeta } from '../data/games';

export function generateGameSchema(game: GameMeta, siteUrl: string) {
  const cleanSiteUrl = siteUrl.replace(/\/$/, '');
  const gameUrl = `${cleanSiteUrl}/games/${game.slug}/`;
  const imageUrl = `${cleanSiteUrl}/logos/${game.slug}.svg`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: game.title,
      headline: `${game.title} - Play Free Online`,
      description: game.description,
      url: gameUrl,
      image: imageUrl,
      genre: [game.category, 'Casual Game', 'Browser Game'],
      gamePlatform: ['Web Browser', 'Mobile Browser', 'Desktop Browser', 'PWA'],
      applicationCategory: 'BrowserGame',
      operatingSystem: 'Any',
      inLanguage: 'en',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: game.rating.toString(),
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1240'
      },
      datePublished: game.releaseDate,
      author: {
        '@type': 'Organization',
        name: 'Pokoly',
        url: `${cleanSiteUrl}/`
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pokoly',
        url: `${cleanSiteUrl}/`
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${cleanSiteUrl}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Games',
          item: `${cleanSiteUrl}/#catalog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: game.title,
          item: gameUrl
        }
      ]
    },
    ...(game.faqs && game.faqs.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: game.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }] : [])
  ];
}
