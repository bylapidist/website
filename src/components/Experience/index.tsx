import React from 'react';
import { Timeline } from '@lapidist/components';
import SectionLayout from '../../layouts/SectionLayout';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Software Developer',
            from: '2024',
            to: 'Present',
            urlTitle: 'Encompass',
            url: 'https://www.encompasscorporation.com/'
        },
        {
            title: 'Senior Software Engineer',
            from: '2021',
            to: '2023',
            urlTitle: 'LendInvest',
            url: 'https://www.lendinvest.com'
        },
        {
            title: 'Frontend Software Developer',
            from: '2020',
            to: '2021',
            urlTitle: 'Golden Charter',
            url: 'https://www.goldencharter.co.uk'
        },
        {
            title: 'Frontend Team Lead',
            from: '2019',
            to: '2019',
            urlTitle: 'Markup',
            url: 'https://www.linkedin.com/company/markup-digital-ltd'
        },
        {
            title: 'Senior Software Engineer',
            from: '2018',
            to: '2019',
            urlTitle: 'Markup',
            url: 'https://www.linkedin.com/company/markup-digital-ltd'
        },
        {
            title: 'Frontend Developer',
            from: '2016',
            to: '2017',
            urlTitle: 'Everyone',
            url: 'https://www.weareeveryone.com'
        },
        {
            title: 'Senior Digital Designer',
            from: '2014',
            to: '2016',
            urlTitle: 'Ibiza Digital Media',
            url: 'https://www.linkedin.com/company/ibiza-digital-media'
        }
    ];

    return (
        <SectionLayout title="Experience">
            <Timeline size="small" items={experiences} />
        </SectionLayout>
    );
};

export default Experience;
