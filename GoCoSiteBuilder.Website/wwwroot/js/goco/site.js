// BackToTop button
document.addEventListener("DOMContentLoaded", function () {
    let backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});

// Testimonial
document.addEventListener("DOMContentLoaded", function () {
    tns({
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        gutter: 0,
        container: ".testimonial-one-active",
        center: true,
        nav: true,
        controls: false,
        speed: 400,
        controlsText: [
            '<i class="lni lni-arrow-left-circle"></i>',
            '<i class="lni lni-arrow-right-circle"></i>',
        ],
        responsive: {
            0: { items: 1 },
            992: { items: 2 },
            1200: { items: 3 },
        },
    });
});

//============== Portfolio-two
const filters = document.querySelectorAll(".portfolio-menu button");

filters.forEach((filter) => {
    filter.addEventListener("click", function () {
        // ==== Filter btn toggle
        let filterBtn = filters[0];
        while (filterBtn) {
            if (filterBtn.tagName === "BUTTON") {
                filterBtn.classList.remove("active");
            }
            filterBtn = filterBtn.nextSibling;
        }
        this.classList.add("active");

        // === filter
        let selectedFilter = filter.getAttribute("data-filter");
        let itemsToHide = document.querySelectorAll(
            `.grid .col-lg-4:not([data-filter='${selectedFilter}'])`
        );
        let itemsToShow = document.querySelectorAll(
            `.grid [data-filter='${selectedFilter}']`
        );

        if (selectedFilter == "all") {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll(".grid [data-filter]");
        }

        itemsToHide.forEach((el) => {
            el.classList.add("hide");
            el.classList.remove("show");
        });

        itemsToShow.forEach((el) => {
            el.classList.remove("hide");
            el.classList.add("show");
        });
    });
});

//========= glightbox
const myGallery2 = GLightbox({
    selector: ".glightbox2",
    type: "image",
    width: 900,
});
