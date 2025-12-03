import { html, customElement, LitElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import type { UmbBlockEditorCustomViewElement } from '@umbraco-cms/backoffice/block-custom-view';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

interface RichTextBlockContent {
    [key: string]: unknown;
    richText?: {
        markup?: string;
    };
}

@customElement('rich-text-block-preview')
export class RichTextBlockPreview extends UmbElementMixin(LitElement) implements UmbBlockEditorCustomViewElement {

    @property({ attribute: false })
    content: RichTextBlockContent = {};

    override render() {
        const richText = this.content ?.richText?.markup ?? '';

        return html`
            ${unsafeHTML(richText)}
        `;
    }

    static override styles = [
        css`
        `,
    ];
}

export default RichTextBlockPreview;