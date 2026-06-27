"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks";

export default function ScrollRevealObserver() {
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (reduced) return;

        const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        (e.target as HTMLElement).dataset.visible = "";
                        observer.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.08 },
        );

        els.forEach((el) => {
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, [reduced]);

    return null;
}
