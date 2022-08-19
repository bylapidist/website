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
    "revision": "746a00656169efc8c7e9d85e7c792782"
  },
  {
    "url": "404/index.html",
    "revision": "2ea711d4e7baef56e0f97a50e6848465"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js.map",
    "revision": "b4fe894c870939295c505f68bfa5f4a7"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-e40d0f6b510d1a4de0b5.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-e40d0f6b510d1a4de0b5.js.map",
    "revision": "f3ca31391d2c78b6dda61d5dbee4c0b6"
  },
  {
    "url": "app-e11475066d9c6a6fcbaf.js"
  },
  {
    "url": "app-e11475066d9c6a6fcbaf.js.LICENSE.txt",
    "revision": "e6a0b24e1ecbd99a306ae5be49e36bd5"
  },
  {
    "url": "app-e11475066d9c6a6fcbaf.js.map",
    "revision": "30bc5efa5bdd4cf6c1d8d89cfdf5c917"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "1b264a4b912667142606bbf32ee3479e"
  },
  {
    "url": "cb1608f2-a44eca6396177470032c.js"
  },
  {
    "url": "cb1608f2-a44eca6396177470032c.js.LICENSE.txt",
    "revision": "d5a941ab58bcd64138a076307c02d906"
  },
  {
    "url": "cb1608f2-a44eca6396177470032c.js.map",
    "revision": "31a28cd38228a22dcb7ecf8fa40182dd"
  },
  {
    "url": "chunk-map.json",
    "revision": "fb538cca447ed90b9a5bb801eea57543"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5fe9f2f3125252a9fb1b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5fe9f2f3125252a9fb1b.js.map",
    "revision": "f6ff12c385052946c5b02ea6a7ddbb94"
  },
  {
    "url": "component---src-pages-404-tsx-065b9b73f9432b6cda9c.js"
  },
  {
    "url": "component---src-pages-404-tsx-065b9b73f9432b6cda9c.js.map",
    "revision": "4a48249505e8de6cf2d0efed8321165a"
  },
  {
    "url": "component---src-pages-index-tsx-c89bf94c7ba5560f574c.js"
  },
  {
    "url": "component---src-pages-index-tsx-c89bf94c7ba5560f574c.js.map",
    "revision": "02fb4024d19bbed8f1f9ba0e243874c3"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1bb60ed165794a3b79be1318e41f9e0d"
  },
  {
    "url": "framework-46b1b6b4153da562daaf.js"
  },
  {
    "url": "framework-46b1b6b4153da562daaf.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-46b1b6b4153da562daaf.js.map",
    "revision": "71e19d28d607874cc7c9aaff3037688f"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "67d831710423042b21c1072340e816f5"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6ea3b2aa98abc0d5db758e81b94eed46"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "b92b6a3bda99a1568629b1f4dffa1fe9"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "de82d131659acca2c6b82d930d380476"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "3e33b71a55021f5cea38a24892eb7789"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "59dc13db1ae1443268e65a41fb08a4b6"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "a94feea412c06afe48d9e2ff31a8c52f"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "bfb566dfdc3ccd58a4b1485dc37f2902"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "0fb9dfa24f850fff213d74c22d57e20e"
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
    "revision": "8a7000a72484b61d372c88d5d9ccdd8e"
  },
  {
    "url": "oglogo.png",
    "revision": "3e5934f3cca64960da012d3919a2c7ce"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "6d0fefea1712a899406671fa439484c1"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b67ada0f919b325b0d6293bb5c99f93f"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e317485aea3cb11e680fe5d8a2c441bb"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "93fd565e005f84b02ba9d18f996e98a1"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/sq/d/1963140206.json",
    "revision": "7af8c8984909cf1c8c0a80d61105ce9f"
  },
  {
    "url": "page-data/sq/d/3471301276.json",
    "revision": "17cb51f5cb5664c0f5846ba1ec2ef5b9"
  },
  {
    "url": "polyfill-d68f8bc27602cbd4a299.js"
  },
  {
    "url": "polyfill-d68f8bc27602cbd4a299.js.map",
    "revision": "94ff852e8a29de37c0783379355ecd50"
  },
  {
    "url": "webpack-runtime-22064e5fd77c3e1619c2.js"
  },
  {
    "url": "webpack-runtime-22064e5fd77c3e1619c2.js.map",
    "revision": "b83c8644cf0f4cd7ca46c6337c066313"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d2ffb1b75d04f0ca443dd2bcf533ff3b"
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
  if (!resources || !(await caches.match(`/app-e11475066d9c6a6fcbaf.js`))) {
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
