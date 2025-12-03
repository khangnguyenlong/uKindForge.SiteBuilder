import { html as w, property as h, state as p, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as v, UMB_VALIDATION_FALSE_LOCALIZATION_KEY as E } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as A } from "@umbraco-cms/backoffice/event";
var R = Object.defineProperty, S = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, r = (e, s, t, a) => {
  for (var l = a > 1 ? void 0 : a ? S(s, t) : s, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (l = (a ? n(s, t, l) : n(l)) || l);
  return a && l && R(s, t, l), l;
}, B = (e, s, t) => s.has(e) || c("Cannot " + t), C = (e, s, t) => s.has(e) ? c("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), U = (e, s, t) => (B(e, s, "access private method"), t), d, f;
let o = class extends v(L) {
  constructor() {
    super(...arguments), C(this, d), this.readonly = !1, this.mandatoryMessage = E, this._showLabels = !1;
  }
  set config(e) {
    e && (this._labelOff = e.getValueByAlias("labelOff"), this._labelOn = e.getValueByAlias("labelOn"), this._showLabels = !!e.getValueByAlias("showLabels"), this._ariaLabel = e.getValueByAlias("ariaLabel"), this._toggleOnRules = e.getValueByAlias("toggleOnRules"), this.toggleOffRules = e.getValueByAlias("toggleOffRules"));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-toggle")), this.applyShowHide();
  }
  applyShowHide() {
    const e = this.value === !0;
    this.showHideFields(e, this._toggleOnRules, this.toggleOffRules);
  }
  showHideFields(e, s, t) {
    const a = this.parseRules(s), l = this.parseRules(t), i = e ? a : l, n = this.findAncestor(this, "umb-block-workspace-view-edit-properties");
    if (n) {
      const g = n.shadowRoot;
      if (g) {
        const m = g.querySelectorAll("umb-block-workspace-view-edit-property.property");
        setTimeout(() => {
          m.forEach((u) => {
            const y = u.property?.alias || "", _ = i.show.includes(y), b = i.hide.includes(y);
            _ && (u.style.display = ""), b && (u.style.display = "none");
          });
        }, 100);
      }
    }
  }
  parseRules(e) {
    if (!e) return { show: [], hide: [] };
    const s = e.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
    return {
      show: s.filter((t) => t.startsWith("+")).map((t) => t.substring(1)),
      hide: s.filter((t) => t.startsWith("-")).map((t) => t.substring(1))
    };
  }
  findAncestor(e, s, t = 10) {
    let a = 1;
    for (; e; ) {
      if (e.matches?.(s)) return e;
      if (a > t) break;
      e = e.parentElement || e.getRootNode().host, a++;
    }
    return null;
  }
  render() {
    return w`
			<umb-input-toggle
				.ariaLabel=${this._ariaLabel ? this.localize.string(this._ariaLabel) : this.localize.term("general_toggleFor", [this.name])}
				.labelOn=${this._labelOn}
				.labelOff=${this._labelOff}
				?checked=${this.value}
				?showLabels=${this._showLabels}
				?required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				@change=${U(this, d, f)}
				?readonly=${this.readonly}>
			</umb-input-toggle>
		`;
  }
};
d = /* @__PURE__ */ new WeakSet();
f = function(e) {
  const s = e.target.checked;
  this.value = this.mandatory ? s ?? null : s, this.applyShowHide(), this.dispatchEvent(new A());
};
r([
  h({ type: String })
], o.prototype, "name", 2);
r([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
r([
  h({ type: Boolean })
], o.prototype, "mandatory", 2);
r([
  h({ type: String })
], o.prototype, "mandatoryMessage", 2);
r([
  p()
], o.prototype, "_ariaLabel", 2);
r([
  p()
], o.prototype, "_labelOff", 2);
r([
  p()
], o.prototype, "_labelOn", 2);
r([
  p()
], o.prototype, "_showLabels", 2);
r([
  p()
], o.prototype, "_toggleOnRules", 2);
r([
  p()
], o.prototype, "toggleOffRules", 2);
o = r([
  O("ukindforge-property-editor-ui-toggle-plus")
], o);
export {
  o as default
};
//# sourceMappingURL=property-editor-ui-toggle-plus.element-C53AsXtx.js.map
