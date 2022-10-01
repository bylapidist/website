import React from 'react';
import { orderBy } from 'lodash';
import { Box, Elevated, Panel, Toggle } from '@lapidist/components';
import { graphql, useStaticQuery } from 'gatsby';
import IndexLayout from '../layouts';
import { panelStyles } from '../styles';
import { PanelButtonProp } from '@lapidist/components/dist/es6/components/panel';

interface IRepository {
    node: {
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
}

interface IResponse {
    github: {
        organization: {
            repositories: {
                edges: IRepository[];
            };
        };
    };
}

const IndexPage = (): JSX.Element => {
    const {
        github: {
            organization: {
                repositories: { edges: repos }
            }
        }
    }: IResponse = useStaticQuery(graphql`
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

    const [showProjects, setShowProjects] = React.useState(true);
    const [showArticles, setShowArticles] = React.useState(false);

    return (
        <IndexLayout>
            <Elevated
                elevation="2"
                styles={{
                    width: 'full',
                    borderRadius: 'rounded',
                    padding: '2',
                    display: 'flex',
                    sizeGap: '3',
                    marginBottom: '4'
                }}
            >
                <Toggle
                    kind="secondary"
                    variant="medium"
                    checked={showProjects}
                    onClick={() => {
                        setShowProjects(true);
                        setShowArticles(false);
                    }}
                >
                    Projects
                </Toggle>
                <Toggle
                    kind="secondary"
                    variant="medium"
                    checked={showArticles}
                    onClick={() => {
                        setShowProjects(false);
                        setShowArticles(true);
                    }}
                >
                    Articles
                </Toggle>
            </Elevated>
            {repos && showProjects && (
                <Box styles={panelStyles}>
                    {orderBy(repos, ['node.name'], 'asc').map((repo) => {
                        const buttons: PanelButtonProp[] = [
                            {
                                title: 'GitHub',
                                props: {
                                    as: 'a',
                                    kind: 'primary',
                                    variant: 'small',
                                    target: '_blank',
                                    rel: 'noopener',
                                    href: repo.node.url
                                }
                            },
                            {
                                title: 'npm',
                                props: {
                                    as: 'a',
                                    kind: 'secondary',
                                    variant: 'small',
                                    target: '_blank',
                                    rel: 'noopener',
                                    href: `https://www.npmjs.com/package/@lapidist/${repo.node.name}`
                                }
                            }
                        ];
                        if (repo.node.homepageUrl) {
                            buttons.push({
                                title: 'Docs',
                                props: {
                                    as: 'a',
                                    kind: 'secondary',
                                    variant: 'small',
                                    target: '_blank',
                                    rel: 'noopener',
                                    href: repo.node.homepageUrl
                                }
                            });
                        }
                        return (
                            <Panel
                                elevation="1"
                                key={repo.node.id}
                                styles={panelStyles}
                                heading={{
                                    title: `@lapidist/${repo.node.name}`,
                                    props: {
                                        as: 'h2',
                                        size: 4
                                    }
                                }}
                                tag={{
                                    title: repo.node.latestRelease.tagName
                                }}
                                buttons={buttons}
                            >
                                {repo.node.description}
                            </Panel>
                        );
                    })}
                </Box>
            )}
        </IndexLayout>
    );
};

export default IndexPage;
