import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <Section
            className={styles.hero}
            labelledBy="hero-heading"
            containerSize="l"
            contentVisibility={false}
        >
            <div className={styles.ctaGroup}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Ship design systems teams trust.
                </h1>
                <p className={styles.heroIntro}>
                    I help product orgs ship consistent UI faster &ndash;
                    governance, performance, and accessibility baked in.
                </p>
                <p className={styles.personality}>
                    I’ve spent 15 years making complex UI systems feel
                    simple—for teams from scrappy startups to global
                    enterprises.
                </p>
                <p className={styles.metrics}>
                    <strong>15+ years experience</strong> •{" "}
                    <strong>-38% UI bugs</strong> •{" "}
                    <strong>+24% delivery velocity</strong>
                </p>
                <div className={styles.signature}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                </div>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">
                        Book a 20-min discovery call
                    </Button>
                    <p className={styles.note}>Let&apos;s chat.</p>
                </div>
                <div className={styles.cta}>
                    <Button
                        href="/brett-dorrans-cv.pdf"
                        variant="secondary"
                        size="lg"
                    >
                        Download capabilities deck
                    </Button>
                    <p className={styles.note}>No email gate.</p>
                </div>
            </div>
        </Section>
    );
}
