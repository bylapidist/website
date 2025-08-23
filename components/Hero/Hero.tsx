import Button from "@/components/Button/Button";
import Section from "@/components/Section/Section";
import { Size, Variant } from "@/lib/enums";
import styles from "./Hero.module.scss";

export default function Hero() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });
    const isoDate = today.toISOString().split("T")[0];

    return (
        <Section
            className={styles.hero}
            labelledBy="hero-heading"
            containerSize={Size.Lg}
        >
            <div className={styles.availability}>
                <p>
                    Currently open for new roles and projects –
                    <time dateTime={isoDate}> {formattedDate}</time>
                </p>
            </div>

            <div className={styles.ctaGroup}>
                <h1 id="hero-heading" className={styles.heroTitle}>
                    Lead Frontend Engineer. Crafting{" "}
                    <span className={styles.underline}>
                        resilient
                        <svg
                            viewBox="0 0 1213 73"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                            height="12"
                            className={styles.underlineSvg}
                        >
                            <g>
                                <path
                                    fill="url(#underline-gradient)"
                                    d="M1198.44 38.115c2.04-11.732-21.66-12.004-30.82-15.115C1072.63 8.322 902.12 3.411 808.92 3.298c-74.09.268-148.39-1.822-224.17.556-60.44.522-120.55 7.114-181.01 8.776-127.33 5.243-255.69 11.185-379.44 32.112-13.61 3.061-27.69 4.307-40.96 9.061-27.36 21.103 29.08 20.473 42.65 17.985 345.47-45.37 361.19-44.71 625.93-49.43 118.12-2.41 234.68 7.772 414.24 20.995 4.89.35 8.79-3.582 7.96-8.084a926.24 926.24 0 0157.83 6.83c9.98 2.006 19.9 3.97 29.66 6.258 3.95.957 7.94-1.64 8.63-5.467v-.01z"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id="underline-gradient"
                                    gradientTransform="rotate(370)"
                                >
                                    <stop
                                        offset="25%"
                                        stopColor="var(--colour-logo-blue)"
                                    ></stop>
                                    <stop
                                        offset="75%"
                                        stopColor="var(--colour-logo-yellow)"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>{" "}
                    design systems.
                </h1>
                <p className={styles.heroIntro}>
                    I build design systems and frontend platforms that cut
                    rework, lift accessibility, and accelerate delivery.
                </p>
            </div>
            <div className={styles.ctaGroup}>
                <div className={styles.cta}>
                    <Button href="#contact" size={Size.Lg}>
                        Discuss your frontend roadmap
                    </Button>
                    <p className={styles.note}>Let&apos;s connect.</p>
                </div>
                <div className={styles.cta}>
                    <Button
                        href="/brett-dorrans-cv.pdf"
                        size={Size.Lg}
                        variant={Variant.Secondary}
                    >
                        Download capabilities deck
                    </Button>
                    <p className={styles.note}>No email required.</p>
                </div>
            </div>
        </Section>
    );
}
