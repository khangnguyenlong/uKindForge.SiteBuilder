import { html as u, css as g, state as w, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbDocumentItemDataResolver as T, UMB_DOCUMENT_COLLECTION_CONTEXT as O } from "@umbraco-cms/backoffice/document";
import { fromCamelCase as U } from "@umbraco-cms/backoffice/utils";
import { UUICardContentNodeElement as x } from "@umbraco-cms/backoffice/external/uui";
var z = Object.defineProperty, D = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, _ = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? D(t, s) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (r = (a ? c(t, s, r) : c(r)) || r);
  return a && r && z(t, s, r), r;
}, f = (e, t, s) => t.has(e) || m("Cannot " + s), h = (e, t, s) => (f(e, t, "read from private field"), s ? s.call(e) : t.get(e)), p = (e, t, s) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), v = (e, t, s) => (f(e, t, "access private method"), s), o, n, d, C;
let i = class extends y {
  // @state() private _updateDate?: Date;
  // @state() private _name?: string;
  //@state() private _items?: Array<UmbDocumentCollectionItemModel> = [];
  constructor() {
    super(), p(this, n), p(this, o, new T(this)), this.consumeContext(O, (e) => {
      e?.setupView(this);
    }), h(this, o).observe(h(this, o).state, (e) => this._state = e || "");
  }
  render() {
    return u`${super.render()} ${v(this, n, d).call(this)}`;
  }
};
o = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
d = function() {
  const e = v(this, n, C).call(this);
  if (e)
    return u`<uui-tag id="state" color=${e.color} look="secondary">${e.label}</uui-tag>`;
};
C = function() {
  if (this._state)
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
        return { color: "danger", label: U(this._state) };
    }
};
i.styles = [
  ...x.styles,
  g`
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
		`
];
_([
  w()
], i.prototype, "_state", 2);
i = _([
  E("themes-collection-view")
], i);
const V = i;
export {
  i as ThemesCollectionViewElement,
  V as default
};
//# sourceMappingURL=themes-collection-view-BINpABew.js.map
