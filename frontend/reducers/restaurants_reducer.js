import {
    RECEIVE_ALL_RESTAURANTS,
    RECEIVE_SINGLE_RESTAURANT,
    RECEIVE_REVIEW,
} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, action.restaurants);
        case RECEIVE_SINGLE_RESTAURANT:
            nextState.currentRestaurant = action.restaurant.currentRestaurant
            return nextState;
        default:
            return state;
    }
};

export default restaurantsReducer;


