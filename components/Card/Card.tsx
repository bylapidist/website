import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import Heading from "@/components/Heading/Heading";
import { Size, Variant } from "@/types";
import styles from "./Card.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    heading?: ReactNode;
    highlight?: boolean;
    children: ReactNode;
    headingLevel?: 2 | 3 | 4;
    size?: Size.MD | Size.LG;
    className?: string;
    icon?: ReactNode;
    variant?: Variant.Testimonial | Variant.Link | Variant.Step;
    href?: string;
}

const Card = forwardRef<HTMLElement, Props>(
    (
        {
            as: Component = "article",
            heading,
            highlight,
            children,
            headingLevel = 3,
            size = Size.MD,
            className,
            icon,
            variant,
            ...rest
        },
        ref,
    ) => {
        const classes = clsx(styles.card, className);

        if (variant === Variant.Testimonial || variant === Variant.Step) {
            return (
                <Component
                    ref={ref}
                    className={classes}
                    data-highlight={highlight || undefined}
                    data-size={size}
                    data-variant={variant}
                    {...rest}
                >
                    {children}
                </Component>
            );
        }

        return (
            <Component
                ref={ref}
                className={classes}
                data-highlight={highlight || undefined}
                data-size={size}
                data-variant={variant}
                {...rest}
            >
                {(heading || icon) && (
                    <header className={styles.head}>
                        {heading && (
                            <Heading level={headingLevel}>{heading}</Heading>
                        )}
                        {icon}
                    </header>
                )}
                <div className={styles.body}>{children}</div>
            </Component>
        );
    },
);

Card.displayName = "Card";

export default Card;
