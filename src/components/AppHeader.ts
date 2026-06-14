import { Component, defineComponent, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import reset from '#src/scss/reset.scss?inline';
import css from '#src/components/AppHeader.scss?inline';
import { config } from '#src/signals/config';

export class AppHeader extends Component {
    static styles = [reset, css];

    onCount = (e: Event): void => {
        config.componentCount = Number(
            (e.target as HTMLInputElement).value,
        );
    };

    toggleSignal = (): void => {
        config.signal = !config.signal;
    };

    toggleState = (): void => {
        config.internalState = !config.internalState;
    };

    toggleProps = (): void => {
        config.props = !config.props;
    };

    template = (): Template => tpl`<header>
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
                    value=${config.componentCount}
                    @input=${this.onCount}
                >
            </label>
            <div class="toggles">
                <button
                    class=${config.signal ? 'pill on' : 'pill'}
                    @click=${this.toggleSignal}
                >Signal</button>
                <button
                    class=${config.internalState ? 'pill on' : 'pill'}
                    @click=${this.toggleState}
                >State</button>
                <button
                    class=${config.props ? 'pill on' : 'pill'}
                    @click=${this.toggleProps}
                >Props</button>
            </div>
        </div>
    </header>`;
}

defineComponent('app-header', AppHeader);
