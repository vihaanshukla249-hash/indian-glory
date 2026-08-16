document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const filters = document.querySelectorAll(".filter");
    const search = document.getElementById("search");
    const cards = document.querySelectorAll(".architecture-card");
    const noResults = document.getElementById("noResults");

    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");

    const modalImage = document.getElementById("modalImage");
    const modalCategory = document.getElementById("modalCategory");
    const modalTitle = document.getElementById("modalTitle");
    const modalPeriod = document.getElementById("modalPeriod");
    const modalPeriodTwo = document.getElementById("modalPeriodTwo");
    const modalPlace = document.getElementById("modalPlace");
    const modalDescription = document.getElementById("modalDescription");

    let currentFilter = "all";


    /* LOADER */

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 600);
    });


    /* MOBILE MENU */

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });


    /* FILTER + SEARCH */

    function filterCards() {

        const query = search.value.toLowerCase().trim();
        let visible = 0;

        cards.forEach(card => {

            const category = card.dataset.category;
            const name = card.dataset.name.toLowerCase();
            const place = card.dataset.place.toLowerCase();
            const period = card.dataset.period.toLowerCase();

            const categoryMatch =
                currentFilter === "all" ||
                category === currentFilter;

            const searchMatch =
                !query ||
                name.includes(query) ||
                place.includes(query) ||
                period.includes(query);

            if (categoryMatch && searchMatch) {

                card.style.display = "block";

                requestAnimationFrame(() => {
                    card.style.opacity = "1";
                });

                visible++;

            } else {

                card.style.opacity = "0";

                setTimeout(() => {
                    if (card.style.opacity === "0") {
                        card.style.display = "none";
                    }
                }, 250);
            }
        });

        noResults.style.display =
            visible === 0 ? "block" : "none";
    }


    filters.forEach(button => {

        button.addEventListener("click", () => {

            filters.forEach(item =>
                item.classList.remove("active")
            );

            button.classList.add("active");

            currentFilter = button.dataset.filter;

            filterCards();
        });

    });


    search.addEventListener("input", filterCards);


    /* MODAL */

    cards.forEach(card => {

        card.addEventListener("click", event => {

            if (event.target.closest(".explore-card")) {
                event.stopPropagation();
            }

            const image = card.querySelector("img");

            modalImage.src = image.src;
            modalImage.alt = image.alt;

            modalCategory.textContent =
                card.querySelector(".card-content > span").textContent;

            modalTitle.textContent =
                card.dataset.name;

            modalPeriod.textContent =
                card.dataset.period;

            modalPeriodTwo.textContent =
                card.dataset.period;

            modalPlace.textContent =
                card.dataset.place;

            modalDescription.textContent =
                card.querySelector(".card-content p").textContent;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        });

    });


    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    modalClose.addEventListener("click", closeModal);


    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* 3D CARD MOVEMENT */

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth <= 800) return;

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - .5) * 5;

            const rotateX =
                ((y / rect.height) - .5) * -5;

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


    /* SCROLL NAV */

    window.addEventListener("scroll", () => {

        document.querySelector(".site-nav")
            .classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

    });


    /* REVEAL */

    const revealElements =
        document.querySelectorAll(
            ".intro, .section-heading, .architecture-card, .feature"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: .12
            }
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    });

});
