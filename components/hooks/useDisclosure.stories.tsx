import type { Meta, StoryObj } from "@storybook/nextjs";
import { useDisclosure } from "./useDisclosure";

const meta: Meta = {
    title: "Hooks/useDisclosure",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => {
        const { getTriggerProps, getPanelProps, isOpen } = useDisclosure();
        return (
            <div>
                <button {...getTriggerProps()}>
                    {isOpen ? "Hide" : "Show"} content
                </button>
                <div {...getPanelProps()}>Panel content</div>
            </div>
        );
    },
};
