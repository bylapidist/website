import Link from "next/link";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Container className={styles.inner} as="div" cq="page">
                <Link href="/" className={styles.logo} aria-label="Brett Dorrans">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 32 32"
                        className={styles.logoMark}
                    >
                        <rect width="32" height="32" rx="4" />
                    </svg>
                    <span>Brett Dorrans</span>
                </Link>
                <nav aria-label="Primary">
                    <ul className={styles.nav}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <ThemeToggle />
            </Container>
        </header>
    );
}

