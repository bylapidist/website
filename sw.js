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
    "revision": "525efbf8ee2cc47cd6cdc8b068e5a5d0"
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
    "revision": "7c6bfd01ad4f88be00938992c9837c5e"
  },
  {
    "url": "404/index.html",
    "revision": "1ff8d4b6d56d6e9993e4712d1ade95bc"
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
    "revision": "2866156356c4c7a18056bd6f2874cb6e"
  },
  {
    "url": "chunk-map.json",
    "revision": "bccc61de3a4d581838c15a535b3abea8"
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
    "url": "component---src-pages-index-tsx-79b2dc44a0da0697eddd.js"
  },
  {
    "url": "component---src-pages-index-tsx-79b2dc44a0da0697eddd.js.map",
    "revision": "66055779572bf584988feb6b0cccea88"
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
    "revision": "9a3511f0f8e3c75ed6f0d7e0f9c7c0f7"
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
    "revision": "25841e10887083a6c7ac9c8457526d5b"
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
    "revision": "4664ca0c6bcab9c05e09b91ff358e5d0"
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
    "revision": "2c8e3474d59ae19363c0159038b4737c"
  },
  {
    "url": "page-data/sq/d/3530040381.json",
    "revision": "6c0d17c48ed4dc3291bdf1ea67f7d915"
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
    "url": "static/montserrat-latin-400-normal-0f1794a79a689a577c2ac5f4af6b235e.woff"
  },
  {
    "url": "static/montserrat-latin-400-normal-acb6629fe45c43ad5d8ba47a1c95c9fd.woff2"
  },
  {
    "url": "static/montserrat-latin-500-normal-38a674fae449557fef97f120c301ff8d.woff2"
  },
  {
    "url": "static/montserrat-latin-500-normal-7050af035dd7341a04f9e016579aec3b.woff"
  },
  {
    "url": "static/montserrat-latin-700-normal-56c09b9a46af6a54eeb30e554f833d13.woff2"
  },
  {
    "url": "static/montserrat-latin-700-normal-e8155b435ce17d7f08f95d58880258bd.woff"
  },
  {
    "url": "styles.160832e58419368d8da5.css"
  },
  {
    "url": "webpack-runtime-9d0f3e602a918a724021.js"
  },
  {
    "url": "webpack-runtime-9d0f3e602a918a724021.js.map",
    "revision": "6db094591b44eea02ffb45e784967187"
  },
  {
    "url": "webpack.stats.json",
    "revision": "af2cc3735797e79173ff0095d98e8d9a"
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
