import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("ukf-control-group")
export class UkfControlGroup extends LitElement {

  @property({ type: String }) headline = "";

  static styles = css`
    uui-box {
      --uui-box-header-padding: 0;
      --uui-box-default-padding: 0;
      --uui-box-box-shadow: none;
    }

    .grid {
      padding: var(--uui-size-space-5) 0;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
  `;

  render() {
    return html`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          <slot name="controls"></slot>
        </div>
      </uui-box>
    `;
  }
}
