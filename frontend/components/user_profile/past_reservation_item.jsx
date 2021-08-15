import React from 'react';
import { Link } from 'react-router-dom'
import { dayOfTheWeek, monthArray } from '../../util/general_utils'
import { FiMessageSquare } from 'react-icons/fi'

function PastReservationItem({ res }) {
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]
    
    return (        
        <div className='profile-reservation-item'>
            
            <Link to={`/restaurant/${res.restaurantId}`}>
            <img className='profile-reservation-photo'
                src={res.photoUrl}
            /></Link>

            <div className='profile-reservation-info'>

                <Link to={`/restaurant/${res.restaurantId}`}
                    className='profile-restaurant-title'
                >{res.name}</Link>

                <div>
                    <p className='profile-text'>
                        {day}, {month} {res.day} {res.year} at {res.time}
                    </p>
                    <p className='profile-text'>Table for {res.partySize} people</p>
                </div>
                <div id='profile-review-container'>
                    <FiMessageSquare size={20} />
                    <p className='profile-text' id='write-review-text'>
                        Write Review
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PastReservationItem;


