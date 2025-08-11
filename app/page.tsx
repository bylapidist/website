import Image, { type StaticImageData } from "next/image";

import abstract2 from "@/app/(assets)/images/abstract-2.svg";
import styles from "@/app/page.module.scss";

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import Stat from "@/components/Stat/Stat";

import { buildStructuredData } from "@/lib/structuredData";

export default function Page() {
    const structuredData = buildStructuredData();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <section className={styles.hero}>
                <Container size="l">
                    <div className={styles.ctaGroup}>
                        <h1
                            style={{
                                maxInlineSize: "25ch",
                                textWrap: "balance",
                                hyphens: "auto",
                            }}
                        >
                            Ship design systems teams trust.
                        </h1>
                        <p
                            style={{
                                maxInlineSize: "45ch",
                                textWrap: "balance",
                                hyphens: "auto",
                            }}
                        >
                            I help product orgs ship consistent UI faster —
                            governance, performance, accessibility baked in.
                        </p>
                    </div>
                    <div className={styles.ctaGroup}>
                        <div className={styles.cta}>
                            <Button href="#contact" size="lg">
                                Book a 20-min discovery call
                            </Button>
                            <p className={styles.note}>Let&apos;s chat.</p>
                        </div>
                        <div className={styles.cta}>
                            <Button
                                href="/deck.pdf"
                                variant="secondary"
                                size="lg"
                            >
                                Download capabilities deck
                            </Button>
                            <p className={styles.note}>No email gate.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section style={{ contentVisibility: "auto" }}>
                <Container>
                    <div className={styles.stats}>
                        <Stat value="15+ years" label="engineering expertise" />
                        <Stat
                            value="Enterprise"
                            label="scalable fintech apps"
                        />
                        <Stat value="Remote" label="UK & beyond" />
                    </div>
                </Container>
            </section>

            <section style={{ contentVisibility: "auto" }}>
                <Container>
                    <h2>From problem to solution</h2>
                    <ul className={styles.steps}>
                        <li>Tame design drift with scalable tokens.</li>
                        <li>Cut PR nitpicks via shared components.</li>
                        <li>Speed handoff through automated docs.</li>
                        <li>Bake in accessibility from the start.</li>
                    </ul>
                </Container>
            </section>

            <section style={{ contentVisibility: "auto" }}>
                <Container>
                    <h2>Signature services</h2>
                    <div className={styles.cards}>
                        <Card
                            title="Design System Bootstrap"
                            highlight
                            footer={<p>Timeline: 2-3 sprints</p>}
                        >
                            <p>For product teams needing momentum.</p>
                            <p>From audit to adoptable components in weeks.</p>
                        </Card>
                        <Card
                            title="System Audit & Roadmap"
                            footer={<p>Timeline: 2-3 sprints</p>}
                        >
                            <p>For orgs with assets but no strategy.</p>
                            <p>Build a pragmatic plan to evolve what exists.</p>
                        </Card>
                        <Card
                            title="Hands-on Build"
                            footer={<p>Timeline: 4–8 sprints</p>}
                        >
                            <p>For teams lacking capacity.</p>
                            <p>
                                Patterns, tools, processes that endure and
                                scale.
                            </p>
                        </Card>
                        <Card
                            title="Advisory & Team Uplift"
                            footer={<p>Timeline: ongoing</p>}
                        >
                            <p>For growing teams.</p>
                            <p>
                                Standards, coaching and reviews that raise the
                                bar.
                            </p>
                        </Card>
                    </div>
                </Container>
            </section>

            <section style={{ contentVisibility: "auto" }}>
                <Container>
                    <h2>My Approach</h2>
                    <ol className={styles.steps}>
                        <li>
                            <strong>Audit</strong> &rarr; baseline current UI
                            workflows.
                        </li>
                        <li>
                            <strong>Prototype</strong> &rarr; prove value with
                            tokens, components, culture.
                        </li>
                        <li>
                            <strong>Rollout</strong> &rarr; ship, track
                            adoption, close gaps.
                        </li>
                    </ol>
                </Container>
            </section>

            <section style={{ contentVisibility: "auto" }}>
                <Container>
                    <details>
                        <summary>
                            View my Accessibility &amp; Performance pledge
                        </summary>
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
                </Container>
            </section>

            <section style={{ contentVisibility: "auto" }}>
                <Container>
                    <h2>Case example</h2>
                    <Card
                        className={styles.caseExample}
                        title="Global fintech"
                        footer={
                            <p>
                                After: –38% UI bugs per release · +24% velocity
                                on UI tickets · 95th pctl route paint &lt; 1.2s
                            </p>
                        }
                    >
                        <p>
                            Before: fragmented widgets, duplicated effort,
                            inaccessible flows.
                        </p>
                        <p>
                            After: unified tokens, audited patterns—CI checks
                            keep regressions out.
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

            <section id="contact" style={{ contentVisibility: "auto" }}>
                <Container>
                    <h2>Ready to ship?</h2>
                    <div className={styles.ctaGroup}>
                        <Button href="mailto:hello@lapidist.net">
                            Book a 20-min discovery call
                        </Button>
                        <Button href="/deck.pdf" variant="secondary">
                            Download capabilities deck
                        </Button>
                    </div>
                </Container>
            </section>

            <footer>
                <Container>
                    <nav aria-label="Footer">
                        <ul className={styles.footerNav}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <p>© {new Date().getFullYear()} Brett Dorrans.</p>
                    <ul className={styles.social}>
                        <li>
                            <a href="#" rel="noopener noreferrer">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </Container>
            </footer>
        </>
    );
}
