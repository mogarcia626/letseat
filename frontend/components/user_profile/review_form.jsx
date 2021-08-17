import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReview, editReview, resetErrors } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { dayOfTheWeek, monthArray } from '../../util/general_utils';
import StarRadio from './star_radio';
import { FiMessageSquare } from 'react-icons/fi';

function ReviewForm() {
    const dispatch = useDispatch()
    useEffect( () => {
        return ()=>dispatch(resetErrors())
    }, [])
    const [reviewloading, setReviewLoading] = useState(false)

    const errors = useSelector(state=>state.errors.reviews)
    function renderErrors() {
        if (errors) {
            return (
            <ul>
                {errors.map( (err, i) => (
                    <li key={`err-${i}`}>{err}</li>
                ))}
            </ul>
            )
        } else { return null }
    }

    const res = useSelector(state=> state.ui.modal.data.res)
    const action = useSelector(state=> state.ui.modal.data.action)
    let existingReview = useSelector(state=> state.ui.modal.data.existingReview)
    if (!existingReview) existingReview = {id: null, food_rating: 0, service_rating: 0, ambience_rating:0, value_rating:0, comment:''}

    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]

    const [comment, setComment] = useState(existingReview.comment)
    const [food_rating, setFoodRating] = useState(existingReview.foodRating)
    const [service_rating, setServiceRating] = useState(existingReview.serviceRating)
    const [ambience_rating, setAmbienceRating] = useState(existingReview.ambienceRating)
    const [value_rating, setValueRating] = useState(existingReview.valueRating)
    const [starSave, setStarSave] = useState(0)
    const [reservation_id, setId] = useState(res.id)

    
    function handleSubmit(e) {
        e.preventDefault();
        const review = {
            food_rating,
            service_rating,
            ambience_rating,
            value_rating,
            comment,
            reservation_id,
            id: existingReview.id
        }
        setReviewLoading(true)

        if (action === 'post') {
            dispatch(createReview(review))
            .then( dispatch(closeModal()) )
            .fail( () => setReviewLoading(false) )
        } else if (action === 'put') {
            dispatch(editReview(review))
            .then( dispatch(closeModal()) )
            .fail( () => setReviewLoading(false) )
        }
    }

    function setValue(i, str) {
        switch (str) {
            case 'food':
                setFoodRating(i);
                break;
            case 'service':
                setServiceRating(i);
                break;
            case 'ambience':
                setAmbienceRating(i);
                break;
            case 'value':
                setValueRating(i);
                break;
            default:
                setStarSave(i);
                break;
        }
    }

    function starClick(str, rating, i) {
        setValue(rating, 'star');
        setValue(i, str);
    }

    function starEnter(str, rating, i) {
        setValue(rating, 'star');
        setValue(i, str);
    }

    function starLeave(str) {setValue(starSave, str)}

    console.log(reviewloading)
    
    return (
        <div id='review-form-container'>
            <div className='profile-reservation-item'>           
            
                <img className='profile-reservation-photo'
                    src={res.photoUrl}
                />

                <div className='profile-reservation-info'>
                    <div className='profile-restaurant-title' id='title-review-form'>
                        {res.name}
                    </div>
                    <div>
                        <p className='profile-text'>Your reservation on {day},</p>
                        <p className='profile-text'>
                            {month} {res.day} {res.year} at {res.time}
                        </p>
                        <p className='profile-text'>For a party of {res.partySize}.</p>
                    </div>
                </div>                
            </div>

            <form id='review-form' onSubmit={(e) => handleSubmit(e)}>
                <div className='rating-item-container'>
                    
                    <div className='rating-category'>
                        <p className='rating-item-label'>Food</p>
                        <div className='star-review' value={food_rating}>
                            {[1,2,3,4,5].map( i =>
                                <div key={i} value={i} 
                                onClick={()=> starClick('food', food_rating, i) }
                                onMouseEnter={()=> starEnter('food', food_rating, i) }
                                onMouseLeave={()=> starLeave('food') }>
                                    <StarRadio val={i} size={24} rating={food_rating} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='rating-category'>
                        <p className='rating-item-label'>Service</p>
                        <div className='star-review' value={service_rating}>
                            {[1,2,3,4,5].map( i =>
                                <div key={i} value={i} 
                                onClick={()=> starClick('service', service_rating, i) }
                                onMouseEnter={()=> starEnter('service', service_rating, i) }
                                onMouseLeave={()=> starLeave('service') }>
                                    <StarRadio val={i} size={24} rating={service_rating} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='rating-category'>
                        <p className='rating-item-label'>Ambience</p>
                        <div className='star-review' value={ambience_rating}>
                            {[1,2,3,4,5].map( i =>
                                <div key={i} value={i} 
                                onClick={()=> starClick('ambience', ambience_rating, i) }
                                onMouseEnter={()=> starEnter('ambience', ambience_rating, i) }
                                onMouseLeave={()=> starLeave('ambience') }>
                                    <StarRadio val={i} size={24} rating={ambience_rating} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='rating-category'>
                        <p className='rating-item-label'>Value</p>
                        <div className='star-review' value={value_rating}>
                            {[1,2,3,4,5].map( i =>
                                <div key={i} value={i} 
                                onClick={()=> starClick('value', value_rating, i) }
                                onMouseEnter={()=> starEnter('value', value_rating, i) }
                                onMouseLeave={()=> starLeave('value') }>
                                    <StarRadio val={i} size={24} rating={value_rating} />
                                </div>
                            )}
                        </div>
                    </div>                    
                </div>

                <div id='review-content'>

                    <div className='write-review' id='review-form-icon'>
                        <FiMessageSquare size={20} />
                        <p>Write Review</p>
                    </div>

                    <textarea id='review-textarea' rows='10' col='500' value={comment}
                    onChange={(e)=> setComment(e.currentTarget.value)} />
                    { (action==='post') ? 
                        <button id='review-button'>Submit Review</button>
                    :
                        <button id='review-button'>Update Review</button>
                    }
                </div>

            </form>
            {renderErrors()}
        </div>
    )
}

export default ReviewForm