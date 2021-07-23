import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reviewsReducer from './reviews_reducer.js';
import reservationsReducer from './reservations_reducer.js';


const entitiesReducer = combineReducers(
    {
        user: usersReducer,
        restaurants: restaurantsReducer,
        reviews: reviewsReducer,
        reservations: reservationsReducer,

    });

export default entitiesReducer