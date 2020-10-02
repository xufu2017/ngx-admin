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

registerRoute(
  ({url}) => url.pathname.endsWith('styles.css'),
  new CacheFirst({
    cacheName: 'cdn',
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

registerRoute(
  ({
    url
  }) => url.pathname.startsWith('/AddressSearchViewList'),
  new NetworkFirst()
);

//cache install load
registerRoute(
  ({
    url
  }) => url.pathname.startsWith('/dataSchema'),
  new StaleWhileRevalidate()
);



//  queue - createDampPostQueue
// let createDampPostQueue = null
// createDampPostQueue = new Queue('createDampPostQueue', {
//   onSync: async ({
//     queue
//   }) => {
//     let entry;
//     while (entry = await queue.shiftRequest()) {
//       try {
//         await fetch(entry.request);
//         console.log('Replay successful for request', entry.request);
//         const channel = new BroadcastChannel('sw-messages');
//         channel.postMessage({
//           msg: 'offline-post-uploaded'
//         });
//       } catch (error) {
//         console.error('Replay failed for request', entry.request, error);

//         // Put the entry back in the queue and re-throw the error:
//         await queue.unshiftRequest(entry);
//         throw error;
//       }
//     }
//     console.log('Replay complete!');
//   }
// });


/*
  events - fetch
*/

// if (backgroundSyncSupported) {
//   self.addEventListener('fetch', (event) => {
//     if (event.request.url.endsWith('/createDampPost')) {
//       // Clone the request to ensure it's safe to read when
//       // adding to the Queue.
//       if (!self.navigator.onLine) {
//         const promiseChain = fetch(event.request.clone()).catch((err) => {
//           return createDampPostQueue.pushRequest({
//             request: event.request
//           });
//         });

//         event.waitUntil(promiseChain);
//       }
//     }
//   });
// }

/*
  events - push
*/
// self.addEventListener('push', event => {
//   console.log('Push message received:', event)
//   if (event.data) {
//     let data = JSON.parse(event.data.text())
//     event.waitUntil(
//       self.registration.showNotification(
//         data.title, {
//           body: data.body,
//           icon: 'icons/icon-128x128.png',
//           badge: 'icons/icon-128x128.png',
//           data: {
//             openUrl: data.openUrl
//           }
//         }
//       )
//     )
//   }
// })

// self.addEventListener('notificationclick', event => {
//   let notification = event.notification
//   let action = event.action

//   if (action == 'hello') {
//     console.log('Hello button was clicked')
//   } else if (action == 'goodbye') {
//     console.log('Goodbye button was clicked')
//   } else {
//     event.waitUntil(
//       clients.matchAll().then(clis => {
//         let clientUsingApp = clis.find(cli => {
//           return cli.visibilityState === 'visible'
//         })
//         if (clientUsingApp) {
//           clientUsingApp.navigate(notification.data.openUrl)
//           clientUsingApp.focus()
//         } else {
//           clients.openWindow(notification.data.openUrl)
//         }
//       })
//     )
//   }
//   notification.close()
// })

// self.addEventListener('notificationclose', event => {
//   console.log('Notification was closed', event)
// })