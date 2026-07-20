import { useEffect, useState } from "react";
import { client } from "/src/sanityClient";
import { urlFor } from "/src/imageBuilder";

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
          "date": coalesce(date, eventDate),
          image,
          description,
          location,
          time,
          eventType,
          isUpcoming
        }
      `)
      .then((data) => setEvents(data))
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  useEffect(() => {
    if (!selectedEvent) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedEvent(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedEvent]);

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
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

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
                <h3>Event Details</h3>
                <dl className="event-modal__details">
                  {selectedEvent.date && (
                    <div className="event-modal__detail event-modal__detail--date">
                      <dt>Date</dt>
                      <dd>{selectedEvent.date}</dd>
                    </div>
                  )}
                  {selectedEvent.time && (
                    <div className="event-modal__detail">
                      <dt>Time</dt>
                      <dd>{selectedEvent.time}</dd>
                    </div>
                  )}
                  {selectedEvent.location && (
                    <div className="event-modal__detail event-modal__detail--venue">
                      <dt>Venue</dt>
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

export default Events;
