"use server";

import fs from "fs";
import path from "path";
import { cache, type ComponentPropsWithoutRef, type ReactNode } from "react";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import type { Heading as MdastHeading, Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrismPlus from "rehype-prism-plus";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import readingTime from "remark-reading-time";
import { visit } from "unist-util-visit";
import { Heading } from "@/components";

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
    audio?: string;
};

export type Heading = { id: string; text: string; level: number };

export const getArticle = cache(async (year: string, slug: string) => {
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
    const headings: Heading[] = [];
    const slugger = new GithubSlugger();
    const headingPlugin = () => (tree: Root) => {
        visit(tree, "heading", (node: MdastHeading) => {
            if (node.depth < 2) {
                return;
            }
            const text = toString(node);
            const id = slugger.slug(text);
            headings.push({ id, text, level: node.depth });
            const data = node.data || (node.data = {});
            const props =
                (data.hProperties as { id?: string } | undefined) || {};
            props.id = id;
            data.hProperties = props;
        });
    };
    const headingComponents = {
        h1: (
            props: ComponentPropsWithoutRef<"h1"> & { children: ReactNode },
        ) => <Heading level={1} {...props} />,
        h2: (
            props: ComponentPropsWithoutRef<"h2"> & { children: ReactNode },
        ) => <Heading level={2} {...props} />,
        h3: (
            props: ComponentPropsWithoutRef<"h3"> & { children: ReactNode },
        ) => <Heading level={3} {...props} />,
        h4: (
            props: ComponentPropsWithoutRef<"h4"> & { children: ReactNode },
        ) => <Heading level={4} {...props} />,
        h5: (
            props: ComponentPropsWithoutRef<"h5"> & { children: ReactNode },
        ) => <Heading level={5} {...props} />,
        h6: (
            props: ComponentPropsWithoutRef<"h6"> & { children: ReactNode },
        ) => <Heading level={6} {...props} />,
    };
    const { content: MDXContent } = await compileMDX({
        source: content,
        components: headingComponents,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm, headingPlugin],
                rehypePlugins: [rehypePrismPlus],
            },
        },
    });
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
        audio: (data.audio as string) || "",
    };
    return { meta, content: MDXContent, wordCount, headings };
});

export const getAllArticles = cache(async (): Promise<ArticleMeta[]> => {
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
                    audio: (data.audio as string) || "",
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
});
