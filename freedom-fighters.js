/* =========================================================
   INDIAN GLORY — FREEDOM FIGHTERS
   Interactive Historical Archive
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       FIGHTER DATABASE
    ===================================================== */

    const fighters = [

        {
            id: "rani-lakshmibai",
            name: "Rani Lakshmibai",
            category: "women",
            categoryLabel: "Warrior Queen",
            dates: "1828 — 1858",
            born: "Varanasi, Uttar Pradesh",
            region: "Jhansi, Uttar Pradesh",
            knownFor: "Revolt of 1857",
            image: "images/fighters/rani-lakshmibai.jpg",

            biography:
                "Rani Lakshmibai, the queen of Jhansi, became one of the most enduring symbols of resistance during the uprising of 1857. She opposed the British annexation of Jhansi and played a major military role during the uprising.",

            contributions: [
                "Led the defence of Jhansi during the uprising of 1857.",
                "Organised resistance forces in Jhansi.",
                "Worked alongside other leaders of the uprising.",
                "Became an enduring symbol of courage and resistance."
            ]
        },

        {
            id: "mangal-pandey",
            name: "Mangal Pandey",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1827 — 1857",
            born: "Nagwa, Uttar Pradesh",
            region: "Bengal Army",
            knownFor: "Early events of the 1857 uprising",
            image: "images/fighters/mangal-pandey.jpg",

            biography:
                "Mangal Pandey was a soldier in the Bengal Army whose actions at Barrackpore in 1857 became associated with the opening events of the uprising against British rule.",

            contributions: [
                "Resisted policies affecting Indian soldiers.",
                "Became associated with the opening events of the 1857 uprising.",
                "Became an important symbol of resistance."
            ]
        },

        {
            id: "tatya-tope",
            name: "Tatya Tope",
            category: "revolutionary",
            categoryLabel: "Military Leader",
            dates: "1814 — 1859",
            born: "Yeola, Maharashtra",
            region: "Central India",
            knownFor: "Military resistance of 1857",
            image: "images/fighters/tatya-tope.jpg",

            biography:
                "Tatya Tope was one of the prominent military leaders of the uprising of 1857. He continued resistance after several major centres of the uprising had been suppressed.",

            contributions: [
                "Commanded forces during the uprising of 1857.",
                "Worked with Nana Sahib and Rani Lakshmibai.",
                "Continued resistance through mobile military campaigns."
            ]
        },

        {
            id: "bahadur-shah-zafar",
            name: "Bahadur Shah Zafar",
            category: "leader",
            categoryLabel: "Emperor & Leader",
            dates: "1775 — 1862",
            born: "Delhi",
            region: "Delhi",
            knownFor: "Symbolic leadership during 1857",
            image: "images/fighters/bahadur-shah-zafar.jpg",

            biography:
                "Bahadur Shah Zafar was the last Mughal emperor. During the uprising of 1857, rebels in Delhi recognised him as their symbolic leader. His association with the uprising marked the final chapter of Mughal political authority in India.",

            contributions: [
                "Served as a symbolic figurehead during the uprising.",
                "Provided political legitimacy to rebel forces in Delhi.",
                "Became an important figure associated with the 1857 uprising."
            ]
        },

        {
            id: "kunwar-singh",
            name: "Kunwar Singh",
            category: "leader",
            categoryLabel: "Rebel Leader",
            dates: "1777 — 1858",
            born: "Jagdishpur, Bihar",
            region: "Bihar",
            knownFor: "Uprising of 1857",
            image: "images/fighters/kunwar-singh.jpg",

            biography:
                "Kunwar Singh was a zamindar and military leader from Bihar who played an important role in the uprising of 1857. Despite his advanced age, he led resistance forces in the region.",

            contributions: [
                "Led resistance forces in Bihar.",
                "Organised military campaigns against British forces.",
                "Became a prominent regional symbol of resistance."
            ]
        },

        {
            id: "begum-hazrat-mahal",
            name: "Begum Hazrat Mahal",
            category: "women",
            categoryLabel: "Leader",
            dates: "1820 — 1879",
            born: "Awadh",
            region: "Lucknow",
            knownFor: "Resistance in Awadh",
            image: "images/fighters/begum-hazrat-mahal.jpg",

            biography:
                "Begum Hazrat Mahal played a leading role in the resistance in Awadh during the uprising of 1857. She opposed the British annexation of Awadh and helped organise resistance in the region.",

            contributions: [
                "Helped organise resistance in Awadh.",
                "Opposed the annexation of Awadh.",
                "Provided political leadership during the uprising."
            ]
        },

        {
            id: "dadabhai-naoroji",
            name: "Dadabhai Naoroji",
            category: "leader",
            categoryLabel: "Nationalist",
            dates: "1825 — 1917",
            born: "Bombay",
            region: "Maharashtra",
            knownFor: "Drain of Wealth theory",
            image: "images/fighters/dadabhai-naoroji.jpg",

            biography:
                "Dadabhai Naoroji was a pioneering Indian nationalist, scholar and political thinker. His economic analysis of British rule helped establish arguments for Indian self-government.",

            contributions: [
                "Co-founded the Indian National Congress.",
                "Developed the Drain of Wealth theory.",
                "Was elected to the British House of Commons.",
                "Advocated greater political representation for Indians."
            ]
        },

        {
            id: "bal-gangadhar-tilak",
            name: "Bal Gangadhar Tilak",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1856 — 1920",
            born: "Ratnagiri, Maharashtra",
            region: "Maharashtra",
            knownFor: "Assertive nationalism",
            image: "images/fighters/bal-gangadhar-tilak.jpg",

            biography:
                "Bal Gangadhar Tilak was a major nationalist leader, educator and journalist. He advocated stronger political action against colonial rule and helped transform nationalism into a wider public movement.",

            contributions: [
                "Popularised the demand for self-rule.",
                "Used journalism to promote nationalist ideas.",
                "Promoted public political participation.",
                "Played an important role in the Swadeshi era."
            ]
        },

        {
            id: "gopal-krishna-gokhale",
            name: "Gopal Krishna Gokhale",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1866 — 1915",
            born: "Ratnagiri, Maharashtra",
            region: "Maharashtra",
            knownFor: "Moderate nationalism",
            image: "images/fighters/gopal-krishna-gokhale.jpg",

            biography:
                "Gopal Krishna Gokhale was a major political leader and social reformer who advocated constitutional methods, education and gradual political reform.",

            contributions: [
                "Founded the Servants of India Society.",
                "Advocated political and educational reform.",
                "Participated in the Indian National Congress.",
                "Influenced younger nationalists including Mahatma Gandhi."
            ]
        },

        {
            id: "lala-lajpat-rai",
            name: "Lala Lajpat Rai",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1865 — 1928",
            born: "Dhudike, Punjab",
            region: "Punjab",
            knownFor: "Anti-colonial nationalism",
            image: "images/fighters/lala-lajpat-rai.jpg",

            biography:
                "Lala Lajpat Rai was a prominent nationalist leader, writer and social reformer. He was one of the leaders popularly known as the Lal-Bal-Pal trio.",

            contributions: [
                "Played a major role in nationalist politics.",
                "Supported education and social reform.",
                "Promoted Indian self-government.",
                "Led a protest against the Simon Commission."
            ]
        },

        {
            id: "bipin-chandra-pal",
            name: "Bipin Chandra Pal",
            category: "leader",
            categoryLabel: "Nationalist Leader",
            dates: "1858 — 1932",
            born: "Sylhet",
            region: "Bengal",
            knownFor: "Swadeshi Movement",
            image: "images/fighters/bipin-chandra-pal.jpg",

            biography:
                "Bipin Chandra Pal was a prominent nationalist thinker, journalist and speaker. He became one of the leading advocates of the Swadeshi movement.",

            contributions: [
                "Promoted Swadeshi and national education.",
                "Worked as a journalist and political speaker.",
                "Helped develop assertive nationalist politics."
            ]
        },

        {
            id: "mahatma-gandhi",
            name: "Mahatma Gandhi",
            category: "leader",
            categoryLabel: "National Leader",
            dates: "1869 — 1948",
            born: "Porbandar, Gujarat",
            region: "India",
            knownFor: "Nonviolent mass movements",
            image: "images/fighters/mahatma-gandhi.jpg",

            biography:
                "Mahatma Gandhi became one of the central figures of India's independence movement. He promoted nonviolent resistance and mass participation through major campaigns including Non-Cooperation, Civil Disobedience and Quit India.",

            contributions: [
                "Led major mass movements against colonial rule.",
                "Promoted nonviolent civil resistance.",
                "Encouraged mass participation in the national movement.",
                "Played a central role in India's independence struggle."
            ]
        },

        {
            id: "sarojini-naidu",
            name: "Sarojini Naidu",
            category: "women",
            categoryLabel: "Nationalist Leader",
            dates: "1879 — 1949",
            born: "Hyderabad",
            region: "India",
            knownFor: "National movement & women's participation",
            image: "images/fighters/sarojini-naidu.jpg",

            biography:
                "Sarojini Naidu was a poet, political leader and prominent participant in India's national movement. She advocated women's participation in public life and became an important Congress leader.",

            contributions: [
                "Participated in major nationalist campaigns.",
                "Advocated women's political participation.",
                "Became the first Indian woman president of the Indian National Congress.",
                "Participated in civil disobedience campaigns."
            ]
        },

        {
            id: "jawaharlal-nehru",
            name: "Jawaharlal Nehru",
            category: "leader",
            categoryLabel: "National Leader",
            dates: "1889 — 1964",
            born: "Allahabad",
            region: "India",
            knownFor: "Purna Swaraj & national movement",
            image: "images/fighters/jawaharlal-nehru.jpg",

            biography:
                "Jawaharlal Nehru was a leading figure in India's independence movement and a close associate of Mahatma Gandhi. He spent years in prison during the struggle and advocated complete independence.",

            contributions: [
                "Participated in major national movements.",
                "Advocated Purna Swaraj.",
                "Served as a major leader of the Indian National Congress.",
                "Spent several periods in prison during the freedom struggle."
            ]
        },

        {
            id: "sardar-vallabhbhai-patel",
            name: "Sardar Vallabhbhai Patel",
            category: "leader",
            categoryLabel: "National Leader",
            dates: "1875 — 1950",
            born: "Nadiad, Gujarat",
            region: "Gujarat",
            knownFor: "Kheda & Bardoli movements",
            image: "images/fighters/sardar-patel.jpg",

            biography:
                "Sardar Vallabhbhai Patel was an important nationalist leader and organiser. His leadership during movements in Gujarat, including Bardoli, established him as a major figure in India's freedom struggle.",

            contributions: [
                "Played a major role in the Kheda Satyagraha.",
                "Led the Bardoli Satyagraha.",
                "Organised large-scale political campaigns.",
                "Became an important leader of the Indian National Congress."
            ]
        },

        {
            id: "subhas-chandra-bose",
            name: "Subhas Chandra Bose",
            category: "leader",
            categoryLabel: "Revolutionary Nationalist",
            dates: "1897 — 1945",
            born: "Cuttack, Odisha",
            region: "India",
            knownFor: "Indian National Army",
            image: "images/fighters/subhas-chandra-bose.jpg",

            biography:
                "Subhas Chandra Bose was a major nationalist leader who sought to achieve Indian independence through a more militant approach. During the Second World War, he led the Indian National Army and established the Provisional Government of Free India.",

            contributions: [
                "Led the Indian National Army.",
                "Established the Provisional Government of Free India.",
                "Mobilised Indian soldiers and supporters abroad.",
                "Inspired many Indians through his demand for independence."
            ]
        },

        {
            id: "bhagat-singh",
            name: "Bhagat Singh",
            category: "young",
            categoryLabel: "Revolutionary",
            dates: "1907 — 1931",
            born: "Banga, Punjab",
            region: "Punjab",
            knownFor: "Revolutionary movement",
            image: "images/fighters/bhagat-singh.jpg",

            biography:
                "Bhagat Singh was a revolutionary nationalist whose writings, political ideas and activities made him one of the most recognisable figures of India's independence movement. He became an enduring symbol of youthful courage and political commitment.",

            contributions: [
                "Participated in revolutionary political organisations.",
                "Worked with the Hindustan Socialist Republican Association.",
                "Used writing and public action to spread political ideas.",
                "Inspired generations of young Indians."
            ]
        },

        {
            id: "chandrashekhar-azad",
            name: "Chandrashekhar Azad",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1906 — 1931",
            born: "Bhavra, Madhya Pradesh",
            region: "North India",
            knownFor: "Hindustan Socialist Republican Association",
            image: "images/fighters/chandrashekhar-azad.jpg",

            biography:
                "Chandrashekhar Azad was a prominent revolutionary who became a leading figure of the Hindustan Socialist Republican Association. He helped organise revolutionary activities against British rule.",

            contributions: [
                "Helped organise revolutionary networks.",
                "Worked with Bhagat Singh and other revolutionaries.",
                "Played an organisational role in the HSRA.",
                "Became a symbol of revolutionary resistance."
            ]
        },

        {
            id: "ram-prasad-bismil",
            name: "Ram Prasad Bismil",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1897 — 1927",
            born: "Shahjahanpur, Uttar Pradesh",
            region: "United Provinces",
            knownFor: "Kakori action",
            image: "images/fighters/ram-prasad-bismil.jpg",

            biography:
                "Ram Prasad Bismil was a revolutionary, poet and political activist. He was one of the key figures associated with the Hindustan Republican Association and the Kakori action.",

            contributions: [
                "Helped establish revolutionary organisations.",
                "Played a leading role in the Kakori action.",
                "Used poetry and writing to inspire nationalist sentiment.",
                "Worked to organise revolutionary resistance."
            ]
        },

        {
            id: "ashfaqulla-khan",
            name: "Ashfaqulla Khan",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1900 — 1927",
            born: "Shahjahanpur, Uttar Pradesh",
            region: "United Provinces",
            knownFor: "Kakori action",
            image: "images/fighters/ashfaqulla-khan.jpg",

            biography:
                "Ashfaqulla Khan was a revolutionary associated with the Hindustan Republican Association and the Kakori action. His friendship and political partnership with Ram Prasad Bismil became an important example of cooperation in the freedom movement.",

            contributions: [
                "Participated in the Kakori action.",
                "Worked within the Hindustan Republican Association.",
                "Worked closely with Ram Prasad Bismil.",
                "Became a symbol of unity in the freedom movement."
            ]
        },

        {
            id: "rajguru",
            name: "Shivaram Rajguru",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1908 — 1931",
            born: "Khed, Maharashtra",
            region: "Maharashtra",
            knownFor: "Revolutionary movement",
            image: "images/fighters/rajguru.jpg",

            biography:
                "Shivaram Rajguru was a revolutionary associated with the Hindustan Socialist Republican Association. He worked alongside Bhagat Singh and Sukhdev.",

            contributions: [
                "Worked within the revolutionary movement.",
                "Collaborated with Bhagat Singh and Sukhdev.",
                "Participated in revolutionary activities.",
                "Became one of the best-known young revolutionaries."
            ]
        },

        {
            id: "sukhdev",
            name: "Sukhdev Thapar",
            category: "young",
            categoryLabel: "Revolutionary",
            dates: "1907 — 1931",
            born: "Ludhiana, Punjab",
            region: "Punjab",
            knownFor: "Revolutionary movement",
            image: "images/fighters/sukhdev.jpg",

            biography:
                "Sukhdev Thapar was a revolutionary and close associate of Bhagat Singh. He played an important organisational role in the revolutionary movement in northern India.",

            contributions: [
                "Helped organise revolutionary activities.",
                "Worked closely with Bhagat Singh.",
                "Participated in the HSRA.",
                "Inspired later generations of young Indians."
            ]
        },

        {
            id: "udham-singh",
            name: "Udham Singh",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1899 — 1940",
            born: "Sunam, Punjab",
            region: "Punjab",
            knownFor: "Jallianwala Bagh legacy",
            image: "images/fighters/udham-singh.jpg",

            biography:
                "Udham Singh was a revolutionary nationalist associated with the memory of the Jallianwala Bagh massacre and anti-colonial resistance.",

            contributions: [
                "Kept the memory of Jallianwala Bagh alive.",
                "Became associated with revolutionary anti-colonial politics.",
                "Represented a strong strand of resistance in Punjab."
            ]
        },

        {
            id: "surya-sen",
            name: "Surya Sen",
            category: "revolutionary",
            categoryLabel: "Revolutionary",
            dates: "1894 — 1934",
            born: "Chittagong",
            region: "Bengal",
            knownFor: "Chittagong Armoury Raid",
            image: "images/fighters/surya-sen.jpg",

            biography:
                "Surya Sen, popularly known as Masterda, was a revolutionary leader who organised the Chittagong Armoury Raid in 1930. He became a major figure of Bengal's revolutionary movement.",

            contributions: [
                "Organised the Chittagong Armoury Raid.",
                "Built revolutionary networks in Bengal.",
                "Inspired young people to participate in the independence struggle."
            ]
        },

        {
            id: "alluri-sitarama-raju",
            name: "Alluri Sitarama Raju",
            category: "tribal",
            categoryLabel: "Tribal Resistance Leader",
            dates: "1897 — 1924",
            born: "Andhra region",
            region: "Andhra Pradesh",
            knownFor: "Rampa Rebellion",
            image: "images/fighters/alluri-sitarama-raju.jpg",

            biography:
                "Alluri Sitarama Raju led a major tribal resistance movement in the Agency areas of present-day Andhra Pradesh. The Rampa Rebellion opposed colonial forest policies and other forms of British authority.",

            contributions: [
                "Led the Rampa Rebellion.",
                "Organised tribal resistance to colonial policies.",
                "Became an important regional symbol of resistance."
            ]
        },

        {
            id: "birsa-munda",
            name: "Birsa Munda",
            category: "tribal",
            categoryLabel: "Tribal Leader",
            dates: "1875 — 1900",
            born: "Ulihatu, Jharkhand",
            region: "Jharkhand",
            knownFor: "Munda Ulgulan",
            image: "images/fighters/birsa-munda.jpg",

            biography:
                "Birsa Munda was a tribal leader whose movement challenged colonial rule and exploitative land systems in the Chotanagpur region. His movement became known as the Ulgulan.",

            contributions: [
                "Led the Munda Ulgulan.",
                "Opposed exploitative colonial land arrangements.",
                "Mobilised tribal communities.",
                "Became a lasting symbol of tribal resistance."
            ]
        },

        {
            id: "rani-gaidinliu",
            name: "Rani Gaidinliu",
            category: "tribal",
            categoryLabel: "Tribal Freedom Fighter",
            dates: "1915 — 1993",
            born: "Tamenglong region",
            region: "Northeast India",
            knownFor: "Heraka movement",
            image: "images/fighters/rani-gaidinliu.jpg",

            biography:
                "Rani Gaidinliu was a Naga spiritual and political leader who resisted British rule in the Northeast. She was imprisoned by the British at a young age and later became an important figure in India's freedom history.",

            contributions: [
                "Participated in the Heraka movement.",
                "Resisted British authority in the Northeast.",
                "Inspired indigenous resistance.",
                "Became an important figure in India's freedom history."
            ]
        },

        {
            id: "matangini-hazra",
            name: "Matangini Hazra",
            category: "women",
            categoryLabel: "Freedom Activist",
            dates: "1870 — 1942",
            born: "Tamluk, Bengal",
            region: "Bengal",
            knownFor: "Quit India Movement",
            image: "images/fighters/matangini-hazra.jpg",

            biography:
                "Matangini Hazra was a participant in India's independence movement who became associated with the Quit India Movement. She is remembered for her participation in the movement in Bengal.",

            contributions: [
                "Participated in civil disobedience campaigns.",
                "Supported the Quit India Movement.",
                "Participated in nationalist demonstrations.",
                "Became an important symbol of women's participation."
            ]
        },

        {
            id: "aruna-asaf-ali",
            name: "Aruna Asaf Ali",
            category: "women",
            categoryLabel: "Freedom Activist",
            dates: "1909 — 1996",
            born: "Kalka, Punjab region",
            region: "Delhi",
            knownFor: "Quit India Movement",
            image: "images/fighters/aruna-asaf-ali.jpg",

            biography:
                "Aruna Asaf Ali was a prominent political activist who played an important role during the Quit India Movement. She became associated with underground resistance after the movement began.",

            contributions: [
                "Participated in the Quit India Movement.",
                "Worked through underground networks.",
                "Continued political activity during colonial repression.",
                "Became a prominent symbol of resistance."
            ]
        },

        {
            id: "usha-mehta",
            name: "Usha Mehta",
            category: "women",
            categoryLabel: "Young Freedom Activist",
            dates: "1920 — 2000",
            born: "Savli, Gujarat",
            region: "Gujarat / Bombay",
            knownFor: "Congress Radio",
            image: "images/fighters/usha-mehta.jpg",

            biography:
                "Usha Mehta was a young freedom activist who helped operate the underground Congress Radio during the Quit India Movement. The broadcasts helped circulate nationalist information when colonial authorities restricted communication.",

            contributions: [
                "Helped operate the underground Congress Radio.",
                "Supported communication during the Quit India Movement.",
                "Participated in the national movement at a young age.",
                "Became an example of youth participation in the struggle."
            ]
        },

        {
            id: "lakshmi-sahgal",
            name: "Lakshmi Sahgal",
            category: "women",
            categoryLabel: "INA Leader",
            dates: "1914 — 2012",
            born: "Madras",
            region: "India / Southeast Asia",
            knownFor: "Rani of Jhansi Regiment",
            image: "images/fighters/lakshmi-sahgal.jpg",

            biography:
                "Lakshmi Sahgal was a physician and nationalist who joined Subhas Chandra Bose's Indian National Army. She became commander of the Rani of Jhansi Regiment, a women's unit of the INA.",

            contributions: [
                "Joined the Indian National Army.",
                "Commanded the Rani of Jhansi Regiment.",
                "Promoted women's participation in the INA.",
                "Served as an important figure in the Azad Hind movement."
            ]
        },

        {
            id: "kanaklata-barua",
            name: "Kanaklata Barua",
            category: "young",
            categoryLabel: "Young Freedom Fighter",
            dates: "1924 — 1942",
            born: "Barangabari, Assam",
            region: "Assam",
            knownFor: "Quit India Movement",
            image: "images/fighters/kanaklata-barua.jpg",

            biography:
                "Kanaklata Barua was a young Assamese freedom activist who participated in the Quit India Movement. She became a symbol of youthful participation in India's struggle for independence.",

            contributions: [
                "Participated in the Quit India Movement.",
                "Inspired youth participation in Assam.",
                "Became a prominent symbol of courage."
            ]
        },

        {
            id: "senapati-bapat",
            name: "Senapati Bapat",
            category: "revolutionary",
            categoryLabel: "Nationalist",
            dates: "1880 — 1967",
            born: "Parner, Maharashtra",
            region: "Maharashtra",
            knownFor: "Nationalist and social movements",
            image: "images/fighters/senapati-bapat.jpg",

            biography:
                "Pandurang Mahadev Bapat, popularly known as Senapati Bapat, was a nationalist and social activist associated with revolutionary politics and later mass movements in Maharashtra.",

            contributions: [
                "Participated in nationalist political activities.",
                "Led public campaigns in Maharashtra.",
                "Supported social and political causes.",
                "Became widely known as Senapati Bapat."
            ]
        },

        {
            id: "chapekar-brothers",
            name: "Chapekar Brothers",
            category: "revolutionary",
            categoryLabel: "Revolutionaries",
            dates: "Late 19th century",
            born: "Pune region",
            region: "Maharashtra",
            knownFor: "Early revolutionary resistance",
            image: "images/fighters/chapekar-brothers.jpg",

            biography:
                "Damodar, Balkrishna and Vasudeo Chapekar were among the early revolutionary figures in colonial India. Their activities reflected growing opposition to British rule in the late nineteenth century.",

            contributions: [
                "Participated in early revolutionary resistance.",
                "Became associated with anti-colonial politics in Pune.",
                "Influenced later revolutionary movements."
            ]
        }
    ];


    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const loader = document.getElementById("ffLoader");
    const fightersGrid = document.getElementById("fightersGrid");
    const searchInput = document.getElementById("fighterSearch");
    const filterButtons = document.querySelectorAll(".filter-button");
    const noResults = document.getElementById("noResults");

    const modal = document.getElementById("fighterModal");
    const modalClose = document.getElementById("modalClose");
    const modalBackdrop = document.querySelector(".modal-backdrop");

    const modalPortrait = document.getElementById("modalPortrait");
    const modalCategory = document.getElementById("modalCategory");
    const modalName = document.getElementById("modalName");
    const modalDates = document.getElementById("modalDates");
    const modalBorn = document.getElementById("modalBorn");
    const modalRegion = document.getElementById("modalRegion");
    const modalKnownFor = document.getElementById("modalKnownFor");
    const modalBiography = document.getElementById("modalBiography");
    const modalContributions = document.getElementById("modalContributions");

    const randomHero = document.getElementById("randomHero");
    const exploreHeroes = document.getElementById("exploreHeroes");

    const mobileMenu = document.getElementById("mobileMenu");
    const nav = document.querySelector(".ff-nav");


    /* =====================================================
       STATE
    ===================================================== */

    let currentFilter = "all";
    let searchTerm = "";

    const fallbackImage =
        "images/fighters/default-fighter.jpg";


    /* =====================================================
       IMAGE TEST / FALLBACK
    ===================================================== */

    function setBackgroundImageWithFallback(element, image) {

        if (!element) return;

        const testImage = new Image();

        testImage.onload = () => {
            element.style.backgroundImage =
                `url("${image}")`;
        };

        testImage.onerror = () => {
            element.style.backgroundImage =
                `url("${fallbackImage}")`;
        };

        testImage.src = image;
    }


    /* =====================================================
       CREATE FIGHTER CARD
    ===================================================== */

    function createFighterCard(fighter, index) {

        const card = document.createElement("article");

        card.className = "fighter-card";

        card.dataset.category = fighter.category;
        card.dataset.id = fighter.id;

        card.style.animationDelay =
            `${Math.min(index * 0.05, 0.5)}s`;

        card.innerHTML = `

            <div
                class="fighter-image"
                role="img"
                aria-label="${fighter.name}"
            ></div>

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

        setBackgroundImageWithFallback(
            image,
            fighter.image
        );

        card.addEventListener("click", () => {
            openModal(fighter);
        });

        addTiltEffect(card);

        return card;
    }


    /* =====================================================
       RENDER FIGHTERS
    ===================================================== */

    function renderFighters() {

        if (!fightersGrid) return;

        const filtered = fighters.filter(fighter => {

            const matchesCategory =
                currentFilter === "all" ||
                fighter.category === currentFilter;

            const searchableText = `
                ${fighter.name}
                ${fighter.region}
                ${fighter.knownFor}
                ${fighter.categoryLabel}
                ${fighter.biography}
                ${fighter.born}
                ${fighter.dates}
            `.toLowerCase();

            const matchesSearch =
                searchableText.includes(
                    searchTerm.toLowerCase()
                );

            return matchesCategory && matchesSearch;
        });

        fightersGrid.innerHTML = "";

        if (filtered.length === 0) {

            if (noResults) {
                noResults.hidden = false;
            }

            return;
        }

        if (noResults) {
            noResults.hidden = true;
        }

        filtered.forEach((fighter, index) => {

            fightersGrid.appendChild(
                createFighterCard(
                    fighter,
                    index
                )
            );

        });
    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value.trim();

                renderFighters();
            }
        );
    }


    /* =====================================================
       FILTERS
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                currentFilter =
                    button.dataset.filter;

                renderFighters();

            }
        );

    });


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    function openModal(fighter) {

        if (!modal) return;

        setBackgroundImageWithFallback(
            modalPortrait,
            fighter.image
        );

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
                .map(item => `<li>${item}</li>`)
                .join("");

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeModal
        );
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener(
            "click",
            closeModal
        );
    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("active")
            ) {

                closeModal();

            }

        }
    );


    /* =====================================================
       RANDOM HERO
    ===================================================== */

    if (randomHero) {

        randomHero.addEventListener(
            "click",
            () => {

                const randomIndex =
                    Math.floor(
                        Math.random() *
                        fighters.length
                    );

                openModal(
                    fighters[randomIndex]
                );
            }
        );
    }


    /* =====================================================
       EXPLORE HEROES
    ===================================================== */

    if (exploreHeroes) {

        exploreHeroes.addEventListener(
            "click",
            () => {

                const explorer =
                    document.getElementById("heroes");

                if (explorer) {

                    explorer.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }
        );
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (mobileMenu) {

        mobileMenu.addEventListener(
            "click",
            () => {

                if (!nav) return;

                nav.classList.toggle("open");

                mobileMenu.textContent =
                    nav.classList.contains("open")
                        ? "×"
                        : "☰";
            }
        );
    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK
    ===================================================== */

    document
        .querySelectorAll(".ff-nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav?.classList.remove("open");

                    if (mobileMenu) {
                        mobileMenu.textContent = "☰";
                    }

                }
            );

        });


    /* =====================================================
       3D CARD TILT
    ===================================================== */

    function addTiltEffect(card) {

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
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    (x - centerX) / 22;

                const rotateX =
                    (centerY - y) / 22;

                card.style.transform = `
                    translateY(-10px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.015)
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
       TIMELINE OBSERVER
    ===================================================== */

    const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );

    if ("IntersectionObserver" in window) {

        const timelineObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            timelineObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.2
                }
            );

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".stat-card, .section-heading, .explorer-heading, .featured-content"
        );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
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

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero-background"
        );

    let ticking = false;

    window.addEventListener(
        "scroll",
        () => {

            if (ticking) return;

            window.requestAnimationFrame(
                () => {

                    if (
                        hero &&
                        window.scrollY <
                        window.innerHeight
                    ) {

                        const offset =
                            window.scrollY * 0.18;

                        hero.style.transform =
                            `scale(1.04)
                             translateY(${offset}px)`;
                    }

                    ticking = false;
                }
            );

            ticking = true;
        },
        {
            passive: true
        }
    );


    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    loader?.classList.add(
                        "hidden"
                    );

                },
                700
            );
        }
    );


    /* =====================================================
       INITIAL RENDER
    ===================================================== */

    renderFighters();


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(`
🇮🇳 INDIAN GLORY
Freedom Fighters Archive

${fighters.length} historical entries loaded.

✓ Search
✓ Filters
✓ Fighter Cards
✓ Image Fallback
✓ 3D Cards
✓ Historical Modal
✓ Random Hero
✓ Timeline
✓ Mobile Navigation
✓ Animations
    `);

});
