import React from 'react';
import LocationSelector from './location_selector'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
    } package

    render() {
        return (
            <header className="nav-bar">  
                <div className='left-nav'>
                    <Link to="/" className='nav-logo'>
                        <img src={window.logo} alt="Letseat logo" className='logo' />
                        <h3>Letseat</h3>
                    </Link>
                    <LocationSelector id='location-filter'/>                   
                </div>
                <div className='right-nav'>
                {this.props.currentUser ?
                    <Welcome currentUser={this.props.currentUser} />
                    :
                    <SessionButtons />}
                </div>
            </header>
        )
    }
}

export default connect(mSTP)(NavBar);
