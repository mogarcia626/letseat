import React from 'react';
import ShowRatingsSummary from './show_rating_summary'
import ShowPhotos from './show_photos';
import ShowReviews from './show_reviews';
import ReviewLinks from './review_links';

function RestaurantContent(props) {
    console.log(props.restaurant)
    console.log(props.reviews)
    return (
        <div id='restaurant-content'>
            {/* <ReviewLinks /> */}
            <h1 className='show-header'>{props.restaurant.name}</h1>

            <ShowRatingsSummary
                ratings={props.restaurant.reviewAverages}
                cuisine={props.restaurant.cuisine}
            />

            <p>{props.restaurant.description}</p>
            
            {/* <ShowPhotos photos={restaurant.photoUrls} />     */}

            <ShowReviews
                reviews={props.reviews}
                ratings={props.restaurant.reviewAverages}
            />
        </div>

    )
}

export default RestaurantContent;
