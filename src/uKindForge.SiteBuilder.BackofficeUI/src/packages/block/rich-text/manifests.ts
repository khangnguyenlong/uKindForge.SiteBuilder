export const manifests: Array<UmbExtensionManifest> = [
    {
        type: "blockEditorCustomView",
        alias: "uKindForge.BlockEditorCustomView.RichText",
        name: "Block Editor Custom View for Rich Text",
        element: () => import('./rich-text-block-preview.js'),
        forContentTypeAlias: "richTextBlock",
        forBlockEditor: "block-grid",
    }
];
