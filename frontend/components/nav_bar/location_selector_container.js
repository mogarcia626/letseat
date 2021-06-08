import React from 'react';
import { connect } from 'react-redux';
// import { receiveAllLocations, receiveCurrentLocation } from '../../actions/location_actions';
import LocationSelector from './location_selector';
import { updateFilter } from '../../actions/filter_actions';
import { requestAllRestaurants, clearAllRestaurants } from '../../actions/restaurant_actions';
import { selectAllRestaurants } from '../../reducers/selectors';

const mSTP = state => {
    return {
        filters: state.ui.filters,
    };
};

const mDTP = dispatch => {
    return {
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        clearAllRestaurants: () => dispatch(clearAllRestaurants()),
    };
};

export default connect(mSTP, mDTP)(LocationSelector);