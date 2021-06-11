import React from 'react'
import StarIcon from './star_icon'

function RatingIcon(props) {        

    const rate = props.rating;
    let fillArr =[];

    if (rate < 0.25 ) {
        fillArr = ['empty', 'empty', 'empty', 'empty', 'empty']
    } else if (rate < 0.75) {
        fillArr = ['half', 'empty', 'empty', 'empty', 'empty']
    } else if(rate < 1.25) {
        fillArr = ['full', 'empty', 'empty', 'empty', 'empty']
    } else if(rate < 1.75) {
        fillArr = ['full', 'half', 'empty', 'empty', 'empty']
    } else if(rate < 2.25) {
        fillArr = ['full', 'full', 'empty', 'empty', 'empty']
    } else if(rate < 2.75) {
        fillArr = ['full', 'full', 'half', 'empty', 'empty']
    } else if(rate < 3.25) {
        fillArr = ['full', 'full', 'full', 'empty', 'empty']
    } else if(rate < 3.75) {
        fillArr = ['full', 'full', 'full', 'half', 'empty']
    } else if(rate < 4.25) {
        fillArr = ['full', 'full', 'full', 'full', 'empty']
    } else if (rate < 4.25) {
        fillArr = ['full', 'full', 'full', 'full', 'half']
    } else {
        fillArr = ['full', 'full', 'full', 'full', 'full']
    }
    

    return (
        <div className='star-score'>
            <StarIcon class={fillArr[0]} />   
            <StarIcon class={fillArr[1]} />
            <StarIcon class={fillArr[2]} />
            <StarIcon class={fillArr[3]} />
            <StarIcon class={fillArr[4]} />
        </div>
    )
    
}

export default RatingIcon

