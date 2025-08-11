import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    use: { baseURL: "http://localhost:3000" },
    webServer: {
        command: "npm run build:next && npm run start",
        url: "http://localhost:3000",
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
});
