import { state } from '@neuralfog/elemix';

export const store = state({
    name: 'Signal Value',
});

(window as any).store = store;
(window as any).storeInstance = store;
