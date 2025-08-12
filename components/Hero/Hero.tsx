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
            <img src="/placeholder.svg" alt="" className={styles.signature} />
            <div className={styles.lead}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Ship design systems teams trust.
                </h1>
                <p className={styles.heroIntro}>
                    I help product orgs ship consistent UI faster &ndash;
                    governance, performance, and accessibility baked in.
                </p>
                <p className={styles.heroIntro}>
                    I&rsquo;ve spent{" "}
                    <span className={styles.metric}>15 years</span>
                    making complex UI systems feel simple &mdash; for teams from
                    scrappy startups to global enterprises.
                </p>
                <ul className={styles.logos} aria-label="Clients include">
                    <li>
                        <img src="/placeholder.svg" alt="Acme Corp" />
                    </li>
                    <li>
                        <img src="/placeholder.svg" alt="Globex" />
                    </li>
                    <li>
                        <img src="/placeholder.svg" alt="Initech" />
                    </li>
                    <li>
                        <img src="/placeholder.svg" alt="Soylent" />
                    </li>
                </ul>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size="lg">
                        Book a 20-min discovery call
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
