import { connect } from 'react-redux';
import ReservationConfirmation from './reservation_confirmation_modal';

const mSTP = state => ({    
    reservation: state.ui.modal.data.reservation,
    user: state.entities.user[state.session.id],
    restId: state.ui.modal.data.restaurantId,
    restaurant: state.entities.restaurants,
});
const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(ReservationConfirmation);