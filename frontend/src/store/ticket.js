import { csrfFetch } from "./csrf";

//actions
const ALL_TICKETS = 'ticket/ALL_TICKETS'
const ADD_TICKET = 'ticket/ADD_TICKET'

// action creator
const allTickets = (tickets) => {
    return {
       type: ALL_TICKETS,
    tickets 
    }
    
}
const addTicket = (ticket) => {
    return {
        type: ADD_TICKET,
        ticket
    }
}

// thunk action
export const getAllTickets = (id) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/users/${id}`)
    if (backendResponse.ok) {
        const tickets = await backendResponse.json()
        dispatch(allTickets(tickets))
        return tickets
    }
}

export const addOneTicket = (data) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/events/${data.id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (backendResponse.ok) {
        const registeredEvent = await backendResponse.json();
        dispatch(addTicket(registeredEvent))
        return registeredEvent
    }
}

//reducer
const ticketReducer = (state = {}, action) => {
    let updatedState;
        switch (action.type) {
        case ALL_TICKETS:
            return {...state, 
            list :action.tickets}
        case ADD_TICKET:
            updatedState = { ...state };
            updatedState[action.event.id] = action.event;
            return updatedState;
    default:
        return state;
}
}
export default ticketReducer;