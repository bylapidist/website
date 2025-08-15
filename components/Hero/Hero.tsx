import { BookCallButton, DownloadDeckButton } from "@/components/Cta/Cta";
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
                    Lead Frontend Engineer — full-stack capable when it
                    multiplies outcomes.
                </h1>
                <p className={styles.heroIntro}>
                    I specialise in design systems and frontend platforms. When
                    it matters, I architect APIs, model data, wire CI/CD, and
                    integrate payments for regulated products.
                </p>
                <ul className={styles.fullStack}>
                    <li>API design</li>
                    <li>Data modelling</li>
                    <li>Auth</li>
                    <li>CI/CD</li>
                    <li>Docker</li>
                    <li>AWS</li>
                </ul>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <BookCallButton size="lg">
                        Discuss your platform roadmap
                    </BookCallButton>
                    <p className={styles.note}>Let&apos;s connect.</p>
                </div>
                <div className={styles.cta}>
                    <DownloadDeckButton size="lg" />
                    <p className={styles.note}>No email required.</p>
                </div>
            </div>
        </Section>
    );
}
