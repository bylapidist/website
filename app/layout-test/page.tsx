import Button from "@/components/Button/Button";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import CardGrid from "@/components/CardGrid/CardGrid";
import Grid from "@/components/Grid/Grid";
import Stack from "@/components/Stack/Stack";

export default function Page() {
    return (
        <div>
            <Stack data-testid="stack" gap="var(--space-s)">
                <div>One</div>
                <div>Two</div>
            </Stack>
            <Grid data-testid="grid" gap="var(--space-xs)">
                <div>One</div>
                <div>Two</div>
            </Grid>
            <CardGrid data-testid="card-grid">
                <div>One</div>
                <div>Two</div>
            </CardGrid>
            <ButtonGroup data-testid="button-group">
                <Button>A</Button>
                <Button>B</Button>
            </ButtonGroup>
        </div>
    );
}
