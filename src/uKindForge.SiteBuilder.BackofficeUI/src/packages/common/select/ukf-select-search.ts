import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

export interface UkfOption {
  label: string;
  value: string;
}

@customElement("ukf-select-search")
export class UkfSelectSearch extends LitElement {
  @property({ type: Array }) options: UkfOption[] = [];
  @property({ type: String }) value: string = "";
  @property({ type: Boolean }) error = false;

  @state() private query = "";
  @state() private open = false;

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    :host([error]) uui-input {
      --uui-color-border: #e00000;
    }

    .dropdown {
      position: absolute;
      z-index: 1000;
      width: 100%;
      max-height: 240px;
      overflow-y: auto;
      background: var(--uui-color-surface);
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      box-shadow: var(--uui-shadow-depth-3);
      padding: 4px;
      margin-top: 4px;
    }

    .item {
      padding: 6px 10px;
      cursor: pointer;
      border-radius: var(--uui-border-radius);
    }

    .item:hover {
      background: var(--uui-color-interactive-muted);
    }
  `;

  get filtered() {
    if (!this.open) return this.options;
    if (!this.query) return this.options;

    const q = this.query.toLowerCase();
    return this.options.filter((o) => o.label.toLowerCase().includes(q));
  }

  private onSelect(option: UkfOption) {
    this.value = option.value;

    this.query = "";
    this.open = false;

    this.error = false; // clear error when selected

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: option.value,
        bubbles: false,     // prevent Umbraco error
        composed: false,
      })
    );
  }

  connectedCallback() {
    super.connectedCallback();

    document.addEventListener("click", this.#handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener("click", this.#handleOutsideClick);
  }

  #handleOutsideClick = (e: MouseEvent) => {
    if (!this.open) return;
    if (!this.contains(e.target as Node)) {
      this.open = false;
    }
  };

  render() {
    const selectedLabel =
      this.options.find((o) => o.value === this.value)?.label || "Select...";

    return html`
      <uui-input
        .value=${this.open ? this.query : selectedLabel}
        placeholder=${this.open ? "Search..." : ""}
        @input=${(e: any) => (this.query = e.target.value)}

        @click=${(e: Event) => {
          e.stopPropagation();
          this.open = !this.open;

          if (this.open && !this.value) {
            this.query = "";
          }
        }}
      ></uui-input>

      ${this.open
        ? html`
            <div class="dropdown">
              ${this.filtered.length === 0
                ? html`<div class="item" style="opacity:.6">No items found</div>`
                : this.filtered.map(
                    (o) => html`
                      <div class="item" @click=${() => this.onSelect(o)}>
                        ${o.label}
                      </div>
                    `
                  )}
            </div>
          `
        : ""}
    `;
  }
}
