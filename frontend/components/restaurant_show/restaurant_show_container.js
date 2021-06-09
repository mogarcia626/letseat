import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { selectReviewsForRestaurant, selectSingleRestaurant } from '../../reducers/selectors';
import RestaurantShow from './restaurant_show';
import {requestSingleRestaurant} from '../../actions/restaurant_actions';

const mSTP = (state, { match }) => {
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