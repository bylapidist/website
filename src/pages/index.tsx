import React from 'react';
import styled from 'styled-components';
import {
    Link,
    Logo as BaseLogo,
    LogoProps,
    Paragraph
} from '@lapidist/components';
import IndexLayout from '../layouts';
import MainWrapper from '../components/MainWrapper';
import LinkWrapper from '../components/LinkWrapper';
import PageTitle from '../components/PageTitle';

const Logo: React.FC<LogoProps> = styled(BaseLogo)<LogoProps>`
    display: block;
`;

const IndexPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Logo size="60px" animated />
            <PageTitle>Brett Dorrans</PageTitle>
        </header>
        <MainWrapper>
            <Paragraph>
                I&apos;m a Senior Software Engineer based in Glasgow, Scotland.
                Scotland. I have been building software and strong client
                relationships for over a decade.
            </Paragraph>
            <LinkWrapper>
                <Link title="CV" href="/brett-dorrans-cv-2020.pdf" />
                <Link title="GitHub" href="https://github.com/brettdorrans" />
                <Link title="OSS GitHub" href="https://github.com/bylapidist" />
                <Link
                    title="LinkedIn"
                    href="https://www.linkedin.com/pub/brett-dorrans/28/378/714"
                />
                <Link title="Email" href="mailto:hello@lapidist.net" />
            </LinkWrapper>
        </MainWrapper>
    </IndexLayout>
);

export default IndexPage;
