import React from "react";

const pillars = [
  "Design-build competitions and prototyping",
  "Technical workshops with practical outcomes",
  "Industry conversations and alumni access",
  "Collaborative leadership and visible campus culture",
];

function About() {
  return (
    <div className="subpage-layout fade-up">
      <section className="subpage-hero">
        <div className="section-heading split-heading">
          <div>
            <span className="section-label">About SAE VIT</span>
            <h1>A student chapter shaped around momentum, craftsmanship, and serious engineering curiosity.</h1>
          </div>
          <p>
            SAE VIT is a student-led community for people who want to build,
            test, present, and grow inside the future of mobility.
          </p>
        </div>
      </section>

      <section className="about-grid light-grid">
        <article className="about-card hover-lift fade-up delay-1">
          <span className="section-label">Mission</span>
          <h2>Help future engineers learn by doing.</h2>
          <p>
            We create environments where members can move beyond theory and work
            through the messier, more rewarding side of real product-building.
          </p>
        </article>
        <article className="about-card hover-lift fade-up delay-2">
          <span className="section-label">Pillars</span>
          <h2>The chapter runs on four strong lanes.</h2>
          <ul>
            {pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </article>
        <article className="about-card hover-lift fade-up delay-3">
          <span className="section-label">Membership</span>
          <h2>Open to students who want to contribute, not just spectate.</h2>
          <p>
            Whether you love vehicle systems, fabrication, media, operations, or
            storytelling, there is room to grow into meaningful responsibility.
          </p>
        </article>
      </section>

      <section className="subpage-panel fade-up delay-2">
        <span className="section-label">Chapter culture</span>
        <h2>We want the website to reflect the same ambition the club carries offline.</h2>
        <p>
          That means cleaner storytelling, stronger visuals, and a more modern
          experience that feels worthy of a college engineering chapter with real
          energy behind it.
        </p>
      </section>
    </div>
  );
}

export default About;
