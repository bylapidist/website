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
    "revision": "fc19b2d35e62f3621b524e29bc4d082a"
  },
  {
    "url": "404/index.html",
    "revision": "e023cec509be6253b2970483d4e5c777"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-602f3f576c229a7f604c.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-602f3f576c229a7f604c.js.map",
    "revision": "0c971e72f451deb5dc1bc8827cc27847"
  },
  {
    "url": "app-cdaf42a20b797a97ca59.js"
  },
  {
    "url": "app-cdaf42a20b797a97ca59.js.map",
    "revision": "ebc756d3e2e861c745b5d46ed8e9af93"
  },
  {
    "url": "brett-dorrans-cv-2020.pdf",
    "revision": "dfdffd6edbc090964f15f3cc54d39597"
  },
  {
    "url": "chunk-map.json",
    "revision": "882a299d05ccca97da87e1b990a4bbe2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ecabcc836d91400d00c0.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ecabcc836d91400d00c0.js.map",
    "revision": "d2726dd38de5b37c5324d0e4cec5c115"
  },
  {
    "url": "component---src-pages-404-tsx-7c0d1e87faa692e7d016.js"
  },
  {
    "url": "component---src-pages-404-tsx-7c0d1e87faa692e7d016.js.map",
    "revision": "f7417105e8ff3ee26eff8bb9c401bc5f"
  },
  {
    "url": "component---src-pages-index-tsx-5254cd6280dc2aca4283.js"
  },
  {
    "url": "component---src-pages-index-tsx-5254cd6280dc2aca4283.js.map",
    "revision": "fa8b97f7a22cc366defb73eb847ea4b0"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2c40e192765243c0924c538d180473f9"
  },
  {
    "url": "framework-cd95f858874d4bcb276c.js"
  },
  {
    "url": "framework-cd95f858874d4bcb276c.js.map",
    "revision": "9fc9ebe6f6b6cd166371f0fcc6f82733"
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
    "revision": "129a69c77c767989365f28cf28e7ccb5"
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
    "revision": "8749e0dc39ea23608c6e9d83fa6e27e9"
  },
  {
    "url": "oglogo.png",
    "revision": "3e5934f3cca64960da012d3919a2c7ce"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "9ed4071b52317ffa12328819c12c6869"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "f4eb826f6545fe5b5d834dc561cc627e"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "056ee657471a49a1911e8c34f0f5b91a"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d4d23fdcf0f2516ae9301876127f80b7"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js.map",
    "revision": "0c0ba94d94d6521b2d1611a8e0ffd435"
  },
  {
    "url": "static/d/1963140206.json"
  },
  {
    "url": "webpack-runtime-84f208db9f4439d05891.js"
  },
  {
    "url": "webpack-runtime-84f208db9f4439d05891.js.map",
    "revision": "47029adea7c01ddf6595c57eb0b017f1"
  },
  {
    "url": "webpack.stats.json",
    "revision": "790acee88f2263cc2e9fc4a594a2a524"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-cdaf42a20b797a97ca59.js`))) {
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
