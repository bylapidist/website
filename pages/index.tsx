import React from 'react';
import styled from 'styled-components';
import {
    Link,
    Title,
    TitleProps,
    Paragraph,
    Logo as BaseLogo,
    LogoProps,
    breakpoint
} from '@lapidist/components';

const Main: React.FC = styled.main`
    width: 100%;

    @media ${breakpoint('laptop-small')} {
        width: 50%;
    }
`;

const LinkWrapper: React.FC = styled.div`
    a {
        margin-right: 20px;
        line-height: 1.8;
    }
`;

const Name: React.FC<TitleProps> = styled(Title)<TitleProps>`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 60px;

    @media ${breakpoint('laptop-small')} {
        font-size: 36px;
    }
`;

const Logo: React.FC<LogoProps> = styled(BaseLogo)<LogoProps>`
    display: block;
`;

export default class HomePage extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <header>
                    <Logo size="60px" animated />
                    <Name>Brett Dorrans</Name>
                </header>
                <Main>
                    <Paragraph>
                        I&apos;m a Senior Software Engineer based in Glasgow,
                        Scotland. I have been building software and strong
                        client relationships for over a decade.
                    </Paragraph>
                    <LinkWrapper>
                        <Link title="CV" href="brett-dorrans-cv-2020.pdf" />
                        <Link
                            title="GitHub"
                            href="https://github.com/brettdorrans"
                        />
                        <Link
                            title="OSS GitHub"
                            href="https://github.com/bylapidist"
                        />
                        <Link
                            title="LinkedIn"
                            href="https://www.linkedin.com/pub/brett-dorrans/28/378/714"
                        />
                        <Link title="Email" href="mailto:hello@lapidist.net" />
                    </LinkWrapper>
                </Main>
            </>
        );
    }
}
