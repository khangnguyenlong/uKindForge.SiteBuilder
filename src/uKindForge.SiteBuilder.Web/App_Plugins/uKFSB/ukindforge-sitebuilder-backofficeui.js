import { umbExtensionsRegistry as e } from "@umbraco-cms/backoffice/extension-registry";
const i = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.PropertyEditorUi.TogglePlus",
    name: "Toggle Plus Property Editor UI",
    element: () => import("./property-editor-ui-toggle-plus.element-C53AsXtx.js"),
    meta: {
      label: "uKindForge - Toggle Plus",
      propertyEditorSchemaAlias: "Umbraco.TrueFalse",
      icon: "icon-checkbox",
      group: "uKindForge",
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
], o = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.PropertyEditorUi.Theme",
    name: "Theme Property Editor UI",
    element: () => import("./property-editor-ui-theme.element-DJm205NO.js"),
    meta: {
      label: "uKindForge - Theme",
      propertyEditorSchemaAlias: "",
      icon: "icon-checkbox",
      group: "uKindForge",
      supportsReadOnly: !0
    }
  }
], t = [
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
], l = [
  {
    type: "blockEditorCustomView",
    alias: "uKindForge.BlockEditorCustomView.RichText",
    name: "Block Editor Custom View for Rich Text",
    element: () => import("./rich-text-block-preview-D4LH9Q7W.js"),
    forContentTypeAlias: "richTextBlock",
    forBlockEditor: "block-grid"
  }
], r = [
  {
    type: "blockEditorCustomView",
    alias: "uKindForge.BlockEditorCustomView.Button",
    name: "Block Editor Custom View for Rich Text",
    element: () => import("./button-block-preview-WYWS1RKu.js"),
    forContentTypeAlias: "buttonBlock",
    forBlockEditor: "block-grid"
  }
], a = [
  // properties editor
  ...i,
  ...o,
  // dashboard
  // collection
  ...t,
  // block preview
  ...l,
  ...r
];
e.registerMany(a);
//# sourceMappingURL=ukindforge-sitebuilder-backofficeui.js.map
