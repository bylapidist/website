"use client";

import type { FC, SVGProps } from "react";
import { useState } from "react";
import clsx from "clsx";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./TableOfContents.module.scss";

export type TableOfContentsHeading = {
    id: string;
    text: string;
    level: number;
};

type Props = {
    headings: TableOfContentsHeading[];
};

function ChevronIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M6 15 12 9l6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const TableOfContents: FC<Props> = ({ headings }) => {
    const [open, setOpen] = useState(true);

    if (headings.length === 0) {
        return null;
    }

    const label = open
        ? "Collapse table of contents"
        : "Expand table of contents";

    return (
        <nav aria-labelledby="toc-heading" className={styles.toc}>
            <div className={styles.header}>
                <h2 id="toc-heading">Table of contents</h2>
                <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={open}
                    aria-controls="toc-list"
                    onClick={() => {
                        setOpen((prev) => !prev);
                    }}
                >
                    <ChevronIcon className={styles.icon} />
                    <VisuallyHidden>{label}</VisuallyHidden>
                </button>
            </div>
            <div
                id="toc-list"
                className={clsx(styles.content, !open && styles.collapsed)}
            >
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
            </div>
        </nav>
    );
};

export default TableOfContents;
