

export const PROJECTS = [
  {
    id: "lestat",
    title: "🏀LeStat",
    thumb: "/projects/lestat-preview-2.png",
    summary: "search any NBA player and recieve their stats in a stylish UI",
    description:
      ["Given my love for basketball, it only makes sense that I work on a project related to it! LeStat is a responsive React web app that lets users search any active NBA player and instantly view their 2024-2025 season statistics, team jersey, and player details. Built with a modern, component-based architecture, the app integrates the NBA API via RapidAPI to fetch and process real-time data, including per-game averages and player bio information.", 
      "Designed with a strong emphasis on user experience, the app features smooth transitions, responsive layouts, and interactive elements such as dynamic jerseys (that change given player input), team logos, and country flags. Errors are handled aswell."],
      tags: ["React", "HTML", "CSS", "REST API"],
    images: ["/projects/lestat-preview-1.png", "/projects/lestat-preview-2.png", "/projects/lestat-preview-3.png", "/projects/lestat-preview-4.png"],
    links: {
      github: "https://github.com/ryanguyen2/lestat",
      demo: "https://ryanguyen2.github.io/lestat"
    }
  },
  {
    id: "brainbank",
    title: "🧠BrainBank",
    thumb: "/projects/brainbank-screenshot-1.jpg",
    summary: "Chrome extension: highlight text, select an AI preset, and save to a journal",
    description:
      ["BrainBank is a Chrome side-panel extension that transforms the way you engage with text online. Highlight any passage, pick from an AI preset like ELI5 (explain-like-im-5), Skeptic, Researcher, Tutor, or Interviewer, and instantly receive a useful response.  Entries are saved into a personal journal (to look back at) and the generated output is synced across Chrome via \`chrome.storage.sync\`. Users can edit their UI through the Theme Studio and change their username and profile avatar.",
        "The backend is powered by Node.js (Express) and integrates with the OpenAI API. The extension is deployed with Render for backend hosting and error handling (rate limits, invalid keys), while the frontend runs natively inside Chrome via Manifest V3 and the side_panel API"],
    tags: ["Chrome MV3", "React", "Express", "Node"],
    images: ["/projects/brainbank-screenshot-1.jpg", "/projects/brainbank-screenshot-2.jpg", "/projects/brainbank-screenshot-3.jpg", "/projects/brainbank-screenshot-4.jpg", "/projects/brainbank-screenshot-5.jpg"],
    links: {
      github: "https://github.com/ryanguyen2/brainbank",
      demo: "#"
    }
  },
  {
    id: "portfolio",
    title: "🗂️Portfolio",
    thumb: "/projects/portfolio-thumb.jpg",
    summary: "This website! As you can tell, my favourite colour is blue.",
    description:
      ["I wanted to create my own personal website to showcase my projects, highlight technical skills, and provide an easy way to get in touch. This experience allowed me to use my creativty to design and build a clean, simple, but effective medium to express myself.",
        "Built with React for a modular, component-driven architecture (Projects, Media, Navbar, Theme Switcher). Styled with CSS Grid & Flexbox, using custom classes for consistency across sections. Implements reusable components like modals, carousels, and link buttons for scalability."],
        tags: ["React", "CSS", "HTML", "Vite"],
    images: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg"],
    links: {
      github: "https://github.com/yourname/portfolio",
      demo: "https://yourname.github.io/portfolio"
    }
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    thumb: "#",
    summary: "#",
    description:
      "#",
    tags: ["React", "Node", "PostgreSQL", "Cloud Storage"],
    images: ["#", "#", "#"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: "spineguard",
    title: "🦴SpineGuard",
    thumb: "#",
    summary: "Best HealthHack @ DeltaHacks: attachable device to detect poor posture",
    description:
      "#",
    tags: ["Python", "Streamlit", "ESP32"],
    images: ["#", "#"],
    links: {
      github: "#",
      demo: "https://devpost.com/software/spine-guard"
    }
  },
  {
    id: "lumosense",
    title: "LumoSense",
    thumb: "#",
    summary: "#",
    description:
      "#",
    tags: ["React", "IoT", "WebSockets"],
    images: ["#", "#", "#"],
    links: {
      github: "#",
      demo: "#"
    }
  }
];
