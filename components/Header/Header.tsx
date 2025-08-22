"use client";

import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import {
    autoUpdate,
    FloatingFocusManager,
    FloatingPortal,
    offset,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
    useTransitionStyles,
} from "@floating-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { siteLinks } from "@/lib/site-links";
import usePrefersReducedMotion from "@/lib/use-prefers-reduced-motion";
import styles from "./Header.module.scss";
import LogoMark from "./LogoMark";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const prefersReducedMotion = usePrefersReducedMotion();

    const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
        open,
        onOpenChange: setOpen,
        placement: "bottom-end",
        middleware: [offset(8)],
        whileElementsMounted: autoUpdate,
        strategy: "fixed",
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role,
    ]);
    const { isMounted, styles: transitionStyles } = useTransitionStyles(
        context,
        {
            duration: prefersReducedMotion ? 0 : { open: 200, close: 150 },
            initial: prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, transform: "scale(0.95)" },
        },
    );

    const menuStyles = useMemo<CSSProperties>(() => {
        const transform = [floatingStyles.transform, transitionStyles.transform]
            .filter((value): value is string => Boolean(value))
            .join(" ");
        return { ...floatingStyles, ...transitionStyles, transform };
    }, [floatingStyles, transitionStyles]);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 0);
        }

        function onResize() {
            if (headerRef.current) {
                document.documentElement.style.setProperty(
                    "--header-offset",
                    `${String(headerRef.current.offsetHeight)}px`,
                );
            }
        }

        onScroll();
        onResize();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        if (window.location.hash) {
            const el = document.getElementById(
                window.location.hash.substring(1),
            );
            el?.scrollIntoView();
        }
    }, []);

    return (
        <header
            ref={headerRef}
            className={styles.header}
            data-scrolled={scrolled || undefined}
        >
            <Container className={styles.inner} as="div" cq="page">
                <nav>
                    <Link
                        href="/"
                        className={styles.logo}
                        aria-label="Brett Dorrans"
                        aria-current={pathname === "/" ? "page" : undefined}
                    >
                        <LogoMark />
                        <span className={styles.logoLockup}>
                            <span>Brett</span>
                            <span>Dorrans</span>
                        </span>
                    </Link>
                </nav>
                <div className={styles.actions}>
                    <ThemeToggle />
                    <button
                        type="button"
                        className={styles.burger}
                        ref={refs.setReference}
                        data-open={open || undefined}
                        {...getReferenceProps({
                            "aria-label": "Toggle navigation menu",
                            "aria-expanded": open,
                        })}
                    >
                        <span className={styles.burgerIcon} />
                    </button>
                </div>
            </Container>
            {isMounted && (
                <FloatingPortal>
                    <FloatingFocusManager
                        context={context}
                        modal={false}
                        returnFocus
                    >
                        <div
                            ref={refs.setFloating}
                            className={styles.menu}
                            style={menuStyles}
                            {...getFloatingProps()}
                        >
                            <nav aria-label="Site">
                                <ul className={styles.menuList}>
                                    {siteLinks.map(({ href, label }) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                onClick={() => {
                                                    setOpen(false);
                                                }}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </header>
    );
}
