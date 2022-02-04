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
    "revision": "36ceca243284c28ab8dd26316859aa26"
  },
  {
    "url": "404/index.html",
    "revision": "41c5d7f174c9c62c698f775f9a3d80b3"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js"
  },
  {
    "url": "589-482945ce75a2ce7c1c56.js.map",
    "revision": "b4fe894c870939295c505f68bfa5f4a7"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-7b21fb77041aa953f5c5.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-7b21fb77041aa953f5c5.js.map",
    "revision": "200b8600ea9b0502bb3d582e5827f104"
  },
  {
    "url": "app-95192098bc3b8da53699.js"
  },
  {
    "url": "app-95192098bc3b8da53699.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "app-95192098bc3b8da53699.js.map",
    "revision": "1739eedc8d29cbf739e3d7f1f9b703ef"
  },
  {
    "url": "brett-dorrans-cv-2021.pdf",
    "revision": "50b360fb44a75ffce191d459fce34ab1"
  },
  {
    "url": "chunk-map.json",
    "revision": "e29b0e65142b09e46c06668c38f515ec"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5fe9f2f3125252a9fb1b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5fe9f2f3125252a9fb1b.js.map",
    "revision": "f6ff12c385052946c5b02ea6a7ddbb94"
  },
  {
    "url": "component---src-pages-404-tsx-0e1d3c89fb80606e5536.js"
  },
  {
    "url": "component---src-pages-404-tsx-0e1d3c89fb80606e5536.js.map",
    "revision": "8022db63eee76460c367e6ffcf6eb6fe"
  },
  {
    "url": "component---src-pages-index-tsx-c646a832bdea2f745389.js"
  },
  {
    "url": "component---src-pages-index-tsx-c646a832bdea2f745389.js.map",
    "revision": "82e5fe0ea0fcd829e144a29fbbb51fb5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1bb60ed165794a3b79be1318e41f9e0d"
  },
  {
    "url": "framework-b7ea6f68fc6c6dd2e423.js"
  },
  {
    "url": "framework-b7ea6f68fc6c6dd2e423.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-b7ea6f68fc6c6dd2e423.js.map",
    "revision": "48260b3dba4611805c6c8a242c542fdc"
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
    "revision": "114aa960e0e0e28905f107e1e127d411"
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
    "revision": "73d234c5c09272d1add8a265db8448ff"
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
    "revision": "268ca3b058dc53050c906cba60e92156"
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
    "url": "polyfill-12b284c879b4c2eee8ed.js"
  },
  {
    "url": "polyfill-12b284c879b4c2eee8ed.js.map",
    "revision": "f0e4d0e1c21c0beb38528ddd73e883a7"
  },
  {
    "url": "webpack-runtime-9691026a013f8dd6c80f.js"
  },
  {
    "url": "webpack-runtime-9691026a013f8dd6c80f.js.map",
    "revision": "f006784cb3babffe54c9d636af55bfe8"
  },
  {
    "url": "webpack.stats.json",
    "revision": "3ebe2edf275eddacaf706fd1585843da"
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
  if (!resources || !(await caches.match(`/app-95192098bc3b8da53699.js`))) {
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
