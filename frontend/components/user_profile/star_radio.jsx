import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

function StarRadio({ val, rating, setRating, setStarSave, starSave }) {
    let star = <BsStar size={20} />
    if (rating >= val) star = <BsStarFill size={20} />

    return (
        <div>
            {star}
        </div>
    )
}

export default StarRadio