import {
    RECEIVE_ALL_RESERVATIONS,
    RECEIVE_SINGLE_RESERVATION,
    RECEIVE_RESERVATION_ERRORS,
    RESET_RESERVATION_ERRORS,
} from '../actions/reservation_actions';

const reservationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESERVATION_ERRORS:
            return action.errors;
        case RECEIVE_ALL_RESERVATIONS:
            return [];
        case RECEIVE_SINGLE_RESERVATION:
            return [];
        case RESET_RESERVATION_ERRORS:
            return [];
        default:
            return state;
    }
};

export default reservationErrorsReducer