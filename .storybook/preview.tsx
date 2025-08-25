import { Decorator, Preview } from "@storybook/nextjs";
import { Lexend_Deca, Roboto_Mono } from "next/font/google";
import "../styles/globals.scss";

const header = Lexend_Deca({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-header",
});

const body = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
});

const withFonts: Decorator = (Story) => (
    <div className={`${header.variable} ${body.variable} ${body.className}`}>
        <Story />
    </div>
);

export const decorators: Decorator[] = [withFonts];

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
