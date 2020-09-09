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
    "revision": "1b6d7bf03e3d20e383ec5f7f01524432"
  },
  {
    "url": "404/index.html",
    "revision": "66996f39cac7429d808dd5e4d1f81b1f"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-fea5a983339bd015c24e.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-fea5a983339bd015c24e.js.map",
    "revision": "57d1fbd219aa0fb40212100f364d810c"
  },
  {
    "url": "app-7f04dae6d68741aed6f0.js"
  },
  {
    "url": "app-7f04dae6d68741aed6f0.js.map",
    "revision": "3117dff99c014929e867589f0ece0bd8"
  },
  {
    "url": "brett-dorrans-cv-2020.pdf",
    "revision": "dfdffd6edbc090964f15f3cc54d39597"
  },
  {
    "url": "chunk-map.json",
    "revision": "a25304ddf033f1e6433730b840d0a94f"
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
    "revision": "f20a3d470f509dc399046a9c4a6bcd34"
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
    "revision": "ae86657f92bb8815cfe49b6be561a47f"
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
    "revision": "e87239fa49ee0b93b6220c9b6000401f"
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
    "url": "webpack-runtime-636c984d474ba2d8fbb8.js"
  },
  {
    "url": "webpack-runtime-636c984d474ba2d8fbb8.js.map",
    "revision": "9fc86e8eba8108ec6bf8f5acd0a4e557"
  },
  {
    "url": "webpack.stats.json",
    "revision": "844ed833b2fe09a57dfb9b40b652a4c7"
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
  if (!resources || !(await caches.match(`/app-7f04dae6d68741aed6f0.js`))) {
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
