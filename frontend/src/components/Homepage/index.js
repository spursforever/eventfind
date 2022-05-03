import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { displayAllEvents } from "../../store/event"
import './Homepage.css'

const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([]);
    const dispatch = useDispatch();
    const eventDisplay = useSelector((status) => status.event)
    
    useEffect(() => {
        dispatch(displayAllEvents())
    }, [dispatch])

    useEffect(() => {
        if (eventDisplay) {
            setAllEvents(Object.values(eventDisplay));
        }
    }, [eventDisplay])
    
    return (
        <main>

        <button>Create Event</button>
        <h1>All</h1>
        <div className="events">
        {allEvents.length && allEvents.map((event) => (
            <Link key={`${event?.id}`}
            to={`/events/${event?.id}`}>
            <div className="event_design">
            <div className="images">
                <img
                    height={250}
                    alt={event?.name}
                    src={
                      event?.imageUrl
                        }
                  />
                  </div>
                <div className="event_name">{event?.name}</div>
                </div>
            </Link>
        ))}
        </div>
        </main>
    )
}

export default AllEvents;