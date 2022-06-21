import React from 'react';

import styled from 'styled-components';

import { Title } from './title';

export const PageContainer: React.FunctionComponent<{
    children: React.ReactNode;
}> = ({ children }) => (
    <Container>
        <header>
            <Title />
        </header>
        <main>{children}</main>
        <footer>
            <ul>
                <li>
                    <a
                        href="http://news.ycombinator.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Comments sourced organically from Hacker News
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/chiptopher/hackernoise"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Source
                    </a>
                </li>
                <li>
                    <a
                        href="https://chrismboyer.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Site by Christopher M. Boyer
                    </a>
                </li>
            </ul>
        </footer>
    </Container>
);

const Container = styled.div`
    max-width: 40rem;
    padding: 1rem;
    margin: 0 auto;

    color: black;

    a {
        color: inherit;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
    }

    footer {
        margin-top: 2rem;

        ul {
            list-style-type: none;
            text-align: center;

            li:not(:last-child) {
                margin-bottom: 0.5rem;
            }

            li:last-child {
                margin-top: 1rem;
            }

            li {
                color: grey;
                font-size: 0.8rem;
            }
        }
    }
`;
