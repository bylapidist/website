import { Button, Section } from "@/components";
import { Variant } from "@/types";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section
            id="contact"
            heading="Let's work together"
            headingClassName={styles.heading}
        >
            <div className={styles.ctaGroup}>
                <Button href="mailto:hello@lapidist.net">Send an email</Button>
                <Button
                    href="https://cal.com/brett-dorrans-l2qjwo"
                    variant={Variant.Secondary}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book a call
                </Button>
                <Button
                    href="/brett-dorrans-cv.pdf"
                    variant={Variant.Secondary}
                    prefetch={false}
                >
                    Download CV
                </Button>
            </div>
        </Section>
    );
}
