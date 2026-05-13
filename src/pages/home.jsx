import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { client } from '/src/sanityClient'
import { urlFor } from '/src/imageBuilder'
import OrbitImages from '/src/components/OrbitImages'

const committee = [
  { name: "Aarav Menon", role: "Chairperson" },
  { name: "Riya Sharma", role: "Vice Chair" },
  { name: "Aditya Rao", role: "Technical Lead" },
  { name: "Neha Iyer", role: "Operations Lead" },
  { name: "Karan Patel", role: "Media Lead" },
  { name: "Sana Thomas", role: "Outreach Lead" },
];

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
              Register for our next event
            </Link>
            <Link to="/about" className="secondary-button">
              Learn more
            </Link>
          </div>
          <div className="hero-meta-row">
            <div>
              <span className="meta-title">Location</span>
              <strong>VIT Vellore</strong>
            </div>
            <div>
              <span className="meta-title">Next event</span>
              <strong>May 10, 2026</strong>
            </div>
          </div>
        </div>

        <div className="hero-photo-card fade-up delay-1">
          {/* <div className="hero-image-surface">
            <div className="hero-badge top-badge">
              <strong>12+</strong>
              <span>Events</span>
            </div>
            <div className="hero-badge bottom-badge">
              <strong>4</strong>
              <span>Active wings</span>
            </div>
            <div className="floating-card floating-one" />
            <div className="floating-card floating-two" />
          </div> */}
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

      <section className="events-section fade-up delay-1">
        <div className="section-title-wrap">
          <h2>Recent Events</h2>
          <p>
            A quick look at the chapter calendar, recent events, and the kind
            of energy members can expect through the semester.
          </p>
        </div>

        <div className="sanity-events-grid">
          {events.slice(0, 4).map((event, index) => (
            <article className="sanity-event-card" key={index}>
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

        <div className="center-action">
          <Link to="/events" className="secondary-button">
            View More Events
          </Link>
        </div>
      </section>

      <section className="about-section fade-up">
        <div className="section-title-wrap">
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
          <div className="about-card">
            <h3>Workshops</h3>
            <p>Hands-on sessions focused on practical technical learning.</p>
          </div>

          <div className="about-card">
            <h3>Community</h3>
            <p>A collaborative environment for students across domains.</p>
          </div>

          <div className="about-card">
            <h3>Innovation</h3>
            <p>Encouraging creativity through projects and competitions.</p>
          </div>
        </div>

        <div className="center-action">
          <Link to="/about" className="secondary-button">
            Learn More About Us
          </Link>
        </div>
      </section>

      <section className="blogs-sec fade-up delay-1">
        <div className="section-title-wrap">
          <h2>Blogs</h2>
          <p>
            A quick look at the chapter calendar, recent events, and the kind
            of energy members can expect through the semester.
          </p>
        </div>

        <div className="sanity-events-grid">
          {posts.map((post, index) => (
            <div className="sanity-event-card" key={index}>
              {post.image && (
                  <img
                    src={urlFor(post.image).width(250).url()}
                    alt={post.title}
                    className="sanity-event-image"
                  />
              )}
    
              <div className="sanity-event-body">
                <span>{post.postDate}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center-action">
          <Link to="/blogs" className="secondary-button">
            View More Blogs
          </Link>
        </div>
      </section>

      {/* <section className="content-section centered-section fade-up delay-2">
        <div className="section-title-wrap">
          <h2>Club Committee</h2>
          <p>
            Meet the members helping run the chapter, coordinate events, and
            keep the club active across technical, creative, and outreach work.
          </p>
        </div>
        <div className="committee-grid">
          {committee.map((member) => (
            <article className="committee-card hover-lift" key={member.name}>
              <div className="committee-avatar">
                <span>{member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
              </div>
              <h3>{member.name}</h3>
              <p className="committee-role">{member.role}</p>
              <p>
                Supporting chapter operations, student engagement, and stronger
                club culture across the academic year.
              </p>
            </article>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Home;
