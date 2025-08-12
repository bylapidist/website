import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section
            id="contact"
            heading="Ready to ship?"
            headingClassName={styles.heading}
        >
            <div className={styles.ctaGroup}>
                <Button href="mailto:hello@lapidist.net">
                    Book a 20-min discovery call
                </Button>
                <Button href="/brett-dorrans-cv.pdf" variant="secondary">
                    Download capabilities deck
                </Button>
            </div>
        </Section>
    );
}
