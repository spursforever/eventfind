import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displaySingleEvent } from "../../store/event";
import "./SingleEvent.css"
import UpdateModal from "../UpdateEvent/UpdateEvent";

const SingleEvent = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const eventId = +id;

    const event = useSelector((state) => state.event[id]);
    const user_Id = useSelector((state) => state.session.user?.id)

    useEffect(() => {
        dispatch(displaySingleEvent(id));
    }, [dispatch, id])
    if (!event) {
        return null;
    }

    return (
        <div>
            <img
                width={800}
                height={400}
                className="images"
                alt={event.name}
                src={event.imageUrl} />
            <div>
                <img />
                <div>
                    <h1>
                        <div>Event Name: {event.name}</div>
                    </h1>
                    <h2>
                        <div>About this event: {event.description}</div>
                    </h2>
                    <h3>
                        <div>Event Date: {event.date}</div>
                        <div>Event Location: {event.location}</div>
                    </h3>
                </div>
                <div>
                    {user_Id === event.userId && <UpdateModal />}
                    {user_Id === event.userId && (
                        <button>Delete</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleEvent;


