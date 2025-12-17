import { LitElement as i, html as m, property as a, customElement as f } from "@umbraco-cms/backoffice/external/lit";
var g = Object.defineProperty, v = Object.getOwnPropertyDescriptor, n = (u, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? v(r, o) : r, p = u.length - 1, l; p >= 0; p--)
    (l = u[p]) && (e = (t ? l(r, o, e) : l(e)) || e);
  return t && e && g(r, o, e), e;
};
let s = class extends i {
  constructor() {
    super(...arguments), this.value = "";
  }
  render() {
    return m`I'm a property editor!`;
  }
};
n([
  a({ type: String })
], s.prototype, "value", 2);
s = n([
  f("ukindforge-property-editor-ui-toggle-plus")
], s);
export {
  s as default
};
//# sourceMappingURL=property-editor-ui-toggle-plus.element-DZI5P9DL.js.map
