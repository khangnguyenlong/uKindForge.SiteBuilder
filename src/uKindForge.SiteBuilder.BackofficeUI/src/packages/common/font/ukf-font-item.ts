import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import type { GoogleFont, SelectedFont } from "./types";
import "../accordion/ukf-accordion";
import "../control/ukf-control";
import "../select/ukf-select-search";

@customElement("ukf-font-item")
export class UkfFontItem extends LitElement {
    @property({ type: Object }) font!: SelectedFont;
    @property({ type: Array }) fontList: GoogleFont[] = [];

    static styles = css`
    :host {
      display: block;
    }
    .preview {
      padding: 12px;
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      margin-top: 8px;
      font-size: 30px;
      line-height: 1.4;
    }
  `;

    /** 
     * Get font object by font family 
     */
    private get selectedFontObj(): GoogleFont | undefined {
        return this.fontList.find((f) => f.family === this.font.family);
    }

    private get variants(): string[] {
        return this.selectedFontObj?.variants ?? [];
    }

    //   private get category(): string {
    //     return this.selectedFontObj?.category ?? "";
    //   }

    //   private get fontFileUrl(): string {
    //     if (!this.font.variant) return "";
    //     return this.selectedFontObj?.files[this.font.variant] ?? "";
    //   }

    /** 
     * Load google font dynamically when variant changes
     */
    private loadFont(family: string, url: string) {
        if (!family || !url) return;

        const id = "gf-" + family.replace(/\s+/g, "-") + "-" + this.font.variant;
        if (document.getElementById(id)) return;

        const fontFace = new FontFace(family, `url(${url})`);
        fontFace.load().then((loaded) => {
            document.fonts.add(loaded);
        });

        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = `https://fonts.googleapis.com/css2?family=${family.replace(
            /\s+/g,
            "+"
        )}:wght@${this.font.variant}&display=swap`;

        document.head.appendChild(link);
    }

    private emitChange(changed: Partial<SelectedFont>) {
        this.dispatchEvent(
            new CustomEvent("font-change", {
                detail: changed,
                bubbles: true,
                composed: true,
            })
        );
    }

    private onFamilyChange(value: string) {
        this.emitChange({ family: value, variant: this.font.variant });
    }


    private onVariantChange(e: Event) {
        const variant = (e.target as HTMLSelectElement).value;
        this.emitChange({ family: this.font.family, variant }); 

        // load font preview
        if (this.selectedFontObj) {
            const fileUrl = this.selectedFontObj.files[variant];
            this.loadFont(this.selectedFontObj.family, fileUrl);
        }
    }

    render() {
        return html`
        <ukf-accordion heading=${this.font.family || "Choose Font"}>
            <div slot="content">
            <!-- Family -->
            <ukf-control label="Family">
                <ukf-select-search
                    slot="control"
                    .options=${this.fontList.map(f => ({
                        label: `${f.family} - ${f.category}`,
                        value: f.family,
                        selected: this.font.family === f.family
                    }))}
                    .value=${this.font.family}
                    @change=${(e: CustomEvent) => this.onFamilyChange(e.detail)}
                ></ukf-select-search>

            </ukf-control>

            <!-- Variant -->
            ${this.font.family
                ? html`
                <ukf-control label="Variant">
                    <uui-select
                        slot="control"
                        @change=${this.onVariantChange}
                        .options=${this.variants.map((v) => ({
                            name: v,
                            value: v,
                            selected: this.font.variant === v
                        }))}
                    >
                    </uui-select>
                </ukf-control>
                ` : ""
            }

            <!-- Preview -->
            ${this.font.family && this.font.variant
            ? html`
                <div
                class="preview"
                style="font-family: '${this.font.family}', sans-serif;"
                >
                The quick brown fox jumps over the lazy dog.
                </div>
            ` : ""
            }
            </div>
        </ukf-accordion>
    `;
    }
}
