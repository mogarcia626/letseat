import {
    RECEIVE_SINGLE_RESTAURANT,
    RECEIVE_ALL_RESTAURANTS,
} from '../actions/restaurant_actions';

const reviewsReducer = (state = {}, action) => {

    Object.freeze(state);
    const nextState = Object.assign({}, state) 

    switch (action.type) {
        case RECEIVE_SINGLE_RESTAURANT:
            return Object.assign({}, state, action.restaurant.reviews)
        case RECEIVE_ALL_RESTAURANTS:
            return {}
        default:
            return state;    
    }
}

export default reviewsReducer;