"use client";

import type { ReactNode } from "react";

export type IconName =
    | "sun"
    | "moon"
    | "design-system-bootstrap"
    | "system-audit-roadmap"
    | "hands-on-build"
    | "consulting-team-uplift";

interface IconDefinition {
    viewBox: string;
    path: ReactNode;
}

export const icons: Record<IconName, IconDefinition> = {
    sun: {
        viewBox: "0 0 24 24",
        path: (
            <>
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <g strokeWidth="2" stroke="currentColor" fill="none">
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                </g>
            </>
        ),
    },
    moon: {
        viewBox: "0 0 24 24",
        path: (
            <path
                fill="currentColor"
                d="M12 22a10 10 0 0 0 9.94-9.06A8 8 0 1 1 12 2a10 10 0 0 0 0 20z"
            />
        ),
    },
    "design-system-bootstrap": {
        viewBox: "0 0 48 48",
        path: (
            <g
                fill="none"
                stroke="var(--colour-logo-yellow)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M24 6c4.5 4.5 7 10 7 16s-2.5 11.5-7 16c-4.5-4.5-7-10-7-16s2.5-11.5 7-16z" />
                <path d="M17 28l-4 6M31 28l4 6" />
                <circle cx="24" cy="18" r="4" />
                <path d="M24 38c0 3-2 5-2 5h4s-2-2-2-5z" />
                <path d="M12 34h6M30 34h6" />
            </g>
        ),
    },
    "system-audit-roadmap": {
        viewBox: "0 0 48 48",
        path: (
            <g
                fill="none"
                stroke="var(--colour-logo-blue)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="12" y="10" width="24" height="28" rx="3" />
                <path d="M20 10h8a2 2 0 0 1 2 2v2H18v-2a2 2 0 0 1 2-2z" />
                <circle cx="24" cy="24" r="6" />
                <path d="M21.5 24l2 2 3-4" />
            </g>
        ),
    },
    "hands-on-build": {
        viewBox: "0 0 48 48",
        path: (
            <g
                fill="none"
                stroke="var(--colour-logo-green)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 10h14l4 4-6 6h-6l-6-6z" />
                <path d="M20 20l12 12" />
                <line x1="32" y1="32" x2="28" y2="36" />
            </g>
        ),
    },
    "consulting-team-uplift": {
        viewBox: "0 0 48 48",
        path: (
            <g
                fill="none"
                stroke="var(--colour-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="24" y1="40" x2="24" y2="10" />
                <polyline points="16,18 24,10 32,18" />
            </g>
        ),
    },
};
