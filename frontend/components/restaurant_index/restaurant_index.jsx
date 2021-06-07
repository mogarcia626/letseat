import React from 'react';
import { connect } from 'react-redux';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';


const mSTP = state => ({    
    // filters: this.ui.filters,
    restaurants: selectAllRestaurants(state),
});

const mDTP = dispatch => {
    return {
        requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        // receiveCurrentLocation: () => dispatch(receiveCurrentLocation(location)),
    };
};

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
        //placeholder until filters is setup
        this.state  = {
            filters: {
                city: 'Orlando, FL',
                cuisine: 'pizza' }
        }
    }

    componentDidMount() {
        this.props.requestAllRestaurants(this.state.filters)
    }
   
    render() {
        console.log(this.props)
        console.log(this.state)
        return(
            this.props.restaurants.map(restaurant => (
                <p key={`id-${restaurant.id}`} >{restaurant.name}</p>
            ))
        )
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex);




// import RestaurantIndex from './restaurant_index';