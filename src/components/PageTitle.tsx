import React from 'react';
import { Heading, HeadingProps } from '@lapidist/components';
import styled from 'styled-components';

const PageTitle: React.FC<HeadingProps> = styled(Heading)<HeadingProps>`
    margin-bottom: 60px;
`;

export default PageTitle;
