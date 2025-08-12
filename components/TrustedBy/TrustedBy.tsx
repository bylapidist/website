import Section from "@/components/Section/Section";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
    return (
        <Section
            className={styles.trusted}
            heading="Clients include…"
            containerSize="l"
        >
            <ul className={styles.logos}>
                {["Acme Corp", "Globex", "Initech", "Umbrella"].map((name) => (
                    <li key={name} className={styles.logo}>
                        <svg
                            width="120"
                            height="40"
                            aria-hidden="true"
                            focusable="false"
                        />
                        <VisuallyHidden>{name}</VisuallyHidden>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
