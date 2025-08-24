"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Dialog.module.scss";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
}

export default function Dialog({
    open,
    onClose,
    children,
    ...props
}: DialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const previous = document.activeElement as HTMLElement | null;
        const focusableSelectors =
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const node = dialogRef.current;
        const focusables = node
            ? Array.from(node.querySelectorAll<HTMLElement>(focusableSelectors))
            : [];
        focusables[0]?.focus();

        function handleKeydown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
                return;
            }
            if (event.key === "Tab" && focusables.length) {
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKeydown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.body.style.overflow = originalOverflow;
            previous?.focus();
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div
            className={styles.backdrop}
            role="presentation"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                ref={dialogRef}
                className={styles.dialog}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}
