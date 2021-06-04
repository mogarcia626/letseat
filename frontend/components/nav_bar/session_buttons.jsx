import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal'
import { signup, login } from '../../actions/session_actions';
// import SignupFormContainer from '../session/signup_form_container';
// import LoginFormContainer from '../session/login_form_container';
import ModalContainer from '../session/modal'
import { openModal } from '../../actions/modal_actions';

import { connect } from 'react-redux';

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

class SessionButtons extends React.Component {
    constructor(props) {
        super(props)        
    }

    // openModal(e) {
    //     e.preventDefault()
    //     openModal('signup')
    // }

    // openModal(e) {
    //     return (e) => {
    //         this.setState({ [type]: e.target.value });
    //     };
    // }

    render() {
        return (
            
            <div id="sub-nav-bar">
                <button onClick={() => openModal('signup')}>Sign Up</button>
                <button onClick={() => openModal ('login')}>Sign In</button>
                {/* <Link to="/signup" className="btn" >Sign Up</Link>
                <Link to="/login" className="btn" >Log In</Link> */}
                

                
            </div>
        )
    }
};

export default connect(mDTP)(SessionButtons);

