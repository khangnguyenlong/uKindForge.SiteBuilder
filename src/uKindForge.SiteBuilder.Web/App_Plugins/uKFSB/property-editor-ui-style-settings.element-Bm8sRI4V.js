import { LitElement as m, html as s, css as I, property as D, customElement as j, state as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { i as $, n as c, a as E, t as d } from "./ukf-color-group-CvM34Won.js";
import "./ukf-control-DNNEwrXp.js";
import { x as w } from "./lit-html-D3bFBl2C.js";
import "./ukf-footer-B3pvJtI1.js";
import { UmbChangeEvent as K } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as Q } from "@umbraco-cms/backoffice/style";
var tt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, z = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? et(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && tt(t, r, e), e;
};
let v = class extends E {
  constructor() {
    super(...arguments), this.headline = "";
  }
  render() {
    return w`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          <slot name="controls"></slot>
        </div>
      </uui-box>
    `;
  }
};
v.styles = $`
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
z([
  c({ type: String })
], v.prototype, "headline", 2);
v = z([
  d("ukf-control-group")
], v);
var ot = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, R = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? rt(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && ot(t, r, e), e;
};
let y = class extends m {
  constructor() {
    super(...arguments), this.title = "Buttons";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return s`
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
], y.prototype, "title", 2);
y = R([
  d("ukf-button")
], y);
var lt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, B = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? it(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && lt(t, r, e), e;
};
let k = class extends m {
  constructor() {
    super(...arguments), this.title = "Image";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return s`
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
], k.prototype, "title", 2);
k = B([
  d("ukf-image")
], k);
var nt = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, T = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? ut(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && nt(t, r, e), e;
};
let _ = class extends m {
  constructor() {
    super(...arguments), this.title = "Video";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return s`
      <div class="ukf-card">
        <div class="ukf-block-title">${this.title}</div>

        <div class="ukf-media">
          <div class="ukf-media__ph">Video Placeholder (16:9)</div>
        </div>
      </div>
    `;
  }
};
T([
  c({ type: String })
], _.prototype, "title", 2);
_ = T([
  d("ukf-video")
], _);
var st = Object.defineProperty, at = Object.getOwnPropertyDescriptor, P = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? at(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && st(t, r, e), e;
};
let h = class extends m {
  constructor() {
    super(...arguments), this.title = "Card Title", this.text = "Sample card content to preview typography, spacing, border and shadow.";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return s`
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
P([
  c({ type: String })
], h.prototype, "title", 2);
P([
  c({ type: String })
], h.prototype, "text", 2);
h = P([
  d("ukf-card")
], h);
var ct = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, O = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? dt(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && ct(t, r, e), e;
};
let f = class extends S {
  constructor() {
    super(...arguments), this.headerStyleId = "style-1", this.footerStyleId = "style-1";
  }
  render() {
    return s`
            <div>
                <ukf-header .styleId=${this.headerStyleId}></ukf-header>
                <ukf-footer .styleId=${this.footerStyleId}></ukf-footer>
                <ukf-button></ukf-button>
                <ukf-image></ukf-image>
                <ukf-video></ukf-video>
                <ukf-card></ukf-card>
            </div>
        `;
  }
};
f.styles = I`
        :host {
            display: block;
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
        }
    `;
O([
  D({ type: String })
], f.prototype, "headerStyleId", 2);
O([
  D({ type: String })
], f.prototype, "footerStyleId", 2);
f = O([
  j("style-tab-preview")
], f);
var ft = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, L = (o) => {
  throw TypeError(o);
}, V = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? pt(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && ft(t, r, e), e;
}, vt = (o, t, r) => t.has(o) || L("Cannot " + r), ht = (o, t, r) => t.has(o) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, r), gt = (o, t, r) => (vt(o, t, "access private method"), r), x, W;
let g = class extends S {
  constructor() {
    super(...arguments), ht(this, x), this.value = "sm";
  }
  render() {
    return w`
			<uui-radio-group @input=${gt(this, x, W)} value=${this.value}>
        <uui-radio name="size" label="Small" value="sm"></uui-radio>
        <uui-radio name="size" label="Medium" value="md"></uui-radio>
        <uui-radio name="size" label="Large" value="lg"></uui-radio>
			</uui-radio-group>
		`;
  }
};
x = /* @__PURE__ */ new WeakSet();
W = function(o) {
  this.value = o.target.value, this.dispatchEvent(new K());
};
g.styles = [
  Q,
  $`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`
];
V([
  c()
], g.prototype, "value", 2);
g = V([
  d("ukf-size")
], g);
var bt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, F = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? mt(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && bt(t, r, e), e;
};
let b = class extends E {
  constructor() {
    super(...arguments), this.value = {
      top: !1,
      right: !1,
      bottom: !1,
      left: !1
    };
  }
  toggle(o) {
    this.value = { ...this.value, [o]: !this.value[o] }, this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
  }
  render() {
    const { top: o, right: t, bottom: r, left: l } = this.value;
    return w`
      <div class="grid">
        <div></div>

        <button @click=${() => this.toggle("top")}>
          <div class="line top ${o ? "active" : ""}"></div>
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
b.styles = $`
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
F([
  c({ type: Object })
], b.prototype, "value", 2);
b = F([
  d("ukf-border-position")
], b);
var yt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, H = (o) => {
  throw TypeError(o);
}, C = (o, t, r, l) => {
  for (var e = l > 1 ? void 0 : l ? kt(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (l ? n(t, r, e) : n(e)) || e);
  return l && e && yt(t, r, e), e;
}, _t = (o, t, r) => t.has(o) || H("Cannot " + r), xt = (o, t, r) => t.has(o) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, r), a = (o, t, r) => (_t(o, t, "access private method"), r), u, M, A, G, N, X, Y, Z, q, J;
let p = class extends S {
  constructor() {
    super(...arguments), xt(this, u), this._headerStyleId = "style-1", this._footerStyleId = "style-1";
  }
  render() {
    return s`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${a(this, u, A).call(this)}
                ${a(this, u, Z).call(this)}
                ${a(this, u, M).call(this)}                          
                ${a(this, u, q).call(this)}
                ${a(this, u, J).call(this)}
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
u = /* @__PURE__ */ new WeakSet();
M = function() {
  return s`
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
A = function() {
  return s`
            <ukf-accordion heading="Header">
                <div slot="content" class="accordion-content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${a(this, u, G).call(this)}"
                                    @change=${a(this, u, X)}
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
G = function() {
  return ["style-1", "style-2", "style-3", "style-4", "style-5"].map((t) => ({
    name: t.replace("-", " ").toUpperCase(),
    value: t,
    selected: t === this._headerStyleId
  }));
};
N = function() {
  return ["style-1", "style-2", "style-3", "style-4", "style-5"].map((t) => ({
    name: t.replace("-", " ").toUpperCase(),
    value: t,
    selected: t === this._footerStyleId
  }));
};
X = function(o) {
  o.stopPropagation();
  const t = o.target.value;
  this._headerStyleId = t;
};
Y = function(o) {
  o.stopPropagation();
  const t = o.target.value;
  this._footerStyleId = t;
};
Z = function() {
  return s`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" 
                                    .options="${a(this, u, N).call(this)}"
                                    @change=${a(this, u, Y)}
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
q = function() {
  return s`
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
J = function() {
  return s`
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
p.styles = I`
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
C([
  U()
], p.prototype, "_headerStyleId", 2);
C([
  U()
], p.prototype, "_footerStyleId", 2);
p = C([
  j("ukindforge-style-settings-property-editor-ui")
], p);
export {
  p as default
};
//# sourceMappingURL=property-editor-ui-style-settings.element-Bm8sRI4V.js.map
