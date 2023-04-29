import React from 'react';
import { Link } from '@lapidist/components';
import * as styles from './styles.module.scss';

const Links = () => {
    return (
        <ul className={styles.list} data-nosnippet>
            <li>
                <Link
                    href="/brett-dorrans-cv.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    CV
                </Link>
            </li>
            <li>
                <Link
                    href="https://github.com/brettdorrans"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    GitHub
                </Link>
            </li>
            <li>
                <Link
                    href="https://github.com/bylapidist"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    OSS GitHub
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.linkedin.com/in/brettdorrans"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    LinkedIn
                </Link>
            </li>
            <li>
                <Link href="mailto:hello@lapidist.net">Email</Link>
            </li>
        </ul>
    );
};

export default Links;
