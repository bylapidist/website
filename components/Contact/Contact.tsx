import Section from "@/components/Section/Section";
import { BookCallButton, DownloadDeckButton } from "@/components/Cta/Cta";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section id="contact" labelledBy="contact-heading">
            <h2 id="contact-heading" className={styles.heading}>
                Ready to talk?
            </h2>
            <div className={styles.ctaGroup}>
                <BookCallButton href="mailto:hello@lapidist.net" />
                <DownloadDeckButton />
            </div>
        </Section>
    );
}
