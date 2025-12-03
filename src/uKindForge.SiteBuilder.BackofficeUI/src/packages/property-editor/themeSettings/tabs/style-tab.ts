import { html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../../common/accordion/ukf-accordion";
import "../../../common/control/ukf-control";
import "../../../common/control/ukf-control-group";
import "../../../common/color/ukf-color-group";
import "../preview/color-style-tab-preview"
import "../../../common/size/ukf-size";
import "../../../common/border/ukf-border-position";

@customElement('style-tab')
export default class StyleTab extends UmbLitElement {
    override render() {
        return html`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${this.#renderHeaderStyle()}
                ${this.#renderFooterStyle()}
                ${this.#renderGeneralStyle()}                          
                ${this.#renderButtonStyle()}
                ${this.#renderCardImageVideoStyle()}
            </div>
            <div slot="end">
                <color-style-tab-preview></color-style-tab-preview>
            </div>
        </umb-split-panel>
        `;
    }

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
                                <uui-select slot="control" .options="${this.#renderHeaderStyleOptions()}">
                                </uui-select>
                            </ukf-control>
                            <ukf-control label="Transparency">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Full Width">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Sticky">
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

    #renderHeaderStyleOptions() {
        let styleOptions: Array<Option> = [
            {
                name: "Style 1",
                value: 'style1',
                selected: true,
            },
            {
                name: "Style 2",
                value: 'style2',
            },
            {
                name: "Style 3",
                value: 'style3',
            },
            {
                name: "Style 4",
                value: 'style4',
            },
            {
                name: "Style 5",
                value: 'style5',
            },
        ];
        return styleOptions;
    }
    
    #renderFooterStyleOptions() {
        let styleOptions: Array<Option> = [
            {
                name: "Style 1",
                value: 'style1',
                selected: true,
            },
            {
                name: "Style 2",
                value: 'style2',
            },
            {
                name: "Style 3",
                value: 'style3',
            },
            {
                name: "Style 4",
                value: 'style4',
            },
            {
                name: "Style 5",
                value: 'style5',
            },
        ];
        return styleOptions;
    } 

    #renderFooterStyle() {
        return html`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" .options="${this.#renderFooterStyleOptions()}">
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