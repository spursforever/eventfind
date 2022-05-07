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
    const backendResponse = await csrfFetch(`/api/tickets/users/${userId}`);

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
        return registeredEvent
    }
}

export const deleteTicket = (id) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/${id}`, {
        method: "DELETE",
    });
    if (backendResponse.ok) {
         dispatch(removeTicket(id))
        const ticket = await backendResponse.json();
         return ticket
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
            if(!state[action.ticket.id]) {
                const newState = {
                 ...state,
                 [action.ticket.id]: action.ticket
                }
                return newState
               }
               return {
                ...state,
                [action.ticket.id]: {
                 ...state[action.ticket.id],
                 ...action.ticket
                }
               }
        case REMOVE_TICKET:
            const updatedState = {...state};
                delete updatedState[action.ticket];
                return updatedState
        default:
            return state;
    }
}
export default ticketReducer;