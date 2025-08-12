import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import styles from "./CaseExample.module.scss";

export default function CaseExample() {
    return (
        <section
            role="region"
            aria-labelledby="case-example-heading"
            style={{ contentVisibility: "auto" }}
        >
            <Container>
                <h2 id="case-example-heading">Case examples</h2>
                <Card className={styles.caseExample} title="Global fintech">
                    <p>
                        <strong>Before:</strong> fragmented widgets, duplicated
                        effort, inaccessible flows.
                    </p>
                    <p>
                        <strong>After:</strong> unified tokens, audited
                        patterns—CI checks keep regressions out, –38% UI bugs
                        per release, +24% velocity on UI tickets, 95th pctl
                        route paint &lt; 1.2s.
                    </p>
                </Card>
            </Container>
        </section>
    );
}
