import { Component, html, type Template } from '@neuralfog/elemix';
import { component, state } from '@neuralfog/elemix/decorators';
import { repeat } from '@neuralfog/elemix/directives';
import { store } from '../signals/signal';
import { config } from '../signals/config';

import css from './main-app.scss?inline';

// @Note this will gets sorted with auto imports and code generation!!
// shame as LSP was a nice touch but fuck this to much headache!!
// It will also solve fucking issue with unused import
// keep it simple!!
import { AppCard } from './AppCard';
import { AppControls } from './AppControls';
import { AppHeader } from './AppHeader';

@component({ signals: [store, config], styles: [css] })
export class MainApp extends Component {
    @state()
    state = {
        color: 'color',
        size: 'size',
    };

    run = (): void => {
        if (config.value.props) {
            this.state.color = (Math.random() + 1).toString(36).substring(7);
            this.state.size = (Math.random() + 1).toString(36).substring(7);
        }

        if (config.value.signal) {
            store.value.name = (Math.random() + 1).toString(36).substring(7);
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

    template(): Template {
        return html`
          <AppHeader />
          <AppControls />
          <div class="main-wrapper">
            ${repeat(
                this.getIndices(config.value.componentCount),
                (_, index) =>
                    html`<AppCard
                        :index=${index}
                        :color=${this.state.color}
                        :size=${this.state.size}
                    />`,
                (val) => String(val),
            )}
          </div>
        `;
    }
}
