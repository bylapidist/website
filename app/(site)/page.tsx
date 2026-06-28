import "server-only";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import {
    buildHomePageStructuredData,
    buildMetadata,
    formatDate,
} from "@/utils";
import styles from "./page.module.scss";

const DESCRIPTION =
    "I build frontend platforms and the design systems that hold them together. Fifteen years turning sprawling interfaces into systems that stay coherent.";

export const metadata = buildMetadata({
    description: DESCRIPTION,
    canonical: "/",
    openGraph: { images: [{ url: "/opengraph-image" }] },
    twitter: { images: ["/twitter-image"] },
});

const PROJECTS = [
    {
        name: "@lapidist/dtif",
        desc: "A JSON format for exchanging design tokens. Standardises colour, typography, and spacing so design, code, and automation stay in sync.",
        url: "https://github.com/bylapidist/dtif",
    },
    {
        name: "@lapidist/dtifx",
        desc: "A production toolkit for DTIF: diffing, builds, and audits that keep tokens, components, and policies aligned.",
        url: "https://github.com/bylapidist/dtifx",
    },
    {
        name: "@lapidist/design-lint",
        desc: "A design-system-aware linter for JavaScript, TypeScript, and CSS. Validates tokens and component usage to keep every interface consistent.",
        url: "https://github.com/bylapidist/design-lint",
    },
];

const EXPERIENCE = [
    { role: "Staff Frontend Engineer", company: "Codat", period: "Current" },
    {
        role: "Frontend Engineer / Design Systems",
        company: "Encompass",
        period: "",
    },
    {
        role: "Frontend Engineer / Design Systems",
        company: "LendInvest",
        period: "",
    },
    { role: "Frontend Engineer", company: "Golden Charter", period: "" },
    { role: "Frontend Engineer", company: "Hunter", period: "" },
    { role: "Frontend Engineer", company: "GANT", period: "" },
];

export default async function Page() {
    const allArticles = await getAllArticles();
    const recentArticles = allArticles.slice(0, 3);
    const datePublished =
        allArticles[allArticles.length - 1]?.date ??
        new Date().toISOString().split("T")[0];

    return (
        <>
            <script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        buildHomePageStructuredData(datePublished),
                    ),
                }}
            />

            {/* HERO */}
            <section className={styles.heroSection}>
                <div data-reveal className={styles.heroCard}>
                    <span
                        aria-hidden="true"
                        className={styles.heroAccentLine}
                    />
                    <p className={styles.heroEyebrow}>
                        Staff Frontend Engineer
                    </p>
                    <h1 className={styles.heroHeading}>
                        I build frontend platforms and the design systems that
                        hold them together.
                    </h1>
                    <p className={styles.heroIntro}>
                        Fifteen years turning sprawling interfaces into systems
                        that stay coherent as teams and products grow.
                    </p>
                </div>
            </section>

            {/* NOW */}
            <section className={styles.nowSection}>
                <div data-reveal className={styles.nowGrid}>
                    <h2 className={styles.nowLabel}>Now</h2>
                    <p className={styles.nowText}>
                        I&apos;m currently Staff Frontend Engineer at Codat,
                        leading frontend architecture across a multi-framework
                        fintech platform. Alongside it I maintain Lapidist, an
                        open-source toolchain for design tokens, and write about
                        the craft of building interfaces that don&apos;t rot.
                    </p>
                </div>
            </section>

            {/* SELECTED WRITING */}
            <section
                aria-labelledby="writing-heading"
                className={styles.writingSection}
            >
                <div data-reveal className={styles.sectionHeader}>
                    <h2 id="writing-heading" className={styles.sectionTitle}>
                        Selected writing
                    </h2>
                    <Link href="/articles" className={styles.sectionAllLink}>
                        All writing →
                    </Link>
                </div>
                <div className={styles.articleGrid}>
                    {recentArticles.map(
                        ({
                            year,
                            slug,
                            title,
                            description,
                            date,
                            tags,
                            readingTime,
                        }) => (
                            <Link
                                key={`${year}-${slug}`}
                                href={`/articles/${year}/${slug}`}
                                data-reveal
                                className={styles.articleCard}
                            >
                                <p className={styles.articleDate}>
                                    {formatDate(date)}
                                </p>
                                <h3 className={styles.articleTitle}>{title}</h3>
                                <p className={styles.articleDesc}>
                                    {description}
                                </p>
                                <p className={styles.articleMeta}>
                                    {tags.join(", ")}
                                    {tags.length > 0 && readingTime
                                        ? " · "
                                        : ""}
                                    {readingTime}
                                </p>
                            </Link>
                        ),
                    )}
                </div>
            </section>

            {/* OPEN SOURCE */}
            <section
                id="projects"
                aria-labelledby="os-heading"
                className={styles.projectsSection}
            >
                <div data-reveal className={styles.projectsHeader}>
                    <h2 id="os-heading" className={styles.sectionTitle}>
                        Open source
                    </h2>
                    <p className={styles.projectsDesc}>
                        Tooling I build and maintain for the people who maintain
                        design systems.
                    </p>
                </div>
                <div className={styles.projectGrid}>
                    {PROJECTS.map((p) => (
                        <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-no-ext-icon
                            data-reveal
                            className={styles.projectCard}
                        >
                            <h3 className={styles.projectName}>{p.name}</h3>
                            <p className={styles.projectDesc}>{p.desc}</p>
                            <span className={styles.projectCta}>
                                View repository →
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            {/* EXPERIENCE */}
            <section
                aria-labelledby="exp-heading"
                className={styles.experienceSection}
            >
                <div data-reveal className={styles.experienceHeader}>
                    <h2 id="exp-heading" className={styles.sectionTitle}>
                        Experience
                    </h2>
                    <p className={styles.experienceDesc}>
                        Selected roles across fintech, regulated SaaS, and
                        consumer brands.
                    </p>
                </div>
                <ul data-reveal className={styles.experienceList}>
                    {EXPERIENCE.map((e) => (
                        <li
                            key={`${e.role}-${e.company}`}
                            className={styles.experienceItem}
                        >
                            <span className={styles.experienceRole}>
                                <span className={styles.experienceTitle}>
                                    {e.role}
                                </span>
                                <span className={styles.experienceCompany}>
                                    {e.company}
                                </span>
                            </span>
                            {e.period && (
                                <span className={styles.experiencePeriod}>
                                    {e.period}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
