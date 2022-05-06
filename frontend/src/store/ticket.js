import { csrfFetch } from "./csrf";

//actions
const ALL_TICKETS = 'ticket/ALL_TICKETS'
const ADD_TICKET = 'ticket/ADD_TICKET'
const REMOVE_TICKET = 'ticket/REMOVE_TICKET'

// action creator
const allTickets = tickets => {
    return {
        type: ALL_TICKETS,
        tickets
    }

}
const addTicket = ticket => {
    return {
        type: ADD_TICKET,
        ticket
    }
}

const removeTicket = ticket => {
    return {
        type: REMOVE_TICKET,
        ticket
    }
}

// thunk action
export const getAllTickets = (userId) => async dispatch => {
    const backendResponse = await fetch(`/api/tickets/users/${userId}`);

    if (backendResponse.ok) {
        const tickets = await backendResponse.json()
        dispatch(allTickets(tickets))
        return tickets
    }
}

export const addOneTicket = (data) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/events/${data.eventId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (backendResponse.ok) {
        const registeredEvent = await backendResponse.json();
        dispatch(addTicket(registeredEvent));
        
    }
}

export const deleteTicket = (id) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/${id}`, {
        method: "DELETE",
    });
    if (backendResponse.ok) {
        const ticket = await backendResponse.json();
        dispatch(removeTicket(id))
        
    }
}

//reducer
const initialState = {}
const ticketReducer = (state = initialState, action) => {
    // let updatedState;
    switch (action.type) {
        case ALL_TICKETS:
            return {
                ...state,
                list: action.tickets,
            }
        case ADD_TICKET:
            const newState = {...state, [action.ticket.id]: action.ticket}
            return newState;
        case REMOVE_TICKET:
           const updatedState = { ...state };
            const filteredTicket = updatedState.list.filter(ticket => (
                ticket.id !== action.id))
            updatedState.list = filteredTicket
            return updatedState;
        default:
            return state;
    }
}
export default ticketReducer;