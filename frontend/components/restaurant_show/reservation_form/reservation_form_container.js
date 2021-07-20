import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../../actions/modal_actions';
import ReservationForm from './reservation_form';

const mSTP = (state) => {
    return {
        filters: state.ui.filters,
        modal: state.ui.modal,
        restaurants: state.entities.restaurants
    };
};

const mDTP = dispatch => {
    return {
        processForm: (reservation) => dispatch(requestAllRestaurants(filters)),
        
        openModal: modal => dispatch(openModal(modal)), 
        closeModal: () => dispatch(closeModal()),        
    };
};

export default connect(mSTP, mDTP)(ReservationForm);
