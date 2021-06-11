import React from 'react';
import RatingIcon from '../restaurant_index/index_item/rating-icon'

function ShowReviews(props) {
    // reviews = { this.props.reviews }
    // ratings = { this.props.restaurant.reviewAverages }
    // debugger
    return(
        <div>
            <h2>What {props.ratings.count} people are saying</h2>
            <h3>Overall ratings and reviews</h3>
            <p>Reviews can only be made by diners who have eaten at this restaurant</p>

            <div>
                <RatingIcon rating={props.ratings.average} />
                <p>{props.ratings.average} based on recent ratings</p>
            </div>

            <div>
                <div>{props.ratings.food}</div><p>Food</p>
                <div>{props.ratings.service}</div><p>Service</p>
                <div>{props.ratings.ambience}</div><p>Ambience</p>
                <div>{props.ratings.value}</div><p>Value</p>
            </div>

            {/* {props.reviews.map((id) => { */}

            {/* //     return(
            //         <div>
            //             <div>
            //                 {id.reviewer.firstName} {id.reviewer.firstName}
            //             </div>

            //             <div>
            //                 <RatingIcon rating={(id.foodRating + id.serviceRating + id.valueRating + id.ambienceRating)/4} />
            //                 <div>
            //                     <p>Overall</p><p>{(id.foodRating + id.serviceRating + id.valueRating + id.ambienceRating) / 4}</p>
            //                     <p>Food</p><p>{id.foodRating}</p>
            //                     <p>Service</p><p>{id.serviceRating}</p>
            //                     <p>Ambience</p><p>{id.ambienceRating}</p>
            //                 </div>
            //             </div>
            //     </div>                
            //     )
            // })} */}



        </div>
    )
}

export default ShowReviews