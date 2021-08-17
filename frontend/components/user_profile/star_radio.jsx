import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

function StarRadio({ val, rating, size }) {
    let star = <BsStar size={size} />
    if (rating >= val) star = <BsStarFill size={size} />

    return (
        <div className='star' id='star-radio'>
            {star}
        </div>
    )
}

export default StarRadio