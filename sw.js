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
    "revision": "349a958687e1cabf83565ef56da8eb8e"
  },
  {
    "url": "404/index.html",
    "revision": "cbc2508093c1284cd52c6c254c03f483"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js.map",
    "revision": "b4fe894c870939295c505f68bfa5f4a7"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-6169a97197fe50014727.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-6169a97197fe50014727.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-6169a97197fe50014727.js.map",
    "revision": "060f85cbf18851d81fa4e1b573cb823a"
  },
  {
    "url": "app-2a60fec00a5c8f27a150.js"
  },
  {
    "url": "app-2a60fec00a5c8f27a150.js.map",
    "revision": "6b06a68a3fb44537d403c52fc1bd327a"
  },
  {
    "url": "brett-dorrans-cv-2021.pdf",
    "revision": "50b360fb44a75ffce191d459fce34ab1"
  },
  {
    "url": "chunk-map.json",
    "revision": "18b27dae80d7f2843687b5eb30a92c56"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-538891ef2a1cb5c49751.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-538891ef2a1cb5c49751.js.map",
    "revision": "7a2f1d6e8cf5ca2492c47d0b15d92909"
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
    "url": "framework-89dcaabd13d355f1883d.js"
  },
  {
    "url": "framework-89dcaabd13d355f1883d.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-89dcaabd13d355f1883d.js.map",
    "revision": "2376e36f4556912d5622742e9516399a"
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
    "revision": "c59f02b86571f67e304d9f78ef4ffd78"
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
    "revision": "f7c3b4a67e09beb36eb110469e134e7b"
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
    "revision": "793d87a4368ede0ec8181c50a173f484"
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
    "url": "webpack-runtime-3b8cbe9ff1e940839bfd.js"
  },
  {
    "url": "webpack-runtime-3b8cbe9ff1e940839bfd.js.map",
    "revision": "1825605bd41a43790b528de41b68aa43"
  },
  {
    "url": "webpack.stats.json",
    "revision": "03954bb8ca6ce91e8645355bb81af48c"
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
  if (!resources || !(await caches.match(`/app-2a60fec00a5c8f27a150.js`))) {
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
