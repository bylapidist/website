import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "About",
    description:
        "Brett Dorrans' journey as a resilient frontend engineer and design systems specialist.",
    alternates: { canonical: "/about" },
};

export default function AboutPage() {
    return (
        <>
            <Container as="section">
                <h1>About Me</h1>
                <p id="bio">
                    I&apos;m Brett Dorrans, a principal frontend engineer and
                    design systems specialist with more than 15 years of
                    experience. I&apos;ve built and scaled design systems at
                    Encompass, LendInvest, Golden Charter, and multiple startups
                    - helping teams cut through months of potential technical
                    debt by putting the right foundations in place. My work
                    spans fintech, regulated SaaS, and high-growth startups,
                    where I&apos;ve repeatedly been the first or only frontend
                    hire trusted to embed the discipline from the ground up.
                </p>
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
                    Today, I work remotely with organisations that want to take
                    frontend seriously. I focus on embedding accessible,
                    resilient frontend platforms that scale with the business
                    and protect against the hidden costs of technical debt.
                </p>
                <hr />
                <h2>Career highlights</h2>
                <ul>
                    <li>
                        15+ years building and architecting frontends that scale
                        across regulated industries and startups.
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
                <hr />
                <h2>Resilience &amp; Balance</h2>
                <p>
                    My stroke in 2021 stopped everything overnight. Months of
                    rehabilitation taught me pacing, adaptability, and
                    perspective. It reminded me that engineering culture - like
                    health - needs sustainability at its core. I now carry that
                    lesson into every team I work with: design systems,
                    processes, and platforms should protect people, not drain
                    them.
                </p>
                <hr />
                <h2>Engineering Philosophy</h2>
                <p>
                    I believe frontend engineering is the backbone of modern
                    SaaS. In regulated industries, I&apos;ve seen how
                    disclaimers, validations, and audit trails quietly carry
                    legal and business weight. A single missing disclaimer can
                    derail an audit or launch. Frontend isn&apos;t &quot;just
                    UI&quot; - it&apos;s where compliance, trust, and resilience
                    live.
                </p>
                <p>
                    That&apos;s why I specialise in building design systems and
                    frontend platforms that embed accessibility, governance, and
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
            </Container>
            <Contact />
            <Footer />
        </>
    );
}
