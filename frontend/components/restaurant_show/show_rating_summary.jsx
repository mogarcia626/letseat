import React from 'react';
import RatingIcon from '../restaurant_index/index_item/rating-icon'
import { GoComment } from 'react-icons/go';
import { MdRestaurant } from 'react-icons/md';



function ShowRatingsSummary(props) {

    return(
        <div id='ratings-summary'>
            <div>
                <RatingIcon rating={props.ratings.average} />
                <p>{props.ratings.average}</p>
            </div>

            <div>
                <GoComment />
                <p>{props.ratings.count} Reviews</p>
            </div>

            <div>
                <MdRestaurant />
                <p>{props.cuisine}</p>
            </div>
        </div>
    )
}

export default ShowRatingsSummary