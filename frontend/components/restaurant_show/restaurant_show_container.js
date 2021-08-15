import React from 'react';
import { connect } from 'react-redux';
import { selectSingleRestaurant, selectReviewsForRestaurant } from '../../reducers/selectors';
import {requestSingleRestaurant} from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';

const mSTP = (state, { match }) => {
    const restaurantId = parseInt(match.params.restaurantId);
    const restaurant = selectSingleRestaurant(state.entities, restaurantId);
    const reviews = selectReviewsForRestaurant(state.entities)
    return {
        restaurantId,
        restaurant,
        reviews
    }
};

const mDTP = dispatch => ({
    requestSingleRestaurant: id => dispatch(requestSingleRestaurant(id))
});

export default connect(mSTP, mDTP)(RestaurantShow)