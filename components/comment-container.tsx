import React from 'react';

import parse from 'html-react-parser';
import humanizeDuration from 'humanize-duration';
import { DateTime, Interval } from 'luxon';
import styled from 'styled-components';

import { Item } from '../models/item';

interface Props {
    item: Item;
}

export const CommentContainer: React.FunctionComponent<Props> = ({ item }) => {
    return (
        <Container>
            {item.time && (
                <div className="post-time">
                    {humanizeDuration(
                        Interval.fromDateTimes(
                            DateTime.fromSeconds(item.time),
                            DateTime.now()
                        )
                            .toDuration()
                            .valueOf(),
                        {
                            round: true,
                        }
                    )}{' '}
                    ago
                </div>
            )}
            <div>{parse(item.text || '')}</div>
        </Container>
    );
};

const Container = styled.div`
    margin: 1rem 0;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    overflow: hidden;

    .post-time {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;

        color: grey;
    }
`;
