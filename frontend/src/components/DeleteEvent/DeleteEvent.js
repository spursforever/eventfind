import {DeleteEventModal} from "../../context/Modal";
import DeleteEventForm from ".";
import React, {useState} from "react";


const ADeleteEventModal = ({eventId}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
        <button className="delete_event_container" onClick={()=> setShowModal(true)} style={{ cursor: 'pointer' }} >Delete Event</button>
        {showModal && (
        <DeleteEventModal onClose={() => setShowModal(false)}>
          <DeleteEventForm onClose={() => setShowModal(false)} eventId={eventId}/>
        </DeleteEventModal>
        )}
        </>
    )
}

export default ADeleteEventModal