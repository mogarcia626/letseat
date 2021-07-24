import React from 'react';
import RatingIcon from '../general_use/rating_icon';

function RestaurantSearchIndexItem(props) {
    const rest = props.restaurant
    const time = props.time

    return (        
        <div className='search-result-container'>
            <span className='result-image-container' >
                <img className='result-photo'
                    src={rest.photoUrls[0]}
                />
            </span>

            <div className='result-restaurant-info'>

                <p className='result-restaurant-title'>{rest.name}</p>

                <div className='result-rating-info'>
                    <RatingIcon rating={rest.reviewAverages.average}/>
                    <p className='result-text'>({rest.reviewAverages.count})</p>
                </div>

                <div className='result-filter-info'>
                    <p className='result-text'>{rest.cuisine}</p>
                    <p className='result-text'>&middot;</p>
                    <p className='result-text'>{rest.city}</p>
                </div>


                
                <p className='profile-text'></p>
            </div>
            {/* <div id='modify-reservation-buttons'>
                <p className='profile-text' id='profile-edit-reservation'>
                    View
                </p>
                <p className='profile-text' id='profile-edit-reservation'>
                    Modify
                </p>
                <p className='profile-text' id='profile-edit-reservation'>
                    Cancel
                </p>
            </div> */}
        </div>
    )
}

export default RestaurantSearchIndexItem;


