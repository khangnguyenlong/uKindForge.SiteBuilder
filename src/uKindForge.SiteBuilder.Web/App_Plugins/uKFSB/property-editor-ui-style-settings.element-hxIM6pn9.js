import { LitElement as y, html as a, css as z, property as T, state as w, customElement as D } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { i as O, n as c, a as U, t as d } from "./ukf-color-group-CvM34Won.js";
import "./ukf-control-DNNEwrXp.js";
import { x as C } from "./lit-html-D3bFBl2C.js";
import "./ukf-footer-B3pvJtI1.js";
import { UmbChangeEvent as at } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as ut } from "@umbraco-cms/backoffice/style";
var ct = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, j = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? dt(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && ct(t, o, r), r;
};
let h = class extends U {
  constructor() {
    super(...arguments), this.headline = "";
  }
  render() {
    return C`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          <slot name="controls"></slot>
        </div>
      </uui-box>
    `;
  }
};
h.styles = O`
    uui-box {
      --uui-box-header-padding: 0;
      --uui-box-default-padding: 0;
      --uui-box-box-shadow: none;
    }

    .grid {
      padding: var(--uui-size-space-5) 0;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
  `;
j([
  c({ type: String })
], h.prototype, "headline", 2);
h = j([
  d("ukf-control-group")
], h);
class ft extends EventTarget {
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
    const o = (i) => t(i.detail);
    return this.addEventListener("ukf-theme-change", o), t(this._state), () => this.removeEventListener("ukf-theme-change", o);
  }
}
const pt = new ft();
function vt(e) {
  const t = e.colorSettings ?? {}, o = e.typographySettings ?? {}, i = e.styleSettings ?? {}, r = t.primary ?? "#3b82f6", l = t.surface ?? "#ffffff", s = t.background ?? "#f6f7fb", et = t.text ?? "#111827", rt = t.border ?? "rgba(0,0,0,.12)", ot = i.radius ?? 12, it = i.space ?? 8, lt = o.h1?.font?.family ?? "system-ui", st = o.h1?.size ?? 32, nt = o.h1?.spacing ?? 0;
  return `
.ukf-theme {
  --ukf-primary: ${r};
  --ukf-bg: ${s};
  --ukf-surface: ${l};
  --ukf-text: ${et};
  --ukf-border: ${rt};

  --ukf-radius: ${ot}px;
  --ukf-space: ${it}px;

  --ukf-h1-font: "${lt}", system-ui;
  --ukf-h1-size: ${st}px;
  --ukf-h1-tracking: ${nt}px;
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
var ht = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, R = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? gt(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && ht(t, o, r), r;
};
let _ = class extends y {
  constructor() {
    super(...arguments), this.title = "Buttons";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return a`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-btn-row">
          <button class="ukf-btn ukf-btn--primary" type="button">Primary</button>
          <button class="ukf-btn ukf-btn--secondary" type="button">Secondary</button>
        </div>
      </div>
    `;
  }
};
R([
  c({ type: String })
], _.prototype, "title", 2);
_ = R([
  d("ukf-button")
], _);
var kt = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, B = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? bt(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && kt(t, o, r), r;
};
let x = class extends y {
  constructor() {
    super(...arguments), this.title = "Image";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return a`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-media">
          <div class="ukf-media__ph">Image Placeholder (16:9)</div>
        </div>
      </div>
    `;
  }
};
B([
  c({ type: String })
], x.prototype, "title", 2);
x = B([
  d("ukf-image")
], x);
var yt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, L = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? mt(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && yt(t, o, r), r;
};
let S = class extends y {
  constructor() {
    super(...arguments), this.title = "Video";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return a`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-media">
          <div class="ukf-media__ph">Video Placeholder (16:9)</div>
        </div>
      </div>
    `;
  }
};
L([
  c({ type: String })
], S.prototype, "title", 2);
S = L([
  d("ukf-video")
], S);
var _t = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, I = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? xt(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && _t(t, o, r), r;
};
let g = class extends y {
  constructor() {
    super(...arguments), this.title = "Card Title", this.text = "Sample card content to preview typography, spacing, border and shadow.";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return a`
      <div class="ukf-card">
        <div class="ukf-h3">${this.title}</div>
        <p class="ukf-muted" style="margin:0">${this.text}</p>

        <div style="height: var(--ukf-space)"></div>

        <div class="ukf-btn-row">
          <button class="ukf-btn ukf-btn--primary" type="button">Action</button>
          <button class="ukf-btn ukf-btn--secondary" type="button">Learn more</button>
        </div>
      </div>
    `;
  }
};
I([
  c({ type: String })
], g.prototype, "title", 2);
I([
  c({ type: String })
], g.prototype, "text", 2);
g = I([
  d("ukf-card")
], g);
var St = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, W = (e) => {
  throw TypeError(e);
}, m = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? $t(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && St(t, o, r), r;
}, F = (e, t, o) => t.has(e) || W("Cannot " + o), wt = (e, t, o) => (F(e, t, "read from private field"), o ? o.call(e) : t.get(e)), Pt = (e, t, o) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Ot = (e, t, o, i) => (F(e, t, "write to private field"), t.set(e, o), o), v;
let f = class extends P {
  constructor() {
    super(...arguments), this.headerStyleId = "style-1", this.footerStyleId = "style-1", this._parts = {}, Pt(this, v);
  }
  connectedCallback() {
    super.connectedCallback(), Ot(this, v, pt.subscribe((e) => this._parts = e));
  }
  disconnectedCallback() {
    var e;
    (e = wt(this, v)) == null || e.call(this), super.disconnectedCallback();
  }
  render() {
    const e = vt(this._parts);
    return a`
            <style>${e}</style>
            
            <div class="ukf-theme">
                <ukf-header .styleId=${this.headerStyleId}></ukf-header>
                <ukf-footer .styleId=${this.footerStyleId}></ukf-footer>
                <div class="grid">
                    <ukf-button></ukf-button>
                    <ukf-card></ukf-card>
                    <ukf-image></ukf-image>
                    <ukf-video></ukf-video>
                </div>
            </div>
        `;
  }
};
v = /* @__PURE__ */ new WeakMap();
f.styles = z`
        :host { 
            display:block; 
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px)); 
        }
        .grid { 
            display:grid; 
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
            gap: 16px; 
        }
    `;
m([
  T({ type: String })
], f.prototype, "headerStyleId", 2);
m([
  T({ type: String })
], f.prototype, "footerStyleId", 2);
m([
  w()
], f.prototype, "_parts", 2);
f = m([
  D("style-tab-preview")
], f);
var Ct = Object.defineProperty, It = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, V = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? It(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && Ct(t, o, r), r;
}, Et = (e, t, o) => t.has(e) || M("Cannot " + o), zt = (e, t, o) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Tt = (e, t, o) => (Et(e, t, "access private method"), o), $, A;
let k = class extends P {
  constructor() {
    super(...arguments), zt(this, $), this.value = "sm";
  }
  render() {
    return C`
			<uui-radio-group @input=${Tt(this, $, A)} value=${this.value}>
        <uui-radio name="size" label="Small" value="sm"></uui-radio>
        <uui-radio name="size" label="Medium" value="md"></uui-radio>
        <uui-radio name="size" label="Large" value="lg"></uui-radio>
			</uui-radio-group>
		`;
  }
};
$ = /* @__PURE__ */ new WeakSet();
A = function(e) {
  this.value = e.target.value, this.dispatchEvent(new at());
};
k.styles = [
  ut,
  O`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`
];
V([
  c()
], k.prototype, "value", 2);
k = V([
  d("ukf-size")
], k);
var Dt = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, H = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Ut(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && Dt(t, o, r), r;
};
let b = class extends U {
  constructor() {
    super(...arguments), this.value = {
      top: !1,
      right: !1,
      bottom: !1,
      left: !1
    };
  }
  toggle(e) {
    this.value = { ...this.value, [e]: !this.value[e] }, this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
  }
  render() {
    const { top: e, right: t, bottom: o, left: i } = this.value;
    return C`
      <div class="grid">
        <div></div>

        <button @click=${() => this.toggle("top")}>
          <div class="line top ${e ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("left")}>
          <div class="line left ${i ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("right")}>
          <div class="line right ${t ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("bottom")}>
          <div class="line bottom ${o ? "active" : ""}"></div>
        </button>

        <div></div>
      </div>
    `;
  }
};
b.styles = O`
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
H([
  c({ type: Object })
], b.prototype, "value", 2);
b = H([
  d("ukf-border-position")
], b);
var jt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, E = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Rt(t, o) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (r = (i ? s(t, o, r) : s(r)) || r);
  return i && r && jt(t, o, r), r;
}, Bt = (e, t, o) => t.has(e) || G("Cannot " + o), Lt = (e, t, o) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), u = (e, t, o) => (Bt(e, t, "access private method"), o), n, N, X, Y, Z, q, J, K, Q, tt;
let p = class extends P {
  constructor() {
    super(...arguments), Lt(this, n), this._headerStyleId = "style-1", this._footerStyleId = "style-1";
  }
  render() {
    return a`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${u(this, n, X).call(this)}
                ${u(this, n, K).call(this)}
                ${u(this, n, N).call(this)}                          
                ${u(this, n, Q).call(this)}
                ${u(this, n, tt).call(this)}
            </div>
            <div slot="end">
                <style-tab-preview
                    .headerStyleId=${this._headerStyleId}                
                    .footerStyleId=${this._footerStyleId}
                >
                </style-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
n = /* @__PURE__ */ new WeakSet();
N = function() {
  return a`
            <ukf-accordion heading="Common">
                <div slot="content" class="accordion-content">
                    <ukf-control label="Rounded">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                        </ukf-control>
                    <ukf-control label="Underlined Links">
                        <uui-toggle slot="control"></uui-toggle>
                    </ukf-control>
                    <ukf-control label="Scroll to Top">
                        <uui-toggle slot="control"></uui-toggle>
                    </ukf-control>
                </div>
            </ukf-accordion>
        `;
};
X = function() {
  return a`
            <ukf-accordion heading="Header">
                <div slot="content" class="accordion-content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${u(this, n, Y).call(this)}"
                                    @change=${u(this, n, q)}
                                >
                                </uui-select>
                            </ukf-control>
                            <ukf-control label="Transparency">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Full Width">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Sticky">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Opacity">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Height">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                    <ukf-control-group headline="Navination">
                        <div slot="controls">
                            <ukf-control label="Line Spacing">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                    <ukf-control-group headline="Border">
                        <div slot="controls">
                            <ukf-control label="Thickness">
                                <ukf-size slot="control"></ukf-size>
                            </ukf-control>
                            <ukf-control label="Position">
                                <ukf-border-position slot="control"></ukf-border-position>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                </div>
            </ukf-accordion>
        `;
};
Y = function() {
  return ["style-1", "style-2", "style-3", "style-4", "style-5"].map((t) => ({
    name: t.replace("-", " ").toUpperCase(),
    value: t,
    selected: t === this._headerStyleId
  }));
};
Z = function() {
  return ["style-1", "style-2", "style-3", "style-4", "style-5"].map((t) => ({
    name: t.replace("-", " ").toUpperCase(),
    value: t,
    selected: t === this._footerStyleId
  }));
};
q = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  this._headerStyleId = t;
};
J = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  this._footerStyleId = t;
};
K = function() {
  return a`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${u(this, n, Z).call(this)}"
                                    @change=${u(this, n, J)}
                                >
                                </uui-select>
                            </ukf-control>
                            <ukf-control label="Transparency">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Top">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Bottom">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>
                </div>
            </ukf-accordion>
        `;
};
Q = function() {
  return a`
            <ukf-accordion heading="Button">
                <div slot="content">
                    <ukf-control-group headline="Primary">
                        <div slot="controls">
                            <ukf-control label="Rounded">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Border">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group> 
                    <ukf-control-group headline="Secondary">
                        <div slot="controls">
                            <ukf-control label="Rounded">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Border">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group> 
                    <ukf-control-group headline="Size">
                        <div slot="controls">
                            <ukf-control label="Small">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Medium">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Large">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group> 
                </div>
            </ukf-accordion>
        `;
};
tt = function() {
  return a`
            <ukf-accordion heading="Card/Image/Video">
                <div slot="content">
                    <ukf-control label="Zoom on hover">
                        <uui-toggle slot="control"></uui-toggle>
                    </ukf-control>
                    <ukf-control label="Rounded corners">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                    </ukf-control>

                    <ukf-control-group headline="Box shadow">
                        <div slot="controls">
                            <ukf-control label="Color">
                                <ukf-color-group slot="control"></ukf-color-group>
                            </ukf-control>
                            <ukf-control label="Opacity">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Offset-X">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Offset-Y">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                            <ukf-control label="Blur radius">
                                <uui-slider slot="control" min="0" max="100"></uui-slider>
                            </ukf-control>
                        </div>
                    </ukf-control-group>                    
                </div>
            </ukf-accordion>
        `;
};
p.styles = z`
        :host {
            display: block;
            padding: 0;
        }

        .accordion-content {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 16px;
        }

        .accordion-content > * {
            flex: 1 1 280px;
        }
    `;
E([
  w()
], p.prototype, "_headerStyleId", 2);
E([
  w()
], p.prototype, "_footerStyleId", 2);
p = E([
  D("ukindforge-style-settings-property-editor-ui")
], p);
export {
  p as default
};
//# sourceMappingURL=property-editor-ui-style-settings.element-hxIM6pn9.js.map
