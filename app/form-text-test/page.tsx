import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import Textarea from "@/components/Textarea/Textarea";

export default function Page() {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <Input id="name" data-testid="input" />

            <label htmlFor="bio">Bio</label>
            <Textarea id="bio" data-testid="textarea" />

            <label htmlFor="choice">Choice</label>
            <Select id="choice" data-testid="select">
                <option value="1">One</option>
            </Select>

            <label htmlFor="error">Error</label>
            <Input
                id="error"
                data-testid="invalid"
                invalid
                aria-describedby="error-msg"
            />
            <p id="error-msg">Required</p>
        </form>
    );
}
