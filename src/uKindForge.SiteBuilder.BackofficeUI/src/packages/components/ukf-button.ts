import { LitElement, html } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ukf-button")
export class UkfButtonPreview extends LitElement {
  @property({ type: String }) title = "Buttons";

  protected createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-btn-row">
          <button class="ukf-btn ukf-btn--primary" type="button">Primary</button>
          <button class="ukf-btn ukf-btn--secondary" type="button">Secondary</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-button": UkfButtonPreview;
  }
}
