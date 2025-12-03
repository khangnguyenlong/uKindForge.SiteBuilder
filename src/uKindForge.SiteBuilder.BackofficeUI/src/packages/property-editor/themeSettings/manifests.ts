export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'uKindForge.PropertyEditorUi.Theme',
        name: 'Theme Property Editor UI',        
        element: () => import('./property-editor-ui-theme.element.js'),
        meta: {
            label: 'uKindForge - Theme',
            propertyEditorSchemaAlias: '',
            icon: 'icon-checkbox',
            group: 'uKindForge',
            supportsReadOnly: true,
        }
    }
];
