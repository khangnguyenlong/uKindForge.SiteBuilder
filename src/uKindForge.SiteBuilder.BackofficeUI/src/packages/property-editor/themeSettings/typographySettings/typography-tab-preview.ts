import { html, customElement, css, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import "../../../common/accordion/ukf-accordion";
import "../../../common/color/ukf-color-group";
import type { TypographyModel } from "./types";
import { unsafeStatic } from "lit/static-html.js";
import { html as staticHtml } from "lit/static-html.js";

@customElement('typography-tab-preview')
export default class TypographyTabPreview extends UmbLitElement {
    @property({ type: Object })
    typography!: TypographyModel;

    private static readonly PREVIEW_ITEMS = [
        { key: "h1", tag: "h1", text: "Heading 1" },
        { key: "h2", tag: "h2", text: "Heading 2" },
        { key: "h3", tag: "h3", text: "Heading 3" },
        { key: "h4", tag: "h4", text: "Heading 4" },
        { key: "h5", tag: "h5", text: "Heading 5" },
        { key: "h6", tag: "h6", text: "Heading 6" },
        { key: "paragraph", tag: "p", text: "Paragraph" },
    ] as const;

    updated() {
        console.log("typography", this.typography);
        if (!this.typography) return;

        const h1Font = this.typography.h1.font?.family;
        if (h1Font) {
            this.style.setProperty("--h1-font", `"${h1Font}"`);
        }
    }

    #renderTag(tag: string, text: string, family: string, size: string, spacing: string) {
        const T = unsafeStatic(tag);
        return staticHtml`
        <${T} style="font-family:${family}; font-size:${size}; letter-spacing:${spacing};">
            ${text}
        </${T}>
    `;
    }

    override render() {
        const t = this.typography;
        return html`
            ${TypographyTabPreview.PREVIEW_ITEMS.map(({ key, tag, text }) => {
            const item = t?.[key];
            const family = item?.font?.family ? `"${item.font.family}"` : "inherit";
            const size = item?.size ? `${item.size}px` : "inherit";
            const spacing = item?.spacing ? `${item.spacing}px` : "normal";

            return this.#renderTag(tag, text, family, size, spacing);
        })}
        `;
    }

    static styles = css`
        :host {
            display: block;
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
        }
    `;
}