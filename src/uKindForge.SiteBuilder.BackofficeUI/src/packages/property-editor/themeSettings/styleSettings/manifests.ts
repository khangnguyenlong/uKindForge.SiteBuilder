export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'uKindForge.PropertyEditorUi.StyleSettings',
        name: 'Style Settings Property Editor UI',
        element: () => import('./property-editor-ui-style-settings.element.js'),
        meta: {
            label: 'Theme - Style Settings',
            propertyEditorSchemaAlias: 'Umbraco.Plain.Json', // TODO : create a new property editor schema for this
            icon: 'icon-checkbox',
            group: 'UKindForge',
            supportsReadOnly: true,
        }
    }
];
