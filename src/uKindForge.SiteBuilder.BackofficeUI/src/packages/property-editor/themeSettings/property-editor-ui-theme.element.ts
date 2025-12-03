import { html, customElement, css, state, when } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../common/accordion/ukf-accordion";
import "../../common/color/ukf-color-group";
import "./tabs/color-tab";
import "./tabs/typography-tab";
import "./tabs/style-tab";

@customElement('ukindforge-theme-property-editor-ui')
export default class ThemePropertyEditorUIElement extends UmbLitElement {

    @state() tab = '1';

    #onTabChange(e: Event) {
        this.tab = (e.target as HTMLElement).dataset.tab!;
    }

    override render() {
        return html`
        <umb-body-layout>
            <div slot="header">
                <uui-tab-group @click=${this.#onTabChange}>
                    <uui-tab ?active=${this.tab == '1'} data-tab="1">
                        <uui-icon slot="icon" name="icon-color-bucket"></uui-icon>
                        Colors
                    </uui-tab>
                    <uui-tab ?active=${this.tab == '2'} data-tab="2">
                        <uui-icon slot="icon" name="icon-document-font"></uui-icon>
                        Typography
                    </uui-tab>
                    <uui-tab ?active=${this.tab == '3'} data-tab="3">
                        <uui-icon slot="icon" name="icon-layout"></uui-icon>
                        Styles
                    </uui-tab>
                </uui-tab-group>
            </div>
            <div look="placeholder" pristine="">
                ${when(this.tab == '1', () => html`
                    <color-tab></color-tab>
                `)}
                ${when(this.tab == '2', () => html`
                    <typography-tab></typography-tab>
                `)}
                ${when(this.tab == '3', () => html`
                    <style-tab></style-tab>
                `)}
            </div>
        </umb-body-layout>
        `;
    }

    static styles = css`
        :host {
            display: block;
            padding: 0;
        }
    `;
}