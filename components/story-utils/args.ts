import { Size, Variant } from "@/types";

export const enumControl = (e: Record<string, string>) =>
    ({
        control: { type: "select" },
        options: Object.values(e),
    }) as const;

export const sizeArg = enumControl(Size);
export const variantArg = enumControl(Variant);
