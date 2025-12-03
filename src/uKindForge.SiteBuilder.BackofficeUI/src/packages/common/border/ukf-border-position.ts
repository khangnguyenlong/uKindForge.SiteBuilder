import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ukf-border-position')
export class UkfBorderPosition extends LitElement {
  @property({ type: Object }) value = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };

  static styles = css`
    :host {
      display: inline-flex;
      padding: var(--uui-size-space-3);
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      background: var(--uui-color-surface);
    }

    .grid {
      width: 90px;
      height: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
    }

    button {
      all: unset;
      display: flex;
      cursor: pointer;
      background: var(--uui-color-surface);
      border-radius: var(--uui-border-radius);
      transition: background 0.15s, border-color 0.15s;
      box-sizing: border-box;
    }

    /* default line style */
    .line {
      background: var(--uui-color-border);
    }

    /* active */
    .active {
      background: var(--uui-color-interactive-emphasis);
    }

    /* hover */
    button:hover .line {
      background: var(--uui-color-interactive);
    }

    .top {
      width: 40px;
      height: 3px;
      grid-column: 2;
      grid-row: 1;
    }

    .right {
      width: 3px;
      height: 28px;
      grid-column: 3;
      grid-row: 2;
    }

    .bottom {
      width: 40px;
      height: 3px;
      grid-column: 2;
      grid-row: 3;
    }

    .left {
      width: 3px;
      height: 28px;
      grid-column: 1;
      grid-row: 2;
    }
  `;

  toggle(side: 'top' | 'right' | 'bottom' | 'left') {
    this.value = { ...this.value, [side]: !this.value[side] };
    this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
  }

  render() {
    const { top, right, bottom, left } = this.value;

    return html`
      <div class="grid">
        <div></div>

        <button @click=${() => this.toggle('top')}>
          <div class="line top ${top ? 'active' : ''}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle('left')}>
          <div class="line left ${left ? 'active' : ''}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle('right')}>
          <div class="line right ${right ? 'active' : ''}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle('bottom')}>
          <div class="line bottom ${bottom ? 'active' : ''}"></div>
        </button>

        <div></div>
      </div>
    `;
  }
}
