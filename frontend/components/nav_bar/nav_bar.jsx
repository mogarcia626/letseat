import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, signout }) => {
    
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.firstName}</p>
            <button onClick={signout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/signin">Log In</Link>
        </div>
    );

    return (
        <header>
            <h1>LetSeat</h1>
            <div>
                <p>LetsEat</p>
                <p>[location filter]</p>
            </div>
            <div>
                {display}
            </div>
        </header>
    );
};

export default NavBar;