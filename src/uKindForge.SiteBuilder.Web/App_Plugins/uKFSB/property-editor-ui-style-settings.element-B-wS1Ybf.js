import { LitElement as m, html as u, css as E, property as U, state as w, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { i as O, n as c, a as z, t as d } from "./ukf-color-group-CvM34Won.js";
import "./ukf-control-DNNEwrXp.js";
import { x as C } from "./lit-html-D3bFBl2C.js";
import { u as et, a as ot } from "./theme-to-css-OxAL-lPE.js";
import { UmbChangeEvent as rt } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as lt } from "@umbraco-cms/backoffice/style";
var it = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, R = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? nt(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && it(t, r, o), o;
};
let h = class extends z {
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
R([
  c({ type: String })
], h.prototype, "headline", 2);
h = R([
  d("ukf-control-group")
], h);
var st = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, j = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? ut(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && st(t, r, o), o;
};
let _ = class extends m {
  constructor() {
    super(...arguments), this.title = "Buttons";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return u`
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
j([
  c({ type: String })
], _.prototype, "title", 2);
_ = j([
  d("ukf-button")
], _);
var at = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, B = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? ct(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && at(t, r, o), o;
};
let x = class extends m {
  constructor() {
    super(...arguments), this.title = "Image";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return u`
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
var dt = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, L = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? ft(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && dt(t, r, o), o;
};
let $ = class extends m {
  constructor() {
    super(...arguments), this.title = "Video";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return u`
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
], $.prototype, "title", 2);
$ = L([
  d("ukf-video")
], $);
var pt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, I = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? vt(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && pt(t, r, o), o;
};
let g = class extends m {
  constructor() {
    super(...arguments), this.title = "Card Title", this.text = "Sample card content to preview typography, spacing, border and shadow.";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return u`
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
var ht = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, W = (e) => {
  throw TypeError(e);
}, b = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? gt(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && ht(t, r, o), o;
}, M = (e, t, r) => t.has(e) || W("Cannot " + r), kt = (e, t, r) => (M(e, t, "read from private field"), r ? r.call(e) : t.get(e)), yt = (e, t, r) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mt = (e, t, r, l) => (M(e, t, "write to private field"), t.set(e, r), r), v;
let f = class extends P {
  constructor() {
    super(...arguments), this.headerStyleId = "style-1", this.footerStyleId = "style-1", this._parts = {}, yt(this, v);
  }
  connectedCallback() {
    super.connectedCallback(), mt(this, v, et.subscribe((e) => this._parts = e));
  }
  disconnectedCallback() {
    var e;
    (e = kt(this, v)) == null || e.call(this), super.disconnectedCallback();
  }
  render() {
    const e = ot(this._parts);
    return u`
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
f.styles = E`
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
b([
  U({ type: String })
], f.prototype, "headerStyleId", 2);
b([
  U({ type: String })
], f.prototype, "footerStyleId", 2);
b([
  w()
], f.prototype, "_parts", 2);
f = b([
  T("style-tab-preview")
], f);
var bt = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, A = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? _t(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && bt(t, r, o), o;
}, xt = (e, t, r) => t.has(e) || V("Cannot " + r), $t = (e, t, r) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), St = (e, t, r) => (xt(e, t, "access private method"), r), S, F;
let k = class extends P {
  constructor() {
    super(...arguments), $t(this, S), this.value = "sm";
  }
  render() {
    return C`
			<uui-radio-group @input=${St(this, S, F)} value=${this.value}>
        <uui-radio name="size" label="Small" value="sm"></uui-radio>
        <uui-radio name="size" label="Medium" value="md"></uui-radio>
        <uui-radio name="size" label="Large" value="lg"></uui-radio>
			</uui-radio-group>
		`;
  }
};
S = /* @__PURE__ */ new WeakSet();
F = function(e) {
  this.value = e.target.value, this.dispatchEvent(new rt());
};
k.styles = [
  lt,
  O`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`
];
A([
  c()
], k.prototype, "value", 2);
k = A([
  d("ukf-size")
], k);
var wt = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, H = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? Pt(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && wt(t, r, o), o;
};
let y = class extends z {
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
    const { top: e, right: t, bottom: r, left: l } = this.value;
    return C`
      <div class="grid">
        <div></div>

        <button @click=${() => this.toggle("top")}>
          <div class="line top ${e ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("left")}>
          <div class="line left ${l ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("right")}>
          <div class="line right ${t ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("bottom")}>
          <div class="line bottom ${r ? "active" : ""}"></div>
        </button>

        <div></div>
      </div>
    `;
  }
};
y.styles = O`
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
], y.prototype, "value", 2);
y = H([
  d("ukf-border-position")
], y);
var Ot = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, D = (e, t, r, l) => {
  for (var o = l > 1 ? void 0 : l ? Ct(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (o = (l ? n(t, r, o) : n(o)) || o);
  return l && o && Ot(t, r, o), o;
}, It = (e, t, r) => t.has(e) || G("Cannot " + r), Dt = (e, t, r) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), a = (e, t, r) => (It(e, t, "access private method"), r), s, N, X, Y, Z, q, J, K, Q, tt;
let p = class extends P {
  constructor() {
    super(...arguments), Dt(this, s), this._headerStyleId = "style-1", this._footerStyleId = "style-1";
  }
  render() {
    return u`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${a(this, s, X).call(this)}
                ${a(this, s, K).call(this)}
                ${a(this, s, N).call(this)}                          
                ${a(this, s, Q).call(this)}
                ${a(this, s, tt).call(this)}
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
s = /* @__PURE__ */ new WeakSet();
N = function() {
  return u`
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
  return u`
            <ukf-accordion heading="Header">
                <div slot="content" class="accordion-content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${a(this, s, Y).call(this)}"
                                    @change=${a(this, s, q)}
                                >
                                </uui-select>
                            </ukf-control>
                            <ukf-control label="Collapsed">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Sticky">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Transparency">
                                <uui-toggle slot="control"></uui-toggle>
                            </ukf-control>
                            <ukf-control label="Full Width">
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
  return u`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${a(this, s, Z).call(this)}"
                                    @change=${a(this, s, J)}
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
  return u`
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
  return u`
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
p.styles = E`
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
D([
  w()
], p.prototype, "_headerStyleId", 2);
D([
  w()
], p.prototype, "_footerStyleId", 2);
p = D([
  T("ukindforge-style-settings-property-editor-ui")
], p);
export {
  p as default
};
//# sourceMappingURL=property-editor-ui-style-settings.element-B-wS1Ybf.js.map
