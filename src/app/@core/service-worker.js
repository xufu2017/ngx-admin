import {
    precacheAndRoute
  } from 'workbox-precaching'
  import {
    registerRoute
  } from 'workbox-routing'
  import {
    StaleWhileRevalidate
  } from 'workbox-strategies'
  import {
    CacheFirst
  } from 'workbox-strategies'
  import {
    ExpirationPlugin
  } from 'workbox-expiration'
  import {
    CacheableResponsePlugin
  } from 'workbox-cacheable-response'
  import {
    NetworkFirst
  } from 'workbox-strategies';
  import {
    Queue, BroadcastChannel
  } from 'workbox-background-sync';
  /*
    config
  */
  precacheAndRoute(self.__WB_MANIFEST);
  
  /*
    caching strategies
  */
  
  registerRoute(
    ({
      url
    }) => url.host.startsWith('fonts.g'),
    new CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 30,
        }),
        new CacheableResponsePlugin({
          statuses: [0, 200]
        }),
      ],
    })
  );
  self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
  });
//   registerRoute(
//     ({url}) => url.pathname.endsWith('styles.css'),
//     new CacheFirst({
//       cacheName: 'cdn',
//       plugins: [
//         new ExpirationPlugin({
//           maxEntries: 30,
//         }),
//         new CacheableResponsePlugin({
//           statuses: [0, 200]
//         }),
//       ],
//     })
//   );
  
  registerRoute(
    ({
      url
    }) => url.pathname.startsWith('/AddressSearch'),
    new NetworkFirst()
  );
  
  registerRoute(
    ({
      url
    }) => url.pathname.startsWith('/BuildDate'),
    new NetworkFirst()
  );
  //cache install load
  registerRoute(
    ({
      url
    }) => url.pathname.startsWith('/DataSchema'),
    new StaleWhileRevalidate()
  );
  registerRoute(
    ({
      url
    }) => url.pathname.startsWith('/GetDampPropertyTypes'),
    new StaleWhileRevalidate()
  );
  
  //install
  const DEBUG_SW = true;
    //  queue - createDampPostQueue
  const CACHE_NAME = Date.now().toString();

  self.addEventListener('install', (event) => {
       if (DEBUG_SW) {
      console.log(`[SW] Install cache: ${CACHE_NAME}`);
    }
  });

/*
    events - fetch
  */
  
/*
    events - push
*/
