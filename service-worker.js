const cacheName = 'pwa-demo-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assetsToCache))
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
