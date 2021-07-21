import React from 'react';
import { connect } from 'react-redux';
import { monthArray } from '../../../util/general_utils';
// import { closeModal } from '../../../actions/modal_actions'

const mSTP = ({ ui }) => ({
    reservation: ui.modal.data,
});
const mDTP = dispatch => ({
});

class ReservationConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        const res = this.props.reservation
        return (
            <div>
                <p>{res.id}</p>
                <p>{res.time}</p>
                <p>{monthArray[res.month]} {res.day} {res.year}</p>
                <p>Party of {res.partySize}</p>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(ReservationConfirmation);

