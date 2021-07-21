import React from 'react';
import { useSelector, useEffect, connect } from 'react-redux'
import { updateSearchFilter, updateLocationFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';

const mSTP = (state) => {
    return {
        filters: state.ui.filters,
        restaurants: state.entities.restaurants
    };
};

const mDTP = dispatch => {
    return {
        requestAllRestaurants: (filters) => dispatch(requestAllRestaurants(filters)),
        updateSearchFilter: (search) => dispatch(updateSearchFilter(search)),
        updateLocationFilter: (city) => dispatch(updateLocationFilter(city)),
    };
};

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    
    componentDidMount() {
        this.props.requestAllRestaurants(this.props.filters)
        .then(() => this.setState({
            loading: false,
        }))
    } 
    
    render() {
        if (this.state.loading) {
            return null
        } else {
            const restaurants = Object.values(this.props.restaurants)
        return (
            <div className='container'>
                {restaurants.map((restaurant, i) => {
                    return (
                        <p key={restaurant.id}>{`${i}: ${restaurant.name}`}</p>
                    )
                })}
            </div>
        )}
    };

}

export default connect(mSTP, mDTP)(RestaurantSearchIndex);


