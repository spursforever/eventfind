import { csrfFetch } from "./csrf"

const ALL_EVENTS = 'events/ALL_EVENTS'
const SINGLE_EVENT = 'events/SINGLE_EVENT'
const CREATE_EVENT = 'events/CREATE_EVENT'
const UPDATE_EVENT = 'events/UPDATE_EVENT'
const REMOVE_EVENT = 'events/REMOVE_EVENT'

// action creators
const allEvents = (events) => {
    return {
        type: ALL_EVENTS,
        events
    }
}

const singleEvent = (event) => {
    return {
        type: SINGLE_EVENT,
        event
    }
}

const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        event
    }
}

const update = (event) => {
    return {
        type: UPDATE_EVENT,
        event
    }
}

const remove = (event) => {
    return {
        type: REMOVE_EVENT,
        event
    }
}

// thunk action creators
export const displayAllEvents = () => async dispatch => {
    const backendResponse = await csrfFetch(`/api/events`);
    if (backendResponse.ok) {
        const events = await backendResponse.json();
        dispatch(allEvents(events))
        return events
    }
}

export const displaySingleEvent = (id) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/events/${id}`);
    if (backendResponse.ok) {
        const event = await backendResponse.json()
        dispatch(singleEvent(event))
        return event
    }

}

export const createSingleEvent = (data) => async (dispatch) => {
    const { userId, name, image, description, date, location } = data
    const newData = new FormData();
    newData.append("userId", userId);
    newData.append("name", name);
    newData.append("image", image);
    newData.append("description", description);
    newData.append("date", date);
    newData.append("location", location);
    const backendResponse = await csrfFetch(`/api/events`, {
        method: 'POST',
        headers: { "Content-Type": "multipart/form-data" },
        body: newData,
    })
    if (backendResponse.ok) {
        const event = await backendResponse.json();
        dispatch(createEvent(event));
        return event;
    }
}

export const updateSingleEvent = (data) => async (dispatch) => {
    const backendResponse = await csrfFetch(`/api/events/${data.id}/update`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (backendResponse.ok) {
        const oneEvent = await backendResponse.json();
        dispatch(update(oneEvent));
        return oneEvent
    }
}

export const removeSingleEvent = (data) => async (dispatch) => {
    const backendResponse = await csrfFetch(`/api/events/${data}/remove`, {
        method: "DELETE",
    })
    if (backendResponse.ok) {
        await dispatch(remove(data))
        const removingEvent = await backendResponse.json()
        return removingEvent
    }
}

// reducer
const eventsReducer = (state = {}, action) => {
    let updatedState;
    switch (action.type) {
        case ALL_EVENTS:
            updatedState = { ...state };
            action.events.forEach((event) => {
                updatedState[event.id] = event
            })
            return updatedState;
        case SINGLE_EVENT:
            updatedState = { ...state };
            updatedState[action.event.id] = action.event
            return updatedState;
        case CREATE_EVENT:
            updatedState = { ...state };
            updatedState[action.event.id] = action.event;
            return updatedState;
        case UPDATE_EVENT:
            updatedState = { ...state };
            updatedState[action.event.id] = action.event;
            return updatedState
        case REMOVE_EVENT:
            updatedState = { ...state };
            delete updatedState[action.event];
            return updatedState
        default:
            return state;
    }
}

export default eventsReducer