import "server-only";
import Image from "next/image";
import { buildMetadata } from "@/utils";
import styles from "./page.module.scss";

export const metadata = buildMetadata({
    title: "About",
    description:
        "Brett Dorrans — frontend engineer and design systems specialist with more than fifteen years of experience building platforms that last.",
    canonical: "/about",
});

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <div className={styles.grid}>
                <div data-reveal className={styles.portraitCol}>
                    <div className={styles.portraitWrapper}>
                        <Image
                            src="/images/me-current.webp"
                            alt="Brett Dorrans"
                            width={1440}
                            height={1440}
                            className={styles.portrait}
                            priority
                        />
                        <span
                            aria-hidden="true"
                            className={styles.portraitAccentLine}
                        />
                    </div>
                </div>
                <div data-reveal className={styles.bioCol}>
                    <p className={styles.eyebrow}>About</p>
                    <h1 className={styles.name}>Brett Dorrans</h1>
                    <p className={styles.bio}>
                        I&apos;m Brett Dorrans, a frontend engineer and
                        design-systems specialist with more than fifteen years of
                        experience. I&apos;ve built and scaled design systems
                        across fintech, regulated SaaS, and high-growth startups
                        — often as the first or only frontend hire trusted to set
                        the foundations, and sometimes as the steward improving
                        an established team&apos;s practice.
                    </p>
                    <p className={styles.bio}>
                        I care about the parts of frontend that don&apos;t show
                        up in a screenshot: the token systems, the API contracts,
                        the tooling and governance that decide whether an
                        interface stays coherent at its hundredth contributor or
                        quietly falls apart.
                    </p>
                    <h2 className={styles.subheading}>Philosophy</h2>
                    <p className={styles.philosophy}>
                        In 2021 I had a cerebellar stroke at 34. Recovery
                        reshaped how I work: I came to value sustainable delivery
                        over speed at any cost — systems and teams built to last
                        rather than to burn out. I bring that to the work now.
                        Software should protect the people who use it and the
                        people who build it.
                    </p>
                </div>
            </div>
        </div>
    );
}
