import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section id="contact" style={{ contentVisibility: "auto" }}>
            <Container>
                <h2>Ready to ship?</h2>
                <div className={styles.ctaGroup}>
                    <Button href="mailto:hello@lapidist.net">
                        Book a 20-min discovery call
                    </Button>
                    <Button href="/deck.pdf" variant="secondary">
                        Download capabilities deck
                    </Button>
                </div>
            </Container>
        </section>
    );
}
