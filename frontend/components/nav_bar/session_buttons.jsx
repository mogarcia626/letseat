import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { ImSearch } from "react-icons/im";

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})
const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

function SessionButtons({ openModal }) {
    
    return (
        
        <div className='right-nav'>
            <button
                onClick={() => openModal('search')}
                className="icon-button">
                <ImSearch size={16} />
            </button>
            <button 
                onClick={() => openModal('signup')} 
                className='session-button'
                id='session-button-dark'>
                    Sign Up
            </button>
            <button 
                onClick={() => openModal('login')} 
                className='session-button'
                id='session-button-light'>
                    Sign In
            </button>
        </div>
    )
}

export default connect(mSTP, mDTP)(SessionButtons);
