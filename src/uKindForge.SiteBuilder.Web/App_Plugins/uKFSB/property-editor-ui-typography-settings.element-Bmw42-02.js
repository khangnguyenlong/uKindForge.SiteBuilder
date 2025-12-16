import { css as x, property as U, customElement as P, html as v, LitElement as I } from "@umbraco-cms/backoffice/external/lit";
import { i as w, n as u, r as $, a as E, t as C } from "./ukf-color-group-CvM34Won.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { x as c } from "./lit-html-D3bFBl2C.js";
import "./ukf-control-DNNEwrXp.js";
import { UMB_NOTIFICATION_CONTEXT as A } from "@umbraco-cms/backoffice/notification";
import { UmbElementMixin as V } from "@umbraco-cms/backoffice/element-api";
var W = Object.defineProperty, B = Object.getOwnPropertyDescriptor, S = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? B(e, o) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (i = (s ? r(e, o, i) : r(i)) || i);
  return s && i && W(e, o, i), i;
};
let _ = class extends D {
  updated() {
    if (console.log("typography", this.typography), !this.typography) return;
    const t = this.typography.h1.font?.family;
    t && this.style.setProperty("--h1-font", `"${t}"`);
  }
  render() {
    return console.log("typography", this.typography), v`
            <h1 style="font-family: var(--h1-font)">Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Paragraph</p>
        `;
  }
};
_.styles = x`
    `;
