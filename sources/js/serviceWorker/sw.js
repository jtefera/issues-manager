self.addEventListener('install', function(event) {
    // pre cache a load of stuff:
    event.waitUntil(
        caches.open('myapp-static-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/js/bundle.js',
                '/css/style.css',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request);
    event.respondWith(
        /*caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })*/
        fetch(event.request)
    );
});
