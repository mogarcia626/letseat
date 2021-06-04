import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})
const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

function SessionButtons({ openModal }) {
    
    return (
        
        <div id="sub-nav-bar">
            <button onClick={() => openModal('signup')}>Sign Up</button>
            <button onClick={() => openModal ('login')}>Sign In</button>
        </div>
    )
}

export default connect(mSTP, mDTP)(SessionButtons);