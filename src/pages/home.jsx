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
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const teamCards = [
    {
      title: "Team Assailing Falcons",
      description: "Designing, analysing, and building automotive systems.",
      image: falconsLogo,
      alt: "Team Assailing Falcons logo",
    },
    {
      title: "Team Ojas Racing",
      description: "Making every event, collaboration, and initiative happen.",
      image: ojasLogo,
      alt: "Team Ojas Racing logo",
    },
    {
      title: "Team Pravega Racing",
      description: "Sharing our work and connecting the community to SAE-VIT.",
      image: pravegaLogo,
      alt: "Team Pravega Racing logo",
    },
    {
      title: "Team Kshatriya",
      description: "Making every event, collaboration, and initiative happen.",
      image: kshatriyaLogo,
      alt: "Team Kshatriya logo",
    },
    {
      title: "Team Kshatriya Electric",
      description: "Making every event, collaboration, and initiative happen.",
      image: kshatriyaElectricLogo,
      alt: "Team Kshatriya Electric logo",
    },
    {
      title: "Team Rotor FPV",
      description: "Making every event, collaboration, and initiative happen.",
      image: rotorLogo,
      alt: "Team Rotor FPV logo",
    },
    {
      title: "Team Jaabaz",
      description: "Making every event, collaboration, and initiative happen.",
      image: jaabazLogo,
      alt: "Team Jaabaz logo",
    },
    {
      title: "Team Uttejit",
      description: "Making every event, collaboration, and initiative happen.",
      image: uttejitLogo,
      alt: "Team Uttejit logo",
    },
    {
      title: "Team Albatross",
      description: "Making every event, collaboration, and initiative happen.",
      image: albatrossLogo,
      alt: "Team Albatross logo",
    },
    {
      title: "Team Asena Racing",
      description: "Making every event, collaboration, and initiative happen.",
      image: asenaLogo,
      alt: "Team Asena Racing logo",
    },
    {
      title: "Team Rev Mechanics",
      description: "Making every event, collaboration, and initiative happen.",
      image: revMechanicsLogo,
      alt: "Team Rev Mechanics logo",
    },
    {
      title: "Team Celerity",
      description: "Making every event, collaboration, and initiative happen.",
      image: celerityLogo,
      alt: "Team Celerity logo",
    },
    {
      title: "Team Vimaanas",
      description: "Making every event, collaboration, and initiative happen.",
      image: vimaanasLogo,
      alt: "Team Vimaanas logo",
    },
  ];

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
        eventDate,
        image,
        description
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

  return (
    <div className="home-page light-page">
      <section className="car-hero" aria-labelledby="car-hero-title">
        <div className="hero-capsules" aria-label="Society focus areas">
          <span>300+ members</span>
          <span>5 Domains</span>
          <span>2x Elite Chapter</span>
        </div>
        <h1 id="car-hero-title">
          Society of Automotive Engineers,
          <span> VIT Vellore</span>
        </h1>
        <p>Driven by Innovation. Fueled by Success</p>
        <a className="scroll-to-reveal" href="#recent-events">
          Scroll to reveal <span>↓</span>
        </a>
      </section>

      <section className="hero-section what-we-do-section scroll-reveal">
        <div className="hero-image reveal-child">
          <img src={saeTeam} alt="SAE-VIT team" />
        </div>
        <div className="hero-content reveal-child" style={{ "--reveal-delay": "120ms" }}>
          <h1>What We Do ?</h1>
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
          <Link to="/events" className="secondary-button section-more-link">
            View More Events
          </Link>
        </div>

        <div className="sanity-events-grid">
          {events.slice(0, 4).map((event, index) => (
            <article
              className="sanity-event-card hover-lift reveal-child"
              key={index}
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              {event.image && (
                <img
                  src={urlFor(event.image).width(520).height(320).url()}
                  alt={event.title}
                  className="sanity-event-image"
                />
              )}

              <div className="sanity-event-body">
                <span>{event.eventDate}</span>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section className="blogs-sec scroll-reveal">
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
            <Link to="/blogs" className="secondary-button">
              View All Blogs
            </Link>
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
        </div>
      </section>

      <section className="about-section scroll-reveal">
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
                {teamCards.map((team) => (
                  <article className="sanity-event-card" key={`${copyIndex}-${team.title}`}>
                    <img className="sanity-event-image" src={team.image} alt={copyIndex === 1 ? "" : team.alt} />
                    <div className="sanity-event-body">
                      <h2>{team.title}</h2>
                      <p>{team.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
