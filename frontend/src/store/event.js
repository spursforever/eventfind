import { csrfFetch } from "./csrf"

const ALL_EVENTS = 'events/allEvents'
const SINGLE_EVENT = 'events/singleEvent'

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

// thunking the beautiful action creators
export const displayAllEvents = () => async dispatch => {
    const backendResponse = await csrfFetch(`/api/event`);
    if (backendResponse.ok) {
        const events = await backendResponse.json();
        dispatch(allEvents(events))
        return events
    }
}

export const displaySingleEvent = (id) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/event/${id}`);
    if (backendResponse.ok) {
        const event = await backendResponse.json()
        dispatch(singleEvent(event))
        return event
    }

}
// my biggest fear: the reducer...
