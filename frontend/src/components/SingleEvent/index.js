import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displaySingleEvent, removeSingleEvent } from "../../store/event";
import "./SingleEvent.css"
import UpdateModal from "../UpdateEvent/UpdateEvent";
import { addOneTicket } from "../../store/ticket";


const SingleEvent = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event[id]);
    const sessionUser = useSelector((state) => state.session.user?.id);
    console.log('------------------->', event)
    useEffect(() => {
        dispatch(displaySingleEvent(id));
    }, [dispatch, id])
    if (!event) {
        return null;
    };

    const deleteEvent = (e) => {
        e.preventDefault();
        dispatch(removeSingleEvent(id))
        history.push("/")
    };

    const registerEvent = (e) => {
        e.preventDefault();
        const payload = {
            eventId: event.id,
            userId: sessionUser
        }
        dispatch(addOneTicket(payload))
        history.push(`/tickets/users/${sessionUser}`)
    };

    const date = new Date(event.date).toString().split("")[0] + ", " +
    new Date(event.date).toString().split(" ")[1] + " " +
    new Date(event.date).toString().split(" ")[2] + " " +
    new Date(event.date).toString().split(" ")[3]

    return (
        <>
        <div>
            <img className='blur-background'
            src={event?.imageUrl}
            alt="" />
        
        <div className="event_page">
        <img className='real_image'
            src={event?.imageUrl}
            alt="" />
       
        <div className="event-information">
            <h1>
                <div className="eventDate">{(new Date(new Date((new Date(event.date))).getTime() + 86400000)).toString().slice(4, 16)}</div>
                <div className="eventName">{event.name}</div>
            </h1>
        </div>
        <div className="designPlace">
        {sessionUser && (
                    <button
                        className="register_event"
                        onClick={registerEvent}>Register</button>)}
        </div>
        <div className="event-description">
            <h1>About this Event</h1>
            {event.description}
            </div>
            </div>  
            <div>
                    {sessionUser === event.userId && <UpdateModal />}
                    {sessionUser === event.userId && (
                        <button className="delete_event_container" onClick={deleteEvent} style={{ cursor: 'pointer' }}>Delete Event</button>
                    )}
                </div>
               </div> 
        </>
    )
}

export default SingleEvent;


