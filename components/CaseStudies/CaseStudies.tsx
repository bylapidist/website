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
        before: "Fragmented widgets, duplicated effort, inaccessible flows.",
        after: "Unified tokens, audited patterns. CI checks keep regressions out.",
    },
    {
        title: "B2C SaaS",
        Visual: B2CVisual,
        before: "Slow onboarding, inconsistent UI, hard-to-debug layouts.",
        after: "Design system onboarding documentation and team upskilling.",
    },
    {
        title: "Ecommerce",
        Visual: EcommerceVisual,
        before: "Flaky components, accessibility gaps, shipping delays.",
        after: "Accessible component library and automated testing.",
    },
];

export default function CaseStudies() {
    return (
        <Section
            id="case-studies"
            heading="Case studies"
            className={styles.caseStudies}
        >
            <p className={styles.tagline}>Quality that holds as you scale.</p>

            <div className={styles.cards}>
                {caseStudies.map(({ title, Visual, before, after }) => (
                    <CaseStudyCard
                        key={title}
                        title={title}
                        visual={<Visual />}
                        before={before}
                        after={after}
                    />
                ))}
            </div>
            <div className={styles.cta}>
                <p>Want these results for your team?</p>
                <BookCallButton />
            </div>
        </Section>
    );
}
