import { Component, tpl } from '@neuralfog/elemix';
import { repeat } from '@neuralfog/elemix/directives';
import type { Template } from '@neuralfog/elemix/types';

import { store } from '#src/store/store';
import { config } from '#src/store/config';

import reset from '#src/scss/reset.scss?inline';
import css from '#src/components/MainApp.scss?inline';

import '#src/components/AppHeader';
import '#src/components/AppCard';

// #component
export class MainApp extends Component {
    // #styles
    resetStyles = reset;

    // #styles
    appStyles = css;

    // #state
    state = {
        color: 'color',
        size: 'size',
    };

    run = (): void => {
        if (config.props) {
            this.state.color = (Math.random() + 1).toString(36).substring(7);
            this.state.size = (Math.random() + 1).toString(36).substring(7);
        }

        if (config.store) {
            store.name = (Math.random() + 1).toString(36).substring(7);
        }

        requestAnimationFrame(this.run);
    };

    // #mount
    start(): void {
        window.addEventListener('error', (ev) => {
            console.log(ev);
        });
        this.run();
    }

    template = (): Template => tpl`
        <app-header></app-header>
        <div class="grid">
          ${repeat(
              Array.from({ length: config.componentCount }, (_, i) => i),
              (index) =>
                  tpl`<app-card
                      :index=${index}
                      :color=${this.state.color}
                      :size=${this.state.size}
                  ></app-card>`,
              (index) => String(index),
          )}
        </div>
    `;
}
