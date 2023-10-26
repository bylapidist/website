import React from 'react';
import { Box, Heading, Link, Tag, Text } from '@lapidist/components';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import * as styles from './styles.module.scss';

type ProjectProps = {
    title: string;
    description: string;
    version: string;
    url: string;
};

const Project = ({ title, description, version, url }: ProjectProps) => {
    return (
        <Box
            className={styles.project}
            as="section"
            elevation="small"
            gutter="large"
        >
            <Box as="header" gutter="small">
                <Heading as="h4" size="small" weight="medium">
                    {title}
                </Heading>
            </Box>

            <Box as="main" gutter="small">
                <Text size="small">{description}</Text>
            </Box>

            <Box className={styles.separator} as="hr" gutter="large" />

            <Box className={styles.meta} as="footer">
                <Tag level="secondary">{version}</Tag>
                <Box className={styles.links}>
                    <Link
                        icon={faArrowUpRightFromSquare}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                    >
                        GitHub
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Project;
