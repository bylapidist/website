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
                    I’ve spent 15 years making complex UI systems feel simple —
                    for teams from scrappy startups to global enterprises.
                </p>
                <p className={styles.heroMetric}>
                    Recent work cut UI bugs by 38% and lifted velocity 24%.
                </p>
                <svg
                    className={styles.signature}
                    aria-hidden="true"
                    viewBox="0 0 100 40"
                    width="100"
                    height="40"
                />
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
