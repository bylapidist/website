import React from 'react';
import { PageProps, Link as GatsbyLink, graphql } from "gatsby"
import { Text, Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import {containerStyles, headingStyles, introStyles} from '../styles';

type DataProps = {
}

const Template = ({ data, location }: PageProps<DataProps>): React.FC<PageProps<DataProps>> => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <IndexLayout>
            <header>
                <Heading size={1} styles={headingStyles}>
                    Articles
                </Heading>
            </header>
            <Text styles={containerStyles}>
                <Text styles={introStyles}>
                    <article dangerouslySetInnerHTML={{ __html: html }}/>
                </Text>
                <Link href="/">Return home</Link>
            </Text>
        </IndexLayout>
    );
};

export default Template;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
