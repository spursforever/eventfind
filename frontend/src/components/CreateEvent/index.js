import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createSingleEvent } from "../../store/event";
import {useSelector, useDispatch} from "react-redux"
const CreateEvent = () => {
    const history = useHistory();
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        const validationErrors = [];
        if (!name) {
            validationErrors.push("Please provide an event name.")
        } if (!imageUrl) {
            validationErrors.push("Please provide an image URL of the event.")
        }
        if (!description) {
            validationErrors.push("Please provide an event description.")
        } if (!date) {
            validationErrors.push("Please provide a date of the event.")
        } if (!location) {
            validationErrors.push("Please provide event's location.")
        } setErrors(validationErrors)
    }, [name, description, date, location, imageUrl, dispatch])
    const createdEvent = () => {
        history.push("/");
        
    }
    const eventSubmission = (e) => {
        e.preventDefault();
        const payload = {
            userId: user.id,
            name,
            description,
            date,
            location,
            imageUrl
        };
        dispatch((createSingleEvent(payload)))
    }
return (
    <div>
        <form onSubmit={eventSubmission}>
            <h1>Create your desired Event!</h1>
            <ul>{errors.map((error) => (
                <li>
                {error}
                </li>))}
                </ul>
                <div>
                    <label>Event Name: </label>
                    <input
                    id="form-label-title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=""
                    />
                </div>
                <div className="">
          <label> Description: </label>
          <textarea
            id="form-label-Date"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=""
            />
            </div>
          <div>
          <label>ImageUrl: </label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} />
                  </div>
          <div>

          <label>Date: </label>
          <input
          value={date}
          onChange={(e) => setDate(e.target.value)}></input>
          </div>
          <div>
              <label>Location: </label>
              <input 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
          </div>
                <button
                className=""
                type="submit"
                disabled={errors.length >0}
                >Submit Event</button>
                <button type="submit"> Cancel Event</button>
        </form>
        </div>
)
}



export default CreateEvent;