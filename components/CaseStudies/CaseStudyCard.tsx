import { ReactNode } from "react";
import Card from "@/components/Card/Card";
import styles from "./CaseStudyCard.module.scss";

interface CaseStudyCardProps {
    title: string;
    visual: ReactNode;
    before: string;
    after: string;
    highlights?: string[];
}

export default function CaseStudyCard({
    title,
    visual,
    before,
    after,
    highlights = [],
}: CaseStudyCardProps) {
    return (
        <Card title={title} size="md">
            {visual}
            <h4>Before:</h4>
            <p>{before}</p>
            <h4>After:</h4>
            <p>{after}</p>
            {highlights.length > 0 && (
                <>
                    <ul className={styles.highlights}>
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </Card>
    );
}
