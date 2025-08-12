import Section from "@/components/Section/Section";
import styles from "./TrustedBy.module.scss";

const clients = [
    { name: "Acme Corp" },
    { name: "Globex" },
    { name: "Initech" },
    { name: "Soylent" },
];

export default function TrustedBy() {
    return (
        <Section id="trusted-by" heading="Trusted by" className={styles.trusted}>
            <ul className={styles.logos} aria-label="Client logos">
                {clients.map((client) => (
                    <li key={client.name}>
                        <img src="/placeholder.svg" alt={client.name} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
