import Button from "@/components/Button/Button";

export default function Page() {
    return (
        <Button href="/about" disabled data-testid="link">
            Disabled link
        </Button>
    );
}
