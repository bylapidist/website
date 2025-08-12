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
            <div className={styles.introGroup}>
                <div className={styles.content}>
                    <h1 id="hero-heading" className={styles.heroTitle}>
                        Ship design systems teams trust.
                    </h1>
                    <p className={styles.heroIntro}>
                        I’ve spent 15 years making complex UI systems feel
                        simple — helping teams cut UI bugs by 38% and ship 24%
                        faster.
                    </p>
                </div>
                <div className={styles.portrait}>
                    <img src="/placeholder.svg" alt="" />
                </div>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">Book a call</Button>
                    <p className={styles.note}>Let&apos;s chat.</p>
                </div>
            </div>
        </Section>
    );
}
