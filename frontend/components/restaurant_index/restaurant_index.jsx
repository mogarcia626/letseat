import React from 'react';
import { connect } from 'react-redux';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';


const mSTP = state => ({ 
    restaurants: selectAllRestaurants(state),
    filters: state.ui.filters,
    
});

const mDTP = dispatch => {
    return {
        requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        
    };
};

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.requestAllRestaurants(this.props.filters)
    }
   
    render() {
        return(
            this.props.restaurants.map( (restaurant, i) => (
                <p key={`id-${i}`} >{restaurant.name}</p>
            ))
        )
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex);



