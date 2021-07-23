import React from 'react';
import { monthArray, dayOfTheWeek } from '../../../util/general_utils';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { FaRegUser, FaCheckCircle } from 'react-icons/fa';
// import { closeModal } from '../../../actions/modal_actions'

class ReservationConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        const rez = this.props.reservation
        const rest = this.props.restaurant[this.props.restId]
        
        return (
            <div id='reservation-confirmation-container'>
                <div id='confirmation-id'>
                    <span id='reservation-confirmation-check-circle'><FaCheckCircle fill={'#39A25E'} size={40}/></span>
                    <div id='confirmation-id-text-container'>
                        <p className='confirmation-id-text-bold'>Thanks {this.props.user.firstName}! Your reservation is confirmed.</p>
                        <p className='confirmation-id-text'>Confirmation #{rez.id}</p>
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
                                <p className='confirmation-text'>{dayOfTheWeek(rez.year, rez.month, rez.day)}, {monthArray[rez.month]} {rez.day}</p>
                            </div>
                            <div  className='reservation-confirmation-detail'>
                                <FiClock size={16} />
                                <p className='confirmation-text'>{rez.time}</p>
                            </div>
                            <div  className='reservation-confirmation-detail'>
                                <FaRegUser size={16} />
                                <p className='confirmation-text'>{rez.partySize} people</p>
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
    }
};

export default ReservationConfirmation;

