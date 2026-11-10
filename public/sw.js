// Pokoly Progressive Web App Service Worker
const CACHE_VERSION = 'pokoly-v2';
const STATIC_CACHE = `static-${CACHE_VERSION}`;

// Precache only immutable shell assets — NEVER cache HTML routes like '/' here!
const PRECACHE_ASSETS = [
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // Purge all old caches including the broken 'pokoly-cache-v1'
          if (key !== STATIC_CACHE) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. HTML Navigation Requests -> ALWAYS Network-First
  // This ensures the browser always receives the latest HTML with matching hashed CSS/JS links.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(async () => {
          // Offline fallback only when network fails completely
          const cached = await caches.match(event.request);
          if (cached) return cached;
          return caches.match('/');
        })
    );
    return;
  }

  // 2. Static Assets (/_astro/*, /logos/*, /screenshots/*, fonts) -> Stale-While-Revalidate / Cache-First
  if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/logos/') || url.pathname.startsWith('/screenshots/')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // 3. All other requests -> Network direct with cache fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});

