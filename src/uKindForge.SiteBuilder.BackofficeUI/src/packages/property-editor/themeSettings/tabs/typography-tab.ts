import { html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../../common/accordion/ukf-accordion";
import "../../../common/color/ukf-color-group";
import "../preview/typography-tab-preview";
import "../../../common/font/ukf-font-picker";

@customElement('typography-tab')
export default class TypographyTab extends UmbLitElement {
    override render() {
        return html`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${this.#renderFont()}
                ${this.#renderTypography()}                        
            </div>
            <div slot="end">
                <typography-tab-preview></typography-tab-preview>
            </div>
        </umb-split-panel>
        `;
    }

    #renderFont() {
        return html`
            <ukf-accordion heading="Font">
                <div slot="content" class="accordion-content">
                    <ukf-font-picker></ukf-font-picker>
                </div>
            </ukf-accordion>
        `;
    }

    #renderTypography() {
        return html`
            <ukf-accordion heading="Typography">
                <div slot="content">
                    ${this.#renderHeading('Heading 1')}
                    ${this.#renderHeading('Heading 2')}
                    ${this.#renderHeading('Heading 3')}
                    ${this.#renderHeading('Heading 4')}
                    ${this.#renderHeading('Heading 5')}
                    ${this.#renderHeading('Heading 6')}
                    ${this.#renderHeading('Paragraph')}
                </div>
            </ukf-accordion>
        `;
    }

    #renderHeading(name: string) {
        return html`
            <ukf-accordion heading="${name}">
                <div slot="content">
                    <ukf-control label="Choose Font">
                        <uui-select slot="control">
                        </uui-select>
                    </ukf-control>
                    <ukf-control label="Size">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                    </ukf-control>
                    <ukf-control label="Spacing">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                    </ukf-control>
                </div>
            </ukf-accordion>
        `;
    }

    static styles = css`
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