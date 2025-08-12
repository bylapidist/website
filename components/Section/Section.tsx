import type { ReactNode, CSSProperties } from "react";
import Container from "@/components/Container/Container";

interface Props {
    id?: string;
    labelledBy: string;
    className?: string;
    containerSize?: "s" | "m" | "l";
    style?: CSSProperties;
    contentVisibility?: boolean;
    children: ReactNode;
}

export default function Section({
    id,
    labelledBy,
    className,
    containerSize,
    style,
    contentVisibility = true,
    children,
}: Props) {
    const sectionStyle = contentVisibility
        ? ({ contentVisibility: "auto", ...style } as CSSProperties)
        : style;

    return (
        <section
            id={id}
            role="region"
            aria-labelledby={labelledBy}
            className={className}
            style={sectionStyle}
        >
            <Container size={containerSize}>{children}</Container>
        </section>
    );
}
