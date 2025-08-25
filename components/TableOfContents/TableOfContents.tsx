"use client";

import type { FC, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Card, VisuallyHidden } from "@/components";
import { useDisclosure } from "@/hooks";
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
    const disclosure = useDisclosure({ initialOpen: true });
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [headings, disclosure.isOpen]);

    if (headings.length === 0) {
        return null;
    }

    const label = disclosure.isOpen
        ? "Collapse table of contents"
        : "Expand table of contents";

    return (
        <Card
            as="nav"
            aria-labelledby="toc-heading"
            className={styles.toc}
            heading={<span id="toc-heading">Table of contents</span>}
            icon={
                <button
                    {...disclosure.getTriggerProps({
                        type: "button" as const,
                        className: styles.toggle,
                        "aria-label": label,
                    })}
                >
                    <ChevronIcon className={styles.icon} />
                    <VisuallyHidden>{label}</VisuallyHidden>
                </button>
            }
            headingLevel={2}
            headingClassName={styles.heading}
        >
            <div
                ref={contentRef}
                style={{ height: disclosure.isOpen ? height : 0 }}
                className={clsx(
                    styles.content,
                    !disclosure.isOpen && styles.collapsed,
                )}
                {...disclosure.getPanelProps()}
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
        </Card>
    );
};

export default TableOfContents;
