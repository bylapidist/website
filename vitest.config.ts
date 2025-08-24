import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./", import.meta.url)),
        },
    },
    esbuild: {
        jsx: "automatic",
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./tests/setup.ts",
        include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
        exclude: ["tests/**/*.spec.ts"],
    },
});
