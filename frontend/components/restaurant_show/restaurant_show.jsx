import React from 'react';
import ShowBanner from './show_banner';
import RestaurantContent from './restaurant_content/restaurant_content';
import ReservationFormContainer from './reservation_form/reservation_form_container';

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
        }))
    }

    render() {   
        
        if (this.state.loading) {
            return null
        } else {
            
            return (
                <div id='restaurant-show'>
                    <ShowBanner
                        cuisine={this.props.restaurant.cuisine}
                    />
                    <div id='show-content'>
                        <RestaurantContent 
                            restaurant={this.props.restaurant}
                            reviews={this.props.reviews}
                        />
                        <ReservationFormContainer
                            restaurantId={this.props.restaurantId}
                        />                        
                    </div>

                </div>
            )        
        }
    }
}

export default RestaurantShow;