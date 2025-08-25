import type {
    CSSProperties,
    ElementType,
    HTMLAttributes,
    ReactNode,
} from "react";
import clsx from "clsx";
import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import type { Size } from "@/types";
import styles from "./Section.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    labelledBy?: string;
    heading?: ReactNode;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    headingClassName?: string;
    containerSize?: Size;
    /** Render children within the Container component */
    container?: boolean;
    /**
     * Enables `content-visibility: auto` for this section.
     * Disabled by default due to Safari animation issues.
     */
    contentVisibility?: boolean;
    gap?: string;
    orientation?: "vertical" | "horizontal";
    layout?: "stack" | "grid" | "card";
    children: ReactNode;
}

export default function Section({
    as: Component = "section",
    id,
    labelledBy,
    heading,
    headingLevel = 2,
    headingClassName,
    className,
    containerSize,
    container = true,
    style,
    contentVisibility = false,
    gap,
    orientation = "vertical",
    layout = "stack",
    children,
    ...rest
}: Props) {
    const headingId = heading
        ? (labelledBy ?? (id ? `${id}-heading` : undefined))
        : labelledBy;

    const sectionStyle = contentVisibility
        ? ({ contentVisibility: "auto", ...style } as CSSProperties)
        : style;

    const layoutStyle =
        gap || layout === "card"
            ? ({
                  ...(layout === "grid" || layout === "card"
                      ? {
                            "--grid-gap": gap ?? "var(--space-scale-200)",
                        }
                      : { "--stack-gap": gap }),
              } as CSSProperties)
            : undefined;

    const layoutClasses = clsx(
        layout === "grid" || layout === "card" ? styles.grid : styles.stack,
        layout === "stack" &&
            (orientation === "horizontal"
                ? styles.horizontal
                : styles.vertical),
        layout === "card" && styles.cardGrid,
    );

    const content = (
        <>
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
        </>
    );

    if (container) {
        return (
            <Component
                id={id}
                aria-labelledby={headingId}
                className={className}
                style={sectionStyle}
                {...rest}
            >
                <Container
                    size={containerSize}
                    className={layoutClasses}
                    style={layoutStyle}
                >
                    {content}
                </Container>
            </Component>
        );
    }

    const combinedStyle = contentVisibility
        ? ({
              contentVisibility: "auto",
              ...layoutStyle,
              ...style,
          } as CSSProperties)
        : ({ ...layoutStyle, ...style } as CSSProperties);

    return (
        <Component
            id={id}
            aria-labelledby={headingId}
            className={clsx(layoutClasses, className)}
            style={combinedStyle}
            {...rest}
        >
            {content}
        </Component>
    );
}
