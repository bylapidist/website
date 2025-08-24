"use client";

import Dialog from "@/components/Dialog/Dialog";
import { useDisclosure } from "@/components/hooks/useDisclosure";

export default function Page() {
    const { isOpen, open, close } = useDisclosure();
    return (
        <div>
            <button data-testid="open" onClick={open}>
                Open dialog
            </button>
            <Dialog open={isOpen} onClose={close} aria-labelledby="test-title">
                <h2 id="test-title">Test dialog</h2>
                <p>Content</p>
                <button onClick={close} data-testid="close">
                    Close
                </button>
                <button data-testid="confirm">Confirm</button>
            </Dialog>
        </div>
    );
}
