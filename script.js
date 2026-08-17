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


```javascript
/* =====================================================
   WORLD → INDIA CINEMATIC INTRO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("indiaIntro");
    const skip = document.querySelector(".intro-skip");

    if (!intro) return;

    document.body.classList.add("intro-active");

    const finishIntro = () => {
        if (intro.classList.contains("finished")) return;

        intro.classList.add("finished");
        document.body.classList.remove("intro-active");

        setTimeout(() => {
            intro.remove();
        }, 1300);
    };

    skip?.addEventListener("click", finishIntro);

    setTimeout(finishIntro, 8000);

});
```
/* =====================================================
   WORLD → INDIA INTRO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("indiaIntro");
    const canvas = document.getElementById("indiaIntroCanvas");
    const skip = document.getElementById("skipIntro");
    const text = document.querySelector(".indiaIntro-text");

    if (!intro || !canvas) return;

    document.body.classList.add("intro-active");

    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let startTime = performance.now();
    let finished = false;

    function resize() {
        const ratio = window.devicePixelRatio || 1;

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * ratio;
        canvas.height = height * ratio;

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    resize();

    window.addEventListener("resize", resize);

    function drawStars() {

        ctx.fillStyle = "#020304";
        ctx.fillRect(0, 0, width, height);

        const count = Math.min(180, Math.floor(width * height / 9000));

        for (let i = 0; i < count; i++) {

            const x = (i * 137.31) % width;
            const y = (i * 71.93) % height;
            const size = ((i * 17) % 10) / 10 + .3;

            ctx.fillStyle = `rgba(255,255,255,${.15 + size * .25})`;

            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawGlobe(progress) {

        const cx = width / 2;
        const cy = height / 2;

        const baseSize = Math.min(width, height) * .22;

        const zoom = Math.min(
            1,
            Math.max(0, (progress - .15) / .55)
        );

        const radius =
            baseSize +
            zoom * Math.min(width, height) * .33;

        ctx.save();

        ctx.translate(cx, cy);

        /* globe glow */

        const glow = ctx.createRadialGradient(
            0,
            0,
            radius * .2,
            0,
            0,
            radius * 1.4
        );

        glow.addColorStop(0, "rgba(40,130,255,.15)");
        glow.addColorStop(.65, "rgba(20,70,150,.08)");
        glow.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = glow;

        ctx.beginPath();
        ctx.arc(0, 0, radius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        /* globe */

        const globe = ctx.createRadialGradient(
            -radius * .3,
            -radius * .3,
            radius * .1,
            0,
            0,
            radius
        );

        globe.addColorStop(0, "#183b55");
        globe.addColorStop(.55, "#092338");
        globe.addColorStop(1, "#020910");

        ctx.fillStyle = globe;

        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();

        /* atmosphere */

        ctx.strokeStyle = "rgba(120,190,255,.45)";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();

        /* latitude */

        ctx.strokeStyle = "rgba(100,180,255,.16)";
        ctx.lineWidth = 1;

        for (let i = -2; i <= 2; i++) {

            const y = i * radius * .3;

            ctx.beginPath();

            ctx.ellipse(
                0,
                y,
                radius,
                Math.sqrt(
                    Math.max(
                        1,
                        radius * radius - y * y
                    )
                ) * .25,
                0,
                0,
                Math.PI * 2
            );

            ctx.stroke();
        }

        /* longitude */

        for (let i = -2; i <= 2; i++) {

            const x = i * radius * .3;

            ctx.beginPath();

            ctx.ellipse(
                x,
                0,
                Math.sqrt(
                    Math.max(
                        1,
                        radius * radius - x * x
                    )
                ) * .25,
                radius,
                0,
                0,
                Math.PI * 2
            );

            ctx.stroke();
        }

        /*
            simplified continental silhouettes
            used only as visual motion texture
        */

        ctx.fillStyle = "rgba(90,150,100,.5)";

        const continents = [
            [-.48,-.25,.22,.13],
            [-.28,-.48,.12,.18],
            [.08,-.25,.25,.16],
            [.32,-.05,.16,.22],
            [.08,.28,.15,.18],
            [-.18,.28,.10,.16]
        ];

        continents.forEach(c => {

            ctx.beginPath();

            ctx.ellipse(
                c[0] * radius,
                c[1] * radius,
                c[2] * radius,
                c[3] * radius,
                .3,
                0,
                Math.PI * 2
            );

            ctx.fill();
        });

        /*
            INDIA TARGET
        */

        const indiaScale =
            Math.max(
                0,
                Math.min(
                    1,
                    (progress - .48) / .38
                )
            );

        if (indiaScale > 0) {

            const indiaX = radius * .08;
            const indiaY = radius * .16;

            ctx.save();

            ctx.translate(indiaX, indiaY);
            ctx.scale(
                indiaScale,
                indiaScale
            );

            ctx.fillStyle =
                "rgba(255,153,51,.95)";

            ctx.shadowColor =
                "rgba(255,153,51,.9)";

            ctx.shadowBlur =
                30;

            ctx.beginPath();

            ctx.moveTo(0, -radius * .20);
            ctx.lineTo(radius * .08, -radius * .08);
            ctx.lineTo(radius * .15, .02 * radius);
            ctx.lineTo(radius * .09, radius * .15);
            ctx.lineTo(radius * .02, radius * .28);
            ctx.lineTo(-radius * .03, radius * .18);
            ctx.lineTo(-radius * .07, radius * .08);
            ctx.lineTo(-radius * .04, -.02 * radius);
            ctx.closePath();

            ctx.fill();

            ctx.restore();
        }

        ctx.restore();
    }

    function finishIntro() {

        if (finished) return;

        finished = true;

        intro.classList.add("finished");

        document.body.classList.remove("intro-active");

        setTimeout(() => {
            intro.remove();
        }, 1400);
    }

    function animate(now) {

        if (finished) return;

        const elapsed =
            now - startTime;

        const duration = 8500;

        const progress =
            Math.min(
                1,
                elapsed / duration
            );

        drawStars();

        drawGlobe(progress);

        if (
            progress > .62 &&
            !text.classList.contains("show")
        ) {
            text.classList.add("show");
        }

        if (progress >= 1) {
            finishIntro();
            return;
        }

        requestAnimationFrame(animate);
    }

    skip?.addEventListener(
        "click",
        finishIntro
    );

    requestAnimationFrame(animate);

});


