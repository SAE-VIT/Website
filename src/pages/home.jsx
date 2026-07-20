import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { client } from '/src/sanityClient'
import { urlFor } from '/src/imageBuilder'
import saeTeam from "/src/assets/sae-team-2.jpeg";
import albatrossLogo from "/src/assets/Team logos/albatross.jpg";
import asenaLogo from "/src/assets/Team logos/asena.png";
import celerityLogo from "/src/assets/Team logos/celerity.jpg";
import falconsLogo from "/src/assets/Team logos/falcons.jpg";
import jaabazLogo from "/src/assets/Team logos/jaabaz.jpg";
import kshatriyaLogo from "/src/assets/Team logos/kshatriya.jpg";
import kshatriyaElectricLogo from "/src/assets/Team logos/kshatriya electric.jpg";
import ojasLogo from "/src/assets/Team logos/ojas.jpg";
import pravegaLogo from "/src/assets/Team logos/pravega.jpg";
import revMechanicsLogo from "/src/assets/Team logos/rev mechanics.jpg";
import rotorLogo from "/src/assets/Team logos/rotor.jpg";
import uttejitLogo from "/src/assets/Team logos/uttejit.jpg";
import vimaanasLogo from "/src/assets/Team logos/vimaanas.jpg";
import sponsor1 from "/src/assets/sponsors/1.png";
import sponsor2 from "/src/assets/sponsors/2.png";
import sponsor3 from "/src/assets/sponsors/3.png";
import sponsor4 from "/src/assets/sponsors/4.png";
import sponsor5 from "/src/assets/sponsors/5.png";
import sponsor6 from "/src/assets/sponsors/6.png";
import sponsor7 from "/src/assets/sponsors/7.png";
import sponsor8 from "/src/assets/sponsors/8.png";
import sponsor9 from "/src/assets/sponsors/9.png";
import sponsor10 from "/src/assets/sponsors/10.png";
import sponsor11 from "/src/assets/sponsors/11.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const pastSponsors = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6,
    sponsor7, sponsor8, sponsor9, sponsor10, sponsor11,
  ].map((image, index) => ({ id: index + 1, image }));
  const teamCards = [
    {
      id: "assailing-falcons",
      image: falconsLogo,
      alt: "Team Assailing Falcons logo",
    },
    {
      id: "ojas-racing",
      image: ojasLogo,
      alt: "Team Ojas Racing logo",
    },
    {
      id: "pravega-racing",
      image: pravegaLogo,
      alt: "Team Pravega Racing logo",
    },
    {
      id: "kshatriya",
      image: kshatriyaLogo,
      alt: "Team Kshatriya logo",
    },
    {
      id: "kshatriya-electric",
      image: kshatriyaElectricLogo,
      alt: "Team Kshatriya Electric logo",
    },
    {
      id: "rotor-fpv",
      image: rotorLogo,
      alt: "Team Rotor FPV logo",
    },
    {
      id: "jaabaz",
      image: jaabazLogo,
      alt: "Team Jaabaz logo",
    },
    {
      id: "uttejit",
      image: uttejitLogo,
      alt: "Team Uttejit logo",
    },
    {
      id: "albatross",
      image: albatrossLogo,
      alt: "Team Albatross logo",
    },
    {
      id: "asena-racing",
      image: asenaLogo,
      alt: "Team Asena Racing logo",
    },
    {
      id: "rev-mechanics",
      image: revMechanicsLogo,
      alt: "Team Rev Mechanics logo",
    },
    {
      id: "celerity",
      image: celerityLogo,
      alt: "Team Celerity logo",
    },
    {
      id: "vimaanas",
      image: vimaanasLogo,
      alt: "Team Vimaanas logo",
    },
  ];

  const teamDataMap = Object.fromEntries(
    teamData.map((team) => [team.carouselId, team])
  );

  useEffect(() => {
    const revealItems = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -80px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    client.fetch(`
      *[_type == "event"] {
        title,
        "date": coalesce(date, eventDate),
        image,
        description,
        location,
        time,
        eventType
      }
    `)
    .then((data) => setEvents(data))
    .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  useEffect(() => {
    client.fetch(`
        *[_type == "post"] | order(date desc) {
          title,
          date,
          description,
          mediumLink
        }
      `)
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => console.error('SANITY ERROR:', err))
  }, []);

  useEffect(() => {
    client.fetch(`
      *[_type == "teamModal"]{
        carouselId,
        title,
        teamType,
        description,
        achievements
      }
    `)
    .then((data) => setTeamData(data))
    .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  useEffect(() => {
    if (!selectedTeam && !selectedEvent) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedTeam(null);
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedTeam, selectedEvent]);

  return (
    <div className="home-page light-page">
      <section id="home" className="car-hero" aria-labelledby="car-hero-title">
        <div className="hero-capsules" aria-label="Society focus areas">
          <span>300+ members</span>
          <span>5 Domains</span>
          <span>3x Elite Chapter</span>
        </div>
        <h1 id="car-hero-title">
          <span className="hero-title-word hero-title-word--inline">Society</span>{" "}
          <span className="hero-title-word hero-title-word--inline">of</span>{" "}
          <span className="hero-title-word">Automotive</span>{" "}
          <span className="hero-title-word">Engineers,</span>
          <span className="hero-title-location"> VIT Vellore</span>
        </h1>
        <p>
          <span>Driven by Innovation.</span>{" "}
          <span>Fueled by Success.</span>
        </p>
        <a className="scroll-to-reveal" href="#recent-events">
          <span>↓</span>
        </a>
      </section>

      <section id="about" className="hero-section what-we-do-section">
        <div className="hero-image">
          <img src={saeTeam} alt="SAE-VIT team" />
        </div>
        <div className="hero-content">
          <h2 className="pt-2">What We Do ?</h2>
          <p>
            We are a student-led technical community focused on innovation,
            collaboration, and continuous learning. Through workshops,
            hackathons, projects, and open-source contributions, we help
            students grow in domains like web development, AI/ML, cybersecurity,
            and competitive programming.
          </p>
          <p>
            Our mission is to create a strong tech culture where students can
            learn, build, network, and innovate together.
          </p>
          <div className="home-socials">
            <a href="https://instagram.com/sae_vit" target="_blank" rel="noopener noreferrer" aria-label="SAE-VIT on Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/society-of-automotive-engineers-vit-vellore-/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="SAE-VIT on LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/SAE-VIT" target="_blank" rel="noopener noreferrer" aria-label="SAE-VIT on GitHub"><FaGithub /></a>
          </div>
          <Link to="/about" className="secondary-button what-we-do-link">
            Learn More
          </Link>
        </div>
      </section>

      <section id="recent-events" className="events-section scroll-reveal">
        <div className="section-title-wrap section-heading-row reveal-child">
          <h2>Recent Events</h2>
          <Link to="/events" className="secondary-button section-more-link section-more-link--desktop">
            View More Events
          </Link>
        </div>

        <div className="sanity-events-grid">
          {events.slice(0, 4).map((event, index) => (
            <article
              className="sanity-event-card reveal-child"
              key={index}
              style={{ "--reveal-delay": `${index * 90}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${event.title}`}
              onClick={() => setSelectedEvent(event)}
              onKeyDown={(keyboardEvent) => {
                if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                  keyboardEvent.preventDefault();
                  setSelectedEvent(event);
                }
              }}
            >
              {event.image && (
                <img
                  src={urlFor(event.image).width(520).height(320).url()}
                  alt={event.title}
                  className="sanity-event-image"
                />
              )}

              <div className="sanity-event-body">
                {/* <span>{event.date}</span> */}
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>

        <Link to="/events" className="secondary-button section-more-link section-more-link--mobile">
          View More Events
        </Link>

      </section>

      <section id="blogs" className="blogs-sec scroll-reveal">
        <div className="home-blogs-layout">
          <div className="home-blogs-intro reveal-child">
            <h2>The SAE Journal</h2>
            <p>
              Our blogs turn the ideas, lessons, and stories behind SAE-VIT
              into useful reads for the wider community. We share what we
              build so more students can learn, get inspired, and keep moving
              automotive engineering forward. From technical explainers and
              project learnings to event recaps and member perspectives, each
              piece captures the curiosity and collaboration that shape our
              chapter. It is our space to document the journey, celebrate the
              people behind the work, and start conversations that continue
              beyond the workshop.
            </p>
            <div className="team-modal__heading">

            <Link to="/blogs" className="secondary-button section-more-link--desktop">
              View All Blogs
            </Link>
            </div>
          </div>

          <div className="home-blogs-stack" aria-label="Latest blogs">
            <h3 className="reveal-child">Latest Blogs</h3>
            {posts.slice(0, 5).map((post, index) => (
              <article
                className="home-blog-item reveal-child"
                key={index}
                style={{ "--reveal-delay": `${index * 80}ms` }}
              >
                <span className="home-blog-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span className="home-blog-date">{post.date}</span>
                  <h4>{post.title}</h4>
                </div>
                {post.mediumLink && (
                  <a href={post.mediumLink} target="_blank" rel="noopener noreferrer" aria-label={`Read ${post.title}`}>
                    Read More<span>→</span>
                  </a>
                )}
              </article>
            ))}
          </div>

          <Link to="/blogs" className="secondary-button section-more-link--mobile">
            View All Blogs
          </Link>
        </div>
      </section>

      <section id="teams" className="about-section scroll-reveal">
        <div className="section-title-wrap reveal-child">
          <h2>Engineering Teams</h2>
          {/* <p>
            Driven by collaboration, our student teams span engineering, design, operations, and communications, 
            turning ambitious ideas into impactful automotive projects.
          </p> */}
        </div>

        <div className="team-carousel reveal-child">
          <div className="team-carousel-track">
            {[0, 1].map((copyIndex) => (
              <div className="team-carousel-group" key={copyIndex} aria-hidden={copyIndex === 1}>
                {teamCards.map((team) => {
                  const teamInfo = teamDataMap[team.id];

                  return (
                    <article
                      className="sanity-event-card team-card"
                      key={`${copyIndex}-${team.id}`}
                      role="button"
                      tabIndex={copyIndex === 0 ? 0 : -1}
                      aria-label={`View details for ${teamInfo?.title || team.id}`}
                      onClick={() =>
                        setSelectedTeam({
                          ...team,
                          ...teamInfo,
                        })
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedTeam({
                            ...team,
                            ...teamInfo,
                          });
                        }
                      }}
                    >
                      <img
                        className="sanity-event-image"
                        src={team.image}
                        alt={copyIndex === 1 ? "" : team.alt}
                      />

                      <div className="sanity-event-body">
                        <h2>{teamInfo?.title || "Loading..."}</h2>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="sponsors-section scroll-reveal" aria-labelledby="sponsors-title">
        <div className="section-title-wrap reveal-child">
          <h2 id="sponsors-title">Past Sponsors</h2>
        </div>

        <div className="sponsors-featured-grid">
          {pastSponsors.slice(0, 3).map((sponsor, index) => (
            <article className="sponsor-logo sponsor-logo--featured reveal-child" key={sponsor.id} style={{ "--reveal-delay": `${index * 80}ms` }}>
              <img src={sponsor.image} alt="Past sponsor logo" />
            </article>
          ))}
        </div>

        <div className="sponsors-grid">
          {pastSponsors.slice(3).map((sponsor, index) => (
            <article className="sponsor-logo reveal-child" key={sponsor.id} style={{ "--reveal-delay": `${(index + 3) * 55}ms` }}>
              <img src={sponsor.image} alt="Past sponsor logo" />
            </article>
          ))}
        </div>
      </section>

      {selectedTeam && (
        <div className="team-modal-backdrop" role="presentation" onMouseDown={() => setSelectedTeam(null)}>
          <section
            className="team-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="team-modal__close"
              type="button"
              onClick={() => setSelectedTeam(null)}
              aria-label="Close team details"
            >
              ×
            </button>

            <img className="team-modal__logo" src={selectedTeam.image} alt="" />

            <div className="team-modal__heading justify-center flex flex-col">
              <h2 id="team-modal-title">{selectedTeam.title}</h2>
              <p className="team-modal__type w-50 justify-center">
                {selectedTeam.teamType || "Engineering Team"}
              </p>
            </div>

            <div className="team-modal__content">
              <div className="team-modal__section">
                <h3>Achievements</h3>
                {selectedTeam.achievements?.length ? (
                  <ul>
                    {selectedTeam.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="team-modal__empty">
                    Achievements and team milestones will be added here.
                  </p>
                )}
              </div>  

              <div className="team-modal__section">
                <h3>Description</h3>
                {selectedTeam.description?.length ? (
                  <p className="team-modal__description">
                    {selectedTeam.description}
                  </p>
                ) : (
                  <p className="team-modal__empty">
                    No description available.
                  </p>
                )}
              </div>

            </div>
          </section>
        </div>
      )}

      {selectedEvent && (
        <div
          className="team-modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedEvent(null)}
        >
          <section
            className="team-modal event-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="team-modal__close"
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
            >
              ×
            </button>

            {selectedEvent.image && (
              <img
                className="team-modal__logo event-modal__image"
                src={urlFor(selectedEvent.image).width(760).height(520).url()}
                alt=""
              />
            )}

            <div className="team-modal__heading">
              <h2 id="event-modal-title">{selectedEvent.title}</h2>
              {selectedEvent.eventType && (
                <p className="team-modal__type">{selectedEvent.eventType}</p>
              )}
            </div>

            <div className="team-modal__content">
              <div className="team-modal__section">
                <dl className="event-modal__details">
                  <h3>Event Details: </h3>
                  {selectedEvent.date && (
                    <div className="event-modal__detail">
                      <dt>Date: </dt>
                      <dd>{selectedEvent.date}</dd>
                    </div>
                  )}
                  {selectedEvent.time && (
                    <div className="event-modal__detail">
                      <dt>Time: </dt>
                      <dd>{selectedEvent.time}</dd>
                    </div>
                  )}
                  {selectedEvent.location && (
                    <div className="event-modal__detail">
                      <dt>Venue: </dt>
                      <dd>{selectedEvent.location}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="team-modal__section">
                <h3>Description</h3>
                <p className="team-modal__description">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
