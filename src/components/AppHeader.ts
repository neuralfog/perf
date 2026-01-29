import { Component, html, type Template } from '@neuralfog/elemix';
import { component } from '@neuralfog/elemix/decorators';
import { useTheme } from '@neuralfog/theme-provider';

import css from '#src/components/AppHeader.scss?inline';

@component({ styles: [css] })
export class AppHeader extends Component {
    changeTheme = (theme: string): void => {
        const { changeTheme } = useTheme();
        changeTheme(theme);
    };

    template(): Template {
        return html`<header>
            <div>
                <div class="label">Theme:</div>
                <button @click=${() => this.changeTheme('light')}>Light</button>
                <button @click=${() => this.changeTheme('dark')}>Dark</button>
                <button @click=${() => this.changeTheme('system')}>System</button>
            </div>
        </header>`;
    }
}
