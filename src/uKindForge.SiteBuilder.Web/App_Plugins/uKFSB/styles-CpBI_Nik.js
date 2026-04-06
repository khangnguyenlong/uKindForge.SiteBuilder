const a = `<header class="site-header">\r
    <div class="container-xxl custom-container">\r
        <nav class="nav-pill navbar navbar-expand-lg" aria-label="Primary navigation">\r
            <div class="nav-grid">\r
\r
                <!-- LEFT: menu (same markup for desktop + mobile) -->\r
                <div class="nav-left">\r
                    <div class="collapse navbar-collapse" id="mainNav">\r
                        <div class="nav-panel">\r
                            <ul class="navbar-nav main-nav">\r
                                <li class="nav-item">\r
                                    <a class="nav-link" href="#">services</a>\r
                                </li>\r
\r
                                <!-- Dropdown L1 -->\r
                                <li class="nav-item dropdown" data-level="1">\r
                                    <button class="nav-link dropdown-toggle" type="button" aria-expanded="false">\r
                                        portfolio\r
                                    </button>\r
\r
                                    <ul class="dropdown-menu">\r
                                        <li><a class="dropdown-item" href="#">New Item</a></li>\r
\r
                                        <!-- Dropdown L2 -->\r
                                        <li class="dropdown-submenu dropdown" data-level="2">\r
                                            <button class="dropdown-item submenu-toggle" type="button"\r
                                                aria-expanded="false">\r
                                                New Item\r
                                            </button>\r
\r
                                            <ul class="dropdown-menu">\r
                                                <li><a class="dropdown-item" href="#">New Item</a></li>\r
\r
                                                <!-- Dropdown L3 -->\r
                                                <li class="dropdown-submenu dropdown" data-level="3">\r
                                                    <button class="dropdown-item submenu-toggle" type="button"\r
                                                        aria-expanded="false">\r
                                                        New Item\r
                                                    </button>\r
\r
                                                    <ul class="dropdown-menu">\r
                                                        <li><a class="dropdown-item" href="#">New Item</a></li>\r
                                                        <li><a class="dropdown-item" href="#">New Item</a></li>\r
                                                    </ul>\r
                                                </li>\r
\r
                                                <li><a class="dropdown-item" href="#">New Item</a></li>\r
                                            </ul>\r
                                        </li>\r
\r
                                        <li><a class="dropdown-item" href="#">New Item</a></li>\r
                                        <li><a class="dropdown-item" href="#">New Item</a></li>\r
                                    </ul>\r
                                </li>\r
                            </ul>\r
\r
                            <!-- Mobile actions will be moved here via JS (no HTML duplication) -->\r
                            <div class="mobile-actions-slot"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- CENTER -->\r
                <a class="navbar-brand brand" href="#" aria-label="Home">uKindForge</a>\r
\r
                <!-- RIGHT (desktop slot) -->\r
                <div class="nav-right-slot" aria-label="Header actions (desktop slot)">\r
                    <div class="header-actions" data-actions>\r
                        <div class="icon-row" aria-label="Quick actions">\r
                            <a class="icon-btn" href="#" aria-label="Call">\r
                                <svg viewBox="0 0 24 24" aria-hidden="true">\r
                                    <path\r
                                        d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L8.1 9.6a16 16 0 0 0 6 6l1.17-1.14a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.9z" />\r
                                </svg>\r
                            </a>\r
                            <a class="icon-btn" href="#" aria-label="Email">\r
                                <svg viewBox="0 0 24 24" aria-hidden="true">\r
                                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />\r
                                    <path d="m22 6-10 7L2 6" />\r
                                </svg>\r
                            </a>\r
                            <a class="icon-btn" href="#" aria-label="Location">\r
                                <svg viewBox="0 0 24 24" aria-hidden="true">\r
                                    <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z" />\r
                                    <circle cx="12" cy="10" r="2.5" />\r
                                </svg>\r
                            </a>\r
                            <a class="icon-btn" href="#" aria-label="Cart">\r
                                <svg viewBox="0 0 24 24" aria-hidden="true">\r
                                    <path d="M6 6h15l-1.5 8H7.2L6 6z" />\r
                                    <path d="M6 6 5 3H2" />\r
                                    <circle cx="9" cy="20" r="1.4" />\r
                                    <circle cx="18" cy="20" r="1.4" />\r
                                </svg>\r
                            </a>\r
                        </div>\r
                        <a class="btn-contact" href="#">contact me</a>\r
                    </div>\r
                </div>\r
\r
                <!-- MOBILE toggler (Bootstrap collapse only) -->\r
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"\r
                    data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"\r
                    aria-label="Toggle navigation">\r
                    <svg class="icon-menu" viewBox="0 0 24 24" aria-hidden="true">\r
                        <path d="M5 7h14M5 12h14M5 17h14" />\r
                    </svg>\r
                    <svg class="icon-close" viewBox="0 0 24 24" aria-hidden="true">\r
                        <path d="M6 6l12 12M18 6 6 18" />\r
                    </svg>\r
                </button>\r
\r
            </div>\r
        </nav>\r
    </div>\r
</header>`, n = ':host{--c-page-bg: #007a62;--c-surface: #ffffff;--c-text: #2f3f12;--c-brand: #ff7fb4;--c-hover: #efefef;--shadow-pill: 0 18px 40px rgba(0, 0, 0, .1);--shadow-dropdown: 0 18px 38px rgba(0, 0, 0, .14);--font-ui: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji";--font-brand: ui-rounded, "Comic Sans MS", "Trebuchet MS", var(--font-ui);--container-max: 1320px;--container-pad-x: 28px;--nav-height: 92px;--nav-radius: 999px;--nav-pad-x: 46px;--brand-size: clamp(15px, 3vw, 35px);--menu-font-size: 20px;--menu-font-weight: 700;--item-py: 12px;--item-px: 22px;--item-radius: 22px;--dd-radius: 26px;--dd-pad: 14px 16px;--dd-offset: 18px;--submenu-gap: 18px;--dd-minw: 260px;--caret-w: 9px;--caret-h: 7px;--icon-size: clamp(18px, 1.6vw, 22px);--icon-gap: clamp(12px, 1.6vw, 18px);--btn-height: 66px;--btn-pad-x: clamp(18px, 2.4vw, 34px);--btn-radius: 999px;--btn-font-size: clamp(18px, 1.8vw, 24px);--btn-font-weight: 700;--m-topbar-height: 58px;--m-brand-size: 34px;--m-toggle-size: 44px;--m-panel-border: 6px;--m-panel-radius: 28px;--m-panel-pad: 26px;--m-nav-gap: 16px;--m-box-radius: 20px;--m-box-pad: 10px;--m-box-pad-inner: 8px;--m-box-border: rgba(0, 0, 0, .06);--m-box-bg-l1: #f1f1f1;--m-box-bg-l2: #ededed;--m-box-bg-l3: #e7e7e7;--focus-ring: 0 0 0 4px rgba(255, 127, 180, .25);--anim-fast: .17s}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--c-page-bg);font-family:var(--font-ui);color:var(--c-text);overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}a{color:inherit;text-decoration:none}button{font:inherit;color:inherit}.site-header{padding-top:18px}.container-xxl.custom-container{max-width:var(--container-max);padding-left:var(--container-pad-x);padding-right:var(--container-pad-x)}.nav-pill{background:var(--c-surface);border-radius:var(--nav-radius);height:var(--nav-height);padding:0 var(--nav-pad-x);box-shadow:var(--shadow-pill);position:relative}.nav-grid{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;height:100%;column-gap:18px;width:100%}.brand{font-family:var(--font-brand);font-weight:900;font-size:var(--brand-size);line-height:1;color:var(--c-brand);white-space:nowrap;-webkit-user-select:none;user-select:none;justify-self:center;margin:0;padding:0}.nav-left{justify-self:start;min-width:0}.nav-right-slot{justify-self:end;min-width:0}.main-nav.navbar-nav{gap:5px;align-items:center;flex-direction:row}.nav-link{font-size:var(--menu-font-size);font-weight:var(--menu-font-weight);text-transform:lowercase;padding:var(--item-py) var(--item-px);border-radius:var(--item-radius);letter-spacing:.2px;color:var(--c-text)!important;line-height:1.15;white-space:nowrap;background:transparent;transition:background var(--anim-fast) ease;border:0}.nav-link:hover{background:var(--c-hover)}.dropdown{position:relative}.dropdown-toggle{display:inline-flex;align-items:center;gap:5px;cursor:pointer}.dropdown-toggle:after{content:"";width:0;height:0;border-left:var(--caret-w) solid transparent;border-right:var(--caret-w) solid transparent;border-top:var(--caret-h) solid currentColor;transform:translateY(1px);transition:transform var(--anim-fast) ease}.dropdown.open>.dropdown-toggle:after{transform:translateY(1px) rotate(180deg)}.dropdown-menu{position:absolute;top:calc(100% + var(--dd-offset));left:0;z-index:50;display:none;border:0;border-radius:var(--dd-radius);box-shadow:var(--shadow-dropdown);padding:var(--dd-pad);background:var(--c-surface);min-width:var(--dd-minw);list-style:none;margin:0}.dropdown-menu:before{content:"";position:absolute;left:0;right:0;top:calc(-1 * var(--dd-offset));height:var(--dd-offset);background:transparent}@media(min-width:992px){.dropdown:hover>.dropdown-menu{display:block}.dropdown.open>.dropdown-menu{display:block}.dropdown:hover>.nav-link{background:var(--c-hover)}.dropdown:hover>.dropdown-toggle:after{transform:translateY(1px) rotate(180deg)}}.dropdown-item,.submenu-toggle{width:100%;font-size:var(--menu-font-size);font-weight:var(--menu-font-weight);padding:var(--item-py) var(--item-px);border-radius:var(--item-radius);white-space:nowrap;background:transparent;border:0;text-align:left;text-transform:none;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:background var(--anim-fast) ease}.dropdown-item:hover,.submenu-toggle:hover{background:var(--c-hover)}.dropdown-submenu{position:relative}.dropdown-submenu>.dropdown-menu{top:0;left:calc(100% + var(--submenu-gap));margin-top:0;border-radius:22px;min-width:var(--dd-minw)}.dropdown-submenu>.dropdown-menu:before{content:"";position:absolute;top:0;left:calc(-1 * var(--submenu-gap));width:var(--submenu-gap);height:100%;background:transparent}@media(min-width:992px){.dropdown-submenu:hover>.dropdown-menu{display:block}.dropdown-submenu.open>.dropdown-menu{display:block}.dropdown-submenu>.submenu-toggle{position:relative}.dropdown-submenu>.submenu-toggle:after{content:"";position:absolute;right:18px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:var(--caret-h) solid transparent;border-bottom:var(--caret-h) solid transparent;border-left:calc(var(--caret-w) + 2px) solid var(--c-text);transition:transform var(--anim-fast) ease}.dropdown-submenu:hover>.submenu-toggle:after,.dropdown-submenu.open>.submenu-toggle:after{transform:translateY(-50%) rotate(90deg)}}.header-actions{display:flex;align-items:center;gap:18px;min-width:0;max-width:100%}.icon-row{display:flex;align-items:center;gap:var(--icon-gap);flex:0 0 auto}.icon-btn{width:42px;height:42px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;background:transparent;border:0;padding:0}.icon-btn svg{width:var(--icon-size);height:var(--icon-size);stroke:var(--c-text);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.btn-contact{height:var(--btn-height);padding:0 var(--btn-pad-x);border-radius:var(--btn-radius);background:var(--c-text);color:var(--c-surface);font-size:var(--btn-font-size);font-weight:var(--btn-font-weight);display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;flex:0 0 auto;max-width:260px;border:0}.nav-link:focus-visible,.dropdown-item:focus-visible,.submenu-toggle:focus-visible,.icon-btn:focus-visible,.btn-contact:focus-visible,.navbar-toggler:focus-visible{outline:none;box-shadow:var(--focus-ring)}@media(max-width:1399.98px){:root{--nav-pad-x: 34px;--menu-font-size: 19px;--btn-height: 60px;--btn-font-size: 20px;--btn-pad-x: 24px;--icon-gap: 14px}.icon-btn{width:40px;height:40px}}@media(max-width:1199.98px){:root{--nav-pad-x: 28px;--menu-font-size: 18px;--btn-height: 58px;--btn-font-size: 20px;--btn-pad-x: 22px;--icon-gap: 12px}.icon-btn{width:38px;height:38px}}.navbar-toggler{position:absolute;right:18px;top:50%;transform:translateY(-50%);border:0;padding:0;width:var(--m-toggle-size);height:var(--m-toggle-size);border-radius:999px;background:transparent;display:none;align-items:center;justify-content:center}.navbar-toggler svg{width:26px;height:26px;stroke:var(--c-brand);fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.navbar-toggler[aria-expanded=false] .icon-close,.navbar-toggler[aria-expanded=true] .icon-menu{display:none}@media(max-width:991.98px){.nav-pill{height:var(--m-topbar-height);padding:0 18px}.nav-grid{grid-template-columns:1fr}.brand{justify-self:start;font-size:var(--m-brand-size)}.navbar-toggler{display:inline-flex}.nav-left{position:absolute;left:0;right:0;top:calc(100% + 12px);width:100%;z-index:50}.nav-panel{border:var(--m-panel-border) solid var(--c-page-bg);border-radius:var(--m-panel-radius);background:var(--c-surface);width:100%;box-shadow:var(--shadow-pill);padding:var(--m-panel-pad);max-height:calc(100vh - 140px);overflow-y:auto;scrollbar-gutter:stable;overscroll-behavior:contain}.main-nav.navbar-nav{flex-direction:column;align-items:flex-start;gap:var(--m-nav-gap)}.main-nav>.nav-item>:where(.nav-link,.dropdown-toggle){padding:var(--item-py) var(--item-px);border-radius:var(--item-radius);width:fit-content}.main-nav>.dropdown.open>.dropdown-toggle{background:var(--c-hover)}.nav-panel .dropdown-menu{position:static;display:none;width:100%;box-shadow:none;border:1px solid var(--m-box-border);border-radius:var(--m-box-radius);padding:var(--m-box-pad);margin-top:10px;background:var(--m-box-bg-l1);flex-direction:column;gap:10px}.nav-panel .dropdown.open>.dropdown-menu{display:flex}.nav-panel .dropdown[data-level="2"].open>.dropdown-menu{background:var(--m-box-bg-l2);border:0;padding:var(--m-box-pad-inner)}.nav-panel .dropdown[data-level="3"].open>.dropdown-menu{background:var(--m-box-bg-l3);border:0;padding:var(--m-box-pad-inner)}.nav-panel .dropdown-submenu>.submenu-toggle:after{content:"";width:0;height:0;border-left:var(--caret-w) solid transparent;border-right:var(--caret-w) solid transparent;border-top:var(--caret-h) solid var(--c-text);transform:translateY(1px);transition:transform var(--anim-fast) ease}.nav-panel .dropdown-submenu.open>.submenu-toggle:after{transform:translateY(1px) rotate(180deg)}.mobile-actions-slot .header-actions{margin-top:26px;display:grid;gap:18px;justify-items:start}.mobile-actions-slot .header-actions .icon-row{gap:22px}.mobile-actions-slot .header-actions .btn-contact{width:min(260px,70vw);height:54px;font-size:18px;padding:0 22px}}';
export {
  n as c,
  a as m
};
//# sourceMappingURL=styles-CpBI_Nik.js.map
