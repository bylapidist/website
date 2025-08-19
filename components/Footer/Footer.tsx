import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footerContainer}>
                <nav aria-label="Footer">
                    <ul className={styles.footerNav}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/articles">Articles</Link>
                        </li>
                        <li>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/#services">Services</a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/#contact">Contact</a>
                        </li>
                        <li>
                            <Link href="/accessibility-statement">
                                Accessibility Statement
                            </Link>
                        </li>
                        <li>
                            <Link href="/ai-ethics-statement">
                                AI Ethics Statement
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className={styles.social}>
                    <li>
                        <a
                            href="https://linkedin.com/in/brettdorrans"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/bylapidist"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
                <p>
                    Lapidist Ltd, registered in Scotland.󠁿 Company number
                    SC549211.
                </p>
                <p>&copy; Brett Dorrans</p>
            </Container>
        </footer>
    );
}
