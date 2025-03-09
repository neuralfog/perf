import { initApp } from '@neuralfog/elemix/app';
import { makeCssStylesheet } from '@neuralfog/elemix/utilities';
import { initTheme } from '@neuralfog/theme-provider';

import reset from './scss/reset.scss?inline';
import dark from './themes/dark.scss?inline';
import light from './themes/light.scss?inline';

initTheme({
    light: makeCssStylesheet(light),
    dark: makeCssStylesheet(dark),
});

initApp({
    baseStyles: [makeCssStylesheet(reset)],
    entryPoint: () => import('./components/MainApp'),
});
