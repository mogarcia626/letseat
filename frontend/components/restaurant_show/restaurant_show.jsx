import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSingleRestaurant(this.props.restaurantId)
    }

    render() {
        this.restaurant = this.props.restaurant
        return (
            <div>
                <h1>{this.restaurant.name}</h1>
                <p>{this.restaurant.cuisine}</p>
                <p>{this.restaurant.city}</p>
                
                <div>
                    <p>{`${this.restaurant.reviewAverages['average']} out of 5`}</p>
                    <p>{`${this.restaurant.reviewAverages['count']} reviews`}</p>
                </div>              

            </div>
        )
    }
}

export default RestaurantShow;