import "server-only";
import { Button, Card, Section } from "@/components";
import { Size, Variant } from "@/types";
import styles from "./FeaturedProject.module.scss";

const DOCS_URL = "https://dtif.lapidist.net";
const REPO_URL = "https://github.com/bylapidist/dtif";

export default function FeaturedProject() {
    return (
        <Section
            id="featured-project"
            heading="Featured project"
            className={styles.featuredProject}
            containerSize={Size.LG}
        >
            <Card
                heading="Design Token Interchange Format (DTIF)"
                size={Size.LG}
                className={styles.card}
            >
                <div className={styles.copy}>
                    <p>
                        DTIF is the vendor-neutral JSON specification I steward
                        so design tools and codebases can share design tokens
                        with predictable structure.
                    </p>
                    <p>
                        The project ships documentation, a community registry,
                        and npm packages that validate token payloads and guide
                        adoption.
                    </p>
                    <dl className={styles.highlights}>
                        <div>
                            <dt>Schema-first:</dt>
                            <dd>
                                Official JSON Schema and bundled TypeScript
                                definitions guarantee interoperable token
                                payloads across teams.
                            </dd>
                        </div>
                        <div>
                            <dt>Tooling:</dt>
                            <dd>
                                Validator packages and CI-friendly examples let
                                engineering teams embed DTIF checks without
                                bespoke setup.
                            </dd>
                        </div>
                        <div>
                            <dt>Governance:</dt>
                            <dd>
                                A documented registry, roadmap, and proposal
                                process invites collaboration on new token
                                primitives.
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className={styles.links}>
                    <Button
                        href={DOCS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore the DTIF docs
                    </Button>
                    <Button
                        href={REPO_URL}
                        variant={Variant.Secondary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View the GitHub repo
                    </Button>
                </div>
            </Card>
        </Section>
    );
}
