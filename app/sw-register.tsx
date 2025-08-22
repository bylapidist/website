"use client";

import { useEffect } from "react";

export default function SwRegister() {
    useEffect(() => {
        if (
            process.env.NODE_ENV !== "production" ||
            !("serviceWorker" in navigator)
        ) {
            return;
        }

        const rawBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
        const base = rawBase ? `/${rawBase.replace(/^\/|\/$/g, "")}` : "";
        const url = `${base}/sw.js`;

        const register = async () => {
            try {
                const regs = await navigator.serviceWorker.getRegistrations();
                await Promise.all(
                    regs
                        .filter((r) => !r.active?.scriptURL.endsWith("/sw.js"))
                        .map((r) => r.unregister()),
                );

                const reg = await navigator.serviceWorker.register(url);
                if (reg.waiting) {
                    reg.waiting.postMessage("SKIP_WAITING");
                } else {
                    reg.addEventListener("updatefound", () => {
                        const sw = reg.installing;
                        sw?.addEventListener("statechange", () => {
                            if (sw.state === "installed") {
                                sw.postMessage("SKIP_WAITING");
                            }
                        });
                    });
                }
            } catch {
                /* ignore */
            }
        };

        void register();
    }, []);

    return null;
}
