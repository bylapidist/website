import Icon from "@/components/Icon/Icon";
import { Size } from "@/packages/types/props";

export default function IconTestPage() {
    return (
        <div>
            <Icon
                name="sun"
                title="Sun icon"
                size={Size.LG}
                data-testid="large"
            />
            <Icon name="moon" decorative data-testid="decorative" />
        </div>
    );
}
