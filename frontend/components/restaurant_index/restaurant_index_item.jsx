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
        let reviewAverages = this.props.restaurant.reviewAverages
        return(
        <div 
            className='index-item'
            onClick={this.handleClick}
        >
            <h2>[Image Here]</h2>
            <p>{this.props.restaurant.name}</p>
            <div>
                <p>{`${reviewAverages['average']} out of 5`}</p>
                <p>{`${reviewAverages['count']} reviews`}</p>
            </div>
                <p>{this.props.restaurant.cuisine}</p>
                <p>{this.props.restaurant.city}</p>

        </div>    
        )      
    }
}

export default withRouter(RestaurantIndexItem);