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
    "revision": "1abafd58518635eb97756013b4237167"
  },
  {
    "url": "404/index.html",
    "revision": "8a83991effb86b0fc423548ba424ab5f"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js.map",
    "revision": "b4fe894c870939295c505f68bfa5f4a7"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-a0098f452af2765dc327.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-a0098f452af2765dc327.js.map",
    "revision": "e7d9c5011d46e3a142c58a449111c204"
  },
  {
    "url": "app-9dee19eeeb94172e0c92.js"
  },
  {
    "url": "app-9dee19eeeb94172e0c92.js.LICENSE.txt",
    "revision": "8227ea2bc1cba9969cff1f4d53879aa6"
  },
  {
    "url": "app-9dee19eeeb94172e0c92.js.map",
    "revision": "5180680f50f0b352e95bca9b72aeeed3"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "c6f01ff5103d953ce69871ed148214be"
  },
  {
    "url": "c16184b3-b0e21d729cafe07121d4.js"
  },
  {
    "url": "c16184b3-b0e21d729cafe07121d4.js.map",
    "revision": "d14dd6bdf5e567e8d694e325eb21e815"
  },
  {
    "url": "chunk-map.json",
    "revision": "ed4d45e22037da1c2aaba91976309517"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f85acf759a28d2a61a0f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f85acf759a28d2a61a0f.js.map",
    "revision": "744c7600cbdd70cdbecb722421f450d5"
  },
  {
    "url": "component---src-pages-404-tsx-065b9b73f9432b6cda9c.js"
  },
  {
    "url": "component---src-pages-404-tsx-065b9b73f9432b6cda9c.js.map",
    "revision": "4a48249505e8de6cf2d0efed8321165a"
  },
  {
    "url": "component---src-pages-index-tsx-2b7b52115e0c5f36246a.js"
  },
  {
    "url": "component---src-pages-index-tsx-2b7b52115e0c5f36246a.js.map",
    "revision": "379943d3c9f70f86134b637c19fd191d"
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
    "revision": "faca28d2c1ff2c9627ce24ea867ea152"
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
    "revision": "fc0bd69a3c917c239a03c26ba0261310"
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
    "revision": "74f4148d7c4074068b250a9729ae240c"
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
    "revision": "82c6242a0f2ffd591a6581fb13366d03"
  },
  {
    "url": "polyfill-d68f8bc27602cbd4a299.js"
  },
  {
    "url": "polyfill-d68f8bc27602cbd4a299.js.map",
    "revision": "94ff852e8a29de37c0783379355ecd50"
  },
  {
    "url": "webpack-runtime-0ebfbbfb54835bbab2f2.js"
  },
  {
    "url": "webpack-runtime-0ebfbbfb54835bbab2f2.js.map",
    "revision": "12f44c1b0bd303da3eb32cdb054dcb17"
  },
  {
    "url": "webpack.stats.json",
    "revision": "a33d94e39b57edf94dc89e99fb50eb42"
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
  if (!resources || !(await caches.match(`/app-9dee19eeeb94172e0c92.js`))) {
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
