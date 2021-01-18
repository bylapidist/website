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
    "revision": "63b7b4c2dc00291eb68c0158df705c3a"
  },
  {
    "url": "404/index.html",
    "revision": "a68f2e8f6901e0c2deaf57585f0c2e78"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-374c4872b6ffb6f7b911.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-374c4872b6ffb6f7b911.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-374c4872b6ffb6f7b911.js.map",
    "revision": "5aa9b3f95c60948ecb0e8a3f3d7c9c29"
  },
  {
    "url": "app-720aeb3a00f4f153d1a0.js"
  },
  {
    "url": "app-720aeb3a00f4f153d1a0.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-720aeb3a00f4f153d1a0.js.map",
    "revision": "8f294a1387ce6b711d0d7df61735c586"
  },
  {
    "url": "brett-dorrans-cv-2020.pdf",
    "revision": "d3f60e658f5240023252129929794404"
  },
  {
    "url": "chunk-map.json",
    "revision": "27df9801de8ecd1511b90e48325ff54c"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-82c63c4c056f62a6fe2f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-82c63c4c056f62a6fe2f.js.map",
    "revision": "ab2e22d9d7cb6c6ed0f8bcbc7b8fc2a7"
  },
  {
    "url": "component---src-pages-404-tsx-d0454c9f009a0e535504.js"
  },
  {
    "url": "component---src-pages-404-tsx-d0454c9f009a0e535504.js.map",
    "revision": "dd23acf467df0f62900edcf34553e146"
  },
  {
    "url": "component---src-pages-index-tsx-bcb9b33cad0f794f3c0d.js"
  },
  {
    "url": "component---src-pages-index-tsx-bcb9b33cad0f794f3c0d.js.map",
    "revision": "217e6e760aa1e7eff6dde5f1ea465634"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "a2280c96eea5c210623a3d2200610b89"
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
    "revision": "5bdc707971c1b8dec43c386d6637f995"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "19e75669c5d2e4cffb9d2924204a139a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "9ca018bf9cae70145c094ff8438879f3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "b7ea015ad1450274926398902e994839"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "d319b292a4b4d1e9a9aaa930708cefb8"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "0364743e078f6c59dd8c52aa19930af4"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e6b34628ac3f3df3dfb4e7fc124044e3"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "9d0429a1eda8e845697a31860d12ea1b"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "9753b0260109db855dfa2e8909246454"
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
    "revision": "fc65f30fcbb33e7ef129091b0399cfbb"
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
    "revision": "6385822ee3f8333423205bf66743eb49"
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
    "url": "polyfill-e4ff66ed5ec0b4bd2598.js"
  },
  {
    "url": "polyfill-e4ff66ed5ec0b4bd2598.js.map",
    "revision": "e1cdf77cc19e13eeb4620e5fc812ea81"
  },
  {
    "url": "webpack-runtime-377d9f0e9a5f903984c8.js"
  },
  {
    "url": "webpack-runtime-377d9f0e9a5f903984c8.js.map",
    "revision": "8480272c2d7e042f05ed81fcad4e244d"
  },
  {
    "url": "webpack.stats.json",
    "revision": "32d5ad90eb4ef82092949341f4a544bf"
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
  if (!resources || !(await caches.match(`/app-720aeb3a00f4f153d1a0.js`))) {
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
