import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section
            id="contact"
            heading="Let's work together"
            headingClassName={styles.heading}
        >
            <div className={styles.ctaGroup}>
                <Button href="mailto:hello@lapidist.net">Get in touch</Button>
                <Button
                    href="https://cal.com/brett-dorrans-l2qjwo"
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book a call
                </Button>
                <Button href="/brett-dorrans-cv.pdf" variant="secondary">
                    Download profile
                </Button>
            </div>
        </Section>
    );
}
