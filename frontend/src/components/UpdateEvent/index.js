import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateSingleEvent } from "../../store/event";
import {useSelector, useDispatch} from "react-redux"


const UpdateEvent = ({ onClose }) => {
    const history = useHistory();
    const {id} = useParams();
    const event = useSelector((state) => state.event[id]);
   
    
    const dispatch = useDispatch();
    const [name, setName] = useState(event?.name || "");
    const [imageUrl, setImageUrl] = useState(event?.imageUrl || "")
    const [description, setDescription] = useState(event?.description || "");
    const [date, setDate] = useState(event?.date || "");
    const [location, setLocation] = useState(event?.location || "");
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
    }, [name, description, date, location, imageUrl, dispatch]);

    useEffect(() => {
        if (event) {
            setName(event.name);
            setImageUrl(event.imageUrl);
            setDescription(event.description);
            setDate(event.date)
            setLocation(event.location)
        }
    }, [event])
    
    const editEventSubmission = async (e) => {
        e.preventDefault();
        const payload = {
            ...event,
            name,
            description,
            date,
            location,
            imageUrl
        };

        const updatedEvent = await dispatch(updateSingleEvent(payload));
        if (updatedEvent) {
            history.push(`/events/${event.id}`)
            onClose(false)
        }
    }
return (
    <div>
        <form onSubmit={editEventSubmission}>
            <h1>Event Details</h1>
            <ul>{errors.map((error) => (
                <li key={error}>
                {error}
                </li>))}
                </ul>
                <div>
                    <label> Event Name: </label>
                    <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="edit_form"
                    />
                </div>
                <div className="">
          <label> Description: </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="edit_form"
            />
            </div>
          <div>
          <label> ImageUrl: </label>
          <input
            id='imageUrl'
            className="edit_form"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} />
                  </div>
          <div>

          <label> Date: </label>
          <input
          id="date"
          value={date}
          className="edit_form"
          onChange={(e) => setDate(e.target.value)}>

          </input>
          </div>
          <div>
              <label> Location: </label>
              <input 
              value={location}
              id="location"
              className="edit_form"
              onChange={(e) => setLocation(e.target.value)}
              />
          </div>
                <button
                className=""
                type="submit"
                disabled={errors.length >0}
                >Submit Event</button>
                <button 
                type="submit"
                onClick={onClose}> Cancel Event</button>
            
        </form>
        </div>
)
}



export default UpdateEvent;