const cacheName = 'cyrillic';
const precacheResources = [
    './',
    'index.html',
    'js/main.js',
    'css/main.css',
    'img/flag.png',
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
