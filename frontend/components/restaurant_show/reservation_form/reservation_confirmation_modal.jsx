import React from 'react';
import { connect } from 'react-redux';
// import { closeModal } from '../../../actions/modal_actions'

const mSTP = ({ ui }) => ({
    reservation: entities.reservation,
});

const mDTP = dispatch => ({
    // closeModal: () => dispatch(closeModal())
});

class ReservationConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        return (
            <div>
                <p>{reservation.id}</p>
                <p>{reservation.time}</p>
                <p>{reservation.day}</p>
                <p>{reservation.partySize}</p>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(ReservationConfirmation);

