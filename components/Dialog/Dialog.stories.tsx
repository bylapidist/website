import type { Meta, StoryObj } from "@storybook/nextjs";
import Heading from "@/components/Heading/Heading";
import { useDisclosure } from "@/hooks/useDisclosure";
import Dialog from "./Dialog";

const meta = {
    title: "Components/Dialog",
    component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: { open: false, onClose: () => {} },
    render: () => {
        const { isOpen, open, close } = useDisclosure();
        return (
            <>
                <button onClick={open}>Open dialog</button>
                <Dialog
                    open={isOpen}
                    onClose={close}
                    aria-labelledby="dialog-title"
                >
                    <Heading level={2} id="dialog-title">
                        Example dialog
                    </Heading>
                    <p>Content</p>
                    <button onClick={close} data-testid="close">
                        Close
                    </button>
                    <button data-testid="confirm">Confirm</button>
                </Dialog>
            </>
        );
    },
};
