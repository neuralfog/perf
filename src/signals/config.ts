import { signal } from '@neuralfog/elemix/signal';

export const config = signal({
    componentCount: 100,
    signal: false,
    internalState: false,
    props: false,
});
