import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

function getLastModifiedDate(filePath: string): Date {
    try {
        const gitDate = execSync(`git log -1 --format=%cI -- ${filePath}`, {
            cwd: process.cwd(),
            encoding: "utf8",
        }).trim();
        if (gitDate) {
            return new Date(gitDate);
        }
    } catch {
        // ignore
    }
    try {
        const { mtime } = fs.statSync(path.join(process.cwd(), filePath));
        return mtime;
    } catch {
        // ignore
    }
    return new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getAllArticles();
    const articleEntries = articles.map(({ year, slug }) => {
        let filePath = path.join("content", "articles", year, `${slug}.mdx`);
        if (!fs.existsSync(path.join(process.cwd(), filePath))) {
            filePath = path.join("content", "articles", year, `${slug}.md`);
        }
        return {
            url: `https://lapidist.net/articles/${year}/${slug}/`,
            lastModified: getLastModifiedDate(filePath),
        };
    });
    return [
        {
            url: "https://lapidist.net/",
            lastModified: getLastModifiedDate("app/page.tsx"),
        },
        {
            url: "https://lapidist.net/about/",
            lastModified: getLastModifiedDate("app/about/page.tsx"),
        },
        {
            url: "https://lapidist.net/articles/",
            lastModified: getLastModifiedDate("app/articles/page.tsx"),
        },
        {
            url: "https://lapidist.net/accessibility-statement/",
            lastModified: getLastModifiedDate(
                "app/accessibility-statement/page.tsx",
            ),
        },
        {
            url: "https://lapidist.net/ai-ethics-statement/",
            lastModified: getLastModifiedDate(
                "app/ai-ethics-statement/page.tsx",
            ),
        },
        {
            url: "https://lapidist.net/brett-dorrans-cv.pdf",
            lastModified: getLastModifiedDate("public/brett-dorrans-cv.pdf"),
        },
        ...articleEntries,
    ];
}
