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
        problem: "Fragmented widgets, duplicated effort, inaccessible flows.",
        approach:
            "Unified tokens and audited patterns with continuous integration checks.",
        impact: "30% faster releases and zero WCAG AA issues remaining.",
    },
    {
        title: "B2C SaaS",
        Visual: B2CVisual,
        problem: "Slow onboarding, inconsistent UI, hard-to-debug layouts.",
        approach: "Documented design system onboarding and team upskilling.",
        impact: "Onboarding time cut by 50% and support tickets down 25%.",
    },
    {
        title: "Ecommerce platform",
        Visual: EcommerceVisual,
        problem: "Flaky components, accessibility gaps, shipping delays.",
        approach: "Built accessible component library with automated testing.",
        impact: "12% conversion lift and no accessibility regressions.",
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
                Production-grade UI that scales with quality intact.
            </p>

            <div className={styles.cards}>
                {caseStudies.map(
                    ({ title, Visual, problem, approach, impact }) => (
                        <CaseStudyCard
                            key={title}
                            title={title}
                            visual={<Visual />}
                            problem={problem}
                            approach={approach}
                            impact={impact}
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
