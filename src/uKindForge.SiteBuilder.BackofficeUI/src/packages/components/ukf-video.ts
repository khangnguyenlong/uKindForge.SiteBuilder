import { LitElement, html } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ukf-video")
export class UkfVideoPreview extends LitElement {
  @property({ type: String }) title = "Video";

  protected createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-media">
          <div class="ukf-media__ph">Video Placeholder (16:9)</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-video": UkfVideoPreview;
  }
}
