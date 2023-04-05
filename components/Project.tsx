import React from 'react';
import { Box, Heading, Link, Tag, Text } from '@lapidist/components';

type ProjectProps = {
    readonly title: string;
    readonly description: string;
    readonly version: string;
    readonly links: { readonly title: string; readonly href: string }[];
};

export default function Project({
    title,
    description,
    version,
    links
}: ProjectProps) {
    return (
        <Box as="section" elevation="small" gutter="large" className="project">
            <Box as="header" gutter="small">
                <Heading as="h2" size="small" weight="medium">
                    {title}
                </Heading>
            </Box>

            <Box as="main" gutter="small">
                <Text size="small">{description}</Text>
            </Box>

            <Box as="hr" className="separator" gutter="large" />

            <Box as="footer" className="meta" gutter="small">
                <Tag level="tertiary">{version}</Tag>
                <Box as="ul" className="links">
                    {links.map((link) => (
                        <li key={link.title}>
                            <Link size="small" href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
