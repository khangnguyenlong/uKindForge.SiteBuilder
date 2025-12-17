export const manifests: Array<UmbExtensionManifest> = [
    {
        type: "collectionView",
        alias: "uKindForge.CollectionView.Themes",
        name: "Themes Collection View",
        element: () => import('./themes-collection-view.js'),
        meta: {
            label: "Table",
            icon: "icon-list",
            pathName: "table"
        },
        conditions: [
            {
                alias: "Umb.Condition.CollectionAlias",
                match: "Umb.Collection.Document" // Type of entity to display in this collection view
            }
        ]
    }
];
