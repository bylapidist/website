import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { usePrefersReducedMotion } from "@/hooks";

describe("usePrefersReducedMotion", () => {
    const originalMatchMedia = window.matchMedia;

    afterEach(() => {
        window.matchMedia = originalMatchMedia;
        vi.restoreAllMocks();
    });

    function mockMediaQuery(matches: boolean) {
        window.matchMedia = vi.fn().mockImplementation(() => ({
            matches,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        }));
    }

    test("returns true when prefers-reduced-motion matches", () => {
        mockMediaQuery(true);
        const { result } = renderHook(() => usePrefersReducedMotion());
        expect(result.current).toBe(true);
    });

    test("returns false when prefers-reduced-motion does not match", () => {
        mockMediaQuery(false);
        const { result } = renderHook(() => usePrefersReducedMotion());
        expect(result.current).toBe(false);
    });
});
