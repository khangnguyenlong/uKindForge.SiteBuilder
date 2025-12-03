import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { GoogleFont, SelectedFont } from "./types";
import "./ukf-font-item";

@customElement("ukf-font-picker")
export class UkfFontPicker extends LitElement {
  @state()
  private selectedFonts: SelectedFont[] = [];

  @state()
  private fontList: GoogleFont[] = [];

  static styles = css`
    :host {
      display: block;
    }
    .add-btn {
      margin-bottom: var(--uui-size-space-4);
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: var(--uui-size-space-5);
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.loadFontJson();
  }

  async loadFontJson() {
    try {
      const resp = await fetch("/App_Plugins/uKFSB/assets/google-web-fonts.json");
      const json = await resp.json();
      this.fontList = json.items as GoogleFont[];
      console.log("Loaded google-fonts.json", this.fontList);
    } catch (err) {
      console.error("Failed to load google-fonts.json", err);
    }
  }

  private addFont() {
    this.selectedFonts = [
      ...this.selectedFonts,
      { family: "Roboto", variant: "regular" },
    ];
  }

  private updateFont(index: number, changed: Partial<SelectedFont>) {
    const updated = [...this.selectedFonts];
    updated[index] = { ...updated[index], ...changed };
    this.selectedFonts = updated;

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: this.selectedFonts,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="list">
        ${this.selectedFonts.map(
          (font, index) => html`
            <ukf-font-item
              .font=${font}
              .fontList=${this.fontList}
              @font-change=${(e: CustomEvent) =>
                this.updateFont(index, e.detail)}
            >
            </ukf-font-item>
          `
        )}
      </div>

      <uui-button
        class="add-btn"
        look="primary"
        @click=${this.addFont}
      >
        Add font
      </uui-button>      
    `;
  }
}
