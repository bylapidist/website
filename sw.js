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
    "revision": "212f0c753b188e165d5362f9d670eb9f"
  },
  {
    "url": "404/index.html",
    "revision": "121b1e10a0670be922e01dead448c42f"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js.map",
    "revision": "3bb2128a55c70d90e85377ef5c430a9d"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-15a9936bdcb49f2b2914.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-15a9936bdcb49f2b2914.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-15a9936bdcb49f2b2914.js.map",
    "revision": "60ae456906d733a55eb6437370b0ee27"
  },
  {
    "url": "app-c23bd0aaa8c8f9e4c98e.js"
  },
  {
    "url": "app-c23bd0aaa8c8f9e4c98e.js.map",
    "revision": "53ddbcc4dd958227da92795f1f83e698"
  },
  {
    "url": "brett-dorrans-cv-2021.pdf",
    "revision": "50b360fb44a75ffce191d459fce34ab1"
  },
  {
    "url": "chunk-map.json",
    "revision": "5fe57d9c5a383a14b8454c93faf3ace6"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f5edb12af93ec1eb4b18.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f5edb12af93ec1eb4b18.js.map",
    "revision": "90b30718fad53974b3e55a6cc71004be"
  },
  {
    "url": "component---src-pages-404-tsx-0445f75b8072f47d78c1.js"
  },
  {
    "url": "component---src-pages-404-tsx-0445f75b8072f47d78c1.js.map",
    "revision": "54a884624fea64c2db2958d0ddf771cc"
  },
  {
    "url": "component---src-pages-index-tsx-c1f98f21ade5f877107d.js"
  },
  {
    "url": "component---src-pages-index-tsx-c1f98f21ade5f877107d.js.map",
    "revision": "984d5260fef2da6aede94dc904700a42"
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
    "revision": "1a02b136f1adcedfcce0b76e1a548e31"
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
    "revision": "839449557adf9d304a6867e31ba4ffd3"
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
    "revision": "2805f907596ecaaf9a1e76e7d4465cf1"
  },
  {
    "url": "oglogo.png",
    "revision": "3e5934f3cca64960da012d3919a2c7ce"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "fdedd3f8f10db804fb30f2c6897c96f2"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "1e7c99ae4fec9fda403e831bd611e414"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "30e4bb8373a999e03497368d95de4123"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f0acb2060bcec8fccc9d246994b05187"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "page-data/sq/d/1963140206.json",
    "revision": "7af8c8984909cf1c8c0a80d61105ce9f"
  },
  {
    "url": "polyfill-fc00740fa323bca2107d.js"
  },
  {
    "url": "polyfill-fc00740fa323bca2107d.js.map",
    "revision": "6cbfd17acbcc245a496e239dd045a6d8"
  },
  {
    "url": "webpack-runtime-dd1bebdf27a326bfe1f8.js"
  },
  {
    "url": "webpack-runtime-dd1bebdf27a326bfe1f8.js.map",
    "revision": "8096940be88d5ccb6d27568350040023"
  },
  {
    "url": "webpack.stats.json",
    "revision": "65e51dd7aa2d465c0d539e2636f868fa"
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
  if (!resources || !(await caches.match(`/app-c23bd0aaa8c8f9e4c98e.js`))) {
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
