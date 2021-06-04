import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

