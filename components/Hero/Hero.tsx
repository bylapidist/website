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
                    Lead Frontend Engineer. Crafting resilient design systems.
                </h1>
                <p className={styles.heroIntro}>
                    I build design systems and frontend platforms that cut
                    rework, lift accessibility, and accelerate delivery &ndash;
                    backed by API, data, CI/CD, and regulated industry
                    expertise.
                </p>
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
