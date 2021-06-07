import React from 'react';
import { connect } from 'react-redux';
import { signup, login, resetErrors } from '../../actions/session_actions';
import { openModal, closeModal} from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        loginDemo: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        resetErrors: () => dispatch(resetErrors()),
        otherForm: (
            <button className='button-link'
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(openModal('login'))}
                }>
                Login
            </button>
        ),
    };
};

export default connect(mSTP, mDTP)(SignupForm);