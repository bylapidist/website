import React from 'react';
import { Timeline } from '@lapidist/components';
import SectionLayout from '../../layouts/SectionLayout';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Software Engineer',
            from: 'Apr 2021',
            to: 'Present',
            urlTitle: 'LendInvest',
            url: 'https://www.lendinvest.com'
        },
        {
            title: 'Frontend Software Developer',
            from: 'Feb 2020',
            to: 'Apr 2021',
            urlTitle: 'Golden Charter',
            url: 'https://www.goldencharter.co.uk'
        },
        {
            title: 'Frontend Team Lead',
            from: 'Aug 2019',
            to: 'Dec 2019',
            urlTitle: 'Markup',
            url: 'https://www.linkedin.com/company/markup-digital-ltd'
        },
        {
            title: 'Senior Software Engineer',
            from: 'Jan 2018',
            to: 'Aug 2019',
            urlTitle: 'Markup',
            url: 'https://www.linkedin.com/company/markup-digital-ltd'
        },
        {
            title: 'Frontend Developer',
            from: 'Nov 2016',
            to: 'Dec 2017',
            urlTitle: 'Everyone',
            url: 'https://www.weareeveryone.com'
        },
        {
            title: 'Senior Digital Designer',
            from: 'Oct 2014',
            to: 'Sep 2016',
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
