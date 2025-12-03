import { css as w, customElement as B, html as s, when as N, state as Fe } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { B as Le, T as Ae, x as l } from "./lit-html-D3bFBl2C.js";
import { UmbChangeEvent as je } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as ze } from "@umbraco-cms/backoffice/style";
const U = globalThis, X = U.ShadowRoot && (U.ShadyCSS === void 0 || U.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Z = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let le = class {
  constructor(e, o, i) {
    if (this._$cssResult$ = !0, i !== Z) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = o;
  }
  get styleSheet() {
    let e = this.o;
    const o = this.t;
    if (X && e === void 0) {
      const i = o !== void 0 && o.length === 1;
      i && (e = ie.get(o)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && ie.set(o, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ie = (t) => new le(typeof t == "string" ? t : t + "", void 0, Z), v = (t, ...e) => {
  const o = t.length === 1 ? t[0] : e.reduce(((i, r, n) => i + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + t[n + 1]), t[0]);
  return new le(o, t, Z);
}, Re = (t, e) => {
  if (X) t.adoptedStyleSheets = e.map(((o) => o instanceof CSSStyleSheet ? o : o.styleSheet));
  else for (const o of e) {
    const i = document.createElement("style"), r = U.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = o.cssText, t.appendChild(i);
  }
}, ne = X ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let o = "";
  for (const i of e.cssRules) o += i.cssText;
  return Ie(o);
})(t) : t;
const { is: Ne, defineProperty: qe, getOwnPropertyDescriptor: We, getOwnPropertyNames: Ve, getOwnPropertySymbols: Ge, getPrototypeOf: Ke } = Object, z = globalThis, ae = z.trustedTypes, Je = ae ? ae.emptyScript : "", Ye = z.reactiveElementPolyfillSupport, T = (t, e) => t, D = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Je : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let o = t;
  switch (e) {
    case Boolean:
      o = t !== null;
      break;
    case Number:
      o = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        o = JSON.parse(t);
      } catch {
        o = null;
      }
  }
  return o;
} }, Q = (t, e) => !Ne(t, e), se = { attribute: !0, type: String, converter: D, reflect: !1, useDefault: !1, hasChanged: Q };
Symbol.metadata ??= Symbol("metadata"), z.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class $ extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, o = se) {
    if (o.state && (o.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((o = Object.create(o)).wrapped = !0), this.elementProperties.set(e, o), !o.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(e, i, o);
      r !== void 0 && qe(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, o, i) {
    const { get: r, set: n } = We(this.prototype, e) ?? { get() {
      return this[o];
    }, set(a) {
      this[o] = a;
    } };
    return { get: r, set(a) {
      const u = r?.call(this);
      n?.call(this, a), this.requestUpdate(e, u, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? se;
  }
  static _$Ei() {
    if (this.hasOwnProperty(T("elementProperties"))) return;
    const e = Ke(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(T("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(T("properties"))) {
      const o = this.properties, i = [...Ve(o), ...Ge(o)];
      for (const r of i) this.createProperty(r, o[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const o = litPropertyMetadata.get(e);
      if (o !== void 0) for (const [i, r] of o) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [o, i] of this.elementProperties) {
      const r = this._$Eu(o, i);
      r !== void 0 && this._$Eh.set(r, o);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const o = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const r of i) o.unshift(ne(r));
    } else e !== void 0 && o.push(ne(e));
    return o;
  }
  static _$Eu(e, o) {
    const i = o.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), o = this.constructor.elementProperties;
    for (const i of o.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Re(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, o, i) {
    this._$AK(e, i);
  }
  _$ET(e, o) {
    const i = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (i.converter?.toAttribute !== void 0 ? i.converter : D).toAttribute(o, i.type);
      this._$Em = e, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(e, o) {
    const i = this.constructor, r = i._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : D;
      this._$Em = r;
      const u = a.fromAttribute(o, n.type);
      this[r] = u ?? this._$Ej?.get(r) ?? u, this._$Em = null;
    }
  }
  requestUpdate(e, o, i) {
    if (e !== void 0) {
      const r = this.constructor, n = this[e];
      if (i ??= r.getPropertyOptions(e), !((i.hasChanged ?? Q)(n, o) || i.useDefault && i.reflect && n === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, i)))) return;
      this.C(e, o, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, o, { useDefault: i, reflect: r, wrapped: n }, a) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? o ?? this[e]), n !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (o = void 0), this._$AL.set(e, o)), r === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (o) {
      Promise.reject(o);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) {
        const { wrapped: a } = n, u = this[r];
        a !== !0 || this._$AL.has(r) || u === void 0 || this.C(r, void 0, n, u);
      }
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(o)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(o);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((o) => o.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach(((o) => this._$ET(o, this[o]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
$.elementStyles = [], $.shadowRootOptions = { mode: "open" }, $[T("elementProperties")] = /* @__PURE__ */ new Map(), $[T("finalized")] = /* @__PURE__ */ new Map(), Ye?.({ ReactiveElement: $ }), (z.reactiveElementVersions ??= []).push("2.1.1");
const ee = globalThis;
class d extends $ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Le(o, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Ae;
  }
}
d._$litElement$ = !0, d.finalized = !0, ee.litElementHydrateSupport?.({ LitElement: d });
const Xe = ee.litElementPolyfillSupport;
Xe?.({ LitElement: d });
(ee.litElementVersions ??= []).push("4.2.1");
const m = (t) => (e, o) => {
  o !== void 0 ? o.addInitializer((() => {
    customElements.define(t, e);
  })) : customElements.define(t, e);
};
const Ze = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: Q }, Qe = (t = Ze, e, o) => {
  const { kind: i, metadata: r } = o;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), n.set(o.name, t), i === "accessor") {
    const { name: a } = o;
    return { set(u) {
      const R = e.get.call(this);
      e.set.call(this, u), this.requestUpdate(a, R, t);
    }, init(u) {
      return u !== void 0 && this.C(a, void 0, t, u), u;
    } };
  }
  if (i === "setter") {
    const { name: a } = o;
    return function(u) {
      const R = this[a];
      e.call(this, u), this.requestUpdate(a, R, t);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function c(t) {
  return (e, o) => typeof o == "object" ? Qe(t, e, o) : ((i, r, n) => {
    const a = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i), a ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(t, e, o);
}
function C(t) {
  return c({ ...t, state: !0, attribute: !1 });
}
var et = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, I = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? tt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && et(e, o, r), r;
};
let S = class extends d {
  constructor() {
    super(), this.heading = "", this.open = !1, this._isOpen = !1, this._isOpen = this.open;
  }
  firstUpdated() {
    this._isOpen = this.open;
  }
  toggle() {
    this._isOpen = !this._isOpen;
  }
  render() {
    return l`
    <div class="accordion">

      <!-- HEADER -->
      <button class="accordion-header" @click=${this.toggle}>
        <uui-label>${this.heading}</uui-label>
        <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
      </button>

      <!-- BODY -->
      ${this._isOpen ? l`
            <div class="accordion-body">
              <slot name="content"></slot>
            </div>
          ` : null}
    </div>
  `;
  }
};
S.styles = v`
    :host {
      display: block;
      padding: var(--uui-size-space-4) 0;
    }

    .accordion {
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      background: var(--uui-color-surface);
    }

    .accordion-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      padding: var(--uui-size-space-4) var(--uui-size-space-5);
      background: none;
      border: none;
      border-bottom: 1px solid var(--uui-color-border);
      font-family: inherit;
    }

    .accordion-body {
      padding: var(--uui-size-space-4) var(--uui-size-space-5);
    }

  `;
I([
  c({ type: String })
], S.prototype, "heading", 2);
I([
  c({ type: Boolean, reflect: !0 })
], S.prototype, "open", 2);
I([
  C()
], S.prototype, "_isOpen", 2);
S = I([
  m("ukf-accordion")
], S);
var ot = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, te = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? rt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && ot(e, o, r), r;
};
let P = class extends d {
  constructor() {
    super(...arguments), this.headline = "", this.items = [];
  }
  render() {
    return l`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          ${this.items.map((t) => l`
            <div class="color-item">
              <uui-color-picker id=${t.id}></uui-color-picker>
              <span>${t.label}</span>
            </div>
          `)}
        </div>
      </uui-box>
    `;
  }
};
P.styles = v`
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

    .color-item {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1 1 180px;
    }

    .color-item uui-color-picker {
      flex-shrink: 0;
    }

    uui-color-picker {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-width: fit-content;
    }

    uui-color-picker::part(input) {
      width: auto;
    }
  `;
te([
  c({ type: String })
], P.prototype, "headline", 2);
te([
  c({ type: Array })
], P.prototype, "items", 2);
P = te([
  m("ukf-color-group")
], P);
var it = Object.getOwnPropertyDescriptor, nt = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? it(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = a(r) || r);
  return r;
};
let q = class extends _ {
  render() {
    return s`
            <p>Style Tab Preview</p>
        `;
  }
};
q.styles = w`
    `;
q = nt([
  B("color-style-tab-preview")
], q);
const at = [
  {
    name: "Primary",
    items: [
      { id: "PrimaryMain", label: "Main" },
      { id: "PrimaryShade", label: "Shade" },
      { id: "PrimaryTint", label: "Tint" },
      { id: "PrimaryTextOnMain", label: "Text on Main" }
    ]
  },
  {
    name: "Accent",
    items: [
      { id: "AccentMain", label: "Main" },
      { id: "AccentShade", label: "Shade" },
      { id: "AccentTint", label: "Tint" },
      { id: "AccentTextOnMain", label: "Text on Main" }
    ]
  },
  {
    name: "Neutral Light",
    items: [
      { id: "NeutralLightBackground", label: "Background" },
      { id: "NeutralLightSurface", label: "Surface" },
      { id: "NeutralLightText", label: "Text" },
      { id: "NeutralLightTextMuted", label: "Text Muted" },
      { id: "NeutralLightBorder", label: "Border" }
    ]
  },
  {
    name: "Neutral Dark",
    items: [
      { id: "NeutralDarkBackground", label: "Background" },
      { id: "NeutralDarkSurface", label: "Surface" },
      { id: "NeutralDarkText", label: "Text" },
      { id: "NeutralDarkTextMuted", label: "Text Muted" },
      { id: "NeutralDarkBorder", label: "Border" }
    ]
  },
  {
    name: "Semantic",
    items: [
      { id: "SemanticDanger", label: "Danger" },
      { id: "SemanticWarning", label: "Warning" },
      { id: "SemanticSuccess", label: "Success" },
      { id: "SemanticInformation", label: "Information" }
    ]
  }
], st = [
  {
    name: "Frame",
    items: [
      { id: "FrameHeaderBackground", label: "Header Background" },
      { id: "FrameHeaderBorder", label: "Header Border" },
      { id: "FrameHeaderText", label: "Header Text" }
    ]
  },
  {
    name: "Nav Bar",
    items: [
      { id: "NavBarMenuGroupBackground", label: "Menu Group Background" },
      { id: "NavBarMenuGroupBorder", label: "Menu Group Border" },
      { id: "NavBarMenuItemText", label: "Menu Item Text" },
      { id: "NavBarMenuItemTextHover", label: "Menu Item Text Hover" },
      { id: "NavBarMenuItemBorder", label: "Menu Item Border" },
      { id: "NavBarMenuItemBorderHover", label: "Menu Item Border Hover" },
      { id: "NavBarMenuItemBackground", label: "Menu Item Background" },
      { id: "NavBarMenuItemBackgroundHover", label: "Menu Item Background Hover" },
      { id: "NavBarMenuItemUnderlineHover", label: "Menu Item Underline Hover" },
      { id: "NavBarMenuItemSeparator", label: "Menu Item Separator" }
    ]
  },
  {
    name: "Primary Button",
    items: [
      { id: "PrimaryButtonBackground", label: "Background" },
      { id: "PrimaryButtonBackgroundHover", label: "Background Hover" },
      { id: "PrimaryButtonText", label: "Text" },
      { id: "PrimaryButtonTextHover", label: "Text Hover" },
      { id: "PrimaryButtonBorder", label: "Border" },
      { id: "PrimaryButtonBorderHover", label: "Border Hover" }
    ]
  },
  {
    name: "Secondary Button",
    items: [
      { id: "SecondaryButtonBackground", label: "Background" },
      { id: "SecondaryButtonBackgroundHover", label: "Background Hover" },
      { id: "SecondaryButtonText", label: "Text" },
      { id: "SecondaryButtonTextHover", label: "Text Hover" },
      { id: "SecondaryButtonBorder", label: "Border" },
      { id: "SecondaryButtonBorderHover", label: "Border Hover" }
    ]
  },
  {
    name: "Dropdown/Mega Menu",
    items: [
      { id: "DropdownBackground", label: "Background" },
      { id: "DropdownItemText", label: "Item Text" },
      { id: "DropdownItemTextHover", label: "Item Text Hover" },
      { id: "DropdownItemBackgroundHover", label: "Item Background Hover" },
      { id: "DropdownItemBorderHover", label: "Border Hover" },
      { id: "DropdownItemSectionTitle", label: "Section Title" }
    ]
  },
  {
    name: "Hamberger",
    items: [
      { id: "HambergerText", label: "Text" }
    ]
  }
], lt = [
  {
    name: "Background",
    items: [
      { id: "FooterBackground", label: "Background" },
      { id: "FooterHeading", label: "Heading" },
      { id: "FooterHighlightText", label: "Highlight Text" },
      { id: "FooterText", label: "Text" },
      { id: "FooterLine", label: "Line" }
    ]
  },
  {
    name: "Primary Button",
    items: [
      { id: "PrimaryButtonBackground", label: "Background" },
      { id: "PrimaryButtonBackgroundHover", label: "Background Hover" },
      { id: "PrimaryButtonText", label: "Text" },
      { id: "PrimaryButtonTextHover", label: "Text Hover" },
      { id: "PrimaryButtonBorder", label: "Border" },
      { id: "PrimaryButtonBorderHover", label: "Border Hover" }
    ]
  },
  {
    name: "Secondary Button",
    items: [
      { id: "SecondaryButtonBackground", label: "Background" },
      { id: "SecondaryButtonBackgroundHover", label: "Background Hover" },
      { id: "SecondaryButtonText", label: "Text" },
      { id: "SecondaryButtonTextHover", label: "Text Hover" },
      { id: "SecondaryButtonBorder", label: "Border" },
      { id: "SecondaryButtonBorderHover", label: "Border Hover" }
    ]
  },
  {
    name: "Link",
    items: [
      { id: "LinkText", label: "Text" },
      { id: "LinkTextHover", label: "Text Hover" },
      { id: "LinkTextUnderline", label: "Underline" },
      { id: "LinkTextUnderlineHover", label: "Underline Hover" }
    ]
  },
  {
    name: "Badge",
    items: [
      { id: "BadgeText", label: "Text" },
      { id: "BadgeBackground", label: "Background" }
    ]
  }
], ut = [
  {
    name: "Background",
    items: [
      { id: "FooterBackground", label: "Background" },
      { id: "FooterHeading", label: "Heading" },
      { id: "FooterHighlightText", label: "Highlight Text" },
      { id: "FooterText", label: "Text" },
      { id: "FooterLine", label: "Line" }
    ]
  },
  {
    name: "Primary Button",
    items: [
      { id: "PrimaryButtonBackground", label: "Background" },
      { id: "PrimaryButtonBackgroundHover", label: "Background Hover" },
      { id: "PrimaryButtonText", label: "Text" },
      { id: "PrimaryButtonTextHover", label: "Text Hover" },
      { id: "PrimaryButtonBorder", label: "Border" },
      { id: "PrimaryButtonBorderHover", label: "Border Hover" }
    ]
  },
  {
    name: "Secondary Button",
    items: [
      { id: "SecondaryButtonBackground", label: "Background" },
      { id: "SecondaryButtonBackgroundHover", label: "Background Hover" },
      { id: "SecondaryButtonText", label: "Text" },
      { id: "SecondaryButtonTextHover", label: "Text Hover" },
      { id: "SecondaryButtonBorder", label: "Border" },
      { id: "SecondaryButtonBorderHover", label: "Border Hover" }
    ]
  },
  {
    name: "Link",
    items: [
      { id: "LinkText", label: "Text" },
      { id: "LinkTextHover", label: "Text Hover" },
      { id: "LinkTextUnderline", label: "Underline" },
      { id: "LinkTextUnderlineHover", label: "Underline Hover" }
    ]
  },
  {
    name: "Badge",
    items: [
      { id: "BadgeText", label: "Text" },
      { id: "BadgeBackground", label: "Background" }
    ]
  }
];
var ct = Object.getOwnPropertyDescriptor, ue = (t) => {
  throw TypeError(t);
}, dt = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? ct(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = a(r) || r);
  return r;
}, pt = (t, e, o) => e.has(t) || ue("Cannot " + o), ht = (t, e, o) => e.has(t) ? ue("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), x = (t, e, o) => (pt(t, e, "access private method"), o), b, ce, de, pe, he, fe, ve;
let W = class extends _ {
  constructor() {
    super(...arguments), ht(this, b);
  }
  render() {
    return s`
            <umb-split-panel class="tab-content">
                <div slot="start">
                    ${x(this, b, ce).call(this)}
                    ${x(this, b, de).call(this)}                            
                </div>
                <div slot="end">
                    <color-style-tab-preview></color-style-tab-preview>
                </div>
            </umb-split-panel>
        `;
  }
};
b = /* @__PURE__ */ new WeakSet();
ce = function() {
  return s`
            <ukf-accordion heading="Color Palette">
                <div slot="content" class="accordion-content">
                    ${at.map(
    (t) => s` <ukf-color-group .headline=${t.name} .items=${t.items}></ukf-color-group> `
  )}
                </div>
            </ukf-accordion>
        `;
};
de = function() {
  return s`
            <ukf-accordion heading="Color Tokens">
                <div slot="content">
                    ${x(this, b, pe).call(this)}
                    ${x(this, b, he).call(this)}
                    ${x(this, b, fe).call(this)}
                </div>
            </ukf-accordion>
        `;
};
pe = function() {
  return s`        
        <ukf-accordion heading="Header Tokens">
            <div slot="content" class="accordion-content">
                ${st.map(
    (t) => s` <ukf-color-group .headline=${t.name} .items=${t.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
he = function() {
  return s`        
        <ukf-accordion heading="Footer Tokens">
            <div slot="content" class="accordion-content">
                ${lt.map(
    (t) => s` <ukf-color-group .headline=${t.name} .items=${t.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
fe = function() {
  return s`
            ${[1, 2, 3, 4, 5].map((t) => x(this, b, ve).call(this, t))}
        `;
};
ve = function(t) {
  return s`        
        <ukf-accordion heading="Section Tokens #${t}">
            <div slot="content" class="accordion-content">
                ${ut.map(
    (e) => s` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
W.styles = w`
        .tab-content {
            margin-top: 16px;
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
W = dt([
  B("color-tab")
], W);
var ft = Object.getOwnPropertyDescriptor, vt = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? ft(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = a(r) || r);
  return r;
};
let V = class extends _ {
  render() {
    return s`
            <p>Typography Tab Preview</p>
        `;
  }
};
V.styles = w`
    `;
V = vt([
  B("typography-tab-preview")
], V);
var mt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, me = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? gt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && mt(e, o, r), r;
};
let M = class extends d {
  constructor() {
    super(...arguments), this.label = "";
  }
  render() {
    return l`
      <div class="field">
        <div class="label">${this.label}</div>
        <div class="control">
          <slot name="control"></slot>
        </div>
      </div>
    `;
  }
};
M.styles = v`
    :host {
      display: block;
      margin-bottom: 12px;
    }

    .field {
      display: grid;
      grid-template-columns: var(--ukf-field-label-width, 150px) 1fr;
      align-items: start;
      column-gap: 12px;
    }

    .label {
      font-weight: 500;
      color: var(--uui-color-text);
      line-height: 1.4;
      white-space: normal;
    }

    .control {
      width: 100%;
    }

    @media (max-width: 500px) {
      .field {
        grid-template-columns: 1fr;
      }
    }
  `;
me([
  c({ type: String })
], M.prototype, "label", 2);
M = me([
  m("ukf-control")
], M);
var bt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, H = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? yt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && bt(e, o, r), r;
};
let k = class extends d {
  constructor() {
    super(...arguments), this.options = [], this.value = "", this.query = "", this.open = !1;
  }
  get filtered() {
    const t = this.options;
    if (!this.open) return t;
    const e = this.query.toLowerCase();
    return t.filter((o) => o.label.toLowerCase().includes(e));
  }
  onSelect(t) {
    this.value = t.value, this.query = "", this.open = !1, this.dispatchEvent(
      new CustomEvent("change", {
        detail: t.value,
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.options.find((e) => e.value === this.value)?.label || "Select...";
    return l`
        <uui-input
            .value=${this.open ? this.query : t}
            placeholder=${this.open ? "Search..." : ""}
            @input=${(e) => {
      this.query = e.target.value;
    }}
            @click=${() => {
      this.open = !this.open, this.open && (this.query = "");
    }}
        ></uui-input>

        ${this.open ? l`
            <div class="dropdown">
            ${this.filtered.map(
      (e) => l`
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
k.styles = v`
    :host {
      display: block;
      position: relative;
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
      box-shadow: var(--uui-shadow-depth-2);
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
H([
  c({ type: Array })
], k.prototype, "options", 2);
H([
  c({ type: String })
], k.prototype, "value", 2);
H([
  C()
], k.prototype, "query", 2);
H([
  C()
], k.prototype, "open", 2);
k = H([
  m("ukf-select-search")
], k);
var kt = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, oe = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? _t(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && kt(e, o, r), r;
};
let O = class extends d {
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
    new FontFace(t, `url(${e})`).load().then((n) => {
      document.fonts.add(n);
    });
    const r = document.createElement("link");
    r.id = o, r.rel = "stylesheet", r.href = `https://fonts.googleapis.com/css2?family=${t.replace(
      /\s+/g,
      "+"
    )}:wght@${this.font.variant}&display=swap`, document.head.appendChild(r);
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
    this.emitChange({ family: t, variant: this.font.variant });
  }
  onVariantChange(t) {
    const e = t.target.value;
    if (this.emitChange({ family: this.font.family, variant: e }), this.selectedFontObj) {
      const o = this.selectedFontObj.files[e];
      this.loadFont(this.selectedFontObj.family, o);
    }
  }
  render() {
    return l`
        <ukf-accordion heading=${this.font.family || "Choose Font"}>
            <div slot="content">
            <!-- Family -->
            <ukf-control label="Family">
                <ukf-select-search
                    slot="control"
                    .options=${this.fontList.map((t) => ({
      label: `${t.family} - ${t.category}`,
      value: t.family,
      selected: this.font.family === t.family
    }))}
                    .value=${this.font.family}
                    @change=${(t) => this.onFamilyChange(t.detail)}
                ></ukf-select-search>

            </ukf-control>

            <!-- Variant -->
            ${this.font.family ? l`
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
            ${this.font.family && this.font.variant ? l`
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
O.styles = v`
    :host {
      display: block;
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
oe([
  c({ type: Object })
], O.prototype, "font", 2);
oe([
  c({ type: Array })
], O.prototype, "fontList", 2);
O = oe([
  m("ukf-font-item")
], O);
var $t = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, re = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? xt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && $t(e, o, r), r;
};
let E = class extends d {
  constructor() {
    super(...arguments), this.selectedFonts = [], this.fontList = [];
  }
  connectedCallback() {
    super.connectedCallback(), this.loadFontJson();
  }
  async loadFontJson() {
    try {
      const e = await (await fetch("/App_Plugins/uKFSB/assets/google-web-fonts.json")).json();
      this.fontList = e.items, console.log("Loaded google-fonts.json", this.fontList);
    } catch (t) {
      console.error("Failed to load google-fonts.json", t);
    }
  }
  addFont() {
    this.selectedFonts = [
      ...this.selectedFonts,
      { family: "Roboto", variant: "regular" }
    ];
  }
  updateFont(t, e) {
    const o = [...this.selectedFonts];
    o[t] = { ...o[t], ...e }, this.selectedFonts = o, this.dispatchEvent(
      new CustomEvent("change", {
        detail: this.selectedFonts,
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return l`
      <div class="list">
        ${this.selectedFonts.map(
      (t, e) => l`
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
        @click=${this.addFont}
      >
        Add font
      </uui-button>      
    `;
  }
};
E.styles = v`
    :host {
      display: block;
    }
    .add-btn {
      margin-bottom: var(--uui-size-space-4);
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: var(--uui-size-space-5);
    }
  `;
re([
  C()
], E.prototype, "selectedFonts", 2);
re([
  C()
], E.prototype, "fontList", 2);
E = re([
  m("ukf-font-picker")
], E);
var St = Object.getOwnPropertyDescriptor, ge = (t) => {
  throw TypeError(t);
}, wt = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? St(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = a(r) || r);
  return r;
}, Bt = (t, e, o) => e.has(t) || ge("Cannot " + o), Tt = (t, e, o) => e.has(t) ? ge("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), h = (t, e, o) => (Bt(t, e, "access private method"), o), p, be, ye, g;
let G = class extends _ {
  constructor() {
    super(...arguments), Tt(this, p);
  }
  render() {
    return s`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${h(this, p, be).call(this)}
                ${h(this, p, ye).call(this)}                        
            </div>
            <div slot="end">
                <typography-tab-preview></typography-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
p = /* @__PURE__ */ new WeakSet();
be = function() {
  return s`
            <ukf-accordion heading="Font">
                <div slot="content" class="accordion-content">
                    <ukf-font-picker></ukf-font-picker>
                </div>
            </ukf-accordion>
        `;
};
ye = function() {
  return s`
            <ukf-accordion heading="Typography">
                <div slot="content">
                    ${h(this, p, g).call(this, "Heading 1")}
                    ${h(this, p, g).call(this, "Heading 2")}
                    ${h(this, p, g).call(this, "Heading 3")}
                    ${h(this, p, g).call(this, "Heading 4")}
                    ${h(this, p, g).call(this, "Heading 5")}
                    ${h(this, p, g).call(this, "Heading 6")}
                    ${h(this, p, g).call(this, "Paragraph")}
                </div>
            </ukf-accordion>
        `;
};
g = function(t) {
  return s`
            <ukf-accordion heading="${t}">
                <div slot="content">
                    <ukf-control label="Choose Font">
                        <uui-select slot="control">
                        </uui-select>
                    </ukf-control>
                    <ukf-control label="Size">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                    </ukf-control>
                    <ukf-control label="Spacing">
                        <uui-slider slot="control" min="0" max="100"></uui-slider>
                    </ukf-control>
                </div>
            </ukf-accordion>
        `;
};
G.styles = w`
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
G = wt([
  B("typography-tab")
], G);
var Pt = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, ke = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Ot(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && Pt(e, o, r), r;
};
let F = class extends d {
  constructor() {
    super(...arguments), this.headline = "";
  }
  render() {
    return l`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          <slot name="controls"></slot>
        </div>
      </uui-box>
    `;
  }
};
F.styles = v`
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
ke([
  c({ type: String })
], F.prototype, "headline", 2);
F = ke([
  m("ukf-control-group")
], F);
var Et = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, _e = (t) => {
  throw TypeError(t);
}, $e = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Ct(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && Et(e, o, r), r;
}, Ht = (t, e, o) => e.has(t) || _e("Cannot " + o), Ut = (t, e, o) => e.has(t) ? _e("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), Dt = (t, e, o) => (Ht(t, e, "access private method"), o), K, xe;
let L = class extends _ {
  constructor() {
    super(...arguments), Ut(this, K), this.value = "sm";
  }
  render() {
    return l`
			<uui-radio-group @input=${Dt(this, K, xe)} value=${this.value}>
        <uui-radio name="size" label="Small" value="sm"></uui-radio>
        <uui-radio name="size" label="Medium" value="md"></uui-radio>
        <uui-radio name="size" label="Large" value="lg"></uui-radio>
			</uui-radio-group>
		`;
  }
};
K = /* @__PURE__ */ new WeakSet();
xe = function(t) {
  this.value = t.target.value, this.dispatchEvent(new je());
};
L.styles = [
  ze,
  v`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`
];
$e([
  c()
], L.prototype, "value", 2);
L = $e([
  m("ukf-size")
], L);
var Mt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, Se = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Ft(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && Mt(e, o, r), r;
};
let A = class extends d {
  constructor() {
    super(...arguments), this.value = {
      top: !1,
      right: !1,
      bottom: !1,
      left: !1
    };
  }
  toggle(t) {
    this.value = { ...this.value, [t]: !this.value[t] }, this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
  }
  render() {
    const { top: t, right: e, bottom: o, left: i } = this.value;
    return l`
      <div class="grid">
        <div></div>

        <button @click=${() => this.toggle("top")}>
          <div class="line top ${t ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("left")}>
          <div class="line left ${i ? "active" : ""}"></div>
        </button>

        <div></div>

        <button @click=${() => this.toggle("right")}>
          <div class="line right ${e ? "active" : ""}"></div>
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
A.styles = v`
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
Se([
  c({ type: Object })
], A.prototype, "value", 2);
A = Se([
  m("ukf-border-position")
], A);
var Lt = Object.getOwnPropertyDescriptor, we = (t) => {
  throw TypeError(t);
}, At = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Lt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = a(r) || r);
  return r;
}, jt = (t, e, o) => e.has(t) || we("Cannot " + o), zt = (t, e, o) => e.has(t) ? we("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), y = (t, e, o) => (jt(t, e, "access private method"), o), f, Be, Te, Pe, Oe, Ee, Ce, He;
let J = class extends _ {
  constructor() {
    super(...arguments), zt(this, f);
  }
  render() {
    return s`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${y(this, f, Te).call(this)}
                ${y(this, f, Ee).call(this)}
                ${y(this, f, Be).call(this)}                          
                ${y(this, f, Ce).call(this)}
                ${y(this, f, He).call(this)}
            </div>
            <div slot="end">
                <color-style-tab-preview></color-style-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
f = /* @__PURE__ */ new WeakSet();
Be = function() {
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
Te = function() {
  return s`
            <ukf-accordion heading="Header">
                <div slot="content" class="accordion-content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" .options="${y(this, f, Pe).call(this)}">
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
Pe = function() {
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
Oe = function() {
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
Ee = function() {
  return s`
            <ukf-accordion heading="Footer">
                <div slot="content">
                    <ukf-control-group headline="Layout">
                        <div slot="controls">
                            <ukf-control label="Style">
                                <uui-select slot="control" .options="${y(this, f, Oe).call(this)}">
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
Ce = function() {
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
He = function() {
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
J.styles = w`
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
J = At([
  B("style-tab")
], J);
var It = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Ue = (t) => {
  throw TypeError(t);
}, De = (t, e, o, i) => {
  for (var r = i > 1 ? void 0 : i ? Rt(e, o) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (r = (i ? a(e, o, r) : a(r)) || r);
  return i && r && It(e, o, r), r;
}, Nt = (t, e, o) => e.has(t) || Ue("Cannot " + o), qt = (t, e, o) => e.has(t) ? Ue("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), Wt = (t, e, o) => (Nt(t, e, "access private method"), o), Y, Me;
let j = class extends _ {
  constructor() {
    super(...arguments), qt(this, Y), this.tab = "1";
  }
  render() {
    return s`
        <umb-body-layout>
            <div slot="header">
                <uui-tab-group @click=${Wt(this, Y, Me)}>
                    <uui-tab ?active=${this.tab == "1"} data-tab="1">
                        <uui-icon slot="icon" name="icon-color-bucket"></uui-icon>
                        Colors
                    </uui-tab>
                    <uui-tab ?active=${this.tab == "2"} data-tab="2">
                        <uui-icon slot="icon" name="icon-document-font"></uui-icon>
                        Typography
                    </uui-tab>
                    <uui-tab ?active=${this.tab == "3"} data-tab="3">
                        <uui-icon slot="icon" name="icon-layout"></uui-icon>
                        Styles
                    </uui-tab>
                </uui-tab-group>
            </div>
            <div look="placeholder" pristine="">
                ${N(this.tab == "1", () => s`
                    <color-tab></color-tab>
                `)}
                ${N(this.tab == "2", () => s`
                    <typography-tab></typography-tab>
                `)}
                ${N(this.tab == "3", () => s`
                    <style-tab></style-tab>
                `)}
            </div>
        </umb-body-layout>
        `;
  }
};
Y = /* @__PURE__ */ new WeakSet();
Me = function(t) {
  this.tab = t.target.dataset.tab;
};
j.styles = w`
        :host {
            display: block;
            padding: 0;
        }
    `;
De([
  Fe()
], j.prototype, "tab", 2);
j = De([
  B("ukindforge-theme-property-editor-ui")
], j);
export {
  j as default
};
//# sourceMappingURL=property-editor-ui-theme.element-DJm205NO.js.map
