import React from 'react';

function UpcomingReservationItem(props) {
    const rest = props.restaurant
    const rez = props.reservation

    return (        
        <div className='profile-reservation-photo'>
            <span className='profile-photo-container' >
                <img className='profile-reservation-photo'
                    src={rest.photoUrls[0]}
                />
            </span>
            <div className='profile-reservation-info'>
                <p className='profile-restaurant-title'>{rest.name}</p>
                <p className='profile-text'>
                    {dayOfTheWeek(rez.year, rez.month, rez.day)}, {monthArray[rez.month]} {rez.day} {rez.year} at {rez.time}
                </p>
                <p className='profile-text'>Table for {rez.partySize} people</p>
            </div>
            {/* <div id='modify-reservation-buttons'>
                <p className='profile-text' id='profile-edit-reservation'>
                    View
                </p>
                <p className='profile-text' id='profile-edit-reservation'>
                    Modify
                </p>
                <p className='profile-text' id='profile-edit-reservation'>
                    Cancel
                </p>
            </div> */}
        </div>
    )
}

export default UpcomingReservationItem;


