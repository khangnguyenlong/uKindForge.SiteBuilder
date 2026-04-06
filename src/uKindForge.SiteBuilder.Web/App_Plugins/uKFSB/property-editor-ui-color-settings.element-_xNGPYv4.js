import { LitElement as $, html as n, css as b, property as g, state as C, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { n as k, t as w } from "./ukf-color-group-CvM34Won.js";
import { u as L, a as N } from "./theme-to-css-OxAL-lPE.js";
var O = Object.defineProperty, D = Object.getOwnPropertyDescriptor, B = (e, r, t, o) => {
  for (var a = o > 1 ? void 0 : o ? D(r, t) : r, i = e.length - 1, d; i >= 0; i--)
    (d = e[i]) && (a = (o ? d(r, t, a) : d(a)) || a);
  return o && a && O(r, t, a), a;
};
let s = class extends $ {
  constructor() {
    super(...arguments), this.kicker = "Section", this.heading = "Build fast. Customize deeply.", this.description = "This section previews heading typography, paragraph typography, spacing, and button styles.";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return n`
      <section class="ukf-section">
        <div class="ukf-card ukf-section__inner">
          <div class="ukf-kicker">${this.kicker}</div>
          <div class="ukf-h1">${this.heading}</div>
          <p class="ukf-muted" style="margin:0">${this.description}</p>

          <div style="height: calc(var(--ukf-space) * 2)"></div>

          <div class="ukf-btn-row">
            <button class="ukf-btn ukf-btn--primary" type="button">Primary CTA</button>
            <button class="ukf-btn ukf-btn--secondary" type="button">Secondary CTA</button>
          </div>
        </div>
      </section>
    `;
  }
};
B([
  k({ type: String })
], s.prototype, "kicker", 2);
B([
  k({ type: String })
], s.prototype, "heading", 2);
B([
  k({ type: String })
], s.prototype, "description", 2);
s = B([
  w("ukf-section")
], s);
var E = Object.defineProperty, F = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, v = (e, r, t, o) => {
  for (var a = o > 1 ? void 0 : o ? F(r, t) : r, i = e.length - 1, d; i >= 0; i--)
    (d = e[i]) && (a = (o ? d(r, t, a) : d(a)) || a);
  return o && a && E(r, t, a), a;
}, h = (e, r, t) => r.has(e) || y("Cannot " + t), U = (e, r, t) => (h(e, r, "read from private field"), t ? t.call(e) : r.get(e)), A = (e, r, t) => r.has(e) ? y("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), R = (e, r, t, o) => (h(e, r, "write to private field"), r.set(e, t), t), m;
let u = class extends f {
  constructor() {
    super(...arguments), this.headerStyleId = "style-1", this.footerStyleId = "style-1", this._parts = {}, A(this, m);
  }
  connectedCallback() {
    super.connectedCallback(), R(this, m, L.subscribe((e) => this._parts = e));
  }
  disconnectedCallback() {
    var e;
    (e = U(this, m)) == null || e.call(this), super.disconnectedCallback();
  }
  render() {
    const e = N(this._parts);
    return n`
            <style>${e}</style>
            <div class="ukf-theme">
                <ukf-header .styleId=${this.headerStyleId}></ukf-header>
                <ukf-footer .styleId=${this.footerStyleId}></ukf-footer>
                <div class="grid">
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                    <ukf-section></ukf-section>
                </div>
            </div>
        `;
  }
};
m = /* @__PURE__ */ new WeakMap();
u.styles = b`
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
v([
  g({ type: String })
], u.prototype, "headerStyleId", 2);
v([
  g({ type: String })
], u.prototype, "footerStyleId", 2);
v([
  C()
], u.prototype, "_parts", 2);
u = v([
  T("color-tab-preview")
], u);
const W = [
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
], G = [
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
], K = [
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
], z = [
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
var q = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, J = (e, r, t, o) => {
  for (var a = o > 1 ? void 0 : o ? q(r, t) : r, i = e.length - 1, d; i >= 0; i--)
    (d = e[i]) && (a = d(a) || a);
  return a;
}, Q = (e, r, t) => r.has(e) || x("Cannot " + t), V = (e, r, t) => r.has(e) ? x("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), c = (e, r, t) => (Q(e, r, "access private method"), t), l, H, S, _, P, I, M;
let p = class extends f {
  constructor() {
    super(...arguments), V(this, l);
  }
  render() {
    return n`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${c(this, l, H).call(this)}
                ${c(this, l, S).call(this)}                            
            </div>
            <div slot="end">
                <color-tab-preview></color-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
l = /* @__PURE__ */ new WeakSet();
H = function() {
  return n`
            <ukf-accordion heading="Color Palette">
                <div slot="content" class="accordion-content">
                    ${W.map(
    (e) => n` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
                </div>
            </ukf-accordion>
        `;
};
S = function() {
  return n`
            <ukf-accordion heading="Color Tokens">
                <div slot="content">
                    ${c(this, l, _).call(this)}
                    ${c(this, l, P).call(this)}
                    ${c(this, l, I).call(this)}
                </div>
            </ukf-accordion>
        `;
};
_ = function() {
  return n`        
        <ukf-accordion heading="Header Tokens">
            <div slot="content" class="accordion-content">
                ${G.map(
    (e) => n` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
P = function() {
  return n`        
        <ukf-accordion heading="Footer Tokens">
            <div slot="content" class="accordion-content">
                ${K.map(
    (e) => n` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
I = function() {
  return n`
            ${[1, 2, 3, 4, 5].map((e) => c(this, l, M).call(this, e))}
        `;
};
M = function(e) {
  return n`        
        <ukf-accordion heading="Section Tokens #${e}">
            <div slot="content" class="accordion-content">
                ${z.map(
    (r) => n` <ukf-color-group .headline=${r.name} .items=${r.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
p.styles = b`
        :host {
            display: block;
            padding: 0;
        }

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
p = J([
  T("ukindforge-color-settings-property-editor-ui")
], p);
export {
  p as default
};
//# sourceMappingURL=property-editor-ui-color-settings.element-_xNGPYv4.js.map
