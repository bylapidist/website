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
    "revision": "aa0ff107fb5e1f2fd6a472bc91c929c0"
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
    "revision": "b3c030455c785dd917cf296361285fe4"
  },
  {
    "url": "404/index.html",
    "revision": "ad816bb2cd83e4365ae88d41e285853c"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-bd74fbaaccab28f53bf2.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-bd74fbaaccab28f53bf2.js.LICENSE.txt",
    "revision": "b37d6def533386fa714fa24b2a9c288b"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-bd74fbaaccab28f53bf2.js.map",
    "revision": "5fcb4cea67da09b69c7ecb2297e88ae9"
  },
  {
    "url": "app-43982ba31c05d4eab908.js"
  },
  {
    "url": "app-43982ba31c05d4eab908.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-43982ba31c05d4eab908.js.map",
    "revision": "cc3bd55c27bc7e4e8d10d6c4df04fd75"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "73bf62ec0cfcff22c1e6796b0f1d5650"
  },
  {
    "url": "c16184b3-ca7b7ec54e06b74d6bb4.js"
  },
  {
    "url": "c16184b3-ca7b7ec54e06b74d6bb4.js.LICENSE.txt",
    "revision": "a3b5c6613e3595a1b5e50b4a4c176119"
  },
  {
    "url": "c16184b3-ca7b7ec54e06b74d6bb4.js.map",
    "revision": "2b4b0a45273a50f9b988ea1d2e2d7140"
  },
  {
    "url": "chunk-map.json",
    "revision": "ff55df97dd6e7958a5414a3d1ad037f3"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-367a9a988a368ffa77b9.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-367a9a988a368ffa77b9.js.map",
    "revision": "cbade61dae5de48d2188b16fb19bdbff"
  },
  {
    "url": "component---src-pages-404-tsx-0745ecf886a670a14a8c.js"
  },
  {
    "url": "component---src-pages-404-tsx-0745ecf886a670a14a8c.js.map",
    "revision": "cec016a36cdc77dae39c888564b91ded"
  },
  {
    "url": "component---src-pages-index-tsx-5bf9078f93e742f74980.js"
  },
  {
    "url": "component---src-pages-index-tsx-5bf9078f93e742f74980.js.map",
    "revision": "62e7b5cb5e671697070b7fcf90386cdd"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "76a6114a36f6348a1fd72a6bddf3ea35"
  },
  {
    "url": "framework-4ef23152d6b3a4de38a6.js"
  },
  {
    "url": "framework-4ef23152d6b3a4de38a6.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-4ef23152d6b3a4de38a6.js.map",
    "revision": "4f5b8042abdf371ef7ec44eecbde127d"
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
    "url": "illustration/nessa.jpeg",
    "revision": "6b9eb997a8ec989d3d4ebf331ddcfb30"
  },
  {
    "url": "illustration/self-portrait.jpeg",
    "revision": "b2eedfd489102b924f79d5489922cb4d"
  },
  {
    "url": "index.html",
    "revision": "a40321b87742da72d3e302bb5d1c7432"
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
    "revision": "9fd95eb9bbf12af2eef852b5c441d4ea"
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
    "revision": "175781d45899248e47c7ae518e8a5240"
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
    "revision": "08cb518a7bf60a6869769b3c6914b7ac"
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
    "url": "static/montserrat-latin-400-normal-30be1f65d8fd296bdbbe740427639aaf.woff"
  },
  {
    "url": "static/montserrat-latin-400-normal-4bc3bc9536f24ed8076d0baac5ec13f2.woff2"
  },
  {
    "url": "static/montserrat-latin-500-normal-2f4a3db6e1ac2d366123dc4bad4d8cb4.woff"
  },
  {
    "url": "static/montserrat-latin-500-normal-f03befcb0404b9b1747ff7869c98316f.woff2"
  },
  {
    "url": "static/montserrat-latin-700-normal-8ee8b516892b1fa0a70bc062f5325563.woff"
  },
  {
    "url": "static/montserrat-latin-700-normal-f26608f1996828b9e0d43367fa906b76.woff2"
  },
  {
    "url": "styles.7be4d818861b575611bb.css"
  },
  {
    "url": "webpack-runtime-ed0e4d81dd9b4b304c1e.js"
  },
  {
    "url": "webpack-runtime-ed0e4d81dd9b4b304c1e.js.map",
    "revision": "b4162492051334280ba652f4ee83d5b8"
  },
  {
    "url": "webpack.stats.json",
    "revision": "138d9a9ee61c09acefc77b63d4cb6444"
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
  if (!resources || !(await caches.match(`/app-43982ba31c05d4eab908.js`))) {
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
