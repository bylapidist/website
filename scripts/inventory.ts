import { promises as fs } from "node:fs";
import path from "node:path";

async function collectFiles(
    dir: string,
    filter: (file: string) => boolean,
): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await collectFiles(fullPath, filter)));
        } else if (filter(fullPath)) {
            files.push(fullPath);
        }
    }
    return files;
}

async function main() {
    const root = process.cwd();

    const componentsDir = path.join(root, "components");
    const tokensDir = path.join(root, "tokens");
    const mixinsFile = path.join(root, "styles", "mixins.scss");

    const components = await collectFiles(
        componentsDir,
        (f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"),
    );

    const stories = await collectFiles(componentsDir, (f) =>
        f.endsWith(".stories.tsx"),
    );

    const tokens = await collectFiles(tokensDir, (f) => f.endsWith(".json"));

    let mixins: string[] = [];
    try {
        const mixinsContent = await fs.readFile(mixinsFile, "utf8");
        mixins = Array.from(mixinsContent.matchAll(/@mixin\s+([\w-]+)/g)).map(
            (m) => m[1],
        );
    } catch (error: unknown) {
        void error;
        mixins = [];
    }

    const output = {
        components: components.map((f) => path.relative(root, f)),
        stories: stories.map((f) => path.relative(root, f)),
        tokens: tokens.map((f) => path.relative(root, f)),
        mixins,
    };

    await fs.mkdir(path.join(root, "reports"), { recursive: true });
    await fs.writeFile(
        path.join(root, "reports", "inventory.json"),
        JSON.stringify(output, null, 2),
    );
}

main().catch((err: unknown) => {
    console.error(err);
    process.exit(1);
});
