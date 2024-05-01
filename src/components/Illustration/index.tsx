import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import IllustrationProject from '../IllustrationProject';
import * as styles from './styles.module.scss';
const Illustration = () => {
    const projects = [
        {
            title: 'Self Portrait',
            image: '/illustration/self-portrait.jpeg'
        },
        {
            title: 'Nessa',
            image: '/illustration/nessa.jpeg'
        }
    ];

    return (
        <SectionLayout className={styles.project} title="Illustration">
            {projects.map((project) => (
                <IllustrationProject
                    key={project.title}
                    title={project.title}
                    image={project.image}
                />
            ))}
        </SectionLayout>
    );
};

export default Illustration;
