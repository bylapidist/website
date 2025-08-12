import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./CaseExample.module.scss";

export default function CaseExample() {
    return (
        <Section id="case-example" heading="Case examples">
            <Card className={styles.caseExample} title="Global fintech">
                <p>
                    <strong>Before:</strong> fragmented widgets, duplicated
                    effort, inaccessible flows.
                </p>
                <p>
                    <strong>After:</strong> unified tokens, audited patterns—CI
                    checks keep regressions out, –38% UI bugs per release, +24%
                    velocity on UI tickets, 95th pctl route paint &lt; 1.2s.
                </p>
            </Card>
        </Section>
    );
}
