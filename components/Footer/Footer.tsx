import "server-only";
import Link from "next/link";
import { Container } from "@/components";
import { siteLinks } from "@/utils";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footerContainer}>
                <nav aria-label="Footer">
                    <ul className={styles.footerNav}>
                        {siteLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
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
