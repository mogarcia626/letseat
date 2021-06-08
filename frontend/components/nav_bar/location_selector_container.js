import React from 'react';
import { connect } from 'react-redux';
import LocationSelector from './location_selector';
import { updateFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';

const mSTP = state => {
    return {
        filters: state.ui.filters,
    };
};

const mDTP = dispatch => {
    return {
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
    };
};

export default connect(mSTP, mDTP)(LocationSelector);