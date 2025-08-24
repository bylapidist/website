import { expect, test } from "@playwright/test";
import { Size, Variant } from "../packages/types/props";

test.describe("shared prop enums", () => {
    test("size enum values", () => {
        expect(Object.values(Size)).toEqual(["xs", "sm", "md", "lg", "xl"]);
    });

    test("variant enum values", () => {
        expect(Object.values(Variant)).toEqual([
            "primary",
            "secondary",
            "link",
            "subtle",
            "destructive",
            "success",
            "warning",
            "info",
            "testimonial",
            "step",
        ]);
    });
});
