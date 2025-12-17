import { html, customElement, property, state } from '@umbraco-cms/backoffice/external/lit';
import type { UmbPropertyEditorConfigCollection, UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/property-editor';
import type { UmbTogglePropertyEditorUiValue, ToggleRules, UmbBlockWorkspaceViewEditPropertyElement } from './types.js';
import { UMB_VALIDATION_FALSE_LOCALIZATION_KEY, UmbFormControlMixin } from '@umbraco-cms/backoffice/validation';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import type { UmbInputToggleElement } from '@umbraco-cms/backoffice/components';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';


@customElement('ukindforge-property-editor-ui-toggle-plus')
export default class UKindForgePropertyEditorUITogglePlusElement extends UmbFormControlMixin<UmbTogglePropertyEditorUiValue, typeof UmbLitElement, undefined>(UmbLitElement) implements UmbPropertyEditorUiElement {
    @property({ type: String })
    name?: string;

    /**
     * Sets the input to readonly mode, meaning value cannot be changed but still able to read and select its content.
     * @type {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true })
    readonly = false;

    /**
     * Sets the input to mandatory, meaning validation will fail if the value is empty.
     * @type {boolean}
     */
    @property({ type: Boolean })
    mandatory?: boolean;
    @property({ type: String })
    mandatoryMessage = UMB_VALIDATION_FALSE_LOCALIZATION_KEY;

    @state()
    private _ariaLabel?: string;

    @state()
    private _labelOff?: string;

    @state()
    private _labelOn?: string;

    @state()
    private _showLabels = false;

    @state()
    private _toggleOnRules?: string;

    @state()
    private toggleOffRules?: string;


    public set config(config: UmbPropertyEditorConfigCollection | undefined) {
        if (!config) return;

        this._labelOff = config.getValueByAlias('labelOff');
        this._labelOn = config.getValueByAlias('labelOn');
        this._showLabels = Boolean(config.getValueByAlias('showLabels'));
        this._ariaLabel = config.getValueByAlias('ariaLabel');

        this._toggleOnRules = config.getValueByAlias('toggleOnRules');
        this.toggleOffRules = config.getValueByAlias('toggleOffRules');
    }

    protected override firstUpdated(): void {
        this.addFormControlElement(this.shadowRoot!.querySelector('umb-input-toggle')!);
        this.applyShowHide();
    }

    #onChange(event: CustomEvent & { target: UmbInputToggleElement }) {
        const checked = event.target.checked;
        this.value = this.mandatory ? (checked ?? null) : checked;

        this.applyShowHide();

        this.dispatchEvent(new UmbChangeEvent());
    }

    private applyShowHide() {
        const isActive = this.value === true;
        this.showHideFields(isActive, this._toggleOnRules, this.toggleOffRules);
    }

    private showHideFields(value: boolean, toggleOnRules: string | undefined, toggleOffRules: string | undefined) {
        const rulesOn = this.parseRules(toggleOnRules);
        const rulesOff = this.parseRules(toggleOffRules);
        const rules = value ? rulesOn : rulesOff;
        const propertyRoot = this.findAncestor(this, 'umb-block-workspace-view-edit-properties');
        if (propertyRoot) {
            const shadow = propertyRoot.shadowRoot;
            if (shadow) {
                const propertyElements = shadow.querySelectorAll('umb-block-workspace-view-edit-property.property');

                setTimeout(() => {
                    propertyElements.forEach((el) => {
                        const propEl = el as UmbBlockWorkspaceViewEditPropertyElement;
                        const alias = propEl.property?.alias || "";
                        const shouldShow = rules.show.includes(alias);
                        const shouldHide = rules.hide.includes(alias);

                        if (shouldShow) {
                            (el as HTMLElement).style.display = '';
                        }

                        if (shouldHide) {
                            (el as HTMLElement).style.display = 'none';
                        }
                    });
                }, 100);
            }
        }
    }

    private parseRules(raw: string | undefined): ToggleRules {
        if (!raw) return { show: [], hide: [] };

        const list = raw
            .split(',')
            .map(x => x.trim())
            .filter(x => x.length > 0);

        return {
            show: list.filter(r => r.startsWith('+')).map(r => r.substring(1)),
            hide: list.filter(r => r.startsWith('-')).map(r => r.substring(1)),
        };
    }

    private findAncestor(el: HTMLElement | null, selector: string, maxLevel: number = 10): HTMLElement | null {
        let i = 1;
        while (el) {
            if (el.matches?.(selector)) return el;
            if (i > maxLevel) break;

            el = el.parentElement || (el.getRootNode() as ShadowRoot).host as HTMLElement;
            i++;
        }
        return null;
    }

    override render() {
        return html`
			<umb-input-toggle
				.ariaLabel=${this._ariaLabel
                ? this.localize.string(this._ariaLabel)
                : this.localize.term('general_toggleFor', [this.name])}
				.labelOn=${this._labelOn}
				.labelOff=${this._labelOff}
				?checked=${this.value}
				?showLabels=${this._showLabels}
				?required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				@change=${this.#onChange}
				?readonly=${this.readonly}>
			</umb-input-toggle>
		`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ukindforge-property-editor-ui-toggle-plus': UKindForgePropertyEditorUITogglePlusElement;
    }
}