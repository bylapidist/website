import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { remark } from "remark";
import readingTime from "remark-reading-time";

const ARTICLES_PATH = path.join(process.cwd(), "content", "articles");

type ArticleMeta = {
    year: string;
    slug: string;
    title: string;
    description: string;
    summary: string;
    tags: string[];
    date: string;
    readingTime: string;
    image: string;
    author: {
        name?: string;
        url?: string;
    };
};

export async function getArticle(year: string, slug: string) {
    const filePath = path.join(ARTICLES_PATH, year, `${slug}.mdx`);
    const source = await fs.promises.readFile(filePath, "utf8");
    const { data, content } = matter(source);
    const processed = await remark().use(readingTime, {}).process(content);
    const stats = processed.data.readingTime as {
        minutes: number;
        words: number;
    };
    const wordCount = stats.words;
    const readingTimeText = `${String(Math.ceil(stats.minutes))} min read`;
    const { content: MDXContent } = await compileMDX({ source: content });
    const meta: ArticleMeta = {
        year,
        slug,
        title: data.title as string,
        description: (data.description as string) || "",
        summary: (data.summary as string) || "",
        tags: (data.tags as string[] | undefined) ?? [],
        date: data.date as string,
        readingTime: readingTimeText,
        image: (data.image as string) || "",
        author: (data.author ?? {}) as { name?: string; url?: string },
    };
    return { meta, content: MDXContent, wordCount };
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
    const years = await fs.promises.readdir(ARTICLES_PATH);
    const articles: ArticleMeta[] = [];
    for (const year of years) {
        const dir = path.join(ARTICLES_PATH, year);
        const files = await fs.promises.readdir(dir);
        for (const file of files) {
            if (file.endsWith(".mdx") || file.endsWith(".md")) {
                const slug = file.replace(/\.mdx?$/, "");
                const filePath = path.join(dir, file);
                const source = await fs.promises.readFile(filePath, "utf8");
                const { data, content } = matter(source);
                const processed = await remark()
                    .use(readingTime, {})
                    .process(content);
                const stats = processed.data.readingTime as {
                    minutes: number;
                };
                const readingTimeText = `${String(Math.ceil(stats.minutes))} min read`;
                articles.push({
                    year,
                    slug,
                    title: data.title as string,
                    description: (data.description as string) || "",
                    summary: (data.summary as string) || "",
                    tags: (data.tags as string[] | undefined) ?? [],
                    date: data.date as string,
                    readingTime: readingTimeText,
                    image: (data.image as string) || "",
                    author: (data.author ?? {}) as {
                        name?: string;
                        url?: string;
                    },
                });
            }
        }
    }
    return articles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}
