import React from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeSingleEvent } from "../../store/event";
import "./deleteevent.css"

const DeleteEventForm = ({onClose, eventId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const deleteEvent = (e) => {
        e.preventDefault();
        dispatch(removeSingleEvent(eventId))
        history.push("/")
    };
    return (
        <>
        <h3 className="delete-warning">Are you sure you want to delete this event?</h3>
        <button
        className="delete-event"
        type="submit"
        onClick={deleteEvent}
        >Yes</button>
        <button
        className="cancel-delete"
        type="submit"
        onClick={onClose}
        >Cancel</button>
        </>
    )
}

export default DeleteEventForm