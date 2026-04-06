import { css as H, property as Z, customElement as U, html as $, LitElement as Q } from "@umbraco-cms/backoffice/external/lit";
import { i as P, n as g, r as k, a as j, t as O } from "./ukf-color-group-CvM34Won.js";
import { UmbLitElement as q } from "@umbraco-cms/backoffice/lit-element";
import { x as p } from "./lit-html-D3bFBl2C.js";
import "./ukf-control-DNNEwrXp.js";
import { UMB_NOTIFICATION_CONTEXT as Y } from "@umbraco-cms/backoffice/notification";
import { UmbElementMixin as tt } from "@umbraco-cms/backoffice/element-api";
const A = Symbol.for(""), et = (e) => {
  if (e?.r === A) return e?._$litStatic$;
}, at = (e) => ({ _$litStatic$: e, r: A }), L = /* @__PURE__ */ new Map(), it = (e) => (t, ...a) => {
  const o = a.length;
  let i, s;
  const n = [], r = [];
  let C, h = 0, T = !1;
  for (; h < o; ) {
    for (C = t[h]; h < o && (s = a[h], (i = et(s)) !== void 0); ) C += i + t[++h], T = !0;
    h !== o && r.push(s), n.push(C), h++;
  }
  if (h === o && n.push(t[o]), T) {
    const z = n.join("$$lit$$");
    (t = L.get(z)) === void 0 && (n.raw = n, L.set(z, t = n)), a = r;
  }
  return e(t, ...a);
}, ot = it(p);
var st = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, N = (e) => {
  throw TypeError(e);
}, W = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? nt(t, a) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (i = (o ? n(t, a, i) : n(i)) || i);
  return o && i && st(t, a, i), i;
}, rt = (e, t, a) => t.has(e) || N("Cannot " + a), lt = (e, t, a) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), ct = (e, t, a) => (rt(e, t, "access private method"), a), x, V;
let f = class extends q {
  constructor() {
    super(...arguments), lt(this, x);
  }
  updated() {
    if (console.log("typography", this.typography), !this.typography) return;
    const e = this.typography.h1.font?.family;
    e && this.style.setProperty("--h1-font", `"${e}"`);
  }
  render() {
    const e = this.typography;
    return $`
            ${f.PREVIEW_ITEMS.map(({ key: t, tag: a, text: o }) => {
      const i = e?.[t], s = i?.font?.family ? `"${i.font.family}"` : "inherit", n = i?.size ? `${i.size}px` : "inherit", r = i?.spacing ? `${i.spacing}px` : "normal";
      return ct(this, x, V).call(this, a, o, s, n, r);
    })}
        `;
  }
};
x = /* @__PURE__ */ new WeakSet();
V = function(e, t, a, o, i) {
  const s = at(e);
  return ot`
        <${s} style="font-family:${a}; font-size:${o}; letter-spacing:${i};">
            ${t}
        </${s}>
    `;
};
f.PREVIEW_ITEMS = [
  { key: "h1", tag: "h1", text: "Heading 1" },
  { key: "h2", tag: "h2", text: "Heading 2" },
  { key: "h3", tag: "h3", text: "Heading 3" },
  { key: "h4", tag: "h4", text: "Heading 4" },
  { key: "h5", tag: "h5", text: "Heading 5" },
  { key: "h6", tag: "h6", text: "Heading 6" },
  { key: "paragraph", tag: "p", text: "Paragraph" }
];
f.styles = H`
        :host {
            display: block;
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
        }
    `;
