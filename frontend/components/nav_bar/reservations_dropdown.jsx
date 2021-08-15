import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BiStoreAlt } from 'react-icons/bi'
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaRegUser } from 'react-icons/fa';
import { monthArray } from '../../util/general_utils'

function ReservationsDropDown() {
    const upcoming = useSelector(state => state.entities.reservations.upcoming)

    const keys = Object.keys(upcoming).slice(0,3)
    const firstThree = keys.map( key => (upcoming[key]) )
    
    return (
        <div id='reservations-dd'>

            <p id='res-dd-header'>Upcoming Reservations</p>

            {keys.map(id => (
                <div className='res-dd-item-container'>

                    <span className='res-dd-store-icon'>
                        <BiStoreAlt />
                    </span>

                    <div className='res-dd-item'>
                        <Link to={`/restaurants/${upcoming[key].restaurantId}`}
                            className='ress-dd-restaurant'>
                            {upcoming[key].name}
                        </Link>

                        <div className='res-dd-line-item'>
                            <FaRegUser />
                            <p>Table for {upcoming[key].partySize} people</p>
                        </div>

                        <div className='res-dd-line-item'>
                            <FiClock />
                            <p>{upcoming[key].time}</p>
                        </div>

                        <div className='res-dd-line-item'>
                            <FiCalendar />
                            <p>{monthArray[upcoming[key].month]} {upcoming[key].day}, {upcoming[key].year}</p>
                        </div>

                        <div className='res-dd-buttons'>
                            <p>View</p>
                            <p>&bull;</p>
                            <p>Modify</p>
                            <p>&bull;</p>
                            <p className='res-dd-cancel-button'>Cancel</p>
                        </div>

                    </div>
                </div>
            ))}
            <Link to='/profile' className='res-dd-cancel-button'>View all reservations</Link>
        </div>
    )
}

export default ReservationsDropDown;