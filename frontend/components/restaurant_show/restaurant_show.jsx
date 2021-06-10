import React from 'react';
import ShowBanner from './show_banner';

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

    selectBackground() {
        switch (this.props.location.restaurant.cuisine) {
            case 'Thai':
                return 'banner-thai'
            case 'Pizza':
                return 'banner-pizza'
            case 'Chinese':
                return 'banner-chinese'
            case 'Japanese':
                return 'banner-japanese'
            case 'Sea Food & Steakhouses':
                let choice = ['steak', 'sea']
                return `banner-${choice[Math.floor(Math.random()*2)]}`
            case 'Latin American Cuisine':
                return 'banner-latin'
            default:
                return 'banner-default';
        };
    };

    render() {   
        this.restaurant = this.props.restaurant
        if (this.state.loading) {
            return null
        } else {
            return (
                <div>
                    <ShowBanner cuisine={this.restaurant.cuisine}/>
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