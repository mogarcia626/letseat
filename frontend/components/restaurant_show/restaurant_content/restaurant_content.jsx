import React from 'react';
import ShowRatingsSummary from './show_rating_summary'
import ShowPhotos from './photos/show_photos';
import ShowReviews from './reviews/show_reviews';
import ShowNavLinks from './show_nav_links';

function RestaurantContent(props) {
    
    return (
        <div id='restaurant-content'>

            <ShowNavLinks />
            
            <h1 className='show-header' id='Overview'>{props.restaurant.name}</h1>

            <hr className="solid" />

            <ShowRatingsSummary
                ratings={props.restaurant.reviewAverages}
                cuisine={props.restaurant.cuisine}
            />

            <p>{props.restaurant.description}</p>
            
            <ShowPhotos
                photos={props.restaurant.photoUrls}
            />    

            <ShowReviews
                reviews={props.reviews}
                ratings={props.restaurant.reviewAverages}
            />
        </div>

    )
}

export default RestaurantContent;
