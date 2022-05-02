import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { displayAllEvents } from "../../store/event"
const Events = () => {
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

        <h1>All</h1>
        <div>
        {allEvents.length && allEvents.map((event) => (
            <Link key={`${event?.id}`}
            to={`/events/${event?.id}`}>
            <div>
            <div>
                <img
                    height={250}
                    alt={event?.name}
                    src={
                      event?.imageUrl
                        ? event?.imageUrl
                        : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
                    }
                  />
                  </div>
                <div>{event?.name}</div>
                </div>
            </Link>
        ))}
        </div>
        </main>
    )
}

export default Events;
