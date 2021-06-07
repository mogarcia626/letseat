import { requestAllRestaurants } from './restaurant_actions'

export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const changeFilters = (filters, value) => ({
    type: UPDATE_FILTERS,
    filters,
    value
});

export const updateFilters = (filters, value) => (dispatch, getState) => {
    dispatch(changeFilter(filters, value));
    return requestAllRestaurants(getState().ui.filters)(dispatch);
};

