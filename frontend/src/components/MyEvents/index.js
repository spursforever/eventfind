import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getAllTickets, deleteTicket } from "../../store/ticket";
import { useHistory, useParams } from "react-router-dom";
import "./MyEvents.css"

const MyEvents = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user.id);
    const tickets = useSelector(state => state.ticket.list)
    const [allTickets, setAllTickets] = useState([]);
    // console.log("starshipppppppppppppppppp", tickets)
    
    useEffect(() => {
        dispatch(getAllTickets(user))
    }, [dispatch, user]);

    useEffect(() => {
        if (tickets) {
            setAllTickets(Object.values(tickets))
        }
    }, [tickets])

    const cancelTicket = (e, ticketId) => {
        e.preventDefault();
        dispatch(deleteTicket(ticketId));
        dispatch(getAllTickets(user));
        history.push(`/tickets/users/${user}`)
    }
    
    let detail;

    if (!tickets) {
        detail = (
            <>
                <h1>My Events</h1>
                <div>
                    You have no events now because you haven't registered any events.
                </div>
            </>
        )
    }
    else {
        detail = (
            <>
            <div className="my_events">                
                <h1>My Events</h1>
                <div className="my_events_container">
                {allTickets.map((registration) => {
                //    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",allTickets)
                    return (
                        <div className="ticketlist" key={registration.id}>
                            <div className="event_names">
                                <h3>{registration?.Event.name}</h3>
                                
                            </div>
                            <div className="event_image">
                            <img
                                height={180}
                                width={400}
                                alt={registration.name}
                                src={`${registration?.Event.imageUrl}`}
                            >
                            </img>
                            </div>                            
                            <div className="cancel_registration_button">
                                <button className="cancel_registration" type="submit" onClick={(e) => cancelTicket(e, registration.id)}>Cancel Event</button> </div>
                        </div>
                    )
                } ) }
                
               
                
            </div>
            </div>
            </>
        )
    }

    return (
        <>

            {detail}
        </>
    )
}

export default MyEvents