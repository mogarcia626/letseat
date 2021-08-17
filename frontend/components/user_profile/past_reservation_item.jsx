import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';
import { dayOfTheWeek, monthArray } from '../../util/general_utils'
import StarRadio from './star_radio';
import { FiMessageSquare } from 'react-icons/fi'

function PastReservationItem({ res, review }) {
    const dispatch = useDispatch();
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]

    function reviewModal(action, existingReview = null) {
        dispatch(openModal( {modal:'review', data: {res, action, existingReview}} ))
    }
    
    return (
        <div className='profile-reservation-container'>     
        <div className='profile-reservation-item'>
            
            <Link to={`/restaurants/${res.restaurantId}`}>
            <img className='profile-reservation-photo'
                src={res.photoUrl}
            /></Link>

            <div className='profile-reservation-info'>

                <Link to={`/restaurants/${res.restaurantId}`}
                    className='profile-restaurant-title'
                >{res.name}</Link>

                <div>
                    <p className='profile-text'>
                        {day}, {month} {res.day} {res.year} at {res.time}
                    </p>
                    <p className='profile-text'>Table for {res.partySize} people</p>
                </div>

                {review ? 
                    <div className='write-review'
                        onClick={()=>reviewModal('put', review)}
                    >
                        <FiMessageSquare size={20} />
                        <p>Edit Your Review</p>
                    </div>
                :
                    <div className='write-review'
                        onClick={()=>reviewModal('post')}
                    >
                        <FiMessageSquare size={20} />
                        <p>Write Review</p>
                    </div>
                }
                
            </div>
        </div>
            {!review ? null :

                <div className='profile-review-item'>
                    <div className='rating-item-container'>
                    
                        <div className='rating-category'>
                            <p className='rating-item-label'>Food</p>
                            <div className='star-review'>
                                {[1,2,3,4,5].map( i =>
                                    <div key={i}>
                                        <StarRadio val={i} size={16} rating={review.foodRating} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='rating-category'>
                            <p className='rating-item-label'>Service</p>
                            <div className='star-review'>
                                {[1,2,3,4,5].map( i =>
                                    <div key={i}>
                                        <StarRadio val={i} size={16} rating={review.serviceRating} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='rating-category'>
                            <p className='rating-item-label'>Ambience</p>
                            <div className='star-review'>
                                {[1,2,3,4,5].map( i =>
                                    <div key={i} value={i}>
                                        <StarRadio val={i} size={16} rating={review.ambienceRating} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='rating-category'>
                            <p className='rating-item-label'>Value</p>
                            <div className='star-review'>
                                {[1,2,3,4,5].map( i =>
                                    <div key={i}>
                                        <StarRadio val={i} size={16} rating={review.valueRating} />
                                    </div>
                                )}
                            </div>
                        </div>                    
                    </div>

                    <div id='review-content'>
                        <div className='apostrophe'>"<p className='profile-text'>{review.comment}</p>"</div>
                    </div>
                </div>
            }

        </div>   
    )
}

export default PastReservationItem;
