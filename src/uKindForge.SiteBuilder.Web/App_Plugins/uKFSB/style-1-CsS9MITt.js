import { html as n } from "@umbraco-cms/backoffice/external/lit";
function t(a) {
  return n`
    <header class="ukf-header ukf-header--s1">
      <div class="ukf-container">
        <div class="ukf-header__row">
          <div class="ukf-brand">${a.brand ?? "uKindForge"}</div>
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
export {
  t as renderHeaderStyle
};
//# sourceMappingURL=style-1-CsS9MITt.js.map
