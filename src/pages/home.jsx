import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { client } from '/src/sanityClient'
import { urlFor } from '/src/imageBuilder'
import OrbitImages from '/src/components/OrbitImages'

const images = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=2",
];

function Home() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([])

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
      <section className="home-hero fade-up">
        <div className="hero-copy-block">
          <h1>
            Empowering <span>Innovation</span> Through Engineering Culture
          </h1>
          <p>
            Join a student community focused on automotive design, mobility
            innovation, events, workshops, and chapter leadership at VIT.
          </p>
          <div className="hero-actions">
            <Link to="/events" className="primary-button">
              Register for our upcoming events
            </Link>
            <Link to="/about" className="secondary-button">
              Learn more
            </Link>
          </div>
          <div className="hero-meta-row">
            <div>
              <span className="meta-title">Active Since</span>
              <strong>2014</strong>
            </div>
            <div>
              <span className="meta-title">Active Members</span>
              <strong>150+</strong>
            </div>
            <div>
              <span className="meta-title">Domains</span>
              <strong>5</strong>
            </div>
          </div>
        </div>

        <div className="hero-photo-card fade-up delay-1">
          <OrbitImages
            className="home-orbit"
            images={images}
            shape="ellipse"
            radiusX={640}
            radiusY={170}
            rotation={-8}
            duration={30}
            itemSize={112}
            responsive={true}
            radius={280}
            direction="normal"
            fill
            showPath
            pathColor="rgba(170, 162, 154, 0.38)"
            paused={false}
          />
        </div>
      </section>

      <section className="events-section scroll-reveal">
        <div className="section-title-wrap reveal-child">
          <h2>Recent Events</h2>
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

        <div className="center-action reveal-child">
          <Link to="/events" className="secondary-button">
            View More Events
          </Link>
        </div>
      </section>

      <section className="about-section scroll-reveal">
        <div className="section-title-wrap reveal-child">
          <h2>About Us</h2>

          <p>
            We are a student-driven community passionate about innovation,
            engineering culture, mobility, and hands-on learning. Through
            workshops, technical events, collaborative projects, and industry
            exposure, we create opportunities for students to learn, build,
            and grow together.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-card reveal-child" style={{ "--reveal-delay": "90ms" }}>
            <h3>Workshops</h3>
            <p>Hands-on sessions focused on practical technical learning.</p>
          </div>

          <div className="about-card reveal-child" style={{ "--reveal-delay": "180ms" }}>
            <h3>Community</h3>
            <p>A collaborative environment for students across domains.</p>
          </div>

          <div className="about-card reveal-child" style={{ "--reveal-delay": "270ms" }}>
            <h3>Innovation</h3>
            <p>Encouraging creativity through projects and competitions.</p>
          </div>
        </div>

        <div className="center-action reveal-child">
          <Link to="/about" className="secondary-button">
            Learn More About Us
          </Link>
        </div>
      </section>

      <section className="blogs-sec scroll-reveal">
        <div className="section-title-wrap reveal-child">
          <h2>Recent Blogs</h2>
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

        <div className="center-action reveal-child">
          <Link to="/blogs" className="secondary-button">
            View More Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
