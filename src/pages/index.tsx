import React from 'react';
import { Link, Logo } from '@lapidist/components';
import IndexLayout from '../layouts';
import MainWrapper from '../components/MainWrapper';
import LinkWrapper from '../components/LinkWrapper';
import PageTitle from '../components/PageTitle';
import TextWrapper from '../components/TextWrapper';

const IndexPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Logo animated />
            <PageTitle
                fontWeight="black"
                fontSize={8}
                textColor={{ colorGroup: 'grey', colorShade: 'dark' }}
            >
                Brett Dorrans
            </PageTitle>
        </header>
        <MainWrapper>
            <TextWrapper textColor={{ colorGroup: 'grey', colorShade: 'base' }}>
                I&apos;m a Senior Software Engineer based in Glasgow, Scotland.
                Scotland. I have been building software and strong client
                relationships for over a decade.
            </TextWrapper>
            <LinkWrapper>
                <Link href="/brett-dorrans-cv-2020.pdf">CV</Link>
                <Link href="https://github.com/brettdorrans">GitHub</Link>
                <Link href="https://github.com/bylapidist">OSS GitHub</Link>
                <Link href="https://www.linkedin.com/pub/brett-dorrans/28/378/714">
                    LinkedIn
                </Link>
                <Link href="mailto:hello@lapidist.net">Email</Link>
            </LinkWrapper>
        </MainWrapper>
    </IndexLayout>
);

export default IndexPage;
