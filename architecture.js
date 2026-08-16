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
       SEARCH + FILTER
    ===================================================== */

    function filterCards() {

        const query = search
            ? search.value.toLowerCase().trim()
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


            const categoryMatch =
                currentFilter === "all" ||
                category.split(" ").includes(currentFilter);


            const searchMatch =
                !query ||
                name.includes(query) ||
                location.includes(query) ||
                period.includes(query) ||
                style.includes(query);


            if (categoryMatch && searchMatch) {

                card.style.display = "";

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
                visibleCards === 0 ? "block" : "none";

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

    if (search) {

        search.addEventListener("input", () => {
            filterCards();
        });

    }


    /* =====================================================
       OPEN MONUMENT POPUP
       CLICKING ANYWHERE ON CARD
    ===================================================== */

    cards.forEach(card => {

        card.addEventListener("click", () => {

            openMonumentModal(card);

        });

    });


    function openMonumentModal(card) {

        if (!modal) return;


        /* ---------------------------------------------
           GET DATA DIRECTLY FROM THE CARD
        --------------------------------------------- */

        const image = card.querySelector(".card-image img");


        const title =
            card.dataset.name ||
            card.querySelector("h3")?.textContent.trim() ||
            "Indian Monument";


        const location =
            card.dataset.location ||
            card.querySelector(".card-content > span")
                ?.textContent.trim() ||
            "";


        const period =
            card.dataset.period ||
            "Historical period not available";


        const style =
            card.dataset.style ||
            "Indian Architecture";


        const description =
            card.dataset.description ||
            card.querySelector(".card-content p")
                ?.textContent.trim() ||
            "Information about this monument is not available.";


        /* ---------------------------------------------
           IMAGE
           
           IMPORTANT:
           We use ONLY the image already inside
           this exact card.

           No random online fallback.
        --------------------------------------------- */

        if (image && modalImage) {

            modalImage.src = image.currentSrc || image.src;

            modalImage.alt =
                image.alt || title;

        }


        /* ---------------------------------------------
           POPULATE MODAL
        --------------------------------------------- */

        if (modalLocation) {
            modalLocation.textContent = location;
        }

        if (modalTitle) {
            modalTitle.textContent = title;
        }

        if (modalPeriod) {
            modalPeriod.textContent = period;
        }

        if (modalStyle) {
            modalStyle.textContent = style;
        }

        if (modalDescription) {
            modalDescription.textContent = description;
        }


        /* ---------------------------------------------
           SHOW MODAL
        --------------------------------------------- */

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    function closeMonumentModal() {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeMonumentModal
        );

    }


    /* Click outside popup */

    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {

                closeMonumentModal();

            }

        });

    }


    /* ESC key */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMonumentModal();

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
                ((x / rect.width) - 0.5) * 5;


            const rotateX =
                ((y / rect.height) - 0.5) * -5;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

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
       REVEAL ANIMATIONS
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

                            entry.target.classList.add(
                                "visible"
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

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

    }


    /* =====================================================
       IMAGE ERROR HANDLING
       
       DO NOT SUBSTITUTE A RANDOM IMAGE.
       If an image is missing, show a clean placeholder.
    ===================================================== */

    cards.forEach(card => {

        const image =
            card.querySelector(".card-image img");


        if (!image) return;


        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                const imageContainer =
                    image.closest(".card-image");


                if (imageContainer) {

                    imageContainer.classList.add(
                        "image-missing"
                    );

                }

            }
        );

    });


    /* =====================================================
       INITIAL FILTER
    ===================================================== */

    filterCards();

});
