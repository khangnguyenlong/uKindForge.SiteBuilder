import { html, customElement, LitElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import type { UmbBlockEditorCustomViewElement } from '@umbraco-cms/backoffice/block-custom-view';

interface ButtonBlockContent {
    [key: string]: unknown;
}

@customElement('button-block-preview')
export class ButtonBlockPreview extends UmbElementMixin(LitElement) implements UmbBlockEditorCustomViewElement {

    @property({ attribute: false })
    content: ButtonBlockContent = {};

    override render() {
        return html`
            <button>Test</button>
        `;
    }

    static override styles = [
        css`
        `,
    ];
}

export default ButtonBlockPreview;