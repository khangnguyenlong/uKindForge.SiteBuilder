import { html, type TemplateResult } from "@umbraco-cms/backoffice/external/lit";

export type UkfHeaderProps = {
  brand?: string;
};

export function renderHeaderStyle(props: UkfHeaderProps): TemplateResult {
  return html`
    <header class="ukf-header ukf-header--s5">
      <div class="ukf-container">
        <div class="ukf-header__row">
          <div class="ukf-brand">${props.brand ?? "uKindForge"}</div>
          <nav class="ukf-nav">
            <a class="ukf-nav__link" href="#">Home</a>
            <a class="ukf-nav__link" href="#">Templates</a>
            <a class="ukf-nav__link" href="#">Pricing</a>
          </nav>
          <div class="ukf-btn-row">
            <button class="ukf-btn ukf-btn--secondary" type="button">Log in</button>
            <button class="ukf-btn ukf-btn--primary" type="button">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  `;
}
