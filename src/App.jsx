import React, { useEffect, useState } from "react";
import "./styles.css";

/*hero section */
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="avatar-ring">
          <img src="/icons/profile.jpeg" alt="Portrait of Ryan Nguyen" className="avatar" />
        </div>
        <div className="hero-text">
          <h1 className="title title--brand">RYAN NGUYEN</h1>
          <p className="highlight" role="note">
            Computer Engineering @ University of Waterloo
          </p>
          <div className="icons">
            <a className="iconBtn" href="https://github.com/ryanguyen2" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
            <a className="iconBtn" href="https://www.linkedin.com/in/ryanguyen2" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a className="iconBtn" href="mailto:rnguyen2102@gmail.com" aria-label="Email Ryan">
              <img src="/icons/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
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

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <h2 className="section-title section-title--right">
            ABOUT ME
          </h2>

          <p >
            Hi, I’m Ryan! Currently based in Waterloo, ON, I’m a full-stack developer with a passion for creative design and clean user experiences. I love the balance of creativity and logic in software development - designing sleek, intuitive interfaces while also engineering the systems that bring them to life!
          </p>
          <p >
           Outside of lecture hours, you'll find me playing basketball and volleyball, binge-watching shows, trying new recipies, and making Spotify playlists. Feel free to message me and I'd love to chat!
          </p>
        </div>

        <div className="about-media">
          <img
            src="/icons/placeholder-about.jpg"
            alt="Ryan with friends"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}

