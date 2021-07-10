import React from 'react';

function BarGraphRatingsSummary(props) {
    const total = props.reviewAvgs.length;
    const five = (props.reviewAvgs.filter( avg => {            
        return  avg >= 4.5        
    })).length/total
    const three = (props.reviewAvgs.filter( avg => {            
        return  (avg >= 2.5 && avg < 3.5)        
    })).length/total
    const two = props.reviewAvgs.filter( avg => {            
        return  (avg >= 1.5 && avg < 2.5)        
    })
    const one = props.reviewAvgs.filter( avg => {            
        return  avg < 1.5      
    }).length/total
    const four = 1 - (five + three + two + one)

    return(
        <div>
            <div className='bar-graph-container'>
                <p className='show-reviews-text'>5</p>
                <span className='empty-bar-graph'>
                    <div className='filled-bar-graph'
                        style={{width:five*200}}>
                    </div>
                </span>
            </div>
                <div className='bar-graph-container'>
                <p className='show-reviews-text'>4</p>
                <span className='empty-bar-graph'>
                    <div className='filled-bar-graph'
                        style={{width:four*200}}>
                    </div>
                </span>
            </div>
                <div className='bar-graph-container'>
                <p className='show-reviews-text'>3</p>
                <span className='empty-bar-graph'>
                    <div className='filled-bar-graph'
                        style={{width:three*200}}>
                    </div>
                </span>
            </div>
                <div className='bar-graph-container'>
                <p className='show-reviews-text'>2</p>
                <span className='empty-bar-graph'>
                    <div className='filled-bar-graph'
                        style={{width:two*200}}>
                    </div>
                </span>
            </div>
                <div className='bar-graph-container'>
                <p className='show-reviews-text'>1</p>
                <span className='empty-bar-graph'>
                    <div className='filled-bar-graph'
                        style={{width:one*200}}>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default BarGraphRatingsSummary