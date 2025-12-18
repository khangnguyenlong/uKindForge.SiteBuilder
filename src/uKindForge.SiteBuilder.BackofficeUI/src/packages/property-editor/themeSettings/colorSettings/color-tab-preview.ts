import { html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

import "../../../components/ukf-header/ukf-header";
import "../../../components/ukf-footer/ukf-footer";
import "../../../components/ukf-section";

@customElement('color-tab-preview')
export default class ColorTabPreview extends UmbLitElement {
    override render() {
        return html`
            <div>
                <ukf-header></ukf-header>
                <ukf-footer></ukf-footer>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
        }
    `;
}