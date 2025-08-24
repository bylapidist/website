import FormField from "@/components/FormField/FormField";
import Input from "@/components/Input/Input";

export default function Page() {
    return (
        <form>
            <FormField
                label="Username"
                description="Enter your username"
                error="Required"
            >
                <Input data-testid="field" />
            </FormField>
        </form>
    );
}
