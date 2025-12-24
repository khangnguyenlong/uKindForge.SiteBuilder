import { LitElement as l, html as m, css as f, property as u, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as v } from "@umbraco-cms/backoffice/element-api";
import { o as a } from "./unsafe-html-fGBgmJfF.js";
var x = Object.defineProperty, P = Object.getOwnPropertyDescriptor, p = (r, o, c, s) => {
  for (var e = s > 1 ? void 0 : s ? P(o, c) : o, n = r.length - 1, i; n >= 0; n--)
    (i = r[n]) && (e = (s ? i(o, c, e) : i(e)) || e);
  return s && e && x(o, c, e), e;
};
let t = class extends v(l) {
  constructor() {
    super(...arguments), this.content = {};
  }
  render() {
    const r = this.content?.richText?.markup ?? "";
    return m`
            ${a(r)}
        `;
  }
};
t.styles = [
  f`
        `
];
p([
  u({ attribute: !1 })
], t.prototype, "content", 2);
t = p([
  h("rich-text-block-preview")
], t);
const O = t;
export {
  t as RichTextBlockPreview,
  O as default
};
//# sourceMappingURL=rich-text-block-preview-BWR9I3A8.js.map
