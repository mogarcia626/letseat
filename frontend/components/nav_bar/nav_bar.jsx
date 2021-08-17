import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LocationSelectorContainer from './location_selector_container'
import Welcome from './welcome';
import SessionButtons from './session_buttons';

function NavBar() {
    const currentUser = useSelector(state => 
        state.entities.user[state.session.id]
    )

    return (
        <div className="nav-bar">  

            <div className='left-nav'>

                <Link to="/" className='nav-logo'>
                    <img src={window.logo} alt="Letseat logo" className='logo' />
                    <h3 className='logo-text'>Letseat</h3>                    
                </Link>

                <LocationSelectorContainer />  

            </div>

            <div className='right-nav'>
                { currentUser ?
                    <Welcome currentUser={currentUser} />
                        :
                    <SessionButtons />
                }
            </div>

        </div>
    )
}

export default NavBar;
