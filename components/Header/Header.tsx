import Image from "next/image";
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
                    <Image
                        src="/logos/logo-mark.svg"
                        alt=""
                        width={64}
                        height={64}
                        className={styles.logoMark}
                    />
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
