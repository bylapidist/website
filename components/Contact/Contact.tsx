import { BookCallButton, DownloadDeckButton } from "@/components/Cta/Cta";
import Section from "@/components/Section/Section";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section id="contact" labelledBy="contact-heading">
            <h2 id="contact-heading" className={styles.heading}>
                Hire a frontend lead with full-stack reach
            </h2>
            <p className={styles.intro}>
                Available for principal roles, consulting, and architecture
                engagements.
            </p>
            <div className={styles.ctaGroup}>
                <BookCallButton href="mailto:hello@lapidist.net">
                    Get in touch
                </BookCallButton>
                <DownloadDeckButton>Download profile</DownloadDeckButton>
            </div>
        </Section>
    );
}
