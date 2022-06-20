export interface Item {
    by?: string;
    dead?: boolean;
    deleted?: boolean;
    descendants?: number[];
    id: number;
    kids?: number[];
    parent?: number;
    parts?: number[];
    poll?: number;
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
    url?: string;
}
