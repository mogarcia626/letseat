import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BiStoreAlt } from 'react-icons/bi'
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaRegUser } from 'react-icons/fa';
import { monthArray } from '../../util/general_utils'

function ReservationsDropDown() {
    const upcoming = useSelector(state => state.entities.reservations.upcoming)
    const firstTwo = Object.values(upcoming).slice(0,2)
    
    return (
        <div id='reservations-dd'>

            <p id='res-dd-header'>Upcoming Reservations</p>

            {firstTwo.map((res, i) => (
                <div key={i} className='res-dd-item-container'>

                    <span className='res-dd-store-icon'>
                        <BiStoreAlt size={24}/>
                    </span>

                    <div className='res-dd-item'>
                        <Link to={`/restaurants/${res.restaurantId}`}
                            className='ress-dd-restaurant'>
                            {res.name}
                        </Link>

                        <div className='res-dd-line-item'>
                            <FaRegUser size={16} />
                            <p className='res-dd-text'>Table for {res.partySize} people</p>
                        </div>

                        <div className='res-dd-line-item'>
                            <FiClock size={16} />
                            <p className='res-dd-text'>{res.time}</p>
                        </div>

                        <div className='res-dd-line-item'>
                            <FiCalendar size={16} />
                            <p className='res-dd-text'>{monthArray[res.month]} {res.day}, {res.year}</p>
                        </div>

                        <div className='res-dd-buttons'>
                            <p className='res-modify-button'>View</p>
                            <p className='bullet-divider'>&bull;</p>
                            <p className='res-modify-button'>Modify</p>
                            <p className='bullet-divider'>&bull;</p>
                            <p className='res-dd-cancel-button'>Cancel</p>
                        </div>

                    </div>
                </div>
            ))}
            <Link to='/profile' className='res-dd-profile-link'>View all reservations</Link>
        </div>
    )
}

export default ReservationsDropDown;