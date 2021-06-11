import React from 'react';
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ShowRatingsSummary(props) {

    return(
        <div className='ratings-summary'>
            <RatingIcon rating={props.ratings.average} />
            <p>{props.ratings.count} Rreviews</p>
            <p>{props.cuisine}</p>
        </div>
    )
}

export default ShowRatingsSummary