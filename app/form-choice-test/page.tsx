import Checkbox from "@/components/Checkbox/Checkbox";
import Radio from "@/components/Radio/Radio";
import Switch from "@/components/Switch/Switch";

export default function Page() {
    return (
        <form>
            <label htmlFor="cb">Checkbox</label>
            <Checkbox id="cb" data-testid="checkbox" />

            <fieldset>
                <legend>Radio</legend>
                <label htmlFor="radio-a">A</label>
                <Radio
                    id="radio-a"
                    data-testid="radio-a"
                    name="group"
                    value="a"
                />
                <label htmlFor="radio-b">B</label>
                <Radio
                    id="radio-b"
                    data-testid="radio-b"
                    name="group"
                    value="b"
                />
            </fieldset>

            <label htmlFor="sw">Switch</label>
            <Switch id="sw" data-testid="switch" />
        </form>
    );
}
