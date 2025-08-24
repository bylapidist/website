"use client";

import { useDisclosure } from "@/components/hooks/useDisclosure";

export default function DisclosureTestPage() {
    const { getTriggerProps, getPanelProps, isOpen } = useDisclosure();
    return (
        <div>
            <button data-testid="trigger" {...getTriggerProps()}>
                {isOpen ? "Hide" : "Show"} content
            </button>
            <div data-testid="panel" {...getPanelProps()}>
                Panel content
            </div>
        </div>
    );
}
