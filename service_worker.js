const cacheName = 'cyrillic';
const precacheResources = [
    './',
    'index.html',
    'favicon.ico',
    'js/main.js',
    'css/main.css',
    'img/icon-192.png',
    'img/icon-512.png',
    'img/apple-touch-icon.png',
    'bootstrap/bootstrap.min.css',
    'manifest.json',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                    return cache.addAll(precacheResources)
                }
            )
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }));
});
