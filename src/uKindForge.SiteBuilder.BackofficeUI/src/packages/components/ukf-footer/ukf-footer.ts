import { LitElement, nothing, html } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export type FooterStyleId = "style-1" | "style-2" | "style-3" | "style-4" | "style-5";

const LOADERS: Record<FooterStyleId, () => Promise<{ getHeaderStyle: () => { markup: string; cssText: string } }>> = {
  "style-1": () => import("./styles/style-1.js"),
  "style-2": () => import("./styles/style-2.js"),
  "style-3": () => import("./styles/style-3.js"),
  "style-4": () => import("./styles/style-4.js"),
  "style-5": () => import("./styles/style-5.js"),
};

@customElement("ukf-footer")
export class UkfFooter extends LitElement {
  @property({ type: String }) styleId: FooterStyleId = "style-1";

  @state() private _markup = "";
  @state() private _cssText = "";

  protected override updated(changed: Map<string, unknown>) {
    if (changed.has("styleId")) void this.#load();
  }

  connectedCallback() {
    super.connectedCallback();
    void this.#load();
  }

  async #load() {
    const mod = await (LOADERS[this.styleId] ?? LOADERS["style-1"])();
    const { markup, cssText } = mod.getHeaderStyle();

    this._markup = markup;
    this._cssText = cssText;
  }

  override render() {
    if (!this._markup) return nothing;

    return html`
      <link rel="stylesheet" href="/App_Plugins/uKFSB/assets/libs/bootstrap/bootstrap.min.css" />
      <link rel="stylesheet" href="/App_Plugins/uKFSB/assets/css/site.css" />

      <style>
        ${this._cssText}
      </style>
      ${unsafeHTML(this._markup)}
    `;
  }
}
