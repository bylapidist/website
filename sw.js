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
    "revision": "b81c0f07c6b39af3e54759a71a7ba84f"
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
    "revision": "f93c4548cbb22e1546c0b1a332d593b8"
  },
  {
    "url": "404/index.html",
    "revision": "0e995156a0b3327fcd2433c4549d5107"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-05c426a6bf29863e2b3e.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-05c426a6bf29863e2b3e.js.LICENSE.txt",
    "revision": "50356a9d5090f44699126fc40c655fc4"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-05c426a6bf29863e2b3e.js.map",
    "revision": "6b434d747146f039197530196602132c"
  },
  {
    "url": "app-a991d1e8df322e6a6788.js"
  },
  {
    "url": "app-a991d1e8df322e6a6788.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-a991d1e8df322e6a6788.js.map",
    "revision": "55808f0be58df0c3c604a50942220fea"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "d85590f69523bba35b5a7eb0e36e2930"
  },
  {
    "url": "chunk-map.json",
    "revision": "572439291f7b16f6dc8915427d46df84"
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
    "url": "component---src-pages-index-tsx-7ee9cb5ec9d2e259317b.js"
  },
  {
    "url": "component---src-pages-index-tsx-7ee9cb5ec9d2e259317b.js.map",
    "revision": "069f38d30ac0a4d29fc53ede986bf89c"
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
    "revision": "124fd6bb9544569fe7bbc1a9bb74572d"
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
    "revision": "967fbe9d4c3f79c0db31769ce1f197d3"
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
    "revision": "1c8923caa75453eb429e9bbebddbd6d7"
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
    "revision": "0ca76f875e0d7d821a74feecaf5479da"
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
    "url": "styles.dcfecf453c30527bb24e.css"
  },
  {
    "url": "webpack-runtime-7c9a389a0d92233131b3.js"
  },
  {
    "url": "webpack-runtime-7c9a389a0d92233131b3.js.map",
    "revision": "a036d27d4c2c4b7146309ac1341bc1a3"
  },
  {
    "url": "webpack.stats.json",
    "revision": "6dd4897c7044508fe31b79fc48407b3d"
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
  if (!resources || !(await caches.match(`/app-a991d1e8df322e6a6788.js`))) {
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
