import React from 'react';
import ReviewItem from './review_item'
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ShowReviews(props) {
    const reviewIds = Object.keys(props.reviews);
    const ratings = props.ratings;
    let review;

    return(
        <div className='show-page-div'>
            <h2 className='show-section-header'>
                What {ratings.count} people are saying
            </h2>

            <h3 id='show-reviews-subheader'>
                Overall ratings and reviews
            </h3>
            <p className='show-reviews-text'>
                Reviews can only be made by diners who have eaten at this restaurant
            </p>

            <div id='show-reviews-average'>
                <RatingIcon rating={props.ratings.average} />
                <p>{props.ratings.average} based on recent ratings</p>
            </div>

            <div id='show-reviews-container'>
                <div id='show-reviews-subreview'>
                    <p>{props.ratings.food}</p>
                    <p>Food</p>
                </div>
                <hr className="vert-solid" />
                <div id='show-reviews-subreview'>
                    <p>{props.ratings.service}</p>
                    <p>Service</p>
                </div>
                <hr className="vert-solid" />                
                <div id='show-reviews-subreview'>
                    <p>{props.ratings.ambience}</p>
                    <p>Ambience</p>
                </div>                
                <hr className="vert-solid" />                
                <div id='show-reviews-subreview'>
                    <p>{props.ratings.value}</p>
                    <p>Value</p>
                </div>
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