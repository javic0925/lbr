var CACHE_NAME = 'my-site-cache-v23';
var urlsToCache = [
  "./Assets/DJS/Carlos Milan | En Vivo.webp",
  "./Assets/DJS/DJ Ale GT | En Vivo.webp",
  "./Assets/DJS/DJ Blackout | En Vivo.webp",
  "./Assets/DJS/DJ Brothers | En Vivo.webp",
  "./Assets/DJS/DJ Gomez | En Vivo.webp",
  "./Assets/DJS/DJ Javi | En Vivo.webp",
  "./Assets/DJS/Maki | En Vivo.webp",
  "./Assets/Icons/Home.svg",
  "./Assets/Icons/Info.svg",
  "./Assets/Icons/like.svg",
  "./Assets/Icons/share.svg",
  "./Assets/Icons/Speech.svg",
  "./Assets/Icons/tiktok.svg",
  "./Assets/Icons/iconmonstr-facebook-messenger-1.svg",
  "./Assets/Icons/iconmonstr-instagram-14.svg",
  "./Assets/Icons/android-chrome-192x192.png",
  "./Assets/Icons/android-chrome-512x512.png",
  "./Assets/Icons/apple-touch-icon.png",
  "./Assets/Icons/favicon-16x16.png",
  "./Assets/Icons/favicon-32x32.png",
  "./Assets/Icons/favicon.ico",
  "./Assets/Icons/iconmonstr-telegram-4.svg",
  "./Assets/Icons/iconmonstr-user-5.svg",
  "./Assets/Imgs/LaBoom.webp",
  "./Assets/Imgs/LBBack.png",
  "./Assets/Imgs/Logo.webp",
  "./Assets/Imgs/LogoXmas-2.webp",
  "./Assets/Imgs/LaboomNav.webp",
  "./Assets/Imgs/LBRValentineCover.webp",
  "./Assets/Imgs/LBRValentineLogo.webp",
  "./Assets/screenshots/2022-08-14 18.29.07.jpg",
  "./Assets/screenshots/2022-08-14 18.29.18.jpg",
  "./Assets/screenshots/2022-08-14 18.29.22.jpg",
  "./js/cover.js",
  "./js/nav.js",
  "./js/player.js",
  "./js/showTab.js",
  "./js/share.js",
  "./Styles/style.css",
  "./style.css",
  "./index.html",
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Update a service worker
self.addEventListener('activate', function (event) {

  var cacheAllowlist = ['my-site-cache-v23'];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});