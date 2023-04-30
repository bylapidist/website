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
    "url": "_gatsby/slices/_gatsby-scripts-1.html",
    "revision": "81b3997269b075f8f2555c64d5c61c46"
  },
  {
    "url": "~partytown/debug/partytown-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-media.js"
  },
  {
    "url": "~partytown/debug/partytown-sandbox-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-sw.js"
  },
  {
    "url": "~partytown/debug/partytown.js"
  },
  {
    "url": "~partytown/partytown-atomics.js"
  },
  {
    "url": "~partytown/partytown-media.js"
  },
  {
    "url": "~partytown/partytown-sw.js"
  },
  {
    "url": "~partytown/partytown.js"
  },
  {
    "url": "404.html",
    "revision": "a303b4ce7b4f39936af980009b762278"
  },
  {
    "url": "404/index.html",
    "revision": "2efab1cd71c8f1093709d404a3e6bea8"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ea03c52134ddf2bc6633.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ea03c52134ddf2bc6633.js.LICENSE.txt",
    "revision": "50356a9d5090f44699126fc40c655fc4"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ea03c52134ddf2bc6633.js.map",
    "revision": "e159cb1094e6e3a74a68ab1f371f3b91"
  },
  {
    "url": "app-5605c9d287823815702b.js"
  },
  {
    "url": "app-5605c9d287823815702b.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-5605c9d287823815702b.js.map",
    "revision": "749e0220f4376f27e3550b002be476c2"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "0f58ea0773e552d2169f2105c384762b"
  },
  {
    "url": "chunk-map.json",
    "revision": "dae449ea5a4a418e28fdf487ba007a9a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f85acf759a28d2a61a0f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-f85acf759a28d2a61a0f.js.map",
    "revision": "2b28a7ae82ef3b73144fd1b80fa8fbdc"
  },
  {
    "url": "component---src-pages-404-tsx-8b318f89056c5baf22b5.js"
  },
  {
    "url": "component---src-pages-404-tsx-8b318f89056c5baf22b5.js.map",
    "revision": "b2d7545b6db41a0e9b025f1fb05257f5"
  },
  {
    "url": "component---src-pages-index-tsx-a43e926e606392b4e05d.js"
  },
  {
    "url": "component---src-pages-index-tsx-a43e926e606392b4e05d.js.map",
    "revision": "8f58a94b8afe571c2bcd4f12fd15abef"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "5f7fc92b93597c5bd864e9155d7ed414"
  },
  {
    "url": "framework-11ee7b40440a0f0f9d4d.js"
  },
  {
    "url": "framework-11ee7b40440a0f0f9d4d.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-11ee7b40440a0f0f9d4d.js.map",
    "revision": "cb586db7f839783d46921e93e4a65632"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "f607497bfedf4afc725a50a76514412a"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8ff9f09fe3a055e93a50fb3ded857cfe"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "e3b6374aaece6eeed706bcf95ecc50fc"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "fd1fcadbe6255c37bd3d6f19eb6eda80"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "f8661ec00e718ac210cfcdca5596e4bc"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "59dc13db1ae1443268e65a41fb08a4b6"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "df135da4a3029d0284735a37a839cf7d"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "51049265f65578942bb245c8843aed61"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "680d256319d0e5532f12fc1fbd440780"
  },
  {
    "url": "logo.svg",
    "revision": "935bd8be2e52a50bf8df21f78b234e55"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "24810fae598b20296560376e6e43ebba"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1b9b705e92a62743fac55fcab98ce0b1"
  },
  {
    "url": "oglogo.png",
    "revision": "3e5934f3cca64960da012d3919a2c7ce"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d76c25caa02740e3eb15fed9abc44fc8"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "bc2363a91d859c466f567ab9ba07dd57"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7a9d1772cea4594a439a49fc53afbc03"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5af913145e56f3304b2d9e2af1b0315c"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d22fedc5f9585423cf2e45d46cac048f"
  },
  {
    "url": "page-data/sq/d/3000541721.json",
    "revision": "d82e76039654d9ed2e0e85390a364f98"
  },
  {
    "url": "page-data/sq/d/3530040381.json",
    "revision": "c6346215e87229e6a9f7f2332fe5cea2"
  },
  {
    "url": "sitemap-0.xml",
    "revision": "e86bbfa3ccda44d75032d49fcb2836f3"
  },
  {
    "url": "sitemap-index.xml",
    "revision": "c02a0d2108e450f065869b9b606f3616"
  },
  {
    "url": "static/montserrat-latin-400-normal-281179d375517d9c131b60e3397b79ff.woff"
  },
  {
    "url": "static/montserrat-latin-400-normal-acb6629fe45c43ad5d8ba47a1c95c9fd.woff2"
  },
  {
    "url": "static/montserrat-latin-500-normal-38a674fae449557fef97f120c301ff8d.woff2"
  },
  {
    "url": "static/montserrat-latin-500-normal-62a04d3d3d6d38ba2a92496367934ecc.woff"
  },
  {
    "url": "static/montserrat-latin-700-normal-56c09b9a46af6a54eeb30e554f833d13.woff2"
  },
  {
    "url": "static/montserrat-latin-700-normal-fb5068a547276441355d904f51c6d431.woff"
  },
  {
    "url": "styles.403d7a182cedb0530a2e.css"
  },
  {
    "url": "webpack-runtime-ae388d1246f2e58844d1.js"
  },
  {
    "url": "webpack-runtime-ae388d1246f2e58844d1.js.map",
    "revision": "d407abe899200ad36f0d2fc3a4a0bc45"
  },
  {
    "url": "webpack.stats.json",
    "revision": "0bcff22f37edc5e5aff8744d87d6b14e"
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
  if (!resources || !(await caches.match(`/app-5605c9d287823815702b.js`))) {
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
