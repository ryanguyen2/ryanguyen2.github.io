import React, { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function About() {
  const images = [
    "/about/about2.jpg",
    "/about/about3.jpg",
    "/about/about4.jpg",
    "/about/about5.png",
    "/about/about6.jpg",
    "/about/about7.png",
    "/about/about8.jpg",
    "/about/about9.jpg",
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
            Hi, I’m Ryan! Currently based in Waterloo, ON, I’m a full-stack
            developer with a passion for creative design and clean user
            experiences. I love the balance of creativity and logic in software
            development—designing sleek, intuitive interfaces while also
            engineering the systems that bring them to life!
          </p>
          <p>
            Outside of lecture hours, you'll find me playing basketball and
            volleyball, binge-watching shows, trying new recipes, and making
            Spotify playlists. Feel free to message me and I'd love to chat!
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
