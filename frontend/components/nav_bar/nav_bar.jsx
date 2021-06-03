import React from 'react';
import LocationSelector from './location_selector'
import { connect } from 'react-redux';
import Welcome from './welcome';
import SessionButtons from './session_buttons';

const mSTP =  state  => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <header id="nav-bar">     
                <LocationSelector />
                {Boolean(this.props.currentUser) ? <Welcome currentUser={this.props.currentUser} /> : <SessionButtons />}
            </header>
        )
    }
}

export default connect(mSTP)(NavBar);
