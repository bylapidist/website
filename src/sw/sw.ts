/* eslint-disable no-restricted-globals */
declare const self: ServiceWorkerGlobalScope & {
    __PRECACHE?: string[];
    __SW_VERSION?: string;
};

const VERSION = self.__SW_VERSION || "dev";
const PRECACHE = `precache-${VERSION}`;
const PRECACHE_URLS = self.__PRECACHE ?? [];
const SCOPE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, "");

self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(PRECACHE);
            for (const url of PRECACHE_URLS) {
                try {
                    await cache.add(new Request(url, { cache: "reload" }));
                } catch (err) {
                    console.warn("SW: failed to precache", url, err);
                }
            }
            self.skipWaiting();
        })(),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(
                keys
                    .filter((key) => key !== PRECACHE)
                    .map((key) => caches.delete(key)),
            );
            await self.clients.claim();
        })(),
    );
});

self.addEventListener("message", (event) => {
    if (event.data === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

const ASSET_PATTERN = new RegExp(
    `^\\/_next\/static\/|\\.(?:js|css|json|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|otf|eot|mp3|mp4|webm|wav|ogg)$`,
);

self.addEventListener("fetch", (event) => {
    const { request } = event;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;
    const pathname = url.pathname;
    if (!pathname.startsWith(SCOPE_PATH)) return;
    const relativePath = pathname.slice(SCOPE_PATH.length) || "/";

    if (request.mode === "navigate") {
        event.respondWith(networkFirst(event));
        return;
    }

    if (ASSET_PATTERN.test(relativePath)) {
        event.respondWith(staleWhileRevalidate(request));
    }
});

async function networkFirst(event: FetchEvent): Promise<Response> {
    const cache = await caches.open(PRECACHE);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
        const response = await fetch(event.request, {
            signal: controller.signal,
        });
        clearTimeout(timeout);
        if (response && response.ok) {
            cache.put(event.request, response.clone());
            return response;
        }
        throw new Error("Network response not ok");
    } catch {
        const cached = await cache.match(event.request);
        return (
            cached ||
            new Response("Offline", { status: 503, statusText: "Offline" })
        );
    }
}

async function staleWhileRevalidate(request: Request): Promise<Response> {
    const cache = await caches.open(PRECACHE);
    const cached = await cache.match(request);
    const fetchPromise = fetch(request)
        .then((response) => {
            if (response && response.ok) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => undefined);
    return cached || (await fetchPromise) || new Response("", { status: 504 });
}
