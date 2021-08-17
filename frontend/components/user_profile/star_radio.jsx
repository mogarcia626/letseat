import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

const StarRadio = ({ val, rating, size }) => (    
    <div className='star' id='star-radio'>
        {rating >= val  ? 
            <BsStarFill size={size} />
        :
            <BsStar size={size} />
        }
    </div>
)

export default StarRadio