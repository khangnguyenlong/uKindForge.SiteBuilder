import { LitElement as S, html as a, css as k, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { n as v, t as P } from "./ukf-color-group-CvM34Won.js";
import "./ukf-footer-B3pvJtI1.js";
var _ = Object.defineProperty, M = Object.getOwnPropertyDescriptor, s = (e, r, o, i) => {
  for (var t = i > 1 ? void 0 : i ? M(r, o) : r, n = e.length - 1, d; n >= 0; n--)
    (d = e[n]) && (t = (i ? d(r, o, t) : d(t)) || t);
  return i && t && _(r, o, t), t;
};
let u = class extends S {
  constructor() {
    super(...arguments), this.kicker = "Section", this.heading = "Build fast. Customize deeply.", this.description = "This section previews heading typography, paragraph typography, spacing, and button styles.";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return a`
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
s([
  v({ type: String })
], u.prototype, "kicker", 2);
s([
  v({ type: String })
], u.prototype, "heading", 2);
s([
  v({ type: String })
], u.prototype, "description", 2);
u = s([
  P("ukf-section")
], u);
var I = Object.getOwnPropertyDescriptor, L = (e, r, o, i) => {
  for (var t = i > 1 ? void 0 : i ? I(r, o) : r, n = e.length - 1, d; n >= 0; n--)
    (d = e[n]) && (t = d(t) || t);
  return t;
};
let B = class extends g {
  render() {
    return a`
            <div>
                <ukf-header></ukf-header>
                <ukf-footer></ukf-footer>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
                <ukf-section></ukf-section>
            </div>
        `;
  }
};
B.styles = k`
        :host {
            display: block;
            padding: var(--uui-box-default-padding, var(--uui-size-space-5, 18px));
        }
    `;
B = L([
  b("color-tab-preview")
], B);
const N = [
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
], O = [
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
], $ = [
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
], w = [
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
var D = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, C = (e, r, o, i) => {
  for (var t = i > 1 ? void 0 : i ? D(r, o) : r, n = e.length - 1, d; n >= 0; n--)
    (d = e[n]) && (t = d(t) || t);
  return t;
}, E = (e, r, o) => r.has(e) || p("Cannot " + o), F = (e, r, o) => r.has(e) ? p("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, o), c = (e, r, o) => (E(e, r, "access private method"), o), l, T, f, x, y, H, h;
let m = class extends g {
  constructor() {
    super(...arguments), F(this, l);
  }
  render() {
    return a`
        <umb-split-panel class="tab-content" position="30%">
            <div slot="start">
                ${c(this, l, T).call(this)}
                ${c(this, l, f).call(this)}                            
            </div>
            <div slot="end">
                <color-tab-preview></color-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
l = /* @__PURE__ */ new WeakSet();
T = function() {
  return a`
            <ukf-accordion heading="Color Palette">
                <div slot="content" class="accordion-content">
                    ${N.map(
    (e) => a` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
                </div>
            </ukf-accordion>
        `;
};
f = function() {
  return a`
            <ukf-accordion heading="Color Tokens">
                <div slot="content">
                    ${c(this, l, x).call(this)}
                    ${c(this, l, y).call(this)}
                    ${c(this, l, H).call(this)}
                </div>
            </ukf-accordion>
        `;
};
x = function() {
  return a`        
        <ukf-accordion heading="Header Tokens">
            <div slot="content" class="accordion-content">
                ${O.map(
    (e) => a` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
y = function() {
  return a`        
        <ukf-accordion heading="Footer Tokens">
            <div slot="content" class="accordion-content">
                ${$.map(
    (e) => a` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
H = function() {
  return a`
            ${[1, 2, 3, 4, 5].map((e) => c(this, l, h).call(this, e))}
        `;
};
h = function(e) {
  return a`        
        <ukf-accordion heading="Section Tokens #${e}">
            <div slot="content" class="accordion-content">
                ${w.map(
    (r) => a` <ukf-color-group .headline=${r.name} .items=${r.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
m.styles = k`
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
m = C([
  b("ukindforge-color-settings-property-editor-ui")
], m);
export {
  m as default
};
//# sourceMappingURL=property-editor-ui-color-settings.element-DOHMd4Z-.js.map
