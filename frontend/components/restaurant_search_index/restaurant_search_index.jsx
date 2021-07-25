import React from 'react';
import RestaurantSearchIndexItem from './restaurant_search_index_item';
import SearchBarContainer from '../search_bar/search_bar_container'

class RestaurantSearchIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: this.props.filters,
            loading: true,
        }
    }
    
    componentDidMount() {
        this.props.requestAllRestaurants(this.state.filters)
        .then(() => this.setState({
            loading: false,
        }))
    } 
    
    render() {
        let { city, search } = this.props.filters;
        if (search !== '') search = `You seached for "${search}" in ${city}`;
        if (city !== '') city = ` in ${city}`
        
        if (this.state.loading) {
            return null
        } else {
        const restaurants = Object.values(this.props.restaurants)
        return (
            <div className='content-wrap'>
                <SearchBarContainer id='search-form-general'/>
                <div className='search-result-page-container'>
                    <p id='you-searched-for'>{search}</p>
                    <p id='number-restaruants-available'>{restaurants.length} restaurants available{city}</p>
                    {restaurants.map( restaurant => (
                        <RestaurantSearchIndexItem
                            key={restaurant.id}
                            restaurant={restaurant}
                            time={this.props.filters.time}
                        />
                    ))}
                </div>
            </div>
        )}
    };

}

export default RestaurantSearchIndex;


