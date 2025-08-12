import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <nav aria-label="Footer">
                    <ul className={styles.footerNav}>
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
                <p>
                    Lapidist Ltd, registered in Scotland. Company number
                    SC549211.
                </p>
                <p>© {new Date().getFullYear()} Brett Dorrans.</p>
                <ul className={styles.social}>
                    <li>
                        <a
                            href="https://twitter.com/bylapidist"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/brettdorrans"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </Container>
        </footer>
    );
}
