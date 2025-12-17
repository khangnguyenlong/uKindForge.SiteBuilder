const e = {
  type: "propertyEditorSchema",
  name: "Toggle Plus",
  alias: "uKindForge.TogglePlus",
  meta: {
    defaultPropertyEditorUiAlias: "uKindForge.PropertyEditorUi.TogglePlus"
  }
}, o = [
  {
    type: "propertyEditorUi",
    alias: "uKindForge.TogglePlus",
    name: "Toggle Plus Property Editor UI",
    element: () => import("./property-editor-ui-toggle-plus.element-DZI5P9DL.js"),
    meta: {
      label: "Toggle Plus",
      propertyEditorSchemaAlias: "uKindForge.TogglePlus",
      icon: "icon-checkbox",
      group: "common",
      supportsReadOnly: !0
    }
  },
  e
], t = [
  ...o
];
export {
  t as manifests
};
//# sourceMappingURL=manifests.js.map
