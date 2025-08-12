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
                    I&apos;ve spent 15 years making complex UI systems feel
                    simple &mdash; boosting velocity, cutting rework, and baking
                    in accessibility from day one.
                </p>
                <p className={styles.heroMetrics}>
                    <strong>50M+</strong> users served &middot; <strong>24%</strong>
                    faster UI delivery
                </p>
                <svg
                    className={styles.heroGraphic}
                    viewBox="0 0 200 60"
                    aria-hidden="true"
                ></svg>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">
                        Book a 20-min discovery call
                    </Button>
                    <p className={styles.note}>Let&apos;s chat.</p>
                </div>
            </div>
        </Section>
    );
}
