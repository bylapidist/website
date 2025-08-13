import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section id="contact" labelledBy="contact-heading">
            <h2 id="contact-heading" className={styles.heading}>
                Ready to talk?
            </h2>
            <div className={styles.ctaGroup}>
                <Button href="mailto:hello@lapidist.net">Book a call</Button>
                <Button href="/brett-dorrans-cv.pdf" variant="secondary">
                    Download capabilities deck
                </Button>
            </div>
        </Section>
    );
}
