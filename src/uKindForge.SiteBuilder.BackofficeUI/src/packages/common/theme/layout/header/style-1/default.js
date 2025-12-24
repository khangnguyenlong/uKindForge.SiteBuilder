(function () {
    const root = document.querySelector(".site-header");
    if (!root) return;

    const mq = window.matchMedia("(max-width: 991.98px)");
    const actions = root.querySelector("[data-actions]");
    const desktopSlot = root.querySelector(".nav-right-slot");
    const mobileSlot = root.querySelector(".mobile-actions-slot");

    function placeActions() {
        if (!actions || !desktopSlot || !mobileSlot) return;
        const target = mq.matches ? mobileSlot : desktopSlot;
        if (actions.parentElement !== target) target.appendChild(actions);
    }

    placeActions();
    mq.addEventListener?.("change", placeActions);

    function isMobile() { return mq.matches; }

    function closeSiblings(li) {
        const parentUl = li.parentElement;
        if (!parentUl) return;

        parentUl.querySelectorAll(":scope > li.dropdown.open").forEach((sib) => {
            if (sib !== li) {
                sib.classList.remove("open");
                const btn = sib.querySelector(":scope > button[aria-expanded]");
                if (btn) btn.setAttribute("aria-expanded", "false");

                sib.querySelectorAll("li.dropdown.open").forEach((d) => {
                    d.classList.remove("open");
                    const b = d.querySelector(":scope > button[aria-expanded]");
                    if (b) b.setAttribute("aria-expanded", "false");
                });
            }
        });
    }

    function toggleDropdown(li, btn) {
        const willOpen = !li.classList.contains("open");
        closeSiblings(li);
        li.classList.toggle("open", willOpen);
        btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    }

    // Attach handlers for ALL dropdown buttons (any level)
    root.querySelectorAll("li.dropdown > button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const li = btn.closest("li.dropdown");
            if (!li) return;
            toggleDropdown(li, btn);
        });
    });

    // Close on outside click (desktop only)
    document.addEventListener("click", (e) => {
        if (isMobile()) return;
        if (e.target.closest(".nav-pill")) return;

        root.querySelectorAll("li.dropdown.open").forEach((li) => {
            li.classList.remove("open");
            const btn = li.querySelector(":scope > button[aria-expanded]");
            if (btn) btn.setAttribute("aria-expanded", "false");
        });
    });

    // When collapse closes (mobile), reset dropdown states
    const collapseEl = document.getElementById("mainNav");
    if (collapseEl) {
        collapseEl.addEventListener("hidden.bs.collapse", () => {
            root.querySelectorAll("li.dropdown.open").forEach((li) => {
                li.classList.remove("open");
                const btn = li.querySelector(":scope > button[aria-expanded]");
                if (btn) btn.setAttribute("aria-expanded", "false");
            });
        });
    }
})();