import "server-only";
import Link from "next/link";
import { Container } from "@/components";
import { footerLinks } from "@/utils";
import styles from "./Footer.module.scss";

const EMAIL = "hello@lapidist.net";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.inner}>
                <div className={styles.contact}>
                    <p className={styles.contactLine}>
                        The best way to reach me is email.
                    </p>
                    <ul className={styles.contactLinks}>
                        <li>
                            <a
                                href={`mailto:${EMAIL}`}
                                className={styles.emailLink}
                            >
                                {EMAIL}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/bylapidist"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-no-ext-icon
                                className={styles.mutedLink}
                            >
                                github.com/bylapidist
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/brettdorrans"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-no-ext-icon
                                className={styles.mutedLink}
                            >
                                linkedin.com/in/brettdorrans
                            </a>
                        </li>
                    </ul>
                </div>
                <nav aria-label="Footer" className={styles.footerNav}>
                    <ul className={styles.footerNavList}>
                        {footerLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className={styles.footerLink}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
            <Container className={styles.legal}>
                <p className={styles.legalText}>
                    Lapidist Ltd, registered in Scotland &middot; Company number
                    SC549211 &middot; &copy; Brett Dorrans
                </p>
            </Container>
        </footer>
    );
}
