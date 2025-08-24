import { promises as fs } from "node:fs";
import path from "node:path";

type EnumInfo = {
    map: Record<string, string>;
    keys: Set<string>;
    values: Set<string>;
};

async function collectFiles(
    dir: string,
    extensions: string[],
    ignore: Set<string>,
): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        if (ignore.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await collectFiles(full, extensions, ignore)));
        } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
            files.push(full);
        }
    }
    return files;
}

async function loadEnum(file: string, name: string): Promise<EnumInfo> {
    try {
        const content = await fs.readFile(file, "utf8");
        const regex = new RegExp(
            `export\\s+enum\\s+${name}\\s*{([\\s\\S]*?)}`,
            "m",
        );
        const match = regex.exec(content);
        const block = match ? match[1] : "";
        const map: Record<string, string> = {};
        const entryRegex = /(\w+)\s*=\s*["'`](\w+)["'`]/g;
        let m: RegExpExecArray | null;
        while ((m = entryRegex.exec(block))) {
            map[m[1]] = m[2];
        }
        return {
            map,
            keys: new Set(Object.keys(map)),
            values: new Set(Object.values(map)),
        };
    } catch {
        return { map: {}, keys: new Set(), values: new Set() };
    }
}

async function scanProps(root: string) {
    const ignore = new Set([
        "node_modules",
        ".git",
        "reports",
        ".next",
        "public",
        "out",
        "scripts",
    ]);
    const extensions = [".ts", ".tsx"];
    const files = await collectFiles(root, extensions, ignore);

    const enumsFile = path.join(root, "packages", "types", "props.ts");
    const sizeEnum = await loadEnum(enumsFile, "Size");
    const variantEnum = await loadEnum(enumsFile, "Variant");

    const sizeRegex =
        /\bsize\s*[:=]\s*(?:["'`]([A-Za-z0-9_-]+)["'`]|Size\.(\w+))/g;
    const variantRegex =
        /\bvariant\s*[:=]\s*(?:["'`]([A-Za-z0-9_-]+)["'`]|Variant\.(\w+))/g;

    const unknownSizes = new Map<string, Set<string>>();
    const unknownVariants = new Map<string, Set<string>>();

    for (const file of files) {
        const content = await fs.readFile(file, "utf8");
        sizeRegex.lastIndex = 0;
        variantRegex.lastIndex = 0;
        let match: RegExpExecArray | null;
        while ((match = sizeRegex.exec(content))) {
            const literal = match[1];
            const enumKey = match[2];
            if (literal) {
                if (!sizeEnum.values.has(literal)) {
                    const rel = path.relative(root, file);
                    const set = unknownSizes.get(literal) ?? new Set<string>();
                    set.add(rel);
                    unknownSizes.set(literal, set);
                }
            } else if (enumKey && !sizeEnum.keys.has(enumKey)) {
                const rel = path.relative(root, file);
                const set = unknownSizes.get(enumKey) ?? new Set<string>();
                set.add(rel);
                unknownSizes.set(enumKey, set);
            }
        }
        while ((match = variantRegex.exec(content))) {
            const literal = match[1];
            const enumKey = match[2];
            if (literal) {
                if (!variantEnum.values.has(literal)) {
                    const rel = path.relative(root, file);
                    const set =
                        unknownVariants.get(literal) ?? new Set<string>();
                    set.add(rel);
                    unknownVariants.set(literal, set);
                }
            } else if (enumKey && !variantEnum.keys.has(enumKey)) {
                const rel = path.relative(root, file);
                const set = unknownVariants.get(enumKey) ?? new Set<string>();
                set.add(rel);
                unknownVariants.set(enumKey, set);
            }
        }
    }
    return {
        unknownSizes: Object.fromEntries(
            Array.from(unknownSizes, ([k, v]) => [k, Array.from(v).sort()]),
        ),
        unknownVariants: Object.fromEntries(
            Array.from(unknownVariants, ([k, v]) => [k, Array.from(v).sort()]),
        ),
    };
}

async function scanHeadings(root: string) {
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
        if (file.endsWith(".stories.tsx")) continue;
        const content = await fs.readFile(file, "utf8");
        if (headingRegex.test(content)) {
            results.push(path.relative(root, file));
        }
    }
    return results.sort();
}

async function main() {
    const root = process.cwd();
    const { unknownSizes, unknownVariants } = await scanProps(root);
    const currentHeadings = await scanHeadings(root);

    let hasError = false;

    if (Object.keys(unknownSizes).length) {
        console.error("Unexpected size values:");
        console.error(JSON.stringify(unknownSizes, null, 2));
        hasError = true;
    }
    if (Object.keys(unknownVariants).length) {
        console.error("Unexpected variant values:");
        console.error(JSON.stringify(unknownVariants, null, 2));
        hasError = true;
    }

    const baselinePath = path.join(root, "reports", "headings.json");
    let baseline: string[] = [];
    try {
        const raw = await fs.readFile(baselinePath, "utf8");
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) {
            baseline = parsed.filter((v): v is string => typeof v === "string");
        }
    } catch {
        // ignore missing or invalid baseline
    }
    const extra = currentHeadings.filter((f) => !baseline.includes(f));
    const missing = baseline.filter((f) => !currentHeadings.includes(f));
    if (extra.length || missing.length) {
        console.error("Heading usage drift detected:");
        if (extra.length) {
            console.error("- New files:", extra);
        }
        if (missing.length) {
            console.error("- Missing files:", missing);
        }
        hasError = true;
    }

    if (hasError) {
        process.exit(1);
    }
}

main().catch((err: unknown) => {
    console.error(err);
    process.exit(1);
});
