import React from 'react';
import { dayOfTheWeek, monthArray } from '../../util/general_utils'
import { FiMessageSquare } from 'react-icons/fi'

function PastReservationItem({ res }) {
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]
    
    return (        
        <div className='profile-reservation-photo'>
            <span className='profile-photo-container' >
                <img className='profile-reservation-photo'
                    src={res.photoUrl}
                />
            </span>
            <div className='profile-reservation-info'>
                <p className='profile-restaurant-title'>{res.name}</p>
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
    )
}

export default PastReservationItem;


