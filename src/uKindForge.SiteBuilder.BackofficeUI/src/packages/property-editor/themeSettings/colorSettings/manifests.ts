export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'uKindForge.PropertyEditorUi.ColorSettings',
        name: 'Color Settings Property Editor UI',
        element: () => import('./property-editor-ui-color-settings.element.js'),
        meta: {
            label: 'Theme - Color Settings',
            propertyEditorSchemaAlias: 'Umbraco.Plain.Json', // TODO : create a new property editor schema for this
            icon: 'icon-checkbox',
            group: 'UKindForge',
            supportsReadOnly: true,
        }
    }
];
