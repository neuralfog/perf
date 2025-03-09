import { Component, html, type Template } from '@neuralfog/elemix';
import { component, state } from '@neuralfog/elemix/decorators';
import { repeat } from '@neuralfog/elemix/directives';
import { store } from '../signals/signal';
import { config } from '../signals/config';

import css from './main-app.scss?inline';

import './Card';
import './Controls';
import './Header';

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
        this.run();
    }

    template(): Template {
        return html`
                <app-header />
                <app-controls />
                <div class="main-wrapper">
                    ${repeat(
                        Array.from(Array(config.value.componentCount).keys()),
                        (_, index) =>
                            html`<test-one
                                :index=${index}
                                :color=${this.state.color}
                                :size=${this.state.size}
                            />`,
                    )}
                </div>
            `;
    }
}
