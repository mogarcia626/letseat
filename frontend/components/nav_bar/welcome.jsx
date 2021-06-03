import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id],
});

const mDTP = dispatch => ({
    processLogout: () => dispatch(logout()),
});

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.processLogout();
    };
    
    render() {
        return (
            <div id="sub-nav-bar">
                <p>Welcome, {this.props.currentUser.firstName}</p>
                <button onClick={this.handleClick}>Log Out</button>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(Welcome);