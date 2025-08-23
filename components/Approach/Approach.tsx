import Section from "@/components/Section/Section";
import styles from "./Approach.module.scss";

export interface Step {
    title: string;
    description: string;
}

const DEFAULT_STEPS: Step[] = [
    {
        title: "Assess",
        description: "deep-dive current UI, tooling, and workflows.",
    },
    {
        title: "Align",
        description: "co-create a roadmap with design and product leads.",
    },
    {
        title: "Execute",
        description:
            "deliver tokens, components, contracts, and docs iteratively.",
    },
    {
        title: "Govern",
        description:
            "bake metrics and review loops into CI for sustained quality.",
    },
];

interface Props {
    steps?: Step[];
}

export default function Approach({ steps = DEFAULT_STEPS }: Props) {
    return (
        <Section id="approach" heading="My approach">
            <ol className={styles.steps}>
                {steps.map(({ title, description }) => (
                    <li key={title}>
                        <strong>{title}</strong>
                        <p>{description}</p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
