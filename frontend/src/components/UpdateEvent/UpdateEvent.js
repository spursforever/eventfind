import {Modal} from "../../context/Modal";
import UpdateEvent from "./index.js";
import React, {useState} from "react";

const UpdateModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <button onClick={()=> setShowModal(true)}>Edit</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateEvent onClose={() => setShowModal(false)}/>
        </Modal>
        )}
        </>
    )
}

export default UpdateModal