/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_gatsby/slices/_gatsby-scripts-1.html",
    "revision": "ac17b3cf744d0936658d728069cc22ee"
  },
  {
    "url": "~partytown/debug/partytown-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-media.js"
  },
  {
    "url": "~partytown/debug/partytown-sandbox-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-sw.js"
  },
  {
    "url": "~partytown/debug/partytown.js"
  },
  {
    "url": "~partytown/partytown-atomics.js"
  },
  {
    "url": "~partytown/partytown-media.js"
  },
  {
    "url": "~partytown/partytown-sw.js"
  },
  {
    "url": "~partytown/partytown.js"
  },
  {
    "url": "404.html",
    "revision": "7bdac8eb8654ab3d3df0c165bce65de5"
  },
  {
    "url": "404/index.html",
    "revision": "c25d6ff7d213cd29d31d604582aa0ee5"
  },
  {
    "url": "954-24f7744eb7fb3822657e.js"
  },
  {
    "url": "954-24f7744eb7fb3822657e.js.map",
    "revision": "fa3495a0387f511d0a54d82f331bcd7c"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-f6011f92b67c87637e68.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-f6011f92b67c87637e68.js.map",
    "revision": "cbd83ebf7c848b97427e005d6de4f4ae"
  },
  {
    "url": "app-154d5ee13db3d638e068.js"
  },
  {
    "url": "app-154d5ee13db3d638e068.js.LICENSE.txt",
    "revision": "436dada5d6bfa2ea500bcff5ac31b9a0"
  },
  {
    "url": "app-154d5ee13db3d638e068.js.map",
    "revision": "7928463b7a0b39ebb00ba348082c221d"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "66f08bb3a57acd22ef499c85f261ee15"
  },
  {
    "url": "c16184b3-d6c7dc9facbb16320102.js"
  },
  {
    "url": "c16184b3-d6c7dc9facbb16320102.js.map",
    "revision": "6e65dd415a3be752dc7660a085cfdb5d"
  },
  {
    "url": "chunk-map.json",
    "revision": "ea830f80479cf6cf49212fa78fe17414"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f85acf759a28d2a61a0f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f85acf759a28d2a61a0f.js.map",
    "revision": "2b28a7ae82ef3b73144fd1b80fa8fbdc"
  },
  {
    "url": "component---src-pages-404-tsx-0069ab82b602517bd974.js"
  },
  {
    "url": "component---src-pages-404-tsx-0069ab82b602517bd974.js.map",
    "revision": "6aefb4567c82a75c6758307ca869f9a9"
  },
  {
    "url": "component---src-pages-index-tsx-74a40efb8210b92d1267.js"
  },
  {
    "url": "component---src-pages-index-tsx-74a40efb8210b92d1267.js.map",
    "revision": "0dc8c51dfdaf48ddc481540779a9532a"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "5f7fc92b93597c5bd864e9155d7ed414"
  },
  {
    "url": "framework-11ee7b40440a0f0f9d4d.js"
  },
  {
    "url": "framework-11ee7b40440a0f0f9d4d.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-11ee7b40440a0f0f9d4d.js.map",
    "revision": "cb586db7f839783d46921e93e4a65632"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "f607497bfedf4afc725a50a76514412a"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8ff9f09fe3a055e93a50fb3ded857cfe"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "e3b6374aaece6eeed706bcf95ecc50fc"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "fd1fcadbe6255c37bd3d6f19eb6eda80"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "f8661ec00e718ac210cfcdca5596e4bc"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "59dc13db1ae1443268e65a41fb08a4b6"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "df135da4a3029d0284735a37a839cf7d"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "51049265f65578942bb245c8843aed61"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "595308c05b9c02874edfe53da522f1cd"
  },
  {
    "url": "logo.svg",
    "revision": "935bd8be2e52a50bf8df21f78b234e55"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "774a81126793bdcdb5baee93c3db5ac1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9ceff1a5e864c87ac296179c26b04ac7"
  },
  {
    "url": "oglogo.png",
    "revision": "3e5934f3cca64960da012d3919a2c7ce"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2791af16731a2bc902c884ee959e4812"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "bd3479246e644795770ab1ff72e8c3b3"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4f8ebf86c727450da34179f6861b79b8"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c5ccc1c9f31d38badc4e90b7b9570030"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d22fedc5f9585423cf2e45d46cac048f"
  },
  {
    "url": "page-data/sq/d/1963140206.json",
    "revision": "7af8c8984909cf1c8c0a80d61105ce9f"
  },
  {
    "url": "page-data/sq/d/3471301276.json",
    "revision": "afd7c170fd0c1aac4f5e2bc5bc36222f"
  },
  {
    "url": "webpack-runtime-193a4b39281a0f44e6f3.js"
  },
  {
    "url": "webpack-runtime-193a4b39281a0f44e6f3.js.map",
    "revision": "65959d6e857ff36bc738dfce803c65c9"
  },
  {
    "url": "webpack.stats.json",
    "revision": "7ca20b089d8ef779d91e74e0d0d36dfc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-154d5ee13db3d638e068.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
