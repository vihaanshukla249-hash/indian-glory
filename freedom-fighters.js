/* =========================================================
   INDIAN GLORY — FREEDOM FIGHTERS
   Premium Interactive Historical Archive
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       FREEDOM FIGHTER DATABASE
    ===================================================== */

    const fighters = [

        {
            id: "rani-lakshmibai",
            name: "Rani Lakshmibai",
            category: "women",
            categoryLabel: "Warrior Queen",
            dates: "1828 — 1858",
            born: "Varanasi, Uttar Pradesh",
            region: "Jhansi",
            knownFor: "Revolt of 1857",
            wikipedia: "Rani Lakshmibai",
            image: "images/fighters/rani-lakshmibai.jpg",

            biography:
                "Rani Lakshmibai, the queen of Jhansi, became one of the most enduring symbols of resistance during the uprising of 1857. After the British attempted to annex Jhansi, she became a central figure in the resistance. Her leadership, determination and military courage made her one of the most remembered figures of India's nineteenth-century history.",

            contributions: [
                "Led the defence of Jhansi during the uprising of 1857.",
                "Organised resistance forces and military preparations.",
                "Worked with other leaders of the 1857 uprising.",
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
            region: "Barrackpore",
            knownFor: "Events preceding the Revolt of 1857",
            wikipedia: "Mangal Pandey",
            image: "images/fighters/mangal-pandey.jpg",

            biography:
                "Mangal Pandey was a soldier in the Bengal Army whose actions at Barrackpore in March 1857 became closely associated with the events that preceded the wider uprising of 1857. His name later became a powerful symbol of resistance among Indians.",

            contributions: [
                "Served in the Bengal Army.",
                "Resisted policies affecting Indian soldiers.",
                "Became associated with the early events of the 1857 uprising.",
                "Became an important symbol of anti-colonial resistance."
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
            wikipedia: "Tatya Tope",
            image: "images/fighters/tatya-tope.jpg",

            biography:
                "Tatya Tope was one of the most prominent military leaders of the uprising of 1857. He continued resistance even after several major centres of the rebellion had been suppressed and became known for his mobile military campaigns.",

            contributions: [
                "Commanded forces during the uprising of 1857.",
                "Worked with Nana Sahib and Rani Lakshmibai.",
                "Continued resistance after major rebel centres fell.",
                "Used mobile military strategies against British forces."
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
            wikipedia: "Bahadur Shah II",
            image: "images/fighters/bahadur-shah-zafar.jpg",

            biography:
                "Bahadur Shah Zafar was the last Mughal emperor. During the uprising of 1857, rebels in Delhi recognised him as their symbolic leader. His association with the uprising represented a final moment of Mughal political authority in India.",

            contributions: [
                "Served as a symbolic figurehead during the uprising.",
                "Provided political legitimacy to rebel forces in Delhi.",
                "Became associated with the final phase of Mughal rule.",
                "Was exiled to Rangoon after the uprising."
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
            wikipedia: "Kunwar Singh",
            image: "images/fighters/kunwar-singh.jpg",

            biography:
                "Kunwar Singh was a zamindar and military leader from Bihar who played an important role in the uprising of 1857. Despite being in his seventies, he led resistance forces and became one of the most important rebel leaders in eastern India.",

            contributions: [
                "Led resistance forces in Bihar.",
                "Organised military campaigns against British forces.",
                "Maintained resistance despite his advanced age.",
                "Became a major regional symbol of the 1857 uprising."
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
            wikipedia: "Begum Hazrat Mahal",
            image: "images/fighters/begum-hazrat-mahal.jpg",

            biography:
                "Begum Hazrat Mahal played a leading role in the resistance in Awadh during the uprising of 1857. Following the annexation of Awadh, she helped organise resistance against British rule and became one of the most prominent women leaders of the uprising.",

            contributions: [
                "Helped organise resistance in Awadh.",
                "Opposed the annexation of Awadh.",
                "Provided political leadership during the uprising.",
                "Became an important symbol of women's resistance."
            ]
        },

        {
            id: "dadabhai-naoroji",
            name: "Dadabhai Naoroji",
            category: "leader",
            categoryLabel: "Nationalist Thinker",
            dates: "1825 — 1917",
            born: "Bombay",
            region: "Maharashtra",
            knownFor: "Drain of Wealth theory",
            wikipedia: "Dadabhai Naoroji",
            image: "images/fighters/dadabhai-naoroji.jpg",

            biography:
                "Dadabhai Naoroji was a pioneering Indian nationalist, scholar and political thinker. Through his economic analysis of British rule, he argued that India's wealth was being drained to Britain. His ideas helped strengthen the intellectual case for Indian self-government.",

            contributions: [
                "Helped establish the Indian National Congress.",
                "Developed the Drain of Wealth theory.",
                "Advocated Indian self-government.",
                "Became the first British Indian MP."
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
            wikipedia: "Bal Gangadhar Tilak",
            image: "images/fighters/bal-gangadhar-tilak.jpg",

            biography:
                "Bal Gangadhar Tilak was a nationalist leader, educator and journalist who helped transform Indian nationalism into a wider public movement. He strongly advocated self-rule and used newspapers and public festivals to encourage political awareness.",

            contributions: [
                "Popularised the demand for Swaraj.",
                "Used journalism to spread nationalist ideas.",
                "Helped build public political participation.",
                "Was one of the leaders of the Lal-Bal-Pal group."
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
            knownFor: "Constitutional reform",
            wikipedia: "Gopal Krishna Gokhale",
            image: "images/fighters/gopal-krishna-gokhale.jpg",

            biography:
                "Gopal Krishna Gokhale was a major political leader and social reformer who advocated constitutional methods, education and gradual political reform. He founded the Servants of India Society and influenced a younger generation of nationalists.",

            contributions: [
                "Founded the Servants of India Society.",
                "Advocated education and political reform.",
                "Worked within constitutional politics.",
                "Influenced Mahatma Gandhi."
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
            knownFor: "Anti-colonial movement",
            wikipedia: "Lala Lajpat Rai",
            image: "images/fighters/lala-lajpat-rai.jpg",

            biography:
                "Lala Lajpat Rai was a prominent nationalist leader, writer and social reformer. He was one of the famous Lal-Bal-Pal trio and played a major role in nationalist politics, education and public mobilisation.",

            contributions: [
                "Played a major role in nationalist politics.",
                "Supported education and social reform.",
                "Promoted Swadeshi and political awareness.",
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
            wikipedia: "Bipin Chandra Pal",
            image: "images/fighters/bipin-chandra-pal.jpg",

            biography:
                "Bipin Chandra Pal was a nationalist thinker, journalist and powerful public speaker. He became one of the leading advocates of Swadeshi following the partition of Bengal and formed the famous Lal-Bal-Pal trio.",

            contributions: [
                "Promoted Swadeshi.",
                "Supported national education.",
                "Worked as a journalist and political speaker.",
                "Helped build assertive nationalist politics."
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
            wikipedia: "Mahatma Gandhi",
            image: "images/fighters/mahatma-gandhi.jpg",

            biography:
                "Mahatma Gandhi became one of the central figures of India's independence movement. He promoted nonviolent resistance and mass participation through campaigns including Non-Cooperation, Civil Disobedience and Quit India.",

            contributions: [
                "Led major mass movements against colonial rule.",
                "Promoted nonviolent civil resistance.",
                "Led the Salt March.",
                "Mobilised millions of Indians."
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
            wikipedia: "Sarojini Naidu",
            image: "images/fighters/sarojini-naidu.jpg",

            biography:
                "Sarojini Naidu was a poet, political leader and prominent participant in India's national movement. Known as the Nightingale of India, she advocated women's participation in public life and nationalist politics.",

            contributions: [
                "Participated in major nationalist campaigns.",
                "Advocated women's political participation.",
                "Led civil disobedience activities.",
                "Became the first Indian woman president of the Indian National Congress."
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
            knownFor: "Purna Swaraj",
            wikipedia: "Jawaharlal Nehru",
            image: "images/fighters/jawaharlal-nehru.jpg",

            biography:
                "Jawaharlal Nehru was a leading figure in India's independence movement and a close associate of Mahatma Gandhi. He spent many years in prison and strongly advocated complete independence for India.",

            contributions: [
                "Participated in major national movements.",
                "Advocated Purna Swaraj.",
                "Served as president of the Indian National Congress.",
                "Spent years imprisoned during the freedom struggle."
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
            wikipedia: "Vallabhbhai Patel",
            image: "images/fighters/sardar-patel.jpg",

            biography:
                "Sardar Vallabhbhai Patel was an important nationalist leader and organiser. His leadership during Kheda and Bardoli established him as a major figure in the freedom movement.",

            contributions: [
                "Supported the Kheda Satyagraha.",
                "Led the Bardoli Satyagraha.",
                "Organised large political campaigns.",
                "Became one of the major leaders of the Congress."
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
            wikipedia: "Subhas Chandra Bose",
            image: "images/fighters/subhas-chandra-bose.jpg",

            biography:
                "Subhas Chandra Bose was a major nationalist leader who sought to achieve Indian independence through a more militant approach. During the Second World War, he led the Indian National Army and established the Provisional Government of Free India.",

            contributions: [
                "Led the Indian National Army.",
                "Formed the Provisional Government of Free India.",
                "Organised resistance against British rule.",
                "Inspired Indians with his call for independence."
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
            wikipedia: "Bhagat Singh",
            image: "images/fighters/bhagat-singh.jpg",

            biography:
                "Bhagat Singh was a revolutionary nationalist whose writings, political ideas and actions made him one of the most recognisable figures of India's independence movement. He became an enduring symbol of youthful courage and sacrifice.",

            contributions: [
                "Participated in revolutionary organisations.",
                "Wrote extensively about political ideas.",
                "Played a major role in the HSRA.",
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
            knownFor: "HSRA",
            wikipedia: "Chandra Shekhar Azad",
            image: "images/fighters/chandrashekhar-azad.jpg",

            biography:
                "Chandrashekhar Azad was a prominent revolutionary who became a leading figure of the Hindustan Socialist Republican Association. He helped organise revolutionary activities and worked alongside Bhagat Singh and other young revolutionaries.",

            contributions: [
                "Helped organise revolutionary networks.",
                "Worked with Bhagat Singh.",
                "Helped develop the HSRA.",
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
            wikipedia: "Ram Prasad Bismil",
            image: "images/fighters/ram-prasad-bismil.jpg",

            biography:
                "Ram Prasad Bismil was a revolutionary, poet and political activist. He was a leading figure of the Hindustan Republican Association and became associated with the Kakori train action.",

            contributions: [
                "Helped establish revolutionary organisations.",
                "Played a leading role in the Kakori action.",
                "Used poetry to inspire nationalist sentiment.",
                "Worked for Indian independence."
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
            wikipedia: "Ashfaqulla Khan",
            image: "images/fighters/ashfaqulla-khan.jpg",

            biography:
                "Ashfaqulla Khan was a revolutionary associated with the Hindustan Republican Association and the Kakori action. His friendship and political partnership with Ram Prasad Bismil became an example of cooperation across religious communities.",

            contributions: [
                "Participated in the Kakori action.",
                "Worked within the Hindustan Republican Association.",
                "Worked closely with Ram Prasad Bismil.",
                "Became a symbol of Hindu-Muslim unity."
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
            wikipedia: "Shivaram Rajguru",
            image: "images/fighters/rajguru.jpg",

            biography:
                "Shivaram Rajguru was a revolutionary associated with the Hindustan Socialist Republican Association. He worked alongside Bhagat Singh and Sukhdev and became one of the best-known young revolutionaries of the independence era.",

            contributions: [
                "Worked within the revolutionary movement.",
                "Collaborated with Bhagat Singh and Sukhdev.",
                "Participated in revolutionary activities.",
                "Inspired later generations."
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
            wikipedia: "Sukhdev Thapar",
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
            wikipedia: "Udham Singh",
            image: "images/fighters/udham-singh.jpg",

            biography:
                "Udham Singh was a revolutionary nationalist who became strongly associated with the memory of the Jallianwala Bagh massacre. He later carried his protest against colonial officials to Britain.",

            contributions: [
                "Kept the memory of Jallianwala Bagh alive.",
                "Became associated with revolutionary anti-colonial politics.",
                "Carried his political campaign to Britain.",
                "Became a prominent symbol of resistance in Punjab."
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
            wikipedia: "Surya Sen",
            image: "images/fighters/surya-sen.jpg",

            biography:
                "Surya Sen, popularly known as Masterda, was a revolutionary leader who organised the Chittagong Armoury Raid in 1930. He became one of the major figures of Bengal's revolutionary movement.",

            contributions: [
                "Organised the Chittagong Armoury Raid.",
                "Built revolutionary networks in Bengal.",
                "Inspired young people to join the movement.",
                "Led resistance against British authority."
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
            wikipedia: "Alluri Sitarama Raju",
            image: "images/fighters/alluri-sitarama-raju.jpg",

            biography:
                "Alluri Sitarama Raju led a major tribal resistance movement in the Agency areas of present-day Andhra Pradesh. The Rampa Rebellion opposed colonial forest policies and other forms of British authority.",

            contributions: [
                "Led the Rampa Rebellion.",
                "Organised tribal resistance.",
                "Opposed colonial forest policies.",
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
            wikipedia: "Birsa Munda",
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
            wikipedia: "Rani Gaidinliu",
            image: "images/fighters/rani-gaidinliu.jpg",

            biography:
                "Rani Gaidinliu was a Naga spiritual and political leader who resisted British rule in the Northeast. She was imprisoned by the British at a young age and later became an important figure in India's freedom history.",

            contributions: [
                "Participated in the Heraka movement.",
                "Resisted British authority in the Northeast.",
                "Was imprisoned by the colonial government.",
                "Became a symbol of indigenous resistance."
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
            wikipedia: "Matangini Hazra",
            image: "images/fighters/matangini-hazra.jpg",

            biography:
                "Matangini Hazra was a participant in India's independence movement who became associated with the Quit India Movement in Bengal. She is remembered for her courage and participation in nationalist campaigns.",

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
            born: "Kalka",
            region: "Delhi",
            knownFor: "Quit India Movement",
            wikipedia: "Aruna Asaf Ali",
            image: "images/fighters/aruna-asaf-ali.jpg",

            biography:
                "Aruna Asaf Ali was a prominent political activist who played an important role during the Quit India Movement. She became associated with underground resistance after the movement began.",

            contributions: [
                "Participated in the Quit India Movement.",
                "Worked through underground networks.",
                "Continued political activity despite repression.",
                "Became a prominent symbol of resistance."
            ]
        },

        {
            id: "usha-mehta",
            name: "Usha Mehta",
            category: "women",
            categoryLabel: "Freedom Activist",
            dates: "1920 — 2000",
            born: "Gandhi Nagar, Gujarat",
            region: "Bombay / Gujarat",
            knownFor: "Congress Radio",
            wikipedia: "Usha Mehta",
            image: "images/fighters/usha-mehta.jpg",

            biography:
                "Usha Mehta was a young freedom activist who helped operate the underground Congress Radio during the Quit India Movement. The broadcasts helped circulate nationalist information when colonial authorities restricted communication.",

            contributions: [
                "Helped operate the underground Congress Radio.",
                "Supported communication during the Quit India Movement.",
                "Participated in nationalist activities from a young age.",
                "Became an example of youth participation."
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
            wikipedia: "Lakshmi Sahgal",
            image: "images/fighters/lakshmi-sahgal.jpg",

            biography:
                "Lakshmi Sahgal was a physician and nationalist who joined Subhas Chandra Bose's Indian National Army. She became commander of the Rani of Jhansi Regiment, a women's military unit of the INA.",

            contributions: [
                "Joined the Indian National Army.",
                "Commanded the Rani of Jhansi Regiment.",
                "Expanded women's participation in the INA.",
                "Served as a military and medical leader."
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
            wikipedia: "Kanaklata Barua",
            image: "images/fighters/kanaklata-barua.jpg",

            biography:
                "Kanaklata Barua was a young Assamese freedom activist who participated in the Quit India Movement. Her participation made her a remembered symbol of youthful involvement in India's independence struggle.",

            contributions: [
                "Participated in the Quit India Movement.",
                "Mobilised young people in Assam.",
                "Participated in nationalist demonstrations.",
                "Became a symbol of youthful courage."
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
            knownFor: "Nationalist activism",
            wikipedia: "Senapati Bapat",
            image: "images/fighters/senapati-bapat.jpg",

            biography:
                "Pandurang Mahadev Bapat, popularly known as Senapati Bapat, was a nationalist and social activist associated with revolutionary politics and later mass movements.",

            contributions: [
                "Participated in nationalist political activities.",
                "Worked in revolutionary circles.",
                "Led public campaigns in Maharashtra.",
                "Became popularly known as Senapati Bapat."
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
            wikipedia: "Chapekar brothers",
            image: "images/fighters/chapekar-brothers.jpg",

            biography:
                "Damodar, Balkrishna and Vasudeo Chapekar were among the early revolutionary figures in colonial India. Their activities reflected growing opposition to British rule in the late nineteenth century and influenced later revolutionary politics.",

            contributions: [
                "Participated in early revolutionary resistance.",
                "Became associated with anti-colonial politics in Pune.",
                "Influenced later revolutionary movements.",
                "Represented an early phase of armed revolutionary nationalism."
            ]
        }
    ];


    /* =====================================================
       DOM
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


    /* =====================================================
       FALLBACK
    ===================================================== */

    const fallbackImage =
        "images/fighters/default-fighter.jpg";


    /* =====================================================
       IMAGE SYSTEM
       
       1. Try your local image.
       2. If it does not exist, use Wikipedia.
       3. If Wikipedia fails, use fallback.
    ===================================================== */

    function getWikipediaImage(title, callback) {

        const api =
            "https://en.wikipedia.org/w/api.php" +
            "?action=query" +
            "&format=json" +
            "&origin=*" +
            "&prop=pageimages" +
            "&piprop=thumbnail" +
            "&pithumbsize=900" +
            "&titles=" +
            encodeURIComponent(title);

        fetch(api)
            .then(response => response.json())
            .then(data => {

                const pages =
                    data.query?.pages || {};

                const page =
                    Object.values(pages)[0];

                if (
                    page &&
                    page.thumbnail &&
                    page.thumbnail.source
                ) {
                    callback(
                        page.thumbnail.source
                    );
                } else {
                    callback(fallbackImage);
                }

            })
            .catch(() => {
                callback(fallbackImage);
            });
    }


    function loadFighterImage(element, fighter) {

        const localImage =
            new Image();

        localImage.onload = () => {

            element.style.backgroundImage =
                `url("${fighter.image}")`;

        };

        localImage.onerror = () => {

            getWikipediaImage(
                fighter.wikipedia,
                imageUrl => {

                    element.style.backgroundImage =
                        `url("${imageUrl}")`;

                }
            );
        };

        localImage.src =
            fighter.image;
    }


    /* =====================================================
       CREATE CARD
    ===================================================== */

    function createFighterCard(fighter, index) {

        const card =
            document.createElement("article");

        card.className =
            "fighter-card";

        card.dataset.category =
            fighter.category;

        card.dataset.id =
            fighter.id;

        card.style.animationDelay =
            `${Math.min(index * 0.04, 0.5)}s`;


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


        /*
         * IMPORTANT:
         * Background images do not fire a normal
         * img.onerror event, so we use Image()
         * to verify the local file first.
         */

        loadFighterImage(
            image,
            fighter
        );


        card.addEventListener(
            "click",
            () => openModal(fighter)
        );


        addTiltEffect(card);


        return card;
    }


    /* =====================================================
       RENDER
    ===================================================== */

    function renderFighters() {

        if (!fightersGrid) {
            return;
        }


        const filtered =
            fighters.filter(fighter => {

                const categoryMatch =
                    currentFilter === "all" ||
                    fighter.category === currentFilter;


                const searchableText = `
                    ${fighter.name}
                    ${fighter.region}
                    ${fighter.knownFor}
                    ${fighter.categoryLabel}
                    ${fighter.biography}
                    ${fighter.contributions.join(" ")}
                `.toLowerCase();


                const searchMatch =
                    searchableText.includes(
                        searchTerm.toLowerCase()
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );
            });


        fightersGrid.innerHTML = "";


        if (!filtered.length) {

            if (noResults) {
                noResults.hidden = false;
            }

            return;
        }


        if (noResults) {
            noResults.hidden = true;
        }


        filtered.forEach(
            (fighter, index) => {

                fightersGrid.appendChild(
                    createFighterCard(
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

    searchInput?.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value.trim();

            renderFighters();

        }
    );


    /* =====================================================
       FILTERS
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn =>
                    btn.classList.remove("active")
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

        if (!modal) {
            return;
        }


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


        /*
         * Load modal image using the same
         * local → Wikipedia → fallback system.
         */

        modalPortrait.style.backgroundImage =
            `url("${fallbackImage}")`;


        const localImage =
            new Image();


        localImage.onload = () => {

            modalPortrait.style.backgroundImage =
                `url("${fighter.image}")`;

        };


        localImage.onerror = () => {

            getWikipediaImage(
                fighter.wikipedia,
                imageUrl => {

                    modalPortrait.style.backgroundImage =
                        `url("${imageUrl}")`;

                }
            );

        };


        localImage.src =
            fighter.image;


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

        if (!modal) {
            return;
        }


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
                modal?.classList.contains("active")
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


    /* =====================================================
       EXPLORE HEROES
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

            nav?.classList.toggle("open");

            mobileMenu.textContent =
                nav?.classList.contains("open")
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
                    (x - centerX) / 22;

                const rotateX =
                    (centerY - y) / 22;


                card.style.transform =
                    `
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
       TIMELINE ANIMATION
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

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    });

                },
                {
                    threshold: 0.2
                }
            );


        timelineItems.forEach(item =>
            timelineObserver.observe(item)
        );
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

                        if (
                            entry.isIntersecting
                        ) {

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


        revealElements.forEach(element =>
            revealObserver.observe(element)
        );
    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) {
                return;
            }


            window.requestAnimationFrame(
                () => {

                    if (
                        heroBackground &&
                        window.scrollY <
                        window.innerHeight
                    ) {

                        const offset =
                            window.scrollY * 0.18;


                        heroBackground.style.transform =
                            `
                            scale(1.04)
                            translateY(${offset}px)
                            `;
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

    console.log(
        `
🇮🇳 INDIAN GLORY
Freedom Fighters Archive

${fighters.length} historical entries loaded.

✓ Search
✓ Filters
✓ 3D Cards
✓ Historical Information
✓ Automatic Image Loading
✓ Wikipedia Image Fallback
✓ Modal Stories
✓ Timeline Animation
✓ Mobile Navigation
        `
    );

});
