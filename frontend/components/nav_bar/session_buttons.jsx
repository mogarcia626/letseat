import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { FiSearch } from "react-icons/fi";

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})
const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

function SessionButtons({openModal}) {
    
    return (
        
        <div className='right-nav'>
            <button
                onClick={() => openModal({modal: 'search', data: null})}
                className="icon-button">
                <FiSearch size={20} />
            </button>
            <button 
                onClick={() => openModal({modal: 'signup', data: null})} 
                className='session-button'
                id='session-button-dark'>
                    Sign Up
            </button>
            <button 
                onClick={() => openModal({modal: 'login', data: null})} 
                className='session-button'
                id='session-button-light'>
                    Sign In
            </button>
        </div>
    )
}

export default connect(mSTP, mDTP)(SessionButtons);