W([
  Z({ type: Object })
], f.prototype, "typography", 2);
f = W([
  U("typography-tab-preview")
], f);
var pt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, v = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? ht(t, a) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (i = (o ? n(t, a, i) : n(i)) || i);
  return o && i && pt(t, a, i), i;
}, dt = (e, t, a) => t.has(e) || M("Cannot " + a), D = (e, t, a) => (dt(e, t, "read from private field"), a ? a.call(e) : t.get(e)), ut = (e, t, a) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), _;
let u = class extends j {
  constructor() {
    super(...arguments), this.options = [], this.value = "", this.error = !1, this.query = "", this.open = !1, ut(this, _, (e) => {
      this.open && (this.contains(e.target) || (this.open = !1));
    });
  }
  get filtered() {
    if (!this.open) return this.options;
    if (!this.query) return this.options;
    const e = this.query.toLowerCase();
    return this.options.filter((t) => t.label.toLowerCase().includes(e));
  }
  onSelect(e) {
    this.value = e.value, this.query = "", this.open = !1, this.error = !1, this.dispatchEvent(
      new CustomEvent("change", {
        detail: e.value,
        bubbles: !1,
        // prevent Umbraco error
        composed: !1
      })
    );
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", D(this, _));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", D(this, _));
  }
  render() {
    const e = this.options.find((t) => t.value === this.value)?.label || "Select...";
    return p`
      <uui-input
        .value=${this.open ? this.query : e}
        placeholder=${this.open ? "Search..." : ""}
        @input=${(t) => this.query = t.target.value}

        @click=${(t) => {
      t.stopPropagation(), this.open = !this.open, this.open && !this.value && (this.query = "");
    }}
      ></uui-input>

      ${this.open ? p`
            <div class="dropdown">
              ${this.filtered.length === 0 ? p`<div class="item" style="opacity:.6">No items found</div>` : this.filtered.map(
      (t) => p`
                      <div class="item" @click=${() => this.onSelect(t)}>
                        ${t.label}
                      </div>
                    `
    )}
            </div>
          ` : ""}
    `;
  }
};
_ = /* @__PURE__ */ new WeakMap();
u.styles = P`
    :host {
      display: block;
      position: relative;
    }

    :host([error]) uui-input {
      --uui-color-border: #e00000;
    }

    .dropdown {
      position: absolute;
      z-index: 1000;
      width: 100%;
      max-height: 240px;
      overflow-y: auto;
      background: var(--uui-color-surface);
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      box-shadow: var(--uui-shadow-depth-3);
      padding: 4px;
      margin-top: 4px;
    }

    .item {
      padding: 6px 10px;
      cursor: pointer;
      border-radius: var(--uui-border-radius);
    }

    .item:hover {
      background: var(--uui-color-interactive-muted);
    }
  `;
