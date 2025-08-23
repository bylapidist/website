import { execSync } from "node:child_process";
import { watch } from "node:fs";
import path from "node:path";

const TOKENS_DIR = path.join(process.cwd(), "tokens");

function build() {
    execSync(
        "npx style-dictionary build --config style-dictionary.config.mjs",
        { stdio: "inherit" },
    );
}

build();

/** @type {NodeJS.Timeout | undefined} */
let timeout;
watch(TOKENS_DIR, (event, filename) => {
    if (!filename || !filename.endsWith(".json")) return;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(`Rebuilding tokens due to changes in ${filename}`);
        build();
    }, 100);
});
