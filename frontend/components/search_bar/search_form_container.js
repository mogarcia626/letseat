import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateSearchFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import SearchForm from './search_form';

const mSTP = (state) => {
    return {
        filters: state.ui.filters,
        modal: state.ui.modal,
        restaurants: state.entities.restaurants
    };
};

const mDTP = dispatch => {
    return {
        processForm: (filters) => dispatch(requestAllRestaurants(filters)),
        updateSearchFilter: (search) => dispatch(updateSearchFilter(search)),
        // requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        closeModal: () => dispatch(closeModal()),        
    };
};

export default connect(mSTP, mDTP)(SearchForm);
