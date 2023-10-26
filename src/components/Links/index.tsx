import React from 'react';
import { Box, Link } from '@lapidist/components';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import * as styles from './styles.module.scss';

const Links = () => {
    return (
        <ul className={styles.list} data-nosnippet>
            <Box as="li" gutterY="small">
                <Link
                    icon={faFileArrowDown}
                    href="/brett-dorrans-cv.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    CV
                </Link>
            </Box>
            <Box as="li" gutterY="small">
                <Link
                    // icon={faGithub}
                    href="https://github.com/brettdorrans"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    GitHub
                </Link>
            </Box>
            <Box as="li" gutterY="small">
                <Link
                    // icon={faGift}
                    href="https://github.com/bylapidist"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Open Source
                </Link>
            </Box>
            <Box as="li" gutterY="small">
                <Link
                    // icon={faLinkedin}
                    href="https://www.linkedin.com/in/brettdorrans"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    LinkedIn
                </Link>
            </Box>
            <Box as="li" gutterY="small">
                <Link href="mailto:hello@lapidist.net">Email</Link>
            </Box>
        </ul>
    );
};

export default Links;
