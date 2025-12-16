import { LitElement, html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import "../../../common/accordion/ukf-accordion";
import "../../../common/color/ukf-color-group";
import "./typography-tab-preview";
import "../../../common/font/ukf-font-picker";
import type { SelectedFont } from '../../../common/font/types';
import type { TypographyModel, TypographyKey } from "./types";
import type { UUISelectEvent } from '@umbraco-cms/backoffice/external/uui';
import type { UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/property-editor';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';

@customElement('ukindforge-typography-settings-property-editor-ui')
export default class TypographySettingsPropertyEditorUIElement
    extends UmbElementMixin((LitElement)) implements UmbPropertyEditorUiElement {

    private _fonts: SelectedFont[] = [];

    private _typography: TypographyModel = {
        h1: { font: null, size: 32, spacing: 0 },
        h2: { font: null, size: 28, spacing: 0 },
        h3: { font: null, size: 24, spacing: 0 },
        h4: { font: null, size: 20, spacing: 0 },
        h5: { font: null, size: 18, spacing: 0 },
        h6: { font: null, size: 16, spacing: 0 },
        paragraph: { font: null, size: 14, spacing: 0 },
    };

    /** FONT PICKER event listener */
    connectedCallback() {
        super.connectedCallback();

        this.addEventListener("ukf-font-change" as any, (e: CustomEvent) => {
            this._fonts = e.detail as SelectedFont[];
            this.requestUpdate();
        });

        // TOD prevent Save/Publish
        // this.addEventListener("font-error" as any, (e: CustomEvent) => {
        //     
        // });
    }

    #renderFontPicker() {
        return html`
            <ukf-accordion heading="Font">
                <div slot="content" class="accordion-content">
                    <ukf-font-picker .isDefaultValue=${true}></ukf-font-picker>
                </div>
            </ukf-accordion>
        `;
    }

    #renderTypography() {
        return html`
            ${this.#renderHeading("Heading 1", "h1")}
            ${this.#renderHeading("Heading 2", "h2")}
            ${this.#renderHeading("Heading 3", 'h3')}
            ${this.#renderHeading("Heading 4", 'h4')}
            ${this.#renderHeading("Heading 5", 'h5')}
            ${this.#renderHeading("Heading 6", 'h6')}
            ${this.#renderHeading("Paragraph", 'paragraph')}
        `;
    }

    #onFontSelect(event: UUISelectEvent, key: TypographyKey) {
        const selectedFamily = event.target.value as string;
        const found = this._fonts.find(f => f.family === selectedFamily);
        this._typography[key].font = found ?? null;

        this.requestUpdate();
    }


    #renderHeading(label: string, key: TypographyKey) {
        //const defaultFont: SelectedFont | null = this._fonts[0] ?? null;
        //const assignedFont: SelectedFont | null = this._typography[key].font ?? defaultFont;

        return html`
            <ukf-accordion heading="${label}">
                <div slot="content">
                
                    <!-- FONT DROPDOWN -->
                    <ukf-control label="Choose Font">
                        <uui-select
                            slot="control"
                            .options=${this._fonts.map(f => ({
                                name: f.family,
                                value: f.family,
                                selected: f.family == this._typography["h1"].font?.family
                            }))}
                            @change=${(e: UUISelectEvent) => this.#onFontSelect(e, key)}
                        ></uui-select>
                    </ukf-control>

                    <!-- SIZE -->
                    <ukf-control label="Size">
                        <uui-slider
                            slot="control"
                            min="8"
                            max="128"
                            .value=${this._typography[key].size}
                            @input=${(e: any) => this._typography[key].size = Number(e.target.value)}
                        ></uui-slider>
                    </ukf-control>

                    <!-- SPACING -->
                    <ukf-control label="Spacing">
                        <uui-slider
                            slot="control"
                            min="0"
                            max="20"
                            .value=${this._typography[key].spacing}
                            @input=${(e: any) => this._typography[key].spacing = Number(e.target.value)}
                        ></uui-slider>
                    </ukf-control>

                </div>
            </ukf-accordion>
        `;
    }

    getValue() {
        return this._typography;
    }

    override render() {
        return html`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${this.#renderFontPicker()}
                ${this.#renderTypography()}                        
            </div>
            <div slot="end">
                <typography-tab-preview
                    .typography=${{ ...this._typography }}
                ></typography-tab-preview>
            </div>
        </umb-split-panel>
        `;
    }

    static styles = css`
        :host {
            display: block;
            padding: 0;
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