export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'uKindForge.PropertyEditorUi.TogglePlus',
        name: 'Toggle Plus Property Editor UI',        
        element: () => import('./property-editor-ui-toggle-plus.element.js'),
        meta: {
            label: 'uKindForge - Toggle Plus',
            propertyEditorSchemaAlias: 'Umbraco.TrueFalse',
            icon: 'icon-checkbox',
            group: 'uKindForge',
            supportsReadOnly: true,
            settings: {
                properties: [
                    {
                        alias: 'default',
                        label: 'Preset value',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.Toggle',
                        config: [
                            {
                                alias: 'ariaLabel',
                                value: 'toggle for the initial state of this data type',
                            },
                        ],
                    },
                    {
                        alias: 'showLabels',
                        label: 'Show on/off labels',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.Toggle',
                        config: [
                            {
                                alias: 'ariaLabel',
                                value: 'toggle for weather if label should be displayed',
                            },
                        ],
                    },
                    {
                        alias: 'labelOn',
                        label: 'Label On',
                        description: 'Displays text when enabled.',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.TextBox',
                    },
                    {
                        alias: 'labelOff',
                        label: 'Label Off',
                        description: 'Displays text when disabled.',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.TextBox',
                    },
                    {
                        alias: 'ariaLabel',
                        label: 'Screen Reader Label',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.TextBox',
                    },
                    {
                        alias: 'toggleOnRules',
                        label: 'Field Rules (When Toggle ON)',
                        description: 'Define show/hide fields when toggle is ON. Use +Field for show, -Field for hide. Ex: +field1,-field2',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.TextBox',
                    },
                    {
                        alias: 'toggleOffRules',
                        label: 'Field Rules (When Toggle OFF)',
                        description: 'Define show/hide fields when toggle is OFF. Use +Field for show, -Field for hide. Ex: +field1,-field2',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.TextBox',
                    }
                ]
            }
        }
    }
];
