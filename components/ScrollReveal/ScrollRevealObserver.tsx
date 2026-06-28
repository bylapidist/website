"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePrefersReducedMotion } from "@/hooks";

export default function ScrollRevealObserver() {
    const reduced = usePrefersReducedMotion();
    const pathname = usePathname();

    useEffect(() => {
        if (reduced) return;

        let observer: IntersectionObserver | null = null;

        // Defer one microtask so Next.js finishes updating the DOM after navigation
        const timeout = setTimeout(() => {
            const els = document.querySelectorAll<HTMLElement>(
                "[data-reveal]:not([data-visible])",
            );

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            (e.target as HTMLElement).dataset.visible = "";
                            observer?.unobserve(e.target);
                        }
                    });
                },
                { threshold: 0.08 },
            );

            els.forEach((el) => {
                observer?.observe(el);
            });
        }, 0);

        return () => {
            clearTimeout(timeout);
            observer?.disconnect();
        };
    }, [reduced, pathname]);

    return null;
}
