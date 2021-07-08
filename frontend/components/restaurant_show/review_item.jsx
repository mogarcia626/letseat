import React from 'react';
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ReviewItem(props) {
    const review = props.review
    const average = (review.foodRating + review.serviceRating + review.valueRating + review.ambienceRating) / 4;

    return(
        <div className='review-item'>

            <div className='reviewer-info'>
                <span className='dot'>{review.reviewer.firstName[0]}{review.reviewer.lastName[0]}</span>
                {review.reviewer.firstName} {review.reviewer.lastName}
            </div>

            <div className='review-item-content'>

                <div className='review-item-row'>
                    <RatingIcon rating={average} />
                    <h3>.</h3>
                    <p>Reviewed on {review.createdAt}</p>
                </div>

                <div className='review-item-row'>
                    <p>Overall</p><p>{average}</p>
                    <h3>.</h3>
                    <p>Food</p><p>{review.foodRating}</p>
                    <h3>.</h3>
                    <p>Service</p><p>{review.serviceRating}</p>
                    <h3>.</h3>
                    <p>Ambience</p><p>{review.ambienceRating}</p>
                </div>

                <p>{review.comment}</p>
            </div>

        </div>                
    )
}

export default ReviewItem