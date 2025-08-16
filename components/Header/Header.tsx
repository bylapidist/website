import Link from "next/link";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";
import LogoMark from "./LogoMark";

export default function Header() {
    return (
        <header className={styles.header}>
            <Container className={styles.inner} as="div" cq="page">
                <Link
                    href="/"
                    className={styles.logo}
                    aria-label="Brett Dorrans"
                >
                    <LogoMark />
                    <span className={styles.logoLockup}>
                        <span>Brett</span>
                        <span>Dorrans</span>
                    </span>
                </Link>
                <ThemeToggle />
            </Container>
        </header>
    );
}
