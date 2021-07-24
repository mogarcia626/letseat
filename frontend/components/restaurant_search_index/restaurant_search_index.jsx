import React from 'react';
import RestaurantSearchIndexItem from './restaurant_search_index_item';
import { connect } from 'react-redux'
import { updateSearchFilter, updateLocationFilter } from '../../actions/filter_actions';
import { requestAllRestaurants } from '../../actions/restaurant_actions';

const mSTP = (state) => ({
    filters: state.ui.filters,
    restaurants: state.entities.restaurants
});

const mDTP = dispatch => ({
    requestAllRestaurants: (filters) => dispatch(requestAllRestaurants(filters)),
    updateSearchFilter: (search) => dispatch(updateSearchFilter(search)),
    updateLocationFilter: (city) => dispatch(updateLocationFilter(city)),
});

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
        let { city, search } = this.props.filters;
        if (!city === '') city = ' in ' + city;
        
        if (this.state.loading) {
            return null
        } else {
        const restaurants = Object.values(this.props.restaurants)
        return (
            <div className='flex-column'>
                <h2>You seached for {search}{city}</h2>
                <p>{restaurants.length} restaurants available{city}</p>
                {restaurants.map( restaurant => (
                    <RestaurantSearchIndexItem
                        key={restaurant.id}
                        restaurant={restaurant}
                        time={this.props.filters.time}
                    />
                ))}
            </div>
        )}
    };

}

export default connect(mSTP, mDTP)(RestaurantSearchIndex);


