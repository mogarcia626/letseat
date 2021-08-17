import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import PhotoModal from '../restaurant_show/restaurant_content/photos/photo_modal'
import ReservationConfirmationContainer from '../restaurant_show/reservation_form/reservation_confirmation_container';
import ReviewForm from '../user_profile/review_form'

function Modal() { 
    
    const dispatch = useDispatch()
    const modal = useSelector(state=> state.ui.modal)
    
    if (!modal) return null;
    
    function clickCloseModal() {
        if (!document.querySelector('.drop-content')) (
        dispatch(closeModal()))
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
            component = <SearchBarContainer id='search-form-modal' />;
            break;
        case 'photo-carousel':
            component = <PhotoModal />;
            break;
        case 'reservation-confirmation':
            component = <ReservationConfirmationContainer />;
            break;
        case 'review':
            component = <ReviewForm />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background"
            onClick={()=> clickCloseModal()}
        >
            <div className="modal-child"
                onClick={e => e.stopPropagation()}
            >                    
                {component}
            </div>
        </div>
    );
}


export default Modal;