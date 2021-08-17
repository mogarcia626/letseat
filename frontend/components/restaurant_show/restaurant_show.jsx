import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import {requestSingleRestaurant} from '../../actions/restaurant_actions';
import ShowBanner from './show_banner';
import RestaurantContent from './restaurant_content/restaurant_content';
import ReservationFormContainer from './reservation_form/reservation_form_container';

function RestaurantShow() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const resId = parseInt(location.pathname.split('/')[2])

    useEffect( ()=> {
        dispatch(requestSingleRestaurant(resId))
        .then( () => setLoading(false) )
    }, [])
        
    const restaurant = useSelector(state => state.entities.restaurants[resId])
    const reviews = useSelector(state => state.entities.reviews)

    if (loading) {
        return <div className="loader"></div>
    } else {
        return (
            <div id='restaurant-show'>
                <ShowBanner
                    cuisine={restaurant.cuisine}
                />
                <div id='show-content'>
                    <RestaurantContent 
                        restaurant={restaurant}
                        reviews={reviews}
                    />
                    <ReservationFormContainer
                        restaurantId={resId}
                        schedule={restaurant.schedule}
                    />                        
                </div>

            </div>
        )        
    }
}

export default RestaurantShow;