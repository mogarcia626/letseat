import React from 'react'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';

function StarIcon(props) {

    if (props.class === 'half') {
        debugger
        return (
            <div>
                <BsStarHalf className='star' />
            </div>
        )
    }else if (props.class === 'empty') {
        return (
            <div>
                <BsStar className='star' />
            </div>
        )
    } else {
        return (
            <div>
                <BsStarFill className='star' />
            </div>
        )
    }

}

export default StarIcon

