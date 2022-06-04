import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createSingleEvent } from "../../store/event";
import { useSelector, useDispatch } from "react-redux"
import "./CreateEvent.css"

const CreateEvent = () => {
    const history = useHistory();
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];
        if (!name) {
            validationErrors.push("Please provide an event name.")
        }
        // } if (!imageUrl) {
        //     validationErrors.push("Please provide an image URL of the event.")
        // }
        if (!description) {
            validationErrors.push("Please provide an event description.")
        } if (!date) {
            validationErrors.push("Please provide a date of the event.")
        } if (!location) {
            validationErrors.push("Please provide event's location.")
        } setErrors(validationErrors)
    }, [name, description, date, location, image, dispatch])


    const eventSubmission = (e) => {
        e.preventDefault();
        const payload = {
            user_Id: user.id,
            name,
            description,
            date,
            location,
            image
        };
        dispatch((createSingleEvent(payload)))
            .then((res) => {
                if (res) history.push("/");
            })
            .catch(async (err) => {
                const errors = await err.json();
            });
    }

    const imageUpload = (e) => {
        const awsFile = e.target.files[0];
        if (awsFile) {
            setImage(awsFile)
        }
    }

    return (
        <div className="create_event">
            <form className="create_event_form" onSubmit={eventSubmission}>
                <h1>Create your desired Event!</h1>
                <ul>{errors.map((error) => (
                    <li className="error_info">
                        {error}
                    </li>))}
                </ul>
                <div className="name">
                    <label>Event Name: </label>
                    <input
                        id="form-label-title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="name_input"
                    />
                </div>
                <div className="description">
                    <label> Description: </label>
                    <textarea
                        id="form-label-Date"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="description_input"
                    />
                </div>
                <div>
                    <label>Upload Image: </label>
                    <input
                        type="file"
                        className="aws_upload"                        
                        onChange={imageUpload} />
                </div>
                <div className="date">
                    <label htmlFor="date">Date: </label>
                    <input
                        className="date_input"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}>
                    </input>
                </div>
                <div className="location">
                    <label>Location: </label>
                    <input
                        className="location_input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button
                    className="submit_event"
                    type="submit"
                    disabled={errors.length > 0}
                >Submit Event</button>
                <button
                    className="cancel_event"
                    type="submit"
                    onClick={() => history.push('/')}> Cancel Event</button>
            </form>
        </div>
    )
}



export default CreateEvent;