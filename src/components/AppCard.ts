import { Component, defineComponent, state, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import { store } from '#src/signals/signal';
import reset from '#src/scss/reset.scss?inline';
import css from '#src/components/AppCard.scss?inline';
import { config } from '#src/signals/config';

type AppCardProps = {
    color: string;
    size: string;
    index: number;
};

export class AppCard extends Component<AppCardProps> {
    static styles = [reset, css];

    state = state({
        string: 'State Value',
    });

    animationFrameId: number | null = null;

    run = (): void => {
        if (config.internalState) {
            this.state.string = (Math.random() + 1).toString(36).substring(7);
        }
        this.animationFrameId = requestAnimationFrame(this.run);
    };

    onMount(): void {
        this.run();
    }

    onDispose(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    template = (): Template => tpl`<div class="card">
        <span class="index">${this.props.index + 1}</span>
        <div class="field">
            <span class="label">Signal</span>
            <span class="value accent">${store.name}</span>
        </div>
        <div class="field">
            <span class="label">State</span>
            <span class="value">${this.state.string}</span>
        </div>
        <div class="field">
            <span class="label">Props</span>
            <div class="props">
                <span class="chip">${this.props.size}</span>
                <span class="chip">${this.props.color}</span>
            </div>
        </div>
    </div>`;
}

defineComponent('app-card', AppCard);
