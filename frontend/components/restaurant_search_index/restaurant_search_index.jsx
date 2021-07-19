import React from 'react';
import { useSelector } from 'react-redux'

function RestaurantSearchIndex() {
    
    const restaurants = useSelector((state) => state.entities.restaurants)
    console.log(restaurants)
    return (
        <div className='container'>
            {/* {restaurants.map((restaurant, i) => {
                return (
                    <p key={restaurant.id}>{`${i}: ${restaurant.name}`}</p>
                )
            })} */}
            TEST
        </div>
    )
};

export default RestaurantSearchIndex;


