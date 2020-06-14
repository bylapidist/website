import React from 'react';
import { Box, Link, Logo } from '@lapidist/components';
import IndexLayout from '../layouts';
import LinkWrapper from '../components/LinkWrapper';
import PageTitle from '../components/PageTitle';
import TextWrapper from '../components/TextWrapper';

const IndexPage = (): JSX.Element => (
    <IndexLayout>
        <header>
            <Logo size="60px" animated />
            <PageTitle
                fontWeight="black"
                fontSize={8}
                textColor={{ colorGroup: 'grey', colorShade: 'dark' }}
            >
                Brett Dorrans
            </PageTitle>
        </header>
        <Box
            styles={{
                width: 'full',
                breakpoints: {
                    md: {
                        width: '1/2'
                    }
                }
            }}
        >
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
        </Box>
    </IndexLayout>
);

export default IndexPage;
