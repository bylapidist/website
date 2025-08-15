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
            "Introduced unified tokens and audited patterns with CI checks.",
        impact: "60% faster builds; accessibility defects down 40%.",
    },
    {
        title: "B2C SaaS",
        Visual: B2CVisual,
        problem: "Slow onboarding, inconsistent UI, hard-to-debug layouts.",
        approach: "Documented system onboarding and upskilled team.",
        impact: "Ramp-up cut from 4 weeks to 1; layout bugs halved.",
    },
    {
        title: "Ecommerce platform",
        Visual: EcommerceVisual,
        problem: "Flaky components, accessibility gaps, shipping delays.",
        approach: "Built accessible component library with automated tests.",
        impact: "Release cycle sped up 30%; a11y issues blocked at PR.",
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
                Production-grade design systems and UI platforms that scale with
                quality intact.
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
