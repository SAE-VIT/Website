import { useEffect, useState } from 'react'
import { client } from './sanityClient'
import { urlFor } from './imageBuilder'

function Events() {
  const [events, setEvents] = useState([])

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
    .catch((err) => console.error(err))
  }, [])

  return (
    <div className="sanity-events-grid">
      {events.map((event, index) => (
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
  )
}

export default Events