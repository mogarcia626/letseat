import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';
import { dayOfTheWeek, monthArray } from '../../util/general_utils'
import { FiMessageSquare } from 'react-icons/fi'

function PastReservationItem({ res }) {
    const dispatch = useDispatch();
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]

    function reviewModal() {
        dispatch(openModal( {modal:'review', data: res} ))
    }
    
    return (        
        <div className='profile-reservation-item'>
            
            <Link to={`/restaurants/${res.restaurantId}`}>
            <img className='profile-reservation-photo'
                src={res.photoUrl}
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
                <div className='write-review'
                    onClick={()=>reviewModal()}
                >
                    <FiMessageSquare size={20} />
                    <p>
                        Write Review
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PastReservationItem;


