import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import PhotoModal from '../restaurant_show/restaurant_content/photos/photo_modal'
import ReservationConfirmation from '../restaurant_show/reservation_form/reservation_confirmation_modal';

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

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
            component = <SearchBarContainer id='search-form-modal'/>;
            break;
        case 'photo-carousel':
            component = <PhotoModal />;
            break;
        case 'reservation-confirmation':
            component = <ReservationConfirmation />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background"
            onClick={()=>{if(!document.querySelector('.drop-content')) {
                closeModal()
            }}}
        >
            <div className="modal-child"
                onClick={e => e.stopPropagation()}
            >                    
                {component}
            </div>
        </div>
    );
}


export default connect(mSTP, mDTP)(Modal);