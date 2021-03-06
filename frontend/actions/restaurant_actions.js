import * as APIUtil from '../util/restaurant_api_utils';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_SINGLE_RESTAURANT = 'RECEIVE_SINGLE_RESTAURANT';

export const receiveAllRestaurants = restaurants => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
})

export const receiveSingleRestaurant = (restaurant) => ({
    type: RECEIVE_SINGLE_RESTAURANT,
    restaurant
});

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