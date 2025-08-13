import Section from "@/components/Section/Section";
import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
    return (
        <Section className={styles.trustedBy} heading="Trusted by">
            <ul className={styles.logos}>
                <li>
                    <svg
                        aria-label="Acme Corp logo"
                        viewBox="0 0 100 40"
                        width="100"
                        height="40"
                    />
                </li>
                <li>
                    <svg
                        aria-label="Globex logo"
                        viewBox="0 0 100 40"
                        width="100"
                        height="40"
                    />
                </li>
                <li>
                    <svg
                        aria-label="Initech logo"
                        viewBox="0 0 100 40"
                        width="100"
                        height="40"
                    />
                </li>
                <li>
                    <svg
                        aria-label="Umbrella logo"
                        viewBox="0 0 100 40"
                        width="100"
                        height="40"
                    />
                </li>
            </ul>
        </Section>
    );
}
