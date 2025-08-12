"use client";

import dynamic from "next/dynamic";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import styles from "./Hero.module.scss";

const HeroBackground = dynamic(
    () => import("@/components/HeroBackground/HeroBackground"),
    {
        ssr: false,
        loading: () => (
            <picture>
                <source srcSet="/hero-bg-dark.svg" media="(prefers-color-scheme: dark)" />
                <img src="/hero-bg-light.svg" alt="" aria-hidden="true" />
            </picture>
        ),
    }
);

export default function Hero() {
    return (
        <section
            className={styles.hero}
            role="region"
            aria-labelledby="hero-heading"
        >
            <div className={styles.background}>
                <HeroBackground />
            </div>
            <Container size="l">
                <div className={styles.ctaGroup}>
                    <h1 id="hero-heading" className={styles.heroTitle}>
                        Ship design systems teams trust.
                    </h1>
                    <p className={styles.heroIntro}>
                        I help product orgs ship consistent UI faster —
                        governance, performance, accessibility baked in.
                    </p>
                </div>
                <div className={styles.ctaGroup}>
                    <div className={styles.cta}>
                        <Button href="#contact" size="lg">
                            Book a 20-min discovery call
                        </Button>
                        <p className={styles.note}>Let&apos;s chat.</p>
                    </div>
                    <div className={styles.cta}>
                        <Button href="/deck.pdf" variant="secondary" size="lg">
                            Download capabilities deck
                        </Button>
                        <p className={styles.note}>No email gate.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
