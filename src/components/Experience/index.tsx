import React from 'react';
import { Box, Text, Link } from '@lapidist/components';
import * as styles from './styles.module.scss';
import SectionLayout from '../../layouts/SectionLayout';

const Experience = () => {
    const experiences = [
        {
            company: 'LendInvest',
            title: 'Senior Software Engineer',
            from: 'Apr 2021',
            to: 'Present',
            href: 'https://www.lendinvest.com/'
        },
        {
            company: 'Golden Charter',
            title: 'Frontend Software Developer',
            from: 'Feb 2020',
            to: 'Apr 2021',
            href: 'https://www.goldencharter.co.uk/'
        },
        {
            company: 'Markup',
            title: 'Frontend Team Lead',
            from: 'Aug 2019',
            to: 'Dec 2019',
            href: 'https://www.linkedin.com/company/markup-digital-ltd/'
        },
        {
            company: 'Markup',
            title: 'Senior Software Engineer',
            from: 'Jan 2018',
            to: 'Aug 2019',
            href: 'https://www.linkedin.com/company/markup-digital-ltd/'
        },
        {
            company: 'Everyone',
            title: 'Frontend Developer',
            from: 'Nov 2016',
            to: 'Dec 2017',
            href: 'https://www.weareeveryone.com/'
        },
        {
            company: 'Ibiza Digital Media',
            title: 'Senior Digital Designer',
            from: 'Oct 2014',
            to: 'Sep 2016',
            href: 'https://www.linkedin.com/company/ibiza-digital-media'
        }
    ];

    return (
        <SectionLayout title="Experience">
            <Text size="small">
                {experiences.map((experience) => (
                    <Box
                        className={styles.grid}
                        key={`${experience.company}-${experience.title}`}
                        gutterY="medium"
                    >
                        <Box>
                            {experience.from}&mdash;{experience.to}
                        </Box>
                        <Box className={styles.meta}>
                            <Box>
                                <Link
                                    href={experience.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    size="small"
                                >
                                    {experience.company}
                                </Link>
                            </Box>
                            <Box>{experience.title}</Box>
                        </Box>
                    </Box>
                ))}
            </Text>
        </SectionLayout>
    );
};

export default Experience;
