import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

function StarRadio({ val, rating, setRating, setStarSave, starSave }) {
    let star = <BsStar size={24} />
    if (rating >= val) star = <BsStarFill size={24} />

    return (
        <div className='star' id='star-radio'>
            {star}
        </div>
    )
}

export default StarRadio