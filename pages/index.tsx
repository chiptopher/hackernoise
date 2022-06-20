import React from 'react';

import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { CommentList } from '../components/comment-list';
import { PageContainer } from '../components/container';
import { PageNav } from '../components/page-nav';
import { Item } from '../models/item';
import { loadComments, loadFrontItemId } from '../services/load-comments';

interface Props {
    frontComment: number;
    items: Item[];
}
const NamePage: React.FunctionComponent<Props> = ({ items, frontComment }) => {
    const sorted = items.sort((a, b) => (b.time || 0) - (a.time || 0));
    return (
        <PageContainer>
            <PageNav
                currentComment={sorted[0].id}
                frontComment={frontComment}
                lastComment={sorted[sorted.length - 1].id}
            />
            <CommentList items={sorted} />
            <PageNav
                currentComment={sorted[0].id}
                frontComment={frontComment}
                lastComment={sorted[sorted.length - 1].id}
            />
        </PageContainer>
    );
};

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> {
    const fromId =
        (context.query?.from as string) === undefined
            ? undefined
            : parseInt(context.query?.from as string);

    const items = await loadComments({
        count: 50,
        fromId,
    });
    const frontComment = await loadFrontItemId();
    return {
        props: {
            frontComment,
            items,
        },
    };
}

export default NamePage;
