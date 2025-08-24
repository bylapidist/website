import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function setupMatchMedia(matches: boolean) {
    return {
        matches,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
    } as unknown as MediaQueryList;
}

test("returns user's reduced-motion preference", () => {
    const matchMedia = vi.fn().mockReturnValue(setupMatchMedia(true));
    window.matchMedia = matchMedia as unknown as typeof window.matchMedia;

    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(true);
    expect(matchMedia).toHaveBeenCalledWith("(prefers-reduced-motion: reduce)");
});
