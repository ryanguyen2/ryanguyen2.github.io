import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx";
import { PROJECTS } from "./data/projects.js";
import Featured from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import "./styles.css";

//theme switch component
function ThemeSwitch({ className = "" }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={`theme-switch ${className}`}>
      <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 0l1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42zM12 4V1h-0v3zm0 19v-3h0v3zm8-9h3v0h-3zm-19 0h3v0H1zm14.24 6.16l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM4.84 17.24l-1.8 1.79 1.41 1.41 1.79-1.8-1.4-1.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
      </svg>

      <button
        type="button"
        className={`theme-track ${isDark ? "is-dark" : "is-light"}`}
        role="switch"
        aria-checked={isDark}
        aria-label={`Toggle ${isDark ? "light" : "dark"} mode`}
        onClick={() => setIsDark((d) => !d)}
      >
        <span className="theme-thumb" />
      </button>

      <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </div>
  );
}


export default function App() {
  return (
    <main>
      <div className="theme-fixed">
        <ThemeSwitch />
      </div>

      <Hero />
      <About />
      <Projects />
      <Reveal><Featured /></Reveal>
      <Footer />
    </main>
  );
}
