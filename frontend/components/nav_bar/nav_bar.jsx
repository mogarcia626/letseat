import React from 'react';
import LocationSelector from './location_selector'
import Welcome from './welcome';
import SessionButtons from './session_buttons';

const NavBar = () => (
    <header id="nav-bar">        
        <LocationSelector />
        {false ? 
            <Welcome /> : 
            <SessionButtons />
        }        
    </header>
)

export default NavBar;
