import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

interface Props {
    as?: ElementType;
    title: string;
    highlight?: boolean;
    children: ReactNode;
    headingLevel?: "h3" | "h4";
    size?: "md" | "lg";
    className?: string;
}

export default function Card({
    as: Component = "article",
    title,
    highlight,
    children,
    headingLevel = "h3",
    size = "md",
    className,
}: Props) {
    const Heading = headingLevel as ElementType;
    const classes = clsx(styles.card, className);
    return (
        <Component
            className={classes}
            data-highlight={highlight || undefined}
            data-size={size}
        >
            <header className={styles.head}>
                <Heading>{title}</Heading>
            </header>
            <div className={styles.body}>{children}</div>
        </Component>
    );
}
