import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displaySingleEvent, removeSingleEvent } from "../../store/event";
import "./SingleEvent.css"
import UpdateModal from "../UpdateEvent/UpdateEvent";
import { addOneTicket } from "../../store/ticket";


const SingleEvent = () => {
    const { id } = useParams();
    const eventId = +id;
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

    return (
        <>
        <div className="entirebackground">
            <img
            className="specialbackground"
            src={event?.imageUrl}
            ></img>
            <img
                
                className="images_for_event"
                alt={event?.name}
                src={event?.imageUrl} />           
                <div>
                <div className="event_name_container">
                    <h1 >{event?.name}</h1> 
                                        
                    </div>
                    <div className="about_this_event">
                        <h2>About this event: </h2> 
                        <p>{event?.description}</p>
                        </div>
                    <div className="event_date_container">
                        <h2>Date:</h2> 
                        <p>{event?.date}</p></div>
                     </div>
                     <div className="event_location_container">
                        <h2>Location:</h2> 
                            <p>{event?.location}</p>  
                            </div>                  
               
                <div>
                    {sessionUser === event.userId && <UpdateModal />}
                    {sessionUser === event.userId && (
                        <button className="delete_event_container" onClick={deleteEvent}>Delete Event</button>
                    )}                    
                </div>
                <div>{sessionUser  && (
                    <button 
                    className="register_event"
                    onClick={registerEvent}>Register Event</button>)}
                    </div>           
                
        
        </div>
        
        </>
    )
}

export default SingleEvent;


