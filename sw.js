const CACHE_NAME = 'english-kids-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon.svg'
];

// Fayllarni keshga saqlash
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Offlayn rejimda ishlatish
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
