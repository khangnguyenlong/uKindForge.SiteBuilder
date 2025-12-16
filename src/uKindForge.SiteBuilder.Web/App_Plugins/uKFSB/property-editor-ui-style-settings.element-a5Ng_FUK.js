import { html as a, css as T, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { i as g, n as h, a as y, t as m } from "./ukf-color-group-CvM34Won.js";
import "./ukf-control-DNNEwrXp.js";
import { x as k } from "./lit-html-D3bFBl2C.js";
import "./color-style-tab-preview-ogm2XtWZ.js";
import { UmbChangeEvent as j } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
var W = Object.defineProperty, F = Object.getOwnPropertyDescriptor, x = (o, t, l, r) => {
  for (var e = r > 1 ? void 0 : r ? F(t, l) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (r ? n(t, l, e) : n(e)) || e);
  return r && e && W(t, l, e), e;
};
let c = class extends y {
  constructor() {
    super(...arguments), this.headline = "";
  }
  render() {
    return k`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          <slot name="controls"></slot>
        </div>
      </uui-box>
    `;
  }
};
c.styles = g`
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
x([
  h({ type: String })
], c.prototype, "headline", 2);
c = x([
  m("ukf-control-group")
], c);
var H = Object.defineProperty, M = Object.getOwnPropertyDescriptor, _ = (o) => {
  throw TypeError(o);
}, S = (o, t, l, r) => {
  for (var e = r > 1 ? void 0 : r ? M(t, l) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (r ? n(t, l, e) : n(e)) || e);
  return r && e && H(t, l, e), e;
}, R = (o, t, l) => t.has(o) || _("Cannot " + l), A = (o, t, l) => t.has(o) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, l), G = (o, t, l) => (R(o, t, "access private method"), l), p, w;
let d = class extends b {
  constructor() {
    super(...arguments), A(this, p), this.value = "sm";
  }
  render() {
    return k`
			<uui-radio-group @input=${G(this, p, w)} value=${this.value}>
        <uui-radio name="size" label="Small" value="sm"></uui-radio>
        <uui-radio name="size" label="Medium" value="md"></uui-radio>
        <uui-radio name="size" label="Large" value="lg"></uui-radio>
			</uui-radio-group>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
w = function(o) {
  this.value = o.target.value, this.dispatchEvent(new j());
};
d.styles = [
  I,
  g`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`
];
S([
  h()
], d.prototype, "value", 2);
d = S([
  m("ukf-size")
], d);
var V = Object.defineProperty, N = Object.getOwnPropertyDescriptor, $ = (o, t, l, r) => {
  for (var e = r > 1 ? void 0 : r ? N(t, l) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = (r ? n(t, l, e) : n(e)) || e);
  return r && e && V(t, l, e), e;
};
let f = class extends y {
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
    const { top: o, right: t, bottom: l, left: r } = this.value;
    return k`
      <div class="grid">
        <div></div>

        <button @click=${() => this.toggle("top")}>
          <div class="line top ${o ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("left")}>
          <div class="line left ${r ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("right")}>
          <div class="line right ${t ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("bottom")}>
          <div class="line bottom ${l ? "active" : ""}"></div>
        </button>

        <div></div>
      </div>
    `;
  }
};
f.styles = g`
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
$([
  h({ type: Object })
], f.prototype, "value", 2);
f = $([
  m("ukf-border-position")
], f);
var X = Object.getOwnPropertyDescriptor, O = (o) => {
  throw TypeError(o);
}, Y = (o, t, l, r) => {
  for (var e = r > 1 ? void 0 : r ? X(t, l) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (e = n(e) || e);
  return e;
}, Z = (o, t, l) => t.has(o) || O("Cannot " + l), q = (o, t, l) => t.has(o) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, l), s = (o, t, l) => (Z(o, t, "access private method"), l), u, P, C, E, z, U, B, D;
let v = class extends b {
  constructor() {
    super(...arguments), q(this, u);
  }
  render() {
    return a`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${s(this, u, C).call(this)}
                ${s(this, u, U).call(this)}
                ${s(this, u, P).call(this)}                          
                ${s(this, u, B).call(this)}
                ${s(this, u, D).call(this)}
            </div>
            <div slot="end">
                <color-style-tab-preview></color-style-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
u = /* @__PURE__ */ new WeakSet();
P = function() {
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
C = function() {
  return a`
            <ukf-accordion heading="Header">
                <div slot="content" class="accordion-content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" .options="${s(this, u, E).call(this)}">
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
E = function() {
  return [
    {
      name: "Style 1",
      value: "style1",
      selected: !0
    },
    {
      name: "Style 2",
      value: "style2"
    },
    {
      name: "Style 3",
      value: "style3"
    },
    {
      name: "Style 4",
      value: "style4"
    },
    {
      name: "Style 5",
      value: "style5"
    }
  ];
};
z = function() {
  return [
    {
      name: "Style 1",
      value: "style1",
      selected: !0
    },
    {
      name: "Style 2",
      value: "style2"
    },
    {
      name: "Style 3",
      value: "style3"
    },
    {
      name: "Style 4",
      value: "style4"
    },
    {
      name: "Style 5",
      value: "style5"
    }
  ];
};
U = function() {
  return a`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" .options="${s(this, u, z).call(this)}">
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
B = function() {
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
D = function() {
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
v.styles = T`
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
v = Y([
  L("ukindforge-style-settings-property-editor-ui")
], v);
export {
  v as default
};
//# sourceMappingURL=property-editor-ui-style-settings.element-a5Ng_FUK.js.map
