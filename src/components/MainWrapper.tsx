import React from 'react';
import styled from 'styled-components';

const MainWrapper: React.FC = styled.main`
    width: 100%;

    @media (min-width: 1024px) {
        width: 50%;
    }
`;

export default MainWrapper;
