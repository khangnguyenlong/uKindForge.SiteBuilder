import { html, customElement, css, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../../common/accordion/ukf-accordion";
import "../../../common/color/ukf-color-group";
import type { TypographyModel } from "./types";

@customElement('typography-tab-preview')
export default class TypographyTabPreview extends UmbLitElement {
    @property({ type: Object })
    typography!: TypographyModel;

    updated() {
        console.log("typography", this.typography);
        if (!this.typography) return;

        const h1Font = this.typography.h1.font?.family;
        if (h1Font) {
            this.style.setProperty("--h1-font", `"${h1Font}"`);
        }
    }



    override render() {
        console.log("typography", this.typography);
        return html`
            <h1 style="font-family: var(--h1-font)">Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Paragraph</p>
        `;
    }

    static styles = css`
    `;
}