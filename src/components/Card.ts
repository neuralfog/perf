import { Component, html, type Template } from '@neuralfog/elemix';
import { component, state } from '@neuralfog/elemix/decorators';
import { store } from '../signals/signal';

import css from './card.scss?inline';
import { config } from '../signals/config';

type Test1Prop = {
    color: string;
    size: string;
    index: number;
};

@component({ tag: 'test-one', signals: [store], styles: [css] })
export class Test1 extends Component<Test1Prop> {
    @state()
    state = {
        string: 'State Value',
    };

    animationFrameId: number | null = null;

    run = (): void => {
        if (config.value.internalState) {
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

    template(): Template {
        return html`
            <div class="card">
                <div class="index">${this.props.index + 1}</div>
                <div class="label">Signal:</div>
                <p class="primary">${store.value.name}</p>
                <div class="label" style="margin-top: 0.5rem">Local State:</div>
                <p>${this.state.string}</p>
                <div class="label" style="margin-top: 0.5rem">Props:</div>
                <div>
                    <p>${this.props.size}</p>
                    <p>${this.props.color}</p>
                </div>
            </div>
        `;
    }
}
