import { RECEIVE_UPCOMING_RESERVATIONS }from '../actions/reservation_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            Object.assign(nextState, { past: action.currentUser.past });
            Object.assign(nextState, { upcoming: action.currentUser.upcoming });
            return nextState
        case RECEIVE_UPCOMING_RESERVATIONS:
            return Object.assign(nextState, { upcoming: action.reservations });
        case LOGOUT_CURRENT_USER:
            return {}
        // case RECEIVE_SINGLE_RESERVATION:
        //     return Object.assign({}, {[action.reservation.id]: action.reservation} )
        default:
            return state;
    }
};

export default reservationsReducer;


