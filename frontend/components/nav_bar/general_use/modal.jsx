import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import LoginFormContainer from '../../session/login_form_container';
import SignupFormContainer from '../../session/signup_form_container';
import SearchBar from '../../search_bar/search_bar';
import PhotoModal from '../../restaurant_show/photos/photo_modal'

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;

    switch (modal.modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'search':
            component = <SearchBar id='search-form-modal'/>;
            break;
        case 'photo-carousel':
            component = <PhotoModal />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className='modal-container'>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>
    );
}


export default connect(mSTP, mDTP)(Modal);