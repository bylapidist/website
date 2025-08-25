import { Card, Container } from "@/components";
import { Variant } from "@/types";
import styles from "./Approach.module.scss";

export interface Step {
    title: string;
    description: string;
}

const DEFAULT_STEPS: Step[] = [
    {
        title: "Assess:",
        description: "Deep-dive current UI, tooling, and workflows.",
    },
    {
        title: "Align:",
        description: "Co-create a roadmap with design and product leads.",
    },
    {
        title: "Execute:",
        description:
            "Deliver tokens, components, contracts, and docs iteratively.",
    },
    {
        title: "Govern:",
        description:
            "Bake metrics and review loops into CI for sustained quality.",
    },
];

interface Props {
    steps?: Step[];
}

export default function Approach({ steps = DEFAULT_STEPS }: Props) {
    return (
        <Container>
            <Card
                as="section"
                id="approach"
                heading="My approach"
                headingLevel={2}
            >
                <p>
                    Practical and collaborative, focused on turning complex
                    frontend challenges into clear, scalable systems. From
                    assessment through execution to governance, I ensure every
                    decision is intentional and every outcome supports long-term
                    quality and impact.
                </p>
                <ol className={styles.steps}>
                    {steps.map(({ title, description }) => (
                        <Card as="li" key={title} variant={Variant.Step}>
                            <strong>{title}</strong>
                            <p>{description}</p>
                        </Card>
                    ))}
                </ol>
                <details>
                    <summary className={styles.summary}>
                        Accessibility &amp; Performance pledge
                    </summary>
                    <dl className={styles.checklist}>
                        <div>
                            <dt>Keyboard-first:</dt>
                            <dd>Every control works without a mouse.</dd>
                        </div>
                        <div>
                            <dt>Contrast:</dt>
                            <dd>Minimum 4.5:1 text contrast.</dd>
                        </div>
                        <div>
                            <dt>Fast paint:</dt>
                            <dd>95th percentile route paint &lt;1.2s.</dd>
                        </div>
                        <div>
                            <dt>Motion aware:</dt>
                            <dd>Animations off when you prefer less.</dd>
                        </div>
                    </dl>
                </details>
            </Card>
        </Container>
    );
}
