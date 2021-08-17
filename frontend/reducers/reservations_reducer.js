import { RECEIVE_ALL_RESERVATIONS }from '../actions/reservation_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            return Object.assign(nextState, action.reservations);
        case LOGOUT_CURRENT_USER:
            return {}
        // case RECEIVE_SINGLE_RESERVATION:
        //     return Object.assign({}, {[action.reservation.id]: action.reservation} )
        default:
            return nextState;
    }
};

export default reservationsReducer;


