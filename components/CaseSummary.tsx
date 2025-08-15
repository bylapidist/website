import React from "react";

interface CaseSummaryProps {
    role: string;
    year: string;
    stack: string[];
    outcomes: string[];
}

export default function CaseSummary({
    role,
    year,
    stack,
    outcomes,
}: CaseSummaryProps) {
    return (
        <aside>
            <h2>Summary</h2>
            <dl>
                <dt>Role</dt>
                <dd>{role}</dd>
                <dt>Year</dt>
                <dd>{year}</dd>
                <dt>Stack</dt>
                <dd>{stack.join(", ")}</dd>
                <dt>Outcomes</dt>
                <dd>
                    <ul>
                        {outcomes.map((o) => (
                            <li key={o}>{o}</li>
                        ))}
                    </ul>
                </dd>
            </dl>
        </aside>
    );
}
