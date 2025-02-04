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
    "revision": "80562165bb11228482020e84f29ae3dd"
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
    "revision": "1bed34cd418ebc25fdd035ac4be5ac53"
  },
  {
    "url": "404/index.html",
    "revision": "99cb67f7aba35761e55fb952817a730a"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ced65706d106ccbe7a5d.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ced65706d106ccbe7a5d.js.LICENSE.txt",
    "revision": "b37d6def533386fa714fa24b2a9c288b"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-ced65706d106ccbe7a5d.js.map",
    "revision": "2d9c081fb029e91f2782cbece517757b"
  },
  {
    "url": "app-91bba6aef6aa78a0adfa.js"
  },
  {
    "url": "app-91bba6aef6aa78a0adfa.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-91bba6aef6aa78a0adfa.js.map",
    "revision": "e767cd396a9c851d5129a0dd22d840d5"
  },
  {
    "url": "brett-dorrans-cv.pdf",
    "revision": "ad8e3d5941bc7a8e65e554eae3721fae"
  },
  {
    "url": "c16184b3-1ef7a8e0b83688ec4918.js"
  },
  {
    "url": "c16184b3-1ef7a8e0b83688ec4918.js.LICENSE.txt",
    "revision": "a3b5c6613e3595a1b5e50b4a4c176119"
  },
  {
    "url": "c16184b3-1ef7a8e0b83688ec4918.js.map",
    "revision": "339d50058da73eba2ceafa9045f65891"
  },
  {
    "url": "chunk-map.json",
    "revision": "bf50b4ca97cdf96438494a046c16106c"
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
    "url": "component---src-pages-index-tsx-b9332f3b3f20d11371e9.js"
  },
  {
    "url": "component---src-pages-index-tsx-b9332f3b3f20d11371e9.js.map",
    "revision": "bb25f67dcd39a1c79947eef97384ec41"
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
    "url": "illustration/nessa.jpeg",
    "revision": "6b9eb997a8ec989d3d4ebf331ddcfb30"
  },
  {
    "url": "illustration/self-portrait.jpeg",
    "revision": "b2eedfd489102b924f79d5489922cb4d"
  },
  {
    "url": "index.html",
    "revision": "5c5e2b5f2ceb373943f4d7a6e58059bc"
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
    "revision": "5334f28d70f7a2a96f8d608ec2d1cab0"
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
    "revision": "a109bd5f96b19d233b07979b76a534ff"
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
    "revision": "f0c522b4aa81cc1043929faf4cd4f6d9"
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
    "url": "styles.405190e5ca59e37e307a.css"
  },
  {
    "url": "webpack-runtime-6fc30e97e726c07e8078.js"
  },
  {
    "url": "webpack-runtime-6fc30e97e726c07e8078.js.map",
    "revision": "c1bf8ebf2b8fffd0e94f25c44b41670c"
  },
  {
    "url": "webpack.stats.json",
    "revision": "c0257799a45b36330be679324fcfd8db"
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
  if (!resources || !(await caches.match(`/app-91bba6aef6aa78a0adfa.js`))) {
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
