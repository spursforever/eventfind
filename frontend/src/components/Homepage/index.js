import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { displayAllEvents } from "../../store/event"
import './Homepage.css'
import Footer from "../Footer"
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
        <>

        
        <h1>All Popular Events</h1>
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
        <Footer />
        </>
    )
}

export default AllEvents;