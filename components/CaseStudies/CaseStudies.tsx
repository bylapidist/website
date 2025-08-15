import { BookCallButton } from "@/components/Cta/Cta";
import Section from "@/components/Section/Section";
import B2CVisual from "./B2CVisual";
import styles from "./CaseStudies.module.scss";
import CaseStudyCard from "./CaseStudyCard";
import EcommerceVisual from "./EcommerceVisual";
import GlobalFintechVisual from "./GlobalFintechVisual";

const caseStudies = [
    {
        title: "Global fintech",
        Visual: GlobalFintechVisual,
        before: "Fragmented widgets and 40% component duplication causing accessibility defects.",
        after: "Token-driven system adopted by 100% of teams; CI audits stopped regressions and cut UI bugs by a third.",
        highlights: [
            "Node/Express API with PostgreSQL and GraphQL gateway",
            "Dockerised GitHub Actions to AWS ECS",
            "JWT auth enforcing KYC/AML roles",
        ],
    },
    {
        title: "B2C SaaS",
        Visual: B2CVisual,
        before: "Slow onboarding, inconsistent UI, hard-to-debug layouts.",
        after: "Bootstrap docs and codemods halved onboarding time and lifted release velocity 20%.",
        highlights: [
            "tRPC API with Prisma on PostgreSQL",
            "Stripe payments with idempotent webhooks",
            "GitLab CI with preview environments",
        ],
    },
    {
        title: "Ecommerce",
        Visual: EcommerceVisual,
        before: "Flaky components, accessibility gaps, shipping delays.",
        after: "Refactored component library with automated a11y tests cut bug reports 60% and met WCAG AA.",
        highlights: [
            "REST API cached via Redis",
            "WorldPay gateway with idempotent order handling",
            "CDN and image optimisation cut LCP 40%",
        ],
    },
];

export default function CaseStudies() {
    return (
        <Section
            id="case-studies"
            heading="Case studies"
            className={styles.caseStudies}
        >
            <p className={styles.tagline}>
                Real-world outcomes across UI and platform work.
            </p>

            <div className={styles.cards}>
                {caseStudies.map(
                    ({ title, Visual, before, after, highlights }) => (
                        <CaseStudyCard
                            key={title}
                            title={title}
                            visual={<Visual />}
                            before={before}
                            after={after}
                            highlights={highlights}
                        />
                    ),
                )}
            </div>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <BookCallButton />
            </div>
        </Section>
    );
}
