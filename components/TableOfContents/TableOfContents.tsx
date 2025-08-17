import type { FC } from "react";
import styles from "./TableOfContents.module.scss";

export type TableOfContentsHeading = {
    id: string;
    text: string;
    level: number;
};

type Props = {
    headings: TableOfContentsHeading[];
};

const TableOfContents: FC<Props> = ({ headings }) => {
    if (headings.length === 0) {
        return null;
    }

    return (
        <nav aria-label="Table of contents" className={styles.toc}>
            <ol className={styles.list}>
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={styles.item}
                        data-level={heading.level}
                    >
                        <a href={`#${heading.id}`} className={styles.link}>
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default TableOfContents;
