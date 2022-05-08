import {Modal} from "../../context/Modal";
import UpdateEvent from "./index.js";
import React, {useState} from "react";

const UpdateModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <button className="edit_event_container" onClick={()=> setShowModal(true)}>Edit Event</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateEvent onClose={() => setShowModal(false)}/>
        </Modal>
        )}
        </>
    )
}

export default UpdateModal