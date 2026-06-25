import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sports } from "../data/sports";
import "./Wnba.css";

export default function SportSelect() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const activeSport = sports[activeIndex];

  function goNext() {
    setActiveIndex((current) => (current + 1) % sports.length);
  }

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? sports.length - 1 : current - 1
    );
  }

  return (
    <main className="sport-select-shell">
      <div
        className="sport-select-bg"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.78), rgba(10,10,10,0.92)), url(${activeSport.image})`
        }}
      />

      <section className="sport-select-content">
        <p className="sport-select-eyebrow">KT Picks</p>
        <h1 className="sport-select-title">Choose Your Hub</h1>
        <p className="sport-select-subtitle">
          Choose your sport intelligence hub.
        </p>

        <div className="sport-carousel-wrap">
          <button type="button" className="sport-arrow" onClick={goPrevious}>
            ‹
          </button>

          <div className="sport-card-viewport">
            <div
              className="sport-card-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {sports.map((sport) => (
                <div key={sport.id} className="sport-card-slide">
                  <article
                    className="sport-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(sport.route)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") navigate(sport.route);
                    }}
                  >
                    <div
                      className="sport-card-image"
                      style={{ backgroundImage: `url(${sport.image})` }}
                    />

                    <div>
                      <h2 className="sport-card-title">{sport.name}</h2>
                      <p className="sport-card-text">{sport.subtitle}</p>
                    </div>

                    <button
                      type="button"
                      className="sport-enter-btn"
                      onClick={(event) => {
                        event.stopPropagation();
                        navigate(sport.route);
                      }}
                    >
                      Enter Dashboard
                    </button>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="sport-arrow" onClick={goNext}>
            ›
          </button>
        </div>
      </section>
    </main>
  );
}