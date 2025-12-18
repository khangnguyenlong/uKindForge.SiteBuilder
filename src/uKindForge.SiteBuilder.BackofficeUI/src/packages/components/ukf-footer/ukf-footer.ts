import { LitElement, nothing, type TemplateResult } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property, state } from "lit/decorators.js";

export type FooterStyleId = "style-1" | "style-2" | "style-3" | "style-4" | "style-5";

const FOOTER_STYLE_LOADERS = {
  "style-1": () => import("./styles/style-1.js"),
  "style-2": () => import("./styles/style-2.js"),
  "style-3": () => import("./styles/style-3.js"),
  "style-4": () => import("./styles/style-4.js"),
  "style-5": () => import("./styles/style-5.js"),
} satisfies Record<FooterStyleId, () => Promise<{ renderFooterStyle: (p: any) => TemplateResult }>>;


@customElement("ukf-footer")
export class UkfFooter extends LitElement {
  @property({ type: String }) styleId: FooterStyleId = "style-1";
  @property({ type: String }) copyright = "© uKindForge 2024";

  @state() private _renderStyle?: (p: any) => TemplateResult;

  protected createRenderRoot() { return this; } // light dom

  protected override async updated(changed: Map<string, unknown>) {
    if (changed.has("styleId")) {
      await this.#loadStyle();
      this.requestUpdate();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    void this.#loadStyle();
  }

  async #loadStyle() {
    const loader = FOOTER_STYLE_LOADERS[this.styleId] ?? FOOTER_STYLE_LOADERS["style-1"];
    const mod = await loader();
    this._renderStyle = mod.renderFooterStyle;
  }

  override render() {
    if (!this._renderStyle) return nothing;
    return this._renderStyle({ copyright: this.copyright });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-footer": UkfFooter;
  }
}
