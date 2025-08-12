import Section from "@/components/Section/Section";
import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
    return (
        <Section
            id="trusted-by"
            heading="Trusted by"
            className={styles.trustedBy}
        >
            <p className={styles.intro}>Clients include:</p>
            <ul className={styles.logos} aria-label="Client logos">
                <li>
                    <img src="/placeholder.svg" alt="Acme Corp" />
                </li>
                <li>
                    <img src="/placeholder.svg" alt="Globex" />
                </li>
                <li>
                    <img src="/placeholder.svg" alt="Initech" />
                </li>
                <li>
                    <img src="/placeholder.svg" alt="Soylent" />
                </li>
            </ul>
        </Section>
    );
}
