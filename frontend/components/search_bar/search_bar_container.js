import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateSearchFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import SearchBar from './search_bar';

const mSTP = state => ({
    filters: state.ui.filters,
    modal: state.ui.modal,
    restaurants: state.entities.restaurants
});
const mDTP = dispatch => ({
    processForm: (filters) => dispatch(requestAllRestaurants(filters)),
    updateSearchFilter: (search) => dispatch(updateSearchFilter(search)),
    closeModal: () => dispatch(closeModal()),  
});

export default connect(mSTP, mDTP)(SearchBar);