S([
  U({ type: Object })
], _.prototype, "typography", 2);
_ = S([
  P("typography-tab-preview")
], _);
var M = Object.defineProperty, G = Object.getOwnPropertyDescriptor, L = (t) => {
  throw TypeError(t);
}, f = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? G(e, o) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (i = (s ? r(e, o, i) : r(i)) || i);
  return s && i && M(e, o, i), i;
}, J = (t, e, o) => e.has(t) || L("Cannot " + o), O = (t, e, o) => (J(t, e, "read from private field"), o ? o.call(t) : e.get(t)), R = (t, e, o) => e.has(t) ? L("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), g;
let p = class extends E {
  constructor() {
    super(...arguments), this.options = [], this.value = "", this.error = !1, this.query = "", this.open = !1, R(this, g, (t) => {
      this.open && (this.contains(t.target) || (this.open = !1));
    });
  }
  get filtered() {
    if (!this.open) return this.options;
    if (!this.query) return this.options;
    const t = this.query.toLowerCase();
    return this.options.filter((e) => e.label.toLowerCase().includes(t));
  }
  onSelect(t) {
    this.value = t.value, this.query = "", this.open = !1, this.error = !1, this.dispatchEvent(
      new CustomEvent("change", {
        detail: t.value,
        bubbles: !1,
        // prevent Umbraco error
        composed: !1
      })
    );
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", O(this, g));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", O(this, g));
  }
  render() {
    const t = this.options.find((e) => e.value === this.value)?.label || "Select...";
    return c`
      <uui-input
        .value=${this.open ? this.query : t}
        placeholder=${this.open ? "Search..." : ""}
        @input=${(e) => this.query = e.target.value}

        @click=${(e) => {
      e.stopPropagation(), this.open = !this.open, this.open && !this.value && (this.query = "");
    }}
      ></uui-input>

      ${this.open ? c`
            <div class="dropdown">
              ${this.filtered.length === 0 ? c`<div class="item" style="opacity:.6">No items found</div>` : this.filtered.map(
      (e) => c`
                      <div class="item" @click=${() => this.onSelect(e)}>
                        ${e.label}
                      </div>
                    `
    )}
            </div>
          ` : ""}
    `;
  }
};
g = /* @__PURE__ */ new WeakMap();
p.styles = w`
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
f([
  u({ type: Array })
], p.prototype, "options", 2);
f([
  u({ type: String })
], p.prototype, "value", 2);
f([
  u({ type: Boolean })
], p.prototype, "error", 2);
f([
  $()
], p.prototype, "query", 2);
f([
  $()
], p.prototype, "open", 2);
p = f([
  C("ukf-select-search")
], p);
var K = Object.defineProperty, X = Object.getOwnPropertyDescriptor, k = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? X(e, o) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (i = (s ? r(e, o, i) : r(i)) || i);
  return s && i && K(e, o, i), i;
};
let y = class extends E {
  constructor() {
    super(...arguments), this.fontList = [];
  }
  /** 
   * Get font object by font family 
   */
  get selectedFontObj() {
    return this.fontList.find((t) => t.family === this.font.family);
  }
  get variants() {
    return this.selectedFontObj?.variants ?? [];
  }
  //   private get category(): string {
  //     return this.selectedFontObj?.category ?? "";
  //   }
  //   private get fontFileUrl(): string {
  //     if (!this.font.variant) return "";
  //     return this.selectedFontObj?.files[this.font.variant] ?? "";
  //   }
  /** 
   * Load google font dynamically when variant changes
   */
  loadFont(t, e) {
    if (!t || !e) return;
    const o = "gf-" + t.replace(/\s+/g, "-") + "-" + this.font.variant;
    if (document.getElementById(o)) return;
    new FontFace(t, `url(${e})`).load().then((a) => {
      document.fonts.add(a);
    });
    const i = document.createElement("link");
    i.id = o, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${t.replace(
      /\s+/g,
      "+"
    )}:wght@${this.font.variant}&display=swap`, document.head.appendChild(i);
  }
  emitChange(t) {
    this.dispatchEvent(
      new CustomEvent("font-change", {
        detail: t,
        bubbles: !0,
        composed: !0
      })
    );
  }
  onFamilyChange(t) {
    this.emitChange({ family: t, variant: this.font.variant, error: !t });
  }
  onVariantChange(t) {
    const e = t.target.value;
    if (this.emitChange({ family: this.font.family, variant: e }), this.selectedFontObj) {
      const o = this.selectedFontObj.files[e];
      this.loadFont(this.selectedFontObj.family, o);
    }
  }
  render() {
    return c`
        <ukf-accordion heading=${this.font.family || "Choose Font"} 
        ?open=${this.font.selected}
        class=${this.font.error ? "error" : ""}
        >
            <div slot="content">
            <!-- Family -->
            <ukf-control label="Family">
                <ukf-select-search
                    slot="control"
                    .options=${this.fontList.map((t) => ({
      label: `${t.family}_${t.category}`,
      value: `${t.family}_${t.category}`,
      selected: `${this.font.family}_${this.font.variant}` == `${t.family}_${t.category}`
    }))}
                    .value=${this.font.family}
                    @change=${(t) => this.onFamilyChange(t.detail)}
                ></ukf-select-search>

            </ukf-control>

            <!-- Variant -->
            ${this.font.family ? c`
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
            ${this.font.family && this.font.variant ? c`
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
y.styles = w`
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
k([
  u({ type: Object })
], y.prototype, "font", 2);
k([
  u({ type: Array })
], y.prototype, "fontList", 2);
y = k([
  C("ukf-font-item")
], y);
var Z = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, z = (t) => {
  throw TypeError(t);
}, b = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? Q(e, o) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (i = (s ? r(e, o, i) : r(i)) || i);
  return s && i && Z(e, o, i), i;
}, T = (t, e, o) => e.has(t) || z("Cannot " + o), Y = (t, e, o) => (T(t, e, "read from private field"), e.get(t)), tt = (t, e, o) => e.has(t) ? z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), et = (t, e, o, s) => (T(t, e, "write to private field"), e.set(t, o), o), m;
let d = class extends D {
  constructor() {
    super(), this.isDefaultValue = !1, this.selectedFonts = [], this.fontList = [], tt(this, m), this.consumeContext(A, (t) => {
      et(this, m, t);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.loadFontJson(), this.isDefaultValue && this.addDefaultFont();
  }
  async loadFontJson() {
    try {
      const e = await (await fetch("/App_Plugins/uKFSB/assets/google-web-fonts.json")).json();
      this.fontList = e.items;
    } catch (t) {
      console.error("Failed to load google-fonts.json", t);
    }
  }
  addDefaultFont() {
    this.selectedFonts = [
      ...this.selectedFonts,
      {
        family: "Roboto",
        category: "sans-serif",
        variant: "regular",
        selected: !0
      }
    ], this.dispatchFontChange();
  }
  addNewFont() {
    this.selectedFonts = [
      ...this.selectedFonts,
      {
        family: "",
        category: "",
        variant: "regular",
        selected: !0,
        error: !0
      }
    ], this.dispatchFontChange();
  }
  updateFont(t, e) {
    const o = [...this.selectedFonts], s = { ...o[t], ...e }, i = this.selectedFonts.some(
      (a, r) => r !== t && a.family === s.family && a.variant === s.variant
    );
    if (i) {
      const a = { data: { headline: "Duplicate Font", message: `${s.family} (${s.variant}) is already selected.` } };
      Y(this, m)?.peek("danger", a), this.dispatchEvent(new CustomEvent("font-error", {
        detail: !0,
        bubbles: !0,
        composed: !0
      }));
    }
    s.error = i || !s.family || !s.variant, o[t] = s, this.selectedFonts = o, this.dispatchFontChange();
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
    return c`
      <div class="list">
        ${this.selectedFonts.map(
      (t, e) => c`
            <ukf-font-item
              .font=${t}
              .fontList=${this.fontList}
              @font-change=${(o) => this.updateFont(e, o.detail)}
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
m = /* @__PURE__ */ new WeakMap();
d.styles = w`
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
b([
  u({ type: Boolean })
], d.prototype, "isDefaultValue", 2);
b([
  $()
], d.prototype, "selectedFonts", 2);
b([
  $()
], d.prototype, "fontList", 2);
d = b([
  C("ukf-font-picker")
], d);
var ot = Object.getOwnPropertyDescriptor, H = (t) => {
  throw TypeError(t);
}, it = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? ot(e, o) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (i = r(i) || i);
  return i;
}, st = (t, e, o) => e.has(t) || H("Cannot " + o), at = (t, e, o) => e.has(t) ? H("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), l = (t, e, o) => (st(t, e, "access private method"), o), n, q, j, N, h;
let F = class extends V(I) {
  constructor() {
    super(...arguments), at(this, n), this._fonts = [], this._typography = {
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
    super.connectedCallback(), this.addEventListener("ukf-font-change", (t) => {
      this._fonts = t.detail, this.requestUpdate();
    });
  }
  getValue() {
    return this._typography;
  }
  render() {
    return v`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${l(this, n, q).call(this)}
                ${l(this, n, j).call(this)}                        
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
n = /* @__PURE__ */ new WeakSet();
q = function() {
  return v`
            <ukf-accordion heading="Font">
                <div slot="content" class="accordion-content">
                    <ukf-font-picker .isDefaultValue=${!0}></ukf-font-picker>
                </div>
            </ukf-accordion>
        `;
};
j = function() {
  return v`
            ${l(this, n, h).call(this, "Heading 1", "h1")}
            ${l(this, n, h).call(this, "Heading 2", "h2")}
            ${l(this, n, h).call(this, "Heading 3", "h3")}
            ${l(this, n, h).call(this, "Heading 4", "h4")}
            ${l(this, n, h).call(this, "Heading 5", "h5")}
            ${l(this, n, h).call(this, "Heading 6", "h6")}
            ${l(this, n, h).call(this, "Paragraph", "paragraph")}
        `;
};
N = function(t, e) {
  const o = t.target.value, s = this._fonts.find((i) => i.family === o);
  this._typography[e].font = s ?? null, this.requestUpdate();
};
h = function(t, e) {
  return v`
            <ukf-accordion heading="${t}">
                <div slot="content">
                
                    <!-- FONT DROPDOWN -->
                    <ukf-control label="Choose Font">
                        <uui-select
                            slot="control"
                            .options=${this._fonts.map((o) => ({
    name: o.family,
    value: o.family,
    selected: o.family == this._typography.h1.font?.family
  }))}
                            @change=${(o) => l(this, n, N).call(this, o, e)}
                        ></uui-select>
                    </ukf-control>

                    <!-- SIZE -->
                    <ukf-control label="Size">
                        <uui-slider
                            slot="control"
                            min="8"
                            max="128"
                            .value=${this._typography[e].size}
                            @input=${(o) => this._typography[e].size = Number(o.target.value)}
                        ></uui-slider>
                    </ukf-control>

                    <!-- SPACING -->
                    <ukf-control label="Spacing">
                        <uui-slider
                            slot="control"
                            min="0"
                            max="20"
                            .value=${this._typography[e].spacing}
                            @input=${(o) => this._typography[e].spacing = Number(o.target.value)}
                        ></uui-slider>
                    </ukf-control>

                </div>
            </ukf-accordion>
        `;
};
F.styles = x`
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
F = it([
  P("ukindforge-typography-settings-property-editor-ui")
], F);
export {
  F as default
};
//# sourceMappingURL=property-editor-ui-typography-settings.element-Bmw42-02.js.map
