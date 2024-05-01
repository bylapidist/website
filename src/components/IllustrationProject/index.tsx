import React from 'react';
import { Box } from '@lapidist/components';
import * as styles from './styles.module.scss';

type IllustrationProjectProps = {
    title: string;
    image: string;
};

const IllustrationProject = ({ title, image }: IllustrationProjectProps) => {
    return (
        <Box
            className={styles.project}
            as="section"
            elevation="small"
            gutter="large"
        >
            <img alt={title} src={image} />
        </Box>
    );
};

export default IllustrationProject;
