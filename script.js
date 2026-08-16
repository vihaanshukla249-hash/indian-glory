document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("pageLoader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hidden");
        }, 700);
    });


    /* =====================================================
       NAVIGATION
    ===================================================== */

    const nav = document.querySelector(".site-nav");
    const menuToggle = document.querySelector(".menu-toggle");

    window.addEventListener("scroll", () => {
        nav?.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });

    menuToggle?.addEventListener("click", () => {
        nav?.classList.toggle("menu-open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            nav?.classList.remove("menu-open");
        });
    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const id = entry.target.id;

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetID = link.getAttribute("href");

            if (!targetID || targetID === "#") return;

            const target = document.querySelector(targetID);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       HERO 3D MOVEMENT
    ===================================================== */

    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    if (hero && heroContent) {

        hero.addEventListener("mousemove", event => {

            if (window.innerWidth < 800) return;

            const rect = hero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;

            heroContent.style.transform =
                `translate3d(${x * 14}px, ${y * 14}px, 0)`;

        });

        hero.addEventListener("mouseleave", () => {

            heroContent.style.transform =
                "translate3d(0,0,0)";

        });

    }


    /* =====================================================
       3D CARDS
    ===================================================== */

    const threeDCards = document.querySelectorAll(
        ".architecture-card, .person-card, .knowledge-card, .culture-card"
    );

    threeDCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 800) return;

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 7;

            const rotateX =
                ((y / rect.height) - 0.5) * -7;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });


    /* =====================================================
       ARCHITECTURE FILTER
    ===================================================== */

    const filterButtons = document.querySelectorAll(
        ".architecture-filter-btn"
    );

    const architectureCards = document.querySelectorAll(
        ".architecture-card"
    );

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            architectureCards.forEach(card => {

                const category = card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "block";

                    requestAnimationFrame(() => {
                        card.classList.add("architecture-visible");
                    });

                } else {

                    card.classList.remove(
                        "architecture-visible"
                    );

                    card.style.display = "none";
                }

            });

        });

    });


    /* =====================================================
       FREEDOM FIGHTERS DATA
    ===================================================== */

    const freedomFighters = {

        gandhi: {
            name: "Mahatma Gandhi",
            years: "1869 — 1948",
            role: "Leader • Satyagraha • Non-violence",

            story:
                "Mahatma Gandhi became one of the central leaders of India's independence movement. He developed Satyagraha as a method of resistance based on truth and non-violence.",

            contribution:
                "He played important roles in the Non-Cooperation Movement, the Salt March and the Quit India Movement. His approach inspired millions of Indians to participate in the freedom struggle.",

            legacy:
                "His philosophy of non-violent resistance became an important part of India's independence movement and influenced movements for civil rights around the world.",

            image:
                "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
        },


        bhagat: {
            name: "Bhagat Singh",
            years: "1907 — 1931",
            role: "Revolutionary • Writer • Thinker",

            story:
                "Bhagat Singh was one of the most influential young revolutionaries of India's freedom movement. He was deeply interested in political ideas, history and social change.",

            contribution:
                "His writings, political ideas and revolutionary activities inspired young Indians and made him an enduring symbol of courage and resistance.",

            legacy:
                "Bhagat Singh continues to be remembered for his intellectual approach, patriotism and influence on India's freedom movement.",

            image:
                "bhagat-singh.jpg"
        },


        bose: {
            name: "Subhas Chandra Bose",
            years: "1897 — 1945",
            role: "Nationalist Leader • Indian National Army",

            story:
                "Subhas Chandra Bose was a major nationalist leader who believed that India's independence required a determined challenge to British rule.",

            contribution:
                "He became a prominent leader of the Indian National Army and sought international support for India's independence struggle.",

            legacy:
                "Subhas Chandra Bose remains an important figure in India's independence history and is remembered for his determination and leadership.",

            image:
                "Subhas_Chandra_Bose.jpg"
        },


        rani: {
            name: "Rani Lakshmibai",
            years: "c. 1828 — 1858",
            role: "Queen of Jhansi • 1857 Uprising",

            story:
                "Rani Lakshmibai became one of the best-known figures of the uprising of 1857. As the queen of Jhansi, she resisted British attempts to take control of her kingdom.",

            contribution:
                "Her leadership and courage during the 1857 uprising made her an enduring symbol of resistance and bravery in Indian history.",

            legacy:
                "Rani Lakshmibai is remembered as one of the most prominent figures associated with the resistance of 1857.",

            image:
                "https://upload.wikimedia.org/wikipedia/commons/2/2e/Rani_Lakshmibai.jpg"
        },


        patel: {
            name: "Sardar Vallabhbhai Patel",
            years: "1875 — 1950",
            role: "Nationalist Leader • Statesman",

            story:
                "Vallabhbhai Patel was a major leader of India's independence movement and an important organiser during the struggle against British rule.",

            contribution:
                "He played a major role in India's freedom struggle and later helped integrate the princely states into the Indian Union.",

            legacy:
                "He became one of the most important statesmen of independent India and is widely remembered for his role in national integration.",

            image:
                "sardar-patel.jpg"
        },


        sarojini: {
            name: "Sarojini Naidu",
            years: "1879 — 1949",
            role: "Poet • Nationalist • Political Leader",

            story:
                "Sarojini Naidu was a celebrated poet and a prominent participant in India's national movement. She combined literary work with political activism.",

            contribution:
                "She participated in the freedom movement, supported civil disobedience and became the first Indian woman to serve as president of the Indian National Congress.",

            legacy:
                "She remains remembered as an important woman leader of India's national movement and as the Nightingale of India.",

            image:
                "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sarojini_Naidu.jpg"
        },


        azad: {
            name: "Chandrashekhar Azad",
            years: "1906 — 1931",
            role: "Revolutionary • Hindustan Socialist Republican Association",

            story:
                "Chandrashekhar Azad was a prominent revolutionary figure who worked with other young nationalists against British rule.",

            contribution:
                "He helped organise revolutionary activities and became an important leader within the Hindustan Socialist Republican Association.",

            legacy:
                "He became a powerful symbol of revolutionary nationalism and determination during India's freedom struggle.",

            image:
                "Chandrashekhar_Azad.jpg"
        },


        tilak: {
            name: "Bal Gangadhar Tilak",
            years: "1856 — 1920",
            role: "Nationalist • Journalist • Political Leader",

            story:
                "Bal Gangadhar Tilak was one of the early leaders of Indian nationalism. Through journalism, public campaigns and political organisation, he encouraged greater participation in the independence movement.",

            contribution:
                "He helped popularise the demand for self-rule and became one of the most influential nationalist leaders of the early twentieth century.",

            legacy:
                "Tilak played an important role in the growth of Indian nationalism and became one of the prominent political leaders of the early freedom movement.",

            image:
                "bal-gangadhar-tilak.jpg"
        },


        lajpat: {
            name: "Lala Lajpat Rai",
            years: "1865 — 1928",
            role: "Nationalist Leader • Social Reformer",

            story:
                "Lala Lajpat Rai was an important Indian nationalist leader and a member of the Lal-Bal-Pal trio. He played an important role in India's national movement.",

            contribution:
                "He supported the Swadeshi movement, opposed colonial rule and worked for education and social reform.",

            legacy:
                "Lala Lajpat Rai remains remembered as one of the prominent leaders of India's freedom movement.",

            image:
                "Lala-lajpat-rai.jpg"
        }

    };


    /* =====================================================
       FREEDOM FIGHTER MODAL
    ===================================================== */

    const freedomModal =
        document.getElementById("freedomModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalName =
        document.getElementById("modalName");

    const modalYears =
        document.getElementById("modalYears");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalContribution =
        document.getElementById("modalContribution");

    const modalLegacy =
        document.getElementById("modalLegacy");


    /* =====================================================
       OPEN FREEDOM FIGHTER
    ===================================================== */

    window.openFreedom = function(personKey) {

        const person = freedomFighters[personKey];

        if (!person) {
            console.error(
                "Freedom fighter not found:",
                personKey
            );
            return;
        }

        if (!freedomModal) {
            console.error(
                "freedomModal was not found in index.html"
            );
            return;
        }


        /* Reset previous image */

        if (modalImage) {

            modalImage.onerror = () => {

                console.warn(
                    `Image failed to load for ${person.name}:`,
                    person.image
                );

                modalImage.removeAttribute("src");
                modalImage.alt = `${person.name} image unavailable`;
            };

            modalImage.src = "";
            modalImage.src = person.image;
            modalImage.alt = person.name;
            modalImage.style.display = "block";
        }


        /* Text */

        if (modalName) {
            modalName.textContent = person.name;
        }

        if (modalYears) {
            modalYears.textContent = person.years;
        }

        if (modalCategory) {
            modalCategory.textContent = person.role;
        }

        if (modalDescription) {
            modalDescription.textContent = person.story;
        }

        if (modalContribution) {
            modalContribution.textContent = person.contribution;
        }

        if (modalLegacy) {
            modalLegacy.textContent = person.legacy;
        }


        /* Open */

        freedomModal.classList.add("active");

        document.body.classList.add("modal-open");

    };


    /* =====================================================
       CLOSE FREEDOM MODAL
    ===================================================== */

    window.closeFreedom = function() {

        if (freedomModal) {
            freedomModal.classList.remove("active");
        }

        document.body.classList.remove("modal-open");

    };


    /* =====================================================
       ARCHITECTURE MODAL
    ===================================================== */

    const architectureModal =
        document.getElementById("architectureModal");

    const architectureModalImage =
        document.getElementById("architectureModalImage");

    const architectureModalTitle =
        document.getElementById("architectureModalTitle");

    const architectureModalDate =
        document.getElementById("architectureModalDate");

    const architectureModalDescription =
        document.getElementById("architectureModalDescription");


    architectureCards.forEach(card => {

        card.addEventListener("click", () => {

            if (!architectureModal) return;

            const image =
                card.dataset.image ||
                card.querySelector("img")?.src;

            const title =
                card.dataset.title ||
                card.querySelector("h3")?.textContent ||
                "Indian Architecture";

            const date =
                card.dataset.date ||
                card.querySelector("strong")?.textContent ||
                "Indian Heritage";

            const description =
                card.dataset.description ||
                card.querySelector("p")?.textContent ||
                "An important part of India's architectural heritage.";


            if (architectureModalImage && image) {
                architectureModalImage.src = image;
                architectureModalImage.alt = title;
            }

            if (architectureModalTitle) {
                architectureModalTitle.textContent = title;
            }

            if (architectureModalDate) {
                architectureModalDate.textContent = date;
            }

            if (architectureModalDescription) {
                architectureModalDescription.textContent = description;
            }


            architectureModal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });


    /* =====================================================
       CLOSE ALL MODALS
    ===================================================== */

    function closeModals() {

        freedomModal?.classList.remove("active");

        architectureModal?.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    /* =====================================================
       MODAL CLOSE BUTTONS
    ===================================================== */

    document.querySelectorAll(
        ".modal-close, [data-close-modal]"
    ).forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            closeModals();

        });

    });


    /* =====================================================
       CLICK OUTSIDE MODALS
    ===================================================== */

    freedomModal?.addEventListener("click", event => {

        if (event.target === freedomModal) {
            closeModals();
        }

    });


    architectureModal?.addEventListener("click", event => {

        if (event.target === architectureModal) {
            closeModals();
        }

    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModals();
        }

    });


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.classList.add("image-error");

            const parent =
                img.closest(
                    ".architecture-image, .timeline-card-image, .person-image, .civilization-image"
                );

            if (parent) {
                parent.classList.add("image-failed");
            }

        });

    });


    /* =====================================================
       TRICOLOUR PARTICLES
    ===================================================== */

    const canvas =
        document.getElementById("flagCanvas");

    if (canvas) {

        const ctx = canvas.getContext("2d");

        let particles = [];

        let width = 0;
        let height = 0;


        function resizeCanvas() {

            const ratio =
                window.devicePixelRatio || 1;

            width = canvas.clientWidth;
            height = canvas.clientHeight;

            canvas.width = width * ratio;
            canvas.height = height * ratio;

            ctx.setTransform(
                ratio,
                0,
                0,
                ratio,
                0,
                0
            );

        }


        function createParticles() {

            particles = [];

            const amount =
                window.innerWidth < 700
                    ? 30
                    : 65;


            for (let i = 0; i < amount; i++) {

                particles.push({

                    x: Math.random() * width,

                    y: Math.random() * height,

                    radius:
                        Math.random() * 1.5 + 0.4,

                    speed:
                        Math.random() * 0.25 + 0.08,

                    alpha:
                        Math.random() * 0.35 + 0.1,

                    phase:
                        Math.random() * Math.PI * 2

                });

            }

        }


        function animate(time) {

            ctx.clearRect(
                0,
                0,
                width,
                height
            );


            particles.forEach((particle, index) => {

                particle.y -= particle.speed;


                if (particle.y < -10) {

                    particle.y = height + 10;

                    particle.x =
                        Math.random() * width;

                }


                const wave =
                    Math.sin(
                        time * 0.0005 +
                        particle.phase
                    ) * 10;


                const x =
                    particle.x + wave;


                const color =
                    index % 3 === 0
                        ? `rgba(255,153,51,${particle.alpha})`
                        : index % 3 === 1
                            ? `rgba(255,255,255,${particle.alpha})`
                            : `rgba(19,136,8,${particle.alpha})`;


                ctx.fillStyle = color;

                ctx.beginPath();

                ctx.arc(
                    x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

            });


            requestAnimationFrame(animate);

        }


        resizeCanvas();

        createParticles();

        window.addEventListener("resize", () => {

            resizeCanvas();

            createParticles();

        });

        requestAnimationFrame(animate);

    }


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "🇮🇳 Indian Glory — Experience Loaded"
    );

});



const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
    menuToggle.classList.toggle("active");
});
