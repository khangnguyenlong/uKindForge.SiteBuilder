import { html, customElement, css, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

import "../../../components/ukf-header/ukf-header";
import "../../../components/ukf-footer/ukf-footer";
import "../../../components/ukf-button";
import "../../../components/ukf-image";
import "../../../components/ukf-video";
import "../../../components/ukf-card";

@customElement('style-tab-preview')
export default class StyleTabPreview extends UmbLitElement {
    @property({ type: String }) headerStyleId = "style-1";
    @property({ type: String }) footerStyleId = "style-1";

    override render() {
        return html`
            <div>
                <ukf-header .styleId=${this.headerStyleId}></ukf-header>
                <ukf-footer .styleId=${this.footerStyleId}></ukf-footer>
                <ukf-button></ukf-button>
                <ukf-image></ukf-image>
                <ukf-video></ukf-video>
                <ukf-card></ukf-card>
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