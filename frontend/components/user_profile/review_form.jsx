import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReview, resetErrors } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { dayOfTheWeek, monthArray } from '../../util/general_utils';
import StarRadio from './star_radio';
import { FiMessageSquare } from 'react-icons/fi';

function ReviewForm() {
    const dispatch = useDispatch()
    useEffect( () => dispatch(resetErrors()), [])
    const [loading, setLoading] = useState(false)

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

    const res = useSelector(state=> state.ui.modal.data)
    const day = dayOfTheWeek(res.year, res.month, res.day)
    const month = monthArray[res.month]

    const [food_rating, setFoodRating] = useState(0)
    const [service_rating, setServiceRating] = useState(0)
    const [ambience_rating, setAmbienceRating] = useState(0)
    const [value_rating, setvalueRating] = useState(0)
    const [starSave, setStarSave] = useState(0)
    const [comment, setComment] = useState('')

    
    function handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state )
        setLoading(true)
        dispatch(createReview(review)).then(
            dispatch(closeModal()),
            setLoading(false)
        )        
    }

    function starClick(i) {
        setStarSave(food_rating);
        setFoodRating(i);
    }

    function starEnter(i) {
        setStarSave(food_rating);
        setFoodRating(i);
    }

    function starLeave() {setFoodRating(starSave)}

    return (
        <div id='review-form'>
            <div className='profile-reservation-item'>            
            
                <img className='profile-reservation-photo'
                    src={res.photoUrl}
                />

                <div className='profile-reservation-info'>
                    <div className='profile-restaurant-title'>
                        {res.name}
                    </div>
                    <div>
                        <p className='profile-text'>
                            {day}, {month} {res.day} {res.year} at {res.time}
                        </p>
                        <p className='profile-text'>Table for {res.partySize} people</p>
                    </div>

                    <form onSubmit={(e) => handleSubmit()}>

                        <div value={food_rating}>
                            {[1,2,3,4,5].map(i =>
                                <div key={i} value={i} 
                                    onClick={()=> starClick(i) }
                                    onMouseEnter={()=> starEnter(i) }
                                    onMouseLeave={()=> starLeave(i) }
                                >
                                    <StarRadio key={i} val={i} rating={food_rating} />
                                </div>
                            )}

                        </div>

                        <textarea rows='8' col='120' value={comment}
                        onChange={(e)=> setComment(e.currentTarget.value)} />

                    </form>
                    {/* <div className='write-review'>
                        <FiMessageSquare size={20} />
                        <p>
                            Write Review
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ReviewForm