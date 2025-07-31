const CACHE_NAME = 'hoerskool-president-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/gallery.min.css',
  '/js/gallery.min.js',
  '/img/logo.png',
  '/img/gallery.jpg',
  '/gallery/aca-1.jpg',
  '/gallery/aca-2.jpg',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
