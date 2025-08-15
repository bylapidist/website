import type { SVGProps } from "react";

export default function DesignSystemBootstrapIcon(
    props: SVGProps<SVGSVGElement>,
) {
    return (
        <svg aria-hidden="true" viewBox="0 0 48 48" {...props}>
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
        </svg>
    );
}
