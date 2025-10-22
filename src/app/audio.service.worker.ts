self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open('audio-cache').then((cache) => {
      return cache;
    })
  );
});

self.addEventListener('fetch', (event: any) => {
  if (event.request.url.includes('.mp3')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((response) => {
          return caches.open('audio-cache').then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});