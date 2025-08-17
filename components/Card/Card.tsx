import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

interface Props {
    as?: ElementType;
    title: string;
    highlight?: boolean;
    children: ReactNode;
    headingLevel?: "h2" | "h3" | "h4";
    size?: "md" | "lg";
    className?: string;
    icon?: ReactNode;
}

export default function Card({
    as: Component = "article",
    title,
    highlight,
    children,
    headingLevel = "h3",
    size = "md",
    className,
    icon,
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
                {icon}
            </header>
            <div className={styles.body}>{children}</div>
        </Component>
    );
}
