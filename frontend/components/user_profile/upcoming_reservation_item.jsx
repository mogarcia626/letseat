import React from 'react';
import { Link } from 'react-router-dom'
import { dayOfTheWeek, monthArray } from '../../util/general_utils'

function UpcomingReservationItem({ res }) {
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]
    
    return (  
        <div className='profile-reservation-container'>      
        <div className='profile-reservation-item'>
            
            <Link to={`/restaurants/${res.restaurantId}`}>
            <img className='profile-reservation-photo'
                src={res.photoUrl}
                alt=""
            /></Link>
                
            <div className='profile-reservation-info'>

                <Link to={`/restaurants/${res.restaurantId}`}
                    className='profile-restaurant-title'
                >{res.name}</Link>

                <div>
                    <p className='profile-text'>
                        {day}, {month} {res.day} {res.year} at {res.time}
                    </p>
                    <p className='profile-text'>Table for {res.partySize} people</p>
                </div>
                <div className='res-buttons'>
                    <p className='res-modify-button'>
                        View
                    </p>
                    <p className='res-modify-button'>
                        Modify
                    </p>
                    <p className='res-dd-cancel-button'>
                        Cancel
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UpcomingReservationItem;


