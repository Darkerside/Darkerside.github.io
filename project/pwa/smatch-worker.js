importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
//importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log('Workbox successfully loaded');

} else {
    console.log(`Workbox failed to loaded`);
}
/* WORKBOX SCRIPT STARTED */
workbox.precaching.precacheAndRoute([
    { url: 'https://darkerside.github.io/project/pwa/index.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/manifest.json', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/index.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/team.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/match.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/player.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/push.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/components/nav.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/components/pages/home.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/components/pages/statistic.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/components/pages/saved.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/components/pages/about.html', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/css/styles.css', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/css/materialize.min.css', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/css/materialdesignicons.min.css', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/materialize.min.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/jquery-3.1.1.min.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/idb.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/main.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/nav.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/dom.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/api.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/team.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/match.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/player.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/js/db.js', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/fonts/materialdesignicons-webfont.woff', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/fonts/materialdesignicons-webfont.woff2', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-512.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-384.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-256.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-192.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-152.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-144.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-128.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-96.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-72.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/icon-apple.jpg', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/sidebar.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/player.png', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/luminix-teal.jpg', revision: '1' },
    { url: 'https://darkerside.github.io/project/pwa/assets/images/mine.jpg', revision: '1' },
]);


// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);
 
// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp('https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'football-api',
  })
)

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
     new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30days
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://darkerside.github.io/project/pwa/components/'),
    new workbox.strategies.CacheFirst()
);

self.addEventListener('push', function(event) {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  let options = {
    body: body,
    icon: 'img/icon-apple.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});