import {
    RECEIVE_ALL_RESERVATIONS,
    // RECEIVE_SINGLE_RESERVATION,
} from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            return Object.assign({}, action.reservations);
        // case RECEIVE_SINGLE_RESERVATION:
        //     return Object.assign({}, {[action.reservation.id]: action.reservation} )
        default:
            return state;
    }
};

export default reservationsReducer;


