import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { displayAllEvents, filteringEvent } from "../../store/event"
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

    const obtainCategoryId = (categoryId) => {
        if (categoryId === 0) {
            dispatch(displayAllEvents())
        } else {
            return (
                dispatch(filteringEvent(categoryId))
            )
        }
        window.scroll({
            top: 625,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <img
                className="splashpage"
                alt=""
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
            </img>
            <h1 className="event-title">Popular in <span className="the_world"> the World </span></h1>
            <div className="category_scroll">
                <button className='category_buttons' onClick={() => { obtainCategoryId(0) }} style={{ cursor: 'pointer' }}>All Events</button>
                <button className='category_buttons' onClick={() => { obtainCategoryId(1) }} style={{ cursor: 'pointer' }}>Food</button>
                <button className='category_buttons' onClick={() => { obtainCategoryId(2) }} style={{ cursor: 'pointer' }}>Business</button>
                <button id="films_and_media" className='category_buttons' onClick={() => { obtainCategoryId(3) }} style={{ cursor: 'pointer' }}>Movies</button>
                <button className='category_buttons' onClick={() => { obtainCategoryId(4) }} style={{ cursor: 'pointer' }}>Music</button>
                <button id="sports_and_fitness" className='category_buttons' onClick={() => { obtainCategoryId(5) }} style={{ cursor: 'pointer' }}>Sports</button>
                <button className='category_buttons' onClick={() => { obtainCategoryId(6) }} style={{ cursor: 'pointer' }}>Fashion</button>

            </div>
            <div className="events">
                {allEvents.length && allEvents.map((event) => (
                    <Link key={`${event?.id}`}
                        to={`/events/${event?.id}`}>
                        <div className="event_design">
                            <div className="images">
                                <img
                                    height={200}
                                    width={300}
                                    alt={event?.name}
                                    src={event?.imageUrl}
                                />
                            </div>
                            <div className="event_name">{event?.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default AllEvents;