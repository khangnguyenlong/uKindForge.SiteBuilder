import { css, customElement, html, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UMB_DOCUMENT_COLLECTION_CONTEXT } from '@umbraco-cms/backoffice/document';
// import type { UmbDocumentCollectionItemModel } from '@umbraco-cms/backoffice/document';
// import type { UmbCollectionColumnConfiguration } from '@umbraco-cms/backoffice/collection';
import { UmbDocumentItemDataResolver } from '@umbraco-cms/backoffice/document';
import { fromCamelCase } from '@umbraco-cms/backoffice/utils';
import type { UUIInterfaceColor } from '@umbraco-cms/backoffice/external/uui';
import { UUICardContentNodeElement } from '@umbraco-cms/backoffice/external/uui';

@customElement('themes-collection-view')
export class ThemesCollectionViewElement extends UmbLitElement {
    #resolver = new UmbDocumentItemDataResolver(this);

    // @state() private _createDate?: Date;
    @state() private _state?: string;
    // @state() private _updateDate?: Date;
    // @state() private _name?: string;
    //@state() private _items?: Array<UmbDocumentCollectionItemModel> = [];

    constructor() {
        super();

        this.consumeContext(UMB_DOCUMENT_COLLECTION_CONTEXT, (collectionContext) => {
            collectionContext?.setupView(this);

            // this.observe(collectionContext?.items, (items) => {
            //     this._items = items;
            // });
        });

        // this.#resolver.observe(this.#resolver.name, (name) => (this._name = name || ''));
        this.#resolver.observe(this.#resolver.state, (state) => (this._state = state || ''));
        // this.#resolver.observe(this.#resolver.createDate, (createDate) => (this._createDate = createDate));
        // this.#resolver.observe(this.#resolver.updateDate, (updateDate) => (this._updateDate = updateDate));
    }

    override render() {
        return html`${super.render()} ${this.#renderState()}`;
    }

    #renderState() {
        const tagConfig = this.#getStateTagConfig();
        if (!tagConfig) return;
        return html`<uui-tag id="state" color=${tagConfig.color} look="secondary">${tagConfig.label}</uui-tag>`;
    }

    #getStateTagConfig(): { color: UUIInterfaceColor; label: string } | undefined {
        if (!this._state) return;
        switch (this._state) {
            // case DocumentVariantStateModel.PUBLISHED:
            // 	return { color: 'positive', label: this.localize.term('content_published') };
            // case DocumentVariantStateModel.PUBLISHED_PENDING_CHANGES:
            // 	return { color: 'warning', label: this.localize.term('content_publishedPendingChanges') };
            // case DocumentVariantStateModel.DRAFT:
            // 	return { color: 'default', label: this.localize.term('content_unpublished') };
            // case DocumentVariantStateModel.NOT_CREATED:
            // 	return { color: 'danger', label: this.localize.term('content_notCreated') };
            default:
                return { color: 'danger', label: fromCamelCase(this._state) };
        }
    }

    static override styles = [
        ...UUICardContentNodeElement.styles,
        css`
			#state {
				position: absolute;
				top: var(--uui-size-4);
				right: var(--uui-size-4);
				display: flex;
				justify-content: right;
			}

			#properties {
				font-size: var(--uui-type-small-size);
				line-height: calc(2 * var(--uui-size-3));

				> ul {
					list-style: none;
					padding-inline-start: 0px;
					margin: 0;

					> li > span {
						font-weight: 700;
					}
				}
			}
		`,
    ];
}

export default ThemesCollectionViewElement;

declare global {
    interface HTMLElementTagNameMap {
        'themes-collection-view': ThemesCollectionViewElement;
    }
}