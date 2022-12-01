import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // не для реальных проектов!
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
