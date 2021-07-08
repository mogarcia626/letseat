import React from 'react';
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ShowReviews(props) {
    const reviewIds = Object.keys(props.reviews);
    const ratings = props.ratings;
    let review;

    return(
        <div>
            <h2>What {ratings.count} people are saying</h2>
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

            {reviewIds.map((id) => {
                review = props.reviews[id]
                
                return(
                    <div key={id}>
                        <div>
                            {review.reviewer.firstName} {review.reviewer.lastName}
                        </div>

                        <div>
                            <RatingIcon rating={(review.foodRating + review.serviceRating + review.valueRating + review.ambienceRating)/4} />
                            <div>
                                <p>Overall</p><p>{(review.foodRating + review.serviceRating + review.valueRating + review.ambienceRating) / 4}</p>
                                <p>Food</p><p>{review.foodRating}</p>
                                <p>Service</p><p>{review.serviceRating}</p>
                                <p>Ambience</p><p>{review.ambienceRating}</p>
                            </div>
                        </div>
                </div>                
                )
            })}



        </div>
    )
}

export default ShowReviews