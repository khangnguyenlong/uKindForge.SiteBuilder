import { LitElement as p, html as a, css as _, property as f, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as v } from "@umbraco-cms/backoffice/element-api";
import { E as l, T as $ } from "./lit-html-D3bFBl2C.js";
const d = { CHILD: 2 }, T = (r) => (...t) => ({ _$litDirective$: r, values: t });
class w {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
class u extends w {
  constructor(t) {
    if (super(t), this.it = l, t.type !== d.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === l || t == null) return this._t = void 0, this.it = t;
    if (t === $) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const e = [t];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
u.directiveName = "unsafeHTML", u.resultType = 1;
const x = T(u);
var y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? b(t, e) : t, o = r.length - 1, c; o >= 0; o--)
    (c = r[o]) && (s = (i ? c(t, e, s) : c(s)) || s);
  return i && s && y(t, e, s), s;
};
let n = class extends v(p) {
  constructor() {
    super(...arguments), this.content = {};
  }
  render() {
    const r = this.content?.richText?.markup ?? "";
    return a`
            ${x(r)}
        `;
  }
};
n.styles = [
  _`
        `
];
h([
  f({ attribute: !1 })
], n.prototype, "content", 2);
n = h([
  m("rich-text-block-preview")
], n);
const P = n;
export {
  n as RichTextBlockPreview,
  P as default
};
//# sourceMappingURL=rich-text-block-preview-D4LH9Q7W.js.map
