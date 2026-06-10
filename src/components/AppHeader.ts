import {
    Component,
    defineComponent,
    html,
    type Template,
} from '@neuralfog/elemix';

import reset from '#src/scss/reset.scss?inline';
import css from '#src/components/AppHeader.scss?inline';
import { config } from '#src/signals/config';

export class AppHeader extends Component {
    static styles = [reset, css];

    onCount = (e: Event): void => {
        config.value.componentCount = Number(
            (e.target as HTMLInputElement).value,
        );
    };

    toggleSignal = (): void => {
        config.value.signal = !config.value.signal;
    };

    toggleState = (): void => {
        config.value.internalState = !config.value.internalState;
    };

    toggleProps = (): void => {
        config.value.props = !config.value.props;
    };

    template(): Template {
        return html`<header>
            <div class="brand">
                <span class="logo"></span>
                <span class="title">elemix<span class="dim">/perf</span></span>
            </div>
            <div class="controls">
                <label class="field">
                    <span class="field-label">Components</span>
                    <input
                        class="count"
                        type="number"
                        min="0"
                        value=${config.value.componentCount}
                        @input=${this.onCount}
                    >
                </label>
                <div class="toggles">
                    <button
                        class=${config.value.signal ? 'pill on' : 'pill'}
                        @click=${this.toggleSignal}
                    >Signal</button>
                    <button
                        class=${config.value.internalState ? 'pill on' : 'pill'}
                        @click=${this.toggleState}
                    >State</button>
                    <button
                        class=${config.value.props ? 'pill on' : 'pill'}
                        @click=${this.toggleProps}
                    >Props</button>
                </div>
            </div>
        </header>`;
    }
}

defineComponent('app-header', AppHeader);
