import { connect } from 'react-redux';
import ReservationConfirmation from './reservation_confirmation_modal';

const mSTP = state => ({    
    user: state.entities.user[state.session.id],
    restaurant: state.entities.restaurants,
});
const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(ReservationConfirmation);