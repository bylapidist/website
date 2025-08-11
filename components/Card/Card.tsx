import type { ElementType, ReactNode } from "react";
import styles from "./Card.module.scss";

interface Props {
    as?: ElementType;
    title: string;
    highlight?: boolean;
    children: ReactNode;
    footer?: ReactNode;
    headingLevel?: "h3" | "h4";
}

export default function Card({
    as: Component = "article",
    title,
    highlight,
    children,
    footer,
    headingLevel = "h3",
}: Props) {
    const Heading = headingLevel as ElementType;
    return (
        <Component
            className={styles.card}
            data-highlight={highlight || undefined}
        >
            <header className={styles.head}>
                <Heading>{title}</Heading>
            </header>
            <div className={styles.body}>{children}</div>
            {footer && <footer className={styles.foot}>{footer}</footer>}
        </Component>
    );
}
