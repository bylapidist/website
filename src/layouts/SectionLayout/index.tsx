import React, { ReactNode } from 'react';
import { Box, Heading } from '@lapidist/components';

type SectionLayoutProps = {
    className?: string;
    title: string;
    children: ReactNode;
};

const SectionLayout = ({ className, title, children }: SectionLayoutProps) => {
    return (
        <Box as="section">
            <Box gutterY="large">
                <Heading as="h3" size="small">
                    {title}
                </Heading>
            </Box>
            <Box className={className}>{children}</Box>
        </Box>
    );
};

export default SectionLayout;
