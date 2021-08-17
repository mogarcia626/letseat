import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantIndexItem from './index_item/restaurant_index_item';

function RestaurantSubIndex({category, filter, navId}) {
    const restaurants = useSelector(state => state.entities.restaurants)

    function cuisineFilter() {
        let restaurantList = Object.values(restaurants).filter(rest => (
            rest.cuisine === category)
        )        
        return (
            <div className='sub-index-container'>
                <p className='sub-index-title'>
                    {category}
                </p>

                <hr className="solid" />

                <div className='sub-index-grid' id={`scroll-to-${navId}`}>
                {restaurantList.map((restaurant, i) => {
                    return (
                        <RestaurantIndexItem
                        key={i}
                        restaurant={ restaurant }
                        />
                    )
                })}
                </div>
            </div>
        )
    }

    function scroll(e) {
        let subIdx = document.getElementById(`scroll-to-${navId}`);
        subIdx.scrollLeft += parseInt(e.target.value);
    };
    
    function components() {
        switch (filter) {
            case 'cuisine':
                return cuisineFilter();
            // case 'rating':
            //     return ratingsFilter()              
            //     break;        
            default:
                break;
        }
    }

    return(
        <div className='sub-index-container'>
            <button className='scroll-left' value={-1000} onClick={()=>scroll()}>
                ❮
            </button>
            <button className='scroll-right' value={1000} onClick={()=>scroll()}>
                ❯
            </button>
            {components()}                
        </div>
    )
}

export default RestaurantSubIndex;

// ratingsFilter() {
//         let restaurantList = restaurants.filter(rest => (
//             rest.cuisine === category)
//         )
//         return (
//             <div className='sub-index-container'>

//                 <p className='sub-index-title'>
//                     {category}
//                 </p>

//                 <hr className="solid" />

//                 <div className='sub-index-grid'>
//                 {restaurantList.map((restaurant, i) => {
//                     return (
//                         <RestaurantIndexItem
//                         key={i}
//                         restaurant={ restaurant }
//                         />
//                     )
//                 })}
//                 </div>
//             </div>
//         )
//     }