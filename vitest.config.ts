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
        setupFiles: "./setup-tests.ts",
        include: ["**/*.test.ts", "**/*.test.tsx"],
        exclude: ["**/*.spec.ts", "node_modules/**"],
    },
});
