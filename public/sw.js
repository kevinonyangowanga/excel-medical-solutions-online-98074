
const CACHE_NAME = 'excel-medical-v1';
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services', 
  '/industries',
  '/contact',
  '/favicon.ico',
  '/lovable-uploads/79b6e9f8-e9dc-45a9-807e-b50a03fae874.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
