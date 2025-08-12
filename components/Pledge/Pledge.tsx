import Section from "@/components/Section/Section";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./Pledge.module.scss";

export default function Pledge() {
    return (
        <Section labelledBy="pledge-heading">
            <h2 id="pledge-heading">
                <VisuallyHidden>
                    Accessibility &amp; Performance pledge
                </VisuallyHidden>
            </h2>
            <details>
                <summary>View my Accessibility &amp; Performance pledge</summary>
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
        </Section>
    );
}
