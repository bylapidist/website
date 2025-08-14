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
            animate={false}
        >
            <div className={styles.ctaGroup}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Craft design systems teams trust.
                </h1>
                <p className={styles.heroIntro}>
                    I help product teams ship consistent UI faster. Governance,
                    performance, and accessibility baked in.
                </p>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <BookCallButton size="lg">
                        Schedule a 20-min chat
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
