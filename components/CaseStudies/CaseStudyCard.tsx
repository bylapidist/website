import { ReactNode } from "react";
import Card from "@/components/Card/Card";

interface CaseStudyCardProps {
    title: string;
    visual: ReactNode;
    context: string;
    team: string;
    problem: string;
    approach: string;
    results: string;
}

export default function CaseStudyCard({
    title,
    visual,
    context,
    team,
    problem,
    approach,
    results,
}: CaseStudyCardProps) {
    return (
        <Card title={title} size="md">
            {visual}
            <p>
                <strong>Business context:</strong> {context}
            </p>
            <p>
                <strong>Team:</strong> {team}
            </p>
            <h4>Problem</h4>
            <p>{problem}</p>
            <h4>Approach</h4>
            <p>{approach}</p>
            <h4>Results</h4>
            <p>{results}</p>
        </Card>
    );
}
