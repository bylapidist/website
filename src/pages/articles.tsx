import React from 'react';
import {PageProps} from "gatsby";
import { Text, Heading, Link } from '@lapidist/components';
import IndexLayout from '../layouts';
import { containerStyles, headingStyles } from '../styles';

type DataProps = {
}

const ArticlesPage = ({ data }: PageProps<DataProps>): JSX.Element => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <IndexLayout>
            <header>
                <Heading size={1} styles={headingStyles}>
                    Articles
                </Heading>
            </header>
            <Text styles={containerStyles}>
                <Text>
                    {posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug

                        return (
                            <li key={post.fields.slug}>
                                <article
                                    className="post-list-item"
                                    itemScope
                                    itemType="http://schema.org/Article"
                                >
                                    <header>
                                        <h2>
                                            <Link to={post.fields.slug} itemProp="url">
                                                <span itemProp="headline">{title}</span>
                                            </Link>
                                        </h2>
                                        <small>{post.frontmatter.date}</small>
                                    </header>
                                    <section>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: post.frontmatter.description || post.excerpt,
                                            }}
                                            itemProp="description"
                                        />
                                    </section>
                                </article>
                            </li>
                        )
                    })}
                </Text>
                <Link href="/">Return home</Link>
            </Text>
        </IndexLayout>
    );
};

export default ArticlesPage;
