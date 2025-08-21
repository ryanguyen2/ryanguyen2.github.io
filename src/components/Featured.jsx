import React from "react";
import { MEDIA } from "../data/media.js";

export default function Featured() {
  return (
    <section id="media" className="media">
      <div className="media-inner">
        <h2 className="section-title">FEATURED</h2>
        <p className="highlight">learn more about me through the internet!</p>

        <ul className="media-list">
          {MEDIA.map(item => (
            <li key={item.id} className="media-item">
              {}
              <div className="media-thumb-frame">
                <img
                  className="media-thumb"
                  src={item.image}
                  alt={`${item.title} cover`}
                />
              </div>

              {}
              <div className="media-body">
                <h3 className="media-title">{item.title}</h3>

                <div className="media-meta">
                  <img
                    className="media-icon"
                    src="/icons/calendar.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  <span className="media-date">{item.date}</span>
                </div>

                <p className="media-summary">{item.summary}</p>

                {}
                <div className="media-links">
                  {item.links
                    ? item.links.map((l, i) => (
                        <div key={i} className="media-link-row">
                          <img
                            className="media-icon"
                            src="/icons/link.svg"
                            alt=""
                            aria-hidden="true"
                          />
                          <a
                            className="media-link"
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {l.label}
                          </a>
                        </div>
                      ))
                    : (
                      <div className="media-link-row">
                        <img
                          className="media-icon"
                          src="/icons/link.svg"
                          alt=""
                          aria-hidden="true"
                        />
                        <a
                          className="media-link"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          READ ARTICLE
                        </a>
                      </div>
                    )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
