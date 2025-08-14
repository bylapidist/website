"use client";

import { useEffect } from "react";

export default function ForceErrorPage() {
    useEffect(() => {
        throw new Error("Forced error");
    }, []);
    return null;
}
