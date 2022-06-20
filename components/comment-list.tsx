import React from 'react';

import styled from 'styled-components';

import { Item } from '../models/item';
import { CommentContainer } from './comment-container';

interface Props {
    items: Item[];
}

export const CommentList: React.FunctionComponent<Props> = ({ items }) => {
    return (
        <Container>
            {items.map(item => (
                <li key={item.id}>
                    <CommentContainer item={item} />
                </li>
            ))}
        </Container>
    );
};

const Container = styled.ol`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;
