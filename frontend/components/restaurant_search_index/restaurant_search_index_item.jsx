import React from 'react';
import { useHistory } from 'react-router-dom'
import RatingIcon from '../general_use/rating_icon';

function RestaurantSearchIndexItem(props) {
    const rest = props.restaurant
    const time = props.time
    const history = useHistory()
    
    return (   
        <div className='search-result-container'
            onClick={() => history.push(`restaurants/${rest.id}`) }
        >
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

                <p className='result-text'>
                    {rest.cuisine} &middot; {rest.city}
                </p>
            
            </div>

        </div>
    )
}

export default RestaurantSearchIndexItem;


