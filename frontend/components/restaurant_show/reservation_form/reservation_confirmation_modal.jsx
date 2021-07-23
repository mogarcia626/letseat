import React from 'react';
import { connect } from 'react-redux';
import { monthArray } from '../../../util/general_utils';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { FaRegUser, FaCheckCircle } from 'react-icons/fa';
// import { closeModal } from '../../../actions/modal_actions'

const mSTP = state => ({    
    reservation: state.ui.modal.data.reservation,
    user: state.entities.user[state.session.id],
    restId: state.ui.modal.data.restaurantId,
    restaurant: state.entities.restaurants,
});
const mDTP = dispatch => ({
});

class ReservationConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        const rez = this.props.reservation
        const rest = this.props.restaurant[this.props.restId]
        console.log(rest)
        console.log(this.props.user)
        // console.log(rest.photoUrls[0])
        return (
            <div>
                <div>
                    <FaCheckCircle />
                    <div>
                        <p>Thanks {this.props.user.firstName}! Your reservation is confirmed.</p>
                        <p>Confirmation #{rez.id}</p>
                    </div>
                </div>

                <div>
                    {/* <img src={rest.photoUrls[0]} /> */}
                    <div>
                        <h3>{rest.name}</h3>
                        <div>
                            <div>
                                <FiCalendar />
                                <p>{rez.month} {rez.day}, {rez.year}</p>
                            </div>
                            <div>
                                <FiClock />
                                <p>{rez.time}</p>
                            </div>
                            <div>
                                <FaRegUser />
                                <p>{rez.partySize}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <p>{rez.id}</p>
                <p>{rez.time}</p>
                <p>{monthArray[rez.month]} {rez.day} {rez.year}</p>
                <p>Party of {rez.partySize}</p>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(ReservationConfirmation);

