import { initApp } from '@neuralfog/elemix/app';
import { makeCssStylesheet } from '@neuralfog/elemix/utilities';
import reset from './scss/reset.scss?inline';

initApp({
    baseStyles: [makeCssStylesheet(reset)],
    entryPoint: () => import('./components/MainApp'),
});
