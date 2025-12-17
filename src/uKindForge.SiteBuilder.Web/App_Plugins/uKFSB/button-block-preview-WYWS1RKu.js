import { LitElement as c, html as m, css as i, property as f, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as b } from "@umbraco-cms/backoffice/element-api";
var a = Object.defineProperty, P = Object.getOwnPropertyDescriptor, u = (p, r, n, o) => {
  for (var t = o > 1 ? void 0 : o ? P(r, n) : r, s = p.length - 1, l; s >= 0; s--)
    (l = p[s]) && (t = (o ? l(r, n, t) : l(t)) || t);
  return o && t && a(r, n, t), t;
};
let e = class extends b(c) {
  constructor() {
    super(...arguments), this.content = {};
  }
  render() {
    return m`
            <button>Test</button>
        `;
  }
};
e.styles = [
  i`
        `
];
u([
  f({ attribute: !1 })
], e.prototype, "content", 2);
e = u([
  v("button-block-preview")
], e);
const B = e;
export {
  e as ButtonBlockPreview,
  B as default
};
//# sourceMappingURL=button-block-preview-WYWS1RKu.js.map
