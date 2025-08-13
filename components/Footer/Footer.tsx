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
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <ul className={styles.social}>
                    <li>
                        <a
                            href="https://linkedin.com/in/brettdorrans"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://guthub.com/bylapidist"
                            rel="noopener noreferrer"
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
