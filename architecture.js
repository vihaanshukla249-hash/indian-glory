document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loader = document.getElementById("pageLoader");

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("architectureSearch");

    const cards = document.querySelectorAll(".architecture-card");
    const noResults = document.getElementById("noResults");

    const modal = document.getElementById("architectureModal");
    const modalClose = document.getElementById("modalClose");

    const modalImage = document.getElementById("modalImage");
    const modalLocation = document.getElementById("modalLocation");
    const modalTitle = document.getElementById("modalTitle");
    const modalPeriod = document.getElementById("modalPeriod");
    const modalStyle = document.getElementById("modalStyle");
    const modalDescription = document.getElementById("modalDescription");

    let currentFilter = "all";


    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hidden");
            }

        }, 700);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       SEARCH + FILTER
    ===================================================== */

    function filterCards() {

        const query =
            searchInput
                ? searchInput.value.toLowerCase().trim()
                : "";

        let visibleCards = 0;

        cards.forEach(card => {

            const category =
                (card.dataset.category || "").toLowerCase();

            const name =
                (card.dataset.name || "").toLowerCase();

            const location =
                (card.dataset.location || "").toLowerCase();

            const period =
                (card.dataset.period || "").toLowerCase();

            const style =
                (card.dataset.style || "").toLowerCase();

            const description =
                (card.dataset.description || "").toLowerCase();


            /*
             * Category matching
             *
             * Some cards have multiple categories:
             * "fort medieval"
             *
             * Therefore we use includes()
             * instead of ===
             */

            const categoryMatch =
                currentFilter === "all" ||
                category
                    .split(/\s+/)
                    .includes(currentFilter);


            const searchMatch =
                !query ||
                name.includes(query) ||
                location.includes(query) ||
                period.includes(query) ||
                style.includes(query) ||
                description.includes(query);


            if (categoryMatch && searchMatch) {

                card.style.display = "block";

                requestAnimationFrame(() => {
                    card.style.opacity = "1";
                    card.style.transform = "";
                });

                visibleCards++;

            } else {

                card.style.opacity = "0";

                setTimeout(() => {

                    if (card.style.opacity === "0") {
                        card.style.display = "none";
                    }

                }, 250);

            }

        });


        if (noResults) {

            noResults.style.display =
                visibleCards === 0
                    ? "block"
                    : "none";

        }

    }


    /* =====================================================
       FILTER BUTTONS
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            currentFilter =
                button.dataset.filter || "all";

            filterCards();

        });

    });


    /* =====================================================
       SEARCH
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterCards
        );

    }


    /* =====================================================
       OPEN MONUMENT POPUP
    ===================================================== */

    function openModal(card) {

        if (!modal) return;


        const image =
            card.querySelector(".card-image img");


        /* IMAGE */

        if (image && modalImage) {

            modalImage.src = image.src;

            modalImage.alt =
                image.alt ||
                card.dataset.name ||
                "Indian monument";

        }


        /* LOCATION */

        if (modalLocation) {

            modalLocation.textContent =
                card.dataset.location || "";

        }


        /* TITLE */

        if (modalTitle) {

            modalTitle.textContent =
                card.dataset.name || "";

        }


        /* PERIOD */

        if (modalPeriod) {

            modalPeriod.textContent =
                card.dataset.period || "";

        }


        /* STYLE */

        if (modalStyle) {

            modalStyle.textContent =
                card.dataset.style || "";

        }


        /* DESCRIPTION */

        if (modalDescription) {

            modalDescription.textContent =
                card.dataset.description ||
                card.querySelector(".card-content p")?.textContent ||
                "";

        }


        /* SHOW */

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    /* =====================================================
       CARD CLICK
    ===================================================== */

    cards.forEach(card => {

        card.addEventListener("click", event => {

            /*
             * Any click on the card opens the popup.
             *
             * This includes:
             * - image
             * - title
             * - description
             * - VIEW STORY button
             */

            event.preventDefault();

            openModal(card);

        });

    });


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    /* CLOSE BUTTON */

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    /* CLICK OUTSIDE POPUP */

    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    /* ESC KEY */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* =====================================================
       3D CARD MOVEMENT
    ===================================================== */

    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth <= 800) return;

                /*
                 * Don't move cards while popup is open.
                 */

                if (
                    modal &&
                    modal.classList.contains("active")
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const rotateY =
                    ((x / rect.width) - 0.5) * 5;

                const rotateX =
                    ((y / rect.height) - 0.5) * -5;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });


    /* =====================================================
       SCROLL NAVIGATION
    ===================================================== */

    const siteNav =
        document.querySelector(".site-nav");


    window.addEventListener("scroll", () => {

        if (!siteNav) return;

        siteNav.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    });


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(35px)";

            element.style.transition =
                "opacity .8s ease, transform .8s ease";

            observer.observe(element);

        });

    }


    /* =====================================================
       INITIAL FILTER
    ===================================================== */

    filterCards();

});
