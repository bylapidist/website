import { Decorator, Preview } from "@storybook/nextjs";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "../styles/tokens.scss";
import "../styles/globals.scss";
import "../styles/typography.scss";

const header = Lexend_Deca({
    subsets: ["latin"],
    display: "swap",
});

const body = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
});

const withFontVariables: Decorator = (Story) => (
    <>
        <style>
            {`
                :root {
                    --font-header: ${header.style.fontFamily};
                    --font-body: ${body.style.fontFamily};
                }
            `}
        </style>
        <Story />
    </>
);

export const decorators: Decorator[] = [withFontVariables];

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
