import type { Meta, StoryObj } from "@storybook/nextjs";
import Input from "@/components/Input/Input";
import FormField from "./FormField";

const meta: Meta<typeof FormField> = {
    title: "Components/FormField",
    component: FormField,
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
    render: () => (
        <FormField label="Name" description="Your full name">
            <Input />
        </FormField>
    ),
};

export const WithError: Story = {
    render: () => (
        <FormField label="Name" error="Required">
            <Input />
        </FormField>
    ),
};
