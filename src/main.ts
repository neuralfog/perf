import { makeCssStylesheet } from '@neuralfog/elemix/utilities';

import reset from './scss/reset.scss?inline';
import theme from './themes/light.scss?inline';

document.adoptedStyleSheets = [
    ...document.adoptedStyleSheets,
    makeCssStylesheet(reset),
    makeCssStylesheet(theme),
];

import('./components/MainApp');
