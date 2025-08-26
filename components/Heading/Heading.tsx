import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import type { PolymorphicProps } from "@/types";
import styles from "./Heading.module.scss";

export type HeadingProps<As extends ElementType> = PolymorphicProps<
    As,
    {
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        id?: string;
        visuallyHidden?: boolean;
        children: ReactNode;
    }
>;

export default function Heading<As extends ElementType = "h1">({
    as,
    level = 1,
    id,
    visuallyHidden = false,
    className,
    children,
    ...rest
}: HeadingProps<As>) {
    const Component: ElementType = as ?? (`h${String(level)}` as ElementType);

    const semantic =
        as && !/^h[1-6]$/.test(String(Component))
            ? { role: "heading", "aria-level": level }
            : {};

    return (
        <Component
            id={id}
            data-level={level}
            className={clsx(
                styles.heading,
                className,
                visuallyHidden && "visually-hidden",
            )}
            {...semantic}
            {...rest}
        >
            {children}
        </Component>
    );
}

Heading.displayName = "Heading";
