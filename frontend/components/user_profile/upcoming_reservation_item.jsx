import React from 'react';
import { dayOfTheWeek, monthArray } from '../../util/general_utils'

function UpcomingReservationItem({ res }) {
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
            <div id='modify-reservation-buttons'>
                <p className='profile-text' id='profile-edit-reservation'>
                    View
                </p>
                <p className='profile-text' id='profile-edit-reservation'>
                    Modify
                </p>
                <p className='profile-text' id='profile-edit-reservation'>
                    Cancel
                </p>
            </div>
        </div>
    )
}

export default UpcomingReservationItem;


