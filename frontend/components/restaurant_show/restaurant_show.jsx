import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.requestSingleRestaurant(this.props.restaurantId)
        .then(() => this.setState({
            loading: false,
        })
    )
}

    render() {   
        this.restaurant = this.props.restaurant
        if (this.state.loading) {
            return null
        } else {
            return (
                <div>
                    <h1>{this.restaurant.name}</h1>
                    <p>{this.restaurant.cuisine}</p>
                    <p>{this.restaurant.city}</p>
                    
                    <div>
                        <p>{`${this.restaurant.reviewAverages.average} out of 5`}</p>
                        <p>{`${this.restaurant.reviewAverages.count} reviews`}</p>
                    </div>            
                </div>
            )        
        }
    }
}

export default RestaurantShow;