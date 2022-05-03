import {useHistory, useParams} from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { displaySingleEvent} from "../../../store/event";
import "./SingleEvent.css"

const SingleEvent = () => {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
}