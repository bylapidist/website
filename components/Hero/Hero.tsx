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
            <div className={styles.copy}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Ship design systems teams trust.
                </h1>
                <p className={styles.heroIntro}>
                    I’ve spent 15 years making complex UI systems feel simple —
                    for teams from scrappy startups to global enterprises.
                </p>
                <p className={styles.heroIntro}>
                    I help product orgs ship consistent UI faster. Governance,
                    performance, and accessibility baked in.
                </p>
                <ul className={styles.metrics}>
                    <li>
                        <span className={styles.stat}>15+ years</span> in product
                        design
                    </li>
                    <li>
                        <span className={styles.stat}>-38%</span> UI bugs
                    </li>
                    <li>
                        <span className={styles.stat}>+24%</span> delivery
                        velocity
                    </li>
                </ul>
                <svg
                    className={styles.portrait}
                    aria-hidden="true"
                    viewBox="0 0 120 60"
                />
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">
                        Book a call
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
