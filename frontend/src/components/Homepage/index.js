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
        <img 
        id="splashpage"
       
        alt=""
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
            
        </img>
                <h1>All Popular Events</h1>
        <div className="events">
        {allEvents.length && allEvents.map((event) => (
            <Link key={`${event?.id}`}
            to={`/events/${event?.id}`}>
            <div className="event_design">
            <div className="images">
                <img
                    height={250}
                    width={380}
                    alt={event?.name}
                    src={event?.imageUrl}
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