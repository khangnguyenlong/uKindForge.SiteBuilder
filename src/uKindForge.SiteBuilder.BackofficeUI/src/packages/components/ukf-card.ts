import { LitElement, html } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ukf-card")
export class UkfCardPreview extends LitElement {
  @property({ type: String }) title = "Card Title";
  @property({ type: String }) text =
    "Sample card content to preview typography, spacing, border and shadow.";

  protected createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      <div class="ukf-card">
        <div class="ukf-h3">${this.title}</div>
        <p class="ukf-muted" style="margin:0">${this.text}</p>

        <div style="height: var(--ukf-space)"></div>

        <div class="ukf-btn-row">
          <button class="ukf-btn ukf-btn--primary" type="button">Action</button>
          <button class="ukf-btn ukf-btn--secondary" type="button">Learn more</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-card": UkfCardPreview;
  }
}
