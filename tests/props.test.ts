import { Size, Variant } from "../packages/types/props";

describe("shared prop enums", () => {
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
