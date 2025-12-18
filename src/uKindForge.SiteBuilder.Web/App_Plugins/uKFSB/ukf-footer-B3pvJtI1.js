import { LitElement as g, nothing as w } from "@umbraco-cms/backoffice/external/lit";
import { r as C, n as c, t as E } from "./ukf-color-group-CvM34Won.js";
var P = Object.defineProperty, R = Object.getOwnPropertyDescriptor, O = (t) => {
  throw TypeError(t);
}, y = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? R(e, r) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (s = (a ? n(e, r, s) : n(s)) || s);
  return a && s && P(e, r, s), s;
}, $ = (t, e, r) => e.has(t) || O("Cannot " + r), D = (t, e, r) => e.has(t) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), f = (t, e, r) => ($(t, e, "access private method"), r), d, _;
const u = {
  "style-1": () => import("./style-1-CsS9MITt.js"),
  "style-2": () => import("./style-2-B83Y-v7m.js"),
  "style-3": () => import("./style-3-uLI5oglJ.js"),
  "style-4": () => import("./style-4-B9ouNpL_.js"),
  "style-5": () => import("./style-5-1dZIYaUt.js")
};
let i = class extends g {
  constructor() {
    super(...arguments), D(this, d), this.brand = "uKindForge", this.styleId = "style-1";
  }
  createRenderRoot() {
    return this;
  }
  // light dom
  async updated(t) {
    t.has("styleId") && (await f(this, d, _).call(this), this.requestUpdate());
  }
  connectedCallback() {
    super.connectedCallback(), f(this, d, _).call(this);
  }
  render() {
    return this._renderStyle ? this._renderStyle({ brand: this.brand }) : w;
  }
};
d = /* @__PURE__ */ new WeakSet();
_ = async function() {
  const e = await (u[this.styleId] ?? u["style-1"])();
  this._renderStyle = e.renderHeaderStyle;
};
y([
  c({ type: String })
], i.prototype, "brand", 2);
y([
  c({ type: String })
], i.prototype, "styleId", 2);
y([
  C()
], i.prototype, "_renderStyle", 2);
i = y([
  E("ukf-header")
], i);
var k = Object.defineProperty, F = Object.getOwnPropertyDescriptor, I = (t) => {
  throw TypeError(t);
}, h = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? F(e, r) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (s = (a ? n(e, r, s) : n(s)) || s);
  return a && s && k(e, r, s), s;
}, U = (t, e, r) => e.has(t) || I("Cannot " + r), A = (t, e, r) => e.has(t) ? I("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), S = (t, e, r) => (U(t, e, "access private method"), r), p, v;
const m = {
  "style-1": () => import("./style-1-Dy0S-KIv.js"),
  "style-2": () => import("./style-2-Dy0S-KIv.js"),
  "style-3": () => import("./style-3-Dy0S-KIv.js"),
  "style-4": () => import("./style-4-Dy0S-KIv.js"),
  "style-5": () => import("./style-5-Dy0S-KIv.js")
};
let l = class extends g {
  constructor() {
    super(...arguments), A(this, p), this.styleId = "style-1", this.copyright = "© uKindForge 2024";
  }
  createRenderRoot() {
    return this;
  }
  // light dom
  async updated(t) {
    t.has("styleId") && (await S(this, p, v).call(this), this.requestUpdate());
  }
  connectedCallback() {
    super.connectedCallback(), S(this, p, v).call(this);
  }
  render() {
    return this._renderStyle ? this._renderStyle({ copyright: this.copyright }) : w;
  }
};
p = /* @__PURE__ */ new WeakSet();
v = async function() {
  const e = await (m[this.styleId] ?? m["style-1"])();
  this._renderStyle = e.renderFooterStyle;
};
h([
  c({ type: String })
], l.prototype, "styleId", 2);
h([
  c({ type: String })
], l.prototype, "copyright", 2);
h([
  C()
], l.prototype, "_renderStyle", 2);
l = h([
  E("ukf-footer")
], l);
//# sourceMappingURL=ukf-footer-B3pvJtI1.js.map
