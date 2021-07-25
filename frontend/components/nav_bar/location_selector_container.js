import { connect } from 'react-redux';
import { updateLocationFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import LocationSelector from './location_selector';

const mSTP = (state) => {
    return {
        filters: state.ui.filters,
    };
};

const mDTP = dispatch => {
    return {
        updateLocationFilter: (city) => dispatch(updateLocationFilter(city)),
    };
};

export default connect(mSTP, mDTP)(LocationSelector);