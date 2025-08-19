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
                <h1>About</h1>
                <p id="bio">
                    Brett Dorrans is a lead frontend engineer and design systems
                    specialist with over 15 years of experience. He has led
                    design system rollouts at Encompass, LendInvest, Golden
                    Charter, and multiple startups, helping teams avoid months
                    of technical debt. After surviving a stroke at 34 in 2021,
                    he rebuilt his career with a focus on sustainable,
                    human-centred engineering. He now consults remotely,
                    embedding accessible frontend platforms that serve teams as
                    much as users.
                </p>
                <h2>Career highlights</h2>
                <p>
                    Brett has spent the last 15+ years architecting frontends
                    that scale. He has led design system rollouts across fintech
                    and startup environments, providing expertise in TypeScript,
                    React, accessibility, and developer experience. His
                    freelance consulting has repeatedly saved teams months of
                    technical debt by aligning tooling and design systems to
                    business goals.
                </p>
                <h2>Resilience &amp; balance</h2>
                <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/me-stroke.jpg"
                        alt="Brett in hospital after his 2021 stroke"
                    />
                    <figcaption>
                        Recovering from a cerebellar stroke in 2021 reset
                        Brett&rsquo;s approach to work and life.
                    </figcaption>
                </figure>
                <p>
                    A cerebellar stroke in 2021 halted everything. Months of
                    rehabilitation taught Brett the value of pacing and
                    adaptability. The experience reframed success as sustainable
                    delivery, not constant grind, and reinforced the need to
                    design teams and systems that protect human health.
                </p>
                <h2>Engineering philosophy</h2>
                <p>
                    In regulated SaaS, Brett has seen how the frontend quietly
                    enforces compliance through disclaimers, validation, and
                    audit trails. It&rsquo;s the backbone of developer velocity
                    and product resilience, not &ldquo;just UI&rdquo;. He is
                    passionate about embedding frontend engineering deeply
                    within organisations, scaling design systems, and building
                    platforms that improve both user experience and developer
                    culture. Above all, he champions human-centred, sustainable
                    engineering that serves the people who build and use the
                    software.
                </p>
            </Container>
            <Contact />
            <Footer />
        </>
    );
}
