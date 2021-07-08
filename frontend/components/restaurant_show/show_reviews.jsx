import React from 'react';
import ReviewItem from './review_item'
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ShowReviews(props) {
    const reviewIds = Object.keys(props.reviews);
    const ratings = props.ratings;
    let review;

    return(
        <div>
            <h2 className='show-section-header'>
                What {ratings.count} people are saying
            </h2>

            <h3>Overall ratings and reviews</h3>
            <p>Reviews can only be made by diners who have eaten at this restaurant</p>

            <div>
                <RatingIcon rating={props.ratings.average} />
                <p>{props.ratings.average} based on recent ratings</p>
            </div>

            <div>
                <div>{props.ratings.food}</div><p>Food</p>
                <div>{props.ratings.service}</div><p>Service</p>
                <div>{props.ratings.ambience}</div><p>Ambience</p>
                <div>{props.ratings.value}</div><p>Value</p>
            </div>

            {reviewIds.map( id => {            
                return <ReviewItem 
                    key={id}
                    review={props.reviews[id]} 
                />
            })}
        </div>
    )
}

export default ShowReviews