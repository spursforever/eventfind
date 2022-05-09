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
export const getAllTickets = (data) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/users/${data}`);

    if (backendResponse.ok) {
        const tickets = await backendResponse.json()
        dispatch(allTickets(tickets))
        return tickets
    }
}

export const addOneTicket = (data) => async dispatch => {
    const backendResponse = await csrfFetch(`/api/tickets/events/${data}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    // console.log("->>>>>>>>>>>>>>>>>>", data)
    if (backendResponse.ok) {
        const registeredEvent = await backendResponse.json();
        dispatch(addTicket(registeredEvent));
        console.log("->>>>>>>>>>>>>>>>>>", registeredEvent)
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

const ticketReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ALL_TICKETS:
            return {
                ...state,
                list: action.tickets,
            }

        case ADD_TICKET:
            if (!state[action.ticket.id]) {
                newState = {
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
            newState = { ...state };
            const filteredTicket = newState.list.filter(ticket => (
                ticket.id !== action.id
            ))

            newState.list = filteredTicket
            return newState;
        default:
            return state;
    }
}
export default ticketReducer;