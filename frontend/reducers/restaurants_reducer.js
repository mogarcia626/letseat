import {
    RECEIVE_ALL_RESTAURANTS,
    RECEIVE_SINGLE_RESTAURANT,
} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, action.restaurants, state);
        case RECEIVE_SINGLE_RESTAURANT:
            nextState[action.payload.restaurant.id] = action.payload.restaurant;
            return nexState
        default:
            return state;
    }
};

export default restaurantsReducer;
