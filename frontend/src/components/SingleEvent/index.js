import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displaySingleEvent, removeSingleEvent } from "../../store/event";
import "./SingleEvent.css"
import UpdateModal from "../UpdateEvent/UpdateEvent";
import { addOneTicket } from "../../store/ticket";
import ADeleteEventModal from "../DeleteEvent/DeleteEvent";

const SingleEvent = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event[id]);
    const sessionUser = useSelector((state) => state.session.user?.id);
    const [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        dispatch(displaySingleEvent(id));
    }, [dispatch, id])
    if (!event) {
        return null;
    };

    // const deleteEvent = (e) => {
    //     e.preventDefault();
    //     dispatch(removeSingleEvent(id))
    //     history.push("/")
    // };

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
        <div className="last-sec">
            <img className='blur-background'
            src={event?.imageUrl}
            alt="" />
        
        <div className="event_page">
        <img className='real_image'
            src={event?.imageUrl}
            alt="" />
       
        <div className="event-information">
            <h1>
                <div className="eventName">{event.name}</div>
                <div className="eventDate">{(new Date(new Date((new Date(event.date))).getTime() + 86400000)).toString().slice(4, 16)}</div>                
                <div className="eventLocation">{event.location}</div>
            </h1>
        </div>
        <div className="designPlace">
        {sessionUser && (
                    <button
                        className="register_event"
                        onClick={registerEvent}
                        style={{ cursor: "pointer" }}>Register</button>)}
        </div>
        <div className="event-description">
            <h1>About this Event:</h1>
            {event.description}
            </div>
            </div>  
            <div>
                    {sessionUser === event.userId && <UpdateModal />}
                    {sessionUser === event.userId && <ADeleteEventModal eventId={id} />}
                </div>
               </div> 
        </>
    )
}

export default SingleEvent;


