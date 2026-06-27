import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./smoke-tests",
    testMatch: /.*\.spec\.ts/,
    use: { baseURL: "http://localhost:3000" },
    projects: [
        {
            name: "light",
            use: { colorScheme: "light" },
        },
        {
            name: "dark",
            use: { colorScheme: "dark" },
        },
    ],
    webServer: {
        command: "pnpm run build && pnpm run start",
        url: "http://localhost:3000",
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
});
