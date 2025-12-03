import { LitElement, html, css } from "lit";
import { property, state, customElement } from "lit/decorators.js";

@customElement("ukf-accordion")
export class UkfAccordion extends LitElement {

  /** Heading/title shown in the accordion header */
  @property({ type: String })
  heading: string = "";

  /** Whether the accordion is open by default */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  /** Internal state used for animation */
  @state()
  private _isOpen: boolean = false;

  constructor() {
    super();
    this._isOpen = this.open;
  }

  protected firstUpdated() {
    this._isOpen = this.open;
  }

  private toggle() {
    this._isOpen = !this._isOpen;
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--uui-size-space-4) 0;
    }

    .accordion {
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      background: var(--uui-color-surface);
    }

    .accordion-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      padding: var(--uui-size-space-4) var(--uui-size-space-5);
      background: none;
      border: none;
      border-bottom: 1px solid var(--uui-color-border);
      font-family: inherit;
    }

    .accordion-body {
      padding: var(--uui-size-space-4) var(--uui-size-space-5);
    }

  `;

  render() {
    return html`
    <div class="accordion">

      <!-- HEADER -->
      <button class="accordion-header" @click=${this.toggle}>
        <uui-label>${this.heading}</uui-label>
        <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
      </button>

      <!-- BODY -->
      ${this._isOpen
        ? html`
            <div class="accordion-body">
              <slot name="content"></slot>
            </div>
          `
        : null}
    </div>
  `;
  }
}
