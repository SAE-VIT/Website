import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { client } from '/src/sanityClient'
import { urlFor } from '/src/imageBuilder'
import saeTeam from "/src/assets/sae-team-2.jpeg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);

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
          <div className="footer-socials">
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
            <h2>Our Journal</h2>
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
                    Read <span>→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section scroll-reveal">
        <div className="section-title-wrap reveal-child">
          <h2>Our Teams</h2>

          <p>
            Our student teams bring together curious minds across engineering,
            design, operations, and communications to turn ambitious ideas
            into real automotive projects.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-card reveal-child" style={{ "--reveal-delay": "90ms" }}>
            <h3>Technical</h3>
            <p>Designing, analysing, and building automotive systems.</p>
          </div>

          <div className="about-card reveal-child" style={{ "--reveal-delay": "180ms" }}>
            <h3>Operations</h3>
            <p>Making every event, collaboration, and initiative happen.</p>
          </div>

          <div className="about-card reveal-child" style={{ "--reveal-delay": "270ms" }}>
            <h3>Media & Outreach</h3>
            <p>Sharing our work and connecting the community to SAE-VIT.</p>
          </div>
        </div>

        <div className="center-action reveal-child">
          <Link to="/about" className="secondary-button">
            Meet the Team
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
