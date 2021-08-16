import {
    RECEIVE_REVIEW,
    RECEIVE_REVIEW_ERRORS,
    RESET_REVIEW_ERRORS,
} from '../actions/review_actions';

const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            return []
            break;
        case RECEIVE_REVIEW_ERRORS:
            return action.errors
            break;
        case RESET_REVIEW_ERRORS:
            return [];
            break;
        default: return state;
    }
};

export default reviewErrorsReducer