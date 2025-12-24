import { html, customElement, css, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

import "../../../components/ukf-header/ukf-header";
import "../../../components/ukf-footer/ukf-footer";

import { ukfThemeStore } from "../../../common/theme/theme-store";
import { ukfThemeToCss } from "../../../common/theme/theme-to-css";

import "../../../components/ukf-header/ukf-header";
import "../../../components/ukf-footer/ukf-footer";
import "../../../components/ukf-section";

@customElement('color-tab-preview')
export default class ColorTabPreview extends UmbLitElement {
    @property({ type: String }) headerStyleId = "style-1";
    @property({ type: String }) footerStyleId = "style-1";

    @state() private _parts: any = {};

    #unsub?: () => void;

    connectedCallback() {
        super.connectedCallback();
        this.#unsub = ukfThemeStore.subscribe((s) => (this._parts = s));
    }

    disconnectedCallback() {
        this.#unsub?.();
        super.disconnectedCallback();
    }

    override render() {
        const cssText = ukfThemeToCss(this._parts);

        return html`
            <style>${cssText}</style>
            <div class="ukf-theme">
                <ukf-header .styleId=${this.headerStyleId}></ukf-header>
                <ukf-footer .styleId=${this.footerStyleId}></ukf-footer>
                <div class="grid">
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                </div>
            </div>
        `;
    }

    static styles = css`
        :host { 
            display:block; 
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px)); 
        }
        .grid { 
            display:grid; 
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
            gap: 16px; 
        }
    `;
}