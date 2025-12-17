import { html, css } from "lit";
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { customElement, state, property } from "lit/decorators.js";
import type { GoogleFont, SelectedFont } from "./types";
import "./ukf-font-item";
import type { UmbNotificationContext } from '@umbraco-cms/backoffice/notification';
import { UMB_NOTIFICATION_CONTEXT } from '@umbraco-cms/backoffice/notification';
import { uuid } from "../../utils/uuid"

@customElement("ukf-font-picker")
export class UkfFontPicker extends UmbLitElement {

  @property({ type: Boolean }) isDefaultValue = false;

  @state()
  private selectedFonts: SelectedFont[] = [
    {
      id: uuid(),
      family: "Roboto",
      category: "sans-serif",
      variant: "regular",
      selected: true
    },
  ];

  @state()
  private fontList: GoogleFont[] = [];

  #notificationContext?: UmbNotificationContext;

  constructor() {
    super();
    this.consumeContext(UMB_NOTIFICATION_CONTEXT, (context) => {
      this.#notificationContext = context;
    });
  }

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
      gap: 0;
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.loadFontJson();

    this.dispatchFontChange();
  }

  async loadFontJson() {
    try {
      const resp = await fetch("/App_Plugins/uKFSB/assets/google-web-fonts.json");
      const json = await resp.json();
      this.fontList = json.items as GoogleFont[];
    } catch (err) {
      console.error("Failed to load google-fonts.json", err);
    }
  }

  private addNewFont() {
    this.selectedFonts = [
      ...this.selectedFonts,
      {
        id: uuid(),
        family: "",
        category: "",
        variant: "regular",
        selected: true,
        error: true
      },
    ];

    this.dispatchFontChange();
  }

  private updateFont(index: number, changed: Partial<SelectedFont>) {
    const updated = [...this.selectedFonts];
    const newItem = { ...updated[index], ...changed };
    const isDuplicate = this.selectedFonts.some((f, i) =>
      i !== index &&
      f.family === newItem.family &&
      f.variant === newItem.variant
    );

    if (isDuplicate) {
      const notification = { data: { headline: "Duplicate Font", message: `${newItem.family} (${newItem.variant}) is already selected.` } };
      this.#notificationContext?.peek('danger', notification);

      this.dispatchEvent(new CustomEvent("font-error", {
        detail: true,
        bubbles: true,
        composed: true,
      }));
    }

    newItem.error = isDuplicate || !newItem.family || !newItem.variant;

    updated[index] = newItem;
    this.selectedFonts = updated;

    this.dispatchFontChange();
  }


  private dispatchFontChange() {
    this.dispatchEvent(
      new CustomEvent("ukf-font-change", {
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
              @font-change=${(e: CustomEvent) => this.updateFont(index, e.detail)}
            >
            </ukf-font-item>
          `
    )}
      </div>

      <uui-button
        class="add-btn"
        look="primary"
        @click=${this.addNewFont}
      >
        Add font
      </uui-button>      
    `;
  }
}
