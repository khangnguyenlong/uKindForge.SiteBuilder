export const manifests: Array<UmbExtensionManifest> = [
    {
        type: "blockEditorCustomView",
        alias: "uKindForge.BlockEditorCustomView.Button",
        name: "Block Editor Custom View for Rich Text",
        element: () => import('./button-block-preview.js'),
        forContentTypeAlias: "buttonBlock",
        forBlockEditor: "block-grid",
    }
];
