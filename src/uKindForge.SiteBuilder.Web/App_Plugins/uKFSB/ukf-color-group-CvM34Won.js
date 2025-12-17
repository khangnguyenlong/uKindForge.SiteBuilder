import { B as k, T as M, x as y } from "./lit-html-D3bFBl2C.js";
const f = globalThis, g = f.ShadowRoot && (f.ShadyCSS === void 0 || f.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, v = Symbol(), P = /* @__PURE__ */ new WeakMap();
let x = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== v) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (g && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = P.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && P.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const z = (r) => new x(typeof r == "string" ? r : r + "", void 0, v), A = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce(((s, i, o) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o + 1]), r[0]);
  return new x(e, r, v);
}, D = (r, t) => {
  if (g) r.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const s = document.createElement("style"), i = f.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, O = g ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return z(e);
})(r) : r;
const { is: j, defineProperty: T, getOwnPropertyDescriptor: L, getOwnPropertyNames: q, getOwnPropertySymbols: B, getPrototypeOf: N } = Object, m = globalThis, C = m.trustedTypes, H = C ? C.emptyScript : "", V = m.reactiveElementPolyfillSupport, d = (r, t) => r, $ = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? H : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, E = (r, t) => !j(r, t), U = { attribute: !0, type: String, converter: $, reflect: !1, useDefault: !1, hasChanged: E };
Symbol.metadata ??= Symbol("metadata"), m.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class c extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = U) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && T(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = L(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const a = i?.call(this);
      o?.call(this, n), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? U;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t = N(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const e = this.properties, s = [...q(e), ...B(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(O(i));
    } else t !== void 0 && e.push(O(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return D(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (s.converter?.toAttribute !== void 0 ? s.converter : $).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : $;
      this._$Em = i;
      const a = n.fromAttribute(e, o.type);
      this[i] = a ?? this._$Ej?.get(i) ?? a, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      const i = this.constructor, o = this[t];
      if (s ??= i.getPropertyOptions(t), !((s.hasChanged ?? E)(o, e) || s.useDefault && s.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: o }, n) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, o] of s) {
        const { wrapped: n } = o, a = this[i];
        n !== !0 || this._$AL.has(i) || a === void 0 || this.C(i, void 0, o, a);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(((s) => s.hostUpdate?.())), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
c.elementStyles = [], c.shadowRootOptions = { mode: "open" }, c[d("elementProperties")] = /* @__PURE__ */ new Map(), c[d("finalized")] = /* @__PURE__ */ new Map(), V?.({ ReactiveElement: c }), (m.reactiveElementVersions ??= []).push("2.1.1");
const S = globalThis;
class h extends c {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = k(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return M;
  }
}
h._$litElement$ = !0, h.finalized = !0, S.litElementHydrateSupport?.({ LitElement: h });
const I = S.litElementPolyfillSupport;
I?.({ LitElement: h });
(S.litElementVersions ??= []).push("4.2.1");
const R = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(r, t);
  })) : customElements.define(r, t);
};
const J = { attribute: !0, type: String, converter: $, reflect: !1, hasChanged: E }, K = (r = J, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), s === "setter" && ((r = Object.create(r)).wrapped = !0), o.set(e.name, r), s === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const b = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, b, r);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, r, a), a;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(a) {
      const b = this[n];
      t.call(this, a), this.requestUpdate(n, b, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function u(r) {
  return (t, e) => typeof e == "object" ? K(r, t, e) : ((s, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, s), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(r, t, e);
}
function W(r) {
  return u({ ...r, state: !0, attribute: !1 });
}
var G = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, _ = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Y(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && G(t, e, i), i;
};
let l = class extends h {
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
    return y`
    <div class="accordion">

      <!-- HEADER -->
      <button class="accordion-header" @click=${this.toggle}>
        <uui-label>${this.heading}</uui-label>
        <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
      </button>

      <!-- BODY -->
      ${this._isOpen ? y`
            <div class="accordion-body">
              <slot name="content"></slot>
            </div>
          ` : null}
    </div>
  `;
  }
};
l.styles = A`
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
_([
  u({ type: String })
], l.prototype, "heading", 2);
_([
  u({ type: Boolean, reflect: !0 })
], l.prototype, "open", 2);
_([
  W()
], l.prototype, "_isOpen", 2);
l = _([
  R("ukf-accordion")
], l);
var F = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, w = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Q(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && F(t, e, i), i;
};
let p = class extends h {
  constructor() {
    super(...arguments), this.headline = "", this.items = [];
  }
  render() {
    return y`
      <uui-box .headline=${this.headline}>
        <div class="grid" style="grid">
          ${this.items.map((r) => y`
            <div class="color-item">
              <uui-color-picker id=${r.id}></uui-color-picker>
              <span>${r.label}</span>
            </div>
          `)}
        </div>
      </uui-box>
    `;
  }
};
p.styles = A`
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
w([
  u({ type: String })
], p.prototype, "headline", 2);
w([
  u({ type: Array })
], p.prototype, "items", 2);
p = w([
  R("ukf-color-group")
], p);
export {
  h as a,
  A as i,
  u as n,
  W as r,
  R as t
};
//# sourceMappingURL=ukf-color-group-CvM34Won.js.map
