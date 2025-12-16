export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'uKindForge.PropertyEditorUi.TypographySettings',
        name: 'Typography Settings Property Editor UI',
        element: () => import('./property-editor-ui-typography-settings.element.js'),
        meta: {
            label: 'Theme - Typography Settings',
            propertyEditorSchemaAlias: 'Umbraco.Plain.Json', // TODO : create a new property editor schema for this
            icon: 'icon-checkbox',
            group: 'UKindForge',
            supportsReadOnly: true,
        }
    }
];
