import Section from "@/components/Section/Section";
import { BookCallButton, DownloadDeckButton } from "@/components/Cta/Cta";
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
                    I help product teams ship consistent UI faster. Governance,
                    performance, and accessibility baked in.
                </p>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <BookCallButton size="lg">
                        Book a 20-min discovery call
                    </BookCallButton>
                    <p className={styles.note}>Let&apos;s chat.</p>
                </div>
                <div className={styles.cta}>
                    <DownloadDeckButton size="lg" />
                    <p className={styles.note}>No email required.</p>
                </div>
            </div>
        </Section>
    );
}
