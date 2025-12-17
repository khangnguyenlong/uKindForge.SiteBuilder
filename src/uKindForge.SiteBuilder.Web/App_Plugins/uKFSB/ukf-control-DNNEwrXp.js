import { i as p, n as c, a as d, t as f } from "./ukf-color-group-CvM34Won.js";
import { x as m } from "./lit-html-D3bFBl2C.js";
var v = Object.defineProperty, u = Object.getOwnPropertyDescriptor, n = (a, t, o, e) => {
  for (var l = e > 1 ? void 0 : e ? u(t, o) : t, i = a.length - 1, s; i >= 0; i--)
    (s = a[i]) && (l = (e ? s(t, o, l) : s(l)) || l);
  return e && l && v(t, o, l), l;
};
let r = class extends d {
  constructor() {
    super(...arguments), this.label = "";
  }
  render() {
    return m`
      <div class="field">
        <div class="label">${this.label}</div>
        <div class="control">
          <slot name="control"></slot>
        </div>
      </div>
    `;
  }
};
r.styles = p`
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
n([
  c({ type: String })
], r.prototype, "label", 2);
r = n([
  f("ukf-control")
], r);
//# sourceMappingURL=ukf-control-DNNEwrXp.js.map
