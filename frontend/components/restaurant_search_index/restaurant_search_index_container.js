import React from 'react';
import { connect } from 'react-redux'
import RestaurantSearchIndex from './restaurant_search_index';
import { updateSearchFilter, updateLocationFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';

const mSTP = (state) => ({
    filters: state.ui.filters,
    restaurants: state.entities.restaurants
});

const mDTP = dispatch => ({
    requestAllRestaurants: (filters) => dispatch(requestAllRestaurants(filters)),
    updateSearchFilter: (search) => dispatch(updateSearchFilter(search)),
    updateLocationFilter: (city) => dispatch(updateLocationFilter(city)),
});

export default connect(mSTP, mDTP)(RestaurantSearchIndex);