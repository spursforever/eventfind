import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createSingleEvent } from "../../store/event";
import {useSelector, useDispatch} from "react-redux"
const CreateEvent = () => {
    const history = useHistory();
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
}

export default CreateEvent;