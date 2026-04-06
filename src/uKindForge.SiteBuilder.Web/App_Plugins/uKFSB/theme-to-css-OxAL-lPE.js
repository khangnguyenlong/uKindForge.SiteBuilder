import { LitElement as b, nothing as x, html as S } from "@umbraco-cms/backoffice/external/lit";
import { r as f, n as y, t as $ } from "./ukf-color-group-CvM34Won.js";
import { o as w } from "./unsafe-html-fGBgmJfF.js";
var z = Object.defineProperty, L = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, p = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? L(t, s) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (a ? n(t, s, r) : n(r)) || r);
  return a && r && z(t, s, r), r;
}, U = (e, t, s) => t.has(e) || T("Cannot " + s), H = (e, t, s) => t.has(e) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), _ = (e, t, s) => (U(e, t, "access private method"), s), u, d;
const m = {
  "style-1": () => import("./style-1-AE2flXM2.js"),
  "style-2": () => import("./style-2-AE2flXM2.js"),
  "style-3": () => import("./style-3-AE2flXM2.js"),
  "style-4": () => import("./style-4-AE2flXM2.js"),
  "style-5": () => import("./style-5-AE2flXM2.js")
};
let i = class extends b {
  constructor() {
    super(...arguments), H(this, u), this.styleId = "style-1", this.brand = "uKindForge", this._markup = "", this._cssText = "";
  }
  connectedCallback() {
    super.connectedCallback(), _(this, u, d).call(this);
  }
  updated(e) {
    e.has("styleId") && _(this, u, d).call(this);
  }
  render() {
    return this._markup ? S`
      <link rel="stylesheet" href="/App_Plugins/uKFSB/assets/libs/bootstrap/bootstrap.min.css" />

      <style>
        ${this._cssText}
      </style>
      ${w(this._markup)}
    ` : x;
  }
};
u = /* @__PURE__ */ new WeakSet();
d = async function() {
  const e = await (m[this.styleId] ?? m["style-1"])(), { markup: t, cssText: s } = e.getHeaderStyle();
  this._markup = t.replaceAll("{{brand}}", this.brand), this._cssText = s;
};
p([
  y({ type: String })
], i.prototype, "styleId", 2);
p([
  y({ type: String })
], i.prototype, "brand", 2);
p([
  f()
], i.prototype, "_markup", 2);
p([
  f()
], i.prototype, "_cssText", 2);
i = p([
  $("ukf-header")
], i);
var K = Object.defineProperty, W = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, l = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? W(t, s) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (a ? n(t, s, r) : n(r)) || r);
  return a && r && K(t, s, r), r;
}, B = (e, t, s) => t.has(e) || C("Cannot " + s), M = (e, t, s) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), v = (e, t, s) => (B(e, t, "access private method"), s), h, k;
const g = {
  "style-1": () => import("./style-1-ClHplZKJ.js"),
  "style-2": () => import("./style-2-DbpQj4yg.js"),
  "style-3": () => import("./style-3-DbpQj4yg.js"),
  "style-4": () => import("./style-4-DbpQj4yg.js"),
  "style-5": () => import("./style-5-DbpQj4yg.js")
};
let c = class extends b {
  constructor() {
    super(...arguments), M(this, h), this.styleId = "style-1", this._markup = "", this._cssText = "";
  }
  updated(e) {
    e.has("styleId") && v(this, h, k).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), v(this, h, k).call(this);
  }
  render() {
    return this._markup ? S`
      <link rel="stylesheet" href="/App_Plugins/uKFSB/assets/libs/bootstrap/bootstrap.min.css" />
      <link rel="stylesheet" href="/App_Plugins/uKFSB/assets/css/site.css" />

      <style>
        ${this._cssText}
      </style>
      ${w(this._markup)}
    ` : x;
  }
};
h = /* @__PURE__ */ new WeakSet();
k = async function() {
  const e = await (g[this.styleId] ?? g["style-1"])(), { markup: t, cssText: s } = e.getHeaderStyle();
  this._markup = t, this._cssText = s;
};
l([
  y({ type: String })
], c.prototype, "styleId", 2);
l([
  f()
], c.prototype, "_markup", 2);
l([
  f()
], c.prototype, "_cssText", 2);
c = l([
  $("ukf-footer")
], c);
class R extends EventTarget {
  constructor() {
    super(...arguments), this._state = {};
  }
  get snapshot() {
    return this._state;
  }
  setColorSettings(t) {
    this._state = { ...this._state, colorSettings: t }, this.dispatchEvent(new CustomEvent("ukf-theme-change", { detail: this._state }));
  }
  setTypographySettings(t) {
    this._state = { ...this._state, typographySettings: t }, this.dispatchEvent(new CustomEvent("ukf-theme-change", { detail: this._state }));
  }
  setStyleSettings(t) {
    this._state = { ...this._state, styleSettings: t }, this.dispatchEvent(new CustomEvent("ukf-theme-change", { detail: this._state }));
  }
  subscribe(t) {
    const s = (a) => t(a.detail);
    return this.addEventListener("ukf-theme-change", s), t(this._state), () => this.removeEventListener("ukf-theme-change", s);
  }
}
const J = new R();
function N(e) {
  const t = e.colorSettings ?? {}, s = e.typographySettings ?? {}, a = e.styleSettings ?? {}, r = t.primary ?? "#3b82f6", o = t.surface ?? "#ffffff", n = t.background ?? "#f6f7fb", E = t.text ?? "#111827", P = t.border ?? "rgba(0,0,0,.12)", O = a.radius ?? 12, A = a.space ?? 8, I = s.h1?.font?.family ?? "system-ui", F = s.h1?.size ?? 32, D = s.h1?.spacing ?? 0;
  return `
.ukf-theme {
  --ukf-primary: ${r};
  --ukf-bg: ${n};
  --ukf-surface: ${o};
  --ukf-text: ${E};
  --ukf-border: ${P};

  --ukf-radius: ${O}px;
  --ukf-space: ${A}px;

  --ukf-h1-font: "${I}", system-ui;
  --ukf-h1-size: ${F}px;
  --ukf-h1-tracking: ${D}px;
}

.ukf-theme { background: var(--ukf-bg); color: var(--ukf-text); }
.ukf-container { max-width: 1080px; margin: 0 auto; padding: calc(var(--ukf-space) * 2); }

.ukf-card {
  background: var(--ukf-surface);
  border: 1px solid var(--ukf-border);
  border-radius: var(--ukf-radius);
  padding: calc(var(--ukf-space) * 2);
}

.ukf-btn-row { display:flex; gap: var(--ukf-space); flex-wrap:wrap; }
.ukf-btn {
  padding: calc(var(--ukf-space) * 1.25) calc(var(--ukf-space) * 1.75);
  border-radius: calc(var(--ukf-radius) - 4px);
  border: 1px solid transparent;
  cursor: pointer;
  font: inherit;
}
.ukf-btn--primary { background: var(--ukf-primary); color: #fff; }
.ukf-btn--secondary { background: transparent; border-color: var(--ukf-border); color: var(--ukf-text); }

.ukf-h1 { font-family: var(--ukf-h1-font); font-size: var(--ukf-h1-size); letter-spacing: var(--ukf-h1-tracking); margin:0 0 var(--ukf-space); }

.ukf-media { border:1px solid var(--ukf-border); border-radius: var(--ukf-radius); overflow:hidden; background: rgba(0,0,0,.03); }
.ukf-media__ph { aspect-ratio: 16/9; display:flex; align-items:center; justify-content:center; color: rgba(0,0,0,.45); }
`;
}
export {
  N as a,
  J as u
};
//# sourceMappingURL=theme-to-css-OxAL-lPE.js.map
