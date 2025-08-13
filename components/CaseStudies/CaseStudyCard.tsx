import { ReactNode } from "react";
import Card from "@/components/Card/Card";

interface CaseStudyCardProps {
    title: string;
    visual: ReactNode;
    before: string;
    after: string;
}

export default function CaseStudyCard({
    title,
    visual,
    before,
    after,
}: CaseStudyCardProps) {
    return (
        <Card title={title} size="md">
            {visual}
            <h4>Before:</h4>
            <p>{before}</p>
            <h4>After:</h4>
            <p>{after}</p>
        </Card>
    );
}
