import { Component, html, type Template } from '@neuralfog/elemix';
import { component, state } from '@neuralfog/elemix/decorators';

import gear from '../static/gear.svg';
import css from './controls.scss?inline';
import { config } from '../signals/config';

@component({ tag: 'app-controls', styles: [css], signals: [config] })
export class Controls extends Component {
    @state()
    state = {
        visible: false,
    };

    toggleVisible = (): void => {
        this.state.visible = !this.state.visible;
    };

    onInput = (e: Event): void => {
        const { value } = e.target as HTMLInputElement;
        config.value.componentCount = Number(value);
    };

    onPropsClick = (): void => {
        config.value.props = !config.value.props;
    };

    onSignalClick = (): void => {
        config.value.signal = !config.value.signal;
    };

    onStateClick = (): void => {
        config.value.internalState = !config.value.internalState;
    };

    template(): Template {
        return html`<button @click=${this.toggleVisible} class="button">
                <img class="image" src=${gear} alt="Controls" />
            </button>
            ${
                this.state.visible
                    ? html`<div class="control-panel">
                      <div class="primary">Controls</div>
                      <div>
                          <label class="label">Component Count:</label>
                          <input
                              type="number"
                              class="input"
                              @input=${this.onInput}
                              value=${config.value.componentCount}
                          />
                      </div>
                      <div class="primary" style="margin-top: 1rem;">
                          Updates
                      </div>
                      <div class="button-wrapper">
                          <div>
                              <div class="label">Signal</div>
                              <button
                                  class="button-sm"
                                  @click=${this.onSignalClick}
                              >
                                  ${config.value.signal ? html`ON` : html`OFF`}
                              </button>
                          </div>
                          <div>
                              <div class="label">Internal State</div>
                              <button
                                  class="button-sm"
                                  @click=${this.onStateClick}
                              >
                                  ${
                                      config.value.internalState
                                          ? html`ON`
                                          : html`OFF`
                                  }
                              </button>
                          </div>
                          <div>
                              <div class="label">Props</div>
                              <button
                                  class="button-sm"
                                  @click=${this.onPropsClick}
                              >
                                  ${config.value.props ? html`ON` : html`OFF`}
                              </button>
                          </div>
                      </div>
                  </div>`
                    : html``
            }`;
    }
}
