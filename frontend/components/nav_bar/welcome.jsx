import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import { requestAllReservations } from '../../actions/reservation_actions';
import ReservationsDropDown from './reservations_dropdown';
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

    const userId = useSelector(state => state.session.id)

    useEffect( ()=> {
        if (userId) {
            dispatch(requestAllReservations('upcoming'))
        }
    }, [userId])

    function clickLogout(e) {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className='right-nav'>

            <Link to='/profile' id='nav-profile-link'>
                <p className='nav-text'>
                    Welcome {currentUser.firstName}
                </p>
                <button className="icon-button">
                    <FaRegUser size={18} />
                </button>
            </Link>
            
            <button className="icon-button" onClick={()=>setShowResList(true)}>
                <FiCalendar size={20} />
            </button>

            {(!showResList) ? null :
                <ReservationsDropDown />
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

