import Section from "@/components/Section/Section";
import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
    return (
        <Section id="trusted-by" heading="Trusted by" className={styles.trustedBy}>
            <p className={styles.tagline}>Clients include…</p>
            <ul className={styles.logos}>
                <li>
                    <svg
                        className={styles.logo}
                        role="img"
                        aria-label="Acme Corp"
                        viewBox="0 0 120 60"
                    />
                </li>
                <li>
                    <svg
                        className={styles.logo}
                        role="img"
                        aria-label="Globex"
                        viewBox="0 0 120 60"
                    />
                </li>
                <li>
                    <svg
                        className={styles.logo}
                        role="img"
                        aria-label="Initech"
                        viewBox="0 0 120 60"
                    />
                </li>
                <li>
                    <svg
                        className={styles.logo}
                        role="img"
                        aria-label="Soylent"
                        viewBox="0 0 120 60"
                    />
                </li>
            </ul>
        </Section>
    );
}
