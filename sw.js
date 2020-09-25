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
    "revision": "8e823e019eeb329f484a47d3ce3d63ee"
  },
  {
    "url": "404/index.html",
    "revision": "2792ec81b8b6e612d59b3f9ce48e0b64"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-e0ae73c3500d493f5c03.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-e0ae73c3500d493f5c03.js.map",
    "revision": "c00e6064e59b28ca2c788c4ab248ea32"
  },
  {
    "url": "app-b5ade33780ee4f94e49f.js"
  },
  {
    "url": "app-b5ade33780ee4f94e49f.js.map",
    "revision": "88760e53bc17fd849e4d6793481c36fa"
  },
  {
    "url": "brett-dorrans-cv-2020.pdf",
    "revision": "dfdffd6edbc090964f15f3cc54d39597"
  },
  {
    "url": "chunk-map.json",
    "revision": "c009da618d915865e5561e6ef78ea0bf"
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
    "url": "framework-d1906d2676adc9398d9a.js"
  },
  {
    "url": "framework-d1906d2676adc9398d9a.js.map",
    "revision": "edaf8156dc6f6665ceb6ce6a1fe9ac8a"
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
    "revision": "615f19e84416609001e9a2d2c145f238"
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
    "revision": "4c9bf651199d2a5f95d725e82a5c79c3"
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
    "revision": "d6f0a70f5c1a80dd1294fac380bda13d"
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
    "url": "polyfill-7132f116014d44faf99e.js"
  },
  {
    "url": "polyfill-7132f116014d44faf99e.js.map",
    "revision": "e5ddb0232d872a776d3878a852d9319b"
  },
  {
    "url": "webpack-runtime-5baff6d48cf53459b999.js"
  },
  {
    "url": "webpack-runtime-5baff6d48cf53459b999.js.map",
    "revision": "7ba21c82ef9eb8abbbf93e580bde1523"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d43e9b9c46f4899b7ba8596369ee6a3b"
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
  if (!resources || !(await caches.match(`/app-b5ade33780ee4f94e49f.js`))) {
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
