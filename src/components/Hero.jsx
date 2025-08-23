import React from "react";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Reveal className="hero-inner reveal-up" delay={80} instant>
        <div className="avatar-ring">
          <img
            src="/icons/profile.jpeg"
            alt="Portrait of Ryan Nguyen"
            className="avatar"
          />
        </div>

        <div className="hero-text">
          <h1 className="title title--brand">RYAN NGUYEN</h1>
          <p className="highlight" role="note">
            Computer Engineering @ University of Waterloo
          </p>

          <div className="icons">
            <a
              className="icon-btn"
              href="https://github.com/ryanguyen2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src="/icons/github.svg" alt="GitHub" />
            </a>

            <a
              className="icon-btn"
              href="https://www.linkedin.com/in/ryanguyen2"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/icons/linkedin (1).svg" alt="LinkedIn" />
            </a>

            <a
              className="icon-btn"
              href="mailto:rnguyen2102@gmail.com"
              aria-label="Email Ryan"
            >
              <img src="/icons/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="scroll-cue">
        <svg
          className="scroll-cue-icon"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          aria-hidden="true"
        >
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
