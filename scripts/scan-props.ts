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

async function loadEnum(
    file: string,
    name: string,
): Promise<Record<string, string>> {
    try {
        const content = await fs.readFile(file, "utf8");
        const regex = new RegExp(
            `export\\s+enum\\s+${name}\\s*{([\\s\\S]*?)}`,
            "m",
        );
        const match = regex.exec(content);
        const block = match ? match[1] : "";
        const entries: Record<string, string> = {};
        const entryRegex = /(\w+)\s*=\s*["'`](\w+)["'`]/g;
        let m: RegExpExecArray | null;
        while ((m = entryRegex.exec(block))) {
            entries[m[1]] = m[2];
        }
        return entries;
    } catch {
        return {};
    }
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
        "scripts",
    ]);
    const extensions = [".ts", ".tsx"];

    const files = await collectFiles(root, extensions, ignore);

    const enumsFile = path.join(root, "packages", "types", "props.ts");
    const sizeMap = await loadEnum(enumsFile, "Size");
    const variantMap = await loadEnum(enumsFile, "Variant");

    const sizeRegex =
        /\bsize\s*[:=]\s*(?:["'`]([A-Za-z0-9_-]+)["'`]|Size\.(\w+))/g;
    const variantRegex =
        /\bvariant\s*[:=]\s*(?:["'`]([A-Za-z0-9_-]+)["'`]|Variant\.(\w+))/g;

    const size: Record<string, Set<string>> = {};
    const variant: Record<string, Set<string>> = {};

    for (const file of files) {
        const content = await fs.readFile(file, "utf8");
        sizeRegex.lastIndex = 0;
        variantRegex.lastIndex = 0;
        let match: RegExpExecArray | null;
        while ((match = sizeRegex.exec(content))) {
            const enumKey = match[2];
            const value =
                match[1] || (enumKey ? sizeMap[enumKey] || enumKey : undefined);
            if (!value) continue;
            const rel = path.relative(root, file);
            if (!Object.prototype.hasOwnProperty.call(size, value)) {
                size[value] = new Set();
            }
            size[value].add(rel);
        }
        while ((match = variantRegex.exec(content))) {
            const enumKey = match[2];
            const value =
                match[1] ||
                (enumKey ? variantMap[enumKey] || enumKey : undefined);
            if (!value) continue;
            const rel = path.relative(root, file);
            if (!Object.prototype.hasOwnProperty.call(variant, value)) {
                variant[value] = new Set();
            }
            variant[value].add(rel);
        }
    }

    const output = {
        size: Object.fromEntries(
            Object.entries(size).map(([k, v]) => [k, Array.from(v).sort()]),
        ),
        variant: Object.fromEntries(
            Object.entries(variant).map(([k, v]) => [k, Array.from(v).sort()]),
        ),
    };

    await fs.mkdir(path.join(root, "reports"), { recursive: true });
    await fs.writeFile(
        path.join(root, "reports", "prop-usage.json"),
        JSON.stringify(output, null, 2),
    );
}

main().catch((err: unknown) => {
    console.error(err);
    process.exit(1);
});
