import Image from "next/image";
import { Heading, Section } from "@/components";
import { buildMetadata } from "@/utils";
import styles from "./page.module.scss";

export const metadata = buildMetadata({
    title: "About",
    description:
        "Brett Dorrans' journey as a frontend engineer and design systems specialist.",
    canonical: "/about",
});

export default function AboutPage() {
    return (
        <>
            <Section heading="About me" headingLevel={1}>
                <Image
                    className={styles.me}
                    src="/images/me-current.webp"
                    alt="A picture of Brett Dorrans from 2025"
                    width="1440"
                    height="1440"
                />
                <p>
                    I&apos;m <strong>Brett Dorrans</strong>, a principal
                    frontend engineer and design systems specialist with more
                    than 15 years of experience. I&apos;ve built and scaled
                    design systems at{" "}
                    <a
                        href="https://www.encompasscorporation.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Encompass
                    </a>
                    ,{" "}
                    <a
                        href="https://www.lendinvest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LendInvest
                    </a>
                    ,{" "}
                    <a
                        href="https://www.goldencharter.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Golden Charter
                    </a>
                    , and multiple startups - helping teams cut through months
                    of potential technical debt by putting the right foundations
                    in place. My work spans fintech, regulated SaaS, and
                    high-growth startups, where I&apos;ve been both the first or
                    only frontend hire trusted to embed the discipline from the
                    ground up, and a steward of a larger team seeking to improve
                    their processes.
                </p>
                <p>
                    Today, I focus on embedding accessible, resilient frontend
                    platforms that scale with the business and protect against
                    the hidden costs of technical debt.
                </p>
                <Heading level={2}>Career highlights</Heading>
                <ul>
                    <li>
                        15+ years building and architecting frontends that
                        scale, the last 5+ across regulated industries.
                    </li>
                    <li>
                        Led design system rollouts and governance at Encompass,
                        LendInvest, and Golden Charter.
                    </li>
                    <li>
                        Specialist in React, TypeScript, accessibility, and
                        developer experience.
                    </li>
                    <li>
                        Proven track record of saving teams months of rework by
                        aligning design systems and tooling to business goals.
                    </li>
                    <li>
                        Comfortable leading as the sole frontend engineer or
                        guiding a team, embedding practices that last.
                    </li>
                </ul>
                <Heading level={2}>Engineering philosophy</Heading>
                <p>
                    In October 2021, at 34, I suffered a cerebellar stroke.
                    Recovery forced me to slow down, rethink, and rebuild - not
                    just my health but my approach to engineering. That
                    experience reshaped my outlook: I no longer see success as
                    speed at all costs, but as sustainable delivery that
                    supports both the people who use software and the teams who
                    build it.
                </p>
                <p>
                    Months of rehabilitation taught me pacing, adaptability, and
                    perspective. It reminded me that engineering culture - like
                    health - needs sustainability at its core. I now carry that
                    lesson into every team I work with: design systems,
                    processes, and platforms should protect people, not drain
                    them.
                </p>
                <p>
                    I specialise in building design systems and frontend
                    platforms that embed accessibility, governance, and
                    developer velocity from the start. My goal is to serve both
                    users and engineers by creating systems that scale
                    gracefully, reduce hidden risks, and improve day-to-day
                    developer culture.
                </p>
                <p>
                    Above all, I build with a human-centred, sustainable mindset
                    - software that works for the long term, and teams that
                    don&apos;t burn out delivering it.
                </p>
            </Section>
        </>
    );
}
