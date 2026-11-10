import type { GameMeta } from '../data/games';

export function generateGameSchema(game: GameMeta, siteUrl: string) {
  const gameUrl = `${siteUrl}/games/${game.slug}`;
  const subdomainUrl = `https://${game.subdomain}.pokoly.com`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: game.title,
      description: game.description,
      url: gameUrl,
      sameAs: [subdomainUrl],
      genre: [game.category, 'Casual Game', 'Browser Game'],
      gamePlatform: ['Web Browser', 'Mobile Browser', 'Desktop Browser', 'PWA'],
      applicationCategory: 'Game',
      operatingSystem: 'Any',
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
        url: siteUrl
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
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Games',
          item: `${siteUrl}/#catalog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: game.title,
          item: gameUrl
        }
      ]
    },
    {
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
    }
  ];
}
