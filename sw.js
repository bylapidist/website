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
    "revision": "ddcec59501426fb4b029c7720c156225"
  },
  {
    "url": "404/index.html",
    "revision": "cb0654b677f29963cb4edeba219d6989"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-f04356ca7ef387a8b718.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-f04356ca7ef387a8b718.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-f04356ca7ef387a8b718.js.map",
    "revision": "827f7b97ba78004f89ead85bd1fec349"
  },
  {
    "url": "app-099733487995ffc5d6d0.js"
  },
  {
    "url": "app-099733487995ffc5d6d0.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-099733487995ffc5d6d0.js.map",
    "revision": "09185259293307245842534074b69919"
  },
  {
    "url": "brett-dorrans-cv-2020.pdf",
    "revision": "d3f60e658f5240023252129929794404"
  },
  {
    "url": "chunk-map.json",
    "revision": "7d41f5dacd1064df4882b266ede9c438"
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
    "url": "component---src-pages-index-tsx-53939608694bc9302235.js"
  },
  {
    "url": "component---src-pages-index-tsx-53939608694bc9302235.js.map",
    "revision": "5269d1f5b034ccab4031598dbf377179"
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
    "revision": "7f6cd1177193cb402297d56a68853487"
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
    "revision": "9861c3a6afbb93f07efa8f055c22905e"
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
    "revision": "5fde9a4e4a0a524c302928c6b91d6708"
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
    "url": "webpack-runtime-2e2ee555b16675486523.js"
  },
  {
    "url": "webpack-runtime-2e2ee555b16675486523.js.map",
    "revision": "44944f6341fd8288bcf45fdce1ff1b34"
  },
  {
    "url": "webpack.stats.json",
    "revision": "b5d2b17097f21476bef9efe3ff152cf3"
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
  if (!resources || !(await caches.match(`/app-099733487995ffc5d6d0.js`))) {
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
