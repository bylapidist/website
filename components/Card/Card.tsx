"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import Link from "next/link";
import Heading from "@/components/Heading/Heading";
import { Size, Variant } from "@/types";
import styles from "./Card.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    heading?: ReactNode;
    headingClassName?: string;
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
            as: asProp,
            heading,
            headingClassName,
            highlight,
            children,
            headingLevel = 3,
            size = Size.MD,
            className,
            icon,
            variant,
            href,
            ...rest
        },
        ref,
    ) => {
        const Component: ElementType = asProp ?? (href ? Link : "article");
        const classes = clsx(styles.card, className);

        if (variant === Variant.Testimonial || variant === Variant.Step) {
            return (
                <Component
                    ref={ref}
                    className={classes}
                    data-highlight={highlight || undefined}
                    data-size={size}
                    data-variant={variant}
                    href={href}
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
                href={href}
                {...rest}
            >
                {(heading || icon) && (
                    <header className={styles.head}>
                        {heading && (
                            <Heading
                                level={headingLevel}
                                className={headingClassName}
                            >
                                {heading}
                            </Heading>
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
