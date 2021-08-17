import React from 'react';
import { useSelector } from 'react-redux';
import { monthArray, dayOfTheWeek } from '../../../util/general_utils';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { FaRegUser, FaCheckCircle } from 'react-icons/fa';
// import { closeModal } from '../../../actions/modal_actions'

function ReservationConfirmation() {
        
    const {reservation, restaurantId} = useSelector(state => state.ui.modal.data)
    const rest = useSelector(state => state.entities.restaurants[restaurantId])
    const firstName = useSelector(state => state.entities.user[state.session.id].firstName)
    console.log(reservation)
    return (
        <div id='reservation-confirmation-container'>
            <div id='confirmation-id'>
                <span id='reservation-confirmation-check-circle'><FaCheckCircle fill={'#39A25E'} size={40}/></span>
                <div id='confirmation-id-text-container'>
                    <p className='confirmation-id-text-bold'>Thanks {firstName}! Your reservation is confirmed.</p>
                    <p className='confirmation-id-text'>Confirmation #{reservation.id}</p>
                </div>
            </div>

            <div id='reservation-restaurant-container'>
                <div id='reservation-confirmation-photo-container' >
                    <img id='reservation-confirmation-photo' src={rest.photoUrls[0]} />
                </div>
                <div id='reservation-restaurant-info'>
                    <h3 id='reservation-restaurant-title'>
                        {rest.name}
                    </h3>
                    <div id='reservation-confirmation-info'>
                        <div className='reservation-confirmation-detail'>
                            <FiCalendar size={16} />
                            <p className='confirmation-text'>
                                {dayOfTheWeek(reservation.year, reservation.month, reservation.day)},
                                {monthArray[reservation.month]} {reservation.day}</p>
                        </div>
                        <div  className='reservation-confirmation-detail'>
                            <FiClock size={16} />
                            <p className='confirmation-text'>{reservation.time}</p>
                        </div>
                        <div  className='reservation-confirmation-detail'>
                            <FaRegUser size={16} />
                            <p className='confirmation-text'>{reservation.partySize} people</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='change-reservation-buttons'>
                <div className='change-reservation-button' id='modify-button'>Modify</div>
                <div className='change-reservation-button'>Cancel</div>
            </div> */}
        </div>            
    )
};

export default ReservationConfirmation;

