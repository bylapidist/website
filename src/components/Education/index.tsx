import React from 'react';
import { Timeline } from '@lapidist/components';
import SectionLayout from '../../layouts/SectionLayout';

const Education = () => {
    const education = [
        {
            title: 'BA (Hons) Illustration',
            from: '2007',
            to: '2011',
            urlTitle: 'Edinburgh College of Art',
            url: 'https://www.eca.ed.ac.uk'
        }
    ];

    return (
        <SectionLayout title="Education">
            <Timeline size="small" items={education} />
        </SectionLayout>
    );
};

export default Education;
