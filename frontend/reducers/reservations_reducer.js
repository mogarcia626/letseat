import {
    RECEIVE_ALL_RESERVATIONS,
    RECEIVE_SINGLE_RESERVATION,
} from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    console.log(action)
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            console.log('RECEIVE_ALL_RESERVATIONS')
            return Object.assign({}, action.reservations);
        // case RECEIVE_SINGLE_RESERVATION:
        //     console.log('RECEIVE_SINGLE_RESERVATION')
        //     // debugger
        //     return Object.assign({}, {[action.reservation.id]: action.reservation} )
        default:
            return state;
    }
};

export default reservationsReducer;


