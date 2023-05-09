import React from 'react';
import { Box, Heading, Text } from '@lapidist/components';

const Intro = () => (
    <>
        <Heading as="h2" size="medium" weight="regular">
            A Senior Frontend Engineer from Glasgow with over a decade of
            experience building software and relationships.
        </Heading>
        <Box gutterY="large">
            <Text>
                My current focus is on engineering inclusivity and
                accessibility, enabling the creation of user-centric design
                systems that foster empathy and exceptional user experiences.
            </Text>
        </Box>
    </>
);

export default Intro;
