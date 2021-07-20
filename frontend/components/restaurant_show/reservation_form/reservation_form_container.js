import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { createReservation } from '../../../util/reservation_api_util';
import ReservationForm from './reservation_form';

const mSTP = (state) => {
    return {
        modal: state.ui.modal,
        user: state.session
    };
};

const mDTP = dispatch => {
    return {
        processForm: (reservation) => dispatch(createReservation(reservation)),        
        openModal: modal => dispatch(openModal(modal)), 
        closeModal: () => dispatch(closeModal()),
        resetErrors: () => dispatch(resetErrors()),        
    };
};

export default connect(mSTP, mDTP)(ReservationForm);
