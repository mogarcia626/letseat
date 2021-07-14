import React from 'react'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';

function StarIcon(props) {

    if (props.class === 'half') {
        return (
            <div>
                <BsStarHalf className='star' size={18} />
            </div>
        )
    }else if (props.class === 'empty') {
        return (
            <div>
                <BsStar className='star' size={18} />
            </div>
        )
    } else {
        return (
            <div>
                <BsStarFill className='star' size={18} />
            </div>
        )
    }

}

export default StarIcon

