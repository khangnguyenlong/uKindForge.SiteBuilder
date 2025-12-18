import { LitElement, html } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ukf-image")
export class UkfImagePreview extends LitElement {
  @property({ type: String }) title = "Image";

  protected createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-media">
          <div class="ukf-media__ph">Image Placeholder (16:9)</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-image": UkfImagePreview;
  }
}
