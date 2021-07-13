import React from 'react'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';
import { TiStarHalf, TiStar } from 'react-icons/ti';

function StarIcon(props) {

    if (props.class === 'half') {
        return (
            <div>
                <BsStarHalf className='star' size={18} />
                {/* <TiStarHalf className='star' size={24} /> */}
            </div>
        )
    }else if (props.class === 'empty') {
        return (
            <div>
                <BsStar className='star' size={18} />
                {/* <TiStar className='star' size={24} /> */}
            </div>
        )
    } else {
        return (
            <div>
                <BsStarFill className='star' size={18} />
                {/* <TiStar className='star' size={24} /> */}
            </div>
        )
    }

}

export default StarIcon

