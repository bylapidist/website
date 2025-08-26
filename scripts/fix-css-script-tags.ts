import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const root = "out";
const files: string[] = [];

function walk(dir: string): void {
    for (const d of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, d.name);
        if (d.isDirectory()) walk(p);
        else if (p.endsWith(".html")) files.push(p);
    }
}
walk(root);

const re = /<script([^>]*?)\s+src=('|")([^"']+\.css)\2[^>]*><\/script>/g;

for (const f of files) {
    const html = readFileSync(f, "utf8");
    re.lastIndex = 0;
    if (re.test(html)) {
        re.lastIndex = 0;
        const fixed = html.replace(
            re,
            (_match: string, _attrs: string, q: string, href: string) =>
                `<link rel="preload" as="style" href=${q}${href}${q}><link rel="stylesheet" href=${q}${href}${q}>`,
        );
        writeFileSync(f, fixed);
        console.log("Fixed CSS script tag in", f);
    }
}
