import Image, { type StaticImageData } from "next/image";
import abstract2 from "@/app/(assets)/images/abstract-2.svg";
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
                <h2 id="case-example-heading">Case example</h2>
                <Card
                    className={styles.caseExample}
                    title="Global fintech"
                    footer={
                        <p>
                            After: –38% UI bugs per release · +24% velocity on
                            UI tickets · 95th pctl route paint &lt; 1.2s
                        </p>
                    }
                >
                    <p>
                        Before: fragmented widgets, duplicated effort,
                        inaccessible flows.
                    </p>
                    <p>
                        After: unified tokens, audited patterns—CI checks keep
                        regressions out.
                    </p>
                    <p>Mechanism: refactored tokens; CI enforces them.</p>
                    <Image
                        src={abstract2 as StaticImageData}
                        alt=""
                        width={400}
                        height={300}
                        decoding="async"
                        sizes="(max-width: 600px) 100vw, 400px"
                    />
                </Card>
            </Container>
        </section>
    );
}
