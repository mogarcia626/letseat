import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import { BiCalendarEvent } from "react-icons/bi";
import { ImSearch } from "react-icons/im";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id],
});

const mDTP = dispatch => ({
    processLogout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
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
            <div className='right-nav'>

                <p className='nav-text'>Welcome {this.props.currentUser.firstName}</p>
                
                <button className="icon-button" type="submit">
                    <BiCalendarEvent size={20} />
                </button>

                <button
                    onClick={() => this.props.openModal({modal: 'search'})}
                    className="icon-button">
                    <ImSearch size={16} />
                </button>

                <button
                    onClick={this.handleClick}
                    className='session-button'
                    id='session-button-dark'>
                        Log Out
                </button>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(Welcome);

