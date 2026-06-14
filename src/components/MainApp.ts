import {
    Component,
    defineComponent,
    repeat,
    state,
    tpl,
} from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import { store } from '#src/signals/signal';
import { config } from '#src/signals/config';

import reset from '#src/scss/reset.scss?inline';
import css from '#src/components/MainApp.scss?inline';

import '#src/components/AppHeader';
import '#src/components/AppCard';

export class MainApp extends Component {
    static styles = [reset, css];

    state = state({
        color: 'color',
        size: 'size',
    });

    run = (): void => {
        if (config.props) {
            this.state.color = (Math.random() + 1).toString(36).substring(7);
            this.state.size = (Math.random() + 1).toString(36).substring(7);
        }

        if (config.signal) {
            store.name = (Math.random() + 1).toString(36).substring(7);
        }

        requestAnimationFrame(this.run);
    };

    onMount(): void {
        window.addEventListener('error', (ev) => {
            console.log(ev);
        });
        this.run();
    }

    private indices: number[] = [];
    private indicesCount = 0;

    private getIndices(count: number): number[] {
        if (count === this.indicesCount) return this.indices;
        this.indicesCount = count;
        this.indices = Array.from({ length: count }, (_, i) => i);
        return this.indices;
    }

    template = (): Template => tpl`
        <app-header></app-header>
        <div class="grid">
          ${repeat(
              this.getIndices(config.componentCount),
              (_, index) =>
                  tpl`<app-card
                      :index=${index}
                      :color=${this.state.color}
                      :size=${this.state.size}
                  ></app-card>`,
              (val) => String(val),
          )}
        </div>
    `;
}

defineComponent('main-app', MainApp);
