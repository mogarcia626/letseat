import { requestAllRestaurants } from './restaurant_actions'

export const UPDATE_LOCATION_FILTER = 'UPDATE_FILTER';
export const UPDATE_CUISINE_FILTER = 'UPDATE_CUISINE_FILTER';

export const changeLocationFilter = (city) => ({
    type: UPDATE_LOCATION_FILTER,
    city
});

export const updateLocationFilter = (city) => (dispatch, getState) => {
    dispatch(changeLocationFilter(city));
    return requestAllRestaurants(getState().ui.filters)(dispatch);
};

export const changeCuisineFilter = (cuisine) => ({
    type: UPDATE_CUISINE_FILTER,
    cuisine
});

export const updateCuisineFilter = (cuisine) => (dispatch, getState) => {
    dispatch(changeCuisineFilter(cuisine));
    return requestAllRestaurants(getState().ui.filters)(dispatch);
};
