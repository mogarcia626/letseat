import {
    RECEIVE_ALL_RESTAURANTS,
    RECEIVE_SINGLE_RESTAURANT,
} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, state, action.restaurants);
        case RECEIVE_SINGLE_RESTAURANT:
            nextState[action.restaurant.id] = action.restaurant;
            return nextState
        default:
            return state;
    }
};

export default restaurantsReducer;



// actions 

// export const receiveAllRestaurants = restaurants => ({
//     type: RECEIVE_ALL_RESTAURANTS,
//     restaurants
// })

// export const receiveSingleRestaurant = (restaurant) => ({
//     type: RECEIVE_SINGLE_RESTAURANT,
//     restaurant,
// });
