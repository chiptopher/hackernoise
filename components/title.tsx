import React from 'react';

import styled from 'styled-components';

export const Title: React.FunctionComponent = () => {
    return (
        <Container>
            <span>Hacker</span>
            <span>Noise</span>
        </Container>
    );
};

const Container = styled.h1`
    text-align: center;

    span:nth-child(2) {
        color: #ff6600;
    }
`;
