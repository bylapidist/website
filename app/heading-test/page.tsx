import Card from "@/components/Card/Card";
import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section/Section";

export default function HeadingTestPage() {
    return (
        <div>
            <Heading level={3}>Test</Heading>
            <Heading as="div" level={2} data-testid="div-heading">
                Override
            </Heading>
            <Heading level={1} visuallyHidden data-testid="hidden">
                Hidden
            </Heading>
            <Section heading="Section heading" headingLevel={2}>
                <p>Body</p>
            </Section>
            <Card heading="Card heading" headingLevel={4}>
                <p>Body</p>
            </Card>
        </div>
    );
}
