import type { SVGProps } from "react";

export default function SystemAuditRoadmapIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 48 48" {...props}>
            <g
                fill="none"
                stroke="var(--logo-blue)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="12" y="10" width="24" height="28" rx="3" />
                <path d="M20 10h8a2 2 0 0 1 2 2v2H18v-2a2 2 0 0 1 2-2z" />
                <circle cx="24" cy="24" r="6" />
                <path d="M21.5 24l2 2 3-4" />
            </g>
        </svg>
    );
}
