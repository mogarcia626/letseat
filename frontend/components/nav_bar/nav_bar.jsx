import React from 'react';
import LocationSelectorContainer from './location_selector_container'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Welcome from './welcome';
import SessionButtons from './session_buttons';

const mSTP =  state  => {
    return {
        currentUser: state.entities.user[state.session.id]
    };
};

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav-bar">  

                <div className='left-nav'>
                    <Link to="/" className='nav-logo'>
                        <img src={window.logo} alt="Letseat logo" className='logo' />

                        <h3 className='logo-text'>
                            Letseat
                        </h3>
                        
                    </Link>
                    <LocationSelectorContainer />                   
                </div>

                <div className='right-nav'>
                    {this.props.currentUser ?
                        <Welcome currentUser={this.props.currentUser} />
                        :
                        <SessionButtons />}
                </div>

            </div>
        )
    }
}

export default connect(mSTP)(NavBar);
