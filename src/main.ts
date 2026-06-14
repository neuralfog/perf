import reset from './scss/reset.scss?inline';
import theme from './themes/light.scss?inline';

const sheet = (css: string): CSSStyleSheet => {
    const s = new CSSStyleSheet();
    s.replaceSync(css);
    return s;
};

document.adoptedStyleSheets = [
    ...document.adoptedStyleSheets,
    sheet(reset),
    sheet(theme),
];

import('./components/MainApp');
