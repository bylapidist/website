import Link from "next/link";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Container className={styles.inner} as="div" cq="page">
                <Link
                    href="/"
                    className={styles.logo}
                    aria-label="Brett Dorrans"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 64 64"
                        className={styles.logoMark}
                    >
                        <polygon
                            className={styles.logoBlue}
                            points="0,0 0,32 32,32"
                        ></polygon>
                        <polygon
                            className={styles.logoGreen}
                            points="0,32 0,64 32,64"
                        ></polygon>
                        <polygon
                            className={styles.logoYellow}
                            points="32,0 32,64 64,32"
                        ></polygon>
                    </svg>
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
