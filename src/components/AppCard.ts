import { Component, html, type Template } from '@neuralfog/elemix';
import { component, state } from '@neuralfog/elemix/decorators';

import { store } from '#src/signals/signal';
import css from '#src/components/AppCard.scss?inline';
import { config } from '#src/signals/config';

type AppCardProps = {
    color: string;
    size: string;
    index: number;
};

@component({ signals: [store], styles: [css] })
export class AppCard extends Component<AppCardProps> {
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
