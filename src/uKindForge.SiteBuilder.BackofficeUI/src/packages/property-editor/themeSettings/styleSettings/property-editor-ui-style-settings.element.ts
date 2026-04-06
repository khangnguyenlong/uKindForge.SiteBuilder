import { html, customElement, css, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../../common/accordion/ukf-accordion";
import "../../../common/control/ukf-control";
import "../../../common/control/ukf-control-group";
import "../../../common/color/ukf-color-group";
import "./style-tab-preview"
import "../../../common/size/ukf-size";
import "../../../common/border/ukf-border-position";
import type { Option } from './types';

@customElement('ukindforge-style-settings-property-editor-ui')
export default class StyleSettingsPropertyEditorUIElement extends UmbLitElement {

    @state() private _headerStyleId: string = "style-1";
    @state() private _footerStyleId: string = "style-1";

    #renderGeneralStyle() {
        return html`
            <ukf-accordion heading="Common">
                <div slot="content" class="accordion-content">
                    <ukf-control label="Rounded">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                        </ukf-control>
                    <ukf-control label="Underlined Links">
                        <uui-toggle slot="control"></uui-toggle>
                    </ukf-control>
                    <ukf-control label="Scroll to Top">
                        <uui-toggle slot="control"></uui-toggle>
                    </ukf-control>
                </div>
            </ukf-accordion>
        `;
    }

    #renderHeaderStyle() {
        return html`
            <ukf-accordion heading="Header">
                <div slot="content" class="accordion-content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${this.#headerStyleOptions()}"
                                    @change=${this.#onHeaderStyleChange}
                                >
                                </uui-select>
                            </ukf-control>
                            <ukf-control label="Collapsed">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Sticky">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Transparency">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Full Width">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Opacity">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Height">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                    <ukf-control-group headline="Navination">
                        <div slot="controls">
                            <ukf-control label="Line Spacing">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                    <ukf-control-group headline="Border">
                        <div slot="controls">
                            <ukf-control label="Thickness">
                                <ukf-size slot="control"></ukf-size>
                            </ukf-control>
                            <ukf-control label="Position">
                                <ukf-border-position slot="control"></ukf-border-position>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                </div>
            </ukf-accordion>
        `;
    }

    #headerStyleOptions(): Option[] {
        const styles = ["style-1", "style-2", "style-3", "style-4", "style-5"];
        return styles.map(v => ({
            name: v.replace("-", " ").toUpperCase(),
            value: v,
            selected: v === this._headerStyleId,
        }));
    }

    #footerStyleOptions(): Option[] {
        const styles = ["style-1", "style-2", "style-3", "style-4", "style-5"];
        return styles.map(v => ({
            name: v.replace("-", " ").toUpperCase(),
            value: v,
            selected: v === this._footerStyleId,
        }));
    }

    #onHeaderStyleChange(e: Event) {
        e.stopPropagation();
        const value = (e.target as any).value as string;
        this._headerStyleId = value;
    }

    #onFooterStyleChange(e: Event) {
        e.stopPropagation();
        const value = (e.target as any).value as string;
        this._footerStyleId = value;
    }

    #renderFooterStyle() {
        return html`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${this.#footerStyleOptions()}"
                                    @change=${this.#onFooterStyleChange}
                                >
                                </uui-select>
                            </ukf-control>
                            <ukf-control label="Transparency">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Top">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Bottom">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                </div>
            </ukf-accordion>
        `;
    }

    #renderButtonStyle() {
        return html`
            <ukf-accordion heading="Button">
                <div slot="content">
                    <ukf-control-group headline="Primary">
                        <div slot="controls">
                            <ukf-control label="Rounded">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Border">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group> 
                    <ukf-control-group headline="Secondary">
                        <div slot="controls">
                            <ukf-control label="Rounded">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Border">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group> 
                    <ukf-control-group headline="Size">
                        <div slot="controls">
                            <ukf-control label="Small">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Medium">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Large">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group> 
                </div>
            </ukf-accordion>
        `;
    }

    #renderCardImageVideoStyle() {
        return html`
            <ukf-accordion heading="Card/Image/Video">
                <div slot="content">
                    <ukf-control label="Zoom on hover">
                        <uui-toggle slot="control"></uui-toggle>
                    </ukf-control>
                    <ukf-control label="Rounded corners">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                    </ukf-control>

                    <ukf-control-group headline="Box shadow">
                        <div slot="controls">
                            <ukf-control label="Color">
                                <ukf-color-group slot="control"></ukf-color-group>
                            </ukf-control>
                            <ukf-control label="Opacity">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Offset-X">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Offset-Y">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Blur radius">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>                    
                </div>
            </ukf-accordion>
        `;
    }

    override render() {
        return html`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${this.#renderHeaderStyle()}
                ${this.#renderFooterStyle()}
                ${this.#renderGeneralStyle()}                          
                ${this.#renderButtonStyle()}
                ${this.#renderCardImageVideoStyle()}
            </div>
            <div slot="end">
                <style-tab-preview
                    .headerStyleId=${this._headerStyleId}                
                    .footerStyleId=${this._footerStyleId}
                >
                </style-tab-preview>
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