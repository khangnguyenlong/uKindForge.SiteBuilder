import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import type { UUIBooleanInputEvent } from '@umbraco-cms/backoffice/external/uui';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';

@customElement("ukf-size")
export class UkfSize extends UmbLitElement {
  @property()
  value = 'sm';

  #onInput(e: UUIBooleanInputEvent) {
    this.value = e.target.value;
    this.dispatchEvent(new UmbChangeEvent());
  }

  override render() {
    return html`
			<uui-radio-group @input=${this.#onInput} value=${this.value}>
        <uui-radio name="size" label="Small" value="sm"></uui-radio>
        <uui-radio name="size" label="Medium" value="md"></uui-radio>
        <uui-radio name="size" label="Large" value="lg"></uui-radio>
			</uui-radio-group>
		`;
  }

  static override styles = [
    UmbTextStyles,
    css`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`,
  ];
}