(function () {

    const overlay = document.getElementById("indiaJourney");
    const canvas = document.getElementById("indiaJourneyCanvas");
    const skip = document.getElementById("journeySkip");
    const ui = document.querySelector(".journey-ui");
    const title = document.getElementById("journeyTitle");
    const subtitle = document.getElementById("journeySubtitle");

    if (!overlay || !canvas || typeof THREE === "undefined") {
        return;
    }

    document.body.classList.add("journey-active");

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x010203);

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const ambientLight = new THREE.AmbientLight(
        0xffffff,
        1.5
    );

    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(
        0xffffff,
        3
    );

    sunLight.position.set(5, 3, 5);

    scene.add(sunLight);

    const earthGroup = new THREE.Group();

    scene.add(earthGroup);

    const loader = new THREE.TextureLoader();

    const earthTexture = loader.load(
        "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
    );

    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const earthGeometry =
        new THREE.SphereGeometry(
            2,
            96,
            96
        );

    const earthMaterial =
        new THREE.MeshPhongMaterial({
            map: earthTexture,
            shininess: 12
        });

    const earth =
        new THREE.Mesh(
            earthGeometry,
            earthMaterial
        );

    earthGroup.add(earth);

    const atmosphereGeometry =
        new THREE.SphereGeometry(
            2.08,
            96,
            96
        );

    const atmosphereMaterial =
        new THREE.MeshBasicMaterial({
            color: 0x3388ff,
            transparent: true,
            opacity: .09,
            side: THREE.BackSide
        });

    const atmosphere =
        new THREE.Mesh(
            atmosphereGeometry,
            atmosphereMaterial
        );

    earthGroup.add(atmosphere);

    const starsGeometry =
        new THREE.BufferGeometry();

    const starPositions = [];

    for (let i = 0; i < 1800; i++) {

        const radius =
            25 + Math.random() * 45;

        const theta =
            Math.random() * Math.PI * 2;

        const phi =
            Math.acos(
                2 * Math.random() - 1
            );

        starPositions.push(
            radius *
            Math.sin(phi) *
            Math.cos(theta)
        );

        starPositions.push(
            radius *
            Math.sin(phi) *
            Math.sin(theta)
        );

        starPositions.push(
            radius *
            Math.cos(phi)
        );
    }

    starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            starPositions,
            3
        )
    );

    const starsMaterial =
        new THREE.PointsMaterial({
            color: 0xffffff,
            size: .06,
            transparent: true,
            opacity: .75
        });

    const stars =
        new THREE.Points(
            starsGeometry,
            starsMaterial
        );

    scene.add(stars);

    const indiaMarkerGroup =
        new THREE.Group();

    earthGroup.add(indiaMarkerGroup);

    const indiaPoint =
        new THREE.Vector3(
            .55,
            .45,
            1.82
        ).normalize().multiplyScalar(2.04);

    const markerGeometry =
        new THREE.SphereGeometry(
            .045,
            32,
            32
        );

    const markerMaterial =
        new THREE.MeshBasicMaterial({
            color: 0xff9933
        });

    const indiaMarker =
        new THREE.Mesh(
            markerGeometry,
            markerMaterial
        );

    indiaMarker.position.copy(
        indiaPoint
    );

    indiaMarkerGroup.add(
        indiaMarker
    );

    const ringGeometry =
        new THREE.RingGeometry(
            .08,
            .12,
            64
        );

    const ringMaterial =
        new THREE.MeshBasicMaterial({
            color: 0xff9933,
            transparent: true,
            opacity: .9,
            side: THREE.DoubleSide
        });

    const indiaRing =
        new THREE.Mesh(
            ringGeometry,
            ringMaterial
        );

    indiaRing.position.copy(
        indiaPoint
    );

    indiaRing.lookAt(
        new THREE.Vector3(0, 0, 0)
    );

    indiaMarkerGroup.add(
        indiaRing
    );

    let start = performance.now();
    let finished = false;
    let skipped = false;

    function finish() {

        if (finished) return;

        finished = true;

        overlay.classList.add("done");

        document.body.classList.remove(
            "journey-active"
        );

        setTimeout(() => {

            overlay.remove();

        }, 1300);
    }

    skip.addEventListener(
        "click",
        finish
    );

    function resize() {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }

    window.addEventListener(
        "resize",
        resize
    );

    function animate(time) {

        if (finished) return;

        const elapsed =
            time - start;

        const seconds =
            elapsed / 1000;

        if (seconds < 1.5) {

            title.textContent = "EARTH";
            subtitle.textContent =
                "ONE WORLD";

            ui.classList.add("show");

        }

        if (seconds > 2.2) {

            title.textContent = "ASIA";
            subtitle.textContent =
                "THE JOURNEY BEGINS";
        }

        if (seconds > 4.2) {

            title.textContent = "INDIA";
            subtitle.textContent =
                "THE HEART OF THE STORY";
        }

        if (seconds > 5.2) {

            ui.classList.remove("show");
        }

        if (seconds < 4) {

            earthGroup.rotation.y =
                seconds * .18;
        }

        if (seconds >= 4 &&
            seconds < 6.8) {

            const targetRotation =
                -0.55;

            earthGroup.rotation.y +=
                (
                    targetRotation -
                    earthGroup.rotation.y
                ) * .025;
        }

        if (seconds < 4) {

            camera.position.z =
                8 -
                seconds * .7;
        }

        else if (seconds < 7.2) {

            const p =
                (seconds - 4) / 3.2;

            const eased =
                p * p * (3 - 2 * p);

            camera.position.z =
                5.2 -
                eased * 3.9;

            camera.position.x =
                eased * .18;

            camera.position.y =
                eased * .12;
        }

        else {

            camera.position.z =
                1.25;

            camera.position.x =
                .22;

            camera.position.y =
                .14;
        }

        indiaMarker.scale.setScalar(
            seconds > 4
                ? 1 +
                  Math.sin(time * .008) * .35
                : 0.01
        );

        indiaRing.scale.setScalar(
            seconds > 4
                ? 1 +
                  Math.sin(time * .006) * .5
                : 0.01
        );

        stars.rotation.y =
            time * .00001;

        earth.rotation.y =
            time * .000015;

        renderer.render(
            scene,
            camera
        );

        if (seconds >= 8.2) {
            finish();
            return;
        }

        requestAnimationFrame(
            animate
        );
    }

    requestAnimationFrame(
        animate
    );

})();
