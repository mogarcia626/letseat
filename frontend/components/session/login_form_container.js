import React from 'react';
import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import { requestAllUserReservations } from '../../actions/reservation_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        user: state.entities.user,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        requestAllReservations: (userId) => dispatch(requestAllUserReservations(userId)),
        closeModal: () => dispatch(closeModal()),
        resetErrors: () => dispatch(resetErrors()),
        otherForm: (
            <button className='button-link'
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(openModal({modal: 'signup'}))
                }
            }>
                Create an account
            </button>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

