import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const restaurantId = this.props.restaurant.id;
        this.props.history.push(`/restaurants/${restaurantId}`);
    }

    render() {
        let restaurant = this.props.restaurant
        return(
        <div 
            className='index-item'
            onClick={this.handleClick}
        >
            <h2>[Image Here]</h2>
            <p>{restaurant.name}</p>
            <div>
                <p>{`${restaurant.reviewAverages.average} out of 5`}</p>
                <p>{`${restaurant.reviewAverages.count} reviews`}</p>
            </div>
                <p>{restaurant.cuisine}</p>
                <p>{restaurant.city}</p>

        </div>    
        )      
    }
}

export default withRouter(RestaurantIndexItem);