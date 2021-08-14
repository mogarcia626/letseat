import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import { FiSearch, FiCalendar } from "react-icons/fi";
import { FaRegUser } from 'react-icons/fa';

function Welcome( { currentUser } ) {
    const dispatch = useDispatch();
    const [showResList, setShowResList] = useState()

    useEffect( ()=> {
        setTimeout(() => {
            if (showResList) {
                window.addEventListener("click", ()=>setShowResList(false), true);
            } else {
                window.removeEventListener("click", ()=>setShowResList(false), true);
            }
        }, 100);
    }, [showResList])

    function clickLogout(e) {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className='right-nav'>

            <p className='nav-text'>
                Welcome {currentUser.firstName}
            </p>
            
            <button className="icon-button" onClick={()=>setShowResList(true)}>
                <FiCalendar size={20} />
            </button>

            {(!showResList) ? null :
                <p>Dropdowns Here</p>
            }

            <button
                onClick={() => dispatch(openModal({modal: 'search'}))}
                className="icon-button">
                <FiSearch size={20} />
            </button>

            <button
                onClick={clickLogout}
                className='session-button'
                id='session-button-dark'>
                    Log Out
            </button>
        </div>            
    )
}

export default Welcome;

