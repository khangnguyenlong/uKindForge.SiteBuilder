import { html as a, css as T, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
import "./ukf-color-group-CvM34Won.js";
import "./color-style-tab-preview-ogm2XtWZ.js";
const p = [
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
], y = [
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
], h = [
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
], S = [
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
var f = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, M = (e, r, t, c) => {
  for (var d = c > 1 ? void 0 : c ? f(r, t) : r, i = e.length - 1, u; i >= 0; i--)
    (u = e[i]) && (d = u(d) || d);
  return d;
}, P = (e, r, t) => r.has(e) || B("Cannot " + t), I = (e, r, t) => r.has(e) ? B("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), n = (e, r, t) => (P(e, r, "access private method"), t), o, m, s, b, g, v, k;
let l = class extends H {
  constructor() {
    super(...arguments), I(this, o);
  }
  render() {
    return a`
        <umb-split-panel class="tab-content">
            <div slot="start">
                ${n(this, o, m).call(this)}
                ${n(this, o, s).call(this)}                            
            </div>
            <div slot="end">
                <color-style-tab-preview></color-style-tab-preview>
            </div>
        </umb-split-panel>
        `;
  }
};
o = /* @__PURE__ */ new WeakSet();
m = function() {
  return a`
            <ukf-accordion heading="Color Palette">
                <div slot="content" class="accordion-content">
                    ${p.map(
    (e) => a` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
                </div>
            </ukf-accordion>
        `;
};
s = function() {
  return a`
            <ukf-accordion heading="Color Tokens">
                <div slot="content">
                    ${n(this, o, b).call(this)}
                    ${n(this, o, g).call(this)}
                    ${n(this, o, v).call(this)}
                </div>
            </ukf-accordion>
        `;
};
b = function() {
  return a`        
        <ukf-accordion heading="Header Tokens">
            <div slot="content" class="accordion-content">
                ${y.map(
    (e) => a` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
g = function() {
  return a`        
        <ukf-accordion heading="Footer Tokens">
            <div slot="content" class="accordion-content">
                ${h.map(
    (e) => a` <ukf-color-group .headline=${e.name} .items=${e.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
v = function() {
  return a`
            ${[1, 2, 3, 4, 5].map((e) => n(this, o, k).call(this, e))}
        `;
};
k = function(e) {
  return a`        
        <ukf-accordion heading="Section Tokens #${e}">
            <div slot="content" class="accordion-content">
                ${S.map(
    (r) => a` <ukf-color-group .headline=${r.name} .items=${r.items}></ukf-color-group> `
  )}
            </div>
        </ukf-accordion>
        `;
};
l.styles = T`
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
l = M([
  x("ukindforge-color-settings-property-editor-ui")
], l);
export {
  l as default
};
//# sourceMappingURL=property-editor-ui-color-settings.element-BzlP3vXk.js.map
