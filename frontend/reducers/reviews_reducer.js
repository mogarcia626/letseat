import { RECEIVE_SINGLE_RESTAURANT, RECEIVE_ALL_RESTAURANTS } from '../actions/restaurant_actions';
import { RECEIVE_PAST_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state) 

    switch (action.type) {

        case RECEIVE_PAST_REVIEWS:
            return Object.assign(nextState, action.reviews)
            break;
        case RECEIVE_REVIEW:
            return Object.assign(nextState, { [action.review.reservationId]: action.review })
            break;
        case RECEIVE_SINGLE_RESTAURANT:
            return Object.assign({}, action.restaurant.reviews)
            break;
        case RECEIVE_ALL_RESTAURANTS:
            return {}
            break;
        default:
            return nextState;    
    }
}

export default reviewsReducer;