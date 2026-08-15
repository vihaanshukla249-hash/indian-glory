/* =========================================================
   INDIAN GLORY
   FREEDOM FIGHTERS — INTERACTIVE ARCHIVE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       IMAGE HELPER
    ===================================================== */

    function wiki(file) {
        return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
    }


    const fallbackImage = wiki(
        "India Gate in New Delhi 03-2016 img3.jpg"
    );


    /* =====================================================
       FREEDOM FIGHTER DATABASE
    ===================================================== */

    const fighters = [

        {
            name: "Rani Lakshmibai",
            category: "women",
            categoryLabel: "Warrior Queen",
            dates: "1828 — 1858",
            born: "Varanasi, Uttar Pradesh",
            region: "Jhansi",
            knownFor: "Uprising of 1857",
            image: wiki("Rani of Jhansi.jpg"),
            biography:
                "Rani Lakshmibai, the queen of Jhansi, became one of the most enduring symbols of resistance during the uprising of 1857. She opposed British attempts to annex Jhansi and played a prominent military role during the conflict.",
            contributions: [
                "Led the defence of Jhansi during the uprising of 1857.",
                "Organised resistance forces in the region.",
                "Became an enduring symbol of courage and resistance."
            ]
        },

        {
            name: "Mangal Pandey",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1827 — 1857",
            born: "Nagwa, Uttar Pradesh",
            region: "Bengal Army",
            knownFor: "Early events of 1857",
            image: wiki("Mangal Pandey.jpg"),
            biography:
                "Mangal Pandey was a soldier in the Bengal Army whose actions at Barrackpore in 1857 became associated with the opening events of the uprising that spread across northern and central India.",
            contributions: [
                "Resisted policies affecting Indian soldiers.",
                "Became associated with the opening events of the 1857 uprising.",
                "Became an important symbol of resistance."
            ]
        },

        {
            name: "Tatya Tope",
            category: "revolutionary",
            categoryLabel: "Military Leader",
            dates: "1814 — 1859",
            born: "Yeola, Maharashtra",
            region: "Central India",
            knownFor: "Military resistance of 1857",
            image: wiki("Tatya Tope.jpg"),
            biography:
                "Tatya Tope was one of the prominent military leaders of the uprising of 1857. He continued resistance after several major centres of the rebellion had been suppressed.",
            contributions: [
                "Commanded forces during the uprising of 1857.",
                "Worked with other major leaders of the rebellion.",
                "Continued resistance through mobile military campaigns."
            ]
        },

        {
            name: "Bahadur Shah Zafar",
            category: "leader",
            categoryLabel: "Emperor & Leader",
            dates: "1775 — 1862",
            born: "Delhi",
            region: "Delhi",
            knownFor: "Symbolic leadership in 1857",
            image: wiki("Bahadur Shah Zafar.jpg"),
            biography:
                "Bahadur Shah Zafar was the last Mughal emperor. During the uprising of 1857, rebels in Delhi recognised him as a symbolic leader.",
            contributions: [
                "Served as a symbolic figurehead during the uprising.",
                "Provided political legitimacy to rebel forces in Delhi.",
                "His exile marked the end of the Mughal dynasty."
            ]
        },

        {
            name: "Kunwar Singh",
            category: "leader",
            categoryLabel: "Rebel Leader",
            dates: "1777 — 1858",
            born: "Jagdishpur, Bihar",
            region: "Bihar",
            knownFor: "Uprising of 1857",
            image: wiki("Kunwar Singh.jpg"),
            biography:
                "Kunwar Singh was a zamindar and military leader from Bihar who played an important role in the uprising of 1857. Despite his advanced age, he led resistance forces in the region.",
            contributions: [
                "Led resistance forces in Bihar.",
                "Organised military campaigns against British forces.",
                "Became a prominent regional symbol of resistance."
            ]
        },

        {
            name: "Begum Hazrat Mahal",
            category: "women",
            categoryLabel: "Leader",
            dates: "1820 — 1879",
            born: "Awadh",
            region: "Lucknow",
            knownFor: "Resistance in Awadh",
            image: wiki("Begum Hazrat Mahal.jpg"),
            biography:
                "Begum Hazrat Mahal played a leading role in resistance in Awadh during the uprising of 1857. She opposed British rule and helped organise resistance after the annexation of Awadh.",
            contributions: [
                "Helped organise resistance in Awadh.",
                "Opposed the annexation of Awadh.",
                "Provided leadership during the uprising."
            ]
        },

        {
            name: "Dadabhai Naoroji",
            category: "leader",
            categoryLabel: "Nationalist",
            dates: "1825 — 1917",
            born: "Bombay",
            region: "Maharashtra",
            knownFor: "Economic nationalism",
            image: wiki("Dadabhai Naoroji.jpg"),
            biography:
                "Dadabhai Naoroji was a pioneering Indian nationalist, scholar and political thinker. His economic analysis of British rule helped establish arguments for Indian self-government.",
            contributions: [
                "Co-founded the Indian National Congress.",
                "Developed the Drain of Wealth theory.",
                "Became the first Asian elected to the British House of Commons."
            ]
        },

        {
            name: "Bal Gangadhar Tilak",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1856 — 1920",
            born: "Ratnagiri, Maharashtra",
            region: "Maharashtra",
            knownFor: "Assertive nationalism",
            image: wiki("Bal Gangadhar Tilak.jpg"),
            biography:
                "Bal Gangadhar Tilak was a major nationalist leader, educator and journalist who advocated stronger political action against colonial rule.",
            contributions: [
                "Popularised the demand for self-rule.",
                "Used journalism to promote nationalist ideas.",
                "Helped expand public political participation."
            ]
        },

        {
            name: "Gopal Krishna Gokhale",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1866 — 1915",
            born: "Ratnagiri, Maharashtra",
            region: "Maharashtra",
            knownFor: "Moderate nationalism",
            image: wiki("Gopal Krishna Gokhale.jpg"),
            biography:
                "Gopal Krishna Gokhale was a political leader and social reformer who advocated constitutional methods, education and gradual political reform.",
            contributions: [
                "Founded the Servants of India Society.",
                "Advocated political and educational reform.",
                "Influenced younger nationalists including Gandhi."
            ]
        },

        {
            name: "Lala Lajpat Rai",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1865 — 1928",
            born: "Dhudike, Punjab",
            region: "Punjab",
            knownFor: "Anti-colonial movement",
            image: wiki("Lala Lajpat Rai.jpg"),
            biography:
                "Lala Lajpat Rai was a prominent nationalist leader, writer and social reformer. He was one of the leaders popularly known as the Lal-Bal-Pal trio.",
            contributions: [
                "Played a major role in nationalist politics.",
                "Supported education and social reform.",
                "Led a protest against the Simon Commission."
            ]
        },

        {
            name: "Bipin Chandra Pal",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1858 — 1932",
            born: "Sylhet",
            region: "Bengal",
            knownFor: "Swadeshi Movement",
            image: wiki("Bipin Chandra Pal.jpg"),
            biography:
                "Bipin Chandra Pal was a nationalist thinker, journalist and speaker who became a leading advocate of the Swadeshi movement.",
            contributions: [
                "Promoted Swadeshi and national education.",
                "Worked as a journalist and political speaker.",
                "Formed the Lal-Bal-Pal leadership group."
            ]
        },

        {
            name: "Mahatma Gandhi",
            category: "leader",
            categoryLabel: "National Leader",
            dates: "1869 — 1948",
            born: "Porbandar, Gujarat",
            region: "India",
            knownFor: "Nonviolent mass movements",
            image: wiki("Mahatma Gandhi, portrait.jpg"),
            biography:
                "Mahatma Gandhi became one of the central figures of India's independence movement. He promoted nonviolent resistance and mass participation through major national campaigns.",
            contributions: [
                "Led major mass movements against colonial rule.",
                "Promoted nonviolent civil resistance.",
                "Helped mobilise millions of Indians."
            ]
        },

        {
            name: "Sarojini Naidu",
            category: "women",
            categoryLabel: "Nationalist Leader",
            dates: "1879 — 1949",
            born: "Hyderabad",
            region: "India",
            knownFor: "National movement",
            image: wiki("Sarojini Naidu.jpg"),
            biography:
                "Sarojini Naidu was a poet, political leader and prominent participant in India's national movement. She also advocated women's participation in public life.",
            contributions: [
                "Participated in major nationalist campaigns.",
                "Advocated women's political participation.",
                "Became the first Indian woman president of the Indian National Congress."
            ]
        },

        {
            name: "Jawaharlal Nehru",
            category: "leader",
            categoryLabel: "National Leader",
            dates: "1889 — 1964",
            born: "Allahabad",
            region: "India",
            knownFor: "Indian National Congress",
            image: wiki("Jawaharlal Nehru.jpg"),
            biography:
                "Jawaharlal Nehru was a leading figure in India's independence movement and a close associate of Mahatma Gandhi. He spent years in prison during the struggle.",
            contributions: [
                "Participated in major national movements.",
                "Advocated Purna Swaraj.",
                "Played a major role in the Indian National Congress."
            ]
        },

        {
            name: "Sardar Vallabhbhai Patel",
            category: "leader",
            categoryLabel: "National Leader",
            dates: "1875 — 1950",
            born: "Nadiad, Gujarat",
            region: "Gujarat",
            knownFor: "Kheda & Bardoli movements",
            image: wiki("Sardar Patel.jpg"),
            biography:
                "Sardar Vallabhbhai Patel was an important nationalist leader and organiser. His leadership during movements in Gujarat established him as a major figure in the freedom struggle.",
            contributions: [
                "Led the Bardoli Satyagraha.",
                "Organised large political campaigns.",
                "Played a major role in the national movement."
            ]
        },

        {
            name: "Subhas Chandra Bose",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1897 — 1945",
            born: "Cuttack, Odisha",
            region: "India",
            knownFor: "Indian National Army",
            image: wiki("Subhas Chandra Bose.jpg"),
            biography:
                "Subhas Chandra Bose was a major nationalist leader who sought independence through a more militant approach. During the Second World War, he led the Indian National Army.",
            contributions: [
                "Led the Indian National Army.",
                "Formed the Provisional Government of Free India.",
                "Inspired Indians through his call for independence."
            ]
        },

        {
            name: "Bhagat Singh",
            category: "young",
            categoryLabel: "Revolutionary",
            dates: "1907 — 1931",
            born: "Banga, Punjab",
            region: "Punjab",
            knownFor: "Revolutionary movement",
            image: wiki("Bhagat Singh 1929.jpg"),
            biography:
                "Bhagat Singh was a revolutionary nationalist whose writings, political ideas and actions made him one of the most recognisable figures of India's independence movement.",
            contributions: [
                "Participated in revolutionary political organisations.",
                "Used writing and public actions to spread political ideas.",
                "Inspired generations of Indians."
            ]
        },

        {
            name: "Chandrashekhar Azad",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1906 — 1931",
            born: "Bhavra, Madhya Pradesh",
            region: "North India",
            knownFor: "HSRA",
            image: wiki("Chandrashekhar Azad.jpg"),
            biography:
                "Chandrashekhar Azad was a prominent revolutionary and leading figure of the Hindustan Socialist Republican Association.",
            contributions: [
                "Helped organise revolutionary networks.",
                "Worked with Bhagat Singh and other revolutionaries.",
                "Became a symbol of revolutionary resistance."
            ]
        },

        {
            name: "Ram Prasad Bismil",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1897 — 1927",
            born: "Shahjahanpur, Uttar Pradesh",
            region: "United Provinces",
            knownFor: "Kakori action",
            image: wiki("Ram Prasad Bismil.jpg"),
            biography:
                "Ram Prasad Bismil was a revolutionary, poet and political activist associated with the Hindustan Republican Association and the Kakori action.",
            contributions: [
                "Helped establish revolutionary organisations.",
                "Played a leading role in the Kakori action.",
                "Used poetry to inspire nationalist sentiment."
            ]
        },

        {
            name: "Ashfaqulla Khan",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1900 — 1927",
            born: "Shahjahanpur, Uttar Pradesh",
            region: "United Provinces",
            knownFor: "Kakori action",
            image: wiki("Ashfaqulla Khan.jpg"),
            biography:
                "Ashfaqulla Khan was a revolutionary associated with the Hindustan Republican Association and the Kakori action.",
            contributions: [
                "Participated in the Kakori action.",
                "Worked within the Hindustan Republican Association.",
                "Became a symbol of Hindu-Muslim unity."
            ]
        },

        {
            name: "Shivaram Rajguru",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1908 — 1931",
            born: "Khed, Maharashtra",
            region: "Maharashtra",
            knownFor: "Revolutionary movement",
            image: wiki("Shivaram Rajguru.jpg"),
            biography:
                "Shivaram Rajguru was a revolutionary associated with the Hindustan Socialist Republican Association and worked alongside Bhagat Singh and Sukhdev.",
            contributions: [
                "Worked within the revolutionary movement.",
                "Collaborated with Bhagat Singh and Sukhdev.",
                "Became one of the best-known young revolutionaries."
            ]
        },

        {
            name: "Sukhdev Thapar",
            category: "young",
            categoryLabel: "Revolutionary",
            dates: "1907 — 1931",
            born: "Ludhiana, Punjab",
            region: "Punjab",
            knownFor: "Revolutionary movement",
            image: wiki("Sukhdev Thapar.jpg"),
            biography:
                "Sukhdev Thapar was a revolutionary and close associate of Bhagat Singh who played an important organisational role in the movement.",
            contributions: [
                "Helped organise revolutionary activities.",
                "Worked closely with Bhagat Singh.",
                "Inspired later generations of young Indians."
            ]
        },

        {
            name: "Udham Singh",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1899 — 1940",
            born: "Sunam, Punjab",
            region: "Punjab",
            knownFor: "Jallianwala Bagh legacy",
            image: wiki("Udham Singh.jpg"),
            biography:
                "Udham Singh was a revolutionary nationalist associated with the memory of the Jallianwala Bagh massacre and anti-colonial resistance.",
            contributions: [
                "Carried the memory of Jallianwala Bagh abroad.",
                "Became associated with revolutionary politics.",
                "Remained a prominent symbol of resistance in Punjab."
            ]
        },

        {
            name: "Surya Sen",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1894 — 1934",
            born: "Chittagong",
            region: "Bengal",
            knownFor: "Chittagong Armoury Raid",
            image: wiki("Surya Sen.jpg"),
            biography:
                "Surya Sen, popularly known as Masterda, was a revolutionary leader who organised the Chittagong Armoury Raid in 1930.",
            contributions: [
                "Organised the Chittagong Armoury Raid.",
                "Built revolutionary networks in Bengal.",
                "Inspired young people to participate in the independence struggle."
            ]
        },

        {
            name: "Alluri Sitarama Raju",
            category: "tribal",
            categoryLabel: "Tribal Resistance Leader",
            dates: "1897 — 1924",
            born: "Andhra region",
            region: "Andhra Pradesh",
            knownFor: "Rampa Rebellion",
            image: wiki("Alluri Sitarama Raju.jpg"),
            biography:
                "Alluri Sitarama Raju led a major tribal resistance movement in the Agency areas of present-day Andhra Pradesh. The Rampa Rebellion opposed colonial forest policies and British authority.",
            contributions: [
                "Led the Rampa Rebellion.",
                "Organised tribal resistance.",
                "Became an important regional symbol of resistance."
            ]
        },

        {
            name: "Birsa Munda",
            category: "tribal",
            categoryLabel: "Tribal Leader",
            dates: "1875 — 1900",
            born: "Ulihatu, Jharkhand",
            region: "Jharkhand",
            knownFor: "Munda Ulgulan",
            image: wiki("Birsa Munda.jpg"),
            biography:
                "Birsa Munda was a tribal leader whose movement challenged colonial rule and exploitative land systems in the Chotanagpur region.",
            contributions: [
                "Led the Munda Ulgulan.",
                "Opposed exploitative colonial land arrangements.",
                "Became a lasting symbol of tribal resistance."
            ]
        },

        {
            name: "Rani Gaidinliu",
            category: "tribal",
            categoryLabel: "Tribal Freedom Fighter",
            dates: "1915 — 1993",
            born: "Tamenglong region",
            region: "Northeast India",
            knownFor: "Heraka movement",
            image: wiki("Rani Gaidinliu.jpg"),
            biography:
                "Rani Gaidinliu was a Naga spiritual and political leader who resisted British rule in the Northeast and was imprisoned by the British at a young age.",
            contributions: [
                "Participated in the Heraka movement.",
                "Resisted British authority in the Northeast.",
                "Became a symbol of indigenous resistance."
            ]
        },

        {
            name: "Matangini Hazra",
            category: "women",
            categoryLabel: "Freedom Activist",
            dates: "1870 — 1942",
            born: "Tamluk, Bengal",
            region: "Bengal",
            knownFor: "Quit India Movement",
            image: wiki("Matangini Hazra.jpg"),
            biography:
                "Matangini Hazra was a participant in India's independence movement who became associated with the Quit India Movement in Bengal.",
            contributions: [
                "Participated in civil disobedience campaigns.",
                "Supported the Quit India Movement.",
                "Became a symbol of women's participation."
            ]
        },

        {
            name: "Aruna Asaf Ali",
            category: "women",
            categoryLabel: "Freedom Activist",
            dates: "1909 — 1996",
            born: "Kalka",
            region: "Delhi",
            knownFor: "Quit India Movement",
            image: wiki("Aruna Asaf Ali.jpg"),
            biography:
                "Aruna Asaf Ali was a prominent political activist who played an important role during the Quit India Movement and became associated with underground resistance.",
            contributions: [
                "Participated in the Quit India Movement.",
                "Worked through underground networks.",
                "Became a prominent symbol of resistance."
            ]
        },

        {
            name: "Usha Mehta",
            category: "women",
            categoryLabel: "Freedom Activist",
            dates: "1920 — 2000",
            born: "Gujarat",
            region: "Gujarat / Bombay",
            knownFor: "Congress Radio",
            image: wiki("Usha Mehta.jpg"),
            biography:
                "Usha Mehta was a young freedom activist who helped operate the underground Congress Radio during the Quit India Movement.",
            contributions: [
                "Helped operate the underground Congress Radio.",
                "Supported communication during the Quit India Movement.",
                "Became an example of youth participation."
            ]
        },

        {
            name: "Lakshmi Sahgal",
            category: "women",
            categoryLabel: "INA Leader",
            dates: "1914 — 2012",
            born: "Madras",
            region: "India / Southeast Asia",
            knownFor: "Rani of Jhansi Regiment",
            image: wiki("Lakshmi Sahgal.jpg"),
            biography:
                "Lakshmi Sahgal was a physician and nationalist who joined Subhas Chandra Bose's Indian National Army. She became commander of the Rani of Jhansi Regiment.",
            contributions: [
                "Joined the Indian National Army.",
                "Commanded the Rani of Jhansi Regiment.",
                "Played a major role in women's participation in the INA."
            ]
        },

        {
            name: "Kanaklata Barua",
            category: "young",
            categoryLabel: "Young Freedom Fighter",
            dates: "1924 — 1942",
            born: "Barangabari, Assam",
            region: "Assam",
            knownFor: "Quit India Movement",
            image: wiki("Kanaklata Barua.jpg"),
            biography:
                "Kanaklata Barua was a young Assamese freedom activist who participated in the Quit India Movement and became a symbol of youthful participation.",
            contributions: [
                "Participated in the Quit India Movement.",
                "Inspired youth participation in Assam.",
                "Became a prominent symbol of courage."
            ]
        },

        {
            name: "Senapati Bapat",
            category: "revolutionary",
            categoryLabel: "Nationalist",
            dates: "1880 — 1967",
            born: "Parner, Maharashtra",
            region: "Maharashtra",
            knownFor: "Nationalist activism",
            image: wiki("Senapati Bapat.jpg"),
            biography:
                "Pandurang Mahadev Bapat, popularly known as Senapati Bapat, was a nationalist and social activist associated with revolutionary politics and later mass movements.",
            contributions: [
                "Participated in nationalist political activities.",
                "Led public campaigns in Maharashtra.",
                "Became known as Senapati Bapat."
            ]
        },

        {
            name: "Maulana Abul Kalam Azad",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1888 — 1958",
            born: "Mecca",
            region: "India",
            knownFor: "Indian National Congress",
            image: wiki("Abul Kalam Azad.jpg"),
            biography:
                "Maulana Abul Kalam Azad was a scholar, journalist and major leader of the Indian independence movement. He served as president of the Indian National Congress and participated in the Quit India Movement.",
            contributions: [
                "Served as president of the Indian National Congress.",
                "Participated in the national movement.",
                "Advocated Hindu-Muslim unity and national education."
            ]
        },

        {
            name: "Annie Besant",
            category: "women",
            categoryLabel: "Home Rule Leader",
            dates: "1847 — 1933",
            born: "London, England",
            region: "India",
            knownFor: "Home Rule Movement",
            image: wiki("Annie Besant.jpg"),
            biography:
                "Annie Besant was a British-born activist who became an important supporter of Indian self-government. She played a leading role in the Home Rule Movement.",
            contributions: [
                "Led the Home Rule Movement alongside Indian nationalists.",
                "Served as president of the Indian National Congress.",
                "Supported education and self-government in India."
            ]
        }

    ];


    /* =====================================================
       DOM
    ===================================================== */

    const grid =
        document.getElementById("fightersGrid");

    const search =
        document.getElementById("fighterSearch");

    const buttons =
        document.querySelectorAll(".filter-button");

    const noResults =
        document.getElementById("noResults");

    const resultsInfo =
        document.getElementById("resultsInfo");

    const fighterCount =
        document.getElementById("fighterCount");

    const modal =
        document.getElementById("fighterModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalBackdrop =
        document.querySelector(".modal-backdrop");

    const modalPortrait =
        document.getElementById("modalPortrait");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalName =
        document.getElementById("modalName");

    const modalDates =
        document.getElementById("modalDates");

    const modalBorn =
        document.getElementById("modalBorn");

    const modalRegion =
        document.getElementById("modalRegion");

    const modalKnownFor =
        document.getElementById("modalKnownFor");

    const modalBiography =
        document.getElementById("modalBiography");

    const modalContributions =
        document.getElementById("modalContributions");

    const randomHero =
        document.getElementById("randomHero");

    const exploreHeroes =
        document.getElementById("exploreHeroes");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const nav =
        document.getElementById("ffNav");


    /* =====================================================
       STATE
    ===================================================== */

    let currentFilter = "all";
    let searchTerm = "";


    /* =====================================================
       CARD
    ===================================================== */

    function createCard(fighter, index) {

        const card =
            document.createElement("article");

        card.className = "fighter-card";

        card.style.animationDelay =
            `${Math.min(index * 0.035, 0.5)}s`;

        card.innerHTML = `
            <div class="fighter-image"></div>

            <div class="fighter-overlay"></div>

            <div class="fighter-content">

                <span class="fighter-category">
                    ${fighter.categoryLabel}
                </span>

                <h3>
                    ${fighter.name}
                </h3>

                <p class="fighter-dates">
                    ${fighter.dates}
                </p>

                <p class="fighter-region">
                    📍 ${fighter.region}
                </p>

                <div class="fighter-open">
                    Explore Story
                    <span>→</span>
                </div>

            </div>
        `;

        const image =
            card.querySelector(".fighter-image");

        setBackgroundImage(
            image,
            fighter.image
        );

        card.addEventListener(
            "click",
            () => openModal(fighter)
        );

        addTilt(card);

        return card;
    }


    /* =====================================================
       IMAGE HANDLING
    ===================================================== */

    function setBackgroundImage(element, url) {

        const testImage =
            new Image();

        testImage.onload = () => {

            element.style.backgroundImage =
                `url("${url}")`;
        };

        testImage.onerror = () => {

            element.style.backgroundImage =
                `url("${fallbackImage}")`;
        };

        testImage.src = url;
    }


    /* =====================================================
       RENDER
    ===================================================== */

    function renderFighters() {

        if (!grid) {
            return;
        }

        const filtered =
            fighters.filter(fighter => {

                const categoryMatch =
                    currentFilter === "all" ||
                    fighter.category === currentFilter;

                const searchable =
                    `
                    ${fighter.name}
                    ${fighter.categoryLabel}
                    ${fighter.region}
                    ${fighter.knownFor}
                    ${fighter.biography}
                    `
                    .toLowerCase();

                const searchMatch =
                    searchable.includes(
                        searchTerm.toLowerCase()
                    );

                return (
                    categoryMatch &&
                    searchMatch
                );
            });


        grid.innerHTML = "";


        if (filtered.length === 0) {

            noResults.hidden = false;

            resultsInfo.textContent =
                "No heroes match your search.";

            return;
        }


        noResults.hidden = true;


        resultsInfo.textContent =
            `Showing ${filtered.length} of ${fighters.length} heroes`;


        filtered.forEach(
            (fighter, index) => {

                grid.appendChild(
                    createCard(
                        fighter,
                        index
                    )
                );
            }
        );
    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (search) {

        search.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value.trim();

                renderFighters();
            }
        );
    }


    /* =====================================================
       FILTER
    ===================================================== */

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    item =>
                        item.classList.remove("active")
                );

                button.classList.add("active");

                currentFilter =
                    button.dataset.filter;

                renderFighters();
            }
        );
    });


    /* =====================================================
       MODAL
    ===================================================== */

    function openModal(fighter) {

        modalCategory.textContent =
            fighter.categoryLabel;

        modalName.textContent =
            fighter.name;

        modalDates.textContent =
            fighter.dates;

        modalBorn.textContent =
            fighter.born;

        modalRegion.textContent =
            fighter.region;

        modalKnownFor.textContent =
            fighter.knownFor;

        modalBiography.textContent =
            fighter.biography;


        modalContributions.innerHTML =
            fighter.contributions
                .map(
                    contribution =>
                        `<li>${contribution}</li>`
                )
                .join("");


        setBackgroundImage(
            modalPortrait,
            fighter.image
        );


        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    function closeModal() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    modalClose?.addEventListener(
        "click",
        closeModal
    );

    modalBackdrop?.addEventListener(
        "click",
        closeModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {
                closeModal();
            }
        }
    );


    /* =====================================================
       RANDOM HERO
    ===================================================== */

    randomHero?.addEventListener(
        "click",
        () => {

            const random =
                fighters[
                    Math.floor(
                        Math.random() *
                        fighters.length
                    )
                ];

            openModal(random);
        }
    );


    /* =====================================================
       EXPLORE BUTTON
    ===================================================== */

    exploreHeroes?.addEventListener(
        "click",
        () => {

            document
                .getElementById("heroes")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    mobileMenu?.addEventListener(
        "click",
        () => {

            nav.classList.toggle("open");

            mobileMenu.textContent =
                nav.classList.contains("open")
                    ? "×"
                    : "☰";
        }
    );


    document
        .querySelectorAll(".ff-nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("open");

                    mobileMenu.textContent =
                        "☰";
                }
            );
        });


    /* =====================================================
       CARD TILT
    ===================================================== */

    function addTilt(card) {

        if (
            window.matchMedia(
                "(pointer: coarse)"
            ).matches
        ) {
            return;
        }


        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    (x - centerX) / 25;

                const rotateX =
                    (centerY - y) / 25;

                card.style.transform =
                    `
                    translateY(-8px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.01)
                    `;
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";
            }
        );
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".timeline-item, .stat-card"
        );


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
                threshold: 0.15
            }
        );


    revealElements.forEach(
        element =>
            revealObserver.observe(element)
    );


    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    document
                        .getElementById("ffLoader")
                        ?.classList.add("hidden");

                },
                500
            );
        }
    );


    /* =====================================================
       INITIALISE
    ===================================================== */

    if (fighterCount) {
        fighterCount.textContent =
            fighters.length;
    }

    renderFighters();


    console.log(
        `🇮🇳 Indian Glory — ${fighters.length} heroes loaded.`
    );

});
