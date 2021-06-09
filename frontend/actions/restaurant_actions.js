import * as APIUtil from '../util/restaurant_api_utils';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_SINGLE_RESTAURANT = 'RECEIVE_SINGLE_RESTAURANT';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveAllRestaurants = restaurants => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
})

export const receiveSingleRestaurant = (restaurant) => ({
    type: RECEIVE_SINGLE_RESTAURANT,
    restaurant,
});

// export const receiveReviews = (restaurantId) => ({
//     type: RECEIVE_REVIEWs,
//     reviews
// });

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );

export const requestAllRestaurants = filters => dispatch => (
    APIUtil.fetchRestaurants(filters).then(restaurants => (
        dispatch(receiveAllRestaurants(restaurants))
    ))
);

export const requestSingleRestaurant = id => dispatch => (
    APIUtil.fetchRestaurant(id).then(restaurant => (
        dispatch(receiveSingleRestaurant(restaurant))
    ))
);