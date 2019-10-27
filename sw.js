self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing ');
  event.waitUntil(caches.open('static')
  .then(function(cache){
    cache.addAll([
    '/',
    '/index.html',
    '/app.js',
    '/style.css',
    '/sw.js',
    
    '/images/icons/app-icon-72x72.png',
    '/manifest.json',
    '/images/tttmarqlrg.gif',
    '/Metal Clang-SoundBible.com-1363525732.wav',
    '/Metroid_Door-Brandino480-995195341.wav',
    '/Ta Da-SoundBible.com-1884170640.wav'
      ]);
  })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating');
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching');
  event.respondWith(
  caches.match(event.request)
    .then(function(res){
       if(res)
       {
        return res;
       }
       else
       {
        return fetch(event.request);
       }
    })
    );
});