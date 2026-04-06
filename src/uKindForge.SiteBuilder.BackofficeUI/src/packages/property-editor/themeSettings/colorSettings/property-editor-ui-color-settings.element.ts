import { html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../../common/accordion/ukf-accordion";
import "../../../common/color/ukf-color-group";
import "./color-tab-preview";
import { COLOR_PALETTE, COLOR_HEADER_TOKENS, COLOR_FOOTER_TOKENS, COLOR_SECTION_TOKENS } from "./color.schema";

@customElement('ukindforge-color-settings-property-editor-ui')
export default class ColorSettingsPropertyEditorUIElement extends UmbLitElement {

    #renderColorPalette() {
        return html`
            <ukf-accordion heading="Color Palette">
                <div slot="content" class="accordion-content">
                    ${COLOR_PALETTE.map(
                        g => html` <ukf-color-group .headline=${g.name} .items=${g.items}></ukf-color-group> `
                    )}
                </div>
            </ukf-accordion>
        `;
    }

    #renderColorTokens() {
        return html`
            <ukf-accordion heading="Color Tokens">
                <div slot="content">
                    ${this.#renderHeaderTokens()}
                    ${this.#renderFooterTokens()}
                    ${this.#renderSectionsTokens()}
                </div>
            </ukf-accordion>
        `;
    }

    #renderHeaderTokens() {
        return html`        
        <ukf-accordion heading="Header Tokens">
            <div slot="content" class="accordion-content">
                ${COLOR_HEADER_TOKENS.map(
            g => html` <ukf-color-group .headline=${g.name} .items=${g.items}></ukf-color-group> `
        )}
            </div>
        </ukf-accordion>
        `;
    }

    #renderFooterTokens() {
        return html`        
        <ukf-accordion heading="Footer Tokens">
            <div slot="content" class="accordion-content">
                ${COLOR_FOOTER_TOKENS.map(
            g => html` <ukf-color-group .headline=${g.name} .items=${g.items}></ukf-color-group> `
        )}
            </div>
        </ukf-accordion>
        `;
    }

    #renderSectionsTokens() {
        return html`
            ${[1, 2, 3, 4, 5].map(i => this.#renderSectionTokens(i))}
        `;
    }

    #renderSectionTokens(i: number) {
        return html`        
        <ukf-accordion heading="Section Tokens #${i}">
            <div slot="content" class="accordion-content">
                ${COLOR_SECTION_TOKENS.map(
            g => html` <ukf-color-group .headline=${g.name} .items=${g.items}></ukf-color-group> `
        )}
            </div>
        </ukf-accordion>
        `;
    }

    override render() {
        return html`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${this.#renderColorPalette()}
                ${this.#renderColorTokens()}                            
            </div>
            <div slot="end">
                <color-tab-preview></color-tab-preview>
            </div>
        </umb-split-panel>
        `;
    }

    static styles = css`
        :host {
            display: block;
            padding: 0;
        }

        .tab-content {
            margin-top: 16px;
        }

        .accordion-content {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 16px;
        }

        .accordion-content > * {
            flex: 1 1 280px;
        }
    `;
}