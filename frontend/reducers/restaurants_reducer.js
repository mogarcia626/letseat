import {
    RECEIVE_ALL_RESTAURANTS,
    RECEIVE_SINGLE_RESTAURANT,
    CLEAR_ALL_RESTAURANTS,
} from '../actions/restaurant_actions';

const _clearRestaurants = Object.freeze({
    restaurants: null
})

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, action.restaurants);
        case RECEIVE_SINGLE_RESTAURANT:
            nextState[action.restaurant.id] = action.restaurant;
            return nextState
        case CLEAR_ALL_RESTAURANTS:
            return _clearRestaurants;
        default:
            return state;
    }
};

export default restaurantsReducer;


