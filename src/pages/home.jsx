import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { client } from '/src/sanityClient'
import { urlFor } from '/src/imageBuilder'

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
        *[_type == "post"] {
          title,
          description,
          image,
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
      </section>

      <section className="events-section scroll-reveal">
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

      <section className="blogs-sec scroll-reveal">
        <div className="section-title-wrap section-heading-row reveal-child">
          <h2>Recent Blogs</h2>
          <Link to="/blogs" className="secondary-button section-more-link">
            View More Blogs
          </Link>
        </div>

        <div className="sanity-events-grid">
          {posts.slice(0, 4).map((post, index) => (
            <article
              className="sanity-event-card reveal-child"
              key={index}
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              {post.image && (
                <img
                  src={urlFor(post.image).width(520).height(320).url()}
                  alt={post.title}
                  className="sanity-event-image"
                />
              )}

              <div className="sanity-event-body">
                <span>{post.postDate}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Home;
