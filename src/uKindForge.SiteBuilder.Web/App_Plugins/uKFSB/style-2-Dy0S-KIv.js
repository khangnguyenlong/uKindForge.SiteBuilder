import { html as e } from "@umbraco-cms/backoffice/external/lit";
function f(o) {
  return e`
    <footer class="ukf-footer">
        <div class="ukf-container">
          <div class="ukf-footer__grid">
            <div>
              <div class="ukf-footer__title">Company</div>
              <a class="ukf-footer__link" href="#">About</a>
              <a class="ukf-footer__link" href="#">Careers</a>
              <a class="ukf-footer__link" href="#">Contact</a>
            </div>

            <div>
              <div class="ukf-footer__title">Product</div>
              <a class="ukf-footer__link" href="#">Features</a>
              <a class="ukf-footer__link" href="#">Themes</a>
              <a class="ukf-footer__link" href="#">Docs</a>
            </div>

            <div>
              <div class="ukf-footer__title">Legal</div>
              <a class="ukf-footer__link" href="#">Privacy</a>
              <a class="ukf-footer__link" href="#">Terms</a>
            </div>
          </div>

          <div class="ukf-footer__bottom">${o.copyright || "© 2026 uKindForge"}</div>
        </div>
      </footer>
  `;
}
export {
  f as renderFooterStyle
};
//# sourceMappingURL=style-2-Dy0S-KIv.js.map
