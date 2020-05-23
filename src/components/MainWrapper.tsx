import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '@lapidist/components';

const MainWrapper: React.FC = styled.main`
    width: 100%;

    @media ${breakpoint('laptop-small')} {
        width: 50%;
    }
`;

export default MainWrapper;
