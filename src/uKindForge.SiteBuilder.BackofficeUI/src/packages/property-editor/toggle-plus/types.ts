export type UmbTogglePropertyEditorUiValue = boolean;
export type ToggleRules = {
    show: string[];
    hide: string[];
};

export interface UmbBlockWorkspaceViewEditPropertyElement extends HTMLElement {
    property?: {
        alias?: string;
        [key: string]: any;
    };
}