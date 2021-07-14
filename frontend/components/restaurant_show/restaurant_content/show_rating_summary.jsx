import React from 'react';
import RatingIcon from '../../general_use/rating_icon'
import { GoComment } from 'react-icons/go';
import { MdRestaurant } from 'react-icons/md';



function ShowRatingsSummary(props) {

    return(
        <div className='show-page-div' id='ratings-summary'>
            <div className='ratings-summary-with-icon'>
                <RatingIcon rating={props.ratings.average} />
                <p className='show-reviews-text'>{props.ratings.average}</p>
            </div>

            <div className='ratings-summary-with-icon'>
                <GoComment style={{marginRight: '4px'}} />
                <p className='show-reviews-text'>{props.ratings.count} Reviews</p>
            </div>

            <div className='ratings-summary-with-icon'>
                <MdRestaurant style={{marginRight: '4px'}} />
                <p className='show-reviews-text'>{props.cuisine}</p>
            </div>
        </div>
    )
}

export default ShowRatingsSummary