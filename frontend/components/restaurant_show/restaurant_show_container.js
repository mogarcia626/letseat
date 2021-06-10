import { connect } from 'react-redux';
import { selectSingleRestaurant } from '../../reducers/selectors';
import {requestSingleRestaurant} from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';

const mSTP = (state, { match }) => {
    // debugger
    const restaurantId = parseInt(match.params.restaurantId);
    const restaurant = selectSingleRestaurant(state.entities, restaurantId);
    return {
        restaurantId,
        restaurant
    }
};

const mDTP = dispatch => ({
    requestSingleRestaurant: id => dispatch(requestSingleRestaurant(id))
});

export default connect(mSTP, mDTP)(RestaurantShow)