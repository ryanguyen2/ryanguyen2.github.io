import React, { useEffect, useState, useRef } from "react";
import { PROJECTS } from "./data/projects.js";
import Featured from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import "./styles.css";


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


function Hero() {
  return (
    <section className="hero" id="home">
      <Reveal className="hero-inner reveal-up" delay={80} instant>
        <div className="avatar-ring">
          <img src="/icons/profile.jpeg" alt="Portrait of Ryan Nguyen" className="avatar" />
        </div>
        <div className="hero-text">
          <h1 className="title title--brand">RYAN NGUYEN</h1>
          <p className="highlight" role="note">
            Computer Engineering @ University of Waterloo
          </p>
          <div className="icons">
            <a className="icon-btn" href="https://github.com/ryanguyen2" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/ryanguyen2" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/icons/linkedin (1).svg" alt="LinkedIn" />
            </a>
            <a className="icon-btn" href="mailto:rnguyen2102@gmail.com" aria-label="Email Ryan">
              <img src="/icons/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="scroll-cue">
        <svg className="scroll-cue-icon" viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
          <polyline
            points="6,9 12,15 18,9"
            fill="none"
            stroke="#2ABCDD"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}


function About() {
  const images = [

    "/about/about2.jpg",
    "/about/about3.jpg",
    "/about/about4.jpg",
    "/about/about5.png",
    "/about/about6.jpg",
    "/about/about7.png",
    "/about/about8.jpg",
    "/about/about9.jpg"
  ];

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <Reveal className="about-text reveal-up" delay={60}>
          <h2 className="section-title section-title--right">ABOUT ME</h2>
          <p>
            Hi, I’m Ryan! Currently based in Waterloo, ON, I’m a full-stack developer with a passion
            for creative design and clean user experiences. I love the balance of creativity and logic
            in software development—designing sleek, intuitive interfaces while also engineering the systems
            that bring them to life!
          </p>
          <p>
            Outside of lecture hours, you'll find me playing basketball and volleyball, binge-watching shows,
            trying new recipes, and making Spotify playlists. Feel free to message me and I'd love to chat!
          </p>
        </Reveal>

        <Reveal className="about-media reveal-left" delay={120}>
          <div className="about-img-frame">
            <img
              className="about-img"
              src={images[idx]}
              srcSet={`${images[idx]} 2x`}
              alt={`About photo ${idx + 1} of ${images.length}`}
            />
            <button
              type="button"
              className="about-nav-btn about-nav-btn--prev"
              aria-label="Previous photo"
              onClick={prev}
            >
              ‹
            </button>
            <button
              type="button"
              className="about-nav-btn about-nav-btn--next"
              aria-label="Next photo"
              onClick={next}
            >
              ›
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Projects() {
  const [openId, setOpenId] = useState(null);
  const lastFocus = useRef(null);

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <Reveal className="reveal-up" delay={60}>
          <h2 className="section-title">PROJECTS</h2>
          <p className="highlight">click on any project to learn more about it!</p>
        </Reveal>

        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.id}
              as="button"
              className="project-card polaroid reveal-up"
              delay={i * 80}
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpenId(p.id);
              }}
              aria-haspopup="dialog"
              aria-controls={`project-${p.id}`}
            >
              <h3 className="project-title">{p.title}</h3>

              <figure className="polaroid-photo">
                <img
                  className="polaroid-img"
                  src={p.thumb2x || p.thumb}
                  srcSet={p.thumb2x ? `${p.thumb} 1x, ${p.thumb2x} 2x` : undefined}
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 348px"
                  alt={`${p.title} thumbnail`}
                  loading="eager"
                  decoding="auto"
                  fetchpriority="high"
                />
              </figure>

              <p className="project-summary">{p.summary}</p>

              <div className="tag-list">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {openId && (
        <ProjectModal
          project={PROJECTS.find((x) => x.id === openId)}
          onClose={() => {
            setOpenId(null);
            lastFocus.current?.focus();
          }}
        />
      )}
    </section>
  );
}


function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const contentRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", onKey);


    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";


    const panel = dialogRef.current;
    const onScroll = () => {
      if (!panel) return;
      setShowCue(panel.scrollTop < 16);
    };
    panel?.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
      panel?.removeEventListener("scroll", onScroll);
    };
  }, [onClose, project.images.length]);

  const scrollToContent = () => {
    const panel = dialogRef.current;
    if (panel && contentRef.current) {
      panel.scrollTo({
        top: contentRef.current.offsetTop - 8,
        behavior: "smooth",
      });
    }
  };

  return (
    <div role="dialog" aria-modal="true" className="modal" aria-labelledby={`project-${project.id}-title`}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-panel" ref={dialogRef}>
        <div className="modal-body">
          <div className="carousel">
            <div className="carousel-frame">
              <img
                className="carousel-img"
                src={project.images[idx]}
                srcSet={
                  project.images2x?.[idx]
                    ? `${project.images[idx]} 1x, ${project.images2x[idx]} 2x`
                    : undefined
                }
                alt={`${project.title} screenshot ${idx + 1} of ${project.images.length}`}
                loading="eager"
                decoding="async"
              />
            </div>
            {project.images.length > 1 && (
              <>
                <button
                  className="carousel-arrow left"
                  aria-label="Previous"
                  onClick={() =>
                    setIdx((i) => (i - 1 + project.images.length) % project.images.length)
                  }
                >
                  ‹
                </button>
                <button
                  className="carousel-arrow right"
                  aria-label="Next"
                  onClick={() => setIdx((i) => (i + 1) % project.images.length)}
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="modal-content" ref={contentRef}>
            <h3 className="h3" id={`project-${project.id}-title`}>{project.title}</h3>

            <div className="project-description">
              {Array.isArray(project.description)
                ? project.description.map((para, i) => <p key={i}>{para}</p>)
                : <p>{project.description}</p>}
            </div>

            <div className="tag-list">
              {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>

            <div className="modal-links">
              {project.links?.map((link, i) => (
                <a
                  key={i}
                  className="link-btn"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link.icon} alt="" aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>


        {showCue && (
          <button
            type="button"
            className="modal-scroll-cue" 
            aria-label="Scroll for more details"
            onClick={scrollToContent}
          >
            <svg className="modal-scroll-cue-icon" viewBox="0 0 24 24" width="25" height="25" aria-hidden="true">
              <polyline
                points="6,9 12,15 18,9"
                fill="none"
                stroke="#2ABCDD"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <button className="modal-back" onClick={onClose}>Back</button>
      </div>
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
