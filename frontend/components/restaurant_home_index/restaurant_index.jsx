import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import { clearSearchFilter } from '../../actions/filter_actions';
import { restaurantCuisinesList } from '../../util/general_utils'
import RestaurantSubIndex from './restaurant_subindex'

function RestaurantIndex() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const filters = useSelector(state => state.ui.filters)
    const cuisList = useRef(new Set())    
    const num = 5;

    useEffect( () => {
        dispatch(clearSearchFilter());     
        while (cuisList.current.size <= num) {
            let rand = Math.floor(Math.random() * (restaurantCuisinesList.length))
            cuisList.current.add(restaurantCuisinesList[rand])
        }
        dispatch(requestAllRestaurants(filters))
        .then(() => {
            setLoading(false)          
        })
    }, [] )   
    

    if (loading) {
            return <div className="loader"></div>
    } else {     
        const subIndices = Array.from(cuisList.current).map( (cuis, i) => 
            <RestaurantSubIndex key={i} filter='cuisine'
                category={cuis}
                navId={i}
            />
        )
        return (
            <div className="index-container">
                {subIndices}
            </div>
        )
    }
}

export default RestaurantIndex;
        
// randomRating(num) {
//     const ratingArr = Object.keys(UTIL.ratingsCategoryList)
//     const ratingList = new Set(['average'])
//     while (ratingList.size <= num) {
//         let rand = Math.floor(Math.random() * (ratingArr.length))
//         ratingList.add(ratingineArr[rand])
//     }
//     return Array.from(ratingList)
// } 

// const ratingList = this.randomRating(num)
 

// return (
//     <div className="index-container">
//         {arr.map(num => {
//             if (num%2 === 1) {
//                 return <RestaurantSubIndex filter='rating' category={ratingList[Math.floor(num/2)]} />
//             } else {
//                 return <RestaurantSubIndex filter='cuisine'
//                     restaurants={this.cuisineFilter(cuisList[num])}
//                 />
//             }
//         })}
//     </div>
// )



