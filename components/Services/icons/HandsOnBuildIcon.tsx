import type { SVGProps } from "react";

export default function HandsOnBuildIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 48 48" {...props}>
            <g
                fill="none"
                stroke="var(--logo-green)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 10h14l4 4-6 6h-6l-6-6z" />
                <path d="M20 20l12 12" />
                <line x1="32" y1="32" x2="28" y2="36" />
            </g>
        </svg>
    );
}
