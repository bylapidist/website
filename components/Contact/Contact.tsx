import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section id="contact" labelledBy="contact-heading">
            <h2 id="contact-heading" className={styles.heading}>
                Let&apos;s work together
            </h2>
            <div className={styles.ctaGroup}>
                <Button href="mailto:hello@lapidist.net">Get in touch</Button>
                <Button href="/brett-dorrans-cv.pdf" variant="secondary">
                    Download profile
                </Button>
            </div>
        </Section>
    );
}
