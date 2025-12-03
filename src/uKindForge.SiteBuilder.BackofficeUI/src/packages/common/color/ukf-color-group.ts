import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import type { ColorItem } from "./types";

@customElement("ukf-color-group")
export class UkfColorGroup extends LitElement {

  @property({ type: String }) headline = "";
  @property({ type: Array }) items: ColorItem[] = [];

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

    .color-item {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1 1 180px;
    }

    .color-item uui-color-picker {
      flex-shrink: 0;
    }

    uui-color-picker {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-width: fit-content;
    }

    uui-color-picker::part(input) {
      width: auto;
    }
  `;

  render() {
    return html`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          ${this.items.map(i => html`
            <div class="color-item">
              <uui-color-picker id=${i.id}></uui-color-picker>
              <span>${i.label}</span>
            </div>
          `)}
        </div>
      </uui-box>
    `;
  }
}
