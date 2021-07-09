import React from 'react';

function BarGraphRatingsSummary(props) {
    console.log(props.reviewAvgs)
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
            <div>
                <p>5</p>
                <span className='empty-bar-graph'>
                    <span className='filled-bar-graph'
                        style={`width:${five};`}>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default BarGraphRatingsSummary