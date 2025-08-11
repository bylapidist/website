import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const csp =
        "default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline';";

    response.headers.set("Content-Security-Policy", csp);
    response.headers.set("Referrer-Policy", "no-referrer");
    response.headers.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=()",
    );
    response.headers.set("X-Frame-Options", "DENY");

    return response;
}

export const config = {
    matcher: "/:path*",
};
