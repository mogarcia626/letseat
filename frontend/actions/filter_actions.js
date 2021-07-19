import { requestAllRestaurants } from './restaurant_actions'

export const UPDATE_LOCATION_FILTER = 'UPDATE_FILTER';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';

export const changeLocationFilter = (city) => ({
    type: UPDATE_LOCATION_FILTER,
    city
});

export const updateLocationFilter = (city) => (dispatch, getState) => {
    dispatch(changeLocationFilter(city));
    return requestAllRestaurants(getState().ui.filters)(dispatch);
};

export const changeSearchFilter = (search) => ({
    type: UPDATE_SEARCH_FILTER,
    search
});

export const updateSearchFilter = (search) => (dispatch, getState) => {
    dispatch(changeSearchFilter(search));
    return requestAllRestaurants(getState().ui.filters)(dispatch);
};