v([
  g({ type: Array })
], u.prototype, "options", 2);
v([
  g({ type: String })
], u.prototype, "value", 2);
v([
  g({ type: Boolean })
], u.prototype, "error", 2);
v([
  k()
], u.prototype, "query", 2);
v([
  k()
], u.prototype, "open", 2);
u = v([
  O("ukf-select-search")
], u);
var ft = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, S = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? yt(t, a) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (i = (o ? n(t, a, i) : n(i)) || i);
  return o && i && ft(t, a, i), i;
};
let m = class extends j {
  constructor() {
    super(...arguments), this.fontList = [];
  }
  get variants() {
    return this.selectedFontObj?.variants ?? [];
  }
  get selectedFontObj() {
    return this.fontList.find((e) => `${e.family}` == `${this.font.family}`);
  }
  loadFont(e, t) {
    if (!e || !t) return;
    const a = "gf-" + e.replace(/\s+/g, "-") + "-" + this.font.variant;
    if (document.getElementById(a)) return;
    new FontFace(e, `url(${t})`).load().then((s) => {
      document.fonts.add(s);
    });
    const i = document.createElement("link");
    i.id = a, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${e.replace(
      /\s+/g,
      "+"
    )}:wght@${this.font.variant}&display=swap`, document.head.appendChild(i);
  }
  emitChange(e) {
    const t = e.family ?? this.font.family ?? "", a = this.fontList.find((o) => `${o.family}` == `${t}`)?.category ?? this.font.category ?? "";
    this.dispatchEvent(
      new CustomEvent("font-change", {
        detail: {
          ...e,
          category: a
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  onFamilyChange(e) {
    this.emitChange({
      family: e,
      variant: "regular",
      error: !1
    });
  }
  onVariantChange(e) {
    const t = e.target.value;
    if (this.emitChange({ family: this.font.family, variant: t }), this.selectedFontObj) {
      const a = this.selectedFontObj.files[t];
      this.loadFont(this.selectedFontObj.family, a);
    }
  }
  render() {
    const e = `${this.font.family} - ${this.font.category} - ${this.font.variant}`;
    return p`
        <ukf-accordion heading=${e || "Choose Font"} 
        ?open=${this.font.selected}
        class=${this.font.error ? "error" : ""}
        >
            <div slot="content">
            <!-- Family -->
            <ukf-control label="Family">
                <ukf-select-search
                    slot="control"
                    .options=${this.fontList.map((t) => ({
      label: `${t.family} - ${t.category}`,
      value: `${t.family}`,
      selected: `${this.font.family}` == `${t.family}`
    }))}
                    .value=${this.font.family}
                    @change=${(t) => this.onFamilyChange(t.detail)}
                ></ukf-select-search>

            </ukf-control>

            <!-- Variant -->
            ${this.font.family ? p`
                <ukf-control label="Variant">
                    <uui-select
                        slot="control"
                        @change=${this.onVariantChange}
                        .options=${this.variants.map((t) => ({
      name: t,
      value: t,
      selected: this.font.variant === t
    }))}
                    >
                    </uui-select>
                </ukf-control>
                ` : ""}

            <!-- Preview -->
            ${this.font.family && this.font.variant ? p`
                <div
                class="preview"
                style="font-family: '${this.font.family}', sans-serif;"
                >
                The quick brown fox jumps over the lazy dog.
                </div>
            ` : ""}
            </div>
        </ukf-accordion>
    `;
  }
};
m.styles = P`
    :host {
      display: block;
    }
    ukf-accordion.error {
        --uui-color-border: red;
    }
    .preview {
      padding: 12px;
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      margin-top: 8px;
      font-size: 30px;
      line-height: 1.4;
    }
  `;
S([
  g({ type: Object })
], m.prototype, "font", 2);
S([
  g({ type: Array })
], m.prototype, "fontList", 2);
m = S([
  O("ukf-font-item")
], m);
const I = () => crypto.randomUUID();
var gt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, w = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? vt(t, a) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (i = (o ? n(t, a, i) : n(i)) || i);
  return o && i && gt(t, a, i), i;
}, R = (e, t, a) => t.has(e) || B("Cannot " + a), mt = (e, t, a) => (R(e, t, "read from private field"), t.get(e)), $t = (e, t, a) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), _t = (e, t, a, o) => (R(e, t, "write to private field"), t.set(e, a), a), b;
let y = class extends q {
  constructor() {
    super(), this.isDefaultValue = !1, this.selectedFonts = [
      {
        id: I(),
        family: "Roboto",
        category: "sans-serif",
        variant: "regular",
        selected: !0
      }
    ], this.fontList = [], $t(this, b), this.consumeContext(Y, (e) => {
      _t(this, b, e);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.loadFontJson(), this.dispatchFontChange();
  }
  async loadFontJson() {
    try {
      const t = await (await fetch("/App_Plugins/uKFSB/assets/google-web-fonts.json")).json();
      this.fontList = t.items;
    } catch (e) {
      console.error("Failed to load google-fonts.json", e);
    }
  }
  addNewFont() {
    this.selectedFonts = [
      ...this.selectedFonts,
      {
        id: I(),
        family: "",
        category: "",
        variant: "regular",
        selected: !0,
        error: !0
      }
    ], this.dispatchFontChange();
  }
  updateFont(e, t) {
    const a = [...this.selectedFonts], o = { ...a[e], ...t }, i = this.selectedFonts.some(
      (s, n) => n !== e && s.family === o.family && s.variant === o.variant
    );
    if (i) {
      const s = { data: { headline: "Duplicate Font", message: `${o.family} (${o.variant}) is already selected.` } };
      mt(this, b)?.peek("danger", s), this.dispatchEvent(new CustomEvent("font-error", {
        detail: !0,
        bubbles: !0,
        composed: !0
      }));
    }
    o.error = i || !o.family || !o.variant, a[e] = o, this.selectedFonts = a, this.dispatchFontChange();
  }
  dispatchFontChange() {
    this.dispatchEvent(
      new CustomEvent("ukf-font-change", {
        detail: this.selectedFonts,
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return p`
      <div class="list">
        ${this.selectedFonts.map(
      (e, t) => p`
            <ukf-font-item
              .font=${e}
              .fontList=${this.fontList}
              @font-change=${(a) => this.updateFont(t, a.detail)}
            >
            </ukf-font-item>
          `
    )}
      </div>

      <uui-button
        class="add-btn"
        look="primary"
        @click=${this.addNewFont}
      >
        Add font
      </uui-button>      
    `;
  }
};
b = /* @__PURE__ */ new WeakMap();
y.styles = P`
    :host {
      display: block;
    }
    .add-btn {
      margin-bottom: var(--uui-size-space-4);
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  `;
w([
  g({ type: Boolean })
], y.prototype, "isDefaultValue", 2);
w([
  k()
], y.prototype, "selectedFonts", 2);
w([
  k()
], y.prototype, "fontList", 2);
y = w([
  O("ukf-font-picker")
], y);
var bt = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, Ft = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? bt(t, a) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (i = n(i) || i);
  return i;
}, kt = (e, t, a) => t.has(e) || G("Cannot " + a), wt = (e, t, a) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), c = (e, t, a) => (kt(e, t, "access private method"), a), l, J, K, X, F, d;
let E = class extends tt(Q) {
  constructor() {
    super(...arguments), wt(this, l), this._fonts = [], this._availableFonts = [], this._typography = {
      h1: { font: null, size: 32, spacing: 0 },
      h2: { font: null, size: 28, spacing: 0 },
      h3: { font: null, size: 24, spacing: 0 },
      h4: { font: null, size: 20, spacing: 0 },
      h5: { font: null, size: 18, spacing: 0 },
      h6: { font: null, size: 16, spacing: 0 },
      paragraph: { font: null, size: 14, spacing: 0 }
    };
  }
  /** FONT PICKER event listener */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("ukf-font-change", (e) => {
      this._fonts = Array.isArray(e.detail) ? e.detail : [], this._availableFonts = this._fonts.filter((a) => !!a.family && !!a.variant && !a.error);
      const t = this._availableFonts[0] ?? null;
      t && Object.keys(this._typography).forEach((a) => {
        this._typography[a].font || (this._typography[a].font = t);
      }), Object.keys(this._typography).forEach((a) => {
        const o = this._typography[a].font;
        if (!o?.id) return;
        const i = this._fonts.find((s) => s.id === o.id);
        i && (this._typography[a].font = i);
      }), this.requestUpdate();
    });
  }
  getValue() {
    return this._typography;
  }
  render() {
    return $`
        <umb-split-panel class="tab-content" position="40%">
            <div slot="start">
                ${c(this, l, J).call(this)}
                ${c(this, l, K).call(this)}                        
            </div>
            <div slot="end">
                <typography-tab-preview
                    .typography=${{ ...this._typography }}
                ></typography-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
l = /* @__PURE__ */ new WeakSet();
J = function() {
  return $`
            <ukf-accordion heading="Font">
                <div slot="content" class="accordion-content">
                    <ukf-font-picker .isDefaultValue=${!0}></ukf-font-picker>
                </div>
            </ukf-accordion>
        `;
};
K = function() {
  return $`
            ${c(this, l, d).call(this, "Heading 1", "h1")}
            ${c(this, l, d).call(this, "Heading 2", "h2")}
            ${c(this, l, d).call(this, "Heading 3", "h3")}
            ${c(this, l, d).call(this, "Heading 4", "h4")}
            ${c(this, l, d).call(this, "Heading 5", "h5")}
            ${c(this, l, d).call(this, "Heading 6", "h6")}
            ${c(this, l, d).call(this, "Paragraph", "paragraph")}
        `;
};
X = function(e, t) {
  e.stopPropagation();
  const a = e.target.value, o = this._availableFonts.find((i) => i.id === a) ?? null;
  c(this, l, F).call(this, t, { font: o });
};
F = function(e, t) {
  this._typography = {
    ...this._typography,
    [e]: {
      ...this._typography[e],
      ...t
    }
  }, this.requestUpdate();
};
d = function(e, t) {
  const a = this._typography[t].font, o = a ? `${e}: ${a.family} - ${a.category} - ${a.variant}` : e, i = this._typography[t].font?.id ?? "", s = [...this._availableFonts], n = this._typography[t].font;
  return n && !s.some((r) => r.id === i) && s.unshift(n), $`
            <ukf-accordion heading="${o}">
                <div slot="content">
                
                    <!-- FONT DROPDOWN -->
                    <ukf-control label="Choose Font">
                        <uui-select
                            slot="control"
                            .options=${s.map((r) => ({
    name: `${r.family} - ${r.category} - ${r.variant}`,
    value: r.id,
    selected: r.id === i
  }))}
                            @change=${(r) => c(this, l, X).call(this, r, t)}
                        ></uui-select>
                    </ukf-control>

                    <!-- SIZE -->
                    <ukf-control label="Size">
                        <uui-slider
                            slot="control"
                            min="8"
                            max="128"
                            .value=${this._typography[t].size}
                            @input=${(r) => {
    r.stopPropagation(), c(this, l, F).call(this, t, { size: Number(r.target.value) });
  }}

                        ></uui-slider>
                    </ukf-control>

                    <!-- SPACING -->
                    <ukf-control label="Spacing">
                        <uui-slider
                            slot="control"
                            min="0"
                            max="20"
                            .value=${this._typography[t].spacing}
                            @input=${(r) => {
    r.stopPropagation(), c(this, l, F).call(this, t, { spacing: Number(r.target.value) });
  }}
                        ></uui-slider>
                    </ukf-control>

                </div>
            </ukf-accordion>
        `;
};
E.styles = H`
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
E = Ft([
  U("ukindforge-typography-settings-property-editor-ui")
], E);
export {
  E as default
};
//# sourceMappingURL=property-editor-ui-typography-settings.element-Cxix495j.js.map
