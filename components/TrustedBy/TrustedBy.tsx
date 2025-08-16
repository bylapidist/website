import Image from "next/image";
import Section from "@/components/Section/Section";
import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
    return (
        <Section
            id="trusted-by"
            heading="Trusted by"
            className={styles.trustedBy}
        >
            <p className={styles.tagline}>
                I help brands deliver reliable, inclusive products.
            </p>
            <ul className={styles.logos}>
                <li>
                    <a
                        className={styles.logoLink}
                        href="https://www.encompasscorporation.com"
                        aria-label="Encompass Corporation"
                    >
                        <Image
                            className={styles.logo}
                            src="/logos/encompass.svg"
                            alt=""
                            width={427}
                            height={72}
                        />
                    </a>
                </li>
                <li>
                    <a
                        className={styles.logoLink}
                        href="https://www.lendinvest.com"
                        aria-label="LendInvest"
                    >
                        <Image
                            className={styles.logo}
                            src="/logos/lendinvest.svg"
                            alt=""
                            width={191}
                            height={34}
                        />
                    </a>
                </li>
                <li>
                    <a
                        className={styles.logoLink}
                        href="https://www.goldencharter.co.uk"
                        aria-label="Golden Charter"
                    >
                        <Image
                            className={styles.logo}
                            src="/logos/golden-charter.svg"
                            alt=""
                            width={2433}
                            height={452}
                        />
                    </a>
                </li>
                <li>
                    <a
                        className={styles.logoLink}
                        href="https://www.hunterboots.com"
                        aria-label="Hunter Boots"
                    >
                        <Image
                            className={styles.logo}
                            src="/logos/hunter.svg"
                            alt=""
                            width={600}
                            height={250}
                        />
                    </a>
                </li>
                <li>
                    <a
                        className={styles.logoLink}
                        href="https://www.gant.com"
                        aria-label="GANT"
                    >
                        <Image
                            className={styles.logo}
                            src="/logos/gant.svg"
                            alt=""
                            width={1600}
                            height={188}
                        />
                    </a>
                </li>
            </ul>
        </Section>
    );
}
