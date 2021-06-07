import {
    RECEIVE_ALL_RESTAURANTS,
    RECEIVE_SINGLE_RESTAURANT,
} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_SINGLE_RESTAURANT:
            const newRestaurant = { [action.restaurant.id]: action.restaurant };
            return Object.assign({}, state, newRestaurant);
        default:
            return state;
    }
};

export default restaurantsReducer;
