import React from 'react';
import { useSelector } from 'react-redux'
import UpcomingReservationItem from './upcoming_reservation_item';
import PastReservationItem from './past_reservation_item';

function UserProfilePage() {
    const reservations = useSelector((state) => state.entities.reservations)
    const user = useSelector((state) => state.entities.user[state.session.id])
    
    const upcoming = Object.values(reservations.upcoming);
    const past = Object.values(reservations.past);

    return (
        <div className='content-wrap' id='profile-page-main'>

            <div id='profile-page-header'>
                <p id='profile-header-text'>{user.firstName} {user.lastName}</p>
            </div>

            <div className='profile-reservation-section'>
                <p className='profile-page-title'>Upcoming Reservations</p>
                {upcoming.map( reservation =>
                    <UpcomingReservationItem
                        key={reservation.id} 
                        res={reservation}
                    />
                )}
            </div>

            <div className='profile-reservation-section'>
                <p className='profile-page-title'>Past Reservations</p>
                {past.map( reservation =>
                    <PastReservationItem
                        key={reservation.id} 
                        res={reservation}
                    />
                )}
            </div>
            
        </div>
    )
}

export default UserProfilePage;


