import React from 'react';

import NextLink from 'next/link';
import styled, { css } from 'styled-components';

interface Props {
    currentComment: number;
    frontComment: number;
    lastComment: number;
}

export const PageNav: React.FunctionComponent<Props> = ({
    currentComment,
    frontComment,
    lastComment,
}) => {
    const previous = currentComment + 50;
    return (
        <Container>
            <div className="menu-container">
                <NextLink href="/" passHref>
                    <Link>beginning</Link>
                </NextLink>
                {previous < frontComment ? (
                    <NextLink href={`?from=${previous}`} passHref>
                        <Link>newer</Link>
                    </NextLink>
                ) : (
                    <Link disabled>previous</Link>
                )}
                <NextLink href={`?from=${lastComment - 1}`} passHref>
                    <Link>older</Link>
                </NextLink>
            </div>
        </Container>
    );
};

const Container = styled.nav`
    display: flex;
    justify-content: center;

    .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;

        a:first-child {
            justify-self: end;
        }
        a:last-child {
            justify-self: start;
        }
    }
`;

const LinkDisabledStyles = css`
    cursor: not-allowed;
    color: grey !important;
`;

const Link = styled.a<{ disabled?: boolean }>`
    text-decoration: underline;
    color: black;

    ${p => p.disabled && LinkDisabledStyles}
`;
