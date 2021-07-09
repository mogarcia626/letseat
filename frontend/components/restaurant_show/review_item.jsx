import React from 'react';
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ReviewItem(props) {
    const review = props.review
    const average = (review.foodRating + review.serviceRating + review.valueRating + review.ambienceRating) / 4;

    return(
        <div className='review-item'>

            <div className='reviewer-info'>
                <span className='dot'>{review.reviewer.firstName[0]}{review.reviewer.lastName[0]}</span>
                <div className='reviewer-name-container'>
                    <p className='show-reviews-text'>
                        {review.reviewer.firstName}
                    </p>
                    <p className='show-reviews-text'>
                        {review.reviewer.lastName}
                    </p>
                </div>
            </div>

            <div className='review-item-content'>

                <div className='review-item-row'>
                    <RatingIcon rating={average} />
                    <p className='middot-divider'>&middot;</p>
                    <p>Reviewed on {review.createdAt}</p>
                </div>

                <div className='review-item-row'>
                    <div>
                        <p className='review-cat-text'>Overall</p>
                        <p className='review-cat-num'>{average}</p></div>
                    <p className='middot-divider'>&middot;</p>
                    <div>
                        <p className='review-cat-text'>Food</p>
                        <p className='review-cat-num'>{review.foodRating}</p>
                    </div>
                    <p className='middot-divider'>&middot;</p>
                    <div>
                        <p className='review-cat-text'>Service</p>
                        <p className='review-cat-num'>{review.serviceRating}</p>
                    </div>
                    <p className='middot-divider'>&middot;</p>
                    <div>
                        <p className='review-cat-text'>Ambience</p>
                        <p className='review-cat-num'>{review.ambienceRating}</p>
                    </div>
                </div>

                <p>{review.comment}</p>
            </div>

        </div>                
    )
}

export default ReviewItem