import React from 'react';
import { breakpoint, Title, TitleProps } from '@lapidist/components';
import styled from 'styled-components';

const PageTitle: React.FC<TitleProps> = styled(Title)<TitleProps>`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 60px;

    @media ${breakpoint('laptop-small')} {
        font-size: 36px;
    }
`;

export default PageTitle;
