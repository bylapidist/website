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
    "revision": "74ce62e52af967d4ca1f8dcbec47f839"
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
    "revision": "4654b7621184a74bbf89d88b09ee1fb7"
  },
  {
    "url": "404/index.html",
    "revision": "27e1f260f2842520aad483c1e67e8899"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-3fb4003ae860d2d13874.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-3fb4003ae860d2d13874.js.LICENSE.txt",
    "revision": "b37d6def533386fa714fa24b2a9c288b"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-3fb4003ae860d2d13874.js.map",
    "revision": "2d95c94b1654d68cb01e600a33976d92"
  },
  {
    "url": "app-fa0002bb8210e9819f93.js"
  },
  {
    "url": "app-fa0002bb8210e9819f93.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-fa0002bb8210e9819f93.js.map",
    "revision": "ba0b22c5d96269c23410f6bdf8f7ea27"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "b7110e21e33a4f8ef2de346681748479"
  },
  {
    "url": "c16184b3-11c01f0473a8e0afcadf.js"
  },
  {
    "url": "c16184b3-11c01f0473a8e0afcadf.js.map",
    "revision": "ad8c04e88578f11afa42e0585f2ae322"
  },
  {
    "url": "chunk-map.json",
    "revision": "4510361c7c6fe31ff23c8fa869772257"
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
    "url": "component---src-pages-index-tsx-1a46cae0bfede0086643.js"
  },
  {
    "url": "component---src-pages-index-tsx-1a46cae0bfede0086643.js.map",
    "revision": "25b3e47f9ef9eedfc4e954ea4b869a26"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "76a6114a36f6348a1fd72a6bddf3ea35"
  },
  {
    "url": "framework-9ae151d45a810c769724.js"
  },
  {
    "url": "framework-9ae151d45a810c769724.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-9ae151d45a810c769724.js.map",
    "revision": "1e9ace9d870ed3c8759bb8519f300ebd"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "35f124148ae5d52e57f5b4ff7fb711df"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6041a6de3b07bda07448f7291c7b13e1"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "754300ee383fd2ced705b0ef929d44e3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "2586d4d0ca7c7f0c332dd81c73184a43"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "100a17f71d00a2e14a7aa148a2abd40c"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "59dc13db1ae1443268e65a41fb08a4b6"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "02d1c5c70ab7b7b573231aa0ef56367b"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c304937938a024b10fe408b867d1c996"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "29eb5c5c085b09cfcc15636661a9d6d0"
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
    "revision": "1d406603a09458fed5737b256b744257"
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
    "revision": "790e992e0ee8e01f37711b22f19c378e"
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
    "revision": "02d1b218e50c1f0c4c880272b2945e48"
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
    "url": "static/albert-sans-latin-400-normal-bd8b14c373d43fb7dd92867285e97a84.woff"
  },
  {
    "url": "static/albert-sans-latin-500-normal-ac7f6b9bcc90c360bbddfc85d8c8cdf7.woff2"
  },
  {
    "url": "static/albert-sans-latin-500-normal-db782d2be49acf7e323f3bb4a9853fba.woff"
  },
  {
    "url": "static/albert-sans-latin-700-normal-48f891cacb11bf9e6d7440797025e311.woff2"
  },
  {
    "url": "static/albert-sans-latin-700-normal-8da5783c27080a3a9b1c872854e7c42d.woff"
  },
  {
    "url": "static/montserrat-latin-400-normal-9ef09180105730e3cb92149072fb90b8.woff2"
  },
  {
    "url": "static/montserrat-latin-400-normal-b48c3d9a8c0a49c1c7b4227697f00c48.woff"
  },
  {
    "url": "static/montserrat-latin-500-normal-63b09632586acfb651b601c34e2355c6.woff2"
  },
  {
    "url": "static/montserrat-latin-500-normal-dc9466031ec251207907d2a101925a59.woff"
  },
  {
    "url": "static/montserrat-latin-700-normal-8ee112252f6bd5f0d5bd6de1932b4713.woff2"
  },
  {
    "url": "static/montserrat-latin-700-normal-f1715a34ee999e9315e6cf06dc9da9f4.woff"
  },
  {
    "url": "styles.89cc9ac40ed9a9e5034a.css"
  },
  {
    "url": "webpack-runtime-de9d2fd0a3db62fb75d1.js"
  },
  {
    "url": "webpack-runtime-de9d2fd0a3db62fb75d1.js.map",
    "revision": "ffd21cd5f3152ce951866be6a30a745d"
  },
  {
    "url": "webpack.stats.json",
    "revision": "220b55377702db11256a9900e535124e"
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
  if (!resources || !(await caches.match(`/app-fa0002bb8210e9819f93.js`))) {
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
