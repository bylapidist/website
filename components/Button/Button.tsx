import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";
import styles from "./Button.module.scss";

type BaseProps = {
    variant?: "primary" | "secondary" | "ghost";
    size?: "md" | "lg";
    className?: string;
    children: ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type Props = ButtonProps | AnchorProps;

export default function Button(props: Props) {
    const {
        variant = "primary",
        size = "md",
        className,
        children,
        ...rest
    } = props as BaseProps & Record<string, unknown>;
    const classes = [styles.button, className].filter(Boolean).join(" ");
    const data = { "data-variant": variant, "data-size": size } as const;
    if ("href" in props) {
        return (
            <a
                {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
                {...data}
                className={classes}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
            {...data}
            className={classes}
        >
            {children}
        </button>
    );
}
