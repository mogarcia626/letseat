import React from 'react';
import ShowBanner from './show_banner';
import ShowRatingsSummary from './show_rating_summary'
import ShowPhotos from './show_photos';
import ShowReviews from './show_reviews';

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
                <div className='container'>
                    <ShowBanner cuisine={this.restaurant.cuisine}/>
                    <h1 className='show-header'>{this.restaurant.name}</h1>

                    <ShowRatingsSummary
                        ratings={this.props.restaurant.reviewAverages}
                        cuisine={this.props.restaurant.cuisine}
                    />

                    <p>{this.restaurant.description}</p>
                    
                    {/* <ShowPhotos photos={this.props.restaurant.photoUrls} />     */}

                    <ShowReviews
                    // debugger
                        // reviews={this.state.reviews}
                        ratings={this.props.restaurant.reviewAverages}
                    />

                </div>
            )        
        }
    }
}

export default RestaurantShow;