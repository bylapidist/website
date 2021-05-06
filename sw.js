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
    "url": "404.html",
    "revision": "2dd7102e76eb61f5c5d0b6bd6fb78f55"
  },
  {
    "url": "404/index.html",
    "revision": "5033cef77c49ba96626b58b5f966c899"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ed7a362c113e19c869ee.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ed7a362c113e19c869ee.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ed7a362c113e19c869ee.js.map",
    "revision": "42d68ea07581ab490726c2f0e3b59914"
  },
  {
    "url": "app-fb85192ac4f3806aa2b6.js"
  },
  {
    "url": "app-fb85192ac4f3806aa2b6.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-fb85192ac4f3806aa2b6.js.map",
    "revision": "785ceec28f2b5364a9e689a7972c2c28"
  },
  {
    "url": "brett-dorrans-cv-2021.pdf",
    "revision": "50b360fb44a75ffce191d459fce34ab1"
  },
  {
    "url": "chunk-map.json",
    "revision": "2b0e76a39b89add0c789d67970956faf"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f83b43fc167a0b5bea7b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f83b43fc167a0b5bea7b.js.map",
    "revision": "2300e2885e56c2d747824d3140b6a154"
  },
  {
    "url": "component---src-pages-404-tsx-6cca7866bfa345ba22f9.js"
  },
  {
    "url": "component---src-pages-404-tsx-6cca7866bfa345ba22f9.js.map",
    "revision": "bf52895aaaa1e47ab7c19ade60d9a26e"
  },
  {
    "url": "component---src-pages-index-tsx-7540eb82034fd7958f79.js"
  },
  {
    "url": "component---src-pages-index-tsx-7540eb82034fd7958f79.js.map",
    "revision": "c39b2812665f4e48dc0b937601db6343"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1bb60ed165794a3b79be1318e41f9e0d"
  },
  {
    "url": "framework-960dccf76a4a15d57979.js"
  },
  {
    "url": "framework-960dccf76a4a15d57979.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-960dccf76a4a15d57979.js.map",
    "revision": "2d8150e313a7f0fc16b2efbe234659e6"
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
    "revision": "725d27d8dd7e0490dc3b41f2982282a5"
  },
  {
    "url": "logo.svg",
    "revision": "935bd8be2e52a50bf8df21f78b234e55"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7e200698347d2f4ccdbb527d98883fff"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e71f63a906ad5bece1f597a6ec4d8580"
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
    "revision": "a2e484e9f315f3adea1195567b971a35"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f032a81c182cd3a4b8fa96acf672f2f6"
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
    "url": "polyfill-2cf6c61efbb17541a4bc.js"
  },
  {
    "url": "polyfill-2cf6c61efbb17541a4bc.js.map",
    "revision": "725d26851d7cdddd0b388169ed1d122b"
  },
  {
    "url": "webpack-runtime-1ac759b83ec6d68ce257.js"
  },
  {
    "url": "webpack-runtime-1ac759b83ec6d68ce257.js.map",
    "revision": "3c69f5e51b3c9d1d43cd388c27347679"
  },
  {
    "url": "webpack.stats.json",
    "revision": "1bae4f4e05915c6e3060ce15e2321c53"
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
  if (!resources || !(await caches.match(`/app-fb85192ac4f3806aa2b6.js`))) {
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
