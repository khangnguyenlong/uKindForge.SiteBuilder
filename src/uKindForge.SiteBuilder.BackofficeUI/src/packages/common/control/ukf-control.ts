import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ukf-control")
export class UkfControl extends LitElement {
  @property({ type: String }) label = "";

  static styles = css`
    :host {
      display: block;
      margin-bottom: 12px;
    }

    .field {
      display: grid;
      grid-template-columns: var(--ukf-field-label-width, 150px) 1fr;
      align-items: start;
      column-gap: 12px;
    }

    .label {
      font-weight: 500;
      color: var(--uui-color-text);
      line-height: 1.4;
      white-space: normal;
    }

    .control {
      width: 100%;
    }

    @media (max-width: 500px) {
      .field {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="field">
        <div class="label">${this.label}</div>
        <div class="control">
          <slot name="control"></slot>
        </div>
      </div>
    `;
  }
}
