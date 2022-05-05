import { csrfFetch } from "./csrf";

//actions
const ALL_TICKETS = 'ticket/ALL_TICKETS'

// action creator
const allTickets = (tickets) => {
    return {
       type: ALL_TICKETS,
    tickets 
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

//reducer
const ticketReducer = (state = {}, action) => {
        switch (action.type) {
        case ALL_TICKETS:
            return {...state, 
            list :action.tickets}
    
    default:
        return state;
}
}
export default ticketReducer;