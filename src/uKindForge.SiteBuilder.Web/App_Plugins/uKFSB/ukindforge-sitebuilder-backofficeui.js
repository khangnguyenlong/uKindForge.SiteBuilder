import { umbExtensionsRegistry as e } from "@umbraco-cms/backoffice/extension-registry";
const o = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.PropertyEditorUi.TogglePlus",
    name: "Toggle Plus Property Editor UI",
    element: () => import("./property-editor-ui-toggle-plus.element-C53AsXtx.js"),
    meta: {
      label: "Toggle Plus",
      propertyEditorSchemaAlias: "Umbraco.TrueFalse",
      icon: "icon-checkbox",
      group: "UKindForge",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "default",
            label: "Preset value",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
            config: [
              {
                alias: "ariaLabel",
                value: "toggle for the initial state of this data type"
              }
            ]
          },
          {
            alias: "showLabels",
            label: "Show on/off labels",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
            config: [
              {
                alias: "ariaLabel",
                value: "toggle for weather if label should be displayed"
              }
            ]
          },
          {
            alias: "labelOn",
            label: "Label On",
            description: "Displays text when enabled.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "labelOff",
            label: "Label Off",
            description: "Displays text when disabled.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "ariaLabel",
            label: "Screen Reader Label",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "toggleOnRules",
            label: "Field Rules (When Toggle ON)",
            description: "Define show/hide fields when toggle is ON. Use +Field for show, -Field for hide. Ex: +field1,-field2",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "toggleOffRules",
            label: "Field Rules (When Toggle OFF)",
            description: "Define show/hide fields when toggle is OFF. Use +Field for show, -Field for hide. Ex: +field1,-field2",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          }
        ]
      }
    }
  }
], i = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.PropertyEditorUi.ColorSettings",
    name: "Color Settings Property Editor UI",
    element: () => import("./property-editor-ui-color-settings.element-BzlP3vXk.js"),
    meta: {
      label: "Theme - Color Settings",
      propertyEditorSchemaAlias: "Umbraco.Plain.Json",
      // TODO : create a new property editor schema for this
      icon: "icon-checkbox",
      group: "UKindForge",
      supportsReadOnly: !0
    }
  }
], t = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.PropertyEditorUi.TypographySettings",
    name: "Typography Settings Property Editor UI",
    element: () => import("./property-editor-ui-typography-settings.element-DF8AxlzT.js"),
    meta: {
      label: "Theme - Typography Settings",
      propertyEditorSchemaAlias: "Umbraco.Plain.Json",
      // TODO : create a new property editor schema for this
      icon: "icon-checkbox",
      group: "UKindForge",
      supportsReadOnly: !0
    }
  }
], r = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.PropertyEditorUi.StyleSettings",
    name: "Style Settings Property Editor UI",
    element: () => import("./property-editor-ui-style-settings.element-a5Ng_FUK.js"),
    meta: {
      label: "Theme - Style Settings",
      propertyEditorSchemaAlias: "Umbraco.Plain.Json",
      // TODO : create a new property editor schema for this
      icon: "icon-checkbox",
      group: "UKindForge",
      supportsReadOnly: !0
    }
  }
], l = [
  {
    type: "collectionView",
    alias: "uKindForge.CollectionView.Themes",
    name: "Themes Collection View",
    element: () => import("./themes-collection-view-BINpABew.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: "Umb.Condition.CollectionAlias",
        match: "Umb.Collection.Document"
        // Type of entity to display in this collection view
      }
    ]
  }
], a = [
  {
    type: "blockEditorCustomView",
    alias: "uKindForge.BlockEditorCustomView.RichText",
    name: "Block Editor Custom View for Rich Text",
    element: () => import("./rich-text-block-preview-D4LH9Q7W.js"),
    forContentTypeAlias: "richTextBlock",
    forBlockEditor: "block-grid"
  }
], s = [
  {
    type: "blockEditorCustomView",
    alias: "uKindForge.BlockEditorCustomView.Button",
    name: "Block Editor Custom View for Rich Text",
    element: () => import("./button-block-preview-WYWS1RKu.js"),
    forContentTypeAlias: "buttonBlock",
    forBlockEditor: "block-grid"
  }
], n = [
  // properties editor
  ...o,
  ...i,
  ...t,
  ...r,
  // dashboard
  // collection
  ...l,
  // block preview
  ...a,
  ...s
];
e.registerMany(n);
//# sourceMappingURL=ukindforge-sitebuilder-backofficeui.js.map
