import { useEffect, useState } from "react";
import { client } from "/src/sanityClient";
import { urlFor } from "/src/imageBuilder";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const revealItems = document.querySelectorAll(
      ".events-page .scroll-reveal"
    );

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
  }, [events.length]);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "event"] | order(date desc) {
          title,
          date,
          image,
          description,
          location,
          isUpcoming
        }
      `)
      .then((data) => setEvents(data))
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

const upcomingEvents = events
  .filter((event) => event.isUpcoming)
  .sort((a, b) => new Date(a.date) - new Date(b.date));
const generalEvents = events;

  return (
    <div className="events-page">
      <section className="upcoming-events-section scroll-reveal">
        <div className="event-title-wrap reveal-child px-10">
          <h2>Upcoming Events</h2>
        </div>

        <div className="timeline-wrapper">
          {upcomingEvents.map((event, index) => (
            <article
              className={`timeline-event scroll-reveal ${
                index % 2 !== 0 ? "reverse-event" : ""
              }`}
              key={index}
              style={{ "--reveal-delay": `${index * 110}ms` }}
            >
              <div className="timeline-left">
                <span className="timeline-tag">
                  Upcoming Event
                </span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>

              <div className="timeline-center">
                <div className="timeline-line" />
              </div>

              <div className="timeline-right">
                <div className="timeline-meta">
                  <span>Date</span>
                  <strong>{event.date}</strong>
                </div>

                <div className="timeline-meta">
                  <span>Venue</span>
                  <strong>{event.location || "VIT Vellore"}</strong>
                </div>
              </div>

            </article>
          ))}
        </div>
      </section>

      <section className="general-events-section scroll-reveal">
        <div className="event-title-wrap reveal-child px-10">
          <h2>All Events</h2>
        </div>

        <div className="sanity-events-grid px-10">
          {generalEvents.map((event, index) => (
            <article
              className="sanity-event-card hover-lift scroll-reveal"
              key={index}
              style={{ "--reveal-delay": `${(index % 4) * 90}ms` }}
            >
              {event.image && (
                <img
                  src={urlFor(event.image).width(520).height(320).url()}
                  alt={event.title}
                  className="sanity-event-image"
                />
              )}

              <div className="sanity-event-body">
                <span className="event-date">
                  {event.eventDate}
                </span>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
