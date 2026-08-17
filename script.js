document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       🌍 WORLD → 🇮🇳 INDIA INTRO
       ===================================================== */

    const intro = document.createElement("div");

    intro.id = "indiaIntro";

    intro.innerHTML = `
        <div class="intro-stars"></div>

        <div class="intro-earth-wrap">
            <div class="intro-earth">
                <div class="intro-earth-glow"></div>
            </div>

            <div class="intro-india">
                <span></span>
            </div>
        </div>

        <div class="intro-text">
            <span class="intro-small-text">A JOURNEY THROUGH</span>
            <strong>INDIA</strong>
            <span class="intro-subtext">HISTORY • HERITAGE • GLORY</span>
        </div>

        <button id="skipIntro">
            SKIP INTRO →
        </button>
    `;

    document.body.prepend(intro);


    /* =====================================================
       INTRO STYLES
       ===================================================== */

    const introStyle = document.createElement("style");

    introStyle.textContent = `

        #indiaIntro {
            position: fixed;
            inset: 0;
            z-index: 999999;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at center,
                    #10233a 0%,
                    #050b14 45%,
                    #000 100%
                );
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            visibility: visible;
            transition:
                opacity 1.2s ease,
                visibility 1.2s ease;
            font-family: "Inter", sans-serif;
        }

        #indiaIntro.finished {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .intro-stars {
            position: absolute;
            inset: 0;
            background-image:
                radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,.4) 1px, transparent 1px);
            background-size: 90px 90px, 150px 150px;
            animation: starsMove 18s linear infinite;
            opacity: .45;
        }

        @keyframes starsMove {
            from {
                transform: scale(1);
            }

            to {
                transform: scale(1.15);
            }
        }

        .intro-earth-wrap {
            position: absolute;
            width: 520px;
            height: 520px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation:
                earthApproach 6s cubic-bezier(.2,.75,.15,1) forwards;
        }

        .intro-earth {
            position: relative;
            width: 420px;
            height: 420px;
            border-radius: 50%;

            background-image:
                url("https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg");

            background-size: 220% 100%;
            background-position: 0% center;

            box-shadow:
                inset -45px -25px 70px rgba(0,0,0,.75),
                inset 30px 15px 55px rgba(255,255,255,.08),
                0 0 45px rgba(55,150,255,.25),
                0 0 120px rgba(30,120,255,.18);

            animation:
                earthRotate 6s linear infinite,
                earthZoom 6s cubic-bezier(.2,.75,.15,1) forwards;

            transform-style: preserve-3d;
        }

        .intro-earth::before {
            content: "";
            position: absolute;
            inset: -5px;
            border-radius: 50%;

            background:
                radial-gradient(
                    circle at 30% 30%,
                    rgba(255,255,255,.22),
                    transparent 35%
                );

            pointer-events: none;
        }

        .intro-earth::after {
            content: "";
            position: absolute;
            inset: -20px;
            border-radius: 50%;

            border: 1px solid rgba(90,180,255,.35);

            box-shadow:
                0 0 35px rgba(50,150,255,.25);

            animation: atmosphere 2s ease-in-out infinite alternate;
        }

        @keyframes earthRotate {
            0% {
                background-position: 0% center;
            }

            100% {
                background-position: 100% center;
            }
        }

        @keyframes earthZoom {
            0% {
                transform: scale(.55);
            }

            35% {
                transform: scale(.8);
            }

            65% {
                transform: scale(1);
            }

            100% {
                transform: scale(2.8);
            }
        }

        @keyframes earthApproach {
            0% {
                transform:
                    translateZ(-500px)
                    scale(.4);
            }

            35% {
                transform:
                    translateZ(0)
                    scale(1);
            }

            70% {
                transform:
                    translateZ(100px)
                    scale(1.1);
            }

            100% {
                transform:
                    translateZ(400px)
                    scale(1.7);
            }
        }

        .intro-earth-glow {
            position: absolute;
            inset: -35px;
            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    transparent 55%,
                    rgba(40,150,255,.18),
                    transparent 72%
                );

            animation:
                atmosphere 1.8s ease-in-out infinite alternate;
        }

        @keyframes atmosphere {
            from {
                opacity: .45;
                transform: scale(.97);
            }

            to {
                opacity: 1;
                transform: scale(1.04);
            }
        }

        .intro-india {
            position: absolute;
            width: 115px;
            height: 170px;

            left: 53%;
            top: 44%;

            opacity: 0;

            transform:
                translate(-50%, -50%)
                scale(.15)
                rotate(-8deg);

            z-index: 5;

            animation:
                indiaAppear 2.1s 3.2s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .intro-india::before {
            content: "";
            position: absolute;
            inset: 0;

            background:
                url("https://upload.wikimedia.org/wikipedia/commons/7/7b/India_map_outline.svg")
                center / contain no-repeat;

            filter:
                brightness(0)
                saturate(100%)
                invert(62%)
                sepia(89%)
                saturate(1800%)
                hue-rotate(2deg)
                brightness(104%)
                contrast(104%);

            animation:
                indiaGlow 1.2s 4s ease-in-out infinite alternate;
        }

        .intro-india span {
            position: absolute;
            width: 25px;
            height: 25px;

            left: 53%;
            top: 55%;

            transform: translate(-50%, -50%);

            border-radius: 50%;

            background: white;

            box-shadow:
                0 0 10px #fff,
                0 0 30px #ff9933,
                0 0 60px #ff9933;

            animation:
                indiaPulse .8s 4.3s ease-in-out infinite alternate;
        }

        @keyframes indiaAppear {
            0% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(.15)
                    rotate(-8deg);
            }

            30% {
                opacity: 1;
            }

            100% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.4)
                    rotate(0deg);
            }
        }

        @keyframes indiaGlow {
            from {
                filter:
                    brightness(0)
                    saturate(100%)
                    invert(62%)
                    sepia(89%)
                    saturate(1800%)
                    hue-rotate(2deg)
                    brightness(104%)
                    contrast(104%);
            }

            to {
                filter:
                    brightness(1.4)
                    drop-shadow(0 0 20px #ff9933)
                    drop-shadow(0 0 45px rgba(255,153,51,.7));
            }
        }

        @keyframes indiaPulse {
            from {
                transform:
                    translate(-50%, -50%)
                    scale(.7);
                opacity: .65;
            }

            to {
                transform:
                    translate(-50%, -50%)
                    scale(1.3);
                opacity: 1;
            }
        }

        .intro-text {
            position: absolute;

            left: 50%;
            bottom: 12%;

            transform:
                translateX(-50%)
                translateY(30px);

            text-align: center;

            opacity: 0;

            animation:
                introTextAppear 1.2s 4.4s ease forwards;

            z-index: 20;
        }

        .intro-small-text {
            display: block;

            color: rgba(255,255,255,.55);

            font-size: 9px;
            letter-spacing: 5px;

            margin-bottom: 12px;
        }

        .intro-text strong {
            display: block;

            color: white;

            font-family: "Cinzel", serif;

            font-size:
                clamp(48px, 8vw, 100px);

            line-height: .8;

            letter-spacing: 8px;

            text-shadow:
                0 0 25px rgba(255,153,51,.35);
        }

        .intro-subtext {
            display: block;

            margin-top: 18px;

            color: #ff9933;

            font-size: 8px;

            letter-spacing: 4px;
        }

        @keyframes introTextAppear {
            to {
                opacity: 1;
                transform:
                    translateX(-50%)
                    translateY(0);
            }
        }

        #skipIntro {
            position: absolute;

            right: 35px;
            bottom: 30px;

            z-index: 30;

            padding: 12px 20px;

            border:
                1px solid rgba(255,255,255,.25);

            background:
                rgba(255,255,255,.06);

            color: white;

            font-size: 9px;

            letter-spacing: 2px;

            cursor: pointer;

            backdrop-filter: blur(12px);

            transition:
                .3s ease;
        }

        #skipIntro:hover {
            background: #ff9933;
            border-color: #ff9933;
            color: #000;
            transform: translateY(-3px);
        }

        body.intro-active {
            overflow: hidden;
        }

        @media (max-width: 700px) {

            .intro-earth {
                width: 280px;
                height: 280px;
            }

            .intro-earth-wrap {
                width: 350px;
                height: 350px;
            }

            .intro-india {
                width: 75px;
                height: 115px;
            }

            .intro-text {
                bottom: 16%;
            }

            .intro-text strong {
                font-size: 50px;
            }

            #skipIntro {
                right: 20px;
                bottom: 20px;
            }

        }

    `;

    document.head.appendChild(introStyle);

    document.body.classList.add("intro-active");


    /* =====================================================
       FINISH INTRO
       ===================================================== */

    let introFinished = false;

    function finishIntro() {

        if (introFinished) return;

        introFinished = true;

        document.body.classList.remove("intro-active");

        intro.classList.add("finished");

        setTimeout(() => {
            intro.remove();
            introStyle.remove();
        }, 1300);
    }


    /* =====================================================
       SKIP
       ===================================================== */

    document
        .getElementById("skipIntro")
        ?.addEventListener("click", finishIntro);


    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            !introFinished
        ) {
            finishIntro();
        }

    });


    /* =====================================================
       AUTOMATICALLY OPEN WEBSITE
       ===================================================== */

    setTimeout(() => {

        finishIntro();

    }, 6500);


    /* =====================================================
       EXISTING PAGE LOADER
       ===================================================== */

    const loader =
        document.getElementById("pageLoader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader?.classList.add("hidden");

        }, 700);

    });


    /* =====================================================
       NAVIGATION
       ===================================================== */

    const nav =
        document.querySelector(".site-nav");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    window.addEventListener(
        "scroll",
        () => {

            nav?.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        },
        { passive: true }
    );


    menuToggle?.addEventListener(
        "click",
        () => {

            nav?.classList.toggle("menu-open");
            navLinks?.classList.toggle("open");

        }
    );


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav?.classList.remove(
                        "menu-open"
                    );

                    navLinks?.classList.remove(
                        "open"
                    );

                }
            );

        });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
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

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute("href");


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       3D HERO
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    const heroContent =
        document.querySelector(".hero-content");


    if (hero && heroContent) {

        hero.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 800
                ) return;


                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;


                heroContent.style.transform =
                    `
                    translate3d(
                        ${x * 14}px,
                        ${y * 14}px,
                        0
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroContent.style.transform =
                    "translate3d(0,0,0)";

            }
        );

    }


    /* =====================================================
       3D CARDS
       ===================================================== */

    document
        .querySelectorAll(
            ".architecture-card, .person-card, .knowledge-card, .culture-card"
        )
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth < 800
                    ) return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        (
                            x /
                            rect.width -
                            .5
                        ) * 7;


                    const rotateX =
                        (
                            y /
                            rect.height -
                            .5
                        ) * -7;


                    card.style.transform =
                        `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-6px)
                        `;

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
       IMAGE FALLBACK
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.addEventListener(
                "error",
                () => {

                    img.classList.add(
                        "image-error"
                    );

                    const parent =
                        img.closest(
                            ".architecture-image, .timeline-card-image, .person-image, .civilization-image"
                        );


                    parent?.classList.add(
                        "image-failed"
                    );

                }
            );

        });


    /* =====================================================
       TRICOLOUR PARTICLES
       ===================================================== */

    const canvas =
        document.getElementById("flagCanvas");


    if (canvas) {

        const ctx =
            canvas.getContext("2d");


        let particles = [];

        let width = 0;
        let height = 0;


        function resizeCanvas() {

            const ratio =
                window.devicePixelRatio || 1;


            width =
                canvas.clientWidth;


            height =
                canvas.clientHeight;


            canvas.width =
                width * ratio;


            canvas.height =
                height * ratio;


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


            for (
                let i = 0;
                i < amount;
                i++
            ) {

                particles.push({

                    x:
                        Math.random() *
                        width,

                    y:
                        Math.random() *
                        height,

                    radius:
                        Math.random() *
                        1.5 +
                        .4,

                    speed:
                        Math.random() *
                        .25 +
                        .08,

                    alpha:
                        Math.random() *
                        .35 +
                        .1,

                    phase:
                        Math.random() *
                        Math.PI *
                        2

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


            particles.forEach(
                (particle, index) => {

                    particle.y -=
                        particle.speed;


                    if (
                        particle.y <
                        -10
                    ) {

                        particle.y =
                            height + 10;

                        particle.x =
                            Math.random() *
                            width;

                    }


                    const wave =
                        Math.sin(
                            time *
                            .0005 +
                            particle.phase
                        ) * 10;


                    const x =
                        particle.x +
                        wave;


                    const color =
                        index % 3 === 0
                            ? `rgba(255,153,51,${particle.alpha})`
                            : index % 3 === 1
                                ? `rgba(255,255,255,${particle.alpha})`
                                : `rgba(19,136,8,${particle.alpha})`;


                    ctx.fillStyle =
                        color;


                    ctx.beginPath();


                    ctx.arc(
                        x,
                        particle.y,
                        particle.radius,
                        0,
                        Math.PI * 2
                    );


                    ctx.fill();

                }
            );


            requestAnimationFrame(
                animate
            );

        }


        resizeCanvas();

        createParticles();

        window.addEventListener(
            "resize",
            () => {

                resizeCanvas();
                createParticles();

            }
        );

        requestAnimationFrame(
            animate
        );

    }


    console.log(
        "🇮🇳 Indian Glory — Experience Loaded"
    );

});
