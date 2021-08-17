import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { requestAllReservations } from '../../actions/reservation_actions'
import { requestReviews } from '../../actions/review_actions';
import { requestUser } from '../../actions/session_actions';
import UpcomingReservationItem from './upcoming_reservation_item';
import PastReservationItem from './past_reservation_item';

function UserProfilePage() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const userId = useSelector(state => state.session.id)    
    const reservations = useSelector(state => state.entities.reservations)
    const reviews = useSelector(state => state.entities.reviews)
    const user = useSelector(state => state.entities.user)
    
    useEffect( () => {
        dispatch(requestAllReservations('all'))
        .then( () => dispatch(requestReviews()) )
        .then( () => dispatch(requestUser(userId)) )
        .then( () => setLoading(false) )
    }, [])

    function upcomingComponents() {
        if (reservations.upcoming) {
            const upcoming = Object.values(reservations.upcoming);
            return (
                <div>
                    {upcoming.map( reservation =>
                        <UpcomingReservationItem
                            key={reservation.id} 
                            res={reservation}
                        />
                    )}
                </div>
            )
        } else {
            return <p>You have no upcoming reservations</p>
        }
    }

    function pastComponents() {
        if (reservations.past) {
            const past = Object.values(reservations.past);
            return (
                <div>
                    {past.map( reservation =>
                    <PastReservationItem
                        key={reservation.id} 
                        res={reservation}
                        review={reviews[reservation.id]}
                    />
                )}
                </div>
            )
        } else {
            return <p>You have no past reservations</p>
        }
    }

    if (loading) {
        return <div className="loader"></div>
    } else {
        return (
            <div className='content-wrap' id='profile-page-main'>

                <div id='profile-page-header'>
                    <h2>{user.firstName} {user.lastName}</h2>
                </div>

                <div className='profile-reservation-section'>
                    <div className='profile-page-title-container'>
                        <h3 className='profile-page-title'>Upcoming Reservations</h3>
                    </div>
                    
                    {upcomingComponents()}

                </div>

                <div className='profile-reservation-section'>
                    <div className='profile-page-title-container'>
                        <h3 className='profile-page-title'>Past Reservations</h3>
                    </div>
                    
                    {pastComponents()}

                </div>
                
            </div>
        )
    }
}

export default UserProfilePage;


