import { promises as fs } from "node:fs";
import path from "node:path";

async function collectFiles(
    dir: string,
    exts: string[],
    ignore: Set<string>,
): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        if (ignore.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await collectFiles(full, exts, ignore)));
        } else if (exts.some((ext) => entry.name.endsWith(ext))) {
            files.push(full);
        }
    }
    return files;
}

function replaceEnums(content: string): string {
    let result = content;

    // update import path
    result = result.replace(/@\/lib\/enums/g, "@/types");

    // normalise Size enum members
    result = result
        .replace(/Size\.Xs/g, "Size.XS")
        .replace(/Size\.Sm/g, "Size.SM")
        .replace(/Size\.Md/g, "Size.MD")
        .replace(/Size\.Lg/g, "Size.LG")
        .replace(/Size\.Xl/g, "Size.XL");

    // string literals to enums for size
    result = result
        .replace(/size:\s*"xs"/g, "size: Size.XS")
        .replace(/size:\s*"sm"/g, "size: Size.SM")
        .replace(/size:\s*"md"/g, "size: Size.MD")
        .replace(/size:\s*"lg"/g, "size: Size.LG")
        .replace(/size:\s*"xl"/g, "size: Size.XL")
        .replace(/variant:\s*"primary"/g, "variant: Variant.Primary")
        .replace(/variant:\s*"secondary"/g, "variant: Variant.Secondary")
        .replace(/variant:\s*"link"/g, "variant: Variant.Link")
        .replace(/variant:\s*"subtle"/g, "variant: Variant.Subtle")
        .replace(/variant:\s*"destructive"/g, "variant: Variant.Destructive")
        .replace(/variant:\s*"success"/g, "variant: Variant.Success")
        .replace(/variant:\s*"warning"/g, "variant: Variant.Warning")
        .replace(/variant:\s*"info"/g, "variant: Variant.Info");

    return result;
}

function ensureImports(content: string): string {
    const needsSize = content.includes("Size.");
    const needsVariant = content.includes("Variant.");
    const importRegex = /import\s+{([^}]+)}\s+from\s+"@\/types";/;
    const match = content.match(importRegex);
    if (match) {
        const names = match[1]
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        const set = new Set(names);
        if (needsSize) set.add("Size");
        else set.delete("Size");
        if (needsVariant) set.add("Variant");
        else set.delete("Variant");
        const updated = `import { ${Array.from(set).sort().join(", ")} } from "@/types";`;
        return content.replace(importRegex, updated);
    }
    const names: string[] = [];
    if (needsSize) names.push("Size");
    if (needsVariant) names.push("Variant");
    if (names.length === 0) return content;
    const importLine = `import { ${names.join(", ")} } from "@/types";`;
    const lines = content.split("\n");
    let lastImport = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("import")) lastImport = i;
    }
    lines.splice(lastImport + 1, 0, importLine);
    return lines.join("\n");
}

async function processFile(file: string) {
    const content = await fs.readFile(file, "utf8");
    let updated = replaceEnums(content);
    if (updated !== content) {
        updated = ensureImports(updated);
        await fs.writeFile(file, updated);
        console.log(`Updated ${path.relative(process.cwd(), file)}`);
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
    ]);
    const files = await collectFiles(root, [".ts", ".tsx"], ignore);
    for (const file of files) {
        await processFile(file);
    }
    // remove legacy enums file if exists
    const legacy = path.join(root, "lib", "enums.ts");
    try {
        await fs.unlink(legacy);
        console.log("Removed lib/enums.ts");
    } catch (err: unknown) {
        void err;
    }
}

main().catch((err: unknown) => {
    console.error(err);
    process.exit(1);
});
