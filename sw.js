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
    "revision": "5bbeefd9c3bf5c9c8f5c93f5f155bba6"
  },
  {
    "url": "404/index.html",
    "revision": "09d57f140f4893fd0ccde53b71d39445"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-2452a050be949b5b7c1d.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-2452a050be949b5b7c1d.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-2452a050be949b5b7c1d.js.map",
    "revision": "9573930c4b387ef5c558d9d9c9da4bf3"
  },
  {
    "url": "app-e641e8691faaf80999c3.js"
  },
  {
    "url": "app-e641e8691faaf80999c3.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-e641e8691faaf80999c3.js.map",
    "revision": "56ed59f3d758074f8fe61ff94ac124ec"
  },
  {
    "url": "brett-dorrans-cv-2020.pdf",
    "revision": "d3f60e658f5240023252129929794404"
  },
  {
    "url": "chunk-map.json",
    "revision": "e73ea9285524935abb13f340e6d761ac"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-82c63c4c056f62a6fe2f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-82c63c4c056f62a6fe2f.js.map",
    "revision": "ab2e22d9d7cb6c6ed0f8bcbc7b8fc2a7"
  },
  {
    "url": "component---src-pages-404-tsx-9c108d7069f7f1cb4bd8.js"
  },
  {
    "url": "component---src-pages-404-tsx-9c108d7069f7f1cb4bd8.js.map",
    "revision": "0bdaccdc1695f5f6ff7af37f822b771b"
  },
  {
    "url": "component---src-pages-index-tsx-0d0c8adc1c3f7e103e4c.js"
  },
  {
    "url": "component---src-pages-index-tsx-0d0c8adc1c3f7e103e4c.js.map",
    "revision": "9612a455af20ed17f6d37b3d298330c5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2c40e192765243c0924c538d180473f9"
  },
  {
    "url": "framework-50be060b6b321427b66a.js"
  },
  {
    "url": "framework-50be060b6b321427b66a.js.LICENSE.txt",
    "revision": "f1d523c904ebbd453f563f0acfae6349"
  },
  {
    "url": "framework-50be060b6b321427b66a.js.map",
    "revision": "483f9e2c635144c02c21e18f9d7022f9"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "02966ef01f479d9e65de2a2e2af1f400"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "a429c71f81fedb72fd2d738fa4d5123a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "47fef5d2c91e42a1979b14392419cdbe"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c360166721b7c61fdc9f725b63a0bef3"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "ee45266633587cb4e7b5817122ede2dd"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "c13aefcbaf1978fd0c1fe1b96cd535b6"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "16bc6efd40d14256cb2dfa88d8221193"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "fa42a3488ce4a20c4b3f586ea2f17dc6"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "e859d7671924376e52c6454055d075f7"
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
    "revision": "e164780b785083a14fdb39c54df8227c"
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
    "revision": "b54c98767e74520e80c3254af9bb25d3"
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
    "url": "polyfill-6c94fb1f8cfa3b2c1d75.js"
  },
  {
    "url": "polyfill-6c94fb1f8cfa3b2c1d75.js.map",
    "revision": "db1e8ad32258fe5a486f99a01e6ffd2b"
  },
  {
    "url": "webpack-runtime-a2a58695eb99fd933ff5.js"
  },
  {
    "url": "webpack-runtime-a2a58695eb99fd933ff5.js.map",
    "revision": "ad3c3e4299aaba570fcacf34ae2b4101"
  },
  {
    "url": "webpack.stats.json",
    "revision": "a4b605f86245eea2c8db5797fc5f7774"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-e641e8691faaf80999c3.js`))) {
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
