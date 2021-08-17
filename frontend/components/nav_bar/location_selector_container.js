import React from 'react';
import { connect } from 'react-redux';
import { updateLocationFilter, clearSearchFilter } from '../../actions/filter_actions';
import LocationSelector from './location_selector';

const mSTP = (state) => {
    return {
        filters: state.ui.filters,
    };
};

const mDTP = dispatch => {
    return {
        updateLocationFilter: (city) => dispatch(updateLocationFilter(city)),
        clearSearchFilter: () => dispatch (clearSearchFilter()),
    };
};

export default connect(mSTP, mDTP)(LocationSelector);