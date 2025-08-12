import Section from "@/components/Section/Section";
import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
    return (
        <Section id="trusted-by" className={styles.trusted} heading="Trusted by">
            <p className={styles.intro}>Clients include…</p>
            <ul className={styles.logos} aria-label="client logos">
                <li>
                    <svg viewBox="0 0 100 30" className={styles.logo} />
                </li>
                <li>
                    <svg viewBox="0 0 100 30" className={styles.logo} />
                </li>
                <li>
                    <svg viewBox="0 0 100 30" className={styles.logo} />
                </li>
                <li>
                    <svg viewBox="0 0 100 30" className={styles.logo} />
                </li>
            </ul>
        </Section>
    );
}
