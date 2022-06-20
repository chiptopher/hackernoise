import React from 'react';

import NextLink from 'next/link';
import styled from 'styled-components';

export const Title: React.FunctionComponent = () => {
    return (
        <NextLink href="/" passHref>
            <TitleLink>
                <Container>
                    <span>Hacker</span>
                    <span>Noise</span>
                </Container>
            </TitleLink>
        </NextLink>
    );
};

const Container = styled.h1`
    text-align: center;

    span:nth-child(2) {
        color: #ff6600;
    }
`;

const TitleLink = styled.a`
    text-decoration: none;
`;
