/* eslint-disable @typescript-eslint/await-thenable */
import { execSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
const DIST_SW = path.join(process.cwd(), "dist-sw", "sw.js");
const DEST_SW = path.join(OUT_DIR, "sw.js");
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const BASE_PATH = rawBase ? `/${rawBase.replace(/^\/|\/$/g, "")}` : "";

const ASSET_EXTS = [
    ".js",
    ".css",
    ".json",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".ico",
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
    ".eot",
    ".mp3",
    ".mp4",
    ".webm",
    ".wav",
    ".ogg",
    ".html",
];

async function walk(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await walk(full)));
        } else if (entry.isFile()) {
            if (entry.name === "sw.js" || entry.name.endsWith(".map")) continue;
            const rel = path.relative(OUT_DIR, full).replace(/\\/g, "/");
            const urlPath = "/" + rel;
            if (entry.name === "index.html") {
                const dirName = path.dirname(urlPath);
                files.push(BASE_PATH + (dirName === "/" ? "/" : dirName + "/"));
            } else if (
                rel.startsWith("_next/static/") ||
                ASSET_EXTS.some((ext) => rel.endsWith(ext))
            ) {
                files.push(BASE_PATH + urlPath);
            }
        }
    }
    return files.sort();
}

async function build() {
    const precache = await walk(OUT_DIR);
    let version: string;
    try {
        version = execSync("git rev-parse --short HEAD").toString().trim();
    } catch {
        version = new Date().toISOString();
    }

    let sw = await fs.readFile(DIST_SW, "utf8");
    const globals = `self.__PRECACHE = ${JSON.stringify(precache)};\nself.__SW_VERSION = \"${version}\";\n`;
    sw = globals + sw;
    await fs.writeFile(DEST_SW, sw, "utf8");
}

build().catch((err) => {
    console.error(err);
    process.exit(1);
});
