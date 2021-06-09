import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { selectReviewsForRestaurant, selectRestaurant } from '../../reducers/selectors';
import RestaurantShow from './restaurant_show';

const mSTP = (state, { match }) => {
    const restaurantId = parseInt(match.params.restaurantId);
    console.log(restaurantId)
    const restaurant = selectRestaurant(state.entities, restaurantId);
    console.log(restaurant)
    const reviews = selectReviewsForRestaurant(state);
    console.log(reviews)
    return {
        restaurantId,
        restaurant,
        reviews
    }
};

const mDTP = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mSTP, mDTP)(RestaurantShow)