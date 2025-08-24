import type { CSSProperties, ReactNode } from "react";
import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import type { Size } from "@/packages/types";

interface Props {
    id?: string;
    labelledBy?: string;
    heading?: ReactNode;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    headingClassName?: string;
    className?: string;
    containerSize?: Size;
    style?: CSSProperties;
    /**
     * Enables `content-visibility: auto` for this section.
     * Disabled by default due to Safari animation issues.
     */
    contentVisibility?: boolean;
    children: ReactNode;
}

export default function Section({
    id,
    labelledBy,
    heading,
    headingLevel = 2,
    headingClassName,
    className,
    containerSize,
    style,
    contentVisibility = false,
    children,
}: Props) {
    const sectionStyle = contentVisibility
        ? ({ contentVisibility: "auto", ...style } as CSSProperties)
        : style;

    const headingId = heading
        ? (labelledBy ?? (id ? `${id}-heading` : undefined))
        : labelledBy;

    return (
        <section
            id={id}
            aria-labelledby={headingId}
            className={className}
            style={sectionStyle}
        >
            <Container size={containerSize}>
                {heading && (
                    <Heading
                        id={headingId}
                        level={headingLevel}
                        className={headingClassName}
                    >
                        {heading}
                    </Heading>
                )}
                {children}
            </Container>
        </section>
    );
}
