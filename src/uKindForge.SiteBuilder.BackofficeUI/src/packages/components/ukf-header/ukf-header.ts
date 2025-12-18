import { LitElement, nothing, type TemplateResult } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property, state } from "lit/decorators.js";

export type HeaderStyleId = "style-1" | "style-2" | "style-3" | "style-4" | "style-5";

const HEADER_STYLE_LOADERS = {
  "style-1": () => import("./styles/style-1.js"),
  "style-2": () => import("./styles/style-2.js"),
  "style-3": () => import("./styles/style-3.js"),
  "style-4": () => import("./styles/style-4.js"),
  "style-5": () => import("./styles/style-5.js"),  
} satisfies Record<HeaderStyleId, () => Promise<{ renderHeaderStyle: (p: any) => TemplateResult }>>;


@customElement("ukf-header")
export class UkfHeader extends LitElement {
  @property({ type: String }) brand = "uKindForge";
  @property({ type: String }) styleId: HeaderStyleId = "style-1";

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
    const loader = HEADER_STYLE_LOADERS[this.styleId] ?? HEADER_STYLE_LOADERS["style-1"];
    const mod = await loader();
    this._renderStyle = mod.renderHeaderStyle;
  }

  override render() {
    if (!this._renderStyle) return nothing;
    return this._renderStyle({ brand: this.brand });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-header": UkfHeader;
  }
}
