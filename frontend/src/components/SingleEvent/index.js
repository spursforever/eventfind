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
//    const userEvent = user_Id?.id === event?.sessionUser
    useEffect(() => {
        dispatch(displaySingleEvent(id));
    }, [dispatch, id])
    if (!event) {
        return null;
    }
    const deleteEvent = (e) => {
        e.preventDefault();
        dispatch(removeSingleEvent(id))   
        history.push("/")
    }
    const registerEvent = (e) => {
        e.preventDefault();
        const payload = {
            eventId: event.id,
            userId: sessionUser
        }
        dispatch(addOneTicket(payload))
        history.push(`/tickets/users/${sessionUser}`)
    }
    return (
        <div>
            <img
                width={800}
                height={400}
                className="images"
                alt={event?.name}
                src={event?.imageUrl} />
            
                <img />
                <div>
                <div>
                    <h1>
                        <div>Event Name: {event?.name}</div>
                    </h1>
                    <div>
                        <h2>About this event: </h2> 
                        <p>{event?.description}</p>
                        </div>
                    
                    <h3>
                        <div>Event Date: {event?.date}</div>
                        <div>Event Location: {event?.location}</div>
                    </h3>
                </div>
                <div>
                    {sessionUser === event.userId && <UpdateModal />}
                    {sessionUser === event.userId && (
                        <button onClick={deleteEvent}>Delete</button>
                    )}
                    
                        
                    
                    
                </div>
                <div>{sessionUser  && (
                    <button onClick={registerEvent}>Register Event</button>)}
                    </div> 
                
                
                
            </div>
        </div>
    )
}

export default SingleEvent;


