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
                    Principal Frontend & Design Systems Leadership
                </h1>
                <p className={styles.heroIntro}>
                    I build UI platforms and production-grade design systems
                    that scale with quality intact. Remote-first. UK-based.
                    Ready to lead.
                </p>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="/contact" size="lg">
                        Hire me for leadership roles
                    </Button>
                </div>
                <div className={styles.cta}>
                    <Button href="#case-studies" size="lg" variant="secondary">
                        View selected work
                    </Button>
                </div>
            </div>
        </Section>
    );
}
