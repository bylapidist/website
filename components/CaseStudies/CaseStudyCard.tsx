import { ReactNode } from "react";
import Card from "@/components/Card/Card";

interface CaseStudyCardProps {
    title: string;
    visual: ReactNode;
    problem: string;
    approach: string;
    impact: string;
}

export default function CaseStudyCard({
    title,
    visual,
    problem,
    approach,
    impact,
}: CaseStudyCardProps) {
    return (
        <Card title={title} size="md">
            {visual}
            <h4>Problem</h4>
            <p>{problem}</p>
            <h4>Approach</h4>
            <p>{approach}</p>
            <h4>Impact</h4>
            <p>{impact}</p>
        </Card>
    );
}
