import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Hero.module.scss";

export default function Hero() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });
    const isoDate = today.toISOString().split("T")[0];

    return (
        <Section
            className={styles.hero}
            labelledBy="hero-heading"
            containerSize="l"
            contentVisibility={false}
        >
            <div className={styles.availability}>
                <p>
                    Currently open for new roles and projects –
                    <time dateTime={isoDate}> {formattedDate}</time>
                </p>
            </div>

            <div className={styles.ctaGroup}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Lead Frontend Engineer. Crafting resilient design systems.
                </h1>
                <p className={styles.heroIntro}>
                    I build design systems and frontend platforms that cut
                    rework, lift accessibility, and accelerate delivery &ndash;
                    backed by typesafe API, CI/CD, and regulated industry
                    expertise.
                </p>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">
                        Discuss your frontend roadmap
                    </Button>
                    <p className={styles.note}>Let&apos;s connect.</p>
                </div>
                <div className={styles.cta}>
                    <Button
                        href="/brett-dorrans-cv.pdf"
                        size="lg"
                        variant="secondary"
                    >
                        Download capabilities deck
                    </Button>
                    <p className={styles.note}>No email required.</p>
                </div>
            </div>
        </Section>
    );
}
