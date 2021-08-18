import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReview, editReview, resetErrors } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { dayOfTheWeek, monthArray, capitalize } from '../../util/general_utils';
import StarRadio from './star_radio';
import { FiMessageSquare } from 'react-icons/fi';

function ReviewForm() {
    const dispatch = useDispatch()
    useEffect( () => dispatch( resetErrors() ), [])
    const [reviewLoading, setReviewLoading] = useState(false)

    let {res, action, existingReview} = useSelector(state=> state.ui.modal.data)
    if (!existingReview) existingReview = {id: undefined, foodRating: 0, serviceRating: 0, ambienceRating:0, valueRating:0, comment:''}    
    existingReview.reservationId = res.id
    
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]
    
    const [review, setReview] = useState(existingReview)
    const [starSave, setStarSave] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
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

    function setValue(keyStr, val) {
        setReview( Object.assign({}, review, { [keyStr]: val } ) )
    }

    function starClick(e, keyStr, starValue) {
        e.preventDefault()
            setStarSave(starValue);
            setValue(keyStr, starValue);
    }

    function starEnter(e, keyStr, currentRating, starValue) {
        e.preventDefault()
        setStarSave(currentRating);
        setValue(keyStr, starValue);
    }

    function starLeave(e, keyStr) {
        e.preventDefault()
        setValue(keyStr, starSave)
    }
    
    function button() {
        if (reviewLoading) {
            return (
                <div className="session-modal-button" id='loading-modal-button'>
                    <div className="spinner"></div>
                </div>
            )
        } else if (action==='post') {
            return <button id='review-button'>Submit Review</button>
        } else {
            return <button id='review-button'>Update Review</button>
        }
    }

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

    const categories = ['food', 'service', 'ambience', 'value']
    const nums = [1,2,3,4,5]    

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

                    {categories.map( (cat, idx) => 
                        <div key={idx} className='rating-category'>
                            <p className='rating-item-label'>{capitalize(cat)}</p>
                            <div className='star-review'>
                                {nums.map( i =>                                    
                                    <div key={i} value={i} 
                                        onClick={(e)=> starClick(e, cat.concat('Rating'), i) }
                                        onMouseEnter={(e)=> starEnter(e, cat.concat('Rating'), review[cat.concat('Rating')], i) }
                                        onMouseLeave={(e)=> starLeave(e, cat.concat('Rating')) }
                                    >
                                        <StarRadio val={i} size={24} rating={review[cat.concat('Rating')]} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                                        
                </div>

                <div id='review-content'>

                    <div className='write-review' id='review-form-icon'>
                        <FiMessageSquare size={20} />
                        <p>Write Review</p>
                    </div>

                    <textarea id='review-textarea' value={review.comment}
                    onChange={(e)=> setValue('comment', e.currentTarget.value)} />
                    
                    {button()}

                </div>

            </form>
            {renderErrors()}
        </div>
    )
}

export default ReviewForm