import { html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

import "../../../common/accordion/ukf-accordion";
import "../../../common/color/ukf-color-group";

@customElement('color-style-tab-preview')
export default class ColorStyleTabPreview extends UmbLitElement {
    override render() {
        return html`
            <p>Style Tab Preview</p>
        `;
    }

    static styles = css`
    `;
}