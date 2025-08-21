import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      {/* CTA block */}
      <div className="footer-cta">
        <h2 className="footer-title">Let’s build something great.</h2>
        <p className="footer-subtitle">
          I love full-stack development, clean design, and great team culture.
        </p>

        <div className="footer-actions">
          <a
            className="footer-btn"
            href="mailto:rnguyen2102@gmail.com"
            aria-label="Email Ryan"
          >
            Get in touch
          </a>

        </div>
      </div>

      {/* divider */}
      <hr className="footer-divider" />

      {/* bottom row */}
      <div className="footer-bottom">
        <nav className="footer-social" aria-label="Social links">
          <a
            className="footer-icon"
            href="https://github.com/ryanguyen2"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <img src="/icons/github.svg" alt="" />
          </a>
          <a
            className="footer-icon"
            href="https://www.linkedin.com/in/ryanguyen2"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="" />
          </a>
          <a
            className="footer-icon"
            href="mailto:rnguyen2102@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <img src="/icons/email.svg" alt="" />
          </a>
        </nav>

        <small className="footer-copy">
          © {new Date().getFullYear()} Ryan Nguyen · Built with React
        </small>
      </div>
    </footer>
  );
}
