// src/components/Projects.jsx
import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { PROJECTS } from "../data/projects.js";

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
                                    fetchPriority="high"
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

        const originalBody = document.body.style.overflow;
        const originalHtml = document.documentElement.style.overflow;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        const panel = dialogRef.current;
        const onScroll = () => setShowCue(panel?.scrollTop < 16);
        panel?.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = originalBody;
            document.documentElement.style.overflow = originalHtml;
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

export default Projects;
