import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal'
import { signup, login } from '../../actions/session_actions';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';

class SessionButtons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modals: {
                signup: false,
                login: false,
                reservation: false,
                resConfirm: false,
            }
        }
        // this.openModal = this.openModal.bind(this)
        // this.closeModal = this.closeModal.bind(this)
        this.openSignupModal = this.openSignupModal.bind(this)
        this.closeSignupModal = this.closeSignupModal.bind(this)
    }

    openSignupModal = (e) => {
        let modals = [...this.state.modals]
        console.log(modals.signup)
        console.log(modals[signup])
        // modals[signup] = true
        // this.setState({ modals })
    }

    closeSignupModal = () => {
        let modal = { ...this.state.modals };
        modal.signup = false
        this.setState({ modal })
    }

    // openModal = key => {
    //     let modal = { ...this.state.modals };
    //     modal.[key] = true
    //     this.setState({ modal })
    // }

    // closeModal = key => {
    //     let modal = { ...this.state.modals };
    //     modal.[key] = false
    //     this.setState({ modal })
    // }

    render() {
        return (
            <div id="sub-nav-bar">
                <button onClick={this.openSignupModal}>Sign Up</button>
                {/* <button onClick={this.openModal('login')}>Sign In</button> */}
                {/* <Link to="/signup" className="btn" >Sign Up</Link>
                <Link to="/login" className="btn" >Log In</Link> */}
                <Modal show={this.state.modals.signup} onHide={this.closeSignupModal}>
                    <SignupFormContainer />
                </Modal>

                <Modal show={this.state.modals.login} onHide={this.closeSignupModal}>
                    <LoginFormContainer />
                </Modal>
            </div>
        )
    }
};

export default SessionButtons;

