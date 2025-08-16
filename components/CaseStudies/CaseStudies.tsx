import Button from "@/components/Button/Button";
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
        context:
            "International payments platform processing millions of transactions daily.",
        team: "10 engineers across 3 squads",
        problem:
            "Fragmented widgets and 40% component duplication causing accessibility defects.",
        approach:
            "Unified design tokens, built a shared component kit, and added CI accessibility audits.",
        results:
            "Token-driven system adopted by 100% of teams; audits stopped regressions and cut UI bug backlog 33%.",
    },
    {
        title: "B2C SaaS",
        Visual: B2CVisual,
        context: "Consumer subscription service with web and mobile clients.",
        team: "6-person frontend guild",
        problem: "Slow onboarding, inconsistent UI, hard-to-debug layouts.",
        approach:
            "Bootstrap docs and codemods standardized layouts and eliminated dead styles.",
        results: "Halved onboarding time and lifted release velocity 20%.",
    },
    {
        title: "Ecommerce",
        Visual: EcommerceVisual,
        context: "Retail marketplace fulfilling millions of orders worldwide.",
        team: "8-person platform team",
        problem: "Flaky components, accessibility gaps, shipping delays.",
        approach:
            "Refactored component library, added automated a11y tests, and simplified APIs.",
        results: "Cut UI bug backlog 60% and achieved WCAG AA compliance.",
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
                Real-world outcomes from complex UI work.
            </p>

            <div className={styles.cards}>
                {caseStudies.map(
                    ({
                        title,
                        Visual,
                        context,
                        team,
                        problem,
                        approach,
                        results,
                    }) => (
                        <CaseStudyCard
                            key={title}
                            title={title}
                            visual={<Visual />}
                            context={context}
                            team={team}
                            problem={problem}
                            approach={approach}
                            results={results}
                        />
                    ),
                )}
            </div>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <Button href="#contact">Schedule a call</Button>
            </div>
        </Section>
    );
}
