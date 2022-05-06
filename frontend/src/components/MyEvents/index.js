import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTickets } from "../../store/ticket";
import { useHistory, Link } from "react-router-dom";

const MyEvents = () => {
    const dispatch = useDispatch();
   
    const user = useSelector(state => state.session.user);
    const tickets = useSelector(state => state.ticket.list)

    useEffect(() => {
        dispatch(getAllTickets(user?.id))
    }, [dispatch]);

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
                <h1>My Events</h1>
                {tickets.map((registration) => {
                    return (
                        
                        <div key={registration.id}>
                            <img
                            alt={registration.name}
                            src={`${registration.Event.imageUrl}`}
                            ></img>
                            <div>#{registration.id}</div>
                        
                        <div>{registration.Event.name}</div>
                        <div>{new Date(registration.Event.date).toDateString()}</div>
                       </div>
                
                    )
                })}
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