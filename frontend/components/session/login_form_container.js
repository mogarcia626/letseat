import React from 'react';
import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
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
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        resetErrors: () => dispatch(resetErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

