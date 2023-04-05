import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
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
`;
