import { Decorator, Preview } from "@storybook/nextjs";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "../styles/tokens.scss";
import "../styles/globals.scss";
import "../styles/typography.scss";

const header = Lexend_Deca({
    variable: "--font-header",
    subsets: ["latin"],
    display: "swap",
});

const body = Roboto_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
});

export const decorators: Decorator[] = [
    (Story) => (
        <div className={`${header.variable} ${body.variable}`}>
            <Story />
        </div>
    ),
];

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
