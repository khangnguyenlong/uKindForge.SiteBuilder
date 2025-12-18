import { LitElement, html } from "@umbraco-cms/backoffice/external/lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ukf-section")
export class UkfSectionPreview extends LitElement {
  @property({ type: String }) kicker = "Section";
  @property({ type: String }) heading = "Build fast. Customize deeply.";
  @property({ type: String }) description =
    "This section previews heading typography, paragraph typography, spacing, and button styles.";

  protected createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      <section class="ukf-section">
        <div class="ukf-card ukf-section__inner">
          <div class="ukf-kicker">${this.kicker}</div>
          <div class="ukf-h1">${this.heading}</div>
          <p class="ukf-muted" style="margin:0">${this.description}</p>

          <div style="height: calc(var(--ukf-space) * 2)"></div>

          <div class="ukf-btn-row">
            <button class="ukf-btn ukf-btn--primary" type="button">Primary CTA</button>
            <button class="ukf-btn ukf-btn--secondary" type="button">Secondary CTA</button>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ukf-section": UkfSectionPreview;
  }
}
