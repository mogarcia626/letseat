import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const mSTP = state => ({
    currentUser: state.entitites.users[state.session.id],
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
});

class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="sub-nav-bar">
                <p>Welcome, {this.props.currentUser.firstName}</p>
                <button onClick={this.props.signout}>Log Out</button>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(Welcome);