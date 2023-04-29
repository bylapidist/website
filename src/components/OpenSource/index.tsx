import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import Project from '../Project';
import * as styles from './styles.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

type Repository = {
    node: {
        isArchived: boolean;
        description: string;
        homepageUrl: string;
        id: string;
        latestRelease: {
            tagName: string;
        };
        name: string;
        updatedAt: string;
        url: string;
    };
};

type Response = {
    github: {
        organization: {
            repositories: {
                edges: Repository[];
            };
        };
    };
};

const OpenSource = () => {
    const {
        github: {
            organization: {
                repositories: { edges: projects }
            }
        }
    }: Response = useStaticQuery(graphql`
        query {
            github {
                organization(login: "bylapidist") {
                    repositories(first: 100, privacy: PUBLIC) {
                        edges {
                            node {
                                id
                                name
                                description
                                url
                                updatedAt
                                homepageUrl
                                isArchived
                                latestRelease {
                                    tagName
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <SectionLayout className={styles.project} title="Open Source">
            {projects.map(
                (project) =>
                    !project.node.isArchived && (
                        <Project
                            key={project.node.id}
                            title={`@lapidist/${project.node.name}`}
                            description={project.node.description}
                            version={project.node.latestRelease.tagName}
                            url={project.node.url}
                        />
                    )
            )}
        </SectionLayout>
    );
};

export default OpenSource;
