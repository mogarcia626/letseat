import { 
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
 } from '../actions/session_actions'

const nullSesh = Object.freeze({ id: null });

const sessionReducer = (state = nullSesh, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return nullSesh;
        default:
            return state;
        break;
    }
};

export default sessionReducer;