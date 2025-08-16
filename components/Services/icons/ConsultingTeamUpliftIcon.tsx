import type { SVGProps } from "react";

export default function ConsultingTeamUpliftIcon(
    props: SVGProps<SVGSVGElement>,
) {
    return (
        <svg aria-hidden="true" viewBox="0 0 48 48" {...props}>
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
        </svg>
    );
}
