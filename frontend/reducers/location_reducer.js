import {
    RECEIVE_ALL_LOCATIONS,
    RECEIVE_CURRENT_LOCATION,
} from '../actions/session_actions'

const _nullSession = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LOCATIONS:
            return action.locations;
        case RECEIVE_CURRENT_LOCATION:
            return Object.assign({}, { location: action.location });
        default:
            return state;
    }
};

export default sessionReducer;