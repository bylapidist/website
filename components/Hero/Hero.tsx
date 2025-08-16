import { BookCallButton, DownloadDeckButton } from "@/components/Cta/Cta";
import Section from "@/components/Section/Section";
import styles from "./Hero.module.scss";

export default function Hero() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    const isoDate = today.toISOString().split("T")[0];
    const badges = ["20% faster releases", "WCAG AA compliance"];

    return (
        <Section
            className={styles.hero}
            labelledBy="hero-heading"
            containerSize="l"
            contentVisibility={false}
        >
            <p className={styles.availability}>
                Currently open for roles/consulting –
                <time dateTime={isoDate}> {formattedDate}</time>
            </p>
            <div className={styles.ctaGroup}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Principal Frontend Engineer. Crafting resilient design
                    systems.
                </h1>
                <p className={styles.heroIntro}>
                    I help product teams ship systems that cut rework, lift
                    accessibility, and accelerate delivery across distributed
                    teams.
                </p>
            </div>
            <ul className={styles.badges}>
                {badges.map((badge) => (
                    <li key={badge} className={styles.badge}>
                        {badge}
                    </li>
                ))}
            </ul>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <BookCallButton size="lg">
                        Discuss your frontend roadmap
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
