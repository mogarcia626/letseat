import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-responsive-modal'
// import { signup, login } from '../../actions/session_actions';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';

class SessionButtons extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     modals: {
        //         signup: false,
        //         login: false,
        //         reservation: false,
        //         resConfirm: false,
        //     }
        // }
        // this.openModal = this.openModal.bind(this)
        // this.closeModal = this.closeModal.bind(this)
    }

    // openModal = key => {
    //     let modal = { ...this.state.modals };
    //     modal[key] = true
    //     this.setState({ modal })
    // }

    // closeModal = key => {
    //     let modal = { ...this.state.modals };
    //     modal[key] = false
    //     this.setState({ modal })
    // }

    render() {
        return (
            <div id="sub-nav-bar">
                SessionButons working
                {/* <button onClick={this.openModal('signup')}>Sign Up</button>
                <button onClick={this.openModal('login')}>Sign In</button> */}
                <Link to="/signup" className="btn" >Sign Up</Link>
                <Link to="/login" className="btn" >Log In</Link>
            </div>
        )
    }
};

export default SessionButtons;


{/* <Modal open={this.state.modals.signup} onClose={this.closeModal('signup')}>
            <SignupFormContainer />
        </Modal>
        <Modal open={this.state.modals.login} onClose={this.closeModal('login')}>
            <LoginFormContainer />
        </Modal> */}