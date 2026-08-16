/* =========================================================
   INDIAN GLORY — ARCHITECTURE
========================================================= */

const monuments = [

    {
        name: "Great Bath",
        period: "c. 2500 BCE",
        category: "ancient",
        location: "Mohenjo-daro, Sindh",
        style: "Indus Valley",
        era: "Bronze Age",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Great_Bath_Mohenjo-daro.jpg",
        description:
            "The Great Bath is one of the best-known structures of the ancient city of Mohenjo-daro. It was constructed using carefully laid baked bricks and features a large waterproofed tank surrounded by rooms and galleries.",
        significance:
            "Its sophisticated construction, water management and urban context demonstrate the advanced planning capabilities of the Indus Valley Civilization."
    },

    {
        name: "Sanchi Stupa",
        period: "3rd century BCE onward",
        category: "ancient",
        location: "Madhya Pradesh",
        style: "Buddhist",
        era: "Mauryan / Buddhist",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Sanchi_Stupa.jpg",
        description:
            "The Great Stupa at Sanchi is one of India's most important surviving Buddhist monuments. Emperor Ashoka is traditionally associated with its earliest construction.",
        significance:
            "Its gateways contain detailed carvings depicting Buddhist stories, symbols and scenes of ancient Indian life."
    },

    {
        name: "Ajanta Caves",
        period: "2nd century BCE – 6th century CE",
        category: "ancient",
        location: "Maharashtra",
        style: "Rock-cut Buddhist",
        era: "Ancient India",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ajanta_Caves%2C_India.jpg",
        description:
            "The Ajanta Caves were carved into a horseshoe-shaped cliff overlooking the Waghora River. The complex contains monasteries, prayer halls and celebrated paintings.",
        significance:
            "Ajanta preserves some of the finest surviving examples of ancient Indian Buddhist art and mural painting."
    },

    {
        name: "Ellora Caves",
        period: "6th – 10th century CE",
        category: "ancient",
        location: "Maharashtra",
        style: "Rock-cut",
        era: "Ancient / Medieval",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kailasa_temple_at_Ellora.jpg",
        description:
            "Ellora is a vast complex of rock-cut Buddhist, Hindu and Jain monuments. Its most famous structure is the Kailasa Temple.",
        significance:
            "The site demonstrates India's long tradition of excavating monumental architecture directly from living rock."
    },

    {
        name: "Brihadisvara Temple",
        period: "c. 1010 CE",
        category: "temple",
        location: "Thanjavur, Tamil Nadu",
        style: "Dravidian",
        era: "Chola",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Brihadeeswarar_Temple%2C_Thanjavur.jpg",
        description:
            "Built under Chola ruler Rajaraja I, Brihadisvara Temple is an enormous granite temple dedicated to Shiva. Its towering vimana dominates the complex.",
        significance:
            "It is one of the greatest achievements of Chola architecture and forms part of the UNESCO-listed Great Living Chola Temples."
    },

    {
        name: "Konark Sun Temple",
        period: "13th century CE",
        category: "temple",
        location: "Odisha",
        style: "Kalinga",
        era: "Eastern Ganga",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Konark_Sun_Temple.jpg",
        description:
            "The Konark Sun Temple was conceived as a monumental stone chariot of the Sun God, complete with carved wheels and horses.",
        significance:
            "Its elaborate stone sculpture and symbolic chariot design make it one of the most remarkable monuments of Indian temple architecture."
    },

    {
        name: "Khajuraho Temples",
        period: "10th – 11th century CE",
        category: "temple",
        location: "Madhya Pradesh",
        style: "Nagara",
        era: "Chandela",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Khajuraho_Group_of_Monuments_3.jpg",
        description:
            "The Khajuraho group contains temples decorated with an extraordinary range of sculptures portraying deities, musicians, mythical creatures and scenes of everyday life.",
        significance:
            "The surviving temples are among the finest expressions of medieval North Indian temple architecture."
    },

    {
        name: "Virupaksha Temple",
        period: "7th century onward",
        category: "temple",
        location: "Hampi, Karnataka",
        style: "Dravidian",
        era: "Vijayanagara",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Virupaksha_Temple_Hampi.jpg",
        description:
            "The Virupaksha Temple is a major Hindu temple complex in Hampi dedicated to Shiva in the form of Virupaksha.",
        significance:
            "It remains an active place of worship and is an important surviving monument of the Vijayanagara capital."
    },

    {
        name: "Qutb Minar",
        period: "12th – 13th century CE",
        category: "islamic",
        location: "Delhi",
        style: "Indo-Islamic",
        era: "Delhi Sultanate",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Qutb_Minar_01.jpg",
        description:
            "The Qutb Minar is a monumental minaret constructed primarily from red and buff sandstone. Its shafts contain bands of inscriptions and ornament.",
        significance:
            "The monument represents an important early phase in the development of Indo-Islamic architecture in northern India."
    },

    {
        name: "Humayun's Tomb",
        period: "16th century CE",
        category: "islamic",
        location: "Delhi",
        style: "Mughal",
        era: "Mughal",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Humayun%27s_Tomb%2C_Delhi.jpg",
        description:
            "Commissioned by Hamida Banu Begum for Emperor Humayun, the tomb stands within a formal charbagh garden and uses red sandstone with white marble details.",
        significance:
            "Its garden-tomb design influenced the development of later Mughal architecture, including the Taj Mahal."
    },

    {
        name: "Taj Mahal",
        period: "1632 – 1653 CE",
        category: "islamic",
        location: "Agra, Uttar Pradesh",
        style: "Mughal",
        era: "Mughal",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        description:
            "The Taj Mahal was commissioned by Mughal emperor Shah Jahan as a mausoleum for Mumtaz Mahal. The complex is built primarily from white marble and organized around a formal garden.",
        significance:
            "It is one of the world's most recognized monuments and a masterpiece of Mughal architecture."
    },

    {
        name: "Red Fort",
        period: "17th century CE",
        category: "islamic",
        location: "Delhi",
        style: "Mughal",
        era: "Mughal",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Red_Fort_in_Delhi_03-2016_img3.jpg",
        description:
            "The Red Fort was built by Shah Jahan as the palace-fort of his new imperial capital, Shahjahanabad. Its walls are primarily constructed from red sandstone.",
        significance:
            "The fort became an important symbol of India's independence and the Prime Minister addresses the nation from here on Independence Day."
    },

    {
        name: "Fatehpur Sikri",
        period: "16th century CE",
        category: "islamic",
        location: "Uttar Pradesh",
        style: "Mughal",
        era: "Mughal",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Fatehpur_Sikri_Buland_Darwaza.jpg",
        description:
            "Akbar established Fatehpur Sikri as his imperial capital in the 16th century. The city combines palace buildings, courtyards, religious structures and monumental gateways.",
        significance:
            "Its architecture demonstrates the cultural synthesis and experimentation characteristic of Akbar's reign."
    },

    {
        name: "Gateway of India",
        period: "Completed 1924",
        category: "colonial",
        location: "Mumbai, Maharashtra",
        style: "Indo-Saracenic",
        era: "British India",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Gateway_of_India_Mumbai_03-2016_img3.jpg",
        description:
            "The Gateway of India was designed by George Wittet and built overlooking the Arabian Sea in Mumbai.",
        significance:
            "Its Indo-Saracenic design combines elements associated with Indian, Islamic and European architectural traditions."
    },

    {
        name: "Victoria Memorial",
        period: "1906 – 1921",
        category: "colonial",
        location: "Kolkata, West Bengal",
        style: "Indo-Saracenic",
        era: "British India",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Victoria_Memorial_Kolkata.jpg",
        description:
            "The Victoria Memorial is a monumental marble building surrounded by gardens. It was created as a memorial to Queen Victoria.",
        significance:
            "The building blends classical European architectural ideas with elements inspired by Indian traditions."
    },

    {
        name: "Chhatrapati Shivaji Maharaj Terminus",
        period: "1887 – 1888",
        category: "colonial",
        location: "Mumbai, Maharashtra",
        style: "Victorian Gothic",
        era: "British India",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Chhatrapati_Shivaji_Terminus_Mumbai_03-2016_img3.jpg",
        description:
            "Designed by Frederick William Stevens, the railway terminus combines Victorian Gothic architecture with Indian decorative traditions.",
        significance:
            "It remains one of Mumbai's major railway stations and is a UNESCO World Heritage Site."
    },

    {
        name: "Lotus Temple",
        period: "Completed 1986",
        category: "modern",
        location: "New Delhi",
        style: "Expressionist / Modern",
        era: "Modern India",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Lotus_Temple_New_Delhi_03-2016_img3.jpg",
        description:
            "The Lotus Temple is a Baháʼí House of Worship composed of 27 marble-clad petals arranged in groups to form a lotus-like structure.",
        significance:
            "Its distinctive form has become one of the most recognizable examples of contemporary architecture in India."
    },

    {
        name: "Statue of Unity",
        period: "Completed 2018",
        category: "modern",
        location: "Kevadia, Gujarat",
        style: "Modern Monument",
        era: "Modern India",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Statue_of_Unity.jpg",
        description:
            "The Statue of Unity is a monumental statue of Sardar Vallabhbhai Patel standing near the Narmada River in Gujarat.",
        significance:
            "At 182 metres, it became the world's tallest statue when it was inaugurated in 2018."
    },

    {
        name: "India Gate",
        period: "Completed 1931",
        category: "colonial",
        location: "New Delhi",
        style: "Triumphal Arch",
        era: "British India",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/India_Gate_in_New_Delhi_at_Night.jpg",
        description:
            "India Gate is a monumental arch designed by Edwin Lutyens and dedicated to Indian soldiers who died in the First World War.",
        significance:
            "It is one of New Delhi's best-known landmarks and an important national memorial."
    }

];


