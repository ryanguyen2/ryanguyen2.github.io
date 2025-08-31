

export const PROJECTS = [
    {
        id: "lestat",
        title: "🏀LeStat",
        thumb: "/projects/lestat-preview-1.png",
        summary: "search any NBA player and recieve their stats in a stylish UI",
        description:
            ["Given my love for basketball, it only makes sense that I work on a project related to it! LeStat is a responsive React web app that lets users search any active NBA player and instantly view their 2024-2025 season statistics, team jersey, and player details. Built with a modern, component-based architecture, the app integrates the NBA API via RapidAPI to fetch and process real-time data, including per-game averages and player bio information.",
                "Designed with a strong emphasis on user experience, the app features smooth transitions, responsive layouts, and interactive elements such as dynamic jerseys (that change given player input), team logos, and country flags. Errors are handled aswell."],
        tags: ["React", "HTML", "CSS", "REST API"],
        images: ["/projects/lestat-preview-1.png", "/projects/lestat-preview-2.png", "/projects/lestat-preview-3.png", "/projects/lestat-preview-4.png"],

        links: [
            { label: "Github", icon: "/icons/github.svg", url: "https://github.com/ryanguyen2/lestat" },
            { label: "Try it Yourself", icon: "/icons/link.svg", url: "https://ryanguyen2.github.io/lestat" }
        ]


    },
    {
        id: "brainbank",
        title: "🧠BrainBank",
        thumb: "/projects/brainbank-screenshot-1.jpg",
        summary: "Chrome extension: highlight text, select an AI preset, and save to a journal",
        description:
            ["BrainBank is a Chrome side-panel extension that transforms the way you engage with text online. Highlight any passage, pick from an AI preset like ELI5 (explain-like-im-5), Skeptic, Researcher, Tutor, or Interviewer, and instantly receive a useful response.  Entries are saved into a personal journal (to look back at) and the generated output is synced across Chrome via \`chrome.storage.sync\`. Users can edit their UI through the Theme Studio and change their username and profile avatar.",
                "The backend is powered by Node.js (Express) and integrates with the OpenAI API. The extension is deployed with Render for backend hosting and error handling (rate limits, invalid keys), while the frontend runs natively inside Chrome via Manifest V3 and the side_panel API"],
        tags: ["Chrome MV3", "JavaScript", "Express", "Node"],
        images: ["/projects/brainbank-screenshot-1.jpg", "/projects/brainbank-screenshot-2.jpg", "/projects/brainbank-screenshot-3.jpg", "/projects/brainbank-screenshot-4.jpg", "/projects/brainbank-screenshot-5.jpg"],
        links: [
            { label: "Github", icon: "/icons/github.svg", url: "https://github.com/ryanguyen2/brainbank" },
            { label: "Demo", icon: "/icons/link.svg", url: "https://youtu.be/yKCmcgpAQ0U" }
        ]

    },
    {
        id: "portfolio",
        title: "🗂️Portfolio",
        thumb: "/projects/website1.png",
        summary: "This website! As you can tell, my favourite colour is blue...",
        description:
            ["I wanted to create my own personal website to showcase my projects, highlight technical skills, and provide an easy way to get in touch. This experience allowed me to use my creativty to design and build a clean, simple, but effective medium to express myself.",
                "Built with React for a modular, component-driven architecture (Projects, Media, Navbar, Theme Switcher). Styled with CSS Grid & Flexbox, using custom classes for consistency across sections. Implements reusable components like modals, carousels, and link buttons for scalability."],
        tags: ["React", "CSS", "HTML", "Vite"],
        images: ["/projects/website1.png"],
        links: [
            { label: "Github", icon: "/icons/github.svg", url: "https://github.com/ryanguyen2/portfolio" },
            { label: "Try it Yourself", icon: "/icons/link.svg", url: "#" }
        ]
    },
    {
        id: "recipe-app",
        title: "🍜Simmer",
        thumb: "/projects/s1.png",
        summary: "An Instagram-inspired social media platform for home-cooks",
        description:
            ["Note: This project is in it's first version, only as a front-end demo. The back-end is currently in the works :)", "Simmer is a social cooking web app inspired by Instagram where users share recipes as posts (with ingredients, steps, tags, and multiple images) and quick 24-hour stories. It features a recipe feed, profiles, discover, suggested recipes, likes, saves, and a scrollable comments section. Built entirely with React (Vite) and styled with custom CSS, the app simulates backend functionality using localStorage for posts, users, and stories. Users can upload images, create posts and stories, and switch/reset demo accounts."],
        tags: ["MERN", "HTML", "CSS", "Vite"],
        images: ["/projects/s1.png", "/projects/s2.png", "/projects/s3.png", "/projects/s4.png", "/projects/s5.png", "/projects/s6.png"],
        links: [
            { label: "Github", icon: "/icons/github.svg", url: "https://github.com/ryanguyen2/simmer" },
            { label: "Demo", icon: "/icons/link.svg", url: "https://www.youtube.com/watch?v=gnRiBb1_8aI" }
        ]
    },
    {
        id: "spineguard",
        title: "🦴SpineGuard",
        thumb: "/projects/spineguard1.png",
        summary: "Best HealthHack @ DeltaHacks: attachable device to detect poor posture",
        description:
            ["Contributors: Emilee Chen, Aashi Chaubey, Matias Rivas, Ryan Nguyen", "A wearable device + web app that helps users build better posture habits. The device attaches to the back of clothing and uses an ESP32 with an MPU-6050 gyroscope/accelerometer to measure neck/back angle. Data is streamed in real time to a Streamlit web app, where users can track: posture score, time spent in bad posture, # of posture corrections, average sitting time, live graph.",
                "The app also includes a recommendations section with GIF-based exercises tailored to the user’s posture issues, complete with instructions and benefits."],
        tags: ["Python", "Streamlit", "ESP32"],
        images: ["/projects/spineguard1.png", "/projects/spineguard2.jpg"],
        links: [
            { label: "Github", icon: "/icons/github.svg", url: "https://github.com/hiatus770/deltahacks25" },
            { label: "DevPost", icon: "/icons/link.svg", url: "https://devpost.com/software/spine-guard" }
        ]

    },
    {
        id: "lumosense",
        title: "💡LumoSense",
        thumb: "/projects/lumosense1.jpg",
        summary: "Visual cue notification system for hard-of-hearing individuals using 2 STM32 boards",
        description:
            ["Contributors: Samir Sarwar, Ryan Nguyen", "For my first-year ECE198 course, I was tasked to identify a 'communication-based' problem and create a system that uses two STM32 boards to address it. So, my partner and I created a system designed for hearing-impaired students in dorms. It acts as a door-bell system that provides real-time visual LED alerts when motion is detected outside a door. The system consists of two units: a Sensor Unit with a PIR motion sensor that detects activity and transmits data via UART, and an Alert Unit that instantly triggers an LED visual cue to notify the user. This technical component itself is simple, but it served as a great introductory project to working with STM32 boards"
            ],
        tags: ["C", "UART Communication", "STM32"],
        images: ["/projects/lumosense1.jpg", "/projects/lumosense2.png", "/projects/lumosense3.png", "/projects/lumosense4.png", "/projects/lumosense5.png"],
        links: [
            { label: "Github", icon: "/icons/github.svg", url: "https://github.com/ryanguyen2/lumosense" },
            { label: "Design Document", icon: "/icons/link.svg", url: "https://github.com/ryanguyen2/lumosense/blob/main/Design%20Document.docx%20(1).pdf" }
        ]
    }
];

