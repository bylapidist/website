import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "@/app/page.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container size="l">
                <div className={styles.ctaGroup}>
                    <h1 className={styles.heroTitle}>
                        Ship design systems teams trust.
                    </h1>
                    <p className={styles.heroIntro}>
                        I help product orgs ship consistent UI faster —
                        governance, performance, accessibility baked in.
                    </p>
                </div>
                <div className={styles.ctaGroup}>
                    <div className={styles.cta}>
                        <Button href="#contact" size="lg">
                            Book a 20-min discovery call
                        </Button>
                        <p className={styles.note}>Let&apos;s chat.</p>
                    </div>
                    <div className={styles.cta}>
                        <Button href="/deck.pdf" variant="secondary" size="lg">
                            Download capabilities deck
                        </Button>
                        <p className={styles.note}>No email gate.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
