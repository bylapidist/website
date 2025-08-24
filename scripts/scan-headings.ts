import { promises as fs } from "node:fs";
import path from "node:path";

async function collectFiles(
    dir: string,
    extensions: string[],
    ignore: Set<string>,
): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        if (ignore.has(entry.name)) {
            continue;
        }
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await collectFiles(fullPath, extensions, ignore)));
        } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
            files.push(fullPath);
        }
    }
    return files;
}

async function main() {
    const root = process.cwd();
    const ignore = new Set([
        "node_modules",
        ".git",
        "reports",
        ".next",
        "public",
        "out",
    ]);
    const extensions = [".ts", ".tsx"];
    const componentsDir = path.join(root, "components");
    const files = await collectFiles(componentsDir, extensions, ignore);

    const headingRegex = /headingLevel\s*[?:]/;
    const results: string[] = [];

    for (const file of files) {
        if (file.endsWith(".stories.tsx")) {
            continue;
        }
        const content = await fs.readFile(file, "utf8");
        if (headingRegex.test(content)) {
            results.push(path.relative(root, file));
        }
    }

    await fs.mkdir(path.join(root, "reports"), { recursive: true });
    await fs.writeFile(
        path.join(root, "reports", "headings.json"),
        JSON.stringify(results.sort(), null, 2),
    );
}

main().catch((err: unknown) => {
    console.error(err);
    process.exit(1);
});