/* DOM */

const grid = document.getElementById("architectureGrid");
const search = document.getElementById("architectureSearch");
const filters = document.querySelectorAll(".filter");
const emptyState = document.getElementById("emptyState");

const modal = document.getElementById("architectureModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPeriod = document.getElementById("modalPeriod");
const modalLocation = document.getElementById("modalLocation");
const modalDescription = document.getElementById("modalDescription");
const modalStyle = document.getElementById("modalStyle");
const modalPlace = document.getElementById("modalPlace");
const modalEra = document.getElementById("modalEra");
const modalSignificance = document.getElementById("modalSignificance");

let activeFilter = "all";


/* RENDER */

function renderMonuments() {

    const query = search.value.trim().toLowerCase();

    const results = monuments.filter(monument => {

        const matchesFilter =
            activeFilter === "all" ||
            monument.category === activeFilter;

        const searchable = `
            ${monument.name}
            ${monument.location}
            ${monument.style}
            ${monument.period}
            ${monument.era}
            ${monument.description}
        `.toLowerCase();

        return matchesFilter && searchable.includes(query);

    });

    grid.innerHTML = "";

    emptyState.style.display =
        results.length ? "none" : "block";

    results.forEach(monument => {

        const card = document.createElement("article");

        card.className = "architecture-card";

        card.innerHTML = `
            <div class="card-image">
                <img
                    src="${monument.image}"
                    alt="${monument.name}"
                    loading="lazy"
                >
            </div>

            <div class="card-overlay"></div>

            <div class="card-content">

                <span class="card-period">
                    ${monument.period}
                </span>

                <h3>${monument.name}</h3>

                <div class="card-location">
                    ${monument.location}
                </div>

                <p>
                    ${monument.description}
                </p>

                <span class="card-open">
                    EXPLORE DETAILS →
                </span>

            </div>
        `;

        const image = card.querySelector("img");

        image.addEventListener("error", () => {
            image.src =
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85";
        });

        card.addEventListener("click", () => {
            openModal(monument);
        });

        addTilt(card);

        grid.appendChild(card);

    });

}


/* 3D TILT */

function addTilt(card) {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - .5) * 10;

        const rotateX =
            ((y / rect.height) - .5) * -10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

}


/* MODAL */

function openModal(monument) {

    modalImage.src = monument.image;
    modalImage.alt = monument.name;

    modalTitle.textContent = monument.name;
    modalPeriod.textContent = monument.period;
    modalLocation.textContent = monument.location;
    modalDescription.textContent = monument.description;

    modalStyle.textContent = monument.style;
    modalPlace.textContent = monument.location;
    modalEra.textContent = monument.era;

    modalSignificance.textContent =
        monument.significance;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* CLOSE MODAL */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* FILTER */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(item =>
            item.classList.remove("active")
        );

        button.classList.add("active");

        activeFilter =
            button.dataset.filter;

        renderMonuments();

    });

});


/* SEARCH */

search.addEventListener("input", renderMonuments);


/* MODAL EVENTS */

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


/* MOBILE NAVIGATION */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const opened =
        navLinks.classList.contains("open");

    menuToggle.setAttribute(
        "aria-expanded",
        opened
    );

});


navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });

});


/* NAV SCROLL */

const nav =
    document.querySelector(".site-nav");

window.addEventListener("scroll", () => {

    nav.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});


/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("pageLoader")
            .classList.add("hidden");

    }, 600);

});


/* INITIAL */

renderMonuments();s