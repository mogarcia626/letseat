import React from 'react';
import { useSelector } from 'react-redux'
import UpcomingReservationItem from './upcoming_reservation_item';
import PastReservationItem from './past_reservation_item';

function UserProfilePage() {
    const ent =  useSelector((state) => state.entities)
    const reservations = useSelector((state) => state.entities.reservations)
    const restaurants = useSelector((state) => state.entities.restaurants)
    const user = useSelector((state) => state.entities.user[state.session.id])
    // console.log('reservations')
    // console.log(reservations)
    // console.log('')
    // console.log('restaurants')
    // console.log(restaurants)
    // console.log('')
    // console.log('user')
    // console.log(user)
    // console.log('')
    // console.log(ent)
    return (
        <div className='content-wrap' id='profile-page-main'>

            <div id='profile-page-header'>
                <p id='profile-header-text'>{user.firstName} {user.lastName}</p>
            </div>

            <div className='profile-reservation-section'>
                <p className='profile-page-title'>Upcoming Reservations</p>
                {/* {reservations.upcoming.map( reservation => {
                    <UpcomingReservationItem 
                        reservation={reservation}
                        restaurant={restaurants[reservation[restauranId]]}
                    />
                })} */}
            </div>

            <div className='profile-reservation-section'>
                <p className='profile-page-title'>Past Reservations</p>
                {/* {reservations.past.map( reservation => {
                    <UpcomingReservationItem 
                        reservation={reservation}
                        restaurant={restaurants[reservation[restauranId]]}
                    />
                })} */}
            </div>
            
        </div>
    )
}

export default UserProfilePage;


