import Container from "@/components/Container/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footerContainer}>
                <nav aria-label="Footer">
                    <ul className={styles.footerNav}>
                        <li>
                            <a href="/brett-dorrans-cv.pdf">CV/Resume</a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/brettdorrans"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@lapidist.net">Email</a>
                        </li>
                    </ul>
                </nav>
                <p>
                    Lapidist Ltd, registered in Scotland. Company number
                    SC549211.
                </p>
                <p>&copy; Brett Dorrans</p>
            </Container>
        </footer>
    );
}
