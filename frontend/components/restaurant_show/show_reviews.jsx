import React from 'react';
import ReviewItem from './review_item';
import RatingIcon from '../restaurant_index/index_item/rating-icon';
import BarGraphRatingsSummary from './bar_graph_ratings_summary';

function ShowReviews(props) {
    const reviewIds = Object.keys(props.reviews);
    const reviewAvgs = reviewIds.map( id => {            
        return (
            (props.reviews[id].foodRating + props.reviews[id].serviceRating + props.reviews[id].valueRating + props.reviews[id].ambienceRating) / 4
        )
    })
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

            <div className='bar-graph-container'>
                <div>
                    <p className='show-reviews-text'>
                        Reviews can only be made by diners who have eaten at this restaurant
                    </p>

                    <div id='show-reviews-average'>
                        <RatingIcon rating={props.ratings.average} />
                        <p className='show-reviews-text'>{props.ratings.average} based on recent ratings</p>
                    </div>

                    <div id='show-reviews-container'>
                        <div id='show-reviews-subreview'>
                            <p className='review-cat-text'>{props.ratings.food}</p>
                            <p className='show-reviews-text'>Food</p>
                        </div>
                        <div className="vert-solid"></div>
                        <div id='show-reviews-subreview'>
                            <p className='review-cat-text'>{props.ratings.service}</p>
                            <p className='show-reviews-text'>Service</p>
                        </div>
                        <div className="vert-solid"></div>               
                        <div id='show-reviews-subreview'>
                            <p className='review-cat-text'>{props.ratings.ambience}</p>
                            <p className='show-reviews-text'>Ambience</p>
                        </div>                
                        <div className="vert-solid"></div>                
                        <div id='show-reviews-subreview'>
                            <p className='review-cat-text'>{props.ratings.value}</p>
                            <p className='show-reviews-text'>Value</p>
                        </div>
                    </div>
                </div>
                <BarGraphRatingsSummary reviewAvgs={reviewAvgs} />
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