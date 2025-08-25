import type { ComponentPropsWithRef, ElementType } from "react";

export enum Size {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
}

export enum Variant {
    Primary = "primary",
    Secondary = "secondary",
    Link = "link",
    Subtle = "subtle",
    Destructive = "destructive",
    Success = "success",
    Warning = "warning",
    Info = "info",
    Testimonial = "testimonial",
    Step = "step",
}

export type WithSize = {
    size?: Size;
};

export type WithVariant = {
    variant?: Variant;
};

export type PolymorphicProps<
    As extends ElementType,
    Props extends object = Record<string, unknown>,
> = Props &
    Omit<ComponentPropsWithRef<As>, keyof Props | "as"> & {
        as?: As;
    };
