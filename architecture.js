document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loader = document.getElementById("pageLoader");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const search = document.getElementById("architectureSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
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

            const isOpen = navLinks.classList.toggle("open");

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
       FILTER + SEARCH
    ===================================================== */

    function filterCards() {

        const query = search
            ? search.value.toLowerCase().trim()
            : "";

        let visible = 0;

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


            const categoryMatch =
                currentFilter === "all" ||
                category.split(" ").includes(currentFilter);


            const searchMatch =
                !query ||
                name.includes(query) ||
                location.includes(query) ||
                period.includes(query) ||
                style.includes(query) ||
                description.includes(query);


            if (categoryMatch && searchMatch) {

                card.classList.remove("hidden-card");

                visible++;

            } else {

                card.classList.add("hidden-card");

            }

        });


        if (noResults) {

            noResults.style.display =
                visible === 0 ? "block" : "none";

        }

    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            currentFilter =
                button.dataset.filter || "all";

            filterCards();

        });

    });


    if (search) {
        search.addEventListener("input", filterCards);
    }


    /* =====================================================
       MONUMENT MODAL
    ===================================================== */

    function openModal(card) {

        const image = card.querySelector(".card-image img");

        if (image && modalImage) {

            modalImage.src =
                card.dataset.image || image.src;

            modalImage.alt =
                image.alt || card.dataset.name;

        }


        if (modalLocation) {
            modalLocation.textContent =
                card.dataset.location || "";
        }


        if (modalTitle) {
            modalTitle.textContent =
                card.dataset.name || "";
        }


        if (modalPeriod) {
            modalPeriod.textContent =
                card.dataset.period || "";
        }


        if (modalStyle) {
            modalStyle.textContent =
                card.dataset.style || "";
        }


        if (modalDescription) {
            modalDescription.textContent =
                card.dataset.description || "";
        }


        if (modal) {

            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        }

    }


    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    cards.forEach(card => {

        const button =
            card.querySelector(".card-button");


        card.addEventListener("click", () => {

            openModal(card);

        });


        if (button) {

            button.addEventListener("click", event => {

                event.stopPropagation();

                openModal(card);

            });

        }

    });


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* =====================================================
       3D CARD MOVEMENT
    ===================================================== */

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth <= 800) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            card.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       NAVIGATION SCROLL EFFECT
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
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

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

        observer.observe(element);

    });


    /* =====================================================
       PARALLAX HERO
    ===================================================== */

    const hero =
        document.querySelector(".architecture-hero");

    const heroBackground =
        document.querySelector(".hero-background");


    window.addEventListener("scroll", () => {

        if (!hero || !heroBackground) return;

        const scroll =
            window.scrollY;

        if (scroll < window.innerHeight) {

            heroBackground.style.transform =
                `translateY(${scroll * 0.18}px) scale(1.08)`;

        }

    });


    /* =====================================================
       INITIAL FILTER
    ===================================================== */

    filterCards();

});
