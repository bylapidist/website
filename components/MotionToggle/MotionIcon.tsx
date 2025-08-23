import type { SVGProps } from "react";

export default function MotionIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <g fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12a8 8 0 0 1 16 0" />
                <path d="M6 12a6 6 0 0 1 12 0" />
                <path d="M8 12a4 4 0 0 1 8 0" />
            </g>
        </svg>
    );
}
