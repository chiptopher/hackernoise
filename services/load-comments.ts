import { Item } from '../models/item';

interface Request {
    count: number;
    fromId?: number;
}

export async function loadComments(request: Request): Promise<Item[]> {
    let fromId = request.fromId;
    if (fromId === undefined) {
        fromId = await loadFrontItemId();
    }
    return loadCommentsFrom(fromId, request.count);
}

async function loadCommentsFrom(
    fromId: number,
    count: number
): Promise<Item[]> {
    await loadFrontItemId();
    return Promise.all(
        Array.from(new Array(count), (_, i) => i + fromId - count).map(
            async id => {
                const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
                return fetch(url)
                    .then(response => response.json())
                    .then((response): Item => {
                        return response;
                    });
            }
        )
    ).then(items => {
        return items
            .filter(item => item !== null)
            .filter(item => item.type === 'comment')
            .filter(item => Boolean(item.text))
            .filter(item => item.text !== '')
            .sort((a, b) => (b.time || 0) - (a.time || 0))
            .reverse();
    });
}

export async function loadFrontItemId(): Promise<number> {
    return fetch('https://hacker-news.firebaseio.com/v0/maxitem.json')
        .then(response => response.json())
        .then((response: number) => {
            return response;
        });
}
