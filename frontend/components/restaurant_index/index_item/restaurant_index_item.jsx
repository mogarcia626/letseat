import React from 'react';
import { withRouter } from 'react-router-dom';
import RatingIcon from '../../general_use/rating_icon'

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
            <div className='index-image-container'>
                <img className='index-image' src={restaurant.photoUrls[0]} alt="" />
            </div>
            <p className='show-title'>{restaurant.name}</p>

            <div className='subindex-review-summary'>
                <RatingIcon rating={restaurant.reviewAverages.average}/>
                <p>{`${restaurant.reviewAverages.count} reviews`}</p>
            </div>

            <div className='filter-summary'>
                <p>{restaurant.cuisine}</p>
                <p>&#8729;</p>
                <p>{restaurant.city}</p>
            </div>

        </div>    
        )      
    }
}

export default withRouter(RestaurantIndexItem);