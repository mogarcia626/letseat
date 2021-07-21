import React from 'react';
import { connect } from 'react-redux';
// import { closeModal } from '../../../actions/modal_actions'

const mSTP = ({ ui }) => ({
    reservation: ui.modal.data,
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
                <p>{this.props.reservation.id}</p>
                <p>{this.props.reservation.time}</p>
                <p>{this.props.reservation.day}</p>
                <p>{this.props.reservation.partySize}</p>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(ReservationConfirmation);

